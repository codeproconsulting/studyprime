import { Link } from "@remix-run/react";
import { ArrowRight, Calendar, User, BookOpen } from "lucide-react";
import { blogPosts } from "~/data/siteData";

export default function Blog() {
  return (
    <div>
      <section style={{ background: "linear-gradient(135deg, #011E3E 0%, #082A54 100%)", color: "#FFFFFF", padding: "80px 0", textAlign: "center" }}>
        <div className="container">
          <div className="badge badge-gold" style={{ marginBottom: "16px" }}>Knowledge Hub</div>
          <h1 style={{ fontSize: "3rem", color: "#FFFFFF", marginBottom: "16px" }}>Latest Insights &amp; Visa Updates</h1>
          <p style={{ maxWidth: "680px", margin: "0 auto", fontSize: "1.1rem", color: "rgba(255,255,255,0.85)" }}>
            Stay updated with current international student visa regulations, intake deadlines, and scholarship advice.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "32px" }}>
            {blogPosts.map((post) => (
              <div
                key={post.id}
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
                <div style={{ height: "220px", overflow: "hidden", background: "#E2E8F0" }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                <div style={{ padding: "28px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", gap: "16px", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "12px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Calendar size={13} /> {post.date}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><User size={13} /> {post.author}</span>
                  </div>

                  <span className="badge badge-blue" style={{ width: "fit-content", marginBottom: "12px" }}>{post.category}</span>
                  <h3 style={{ fontSize: "1.3rem", marginBottom: "12px", lineHeight: "1.4" }}>{post.title}</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.925rem", lineHeight: "1.6", marginBottom: "20px", flexGrow: 1 }}>{post.excerpt}</p>

                  <Link to="/contact" className="btn btn-outline" style={{ justifyContent: "space-between" }}>
                    <span>Read Full Guide</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
