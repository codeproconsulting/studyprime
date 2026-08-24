import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "~/data/siteData";

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        <div className="section-head centered">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <HelpCircle size={12} />
            Got Questions?
          </div>
          <h2 className="section-heading">
            Frequently Asked{" "}
            <span className="heading-accent">Questions</span>
          </h2>
          <span className="section-heading-underline centered" />
          <p className="section-desc" style={{ marginTop: "16px", margin: "16px auto 0" }}>
            Find immediate answers regarding university admissions, eligibility criteria, and visa requirements.
          </p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="faq-item">
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                      flexShrink: 0,
                    }}
                  />
                </button>
                {isOpen && <div className="faq-answer">{faq.answer}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
