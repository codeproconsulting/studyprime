import { Link } from "@remix-run/react";
import { 
  ShieldCheck, 
  GraduationCap, 
  FileCheck, 
  PenTool, 
  PlaneTakeoff, 
  ArrowRight, 
  Sparkles, 
  Layers,
  CheckCircle2
} from "lucide-react";
import { services } from "~/data/siteData";

interface ServicesSectionProps {
  onOpenConsultation?: () => void;
}

export function ServicesSection({ onOpenConsultation }: ServicesSectionProps = {}) {
  const iconMap: Record<string, any> = {
    ShieldCheck,
    GraduationCap,
    FileCheck,
    PenTool,
    PlaneTakeoff,
  };

  const accentPills: Record<string, string> = {
    "student-visa": "High Approval",
    "university-matching": "Personalized Fit",
    "admission-support": "Fast-Track Offer",
    "sop-guidance": "100% Original",
    "departure-briefing": "Complete Orientation",
  };

  return (
    <section className="vibrant-services-section">
      {/* Decorative Gradient Glows & Grid Pattern */}
      <div className="services-bg-decorations" aria-hidden="true">
        <div className="decor-glow glow-blue"></div>
        <div className="decor-glow glow-gold"></div>
        <div className="decor-grid-pattern"></div>
      </div>

      <div className="container relative-z">
        {/* Section Header with "See All Services" button */}
        <div className="services-header-top-bar">
          <div className="services-header-text-block">
            <div className="badge badge-gold-glow" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
              <Sparkles size={14} /> Comprehensive Student Solutions
            </div>
            <h2 className="vibrant-section-title">
              Our Core Advisory Services
            </h2>
            <p className="vibrant-section-subtitle">
              From personalized university course matching and admissions to embassy visa filing and pre-departure briefings.
            </p>
          </div>

          <div className="services-header-action">
            <Link to="/services" className="btn btn-vibrant-services">
              <Layers size={16} />
              <span>Explore All 5 Services</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Dynamic Services Cards Grid with Brand Color Integration */}
        <div className="vibrant-services-grid">
          {services.map((srv, idx) => {
            const IconComponent = iconMap[srv.icon] || ShieldCheck;
            const accentTag = accentPills[srv.id] || "Featured";

            return (
              <Link
                key={srv.id}
                to={`/services/${srv.id}`}
                className="vibrant-service-card group"
              >
                <div className="vibrant-card-top">
                  <div className="vibrant-icon-wrapper">
                    <IconComponent size={26} className="vibrant-icon" />
                  </div>
                  <span className="vibrant-pill-tag">{accentTag}</span>
                </div>

                <div className="vibrant-card-body">
                  <h3 className="vibrant-card-title">{srv.title}</h3>
                  <p className="vibrant-card-desc">{srv.shortDesc}</p>
                </div>

                <div className="vibrant-card-footer">
                  <span className="vibrant-learn-more">
                    <span>Learn More</span>
                    <ArrowRight size={15} className="vibrant-arrow" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
