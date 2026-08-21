import { useOutletContext, Link } from "@remix-run/react";
import { ArrowRight, Sparkles, CheckCircle2, Globe2, ShieldCheck, Award } from "lucide-react";
import { Hero } from "~/components/Hero";
import { DestinationsSection } from "~/components/DestinationsSection";
import { CoursesSection } from "~/components/CoursesSection";
import { ServicesSection } from "~/components/ServicesSection";
import { ProcessSection } from "~/components/ProcessSection";
import { PartnersSection } from "~/components/PartnersSection";
import { TestimonialsSection } from "~/components/TestimonialsSection";
import { FAQSection } from "~/components/FAQSection";
import { siteConfig } from "~/data/siteData";

export default function Index() {
  const { openConsultation } = useOutletContext<{ openConsultation: () => void }>() || {};

  return (
    <div>
      {/* 1. Hero Section with Attached Media */}
      <Hero onOpenConsultation={openConsultation} />

      {/* 2. Our Services Section (Directly After Hero) */}
      <ServicesSection onOpenConsultation={openConsultation} />

      {/* 3. Destinations Section */}
      <DestinationsSection />

      {/* 4. Top Academic Courses & Degree Programs */}
      <CoursesSection />

      {/* 5. Working Process Section */}
      <ProcessSection onOpenConsultation={openConsultation} />

      {/* 6. Partner Universities */}
      <PartnersSection />

      {/* 8. Student Testimonials */}
      <TestimonialsSection />

      {/* 9. FAQs Section */}
      <FAQSection />

      {/* 10. High Conversion CTA Banner */}
      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <div className="cta-banner-text">
                <h2>Ready To Start Your Study Abroad Journey?</h2>
                <p>
                  Book your one-on-one session with our experienced consultants at our Islamabad office or online.
                </p>
              </div>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <button
                  type="button"
                  className="btn btn-accent"
                  onClick={openConsultation}
                >
                  Get Free Consultation <ArrowRight size={16} />
                </button>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="btn btn-outline-white"
                >
                  Call Now: {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
