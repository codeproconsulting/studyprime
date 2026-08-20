import { useOutletContext } from "@remix-run/react";
import { Award, CheckCircle2, ShieldCheck, Target, Eye, Users } from "lucide-react";
import { siteConfig } from "~/data/siteData";
import { PartnersSection } from "~/components/PartnersSection";

export default function About() {
  const { openConsultation } = useOutletContext<{ openConsultation: () => void }>() || {};

  return (
    <div>
      {/* Hero Banner */}
      <section style={{ background: "linear-gradient(135deg, #1B244A 0%, #0D1329 100%)", color: "#FFFFFF", padding: "80px 0", textAlign: "center" }}>
        <div className="container">
          <div className="badge badge-gold" style={{ marginBottom: "16px" }}>About Study Prime</div>
          <h1 style={{ fontSize: "3rem", color: "#FFFFFF", marginBottom: "16px" }}>Empowering Pakistani Students Worldwide</h1>
          <p style={{ maxWidth: "680px", margin: "0 auto", fontSize: "1.1rem", color: "rgba(255,255,255,0.85)" }}>
            Discover our mission, our core advisory values, and why hundreds of students trust Study Prime for their international academic success.
          </p>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
            <div style={{ background: "#F8FAFC", padding: "40px", borderRadius: "20px", border: "1px solid var(--border-light)" }}>
              <div style={{ width: "54px", height: "54px", borderRadius: "14px", background: "rgba(0, 102, 255, 0.1)", color: "#0066FF", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <Eye size={28} />
              </div>
              <h3 style={{ fontSize: "1.6rem", marginBottom: "14px" }}>Our Vision</h3>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.7" }}>{siteConfig.vision}</p>
            </div>

            <div style={{ background: "#F8FAFC", padding: "40px", borderRadius: "20px", border: "1px solid var(--border-light)" }}>
              <div style={{ width: "54px", height: "54px", borderRadius: "14px", background: "rgba(255, 178, 0, 0.15)", color: "#B45309", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <Target size={28} />
              </div>
              <h3 style={{ fontSize: "1.6rem", marginBottom: "14px" }}>Our Mission</h3>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.7" }}>{siteConfig.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding" style={{ backgroundColor: "#F1F5F9" }}>
        <div className="container">
          <div className="section-header">
            <div className="badge badge-gold">The Study Prime Advantage</div>
            <h2 className="section-title">Why Students &amp; Parents Trust Us</h2>
            <p className="section-subtitle">
              We eliminate guesswork with structured university shortlisting, fast documentation turnarounds, and expert visa guidance.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px" }}>
            <div style={{ background: "#FFFFFF", padding: "32px", borderRadius: "16px", border: "1px solid var(--border-light)" }}>
              <ShieldCheck size={32} color="#0066FF" style={{ marginBottom: "16px" }} />
              <h4 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>Transparent Advisory</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>No hidden fees, no unrealistic promises. We provide realistic admissions and visa assessments from day one.</p>
            </div>

            <div style={{ background: "#FFFFFF", padding: "32px", borderRadius: "16px", border: "1px solid var(--border-light)" }}>
              <Award size={32} color="#FFB200" style={{ marginBottom: "16px" }} />
              <h4 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>High Visa Approval Rate</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Our advisors stay up-to-date with embassy regulations and policy shifts, ensuring high compliance and approvals.</p>
            </div>

            <div style={{ background: "#FFFFFF", padding: "32px", borderRadius: "16px", border: "1px solid var(--border-light)" }}>
              <Users size={32} color="#10B981" style={{ marginBottom: "16px" }} />
              <h4 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>Direct University Panels</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Direct communication with international admissions offices for expedited CAS issuance and offer releases.</p>
            </div>
          </div>
        </div>
      </section>

      <PartnersSection />
    </div>
  );
}
