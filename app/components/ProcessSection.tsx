import { Link } from "@remix-run/react";
import { Award, CheckCircle2, FileSpreadsheet, MessageSquare, ArrowRight, Sparkles, Compass } from "lucide-react";
import { processSteps } from "~/data/siteData";

const iconMap: Record<string, any> = {
  MessageSquare,
  CheckCircle2,
  FileSpreadsheet,
  Award,
};

const stepTags: Record<string, string> = {
  "01": "Initial Discovery",
  "02": "Strategic Choice",
  "03": "Fast Submission",
  "04": "Visa Secured",
};

export function ProcessSection({ onOpenConsultation }: { onOpenConsultation?: () => void }) {
  return (
    <section className="section-padding animated-process-section">
      <div className="container">
        {/* Header */}
        <div className="section-head centered">
          <div className="section-eyebrow section-eyebrow-gold">
            <span className="eyebrow-dot" />
            <Compass size={12} />
            Proven 4-Step Methodology
          </div>
          <h2 className="section-heading">
            A Transparent,{" "}
            <span className="heading-accent">Seamless Journey</span>
          </h2>
          <span className="section-heading-underline centered" />
          <p className="section-desc" style={{ marginTop: "18px" }}>
            From your first free discovery session to landing at your dream campus abroad, our structured roadmap ensures complete clarity.
          </p>
        </div>

        {/* Process Flow Grid with Connecting Line */}
        <div className="modern-process-wrapper">
          <div className="process-timeline-line" />
          
          <div className="modern-process-grid">
            {processSteps.map((step, idx) => {
              const IconComponent = iconMap[step.icon] || Award;
              const tag = stepTags[step.step] || `Step ${step.step}`;

              return (
                <div key={step.step} className="modern-process-card" style={{ animationDelay: `${idx * 0.15}s` }}>
                  {/* Step Header */}
                  <div className="process-card-top">
                    <div className="process-step-pill">
                      <span className="process-step-num">{step.step}</span>
                    </div>
                    <span className="process-stage-badge">{tag}</span>
                  </div>

                  {/* Icon with glowing pulse ring */}
                  <div className="process-icon-wrapper">
                    <div className="icon-glow-ring" />
                    <div className="process-icon-box">
                      <IconComponent size={28} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="process-card-body">
                    <h3 className="process-card-title">{step.title}</h3>
                    <p className="process-card-desc">{step.desc}</p>
                  </div>

                  {/* Micro Progress Indicator */}
                  <div className="process-card-footer">
                    <div className="process-step-dot-line">
                      <div className="step-dot active" />
                      <div className={`step-line ${idx < processSteps.length - 1 ? "has-next" : "last-step"}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Action CTA */}
        <div className="process-bottom-cta">
          <div className="process-cta-box">
            <div className="cta-text-group">
              <span className="cta-eyebrow">
                <Sparkles size={15} color="#FFA700" /> Start With Complete Peace of Mind
              </span>
              <h4 className="cta-heading">Ready to Begin Step 01 Today?</h4>
              <p className="cta-subtext">Get your transcripts evaluated by our senior education consultants with zero obligation.</p>
            </div>
            <Link
              to="/assessment"
              className="btn btn-primary btn-process-start"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none" }}
            >
              <span>Book Free Consultation</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
