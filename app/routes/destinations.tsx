import { useOutletContext } from "@remix-run/react";
import { ArrowRight, Check, MapPin, Building2, GraduationCap } from "lucide-react";
import { destinations } from "~/data/siteData";

export default function Destinations() {
  const { openConsultation } = useOutletContext<{ openConsultation: () => void }>() || {};

  return (
    <div>
      <section style={{ background: "linear-gradient(135deg, #1B244A 0%, #0D1329 100%)", color: "#FFFFFF", padding: "80px 0", textAlign: "center" }}>
        <div className="container">
          <div className="badge badge-gold" style={{ marginBottom: "16px" }}>Study Abroad Hubs</div>
          <h1 style={{ fontSize: "3rem", color: "#FFFFFF", marginBottom: "16px" }}>Popular Study Destinations</h1>
          <p style={{ maxWidth: "680px", margin: "0 auto", fontSize: "1.1rem", color: "rgba(255,255,255,0.85)" }}>
            Explore countries, post-study work rights, top accredited universities, and admission criteria.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px" }}>
            {destinations.map((dest) => (
              <div
                key={dest.id}
                style={{
                  background: "#F8FAFC",
                  borderRadius: "20px",
                  padding: "40px",
                  border: "1px solid var(--border-light)",
                  display: "grid",
                  gridTemplateColumns: "1.2fr 0.8fr",
                  gap: "40px",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                    <h2 style={{ fontSize: "2rem" }}>{dest.name}</h2>
                    {dest.flagImage && (
                      <img
                        src={dest.flagImage}
                        alt={dest.name}
                        style={{ width: "42px", height: "42px", borderRadius: "10px", objectFit: "cover" }}
                        onError={(e) => ((e.target as HTMLElement).style.display = "none")}
                      />
                    )}
                  </div>
                  <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: "1.7", marginBottom: "24px" }}>
                    {dest.description}
                  </p>

                  <h4 style={{ fontSize: "1.1rem", marginBottom: "12px", color: "var(--primary)" }}>Key Benefits:</h4>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "28px" }}>
                    {dest.keyHighlights.map((hl, i) => (
                      <div key={i} style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "0.9rem" }}>
                        <Check size={16} color="#10B981" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="btn btn-accent"
                    onClick={openConsultation}
                  >
                    Apply for {dest.name} <ArrowRight size={16} />
                  </button>
                </div>

                <div style={{ background: "#FFFFFF", padding: "28px", borderRadius: "16px", border: "1px solid var(--border-light)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                    <GraduationCap color="#0066FF" size={22} />
                    <h4 style={{ fontSize: "1.1rem", margin: 0 }}>Top Partner Universities</h4>
                  </div>
                  <ul style={{ listStyle: "none" }}>
                    {dest.popularUniversities.map((uni, i) => (
                      <li key={i} style={{ padding: "10px 0", borderBottom: "1px solid #F1F5F9", fontSize: "0.9rem", color: "var(--text-main)", display: "flex", alignItems: "center", gap: "8px" }}>
                        <Building2 size={14} color="#64748B" />
                        <span>{uni}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
