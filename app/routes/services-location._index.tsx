import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { 
  ArrowRight, 
  Building2, 
  ChevronRight,
  Compass,
  Sparkles
} from "lucide-react";
import { CANONICAL_BASE_URL } from "~/utils/seo";

export const meta: MetaFunction = () => {
  return [
    { title: "Study Abroad Services by Location - Study Prime Islamabad" },
    {
      name: "description",
      content:
        "Find Study Prime study abroad consultancy services in Islamabad. Visit our primary head office in Galleria Mall, I-8 Markaz Islamabad.",
    },
    { property: "og:title", content: "Study Abroad Services by Location - Study Prime Pakistan" },
    {
      property: "og:description",
      content:
        "Find Study Prime study abroad consultancy services in Islamabad. Visit our primary head office in Galleria Mall, I-8 Markaz Islamabad.",
    },
    { property: "og:url", content: `${CANONICAL_BASE_URL}/services-location` },
    { tagName: "link", rel: "canonical", href: `${CANONICAL_BASE_URL}/services-location` },
  ];
};

export default function ServicesLocationIndex() {
  return (
    <div className="services-location-page">
      {/* Hero Header */}
      <section
        style={{
          background: "linear-gradient(135deg, #011E3E 0%, #082A54 100%)",
          color: "#FFFFFF",
          padding: "70px 0 60px",
          position: "relative",
        }}
      >
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ marginBottom: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", opacity: 0.85 }}>
              <Link to="/" style={{ color: "#FFFFFF", textDecoration: "none" }}>Home</Link>
              <ChevronRight size={14} />
              <span style={{ color: "var(--accent-gold, #FFB200)", fontWeight: 600 }}>Services Location</span>
            </div>
          </nav>

          <div style={{ maxWidth: "820px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255, 178, 0, 0.15)",
                border: "1px solid rgba(255, 178, 0, 0.35)",
                color: "var(--accent-gold, #FFB200)",
                padding: "6px 14px",
                borderRadius: "30px",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              <Compass size={16} /> Regional Office & Service Directory
            </div>
            <h1
              style={{
                fontSize: "clamp(2.1rem, 4vw, 3.2rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.18,
                marginBottom: "16px",
              }}
            >
              Study Prime Services by Location
            </h1>
            <p
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                color: "rgba(255, 255, 255, 0.85)",
                lineHeight: 1.6,
                maxWidth: "720px",
              }}
            >
              Select your city to explore tailored study abroad counseling, university admissions, and visa guidance.
              Visit our primary head office in <strong>Islamabad (I-8 Markaz)</strong> or connect with our advisors online.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Single Islamabad Box */}
      <section className="section-padding" style={{ backgroundColor: "#F8FAFC", minHeight: "50vh" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 40px" }}>
            <span
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "#011E3E",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Choose Your City
            </span>
            <h2 style={{ fontSize: "2.1rem", fontWeight: 800, color: "#011E3E", marginTop: "8px" }}>
              Where Are You Located?
            </h2>
            <p style={{ color: "#64748B", fontSize: "1rem", marginTop: "10px" }}>
              Click on the city box below to view localized counseling services, office details, and appointment schedules.
            </p>
          </div>

          {/* Single Islamabad Box */}
          <div style={{ maxWidth: "620px", margin: "0 auto" }}>
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                border: "2px solid #011E3E",
                boxShadow: "0 12px 32px rgba(1, 30, 62, 0.08)",
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <h3 style={{ fontSize: "1.9rem", fontWeight: 800, color: "#011E3E", margin: 0 }}>
                  Islamabad
                </h3>
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    background: "rgba(1, 30, 62, 0.08)",
                    color: "#011E3E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Building2 size={26} />
                </div>
              </div>

              <p style={{ color: "#475569", fontSize: "1.05rem", lineHeight: 1.65, margin: "0 0 28px" }}>
                Our primary head office located at Galleria Mall, I-8 Markaz offers honest counseling, university shortlisting, and end-to-end student visa support for UK, Europe, and New Zealand destinations.
              </p>

              <div>
                <Link
                  to="/services-location/islamabad"
                  className="btn btn-primary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    padding: "14px 28px",
                    fontSize: "1rem",
                    fontWeight: 700,
                    borderRadius: "10px",
                    textDecoration: "none",
                    width: "100%",
                  }}
                >
                  <span>Explore Islamabad Services</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Info Banner */}
          <div
            style={{
              maxWidth: "880px",
              margin: "50px auto 0",
              background: "linear-gradient(135deg, #011E3E 0%, #0F3866 100%)",
              borderRadius: "18px",
              padding: "32px 36px",
              color: "#FFFFFF",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ maxWidth: "560px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#FFB200", fontSize: "0.85rem", fontWeight: 700, marginBottom: "8px" }}>
                <Sparkles size={16} /> 100% Honest Profile Assessment
              </div>
              <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#FFFFFF", margin: "0 0 6px" }}>
                Can't visit our Islamabad office in person?
              </h3>
              <p style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "0.92rem", margin: 0, lineHeight: 1.5 }}>
                We provide complete video consultations on Zoom &amp; WhatsApp. Get your profile evaluated and receive an honest university shortlist within 48 hours.
              </p>
            </div>
            <div>
              <Link
                to="/assessment"
                className="btn btn-gold"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 22px",
                  fontWeight: 700,
                  borderRadius: "10px",
                  textDecoration: "none",
                }}
              >
                <span>Free Online Assessment</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
