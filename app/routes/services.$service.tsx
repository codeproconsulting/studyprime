import { useParams, Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { 
  ShieldCheck, 
  GraduationCap, 
  FileCheck, 
  PenTool, 
  PlaneTakeoff, 
  ArrowRight, 
  CheckCircle2, 
  PhoneCall, 
  Calendar,
  Sparkles,
  ChevronRight,
  BookOpen,
  Users,
  Award
} from "lucide-react";
import { services } from "~/data/siteData";
import { ConsultationModal } from "~/components/ConsultationModal";

export const meta: MetaFunction = ({ params }) => {
  const srv = services.find((s) => s.id === params.service) || services[0];
  return [
    { title: `${srv.title} | Study Prime Educational Consultancy` },
    { name: "description", content: srv.shortDesc },
  ];
};

export default function ServiceDetailPage() {
  const { service: serviceParam } = useParams();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const currentService = services.find((s) => s.id === serviceParam) || services[0];

  const iconMap: Record<string, any> = {
    ShieldCheck,
    GraduationCap,
    FileCheck,
    PenTool,
    PlaneTakeoff,
  };

  const IconComponent = iconMap[currentService.icon] || ShieldCheck;

  const otherServices = services.filter((s) => s.id !== currentService.id);

  return (
    <div className="service-detail-page-wrapper">
      {/* Breadcrumb Bar */}
      <div className="dest-breadcrumb-bar">
        <div className="container">
          <div className="dest-breadcrumb-inner">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/services" className="breadcrumb-link">Services</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">{currentService.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="dest-country-hero" style={{ padding: "60px 0 50px 0" }}>
        <div className="dest-country-hero-overlay" />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "840px" }}>
            <div className="badge badge-gold" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "16px" }}>
              <Sparkles size={14} /> Official Consultancy Service
            </div>
            <h1 style={{ fontSize: "3.2rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "16px", lineHeight: "1.15", letterSpacing: "-1px" }}>
              {currentService.title}
            </h1>
            <p style={{ fontSize: "1.15rem", color: "rgba(255, 255, 255, 0.88)", lineHeight: "1.65", marginBottom: "28px" }}>
              {currentService.fullDesc}
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setIsConsultationOpen(true)}
                style={{ padding: "14px 28px", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <span>Book Free Consultation</span>
                <ArrowRight size={16} />
              </button>
              <a
                href="tel:+923101193888"
                className="btn btn-outline"
                style={{ padding: "14px 24px", color: "#FFFFFF", borderColor: "rgba(255,255,255,0.4)" }}
              >
                <PhoneCall size={16} />
                <span>Call Advisor: +92 310 1193888</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section-padding" style={{ background: "#F8FAFC" }}>
        <div className="container">
          <div className="dest-layout-grid">
            {/* Left Content Column */}
            <div>
              {/* Key Deliverables Card */}
              <div style={{ background: "#FFFFFF", borderRadius: "18px", border: "1px solid #E2E8F0", padding: "36px", marginBottom: "32px", boxShadow: "0 4px 18px rgba(8,23,54,0.03)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
                  <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <IconComponent size={26} color="#0066FF" />
                  </div>
                  <div>
                    <h2 style={{ fontSize: "1.7rem", fontWeight: 800, color: "var(--primary-navy)", margin: 0 }}>
                      What's Included in This Service
                    </h2>
                    <p style={{ color: "#64748B", margin: 0, fontSize: "0.95rem" }}>
                      End-to-end professional support tailored to your academic profile
                    </p>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "24px" }}>
                  {currentService.features.map((feat, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "#F8FAFC",
                        border: "1px solid #E2E8F0",
                        borderRadius: "12px",
                        padding: "18px",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                      }}
                    >
                      <CheckCircle2 size={18} color="#10B981" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span style={{ fontSize: "0.95rem", color: "#334155", fontWeight: 600 }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step by Step Advisory Process */}
              <div style={{ background: "#FFFFFF", borderRadius: "18px", border: "1px solid #E2E8F0", padding: "36px", marginBottom: "32px" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--primary-navy)", marginBottom: "20px" }}>
                  How We Work With You
                </h3>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#081736", color: "#FFA700", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, flexShrink: 0 }}>1</div>
                    <div>
                      <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--primary-navy)", marginBottom: "4px" }}>Initial Profile Review & Eligibility Check</h4>
                      <p style={{ fontSize: "0.92rem", color: "#64748B", margin: 0, lineHeight: "1.5" }}>Our senior counselors assess your previous transcripts, budget, target destination, and career objectives to chart the most optimal pathway.</p>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#081736", color: "#FFA700", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, flexShrink: 0 }}>2</div>
                    <div>
                      <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--primary-navy)", marginBottom: "4px" }}>Document Preparation & Quality Refinement</h4>
                      <p style={{ fontSize: "0.92rem", color: "#64748B", margin: 0, lineHeight: "1.5" }}>We assist in structuring official SOPs, academic reference letters, financial affidavits, and necessary certifications strictly according to university standards.</p>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#081736", color: "#FFA700", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, flexShrink: 0 }}>3</div>
                    <div>
                      <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--primary-navy)", marginBottom: "4px" }}>Execution, Portal Submission & Follow-Up</h4>
                      <p style={{ fontSize: "0.92rem", color: "#64748B", margin: 0, lineHeight: "1.5" }}>Direct submission through our official partner university portal with prioritized processing, fee waivers, and regular status tracking until successful outcome.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div>
              <div className="dest-sticky-consult-card">
                <span className="consult-badge">Free Advisory Session</span>
                <h3 className="consult-title">Need Guidance on {currentService.title}?</h3>
                <p className="consult-desc">
                  Schedule a one-on-one session with our experienced consultants at our Islamabad office or online via Zoom.
                </p>

                <div className="consult-perks-list">
                  <div className="perk-item">
                    <CheckCircle2 size={16} color="#10B981" />
                    <span>Free eligibility assessment</span>
                  </div>
                  <div className="perk-item">
                    <CheckCircle2 size={16} color="#10B981" />
                    <span>Authorized representative</span>
                  </div>
                  <div className="perk-item">
                    <CheckCircle2 size={16} color="#10B981" />
                    <span>96%+ Visa success track record</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-primary consult-btn-full"
                  onClick={() => setIsConsultationOpen(true)}
                >
                  Book Free Assessment
                </button>

                <div className="consult-contact-row">
                  <div className="office-tag">
                    <Award size={14} color="#0066FF" />
                    <span>Islamabad Office: 2nd Floor, Galleria Mall, I-8 Markaz</span>
                  </div>
                </div>
              </div>

              {/* Other Services */}
              <div className="other-destinations-card">
                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--primary-navy)", marginBottom: "14px" }}>
                  Other Services
                </h4>
                <div className="other-dest-links">
                  {otherServices.map((os) => (
                    <Link
                      key={os.id}
                      to={`/services/${os.id}`}
                      className="other-dest-item"
                    >
                      <span>{os.title}</span>
                      <ChevronRight size={15} />
                    </Link>
                  ))}
                </div>
                <Link to="/services" className="btn-view-all-dest">
                  View All Services Overview →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
