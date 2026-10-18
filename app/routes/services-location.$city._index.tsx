import { Link, useParams } from "@remix-run/react";
import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { 
  MapPin, 
  Phone, 
  Clock, 
  ArrowRight, 
  ChevronRight, 
  Building2,
  GraduationCap
} from "lucide-react";
import { CANONICAL_BASE_URL } from "~/utils/seo";

export const meta: MetaFunction = ({ params }) => {
  const city = (params.city || "islamabad").toLowerCase();
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  return [
    { title: `Study Abroad Consultant in ${cityName} - Services & Office Location | Study Prime` },
    {
      name: "description",
      content:
        `Explore verified study abroad services in ${cityName}. Visit Study Prime at Galleria Mall, I-8 Markaz for direct university admissions, student visas, and free profile assessments.`,
    },
    { property: "og:title", content: `Study Abroad Consultant in ${cityName} | Study Prime` },
    {
      property: "og:description",
      content:
        `Explore verified study abroad services in ${cityName}. Visit Study Prime at Galleria Mall, I-8 Markaz for direct university admissions, student visas, and free profile assessments.`,
    },
    { property: "og:url", content: `${CANONICAL_BASE_URL}/services-location/${city}` },
    { tagName: "link", rel: "canonical", href: `${CANONICAL_BASE_URL}/services-location/${city}` },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const city = (params.city || "").toLowerCase();
  return json({ city });
}

export default function ServicesCityIndex() {
  const params = useParams();
  const citySlug = (params.city || "islamabad").toLowerCase();
  const cityName = citySlug === "rawalpindi" ? "Rawalpindi & Islamabad" : "Islamabad";
  const detailLink = `/services-location/${citySlug}/study-abroad-consultant`;

  return (
    <div className="services-city-page">
      {/* City Hero */}
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
              <Link to="/services-location" style={{ color: "#FFFFFF", textDecoration: "none" }}>Services Location</Link>
              <ChevronRight size={14} />
              <span style={{ color: "var(--accent-gold, #FFB200)", fontWeight: 600 }}>{cityName}</span>
            </div>
          </nav>

          <div style={{ maxWidth: "840px" }}>
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
              <Building2 size={16} /> Islamabad Head Office &middot; Galleria Mall, I-8 Markaz
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
              Study Abroad Services in {cityName}
            </h1>
            <p
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                color: "rgba(255, 255, 255, 0.85)",
                lineHeight: 1.6,
                maxWidth: "760px",
              }}
            >
              Explore dedicated overseas education services offered directly at our Islamabad head office.
              Click on the service box below to view complete details, consultation workflows, fees transparency, and verified intake timelines.
            </p>

            {/* Quick Contact Chips */}
            <div
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                marginTop: "24px",
                paddingTop: "20px",
                borderTop: "1px solid rgba(255, 255, 255, 0.15)",
                fontSize: "0.9rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.9)" }}>
                <MapPin size={16} color="#FFB200" />
                <span>Office #F-15, 1st Floor, Galleria Mall, I-8 Markaz, Islamabad</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.9)" }}>
                <Phone size={16} color="#FFB200" />
                <span>+92 310 1193888 (WhatsApp) / +92 51 8740888</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.9)" }}>
                <Clock size={16} color="#FFB200" />
                <span>Mon–Fri 10:00–18:00, Sat 10:00–15:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Box Section */}
      <section className="section-padding" style={{ backgroundColor: "#F8FAFC", minHeight: "50vh" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 40px" }}>
            <span
              style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "#011E3E",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Available Service Guide
            </span>
            <h2 style={{ fontSize: "2.1rem", fontWeight: 800, color: "#011E3E", marginTop: "8px" }}>
              Featured Local Service for {cityName}
            </h2>
            <p style={{ color: "#64748B", fontSize: "1rem", marginTop: "10px" }}>
              Click on the service box below to open the complete detailed guide for this location.
            </p>
          </div>

          {/* Clean Study Abroad Box */}
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
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
                <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#011E3E", margin: 0 }}>
                  <Link
                    to={detailLink}
                    style={{ color: "#011E3E", textDecoration: "none" }}
                  >
                    Study Abroad Consultant in Islamabad
                  </Link>
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
                  <GraduationCap size={28} />
                </div>
              </div>

              <p
                style={{
                  color: "#475569",
                  fontSize: "1.05rem",
                  lineHeight: 1.65,
                  margin: "0 0 28px",
                }}
              >
                Not sure where to study or how to apply? We sit down with you at our Galleria Mall I-8 Markaz office, look at your grades and goals, and help you pick a course that makes sense. Then we stay with you through your application, your visa, and your move abroad — one step at a time.
              </p>

              <div>
                <Link
                  to={detailLink}
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
                  <span>Study Abroad Details Dekhein</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
