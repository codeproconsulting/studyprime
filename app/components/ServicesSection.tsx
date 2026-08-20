import { Link } from "@remix-run/react";
import { ArrowRight, CheckCircle2, FileCheck, GraduationCap, ShieldCheck, PenTool, BookOpen, PlaneTakeoff } from "lucide-react";
import { services } from "~/data/siteData";

const iconMap: Record<string, any> = {
  ShieldCheck,
  GraduationCap,
  FileCheck,
  PenTool,
  BookOpen,
  PlaneTakeoff,
};

export function ServicesSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        <div className="section-header">
          <div className="badge badge-gold">Our Expertise</div>
          <h2 className="section-title">Elevating Academic Journeys Through Professional Consultancy</h2>
          <p className="section-subtitle">
            From your first counseling session to securing your visa and boarding your flight, we provide transparent, step-by-step guidance.
          </p>
        </div>

        <div className="services-grid">
          {services.map((srv) => {
            const IconComponent = iconMap[srv.icon] || FileCheck;
            return (
              <div key={srv.id} className="service-card">
                <div className="service-icon-wrap">
                  <IconComponent size={28} />
                </div>
                <h3 className="service-title">{srv.title}</h3>
                <p className="service-desc">{srv.shortDesc}</p>
                <ul className="service-features">
                  {srv.features.map((feat, i) => (
                    <li key={i}>
                      <CheckCircle2 size={15} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: "48px", textAlign: "center" }}>
          <Link to="/services" className="btn btn-primary">
            View All Services &amp; Packages <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
