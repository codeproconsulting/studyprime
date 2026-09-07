import { json } from "@remix-run/node";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData, useSearchParams, Form } from "@remix-run/react";
import {
  ArrowRight,
  Calendar,
  Search,
  BookOpen,
} from "lucide-react";
import {
  getWordPressPosts,
  getWordPressCategories,
  getWordPressBaseUrl,
} from "~/services/wordpress.server";
import { CANONICAL_BASE_URL, getBreadcrumbSchema } from "~/utils/seo";

export async function loader({ request, context }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("search") || "";
  const category = url.searchParams.get("category") || "all";
  const page = parseInt(url.searchParams.get("page") || "1", 10);

  const [postsData, categories] = await Promise.all([
    getWordPressPosts({
      page,
      perPage: 9,
      category: category === "all" ? undefined : category,
      search: search || undefined,
      context,
    }),
    getWordPressCategories(context),
  ]);

  const wpBaseUrl = getWordPressBaseUrl(context);

  return json({
    ...postsData,
    categories,
    searchQuery: search,
    activeCategory: category,
    wpBaseUrl,
  });
}

export const meta: MetaFunction = () => {
  return [
    { title: "Study Abroad Blog & Visa Updates | Study Prime" },
    {
      name: "description",
      content:
        "Latest study visa updates, university admission guidelines, scholarship announcements, and study abroad tips from Study Prime experts.",
    },
    { property: "og:title", content: "Study Abroad Blog & Visa Updates | Study Prime" },
    {
      property: "og:description",
      content:
        "Latest study visa updates, university admission guidelines, scholarship announcements, and study abroad tips from Study Prime experts.",
    },
    { property: "og:url", content: `${CANONICAL_BASE_URL}/blog` },
    { property: "og:type", content: "website" },
    { tagName: "link", rel: "canonical", href: `${CANONICAL_BASE_URL}/blog` },
  ];
};

