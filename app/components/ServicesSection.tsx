import { Link } from "@remix-run/react";
import { 
  ShieldCheck, 
  GraduationCap, 
  FileCheck, 
  PenTool, 
  PlaneTakeoff, 
  ArrowRight, 
  Layers
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

  return (
    <section className="vibrant-services-section">
      {/* Decorative Gradient Glows & Grid Pattern */}
      <div className="services-bg-decorations" aria-hidden="true">
        <div className="decor-glow glow-blue"></div>
        <div className="decor-glow glow-gold"></div>
        <div className="decor-grid-pattern"></div>
      </div>

      <div className="container relative-z">
        {/* Section Header */}
        <div className="services-header-top-bar">
          <div className="services-header-text-block">
            <div className="section-eyebrow" style={{ background: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}>
              <span className="eyebrow-dot" style={{ background: "#FFA700", boxShadow: "0 0 0 2px rgba(255,167,0,0.25)" }} />
              What We Offer
            </div>
            <h2 className="vibrant-section-title">
              Our Services
            </h2>
            <p className="vibrant-section-subtitle">
              From university shortlisting and admissions to visa filing and pre-departure briefings.
            </p>
          </div>

          <div className="services-header-action">
            <Link to="/services" className="btn btn-vibrant-services">
              <Layers size={16} />
              <span>Explore All Services</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Services Cards Grid with Title at the Top */}
        <div className="vibrant-services-grid">
          {services.map((srv) => {
            const IconComponent = iconMap[srv.icon] || ShieldCheck;

            return (
              <Link
                key={srv.id}
                to={`/services/${srv.id}`}
                className="vibrant-service-card group"
              >
                {/* Title at top */}
                <div className="vibrant-card-top-title-row">
                  <h3 className="vibrant-card-title">{srv.title}</h3>
                  <div className="vibrant-icon-wrapper-small">
                    <IconComponent size={22} className="vibrant-icon" />
                  </div>
                </div>

                <div className="vibrant-card-body">
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
