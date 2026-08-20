import { Award, CheckCircle2, FileSpreadsheet, MessageSquare } from "lucide-react";
import { processSteps } from "~/data/siteData";

const iconMap: Record<string, any> = {
  MessageSquare,
  CheckCircle2,
  FileSpreadsheet,
  Award,
};

export function ProcessSection({ onOpenConsultation }: { onOpenConsultation?: () => void }) {
  return (
    <section className="section-padding" style={{ backgroundColor: "#F1F5F9" }}>
      <div className="container">
        <div className="section-header">
          <div className="badge badge-blue">Working Process</div>
          <h2 className="section-title">A Clear, Transparent Path To Your Study Visa</h2>
          <p className="section-subtitle">
            We simplify complex application and immigration protocols into a seamless 4-step experience.
          </p>
        </div>

        <div className="process-grid">
          {processSteps.map((step) => {
            const IconComponent = iconMap[step.icon] || Award;
            return (
              <div key={step.step} className="process-card">
                <div className="process-num">{step.step}</div>
                <div className="process-icon-box">
                  <IconComponent size={24} />
                </div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.desc}</p>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <button
            type="button"
            className="btn btn-accent"
            onClick={onOpenConsultation}
          >
            Start Step 01: Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
