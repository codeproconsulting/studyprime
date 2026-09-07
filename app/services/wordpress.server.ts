import { blogPosts as fallbackBlogList } from "~/data/siteData";

export interface WordPressPost {
  id: number | string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  rawDate: string;
  modifiedDate: string;
  author: {
    name: string;
    avatar?: string;
  };
  featuredImage: string;
  category: string;
  categorySlug: string;
  tags: string[];
  readingTime: number;
  adminEditUrl?: string;
}

export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

// In-memory cache for high performance & avoiding redundant external requests
interface CacheEntry<T> {
  data: T;
  expiry: number;
}

const cache = new Map<string, CacheEntry<any>>();
const CACHE_TTL_MS = 60 * 1000; // 60 seconds TTL

function getFromCache<T>(key: string): T | null {
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiry) {
    cache.delete(key);
    return null;
  }
  return entry.data as T;
}

function setInCache<T>(key: string, data: T, ttlMs = CACHE_TTL_MS): void {
  cache.set(key, {
    data,
    expiry: Date.now() + ttlMs,
  });
}

/**
 * Strips HTML tags and decodes common HTML entities for titles and excerpts
 */
export function sanitizeHtmlText(html: string): string {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&hellip;/g, "...")
    .replace(/&nbsp;/g, " ")
    .replace(/&#([0-9]{1,5});/gi, (match, numStr) => {
      const num = parseInt(numStr, 10);
      return String.fromCharCode(num);
    })
    .trim();
}

/**
 * Calculates estimated reading time in minutes based on content word count
 */
export function calculateReadingTime(content: string): number {
  const plainText = sanitizeHtmlText(content);
  const words = plainText.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / 200);
  return minutes > 0 ? minutes : 1;
}

/**
 * Returns formatted date string (e.g., "September 5, 2026")
 */
function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

/**
 * Returns the configured WordPress Base URL
 */
export function getWordPressBaseUrl(context?: any): string {
  const wpUrl =
    context?.cloudflare?.env?.WORDPRESS_URL ||
    (typeof process !== "undefined" && process.env?.WORDPRESS_URL) ||
    "https://cms.studyprime.pk";

  return wpUrl.trim().replace(/\/+$/, "");
}

/**
 * Fallback static post generator when WordPress is unreachable
 */
const fallbackFullArticles: Record<string, string> = {
  "complete-guide-to-uk-student-visa-process-for-pakistani-students": `
    <p>Navigating the UK student visa application process is one of the most critical steps for Pakistani students seeking world-class higher education in Britain.</p>
  `,
};

function getFallbackPosts(): WordPressPost[] {
  const defaultSlugs = [
    "complete-guide-to-uk-student-visa-process-for-pakistani-students",
    "how-to-choose-the-right-university-and-degree-for-post-study-work-rights",
    "mastering-your-statement-of-purpose-sop-with-zero-plagiarism",
  ];

  return fallbackBlogList.map((post, idx) => {
    const slug = defaultSlugs[idx] || `post-${post.id}`;
    const fullHtml = fallbackFullArticles[slug] || `<p>${post.excerpt}</p>`;

    return {
      id: post.id,
      slug,
      title: post.title,
      excerpt: post.excerpt,
      content: fullHtml,
      date: post.date,
      rawDate: new Date().toISOString(),
      modifiedDate: new Date().toISOString(),
      author: {
        name: post.author,
      },
      featuredImage: post.image,
      category: post.category,
      categorySlug: post.category.toLowerCase().replace(/\s+/g, "-"),
      tags: ["Study Abroad", "Visa Guidance", "Higher Education"],
      readingTime: calculateReadingTime(fullHtml),
      adminEditUrl: undefined,
    };
  });
}

/**
 * Normalizes a raw WordPress REST API post item
 */
function normalizeWordPressPost(item: any, wpBaseUrl: string): WordPressPost {
  const title = sanitizeHtmlText(item.title?.rendered || "Untitled Post");
  const rawExcerpt = item.excerpt?.rendered ? sanitizeHtmlText(item.excerpt.rendered) : "";
  const content = item.content?.rendered || "";
  
  // Extract excerpt: if empty, take first 180 chars of content
  const excerpt = rawExcerpt || (content ? sanitizeHtmlText(content).slice(0, 180) + "..." : "");

  // Featured Media: extract real image from WordPress
  let featuredImage = "";
  const embeddedMedia = item._embedded?.["wp:featuredmedia"]?.[0];
  if (embeddedMedia) {
    featuredImage =
      embeddedMedia.source_url ||
      embeddedMedia.media_details?.sizes?.large?.source_url ||
      embeddedMedia.media_details?.sizes?.full?.source_url ||
      embeddedMedia.media_details?.sizes?.medium_large?.source_url ||
      embeddedMedia.media_details?.sizes?.medium?.source_url ||
      "";
  }

  // If not in featured media, check for an image in the post content
  if (!featuredImage && content) {
    const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/i);
    if (imgMatch && imgMatch[1]) {
      featuredImage = imgMatch[1];
    }
  }

  // Author
  const authorName = item._embedded?.author?.[0]?.name || "Study Prime Advisory Team";
  const authorAvatar = item._embedded?.author?.[0]?.avatar_urls?.["96"] || undefined;

  // Primary Category
  const termList = item._embedded?.["wp:term"]?.[0] || [];
  const primaryTerm = termList[0];
  const category = primaryTerm?.name ? sanitizeHtmlText(primaryTerm.name) : "General Guidance";
  const categorySlug = primaryTerm?.slug || "general";

  // Tags
  const tagList = item._embedded?.["wp:term"]?.[1] || [];
  const tags = Array.isArray(tagList) ? tagList.map((t: any) => sanitizeHtmlText(t.name)) : [];

  const readingTime = calculateReadingTime(content);
  const formattedDate = formatDate(item.date);

  const adminEditUrl = wpBaseUrl ? `${wpBaseUrl}/wp-admin/post.php?post=${item.id}&action=edit` : undefined;

  return {
    id: item.id,
    slug: item.slug,
    title,
    excerpt,
    content,
    date: formattedDate,
    rawDate: item.date,
    modifiedDate: item.modified,
    author: {
      name: authorName,
      avatar: authorAvatar,
    },
    featuredImage,
    category,
    categorySlug,
    tags,
    readingTime,
    adminEditUrl,
  };
}

