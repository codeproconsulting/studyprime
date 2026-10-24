import { json } from "@remix-run/node";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { useState } from "react";
import {
  Calendar,
  Share2,
  Check,
  MessageCircle,
  ArrowRight,
  Phone,
} from "lucide-react";
import { getWordPressPostBySlug, type WordPressPost } from "~/services/wordpress.server";
import { CANONICAL_BASE_URL, getBreadcrumbSchema } from "~/utils/seo";
import { siteConfig } from "~/data/siteData";

export async function loader({ params, context }: LoaderFunctionArgs) {
  const { slug } = params;
  if (!slug) {
    throw new Response("Blog post not found", { status: 404 });
  }

  const { post, relatedPosts, isWordPressConnected } = await getWordPressPostBySlug(slug, context);

  if (!post) {
    throw new Response("Article not found", { status: 404 });
  }

  return json({
    post,
    relatedPosts,
    isWordPressConnected,
  });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data || !data.post) {
    return [
      { title: "Article Not Found | Study Prime" },
      { name: "description", content: "The requested blog post could not be found." },
    ];
  }

  const { post } = data;
  const canonicalUrl = `${CANONICAL_BASE_URL}/blog/${post.slug}`;
  const imageUrl = post.featuredImage
    ? (post.featuredImage.startsWith("http") ? post.featuredImage : `${CANONICAL_BASE_URL}${post.featuredImage}`)
    : `${CANONICAL_BASE_URL}/studyprimelogo.png`;

  return [
    { title: `${post.title} | Study Prime Blog` },
    { name: "description", content: post.excerpt.slice(0, 160) },
    { property: "og:title", content: post.title },
    { property: "og:description", content: post.excerpt.slice(0, 160) },
    { property: "og:image", content: imageUrl },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: "article" },
    { property: "article:published_time", content: post.rawDate },
    { property: "article:modified_time", content: post.modifiedDate },
    { property: "article:section", content: post.category },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: post.title },
    { name: "twitter:description", content: post.excerpt.slice(0, 160) },
    { name: "twitter:image", content: imageUrl },
    { tagName: "link", rel: "canonical", href: canonicalUrl },
  ];
};

