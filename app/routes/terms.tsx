import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "~/data/siteData";
import { CANONICAL_BASE_URL } from "~/utils/seo";

export const meta: MetaFunction = () => {
  return [
    { title: "Terms & Conditions | Study Prime Pakistan" },
    {
      name: "description",
      content:
        "Terms and Conditions governing educational counseling, admissions processing, and study visa assistance provided by Study Prime Pakistan.",
    },
    { property: "og:title", content: "Terms & Conditions | Study Prime Pakistan" },
    { property: "og:url", content: `${CANONICAL_BASE_URL}/terms` },
    { tagName: "link", rel: "canonical", href: `${CANONICAL_BASE_URL}/terms` },
  ];
};

export default function TermsAndConditions() {
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
            Terms of Service
          </div>
          <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", color: "#FFFFFF", marginBottom: "12px", fontWeight: 800 }}>
            Terms &amp; Conditions
          </h1>
          <p style={{ maxWidth: "680px", margin: "0 auto", fontSize: "1.05rem", color: "rgba(255,255,255,0.85)" }}>
            Study Abroad Advisory &amp; Consulting Agreement • Study Prime (PVT) Ltd.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container" style={{ maxWidth: "880px" }}>
          <div style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#1E293B" }}>
            <h2 style={{ fontSize: "1.6rem", color: "#011E3E", marginBottom: "16px" }}>1. Advisory Scope</h2>
            <p style={{ marginBottom: "20px" }}>
              Study Prime provides educational counseling, university application liaison, documentation guidance, and visa preparation support. While our experienced team boasts a 98% visa approval track record, final admission and visa granting authority rests solely with the respective foreign universities and sovereign immigration departments (e.g. UKVI, IRCC, Australian Department of Home Affairs, US Department of State).
            </p>

            <h2 style={{ fontSize: "1.6rem", color: "#011E3E", marginTop: "36px", marginBottom: "16px" }}>2. Authenticity of Documentation</h2>
            <p style={{ marginBottom: "20px" }}>
              Students and guardians are strictly obligated to furnish 100% authentic, verified, and unmanipulated academic certificates, bank statements, tax records, and IELTS/PTE scores. Study Prime maintains zero tolerance for fraudulent documentation and reserves the immediate right to terminate representation if forged paperwork is presented.
            </p>

            <h2 style={{ fontSize: "1.6rem", color: "#011E3E", marginTop: "36px", marginBottom: "16px" }}>3. University Tuition &amp; Embassy Fees</h2>
            <p style={{ marginBottom: "20px" }}>
              All university application fees, tuition deposit payments, embassy visa processing fees, NHS healthcare surcharges, and biometric appointment charges are paid directly by the student/sponsor to the official university portals and government treasury systems. Study Prime does not collect embassy visa fees in private accounts.
            </p>

            <h2 style={{ fontSize: "1.6rem", color: "#011E3E", marginTop: "36px", marginBottom: "16px" }}>4. Timelines &amp; Intakes</h2>
            <p style={{ marginBottom: "20px" }}>
              Admission intake deadlines and CAS issuance times depend entirely on university processing queues. Students are advised to initiate applications at least 3 to 6 months in advance of their intended departure semester to account for document attestation, medical tests, and visa issuance.
            </p>

            <Link to="/" className="btn btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "20px" }}>
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
