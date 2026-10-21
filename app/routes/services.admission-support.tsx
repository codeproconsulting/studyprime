import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";
import { 
  ArrowRight, 
  PhoneCall, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  Clock, 
  FileCheck, 
  FileText, 
  Layers, 
  ChevronDown, 
  Building2, 
  GraduationCap, 
  Scale, 
  Calendar, 
  DollarSign, 
  AlertCircle, 
  HelpCircle, 
  ShieldCheck,
  Check,
  AlertTriangle,
  Lock
} from "lucide-react";
import { CANONICAL_BASE_URL } from "~/utils/seo";

export const meta: MetaFunction = () => {
  const canonicalUrl = `${CANONICAL_BASE_URL}/services/admission-support`;
  const pageTitle = "Admissions & Application Support | Study Prime";
  const pageDescription =
    "Get help with university applications, offer conditions and next steps. Understand what remains outstanding before paying. Book a free Study Prime assessment.";

  return [
    { title: pageTitle },
    { name: "description", content: pageDescription },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: "website" },
    { property: "og:image", content: `${CANONICAL_BASE_URL}/student.webp` },
    { property: "og:image:alt", content: "University application documents and offer letter review" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: pageDescription },
    { name: "twitter:image", content: `${CANONICAL_BASE_URL}/student.webp` },
    { tagName: "link", rel: "canonical", href: canonicalUrl },
  ];
};