export default function BlogPostDetail() {
  const { post, relatedPosts, isWordPressConnected } = useLoaderData<typeof loader>();
  const [copied, setCopied] = useState(false);

  const articleUrl = typeof window !== "undefined" ? window.location.href : `${CANONICAL_BASE_URL}/blog/${post.slug}`;

  const copyToClipboard = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(articleUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Structured Data Schema.org BlogPosting
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${CANONICAL_BASE_URL}/blog/${post.slug}`,
    },
    "headline": post.title,
    "description": post.excerpt,
    "image": post.featuredImage
      ? (post.featuredImage.startsWith("http") ? post.featuredImage : `${CANONICAL_BASE_URL}${post.featuredImage}`)
      : `${CANONICAL_BASE_URL}/studyprimelogo.png`,
    "datePublished": post.rawDate,
    "dateModified": post.modifiedDate,
    "author": {
      "@type": "Person",
      "name": post.author.name,
    },
    "publisher": {
      "@type": "EducationalOrganization",
      "name": siteConfig.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${CANONICAL_BASE_URL}/studyprimelogo.png`,
      },
    },
    "articleSection": post.category,
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${post.title} - ${articleUrl}`)}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(post.title)}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`;

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header & Breadcrumbs Section */}
      <section style={{ background: "linear-gradient(135deg, #011E3E 0%, #082A54 100%)", color: "#FFFFFF", padding: "60px 0 40px" }}>
        <div className="container">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.875rem", color: "rgba(255,255,255,0.7)", marginBottom: "24px", flexWrap: "wrap" }}>
            <Link to="/" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link to="/blog" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Blog</Link>
            <span>/</span>
            <span style={{ color: "#E09A18", fontWeight: 500 }}>{post.category}</span>
          </nav>

          <div style={{ maxWidth: "880px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <span className="badge badge-gold">{post.category}</span>
            </div>

            <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", color: "#FFFFFF", lineHeight: "1.3", marginBottom: "20px", fontWeight: 800 }}>
              {post.title}
            </h1>

            {/* Author, Date, Reading Time row */}
            <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap", fontSize: "0.9rem", color: "rgba(255,255,255,0.85)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#E09A18", color: "#011E3E", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.85rem" }}>
                  {post.author.name.charAt(0)}
                </div>
                <span>{post.author.name}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Calendar size={15} />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px" }} className="blog-detail-grid">
            
            {/* Left/Main Column: Article Content */}
            <article style={{ background: "#FFFFFF", borderRadius: "24px", padding: "clamp(24px, 4vw, 44px)", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-sm)" }}>
              
              {/* Featured Image */}
              {post.featuredImage && (
                <div style={{ width: "100%", height: "clamp(260px, 40vw, 440px)", borderRadius: "16px", overflow: "hidden", marginBottom: "36px", background: "#E2E8F0" }}>
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              )}

              {/* Excerpt Lead Paragraph */}
              {post.excerpt && (
                <div style={{ padding: "18px 24px", background: "rgba(1, 30, 62, 0.03)", borderLeft: "4px solid #E09A18", borderRadius: "0 12px 12px 0", marginBottom: "36px", fontSize: "1.1rem", fontStyle: "italic", color: "#334155", lineHeight: "1.7" }}>
                  {post.excerpt}
                </div>
              )}

              {/* WordPress Rendered Content */}
              <div
                className="prose-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.8",
                  color: "#1E293B",
                }}
              />

              {/* Tags Section */}
              {post.tags && post.tags.length > 0 && (
                <div style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#64748B", marginRight: "4px" }}>Tagged:</span>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "4px 12px",
                        background: "#F1F5F9",
                        borderRadius: "20px",
                        fontSize: "0.8rem",
                        color: "#475569",
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Share Bar */}
              <div style={{ marginTop: "32px", padding: "20px", background: "#F8FAFC", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 600, color: "#011E3E" }}>
                  <Share2 size={18} />
                  <span>Share this guide:</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                  <a
                    href={whatsappShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ padding: "8px 14px", fontSize: "0.85rem", display: "inline-flex", alignItems: "center", gap: "6px" }}
                  >
                    <MessageCircle size={15} color="#25D366" />
                    WhatsApp
                  </a>
                  <a
                    href={linkedinShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ padding: "8px 14px", fontSize: "0.85rem" }}
                  >
                    LinkedIn
                  </a>
                  <a
                    href={twitterShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ padding: "8px 14px", fontSize: "0.85rem" }}
                  >
                    Twitter / X
                  </a>
                  <a
                    href={facebookShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ padding: "8px 14px", fontSize: "0.85rem" }}
                  >
                    Facebook
                  </a>
                  <button
                    onClick={copyToClipboard}
                    className="btn btn-outline"
                    style={{ padding: "8px 14px", fontSize: "0.85rem", display: "inline-flex", alignItems: "center", gap: "6px" }}
                  >
                    {copied ? <Check size={15} color="#10B981" /> : <Share2 size={15} />}
                    {copied ? "Copied!" : "Copy Link"}
                  </button>
                </div>
              </div>

              {/* Author Bio Box */}
              <div style={{ marginTop: "40px", padding: "28px", background: "linear-gradient(135deg, rgba(1, 30, 62, 0.03) 0%, rgba(224, 154, 24, 0.05) 100%)", borderRadius: "16px", border: "1px solid #E2E8F0", display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#011E3E", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", fontWeight: 700 }}>
                  {post.author.name.charAt(0)}
                </div>
                <div style={{ flex: 1, minWidth: "220px" }}>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#011E3E", marginBottom: "4px" }}>
                    Published by {post.author.name}
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "#64748B", margin: 0, lineHeight: "1.5" }}>
                    Official study visa consultants and admission advisors at Study Prime Islamabad. Guiding Pakistani students with verified admission, CAS, and visa processing procedures.
                  </p>
                </div>
              </div>
            </article>

            {/* Right/Sidebar Column */}
            <aside style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              
              {/* Free Assessment Consultation Card */}
              <div style={{ background: "linear-gradient(135deg, #011E3E 0%, #082A54 100%)", borderRadius: "20px", padding: "32px 28px", color: "#FFFFFF", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "120px", height: "120px", borderRadius: "50%", background: "rgba(224, 154, 24, 0.15)", pointerEvents: "none" }} />
                
                <span className="badge badge-gold" style={{ marginBottom: "16px" }}>Fast Track 2026 Intake</span>
                <h3 style={{ fontSize: "1.4rem", color: "#FFFFFF", marginBottom: "12px", lineHeight: "1.3" }}>
                  Need Visa or Admission Guidance?
                </h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.925rem", lineHeight: "1.6", marginBottom: "24px" }}>
                  Get your academic profile evaluated by certified advisors for UK, USA, Australia, Canada, and European universities.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <Link
                    to="/assessment"
                    className="btn btn-accent"
                    style={{ justifyContent: "center", textDecoration: "none" }}
                  >
                    <span>Book Free Assessment</span>
                    <ArrowRight size={16} />
                  </Link>

                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello Study Prime! I was reading your article "${post.title}" and would like to ask a question.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-white"
                    style={{ justifyContent: "center", display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    <MessageCircle size={16} color="#25D366" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Study Destinations Widget */}
              <div style={{ background: "#FFFFFF", borderRadius: "20px", padding: "28px", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-sm)" }}>
                <h4 style={{ fontSize: "1.1rem", marginBottom: "16px", color: "#011E3E" }}>
                  Top Study Destinations
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    { name: "Study in the United Kingdom", link: "/destinations/study-in-uk" },
                    { name: "Study in Australia", link: "/destinations/study-in-australia" },
                    { name: "Study in Canada", link: "/destinations/canada" },
                    { name: "Study in the USA", link: "/destinations/usa" },
                    { name: "Study in Europe", link: "/destinations/germany" },
                  ].map((dest) => (
                    <Link
                      key={dest.name}
                      to={dest.link}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 14px",
                        background: "#F8FAFC",
                        borderRadius: "10px",
                        color: "#1E293B",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        transition: "all 0.2s ease",
                      }}
                    >
                      <span>{dest.name}</span>
                      <ArrowRight size={14} color="#64748B" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Office Contact Info */}
              <div style={{ background: "#FFFFFF", borderRadius: "20px", padding: "28px", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-sm)" }}>
                <h4 style={{ fontSize: "1.1rem", marginBottom: "16px", color: "#011E3E" }}>
                  Study Prime Islamabad
                </h4>
                <p style={{ fontSize: "0.875rem", color: "#64748B", marginBottom: "16px", lineHeight: "1.5" }}>
                  {siteConfig.contact.address}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.875rem" }}>
                  <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`} style={{ color: "#011E3E", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
                    <Phone size={15} color="#E09A18" />
                    {siteConfig.contact.phone}
                  </a>
                  <span style={{ color: "#64748B" }}>🕒 {siteConfig.contact.timing}</span>
                </div>
              </div>

            </aside>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="section-padding" style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "36px", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <span className="badge badge-gold" style={{ marginBottom: "8px" }}>Recommended</span>
                <h2 style={{ fontSize: "2rem", color: "#011E3E" }}>Related Articles &amp; Updates</h2>
              </div>
              <Link to="/blog" className="btn btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <span>View All Posts</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px" }}>
              {relatedPosts.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "1px solid var(--border-light)",
                    boxShadow: "var(--shadow-sm)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ height: "180px", overflow: "hidden", background: "#E2E8F0" }}>
                    <img
                      src={item.featuredImage}
                      alt={item.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: "24px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <span className="badge badge-blue" style={{ width: "fit-content", marginBottom: "10px" }}>{item.category}</span>
                    <h3 style={{ fontSize: "1.15rem", marginBottom: "10px", lineHeight: "1.4" }}>
                      {item.title}
                    </h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: "1.6", marginBottom: "18px", flexGrow: 1 }}>
                      {item.excerpt.slice(0, 110)}...
                    </p>
                    <Link
                      to={`/blog/${item.slug}`}
                      className="btn btn-outline"
                      style={{ justifyContent: "space-between", fontSize: "0.85rem" }}
                    >
                      <span>Read Guide</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Embedded CSS for Prose content */}
      <style>{`
        @media (min-width: 992px) {
          .blog-detail-grid {
            grid-template-columns: 2.2fr 1fr !important;
          }
        }
        .prose-content h2 {
          font-size: 1.6rem;
          color: #011E3E;
          margin-top: 36px;
          margin-bottom: 16px;
          line-height: 1.35;
          font-weight: 700;
        }
        .prose-content h3 {
          font-size: 1.3rem;
          color: #011E3E;
          margin-top: 28px;
          margin-bottom: 12px;
          line-height: 1.4;
          font-weight: 600;
        }
        .prose-content p {
          margin-bottom: 20px;
        }
        .prose-content ul, .prose-content ol {
          margin-bottom: 24px;
          padding-left: 28px;
        }
        .prose-content li {
          margin-bottom: 10px;
        }
        .prose-content blockquote {
          border-left: 4px solid #E09A18;
          padding-left: 20px;
          margin: 28px 0;
          font-style: italic;
          color: #475569;
          background: #F8FAFC;
          padding: 16px 20px;
          border-radius: 0 8px 8px 0;
        }
        .prose-content img {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          margin: 24px 0;
        }
        .prose-content figure {
          margin: 24px 0;
        }
        .prose-content figcaption {
          font-size: 0.85rem;
          color: #64748B;
          text-align: center;
          margin-top: 8px;
        }
        .prose-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 24px 0;
        }
        .prose-content th, .prose-content td {
          border: 1px solid #E2E8F0;
          padding: 12px;
          text-align: left;
        }
        .prose-content th {
          background-color: #F1F5F9;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