/**
 * Fetch paginated WordPress posts with optional category or search filters
 */
export async function getWordPressPosts(options: {
  page?: number;
  perPage?: number;
  category?: string;
  search?: string;
  context?: any;
} = {}): Promise<{
  posts: WordPressPost[];
  totalPages: number;
  totalPosts: number;
  isWordPressConnected: boolean;
  sourceUrl: string;
}> {
  const { page = 1, perPage = 12, category, search, context } = options;
  const wpBaseUrl = getWordPressBaseUrl(context);

  const cacheKey = `wp_posts_${wpBaseUrl}_p${page}_pp${perPage}_cat${category || ""}_s${search || ""}`;
  const cached = getFromCache<{
    posts: WordPressPost[];
    totalPages: number;
    totalPosts: number;
    isWordPressConnected: boolean;
    sourceUrl: string;
  }>(cacheKey);

  if (cached) {
    return cached;
  }

  try {
    const url = new URL(`${wpBaseUrl}/wp-json/wp/v2/posts`);
    url.searchParams.set("_embed", "1");
    url.searchParams.set("per_page", String(perPage));
    url.searchParams.set("page", String(page));
    url.searchParams.set("status", "publish");

    if (search && search.trim()) {
      url.searchParams.set("search", search.trim());
    }

    if (category && category !== "all") {
      if (/^\d+$/.test(category)) {
        url.searchParams.set("categories", category);
      } else {
        const categoriesList = await getWordPressCategories(context);
        const matchedCategory = categoriesList.find((c) => c.slug.toLowerCase() === category.toLowerCase());
        if (matchedCategory && matchedCategory.id > 0) {
          url.searchParams.set("categories", String(matchedCategory.id));
        }
      }
    }

    const res = await fetch(url.toString(), {
      headers: {
        Accept: "application/json",
        "User-Agent": "StudyPrimeWebsite/1.0",
      },
    });

    if (!res.ok) {
      console.warn(`[WordPress API] HTTP error ${res.status} from ${url.toString()}`);
      throw new Error(`WordPress API returned ${res.status}`);
    }

    const totalPosts = parseInt(res.headers.get("x-wp-total") || "0", 10);
    const totalPages = parseInt(res.headers.get("x-wp-totalpages") || "1", 10);
    const rawData = await res.json();

    if (!Array.isArray(rawData)) {
      throw new Error("Invalid response format from WordPress REST API");
    }

    const posts = rawData.map((item) => normalizeWordPressPost(item, wpBaseUrl));

    const result = {
      posts,
      totalPages: totalPages || 1,
      totalPosts: totalPosts || posts.length,
      isWordPressConnected: true,
      sourceUrl: wpBaseUrl,
    };

    setInCache(cacheKey, result);
    return result;
  } catch (error) {
    console.error("[WordPress API] Failed to fetch live posts, falling back to local data:", error);
    let fallback = getFallbackPosts();
    if (search && search.trim()) {
      const q = search.toLowerCase().trim();
      fallback = fallback.filter((p) => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q));
    }
    return {
      posts: fallback,
      totalPages: 1,
      totalPosts: fallback.length,
      isWordPressConnected: false,
      sourceUrl: wpBaseUrl,
    };
  }
}

/**
 * Fetch a single WordPress post by its slug
 */
