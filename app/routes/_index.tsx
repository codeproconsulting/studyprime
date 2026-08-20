import { useOutletContext, Link } from "@remix-run/react";
import { ArrowRight, Sparkles, CheckCircle2, Globe2, ShieldCheck, Award } from "lucide-react";
import { Hero } from "~/components/Hero";
import { DestinationsSection } from "~/components/DestinationsSection";
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

      {/* 2. About Us / Vision Overview */}
      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
                <img
                  src="/Countries Background - Study Prime.jpg"
                  alt="Study Prime Consultation"
                  style={{ width: "100%", height: "420px", objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "-25px",
                  right: "-20px",
                  background: "#FFFFFF",
                  padding: "20px 24px",
                  borderRadius: "16px",
                  boxShadow: "var(--shadow-lg)",
                  border: "1px solid var(--border-light)",
                  maxWidth: "240px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                  <Award color="#FFB200" size={24} />
                  <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--primary)" }}>10+ Years</span>
                </div>
                <p style={{ fontSize: "0.825rem", color: "var(--text-muted)", margin: 0 }}>
                  Empowering international students with genuine guidance.
                </p>
              </div>
            </div>

            <div>
              <div className="badge badge-gold" style={{ marginBottom: "14px" }}>
                <Sparkles size={14} /> Who We Are
              </div>
              <h2 style={{ fontSize: "2.3rem", marginBottom: "18px" }}>
                Visa Consultancy: Making Global Dreams a Reality.
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: "1.7", marginBottom: "20px" }}>
                {siteConfig.vision}
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: "1.7", marginBottom: "28px" }}>
                {siteConfig.mission}
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "32px" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "center", fontWeight: 600, fontSize: "0.95rem" }}>
                  <CheckCircle2 color="#0066FF" size={20} />
                  <span>100% Free Assessment</span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "center", fontWeight: 600, fontSize: "0.95rem" }}>
                  <CheckCircle2 color="#0066FF" size={20} />
                  <span>Panel Universities</span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "center", fontWeight: 600, fontSize: "0.95rem" }}>
                  <CheckCircle2 color="#0066FF" size={20} />
                  <span>SOP Writing Help</span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "center", fontWeight: 600, fontSize: "0.95rem" }}>
                  <CheckCircle2 color="#0066FF" size={20} />
                  <span>Visa Mock Interviews</span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "16px" }}>
                <Link to="/about" className="btn btn-primary">
                  Learn More About Us <ArrowRight size={16} />
                </Link>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={openConsultation}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Destinations Section */}
      <DestinationsSection />

      {/* 5. Services Section */}
      <ServicesSection />

      {/* 6. Working Process Section */}
      <ProcessSection onOpenConsultation={openConsultation} />

      {/* 7. Partner Universities */}
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
