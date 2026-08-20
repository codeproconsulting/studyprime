import { useOutletContext } from "@remix-run/react";
import { ArrowRight, CheckCircle2, FileCheck, GraduationCap, ShieldCheck, PenTool, BookOpen, PlaneTakeoff } from "lucide-react";
import { services } from "~/data/siteData";
import { FAQSection } from "~/components/FAQSection";

const iconMap: Record<string, any> = {
  ShieldCheck,
  GraduationCap,
  FileCheck,
  PenTool,
  BookOpen,
  PlaneTakeoff,
};

export default function Services() {
  const { openConsultation } = useOutletContext<{ openConsultation: () => void }>() || {};

  return (
    <div>
      <section style={{ background: "linear-gradient(135deg, #1B244A 0%, #0D1329 100%)", color: "#FFFFFF", padding: "80px 0", textAlign: "center" }}>
        <div className="container">
          <div className="badge badge-gold" style={{ marginBottom: "16px" }}>Our Services</div>
          <h1 style={{ fontSize: "3rem", color: "#FFFFFF", marginBottom: "16px" }}>Complete Study Abroad Services</h1>
          <p style={{ maxWidth: "680px", margin: "0 auto", fontSize: "1.1rem", color: "rgba(255,255,255,0.85)" }}>
            End-to-end support designed to turn your study abroad aspirations into achievable milestones.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px" }}>
            {services.map((srv, idx) => {
              const IconComponent = iconMap[srv.icon] || FileCheck;
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={srv.id}
                  style={{
                    background: "#F8FAFC",
                    borderRadius: "20px",
                    padding: "48px",
                    border: "1px solid var(--border-light)",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "40px",
                    alignItems: "center",
                  }}
                >
                  <div style={{ order: isEven ? 1 : 2 }}>
                    <div className="service-icon-wrap" style={{ marginBottom: "20px" }}>
                      <IconComponent size={28} />
                    </div>
                    <h3 style={{ fontSize: "1.8rem", marginBottom: "12px" }}>{srv.title}</h3>
                    <p style={{ color: "var(--text-muted)", lineHeight: "1.7", marginBottom: "20px" }}>{srv.fullDesc}</p>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={openConsultation}
                    >
                      Inquire About This Service <ArrowRight size={16} />
                    </button>
                  </div>

                  <div style={{ order: isEven ? 2 : 1, background: "#FFFFFF", padding: "32px", borderRadius: "16px", border: "1px solid var(--border-light)" }}>
                    <h4 style={{ fontSize: "1.1rem", marginBottom: "16px", color: "var(--primary)" }}>Key Highlights Included:</h4>
                    <ul style={{ listStyle: "none" }}>
                      {srv.features.map((feat, i) => (
                        <li key={i} style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "12px", fontSize: "0.95rem" }}>
                          <CheckCircle2 size={18} color="#0066FF" style={{ flexShrink: 0 }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
