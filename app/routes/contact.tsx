import { useState } from "react";
import type { MetaFunction } from "@remix-run/node";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "~/data/siteData";
import { CANONICAL_BASE_URL } from "~/utils/seo";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact Study Prime - Islamabad Head Office | Study Abroad Consultants" },
    {
      name: "description",
      content:
        "Contact Study Prime at Galleria Mall, I-8 Markaz, Islamabad. Call +92 310 1193888 or book an appointment for student visa and university admission counseling.",
    },
    { property: "og:title", content: "Contact Study Prime - Islamabad Head Office | Study Abroad Consultants" },
    {
      property: "og:description",
      content:
        "Contact Study Prime at Galleria Mall, I-8 Markaz, Islamabad. Call +92 310 1193888 or book an appointment for student visa and university admission counseling.",
    },
    { property: "og:url", content: `${CANONICAL_BASE_URL}/contact` },
    { tagName: "link", rel: "canonical", href: `${CANONICAL_BASE_URL}/contact` },
  ];
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section style={{ background: "linear-gradient(135deg, #011E3E 0%, #082A54 100%)", color: "#FFFFFF", padding: "80px 0", textAlign: "center" }}>
        <div className="container">
          <div className="badge badge-gold" style={{ marginBottom: "16px" }}>Get In Touch</div>
          <h1 style={{ fontSize: "3rem", color: "#FFFFFF", marginBottom: "16px" }}>Contact Study Prime</h1>
          <p style={{ maxWidth: "680px", margin: "0 auto", fontSize: "1.1rem", color: "rgba(255,255,255,0.85)" }}>
            Visit our office in Islamabad or schedule a virtual appointment with our overseas education specialists.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "60px" }}>
            {/* Left Col: Contact Info */}
            <div>
              <h2 style={{ fontSize: "2rem", marginBottom: "16px" }}>Let's Discuss Your Future</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: "1.7", marginBottom: "32px" }}>
                Whether you want to discuss university options, assess scholarship possibilities, or file your student visa, our doors are always open.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(1, 30, 62, 0.08)", color: "#011E3E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.05rem", marginBottom: "4px" }}>Islamabad Office</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>{siteConfig.contact.address}</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(255, 178, 0, 0.15)", color: "#B45309", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.05rem", marginBottom: "4px" }}>Phone Numbers</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
                      <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}>{siteConfig.contact.phone}</a> | <a href={`tel:${siteConfig.contact.altPhone.replace(/[^0-9+]/g, "")}`}>{siteConfig.contact.altPhone}</a>
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(16, 185, 129, 0.1)", color: "#10B981", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.05rem", marginBottom: "4px" }}>Email Support</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
                      <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(27, 36, 74, 0.1)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.05rem", marginBottom: "4px" }}>Office Hours</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>{siteConfig.contact.timing}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Interactive Message Form */}
            <div style={{ background: "#F8FAFC", padding: "40px", borderRadius: "20px", border: "1px solid var(--border-light)" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "60px 20px" }}>
                  <CheckCircle2 size={64} color="#10B981" style={{ margin: "0 auto 20px" }} />
                  <h3 style={{ fontSize: "1.8rem", marginBottom: "12px" }}>Message Sent!</h3>
                  <p style={{ color: "var(--text-muted)", marginBottom: "24px" }}>
                    Thank you for contacting Study Prime. Our advisory team will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div>
                  <h3 style={{ fontSize: "1.5rem", marginBottom: "8px" }}>Send An Inquiry</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "24px" }}>
                    Fill out the form below and an advisor will connect with you.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <div className="form-group">
                        <label className="form-label">Email Address *</label>
                        <input
                          type="email"
                          required
                          className="form-control"
                          placeholder="email@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          className="form-control"
                          placeholder="+92 300 1234567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Subject / Study Destination</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. UK Master's in Data Science Application"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Message *</label>
                      <textarea
                        rows={4}
                        required
                        className="form-control"
                        placeholder="Share any questions about your background, desired intake, or visa inquiries..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="btn btn-accent" style={{ width: "100%" }}>
                      Send Message <Send size={16} />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
