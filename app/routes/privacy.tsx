import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { ShieldCheck, ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "~/data/siteData";
import { CANONICAL_BASE_URL } from "~/utils/seo";

export const meta: MetaFunction = () => {
  return [
    { title: "Privacy Policy | Study Prime Pakistan" },
    {
      name: "description",
      content:
        "Privacy Policy for Study Prime educational consultancy. Learn how we handle student documents, visa records, and personal information with utmost security.",
    },
    { property: "og:title", content: "Privacy Policy | Study Prime Pakistan" },
    { property: "og:url", content: `${CANONICAL_BASE_URL}/privacy` },
    { tagName: "link", rel: "canonical", href: `${CANONICAL_BASE_URL}/privacy` },
  ];
};

export default function PrivacyPolicy() {
  return (
    <div>
      {/* Header */}
      <section
        style={{
          background: "linear-gradient(135deg, #011E3E 0%, #082A54 100%)",
          color: "#FFFFFF",
          padding: "70px 0 50px",
          textAlign: "center",
        }}
      >
        <div className="container">
          <div className="badge badge-gold" style={{ marginBottom: "16px" }}>
            Legal &amp; Compliance
          </div>
          <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", color: "#FFFFFF", marginBottom: "12px", fontWeight: 800 }}>
            Privacy Policy
          </h1>
          <p style={{ maxWidth: "680px", margin: "0 auto", fontSize: "1.05rem", color: "rgba(255,255,255,0.85)" }}>
            Last Updated: September 2026 • Study Prime (PVT) Ltd.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container" style={{ maxWidth: "880px" }}>
          <div style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#1E293B" }}>
            <h2 style={{ fontSize: "1.6rem", color: "#011E3E", marginBottom: "16px" }}>1. Introduction</h2>
            <p style={{ marginBottom: "20px" }}>
              At Study Prime (PVT) Ltd ("Study Prime", "we", "us", or "our"), we respect your privacy and are committed to protecting the personal information and sensitive academic documents you share with us. This Privacy Policy explains our collection, use, and disclosure practices when you visit our website, submit admission inquiries, book visa assessments, or utilize our overseas education consulting services.
            </p>

            <h2 style={{ fontSize: "1.6rem", color: "#011E3E", marginTop: "36px", marginBottom: "16px" }}>2. Information We Collect</h2>
            <p style={{ marginBottom: "12px" }}>To provide comprehensive university admissions and visa consultation, we may collect:</p>
            <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
              <li style={{ marginBottom: "8px" }}><strong>Contact Details:</strong> Full name, phone number, WhatsApp number, email address, and home address.</li>
              <li style={{ marginBottom: "8px" }}><strong>Academic Profile:</strong> Matric/O-Levels, FSc/A-Levels, Bachelor's/Master's transcripts, grades, degrees, and certificates.</li>
              <li style={{ marginBottom: "8px" }}><strong>Identification Documents:</strong> Passport copies, CNIC details, and date of birth for university portal registrations.</li>
              <li style={{ marginBottom: "8px" }}><strong>Language Proficiency:</strong> IELTS, PTE, TOEFL, or English Medium of Instruction (MOI) test scores.</li>
              <li style={{ marginBottom: "8px" }}><strong>Financial Evidence:</strong> Sponsorship declarations and financial standing documentation required for CAS and visa filing.</li>
            </ul>

            <h2 style={{ fontSize: "1.6rem", color: "#011E3E", marginTop: "36px", marginBottom: "16px" }}>3. How We Use Your Information</h2>
            <p style={{ marginBottom: "12px" }}>Your personal data is strictly utilized for the following legitimate purposes:</p>
            <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
              <li style={{ marginBottom: "8px" }}>Evaluating eligibility for degree programs and scholarships across accredited partner universities.</li>
              <li style={{ marginBottom: "8px" }}>Direct submission of admission applications to authorized university admissions offices.</li>
              <li style={{ marginBottom: "8px" }}>Structuring student visa files, Statement of Purpose (SOP) reviews, and CAS/I-20 issuance liaison.</li>
              <li style={{ marginBottom: "8px" }}>Communicating intake deadlines, visa decision updates, and interview appointment schedules.</li>
            </ul>

            <h2 style={{ fontSize: "1.6rem", color: "#011E3E", marginTop: "36px", marginBottom: "16px" }}>4. Data Protection &amp; Confidentiality</h2>
            <p style={{ marginBottom: "20px" }}>
              We implement stringent administrative and technical safeguards to prevent unauthorized access, disclosure, or alteration of student records. Your personal data is never sold, leased, or shared with third-party advertising companies. Information is shared strictly with authorized university admissions bodies, credential evaluators, and relevant immigration authorities as required for your application process.
            </p>

            <h2 style={{ fontSize: "1.6rem", color: "#011E3E", marginTop: "36px", marginBottom: "16px" }}>5. Contact Us Regarding Privacy</h2>
            <p style={{ marginBottom: "16px" }}>
              If you have any questions or wish to update or request the deletion of your personal records, please reach out to our privacy officer:
            </p>
            <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", padding: "20px 24px", borderRadius: "16px", marginBottom: "36px" }}>
              <p style={{ margin: "4px 0" }}><strong>Head Office:</strong> {siteConfig.contact.address}</p>
              <p style={{ margin: "4px 0" }}><strong>Email:</strong> {siteConfig.contact.email}</p>
              <p style={{ margin: "4px 0" }}><strong>Direct Hotline:</strong> {siteConfig.contact.phone}</p>
            </div>

            <Link to="/" className="btn btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