export default function Blog() {
  const {
    posts,
    totalPages,
    totalPosts,
    isWordPressConnected,
    sourceUrl,
    categories,
    searchQuery,
    activeCategory,
    wpBaseUrl,
  } = useLoaderData<typeof loader>();

  const [searchParams] = useSearchParams();

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #011E3E 0%, #082A54 100%)",
          color: "#FFFFFF",
          padding: "70px 0 50px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div className="container">
          <div className="badge badge-gold" style={{ marginBottom: "16px" }}>
            Study Abroad Knowledge Hub
          </div>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              color: "#FFFFFF",
              marginBottom: "16px",
              fontWeight: 800,
            }}
          >
            Latest Insights &amp; Visa Updates
          </h1>
          <p
            style={{
              maxWidth: "680px",
              margin: "0 auto",
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.85)",
              lineHeight: "1.6",
            }}
          >
            Real-time updates on international student visa regulations, intake deadlines, SOP guidelines, and scholarship announcements.
          </p>
        </div>
      </section>

      {/* Main Filter & Listing Section */}
      <section className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container">
          
          {/* Search & Category Filter Toolbar */}
          <div
            style={{
              background: "#FFFFFF",
              padding: "24px",
              borderRadius: "20px",
              border: "1px solid var(--border-light)",
              boxShadow: "var(--shadow-sm)",
              marginBottom: "40px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {/* Search Input Form */}
            <Form method="get" style={{ display: "flex", gap: "12px", width: "100%" }}>
              {activeCategory && activeCategory !== "all" && (
                <input type="hidden" name="category" value={activeCategory} />
              )}
              <div
                style={{
                  position: "relative",
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Search
                  size={18}
                  style={{
                    position: "absolute",
                    left: "16px",
                    color: "#64748B",
                  }}
                />
                <input
                  type="text"
                  name="search"
                  defaultValue={searchQuery}
                  placeholder="Search visa updates, CAS requirements, scholarships, SOP guides..."
                  style={{
                    width: "100%",
                    padding: "14px 16px 14px 44px",
                    borderRadius: "12px",
                    border: "1px solid var(--border-light)",
                    fontSize: "0.95rem",
                    outline: "none",
                    background: "#F8FAFC",
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ padding: "0 24px" }}
              >
                Search
              </button>
            </Form>

            {/* Category Filter Pills */}
            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#64748B",
                  marginRight: "6px",
                }}
              >
                Categories:
              </span>
              {categories.map((cat) => {
                const isSelected =
                  (cat.slug === "all" && (!activeCategory || activeCategory === "all")) ||
                  activeCategory === cat.slug;

                const queryParam = cat.slug === "all" ? "" : `?category=${cat.slug}${searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ""}`;

                return (
                  <Link
                    key={cat.id}
                    to={`/blog${queryParam}`}
                    style={{
                      padding: "8px 16px",
                      borderRadius: "24px",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                      background: isSelected ? "#011E3E" : "#F1F5F9",
                      color: isSelected ? "#FFFFFF" : "#475569",
                      border: isSelected ? "1px solid #011E3E" : "1px solid transparent",
                    }}
                  >
                    {cat.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Active Search / Filter Feedback */}
          {(searchQuery || (activeCategory && activeCategory !== "all")) && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "28px",
                padding: "12px 18px",
                background: "#EFF6FF",
                borderRadius: "12px",
                border: "1px solid #DBEAFE",
              }}
            >
              <div style={{ fontSize: "0.9rem", color: "#1E40AF" }}>
                Showing results for:{" "}
                {searchQuery && <strong>"{searchQuery}"</strong>}{" "}
                {activeCategory && activeCategory !== "all" && (
                  <span>in <strong>{activeCategory}</strong></span>
                )}
                {" "}({totalPosts} {totalPosts === 1 ? "article" : "articles"} found)
              </div>
              <Link
                to="/blog"
                style={{
                  fontSize: "0.85rem",
                  color: "#2563EB",
                  textDecoration: "underline",
                  fontWeight: 600,
                }}
              >
                Clear all filters
              </Link>
            </div>
          )}

          {/* Posts Grid */}
          {posts.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                gap: "32px",
              }}
            >
              {posts.map((post) => (
                <article
                  key={post.id}
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "1px solid var(--border-light)",
                    boxShadow: "var(--shadow-sm)",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  className="blog-card"
                >
                  {/* Thumbnail: real CMS image or clean branded card banner */}
                  <Link
                    to={`/blog/${post.slug}`}
                    style={{
                      display: "block",
                      height: "220px",
                      overflow: "hidden",
                      background: "linear-gradient(135deg, #011E3E 0%, #082A54 100%)",
                      position: "relative",
                    }}
                  >
                    {post.featuredImage ? (
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.3s ease",
                        }}
                        className="blog-card-img"
                      />
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "20px",
                          color: "rgba(255,255,255,0.85)",
                          textAlign: "center",
                          background: "radial-gradient(circle at 80% 20%, rgba(224, 154, 24, 0.2) 0%, rgba(1, 30, 62, 0.95) 70%)",
                        }}
                      >
                        <BookOpen size={40} color="#E09A18" style={{ marginBottom: "12px", opacity: 0.9 }} />
                        <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "#FFFFFF" }}>
                          Study Prime Knowledge Hub
                        </span>
                      </div>
                    )}
                    <span
                      className="badge badge-gold"
                      style={{
                        position: "absolute",
                        top: "14px",
                        left: "14px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                      }}
                    >
                      {post.category}
                    </span>
                  </Link>

                  {/* Card Content */}
                  <div
                    style={{
                      padding: "24px 28px",
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Meta info */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                        marginBottom: "12px",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <Calendar size={13} /> {post.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        marginBottom: "12px",
                        lineHeight: "1.4",
                        fontWeight: 700,
                        color: "#011E3E",
                      }}
                    >
                      <Link
                        to={`/blog/${post.slug}`}
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        {post.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "0.925rem",
                        lineHeight: "1.6",
                        marginBottom: "20px",
                        flexGrow: 1,
                      }}
                    >
                      {post.excerpt.slice(0, 140)}...
                    </p>

                    {/* Action Bar */}
                    <div
                      style={{
                        paddingTop: "16px",
                        borderTop: "1px solid #F1F5F9",
                      }}
                    >
                      <Link
                        to={`/blog/${post.slug}`}
                        className="btn btn-primary"
                        style={{
                          justifyContent: "space-between",
                          padding: "10px 18px",
                          fontSize: "0.875rem",
                          width: "100%",
                        }}
                      >
                        <span>Read Full Guide</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div
              style={{
                textAlign: "center",
                padding: "80px 20px",
                background: "#FFFFFF",
                borderRadius: "24px",
                border: "1px solid var(--border-light)",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "#F1F5F9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  color: "#64748B",
                }}
              >
                <BookOpen size={30} />
              </div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "8px", color: "#011E3E" }}>
                No Articles Found
              </h3>
              <p
                style={{
                  color: "var(--text-muted)",
                  maxWidth: "460px",
                  margin: "0 auto 24px",
                }}
              >
                We couldn't find any articles matching your search query. Try searching for different keywords or explore other categories.
              </p>
              <Link to="/blog" className="btn btn-outline">
                Clear Filters &amp; View All
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Free Visa Consultation Banner */}
      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <div className="cta-banner-text">
                <h2>Have Questions About Your Study Abroad Case?</h2>
                <p>
                  Our certified counselors in Islamabad provide personalized visa guidance, university matching, and CAS file processing.
                </p>
              </div>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link
                  to="/assessment"
                  className="btn btn-accent"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none" }}
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn btn-outline-white">
                  Visit Islamabad Office
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded card hover CSS */}
      <style>{`
        .blog-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(1, 30, 62, 0.08);
        }
        .blog-card:hover .blog-card-img {
          transform: scale(1.04);
        }
      `}</style>
    </div>
  );
}