export default function AdmissionSupportRoute() {
  const canonicalUrl = `${CANONICAL_BASE_URL}/services/admission-support`;

  const [activeStep, setActiveStep] = useState<number | null>(null);

  const faqs = [
    {
      q: "Can you help after I have started an application?",
      a: "Discuss what has already been submitted and through which channel. Confirm whether support can continue without creating duplicate applications or conflicting representation.",
    },
    {
      q: "How long will an offer take?",
      a: "There is no fixed timeline for every application. The university, course, intake and missing information can affect the review. Treat estimated timings as estimates.",
    },
    {
      q: "Are application fees always waived?",
      a: "No. Check the exact provider, course and application channel. Only rely on a waiver once its terms are confirmed.",
    },
    {
      q: "Can you turn a conditional offer into an unconditional offer?",
      a: "The university decides whether its conditions have been met. Support can help explain the requirements and next steps, but cannot guarantee that decision.",
    },
    {
      q: "Does paying a deposit guarantee a visa?",
      a: "No. A deposit and a visa decision are separate. Review the provider's refund policy and current immigration requirements before paying.",
    },
    {
      q: "Can my parents join the assessment?",
      a: "You can discuss involving them when arranging the session. Agree what information may be shared and who makes the study decisions.",
    },
    {
      q: "What will the support cost?",
      a: "The initial assessment is free. Ask for the follow-on scope and any charges in writing. University charges should be explained separately from service fees.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: "Admissions & Application Support",
        url: canonicalUrl,
        serviceType: "University application support",
        description:
          "Get help with university applications, offer conditions and next steps. Understand what remains outstanding before paying. Book a free Study Prime assessment.",
        provider: {
          "@type": "Organization",
          name: "Study Prime",
          url: `${CANONICAL_BASE_URL}/`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${CANONICAL_BASE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${CANONICAL_BASE_URL}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Admissions & Application Support",
            item: canonicalUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="dest-page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <style>{`
        /* ── HERO SECTION ENHANCEMENT ── */
        .sp-hero-master {
          position: relative;
          background: linear-gradient(135deg, #011428 0%, #011E3E 45%, #05264E 100%);
          color: #FFFFFF;
          padding: 70px 0 85px;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .sp-hero-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 36px 36px;
          pointer-events: none;
        }

        .sp-hero-glow-orb {
          position: absolute;
          top: -10%;
          right: 5%;
          width: 550px;
          height: 550px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 160, 0, 0.15) 0%, rgba(1, 30, 62, 0) 70%);
          filter: blur(40px);
          pointer-events: none;
        }

        .sp-hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 52px;
          align-items: start;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 992px) {
          .sp-hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .sp-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 160, 0, 0.14);
          border: 1px solid rgba(255, 160, 0, 0.35);
          color: #FFA000;
          padding: 6px 16px;
          border-radius: 30px;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          margin-bottom: 22px;
          box-shadow: 0 4px 15px rgba(255, 160, 0, 0.12);
        }

        .sp-hero-title {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: clamp(2.4rem, 4.8vw, 3.8rem);
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.12;
          letter-spacing: -0.02em;
          margin-bottom: 22px;
        }

        .sp-hero-title span {
          color: #FFA000;
          position: relative;
          display: inline-block;
        }

        .sp-hero-lead {
          font-size: 1.18rem;
          font-weight: 500;
          color: #F8FAFC;
          line-height: 1.68;
          margin-bottom: 16px;
          max-width: 620px;
        }

        .sp-hero-body-text {
          font-size: 1.02rem;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.65;
          margin-bottom: 26px;
          max-width: 620px;
        }

        .sp-hero-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 32px;
        }

        .sp-hero-chip {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: #FFFFFF;
          padding: 7px 15px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .sp-hero-chip:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: #FFA000;
        }

        .sp-hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .sp-hero-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background-color: #FFA000;
          color: #011E3E !important;
          font-weight: 800;
          font-size: 1.05rem;
          padding: 16px 32px;
          border-radius: 12px;
          text-decoration: none;
          min-height: 52px;
          box-shadow: 0 10px 28px rgba(255, 160, 0, 0.4);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sp-hero-btn-primary:hover {
          background-color: #FFB300;
          transform: translateY(-3px);
          box-shadow: 0 14px 34px rgba(255, 160, 0, 0.5);
          text-decoration: none;
        }

        .sp-hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.08);
          color: #FFFFFF !important;
          font-weight: 600;
          font-size: 0.98rem;
          padding: 15px 26px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          text-decoration: none;
          min-height: 52px;
          backdrop-filter: blur(8px);
          transition: all 0.2s ease;
        }

        .sp-hero-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.16);
          border-color: #FFA000;
          transform: translateY(-2px);
          text-decoration: none;
        }

        .sp-hero-trust-note {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
          margin-top: 14px;
          max-width: 600px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* ── HERO RIGHT: APPLICATION STAGE BLUEPRINT ── */
        .sp-blueprint-card {
          background: rgba(2, 22, 46, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 20px;
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.65), 0 0 35px rgba(255, 160, 0, 0.08);
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .sp-blueprint-card:hover {
          border-color: rgba(255, 160, 0, 0.45);
          transform: translateY(-3px);
        }

        .sp-blueprint-header {
          background: rgba(1, 18, 38, 0.85);
          padding: 14px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .sp-blueprint-dots {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .sp-blueprint-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .sp-blueprint-title {
          font-size: 0.78rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.8);
          letter-spacing: 0.8px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .sp-blueprint-badge {
          background: rgba(16, 185, 129, 0.18);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #34D399;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .sp-blueprint-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .sp-blueprint-section {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-left: 4px solid #FFA000;
          border-radius: 12px;
          padding: 16px 18px;
          transition: background 0.2s ease, border-color 0.2s ease;
        }

        .sp-blueprint-section:hover {
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(255, 160, 0, 0.4);
        }

        .sp-blueprint-tag-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 6px;
        }

        .sp-blueprint-tag {
          font-size: 0.72rem;
          font-weight: 800;
          color: #FFA000;
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }

        .sp-blueprint-status {
          font-size: 0.72rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.6);
        }

        .sp-blueprint-heading {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.12rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 4px;
        }

        .sp-blueprint-desc {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.45;
          margin: 0;
        }

        .sp-blueprint-footer {
          padding: 16px 20px;
          background: rgba(1, 15, 32, 0.9);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .sp-blueprint-footer-text {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.75);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .sp-blueprint-footer-btn {
          background: #FFA000;
          color: #011E3E !important;
          font-weight: 700;
          font-size: 0.85rem;
          padding: 8px 16px;
          border-radius: 8px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
        }

        .sp-blueprint-footer-btn:hover {
          background: #FFB300;
          transform: translateY(-1px);
        }

        /* ── Specific Overrides & Enhancements for Admissions Page ── */
        .dest-comparison-grid-top {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: start;
        }
        @media (max-width: 992px) {
          .dest-comparison-grid-top {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
        .sp-prose-col {
          max-width: 65ch;
        }
        .sp-prose-col p {
          font-size: 1.05rem;
          color: #334155;
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .sp-status-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }
        .sp-status-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 12px;
          border-bottom: 2px solid #F1F5F9;
          margin-bottom: 14px;
        }
        .sp-status-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          padding: 14px 18px;
          margin-bottom: 12px;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .sp-status-row:hover {
          border-color: #CBD5E1;
          transform: translateX(3px);
        }
        .sp-status-pill {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          padding: 4px 10px;
          border-radius: 20px;
          white-space: nowrap;
        }
        .sp-pill-prep { background: #F1F5F9; color: #475569; }
        .sp-pill-sub { background: #E0F2FE; color: #0284C7; }
        .sp-pill-await { background: #FEF3C7; color: #B45309; }
        .sp-pill-cond { background: #FEE2E2; color: #B91C1C; }

        /* Scope Cards */
        .sp-scope-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
          margin-top: 36px;
        }
        .sp-scope-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 28px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .sp-scope-card:hover {
          transform: translateY(-4px);
          border-color: #FFA000;
          box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.08);
        }
        .sp-scope-icon-wrap {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(255, 160, 0, 0.15) 0%, rgba(1, 30, 62, 0.08) 100%);
          border: 1px solid rgba(255, 160, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #011E3E;
          margin-bottom: 18px;
        }
        .sp-scope-card h3 {
          font-family: var(--font-heading, 'Roboto Condensed', sans-serif);
          font-size: 1.3rem;
          color: #011E3E;
          margin-bottom: 10px;
          font-weight: 700;
        }
        .sp-scope-card p {
          color: #475569;
          font-size: 1rem;
          margin-bottom: 0;
          line-height: 1.65;
        }
        .sp-note-banner {
          margin-top: 36px;
          padding: 20px 24px;
          background: #FFFDF9;
          border: 1px solid #FED7AA;
          border-left: 5px solid #FFA000;
          border-radius: 12px;
          font-size: 1.02rem;
          color: #7C2D12;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        /* Workflow Stepper */
        .sp-stepper {
          margin-top: 36px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .sp-step-card {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 22px 26px;
          cursor: pointer;
          transition: all 0.25s ease;
          width: 100%;
          text-align: left;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.02);
        }
        .sp-step-card:hover {
          border-color: #CBD5E1;
          transform: translateX(4px);
        }
        .sp-step-card.active {
          border-color: #FFA000;
          background: #FFFDF9;
          box-shadow: 0 10px 30px -8px rgba(255, 160, 0, 0.16);
          border-left: 5px solid #FFA000;
        }
        .sp-step-badge {
          background: #011E3E;
          color: #FFFFFF;
          font-weight: 800;
          font-size: 1.15rem;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .sp-step-card.active .sp-step-badge {
          background: #FFA000;
          color: #011E3E;
        }
        .sp-step-content h3 {
          font-family: var(--font-heading, 'Roboto Condensed', sans-serif);
          font-size: 1.25rem;
          margin-bottom: 6px;
          font-weight: 700;
          color: #011E3E;
        }
        .sp-step-content p {
          margin-bottom: 0;
          color: #475569;
          font-size: 1.02rem;
        }

        /* 3 Reading Panels (Offers) */
        .sp-offers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 36px;
          align-items: start;
        }
        @media (max-width: 992px) {
          .sp-offers-grid {
            grid-template-columns: 1fr;
          }
        }
        .sp-offer-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-top: 5px solid #011E3E;
          border-radius: 16px;
          padding: 26px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
          height: 100%;
        }
        .sp-offer-card.cond { border-top-color: #FFA000; }
        .sp-offer-card.uncond { border-top-color: #10B981; }
        .sp-offer-card.cas { border-top-color: #0284C7; }
        .sp-offer-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
          padding-bottom: 12px;
          border-bottom: 1px solid #F1F5F9;
        }
        .sp-offer-header h3 {
          margin: 0;
          font-family: var(--font-heading, 'Roboto Condensed', sans-serif);
          font-size: 1.25rem;
          color: #011E3E;
          font-weight: 700;
        }
        .sp-offer-card p {
          color: #475569;
          font-size: 1rem;
          line-height: 1.65;
          margin-bottom: 0;
        }

        /* Payment Timeline */
        .sp-payment-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-top: 28px;
        }
        .sp-payment-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 22px 26px;
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 24px;
          align-items: center;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);
        }
        @media (max-width: 768px) {
          .sp-payment-card {
            grid-template-columns: 1fr;
            gap: 10px;
          }
        }
        .sp-payment-title {
          font-family: var(--font-heading, 'Roboto Condensed', sans-serif);
          font-weight: 800;
          color: #011E3E;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .sp-payment-desc p {
          margin-bottom: 0;
          color: #475569;
          font-size: 1.02rem;
        }
        .sp-warning-box {
          margin-top: 32px;
          padding: 18px 24px;
          background: #FEF2F2;
          border: 1px solid #FECACA;
          border-left: 5px solid #DC2626;
          border-radius: 12px;
          color: #991B1B;
          font-weight: 700;
          font-size: 1.05rem;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        /* Boundaries Section */
        .sp-boundary-panel {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-left: 5px solid #011E3E;
          border-radius: 16px;
          padding: 36px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.03);
        }
        .sp-boundary-panel a {
          color: #011E3E;
          font-weight: 700;
          text-decoration: underline;
          text-decoration-color: #FFA000;
          text-underline-offset: 4px;
          transition: color 0.15s ease;
        }
        .sp-boundary-panel a:hover {
          color: #FFA000;
        }
        .sp-boundary-foot {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid #E2E8F0;
          font-size: 0.98rem;
          color: #64748B;
          font-weight: 500;
        }
      `}</style>

      {/* Top Breadcrumb Trail */}
      <nav className="dest-landing-breadcrumb" aria-label="Breadcrumb">
        <div className="container">
          <div className="breadcrumb-inner">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <span className="current">Admissions &amp; Application Support</span>
          </div>
        </div>
      </nav>

      {/* S01: Hero Section */}
      <section className="sp-hero-master">
        <div className="sp-hero-pattern" />
        <div className="sp-hero-glow-orb" />

        <div className="container">
          <div className="sp-hero-grid">
            <div>
              <div className="sp-hero-eyebrow">
                <Sparkles size={14} />
                <span>OFFICIAL ADVISORY SERVICE &middot; ADMISSIONS</span>
              </div>

              <h1 className="sp-hero-title">
                Admissions &amp; <span>Application Support</span>
              </h1>

              <p className="sp-hero-lead">
                A university application has more moving parts than the submit button suggests. University application support helps you understand the requirements and keep the next steps clear.
              </p>

              <p className="sp-hero-body-text">
                Study Prime supports applications, offer reviews and follow-up. You stay involved in what is submitted and what you agree to pay.
              </p>

              {/* Trust Chips */}
              <div className="sp-hero-chips">
                <span className="sp-hero-chip">
                  <CheckCircle2 size={15} color="#FFA000" />
                  No False Guarantees
                </span>
                <span className="sp-hero-chip">
                  <CheckCircle2 size={15} color="#FFA000" />
                  Direct Portal Filing
                </span>
                <span className="sp-hero-chip">
                  <CheckCircle2 size={15} color="#FFA000" />
                  Conditional Offer Review
                </span>
                <span className="sp-hero-chip">
                  <CheckCircle2 size={15} color="#FFA000" />
                  Free Profile Assessment
                </span>
              </div>

              {/* Action Buttons */}
              <div className="sp-hero-actions">
                <Link to="/assessment" className="sp-hero-btn-primary">
                  <span>Book my free assessment</span>
                  <ArrowRight size={18} />
                </Link>
                <a href="tel:+923101193888" className="sp-hero-btn-secondary">
                  <PhoneCall size={16} />
                  <span>Call Advisor: +92 310 1193888</span>
                </a>
              </div>

              <p className="sp-hero-trust-note">
                <CheckCircle2 size={15} color="#10B981" style={{ flexShrink: 0 }} />
                <span>Already holding an offer? Start with the conditions you do not understand.</span>
              </p>
            </div>

            {/* Application Stage Blueprint Visual */}
            <div>
              <div className="sp-blueprint-card" aria-label="Application Stage Tracker">
                <div className="sp-blueprint-header">
                  <div className="sp-blueprint-dots">
                    <span className="sp-blueprint-dot" style={{ background: "#EF4444" }} />
                    <span className="sp-blueprint-dot" style={{ background: "#F59E0B" }} />
                    <span className="sp-blueprint-dot" style={{ background: "#10B981" }} />
                  </div>
                  <div className="sp-blueprint-title">
                    <GraduationCap size={13} color="#FFA000" />
                    <span>Application Stage Tracker</span>
                  </div>
                  <span className="sp-blueprint-badge">Direct Filing</span>
                </div>

                <div className="sp-blueprint-body">
                  {/* Stage 1 */}
                  <div className="sp-blueprint-section">
                    <div className="sp-blueprint-tag-row">
                      <span className="sp-blueprint-tag">Stage 01 &middot; Preparation</span>
                      <span className="sp-blueprint-status">Document Readiness</span>
                    </div>
                    <div className="sp-blueprint-heading">Document Checks &amp; Portal Filing</div>
                    <p className="sp-blueprint-desc">
                      Format transcripts, academic recommendation letters and verified CV for direct portal upload.
                    </p>
                  </div>

                  {/* Stage 2 */}
                  <div className="sp-blueprint-section">
                    <div className="sp-blueprint-tag-row">
                      <span className="sp-blueprint-tag">Stage 02 &middot; Decisions</span>
                      <span className="sp-blueprint-status">Offer Dissection</span>
                    </div>
                    <div className="sp-blueprint-heading">Conditional Terms &amp; Deposit Review</div>
                    <p className="sp-blueprint-desc">
                      Dissect conditional requirements, tuition deposit dates and university refund terms before payment.
                    </p>
                  </div>

                  {/* Stage 3 */}
                  <div className="sp-blueprint-section">
                    <div className="sp-blueprint-tag-row">
                      <span className="sp-blueprint-tag">Stage 03 &middot; Handover</span>
                      <span className="sp-blueprint-status">Visa Transition</span>
                    </div>
                    <div className="sp-blueprint-heading">CAS / I-20 Confirmation Alignment</div>
                    <p className="sp-blueprint-desc">
                      Seamless transition from unconditional offer acceptance to regulated immigration evidence rules.
                    </p>
                  </div>
                </div>

                <div className="sp-blueprint-footer">
                  <div className="sp-blueprint-footer-text">
                    <ShieldCheck size={16} color="#10B981" />
                    <span>100% Direct Portal Submissions</span>
                  </div>
                  <Link to="/assessment" className="sp-blueprint-footer-btn">
                    <span>Check Offer</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S02: Problem Section */}
      <section className="dest-section dest-section-white" id="problem">
        <div className="container">
          <div className="dest-comparison-grid-top">
            <div className="sp-prose-col">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>DECISION CLARITY</span>
              </div>
              <h2 className="dest-section-title" style={{ textAlign: "left", marginBottom: "16px" }}>
                An offer is a step, not the finish line
              </h2>
              
              <p>
                A missing detail can leave an application waiting for a response. An offer may arrive with conditions you still need to meet.
              </p>
              
              <p>
                Then come decisions about acceptance, deposits and the next stage. It helps to know who needs to act and what remains outstanding.
              </p>
              
              <p>
                Keep the university's decision separate from the visa decision. Neither a submitted application nor an offer guarantees permission to travel.
              </p>
            </div>

            <div className="sp-status-card" aria-label="Application Stage Status Indicators">
              <div className="sp-status-header">
                <span style={{ fontWeight: 700, color: "#011E3E", fontSize: "1.05rem" }}>Application File Tracking</span>
                <span style={{ fontSize: "0.85rem", color: "#64748B" }}>4 Common States</span>
              </div>

              <div className="sp-status-row">
                <div>
                  <div style={{ fontWeight: 700, color: "#011E3E" }}>Preparing the File</div>
                  <div style={{ fontSize: "0.85rem", color: "#64748B" }}>Transcripts, statements &amp; identity review</div>
                </div>
                <span className="sp-status-pill sp-pill-prep">Preparing</span>
              </div>

              <div className="sp-status-row">
                <div>
                  <div style={{ fontWeight: 700, color: "#011E3E" }}>Direct Portal Submission</div>
                  <div style={{ fontSize: "0.85rem", color: "#64748B" }}>Application logged into provider system</div>
                </div>
                <span className="sp-status-pill sp-pill-sub">Submitted</span>
              </div>

              <div className="sp-status-row">
                <div>
                  <div style={{ fontWeight: 700, color: "#011E3E" }}>Admissions Faculty Review</div>
                  <div style={{ fontSize: "0.85rem", color: "#64748B" }}>Assessment under published quotas</div>
                </div>
                <span className="sp-status-pill sp-pill-await">Awaiting Response</span>
              </div>

              <div className="sp-status-row">
                <div>
                  <div style={{ fontWeight: 700, color: "#011E3E" }}>Offer Letter Received</div>
                  <div style={{ fontSize: "0.85rem", color: "#64748B" }}>Prerequisite conditions to satisfy</div>
                </div>
                <span className="sp-status-pill sp-pill-cond">Conditions Outstanding</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S03: Scope */}
      <section className="dest-section dest-section-alt" id="scope">
        <div className="container">
          <div className="dest-section-header">
            <div className="dest-eyebrow-pill">
              <span className="dest-eyebrow-dot" />
              <span>COMPREHENSIVE ADVISORY</span>
            </div>
            <h2 className="dest-section-title">What application support covers</h2>
          </div>

          <div className="sp-scope-grid">
            <div className="sp-scope-card">
              <div className="sp-scope-icon-wrap">
                <FileCheck size={24} />
              </div>
              <h3>Preparing the application</h3>
              <p>
                Review the requirements for the chosen course and intake. Identify missing information before submitting anything.
              </p>
            </div>

            <div className="sp-scope-card">
              <div className="sp-scope-icon-wrap">
                <CheckCircle2 size={24} />
              </div>
              <h3>Checking the details</h3>
              <p>
                Check that names, qualifications and study choices are consistent. You should understand and approve the information sent on your behalf.
              </p>
            </div>

            <div className="sp-scope-card">
              <div className="sp-scope-icon-wrap">
                <Clock size={24} />
              </div>
              <h3>Submission and follow-up</h3>
              <p>
                Agree who submits, where it goes and how progress is recorded. Keep a record of the submission and requests for further information.
              </p>
            </div>

            <div className="sp-scope-card">
              <div className="sp-scope-icon-wrap">
                <BookOpen size={24} />
              </div>
              <h3>Reading the offer</h3>
              <p>
                Understand any academic, English-language or other conditions. Check acceptance steps, payment dates and refund terms before committing.
              </p>
            </div>

            <div className="sp-scope-card">
              <div className="sp-scope-icon-wrap">
                <Building2 size={24} />
              </div>
              <h3>Planning the handover</h3>
              <p>
                Identify what the provider needs before the visa stage can begin. The route and terminology depend on the country.
              </p>
            </div>
          </div>

          <div className="sp-note-banner">
            <ShieldCheck size={26} color="#FFA000" style={{ flexShrink: 0 }} />
            <span>Confirm the exact scope and any service charges before paid work starts. Ask which steps you must complete yourself.</span>
          </div>
        </div>
      </section>

      {/* S04: Process */}
      <section className="dest-section dest-section-white" id="process">
        <div className="container">
          <div className="dest-section-header">
            <div className="dest-eyebrow-pill">
              <span className="dest-eyebrow-dot" />
              <span>STAGE-BY-STAGE WORKFLOW</span>
            </div>
            <h2 className="dest-section-title">Know the next step at each stage</h2>
          </div>

          <div className="sp-stepper">
            <button
              type="button"
              className={`sp-step-card ${activeStep === 1 ? "active" : ""}`}
              onClick={() => setActiveStep(activeStep === 1 ? null : 1)}
            >
              <div className="sp-step-badge">1</div>
              <div className="sp-step-content">
                <h3>Confirm the course and intake</h3>
                <p>
                  Start with the exact programme and campus. If the choice is unsettled, resolve that before preparing the application.
                </p>
              </div>
            </button>

            <button
              type="button"
              className={`sp-step-card ${activeStep === 2 ? "active" : ""}`}
              onClick={() => setActiveStep(activeStep === 2 ? null : 2)}
            >
              <div className="sp-step-badge">2</div>
              <div className="sp-step-content">
                <h3>Review and approve</h3>
                <p>
                  Check the application details and any supporting explanations. Correct errors before they become part of the submitted record.
                </p>
              </div>
            </button>

            <button
              type="button"
              className={`sp-step-card ${activeStep === 3 ? "active" : ""}`}
              onClick={() => setActiveStep(activeStep === 3 ? null : 3)}
            >
              <div className="sp-step-badge">3</div>
              <div className="sp-step-content">
                <h3>Track the response</h3>
                <p>
                  The university controls its review process. Respond to requests carefully and keep copies of the correspondence.
                </p>
              </div>
            </button>

            <button
              type="button"
              className={`sp-step-card ${activeStep === 4 ? "active" : ""}`}
              onClick={() => setActiveStep(activeStep === 4 ? null : 4)}
            >
              <div className="sp-step-badge">4</div>
              <div className="sp-step-content">
                <h3>Act on the decision</h3>
                <p>
                  An offer, request for information or refusal needs a different response. Discuss the options before paying or applying elsewhere.
                </p>
              </div>
            </button>
          </div>

          <div style={{ textAlign: "center", marginTop: "24px", color: "#64748B", fontStyle: "italic" }}>
            There is no universal offer turnaround. Timing depends on the provider, intake and application.
          </div>
        </div>
      </section>

      {/* S05: Offers */}
      <section className="dest-section dest-section-alt" id="offers">
        <div className="container">
          <div className="dest-section-header">
            <div className="dest-eyebrow-pill">
              <span className="dest-eyebrow-dot" />
              <span>OFFER EVALUATION</span>
            </div>
            <h2 className="dest-section-title">Read the offer before accepting it</h2>
          </div>

          <div className="sp-offers-grid">
            <div className="sp-offer-card cond">
              <div className="sp-offer-header">
                <FileText size={22} color="#FFA000" />
                <h3>Conditional offer</h3>
              </div>
              <p>
                The provider still needs something before the conditions are met. Check what is outstanding and the date it must be supplied.
              </p>
            </div>

            <div className="sp-offer-card uncond">
              <div className="sp-offer-header">
                <CheckCircle2 size={22} color="#10B981" />
                <h3>Unconditional offer</h3>
              </div>
              <p>
                Read the full terms rather than relying on the label. Acceptance, payment and enrolment steps may still remain.
              </p>
            </div>

            <div className="sp-offer-card cas">
              <div className="sp-offer-header">
                <ShieldCheck size={22} color="#0284C7" />
                <h3>Visa-related provider steps</h3>
              </div>
              <p>
                Some countries require a separate provider-issued record for the visa stage. The UK uses a Confirmation of Acceptance for Studies, known as a CAS.
              </p>
            </div>
          </div>

          <div style={{ marginTop: "28px", padding: "18px 24px", background: "#F1F5F9", borderRadius: "12px", border: "1px solid #CBD5E1", fontSize: "0.98rem", color: "#334155" }}>
            A CAS is not a visa approval. Do not apply one country's terminology or sequence to another destination.
          </div>
        </div>
      </section>

      {/* S06: Payments */}
      <section className="dest-section dest-section-white" id="payments">
        <div className="container">
          <div className="dest-section-header">
            <div className="dest-eyebrow-pill">
              <span className="dest-eyebrow-dot" />
              <span>FINANCIAL TRANSPARENCY</span>
            </div>
            <h2 className="dest-section-title">Understand the payment before sending it</h2>
            <div style={{ maxWidth: "680px", margin: "16px auto 0 auto", textAlign: "center" }}>
              <p style={{ color: "#475569", fontSize: "1.05rem" }}>
                Application fees, tuition deposits and consultancy charges are different costs. Ask who receives each payment and what it covers.
              </p>
              <p style={{ color: "#475569", fontSize: "1.05rem" }}>
                Check the provider's payment instructions through its official channels. Read whether a deposit counts towards tuition and when it is due.
              </p>
              <p style={{ color: "#475569", fontSize: "1.05rem" }}>
                Refund terms matter if plans change or a visa is refused. Do not assume every payment is refundable.
              </p>
              <p style={{ color: "#475569", fontSize: "1.05rem" }}>
                A deposit also does not replace all visa funding evidence. Check the destination's rules before treating a payment as proof of sufficient funds.
              </p>
            </div>
          </div>

          <div className="sp-payment-grid">
            <div className="sp-payment-card">
              <div className="sp-payment-title">
                <FileCheck size={22} color="#011E3E" />
                <span>Application Fees</span>
              </div>
              <div className="sp-payment-desc">
                <p>Required directly by institutions or portal clearing houses for credential vetting. Fee waiver criteria verified on individual basis.</p>
              </div>
            </div>

            <div className="sp-payment-card">
              <div className="sp-payment-title">
                <Building2 size={22} color="#011E3E" />
                <span>Tuition Deposits</span>
              </div>
              <div className="sp-payment-desc">
                <p>Paid directly into official institutional accounts to confirm seat allocation and generate electronic visa confirmation paperwork.</p>
              </div>
            </div>

            <div className="sp-payment-card">
              <div className="sp-payment-title">
                <ShieldCheck size={22} color="#011E3E" />
                <span>Consultancy Charges</span>
              </div>
              <div className="sp-payment-desc">
                <p>Transparent service terms declared in writing. Initial assessment and profile evaluation is provided free of charge.</p>
              </div>
            </div>
          </div>

          <div className="sp-warning-box">
            <AlertTriangle size={24} color="#DC2626" style={{ flexShrink: 0 }} />
            <span>Do not pay because someone promises a guaranteed offer or visa.</span>
          </div>
        </div>
      </section>

      {/* S07: Before and after */}
      <section className="dest-section dest-section-alt" id="comparison">
        <div className="container">
          <div className="dest-section-header">
            <div className="dest-eyebrow-pill">
              <span className="dest-eyebrow-dot" />
              <span>PROCESS COMPARISON</span>
            </div>
            <h2 className="dest-section-title">Replace scattered updates with a clear application record</h2>
          </div>

          <div className="dest-comparison-grid">
            <div className="dest-card-panel pause-card">
              <div className="dest-card-header-row">
                <div className="dest-card-icon-wrap amber-bg">
                  <AlertCircle size={22} />
                </div>
                <h3 className="dest-card-title">Before a structured process</h3>
              </div>
              <p>
                Messages, deadlines and offer conditions sit in different places. You are unsure what has been sent or which action comes next.
              </p>
            </div>

            <div className="dest-card-panel explore-card">
              <div className="dest-card-header-row">
                <div className="dest-card-icon-wrap green-bg">
                  <CheckCircle2 size={22} />
                </div>
                <h3 className="dest-card-title">With a structured process</h3>
              </div>
              <p>
                You can see the application stage and outstanding actions together. Submitted information and provider responses remain available for review.
              </p>
            </div>
          </div>

          <p style={{ textAlign: "center", marginTop: "24px", color: "#64748B", fontStyle: "italic", fontSize: "0.95rem" }}>
            This illustrates how support should be organised. It is not evidence of a particular student's admission or result.
          </p>
        </div>
      </section>

      {/* S08: Boundaries */}
      <section className="dest-section dest-section-white" id="boundaries">
        <div className="container">
          <div className="sp-boundary-panel">
            <div className="dest-eyebrow-pill">
              <span className="dest-eyebrow-dot" />
              <span>HONEST ADVISORY BOUNDARIES</span>
            </div>

            <h2 className="dest-section-title" style={{ textAlign: "left", marginBottom: "16px" }}>
              Keep the application accurate and the decision yours
            </h2>

            <p style={{ fontSize: "1.05rem", color: "#334155", lineHeight: "1.7", marginBottom: "16px" }}>
              Study gaps, earlier refusals and changes of subject need honest explanations. Support should help make the facts clear, not replace them with a story.
            </p>

            <p style={{ fontSize: "1.05rem", color: "#334155", lineHeight: "1.7", marginBottom: "16px" }}>
              For help expressing your academic reasons, explore <Link to="/services/sop-guidance">SOP and recommendation support</Link>. If you are still comparing programmes, start with <Link to="/services/university-matching">university matching</Link>.
            </p>

            <p style={{ fontSize: "1.05rem", color: "#334155", lineHeight: "1.7", marginBottom: "0" }}>
              A scholarship decision may arrive separately from admission. Do not count an award until its terms are confirmed.
            </p>

            <div className="sp-boundary-foot">
              No consultant can guarantee a scholarship, admission or visa. The university and relevant authorities make their own decisions.
            </div>
          </div>
        </div>
      </section>

      {/* S09: FAQ Accordion */}
      <section className="dest-section dest-section-alt" id="faq">
        <div className="container">
          <div className="dest-section-header">
            <div className="dest-eyebrow-pill">
              <span className="dest-eyebrow-dot" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="dest-section-title">Questions about admissions and application support</h2>
          </div>

          <div className="dest-faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="dest-faq-card">
                <details>
                  <summary>
                    <span>{faq.q}</span>
                    <span className="dest-faq-toggle-icon">&darr;</span>
                  </summary>
                  <div className="dest-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S10: Close CTA Banner */}
      <section className="dest-closing-cta-section">
        <div className="container">
          <div className="dest-closing-card">
            <h2>Get clear on what happens next</h2>

            <p>
              Whether you are preparing an application or reading an offer, start there. Tell us the course, intake and step you are unsure about.
            </p>

            <div className="dest-closing-actions">
              <Link to="/assessment" className="dest-btn-primary">
                <span>Book my free assessment</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            <div style={{ marginBottom: "24px", color: "rgba(255, 255, 255, 0.85)" }}>
              <Link to="/services" style={{ color: "#FFA000", fontWeight: 600 }}>View all advisory services</Link> or <Link to="/contact" style={{ color: "#FFA000", fontWeight: 600 }}>contact Study Prime</Link>.
            </div>

            <div className="dest-contact-row">
              <a href="tel:+923101193888">
                <PhoneCall size={16} />
                <span>Call +92 310 1193888</span>
              </a>
              <span style={{ color: "rgba(255, 255, 255, 0.4)" }}>&bull;</span>
              <a href="mailto:info@studyprime.pk">
                <Mail size={16} />
                <span>Email info@studyprime.pk</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
