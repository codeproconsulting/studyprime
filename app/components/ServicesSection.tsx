import { Link } from "@remix-run/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  FileCheck, 
  GraduationCap, 
  ShieldCheck, 
  PenTool, 
  BookOpen, 
  PlaneTakeoff,
  Sparkles,
  Headphones
} from "lucide-react";
import { services } from "~/data/siteData";

const iconMap: Record<string, any> = {
  ShieldCheck,
  GraduationCap,
  FileCheck,
  PenTool,
  BookOpen,
  PlaneTakeoff,
};

// Distinct theme accent colors for each service card
const serviceThemes: Record<string, { bg: string; color: string; tag: string }> = {
  "student-visa": { bg: "rgba(255, 167, 0, 0.12)", color: "#D97706", tag: "Most Requested" },
  "university-matching": { bg: "rgba(0, 102, 255, 0.10)", color: "#0066FF", tag: "Personalized" },
  "admission-support": { bg: "rgba(16, 185, 129, 0.12)", color: "#059669", tag: "Fast-Track" },
  "sop-guidance": { bg: "rgba(147, 51, 234, 0.10)", color: "#7C3AED", tag: "Expert Review" },
  "ielts-prep": { bg: "rgba(236, 72, 153, 0.10)", color: "#DB2777", tag: "High Scores" },
  "departure-briefing": { bg: "rgba(14, 165, 233, 0.10)", color: "#0284C7", tag: "Full Support" },
};

export function ServicesSection({ onOpenConsultation }: { onOpenConsultation?: () => void }) {
  return (
    <section className="services-section-wrapper section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center" style={{ maxWidth: "780px", margin: "0 auto 50px auto" }}>
          <div className="badge badge-gold" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
            <Sparkles size={14} /> Our Comprehensive Services
          </div>
          <h2 className="section-title" style={{ fontSize: "2.6rem", color: "var(--primary-navy)", lineHeight: "1.18", marginBottom: "14px" }}>
            Empowering Your International Journey At Every Milestone
          </h2>
          <p className="section-subtitle" style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: "1.65" }}>
            From initial course selection and visa documentation to mock interviews and on-arrival support, Study Prime provides end-to-end guidance with transparent, proven expertise.
          </p>
        </div>

        {/* 6-Card Services Grid */}
        <div className="services-cards-grid">
          {services.map((srv) => {
            const IconComponent = iconMap[srv.icon] || FileCheck;
            const theme = serviceThemes[srv.id] || { bg: "rgba(0, 102, 255, 0.10)", color: "#0066FF", tag: "Service" };

            return (
              <div key={srv.id} className="premium-service-card">
                {/* Top Header & Tag */}
                <div className="service-card-top">
                  <div 
                    className="service-icon-box"
                    style={{ backgroundColor: theme.bg, color: theme.color }}
                  >
                    <IconComponent size={28} strokeWidth={2.2} />
                  </div>
                  <span className="service-tag-pill" style={{ color: theme.color, backgroundColor: theme.bg }}>
                    {theme.tag}
                  </span>
                </div>

                {/* Card Title & Description */}
                <h3 className="service-card-title">{srv.title}</h3>
                <p className="service-card-desc">{srv.shortDesc}</p>

                {/* Features List */}
                <ul className="service-features-list">
                  {srv.features.map((feat, idx) => (
                    <li key={idx} className="service-feature-item">
                      <CheckCircle2 size={16} className="feature-check-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Card Action */}
                <div className="service-card-footer">
                  <button
                    type="button"
                    onClick={onOpenConsultation}
                    className="btn-service-action"
                  >
                    <span>Get Free Assessment</span>
                    <ArrowRight size={15} className="arrow-icon" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Callout */}
        <div className="services-bottom-cta">
          <div className="services-cta-inner">
            <div className="services-cta-text">
              <div className="cta-support-icon">
                <Headphones size={24} color="#FFA700" />
              </div>
              <div>
                <h4 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#081736", marginBottom: "4px" }}>
                  Not sure which service or country matches your profile?
                </h4>
                <p style={{ fontSize: "0.92rem", color: "#64748B", margin: 0 }}>
                  Speak directly with our senior visa &amp; admissions advisors for a 100% free personalized assessment.
                </p>
              </div>
            </div>
            <div className="services-cta-buttons">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onOpenConsultation}
                style={{ padding: "13px 26px" }}
              >
                Book Free Consultation <ArrowRight size={16} />
              </button>
              <Link
                to="/services"
                className="btn btn-outline"
                style={{ padding: "13px 22px" }}
              >
                View Detailed Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
