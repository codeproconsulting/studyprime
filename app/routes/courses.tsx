import { useOutletContext } from "@remix-run/react";
import { BookOpen, Award, CheckCircle, ArrowRight, Laptop, Briefcase, HeartPulse, Scale, Microscope } from "lucide-react";

export default function Courses() {
  const { openConsultation } = useOutletContext<{ openConsultation: () => void }>() || {};

  const courseCategories = [
    {
      title: "Computer Science & IT",
      icon: Laptop,
      programs: ["BSc / MSc Artificial Intelligence", "Data Science & Big Data Analytics", "Cyber Security", "Software Engineering", "Cloud Computing"],
    },
    {
      title: "Business & Management",
      icon: Briefcase,
      programs: ["MBA (Master of Business Administration)", "MSc International Business", "FinTech & Banking", "Supply Chain Management", "Digital Marketing"],
    },
    {
      title: "Healthcare & Life Sciences",
      icon: HeartPulse,
      programs: ["Public Health (MPH)", "Biomedical Sciences", "Nursing & Healthcare Administration", "Pharmacology", "Health Informatics"],
    },
    {
      title: "Engineering & Technology",
      icon: Microscope,
      programs: ["Civil & Structural Engineering", "Mechanical & Automotive Systems", "Electrical & Renewable Energy", "Robotics & Automation"],
    },
    {
      title: "Law, Social Sciences & Humanities",
      icon: Scale,
      programs: ["LLM International Law", "International Relations & Diplomacy", "Psychology & Behavioral Science", "Media & Communications"],
    },
  ];

  return (
    <div>
      <section style={{ background: "linear-gradient(135deg, #1B244A 0%, #0D1329 100%)", color: "#FFFFFF", padding: "80px 0", textAlign: "center" }}>
        <div className="container">
          <div className="badge badge-gold" style={{ marginBottom: "16px" }}>Programs &amp; Degrees</div>
          <h1 style={{ fontSize: "3rem", color: "#FFFFFF", marginBottom: "16px" }}>Academic Courses &amp; Programs</h1>
          <p style={{ maxWidth: "680px", margin: "0 auto", fontSize: "1.1rem", color: "rgba(255,255,255,0.85)" }}>
            Explore in-demand degree programs across world-ranking universities with excellent post-study employment prospects.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "30px" }}>
            {courseCategories.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: "#F8FAFC",
                    padding: "36px",
                    borderRadius: "20px",
                    border: "1px solid var(--border-light)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(0, 102, 255, 0.1)", color: "#0066FF", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                      <IconComp size={24} />
                    </div>
                    <h3 style={{ fontSize: "1.4rem", marginBottom: "16px" }}>{cat.title}</h3>
                    <ul style={{ listStyle: "none", marginBottom: "24px" }}>
                      {cat.programs.map((p, i) => (
                        <li key={i} style={{ padding: "6px 0", fontSize: "0.925rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "8px" }}>
                          <CheckCircle size={15} color="#10B981" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={openConsultation}
                    style={{ width: "100%", justifyContent: "space-between" }}
                  >
                    <span>Check Entry Criteria</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
