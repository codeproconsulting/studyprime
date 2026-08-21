import { Link, useOutletContext } from "@remix-run/react";
import { ArrowRight, CheckCircle2, FileCheck, GraduationCap, ShieldCheck, PenTool, PlaneTakeoff, Sparkles, Layers } from "lucide-react";
import { services } from "~/data/siteData";
import { FAQSection } from "~/components/FAQSection";

const iconMap: Record<string, any> = {
  ShieldCheck,
  GraduationCap,
  FileCheck,
  PenTool,
  PlaneTakeoff,
};

export default function Services() {
  const { openConsultation } = useOutletContext<{ openConsultation: () => void }>() || {};

  return (
    <div>
      <section style={{ background: "linear-gradient(135deg, #081736 0%, #0F2A5E 100%)", color: "#FFFFFF", padding: "70px 0 60px 0", textAlign: "center" }}>
        <div className="container">
          <div className="badge badge-gold" style={{ marginBottom: "14px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
            <Layers size={14} /> Comprehensive Support
          </div>
          <h1 style={{ fontSize: "3.2rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "14px", letterSpacing: "-1px" }}>
            Our Professional Advisory Services
          </h1>
          <p style={{ maxWidth: "680px", margin: "0 auto", fontSize: "1.1rem", color: "rgba(255,255,255,0.88)", lineHeight: "1.6" }}>
            Strategic, end-to-end guidance designed to turn your study abroad aspirations into achievable international admissions and visa approvals.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "36px" }}>
            {services.map((srv, idx) => {
              const IconComponent = iconMap[srv.icon] || FileCheck;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={srv.id}
                  id={srv.id}
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "20px",
                    padding: "44px 40px",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 4px 20px rgba(8,23,54,0.04)",
                    display: "grid",
                    gridTemplateColumns: "1.1fr 0.9fr",
                    gap: "40px",
                    alignItems: "center",
                  }}
                >
                  <div style={{ order: isEven ? 1 : 2 }}>
                    <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                      <IconComponent size={26} color="#0066FF" />
                    </div>
                    <h3 style={{ fontSize: "1.85rem", fontWeight: 800, color: "var(--primary-navy)", marginBottom: "12px" }}>
                      {srv.title}
                    </h3>
                    <p style={{ color: "#64748B", lineHeight: "1.7", marginBottom: "24px", fontSize: "0.98rem" }}>
                      {srv.fullDesc}
                    </p>
                    <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                      <Link
                        to={`/services/${srv.id}`}
                        className="btn btn-primary"
                        style={{ padding: "12px 24px", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "8px" }}
                      >
                        <span>View Detailed Guide</span>
                        <ArrowRight size={15} />
                      </Link>
                      <button
                        type="button"
                        className="btn btn-outline"
                        onClick={openConsultation}
                        style={{ padding: "12px 20px", fontWeight: 600 }}
                      >
                        Inquire Free
                      </button>
                    </div>
                  </div>

                  <div style={{ order: isEven ? 2 : 1, background: "#F8FAFC", padding: "30px", borderRadius: "16px", border: "1px solid #E2E8F0" }}>
                    <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "16px", color: "var(--primary-navy)" }}>
                      Key Features &amp; Support Included:
                    </h4>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                      {srv.features.map((feat, i) => (
                        <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "0.92rem", color: "#334155" }}>
                          <CheckCircle2 size={17} color="#10B981" style={{ flexShrink: 0, marginTop: "2px" }} />
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