export async function getWordPressPostBySlug(slug: string, context?: any): Promise<{
  post: WordPressPost | null;
  relatedPosts: WordPressPost[];
  isWordPressConnected: boolean;
}> {
  const wpBaseUrl = getWordPressBaseUrl(context);

  const cacheKey = `wp_post_${wpBaseUrl}_${slug}`;
  const cached = getFromCache<{
    post: WordPressPost | null;
    relatedPosts: WordPressPost[];
    isWordPressConnected: boolean;
  }>(cacheKey);

  if (cached) {
    return cached;
  }

  try {
    const url = new URL(`${wpBaseUrl}/wp-json/wp/v2/posts`);
    url.searchParams.set("slug", slug);
    url.searchParams.set("_embed", "1");

    const res = await fetch(url.toString(), {
      headers: {
        Accept: "application/json",
        "User-Agent": "StudyPrimeWebsite/1.0",
      },
    });

    if (!res.ok) {
      throw new Error(`WordPress API returned ${res.status}`);
    }

    const rawData = await res.json();
    if (!Array.isArray(rawData) || rawData.length === 0) {
      const fallbackList = getFallbackPosts();
      const matched = fallbackList.find((p) => p.slug === slug) || null;
      return {
        post: matched,
        relatedPosts: fallbackList.filter((p) => p.slug !== slug).slice(0, 3),
        isWordPressConnected: false,
      };
    }

    const post = normalizeWordPressPost(rawData[0], wpBaseUrl);

    // Fetch related posts
    let relatedPosts: WordPressPost[] = [];
    try {
      const relatedUrl = new URL(`${wpBaseUrl}/wp-json/wp/v2/posts`);
      relatedUrl.searchParams.set("_embed", "1");
      relatedUrl.searchParams.set("per_page", "3");
      relatedUrl.searchParams.set("exclude", String(post.id));

      const relatedRes = await fetch(relatedUrl.toString(), {
        headers: { Accept: "application/json" },
      });

      if (relatedRes.ok) {
        const relatedData = await relatedRes.json();
        if (Array.isArray(relatedData)) {
          relatedPosts = relatedData.map((item) => normalizeWordPressPost(item, wpBaseUrl));
        }
      }
    } catch {
      relatedPosts = getFallbackPosts().filter((p) => p.slug !== slug).slice(0, 3);
    }

    const result = {
      post,
      relatedPosts,
      isWordPressConnected: true,
    };

    setInCache(cacheKey, result);
    return result;
  } catch (error) {
    console.error(`[WordPress API] Failed to fetch post with slug "${slug}":`, error);
    const fallbackList = getFallbackPosts();
    const matched = fallbackList.find((p) => p.slug === slug) || null;
    return {
      post: matched,
      relatedPosts: fallbackList.filter((p) => p.slug !== slug).slice(0, 3),
      isWordPressConnected: false,
    };
  }
}

/**
 * Fetch all categories from WordPress
 */
export async function getWordPressCategories(context?: any): Promise<WordPressCategory[]> {
  const wpBaseUrl = getWordPressBaseUrl(context);

  const cacheKey = `wp_categories_${wpBaseUrl}`;
  const cached = getFromCache<WordPressCategory[]>(cacheKey);
  if (cached) return cached;

  try {
    const url = new URL(`${wpBaseUrl}/wp-json/wp/v2/categories`);
    url.searchParams.set("per_page", "50");
    url.searchParams.set("hide_empty", "true");

    const res = await fetch(url.toString(), {
      headers: { Accept: "application/json" },
    });

    if (!res.ok) throw new Error(`Failed to fetch categories: ${res.status}`);

    const rawData = await res.json();
    if (!Array.isArray(rawData)) return [];

    const categories: WordPressCategory[] = [
      { id: 0, name: "All Topics", slug: "all", count: 0 },
      ...rawData.map((c: any) => ({
        id: c.id,
        name: sanitizeHtmlText(c.name),
        slug: c.slug,
        count: c.count || 0,
      })),
    ];

    setInCache(cacheKey, categories, 5 * 60 * 1000);
    return categories;
  } catch (error) {
    console.error("[WordPress API] Could not fetch categories:", error);
    return [
      { id: 0, name: "All Topics", slug: "all", count: 3 },
      { id: 1, name: "Study Visa", slug: "study-visa", count: 1 },
      { id: 2, name: "Career Guidance", slug: "career-guidance", count: 1 },
      { id: 3, name: "Admissions", slug: "admissions", count: 1 },
    ];
  }
}

/**
 * Fetch all post slugs for dynamic sitemap generation
 */
export async function getAllPostSlugs(context?: any): Promise<string[]> {
  const wpBaseUrl = getWordPressBaseUrl(context);

  const cacheKey = `wp_all_slugs_${wpBaseUrl}`;
  const cached = getFromCache<string[]>(cacheKey);
  if (cached) return cached;

  try {
    const url = new URL(`${wpBaseUrl}/wp-json/wp/v2/posts`);
    url.searchParams.set("per_page", "100");
    url.searchParams.set("_fields", "slug");
    url.searchParams.set("status", "publish");

    const res = await fetch(url.toString(), {
      headers: { Accept: "application/json" },
    });

    if (!res.ok) throw new Error(`Slugs API returned ${res.status}`);

    const rawData = await res.json();
    if (Array.isArray(rawData)) {
      const slugs = rawData.map((item: any) => item.slug).filter(Boolean);
      setInCache(cacheKey, slugs, 10 * 60 * 1000);
      return slugs;
    }
  } catch (err) {
    console.error("[WordPress API] Failed to fetch all slugs for sitemap:", err);
  }

  return getFallbackPosts().map((p) => p.slug);
}
