import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
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
import { CANONICAL_BASE_URL } from "~/utils/seo";

export const meta: MetaFunction = () => {
  return [
    { title: "Study Prime: Study Visa Consultant in Pakistan - Study Abroad Experts" },
    {
      name: "description",
      content:
        "Study Prime is a leading study visa consultant in Pakistan with 10+ years of experience. Providing expert guidance for university admissions and visas across UK, USA, Australia, Canada, and Europe.",
    },
    { property: "og:title", content: "Study Prime: Study Visa Consultant in Pakistan - Study Abroad Experts" },
    {
      property: "og:description",
      content:
        "Study Prime is a leading study visa consultant in Pakistan with 10+ years of experience. Providing expert guidance for university admissions and visas across UK, USA, Australia, Canada, and Europe.",
    },
    { property: "og:url", content: CANONICAL_BASE_URL },
    { property: "og:image", content: `${CANONICAL_BASE_URL}/student.webp` },
    { tagName: "link", rel: "canonical", href: CANONICAL_BASE_URL },
  ];
};

export default function Index() {
  return (
    <div>
      {/* 1. Hero Section with Attached Media */}
      <Hero />

      {/* 2. Our Services Section (Directly After Hero) */}
      <ServicesSection />

      {/* 3. Destinations Section */}
      <DestinationsSection />

      {/* 4. Top Academic Courses & Degree Programs */}
      <CoursesSection />

      {/* 5. Working Process Section */}
      <ProcessSection />

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
                <Link
                  to="/assessment"
                  className="btn btn-accent"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none" }}
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight size={16} />
                </Link>
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
