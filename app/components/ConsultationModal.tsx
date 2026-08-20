import { useState } from "react";
import { X, CheckCircle, Send } from "lucide-react";
import { siteConfig } from "~/data/siteData";

export function ConsultationModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: "United Kingdom",
    studyLevel: "Master's Degree",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulated success
    }, 500);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(15, 23, 42, 0.7)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        className="consultation-form-card"
        style={{
          maxWidth: "540px",
          width: "100%",
          position: "relative",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#64748B",
          }}
        >
          <X size={24} />
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "40px 10px" }}>
            <CheckCircle size={60} color="#10B981" style={{ margin: "0 auto 20px" }} />
            <h3 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>Thank You!</h3>
            <p style={{ color: "#64748B", marginBottom: "24px" }}>
              Your inquiry has been received. One of our senior study visa advisors will reach out to you via WhatsApp / Phone within 24 hours.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: "24px" }}>
              <span className="badge badge-gold" style={{ marginBottom: "8px" }}>
                100% Free Assessment
              </span>
              <h3 style={{ fontSize: "1.6rem", marginTop: "4px" }}>Book Free Consultation</h3>
              <p style={{ color: "#64748B", fontSize: "0.9rem" }}>
                Speak directly with certified counselors at Study Prime.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="e.g. Ali Ahmed"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    className="form-control"
                    placeholder="+92 300 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="form-control"
                    placeholder="student@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label className="form-label">Desired Destination</label>
                  <select
                    className="form-control"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  >
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                    <option value="Europe">Europe / Schengen</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Study Level</label>
                  <select
                    className="form-control"
                    value={formData.studyLevel}
                    onChange={(e) => setFormData({ ...formData, studyLevel: e.target.value })}
                  >
                    <option value="Bachelor's Degree">Undergraduate / Bachelor's</option>
                    <option value="Master's Degree">Postgraduate / Master's</option>
                    <option value="PhD / Doctorate">PhD / Research</option>
                    <option value="Diploma / Foundation">Foundation / Diploma</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Additional Information / Previous Score</label>
                <textarea
                  rows={3}
                  className="form-control"
                  placeholder="Mention your last qualification, CGPA, and IELTS/PTE score if any..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="btn btn-accent"
                style={{ width: "100%", marginTop: "10px" }}
              >
                Submit Consultation Request <Send size={16} />
              </button>

              <p style={{ fontSize: "0.75rem", color: "#94A3B8", textAlign: "center", marginTop: "12px" }}>
                Or call us directly at {siteConfig.contact.phone}
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
