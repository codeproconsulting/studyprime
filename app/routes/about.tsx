import { useOutletContext, Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  Target, 
  Eye, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Sparkles, 
  Globe2, 
  ArrowRight,
  Navigation,
  Compass,
  FileCheck,
  GraduationCap
} from "lucide-react";
import { siteConfig } from "~/data/siteData";
import { PartnersSection } from "~/components/PartnersSection";
import { TestimonialsSection } from "~/components/TestimonialsSection";

export const meta: MetaFunction = () => {
  return [
    { title: "About Us | Study Prime - Pakistan's Trusted Study Abroad Consultants" },
    { name: "description", content: "Learn about Study Prime's mission, values, and expert visa advisory team located at Galleria Mall, I-8 Markaz, Islamabad." },
  ];
};

export default function About() {
  const { openConsultation } = useOutletContext<{ openConsultation: () => void }>() || {};

  return (
    <div className="about-page-container">
      {/* Hero Banner */}
      <section style={{ background: "linear-gradient(135deg, #1B244A 0%, #0D1329 100%)", color: "#FFFFFF", padding: "90px 0 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "3.2rem", color: "#FFFFFF", marginBottom: "18px", fontWeight: 800, lineHeight: 1.15 }}>
            Empowering Global Ambitions with Precision &amp; Integrity
          </h1>
          <p style={{ maxWidth: "720px", margin: "0 auto 36px", fontSize: "1.125rem", color: "rgba(255,255,255,0.88)", lineHeight: "1.7" }}>
            We are Islamabad's premier international education and visa advisory firm, helping students secure admissions and visas to world-ranking universities across the UK, Canada, Australia, Germany, and Europe.
          </p>

          {/* Quick Stats Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", maxWidth: "900px", margin: "0 auto" }}>
            {siteConfig.stats.map((stat, i) => (
              <div key={i} style={{ background: "rgba(255, 255, 255, 0.08)", backdropFilter: "blur(10px)", padding: "20px", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.15)" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#FFA700" }}>{stat.value}</div>
                <div style={{ fontSize: "0.9rem", color: "#E2E8F0", marginTop: "4px" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story & Core Philosophy */}
      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "50px", alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "2.4rem", color: "var(--primary-navy)", fontWeight: 800, marginBottom: "20px", lineHeight: "1.2" }}>
                We Don't Just File Applications — We Build Careers
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "18px" }}>
                Study Prime was founded on a simple yet unwavering principle: <strong>100% honesty, zero false promises, and transparent end-to-end guidance</strong>. Navigating international admissions, university eligibility, CAS letters, and embassy visa requirements can be daunting.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "28px" }}>
                Our experienced advisors treat every student's application as a bespoke project. From matching your academic credentials with in-demand global disciplines to structuring ironclad financial and SOP files, we maximize your approval rate and prepare you for a flourishing international career.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--primary-navy)", fontWeight: 700 }}>
                  <CheckCircle2 size={18} color="#10B981" />
                  <span>Direct Panel Universities</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--primary-navy)", fontWeight: 700 }}>
                  <CheckCircle2 size={18} color="#10B981" />
                  <span>Fast Offer Turnaround</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--primary-navy)", fontWeight: 700 }}>
                  <CheckCircle2 size={18} color="#10B981" />
                  <span>Mock Visa Interviews</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--primary-navy)", fontWeight: 700 }}>
                  <CheckCircle2 size={18} color="#10B981" />
                  <span>SOP &amp; Document Polish</span>
                </div>
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{ background: "linear-gradient(135deg, #0B1B3A, #0066FF)", padding: "40px", borderRadius: "24px", color: "#FFFFFF", boxShadow: "0 20px 40px rgba(11, 27, 58, 0.15)" }}>
                <div style={{ display: "inline-flex", padding: "10px 16px", borderRadius: "50px", background: "rgba(255, 167, 0, 0.2)", color: "#FFA700", fontWeight: 700, fontSize: "0.85rem", marginBottom: "20px" }}>
                  <ShieldCheck size={16} style={{ marginRight: "6px" }} /> Authorized Advisory
                </div>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "14px" }}>
                  Dedicated to Your International Success
                </h3>
                <p style={{ color: "rgba(255, 255, 255, 0.85)", lineHeight: "1.7", fontSize: "0.95rem", marginBottom: "24px" }}>
                  "Our motto is that we invest in your future. When you walk into our office, you receive genuine, expert consultation tailored specifically to your academic background and financial capacity."
                </p>
                <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.15)", paddingTop: "18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontWeight: 800, color: "#FFFFFF" }}>Study Prime Advisory Board</div>
                    <div style={{ fontSize: "0.825rem", color: "#94A3B8" }}>Islamabad, Pakistan</div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-accent"
                    onClick={openConsultation}
                    style={{ padding: "8px 18px", fontSize: "0.85rem" }}
                  >
                    Consult With Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px" }}>
            <div style={{ background: "#FFFFFF", padding: "40px", borderRadius: "20px", border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
              <div style={{ width: "54px", height: "54px", borderRadius: "14px", background: "rgba(0, 102, 255, 0.1)", color: "#0066FF", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <Eye size={28} />
              </div>
              <h3 style={{ fontSize: "1.6rem", color: "var(--primary-navy)", fontWeight: 800, marginBottom: "14px" }}>Our Vision</h3>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.7", fontSize: "1rem" }}>{siteConfig.vision}</p>
            </div>

            <div style={{ background: "#FFFFFF", padding: "40px", borderRadius: "20px", border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
              <div style={{ width: "54px", height: "54px", borderRadius: "14px", background: "rgba(255, 167, 0, 0.15)", color: "#D97706", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <Target size={28} />
              </div>
              <h3 style={{ fontSize: "1.6rem", color: "var(--primary-navy)", fontWeight: 800, marginBottom: "14px" }}>Our Mission</h3>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.7", fontSize: "1rem" }}>{siteConfig.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location, Contact & Interactive Google Maps iFrame */}
      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div className="section-header-flex" style={{ marginBottom: "36px" }}>
            <div>
              <div className="badge badge-gold" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "10px" }}>
                <MapPin size={14} /> Visit Our Head Office
              </div>
              <h2 className="section-title" style={{ fontSize: "2.4rem", color: "var(--primary-navy)", fontWeight: 800 }}>
                Our Office Location &amp; Directions
              </h2>
              <p className="section-subtitle" style={{ fontSize: "1.05rem", color: "var(--text-muted)", maxWidth: "600px" }}>
                We welcome students and parents to visit our centrally located office in I-8 Markaz, Islamabad for one-on-one counseling.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1.9fr", gap: "32px", alignItems: "stretch" }}>
            {/* Contact Details Card */}
            <div style={{ background: "#0B1B3A", color: "#FFFFFF", padding: "36px", borderRadius: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "20px" }}>
                  Study Prime Islamabad
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(255, 167, 0, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <MapPin size={18} color="#FFA700" />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.85rem", color: "#94A3B8", textTransform: "uppercase", fontWeight: 700 }}>Address</div>
                      <div style={{ fontSize: "0.95rem", color: "#FFFFFF", marginTop: "2px", lineHeight: "1.5" }}>
                        {siteConfig.contact.address}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(0, 102, 255, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Clock size={18} color="#60A5FA" />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.85rem", color: "#94A3B8", textTransform: "uppercase", fontWeight: 700 }}>Office Timings</div>
                      <div style={{ fontSize: "0.95rem", color: "#FFFFFF", marginTop: "2px", lineHeight: "1.5" }}>
                        {siteConfig.contact.timing}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(16, 185, 129, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Phone size={18} color="#10B981" />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.85rem", color: "#94A3B8", textTransform: "uppercase", fontWeight: 700 }}>Direct Contact</div>
                      <div style={{ fontSize: "0.95rem", color: "#FFFFFF", marginTop: "2px" }}>
                        <a href={`tel:${siteConfig.contact.phone}`} style={{ color: "#FFFFFF", textDecoration: "none", fontWeight: 700 }}>
                          {siteConfig.contact.phone}
                        </a>
                      </div>
                      <div style={{ fontSize: "0.85rem", color: "#CBD5E1", marginTop: "2px" }}>
                        Landline: {siteConfig.contact.altPhone}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(255, 255, 255, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Mail size={18} color="#FFFFFF" />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.85rem", color: "#94A3B8", textTransform: "uppercase", fontWeight: 700 }}>Email</div>
                      <div style={{ fontSize: "0.95rem", color: "#FFFFFF", marginTop: "2px" }}>
                        <a href={`mailto:${siteConfig.contact.email}`} style={{ color: "#FFFFFF", textDecoration: "none" }}>
                          {siteConfig.contact.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "28px", borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "20px" }}>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Study+Prime+Galleria+Mall+I-8+Markaz+Islamabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <Navigation size={16} />
                  <span>Get Live Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Maps iFrame */}
            <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid #E2E8F0", minHeight: "420px", position: "relative", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}>
              <iframe
                title="Study Prime Office Location - Galleria Mall I-8 Markaz Islamabad"
                src="https://maps.google.com/maps?q=Study+Prime+Galleria+Mall+I-8+Markaz+Islamabad&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "420px", width: "100%", height: "100%", display: "block" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Partners & Student Reviews Integration */}
      <PartnersSection />
      <TestimonialsSection />
    </div>
  );
}
