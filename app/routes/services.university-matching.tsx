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
  Compass, 
  Layers, 
  Building2, 
  GraduationCap, 
  Scale, 
  Calendar, 
  DollarSign, 
  AlertCircle, 
  ShieldCheck,
  Check
} from "lucide-react";
import { CANONICAL_BASE_URL } from "~/utils/seo";

export const meta: MetaFunction = () => {
  const canonicalUrl = `${CANONICAL_BASE_URL}/services/university-matching`;
  const pageTitle = "University & Course Matching | Study Prime";
  const pageDescription =
    "Compare courses, entry requirements and costs with Study Prime. Build a shortlist that fits your background and plans. Book a free assessment.";

  return [
    { title: pageTitle },
    { name: "description", content: pageDescription },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: "website" },
    { property: "og:image", content: `${CANONICAL_BASE_URL}/student.webp` },
    { property: "og:image:alt", content: "Student reviewing academic course and university comparison materials" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: pageDescription },
    { name: "twitter:image", content: `${CANONICAL_BASE_URL}/student.webp` },
    { tagName: "link", rel: "canonical", href: canonicalUrl },
  ];
};

export default function UniversityMatchingRoute() {
  const canonicalUrl = `${CANONICAL_BASE_URL}/services/university-matching`;

  const [activeStep, setActiveStep] = useState<number | null>(null);

  const faqs = [
    {
      q: "Can you help if I am unsure what to study?",
      a: "Yes. Start with your previous subjects, interests and practical limits. The discussion can help narrow your options before choosing a provider.",
    },
    {
      q: "Will my grades guarantee entry?",
      a: "No. Providers assess applications under their own requirements. Meeting a published minimum does not guarantee an offer.",
    },
    {
      q: "Can I compare more than one country?",
      a: "Discuss that during your assessment. Compare education, total cost and entry requirements rather than work rights alone. Confirm the countries covered by your agreed service.",
    },
    {
      q: "Is a scholarship included with admission?",
      a: "Not automatically. Each award has its own eligibility, coverage and decision. Keep unconfirmed awards out of your funding plan.",
    },
    {
      q: "Can I choose a course for post-study work?",
      a: "You can consider it, but check the exact course and current rules. Work or family eligibility is not automatic, and future rules may change.",
    },
    {
      q: "What does the matching service cost?",
      a: "The initial assessment is free. Ask which follow-on services carry charges and what the agreed scope includes. Confirm those terms before paid work starts.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: "University & Course Matching",
        url: canonicalUrl,
        serviceType: "University and course matching",
        description:
          "Compare courses, entry requirements and costs with Study Prime. Build a shortlist that fits your background and plans. Book a free assessment.",
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
            name: "University & Course Matching",
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

        /* ── HERO RIGHT: CRITERIA PREVIEW BLUEPRINT ── */
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

        /* ── Specific Overrides & Enhancements for University Matching Page ── */
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

        /* Decision Path */
        .sp-path-diagram {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .sp-path-node {
          display: flex;
          align-items: center;
          gap: 16px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-left: 5px solid #011E3E;
          border-radius: 10px;
          padding: 14px 18px;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .sp-path-node:hover {
          transform: translateX(3px);
        }
        .sp-path-node.highlighted {
          border-left-color: #FFA000;
          background: #FFFDF9;
          border-color: #FED7AA;
          box-shadow: 0 4px 14px rgba(255, 160, 0, 0.1);
        }
        .sp-path-num {
          background: #011E3E;
          color: #FFFFFF;
          font-weight: 800;
          font-size: 0.95rem;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .sp-path-node.highlighted .sp-path-num {
          background: #FFA000;
          color: #011E3E;
        }
        .sp-path-label {
          font-weight: 800;
          color: #011E3E;
          font-size: 1.05rem;
          font-family: var(--font-heading, 'Roboto Condensed', sans-serif);
        }
        .sp-path-connector {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94A3B8;
          font-size: 1.1rem;
          line-height: 1;
        }

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

        /* Shortlist Table */
        .sp-shortlist-preview {
          margin-top: 40px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 28px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }
        .sp-preview-header {
          font-size: 1.1rem;
          font-weight: 700;
          color: #011E3E;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .sp-preview-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          font-size: 0.98rem;
        }
        .sp-preview-table th {
          background: #011E3E;
          color: #FFFFFF;
          text-align: left;
          padding: 14px 18px;
          font-weight: 700;
          font-family: var(--font-heading, 'Roboto Condensed', sans-serif);
          font-size: 1.05rem;
        }
        .sp-preview-table th:first-child { border-top-left-radius: 10px; }
        .sp-preview-table th:last-child { border-top-right-radius: 10px; }
        .sp-preview-table td {
          padding: 16px 18px;
          border-bottom: 1px solid #E2E8F0;
          color: #334155;
          vertical-align: middle;
        }
        .sp-preview-table tr:last-child td { border-bottom: none; }
        .sp-preview-table tr:nth-child(even) td { background-color: #F8FAFC; }
        .sp-preview-table strong { color: #011E3E; }
        .sp-badge-verify {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
        }
        .sp-badge-verify.confirmed { background: #DCFCE7; color: #166534; }
        .sp-badge-verify.pending { background: #FEF3C7; color: #92400E; }
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

        /* 2-Column Course Value */
        .sp-orange-rule {
          width: 64px;
          height: 4px;
          background: #FFA000;
          border-radius: 2px;
          margin: 14px 0 24px 0;
        }
        .sp-two-column {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }
        @media (max-width: 992px) {
          .sp-two-column {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
        .sp-callout-card {
          background: #F8FAFC;
          border-left: 5px solid #011E3E;
          padding: 22px 26px;
          border-radius: 0 14px 14px 0;
          margin-top: 18px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);
        }
        .sp-callout-card p {
          margin-bottom: 0;
          font-size: 1.05rem;
          color: #1E293B;
          font-weight: 600;
          line-height: 1.65;
        }

        /* Budget Panels */
        .sp-budget-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-top: 36px;
          align-items: start;
        }
        @media (max-width: 992px) {
          .sp-budget-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
        .sp-budget-col {
          background: #FFFFFF;
          border: 1px solid #CBD5E1;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.03);
        }
        .sp-budget-col-header {
          padding: 18px 24px;
          font-weight: 800;
          font-size: 1.15rem;
          font-family: var(--font-heading, 'Roboto Condensed', sans-serif);
        }
        .sp-budget-col-header.outgoings {
          background: #011E3E;
          color: #FFFFFF;
        }
        .sp-budget-col-header.evidence {
          background: #082A54;
          color: #FFA000;
          border-bottom: 2px solid #FFA000;
        }
        .sp-budget-col-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .sp-budget-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 1rem;
          color: #334155;
          line-height: 1.6;
        }
        .sp-budget-item svg {
          flex-shrink: 0;
          margin-top: 3px;
          color: #011E3E;
        }

        /* Stepper */
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
            <span className="current">University &amp; Course Matching</span>
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
                <span>OFFICIAL ADVISORY SERVICE &middot; PROFILE MATCHING</span>
              </div>

              <h1 className="sp-hero-title">
                University &amp; <span>Course Matching</span>
              </h1>

              <p className="sp-hero-lead">
                Too many university options can make a simple decision feel impossible. University and course matching helps you compare what matters before you apply.
              </p>

              <p className="sp-hero-body-text">
                Study Prime helps you weigh your background, course interests and budget. Start with your goals, then narrow the choices with clear reasons.
              </p>

              {/* Trust Chips */}
              <div className="sp-hero-chips">
                <span className="sp-hero-chip">
                  <CheckCircle2 size={15} color="#FFA000" />
                  Look beyond a familiar university name
                </span>
                <span className="sp-hero-chip">
                  <CheckCircle2 size={15} color="#FFA000" />
                  Compare course, campus &amp; entry
                </span>
                <span className="sp-hero-chip">
                  <CheckCircle2 size={15} color="#FFA000" />
                  Resolve open questions
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
                <span>For students and parents who want a clearer starting point.</span>
              </p>
            </div>

            {/* Criteria Preview Blueprint Visual */}
            <div>
              <div className="sp-blueprint-card" aria-label="Criteria Matching Blueprint">
                <div className="sp-blueprint-header">
                  <div className="sp-blueprint-dots">
                    <span className="sp-blueprint-dot" style={{ background: "#EF4444" }} />
                    <span className="sp-blueprint-dot" style={{ background: "#F59E0B" }} />
                    <span className="sp-blueprint-dot" style={{ background: "#10B981" }} />
                  </div>
                  <div className="sp-blueprint-title">
                    <GraduationCap size={13} color="#FFA000" />
                    <span>Criteria Matching Blueprint</span>
                  </div>
                  <span className="sp-blueprint-badge">Evidence-Based</span>
                </div>

                <div className="sp-blueprint-body">
                  {/* Pillar 1 */}
                  <div className="sp-blueprint-section">
                    <div className="sp-blueprint-tag-row">
                      <span className="sp-blueprint-tag">Criterion 01 &middot; Foundation</span>
                      <span className="sp-blueprint-status">Academic Profile</span>
                    </div>
                    <div className="sp-blueprint-heading">Starting Profile &amp; Eligibility</div>
                    <p className="sp-blueprint-desc">
                      Evaluate previous grades, subject background, English proficiency &amp; genuine transfer options.
                    </p>
                  </div>

                  {/* Pillar 2 */}
                  <div className="sp-blueprint-section">
                    <div className="sp-blueprint-tag-row">
                      <span className="sp-blueprint-tag">Criterion 02 &middot; Curriculum</span>
                      <span className="sp-blueprint-status">Syllabus Quality</span>
                    </div>
                    <div className="sp-blueprint-heading">Course Itself &amp; Teaching Modules</div>
                    <p className="sp-blueprint-desc">
                      Compare laboratory equipment, teaching faculty, placement years and degrees recognised by HEC.
                    </p>
                  </div>

                  {/* Pillar 3 */}
                  <div className="sp-blueprint-section">
                    <div className="sp-blueprint-tag-row">
                      <span className="sp-blueprint-tag">Criterion 03 &middot; Economics</span>
                      <span className="sp-blueprint-status">Financial Feasibility</span>
                    </div>
                    <div className="sp-blueprint-heading">Total Outgoings &amp; Budget Timeline</div>
                    <p className="sp-blueprint-desc">
                      Account for tuition schedules, living expenses, deposit milestones and currency fluctuation buffers.
                    </p>
                  </div>
                </div>

                <div className="sp-blueprint-footer">
                  <div className="sp-blueprint-footer-text">
                    <ShieldCheck size={16} color="#10B981" />
                    <span>100% Objective Academic Analysis</span>
                  </div>
                  <Link to="/assessment" className="sp-blueprint-footer-btn">
                    <span>Match Profile</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S02: The Decision */}
      <section className="dest-section dest-section-white" id="decision">
        <div className="container">
          <div className="dest-comparison-grid-top">
            <div className="sp-prose-col">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>DECISION CLARITY</span>
              </div>
              <h2 className="dest-section-title" style={{ textAlign: "left", marginBottom: "16px" }}>
                A famous name is not a complete study plan
              </h2>
              
              <p>
                A course may sound right but require subjects you have not studied. Another may fit your grades but stretch your family's budget.
              </p>
              
              <p>
                Start by asking what you want to learn. Then check how each course teaches it and what entry requires.
              </p>
              
              <p>
                A shortlist should explain why each option deserves a place. It should also show the questions that could change your decision.
              </p>
            </div>

            <div className="sp-path-diagram" aria-label="Course and University Decision Path">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ fontWeight: 700, color: "#011E3E" }}>Decision Sequence</span>
                <span style={{ fontSize: "0.82rem", color: "#64748B" }}>4 Structured Milestones</span>
              </div>

              <div className="sp-path-node">
                <div className="sp-path-num">1</div>
                <div>
                  <div className="sp-path-label">Background</div>
                  <div style={{ fontSize: "0.85rem", color: "#64748B" }}>Academic history, grades &amp; qualifications</div>
                </div>
              </div>
              <div className="sp-path-connector">&darr;</div>
              <div className="sp-path-node">
                <div className="sp-path-num">2</div>
                <div>
                  <div className="sp-path-label">Course requirements</div>
                  <div style={{ fontSize: "0.85rem", color: "#64748B" }}>Modules, practical teaching &amp; prerequisites</div>
                </div>
              </div>
              <div className="sp-path-connector">&darr;</div>
              <div className="sp-path-node">
                <div className="sp-path-num">3</div>
                <div>
                  <div className="sp-path-label">Costs</div>
                  <div style={{ fontSize: "0.85rem", color: "#64748B" }}>Tuition timing, living costs &amp; visa funds</div>
                </div>
              </div>
              <div className="sp-path-connector">&darr;</div>
              <div className="sp-path-node highlighted">
                <div className="sp-path-num">4</div>
                <div>
                  <div className="sp-path-label">Shortlist</div>
                  <div style={{ fontSize: "0.85rem", color: "#64748B" }}>Reasoned choices with open questions identified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S03: What we deliver */}
      <section className="dest-section dest-section-alt" id="scope">
        <div className="container">
          <div className="dest-section-header">
            <div className="dest-eyebrow-pill">
              <span className="dest-eyebrow-dot" />
              <span>DELIVERABLES &amp; SCOPE</span>
            </div>
            <h2 className="dest-section-title">What the comparison should cover</h2>
          </div>

          <div className="sp-scope-grid">
            <div className="sp-scope-card">
              <div className="sp-scope-icon-wrap">
                <GraduationCap size={24} />
              </div>
              <h3>Your starting point</h3>
              <p>
                Discuss your qualifications, results and relevant experience. Identify where a provider must confirm entry or credit transfer.
              </p>
            </div>

            <div className="sp-scope-card">
              <div className="sp-scope-icon-wrap">
                <BookOpen size={24} />
              </div>
              <h3>The course itself</h3>
              <p>
                Compare modules, assessment and practical learning. Check whether placements are included, competitive or arranged separately.
              </p>
            </div>

            <div className="sp-scope-card">
              <div className="sp-scope-icon-wrap">
                <Building2 size={24} />
              </div>
              <h3>The provider and campus</h3>
              <p>
                Confirm the awarding institution and where teaching takes place. A familiar brand name does not answer every recognition question.
              </p>
            </div>

            <div className="sp-scope-card">
              <div className="sp-scope-icon-wrap">
                <DollarSign size={24} />
              </div>
              <h3>Costs and timing</h3>
              <p>
                Compare course fees, living costs and when payments fall due. Keep scholarship possibilities separate from confirmed funding.
              </p>
            </div>

            <div className="sp-scope-card">
              <div className="sp-scope-icon-wrap">
                <Scale size={24} />
              </div>
              <h3>Reasons for the shortlist</h3>
              <p>
                Understand what makes each option worth exploring. Ask which facts are confirmed and which still need checking.
              </p>
            </div>
          </div>

          {/* Sample Shortlist Comparison Matrix */}
          <div className="sp-shortlist-preview">
            <div className="sp-preview-header">
              <Layers size={20} color="#FFA000" />
              <span>Sample Shortlist Criteria Structure</span>
            </div>
            <table className="sp-preview-table">
              <thead>
                <tr>
                  <th scope="col">Decision Criteria</th>
                  <th scope="col">Sample Option A Focus</th>
                  <th scope="col">Sample Option B Focus</th>
                  <th scope="col">Verification Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Starting profile match</strong></td>
                  <td>Direct entry based on current GPA</td>
                  <td>Requires preliminary credit transfer review</td>
                  <td><span className="sp-badge-verify pending">To be verified</span></td>
                </tr>
                <tr>
                  <td><strong>Course structure</strong></td>
                  <td>Applied modules with compulsory industry project</td>
                  <td>Research-led theory with optional placement year</td>
                  <td><span className="sp-badge-verify confirmed">Confirmed in handbook</span></td>
                </tr>
                <tr>
                  <td><strong>Awarding provider</strong></td>
                  <td>Main campus delivery &amp; degree conferral</td>
                  <td>Partner teaching centre with degree validation</td>
                  <td><span className="sp-badge-verify confirmed">Confirmed in register</span></td>
                </tr>
                <tr>
                  <td><strong>Costs &amp; payment schedule</strong></td>
                  <td>Annual fee with 50% deposit before enrollment</td>
                  <td>Termly instalment plan after initial confirmation</td>
                  <td><span className="sp-badge-verify pending">Breakdown required</span></td>
                </tr>
                <tr>
                  <td><strong>Shortlist rationale</strong></td>
                  <td>Fits immediate practical skill goals</td>
                  <td>Provides pathway into further postgraduate study</td>
                  <td><span className="sp-badge-verify confirmed">Documented in review</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="sp-note-banner">
            <ShieldCheck size={26} color="#FFA000" style={{ flexShrink: 0 }} />
            <span>Agree the service scope before paid work starts. The number of options and any charges should be clear in writing.</span>
          </div>
        </div>
      </section>

      {/* S04: Course value */}
      <section className="dest-section dest-section-white" id="course-value">
        <div className="container">
          <div className="dest-section-header">
            <div className="dest-eyebrow-pill">
              <span className="dest-eyebrow-dot" />
              <span>ACADEMIC LOGIC</span>
            </div>
            <h2 className="dest-section-title">Choose skills you can explain, not a fashionable course title</h2>
            <div className="sp-orange-rule" style={{ margin: "14px auto 24px auto" }} />
          </div>

          <div className="sp-two-column">
            <div>
              <p style={{ fontSize: "1.05rem", color: "#334155", lineHeight: "1.7", marginBottom: "16px" }}>
                Read the modules before judging the name. A computing course may focus on theory, software projects or business systems.
              </p>
              
              <p style={{ fontSize: "1.05rem", color: "#334155", lineHeight: "1.7", marginBottom: "0" }}>
                For a career change, check whether the programme accepts your earlier subject. For further study, check how it builds on your existing knowledge.
              </p>
            </div>

            <div>
              <p style={{ fontSize: "1.05rem", color: "#334155", lineHeight: "1.7", marginBottom: "0" }}>
                Think about returning to Pakistan as well as working overseas. Ask whether employers or professional bodies require separate recognition.
              </p>

              <div className="sp-callout-card">
                <p>
                  University admission does not guarantee professional registration. Resolve that question before committing to a regulated career route.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S05: Budget */}
      <section className="dest-section dest-section-alt" id="budget">
        <div className="container">
          <div className="dest-section-header">
            <div className="dest-eyebrow-pill">
              <span className="dest-eyebrow-dot" />
              <span>FINANCIAL PLANNING</span>
            </div>
            <h2 className="dest-section-title">Compare what your family pays and when</h2>
            <div style={{ maxWidth: "680px", margin: "16px auto 0 auto", textAlign: "center" }}>
              <p style={{ color: "#475569", fontSize: "1.05rem" }}>
                Tuition is only one part of the decision. Housing, travel, insurance and course materials can change the total.
              </p>
              <p style={{ color: "#475569", fontSize: "1.05rem" }}>
                Check whether a quoted fee covers one year or the full programme. Ask when a deposit is due and read the refund terms.
              </p>
              <p style={{ color: "#475569", fontSize: "1.05rem" }}>
                Visa funding evidence is a separate question from everyday affordability. Check the official rules for the country and your circumstances.
              </p>
              <p style={{ color: "#475569", fontSize: "1.05rem" }}>
                Do not treat possible earnings as money already available. Build the plan without relying on a part-time job you have not secured.
              </p>
              <p style={{ color: "#475569", fontSize: "1.05rem" }}>
                A scholarship also needs its own written decision. Check its coverage and conditions before counting it in the budget.
              </p>
            </div>
          </div>

          <div className="sp-budget-grid">
            <div className="sp-budget-col">
              <div className="sp-budget-col-header outgoings">
                Actual Family Outgoings &amp; Payment Timing
              </div>
              <div className="sp-budget-col-body">
                <div className="sp-budget-item">
                  <CheckCircle2 size={18} />
                  <span>Tuition deposits, stage payments, and refund penalty deadlines</span>
                </div>
                <div className="sp-budget-item">
                  <CheckCircle2 size={18} />
                  <span>Off-campus accommodation deposits, rent advance, and utilities</span>
                </div>
                <div className="sp-budget-item">
                  <CheckCircle2 size={18} />
                  <span>Pre-arrival flight bookings, health insurance, and study materials</span>
                </div>
                <div className="sp-budget-item">
                  <CheckCircle2 size={18} />
                  <span>Contingency reserves for currency fluctuation between PKR and foreign currencies</span>
                </div>
              </div>
            </div>

            <div className="sp-budget-col">
              <div className="sp-budget-col-header evidence">
                Official Visa Funding Evidence Rules
              </div>
              <div className="sp-budget-col-body">
                <div className="sp-budget-item">
                  <CheckCircle2 size={18} />
                  <span>Specified maintenance sums set by immigration rules, not personal estimates</span>
                </div>
                <div className="sp-budget-item">
                  <CheckCircle2 size={18} />
                  <span>Consecutive holding period rules (e.g. 28 days continuous balance)</span>
                </div>
                <div className="sp-budget-item">
                  <CheckCircle2 size={18} />
                  <span>Accepted bank types, documented source of funds, and tax declarations</span>
                </div>
                <div className="sp-budget-item">
                  <CheckCircle2 size={18} />
                  <span>Formal sponsorship affidavits and relationships recognized by consular rules</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S06: Process */}
      <section className="dest-section dest-section-white" id="process">
        <div className="container">
          <div className="dest-section-header">
            <div className="dest-eyebrow-pill">
              <span className="dest-eyebrow-dot" />
              <span>SYSTEMATIC ADVISORY METHOD</span>
            </div>
            <h2 className="dest-section-title">How we work through the choices</h2>
          </div>

          <div className="sp-stepper">
            <button
              type="button"
              className={`sp-step-card ${activeStep === 1 ? "active" : ""}`}
              onClick={() => setActiveStep(activeStep === 1 ? null : 1)}
            >
              <div className="sp-step-badge">1</div>
              <div className="sp-step-content">
                <h3>Start with your goals</h3>
                <p>
                  Tell us what you have studied and what you want next. Explain any limits around budget, location or family plans.
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
                <h3>Compare realistic options</h3>
                <p>
                  Review course content, entry requirements and costs together. Ask why an option fits rather than accepting a list without reasons.
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
                <h3>Resolve the open questions</h3>
                <p>
                  Check missing information with the relevant provider or official source. An uncertain entry route should stay uncertain until confirmed.
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
                <h3>Decide what to apply for</h3>
                <p>
                  Choose which options to pursue and discuss application support separately. You stay involved in the choice before any commitment.
                </p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* S07: Before and after */}
      <section className="dest-section dest-section-alt" id="comparison">
        <div className="container">
          <div className="dest-section-header">
            <div className="dest-eyebrow-pill">
              <span className="dest-eyebrow-dot" />
              <span>CLARITY COMPARISON</span>
            </div>
            <h2 className="dest-section-title">From a long list to a reasoned choice</h2>
          </div>

          <div className="dest-comparison-grid">
            <div className="dest-card-panel pause-card">
              <div className="dest-card-header-row">
                <div className="dest-card-icon-wrap amber-bg">
                  <AlertCircle size={22} />
                </div>
                <h3 className="dest-card-title">Before the comparison</h3>
              </div>
              <p>
                You have saved course pages but cannot explain the differences. Fees appear in different formats, and entry questions remain unanswered.
              </p>
            </div>

            <div className="dest-card-panel explore-card">
              <div className="dest-card-header-row">
                <div className="dest-card-icon-wrap green-bg">
                  <CheckCircle2 size={22} />
                </div>
                <h3 className="dest-card-title">After a structured comparison</h3>
              </div>
              <p>
                You can explain what each shortlisted option offers. Costs, entry questions and next steps sit beside the reasons for choosing it.
              </p>
            </div>
          </div>

          <p style={{ textAlign: "center", marginTop: "24px", color: "#64748B", fontStyle: "italic", fontSize: "0.95rem" }}>
            This describes the purpose of the process, not a student result. Admission, scholarships and visas remain separate decisions.
          </p>
        </div>
      </section>

      {/* S08: Boundaries */}
      <section className="dest-section dest-section-white" id="boundaries">
        <div className="container">
          <div className="sp-boundary-panel">
            <div className="dest-eyebrow-pill">
              <span className="dest-eyebrow-dot" />
              <span>ADVISORY SCOPE &amp; BOUNDARIES</span>
            </div>

            <h2 className="dest-section-title" style={{ textAlign: "left", marginBottom: "16px" }}>
              Useful even if you have not chosen a country
            </h2>

            <p style={{ fontSize: "1.05rem", color: "#334155", lineHeight: "1.7", marginBottom: "16px" }}>
              You can start with a subject, career goal or budget limit. You do not need a favourite university before the first conversation.
            </p>

            <p style={{ fontSize: "1.05rem", color: "#334155", lineHeight: "1.7", marginBottom: "16px" }}>
              If you already have a shortlist, bring the questions behind it. We can discuss what you still need to compare.
            </p>

            <p style={{ fontSize: "1.05rem", color: "#334155", lineHeight: "1.7", marginBottom: "16px" }}>
              Once the choice is clearer, <Link to="/services/admission-support">application support</Link> covers the next stage. <Link to="/services/sop-guidance">SOP guidance</Link> focuses on explaining your own academic story.
            </p>

            <div className="sp-boundary-foot">
              No consultant can guarantee a scholarship, admission or visa. A careful shortlist improves the decision process, not the certainty of an outcome.
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
            <h2 className="dest-section-title">Questions about university and course matching</h2>
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
            <h2>Make the next choice with a reason</h2>

            <p>
              Start with the options that confuse you most. A free assessment gives you a place to discuss your background and priorities.
            </p>

            <div className="dest-closing-actions">
              <Link to="/assessment" className="dest-btn-primary">
                <span>Book my free assessment</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            <div style={{ marginBottom: "24px", color: "rgba(255, 255, 255, 0.85)" }}>
              <Link to="/destinations" style={{ color: "#FFA000", fontWeight: 600 }}>Browse study destinations</Link> or <Link to="/courses" style={{ color: "#FFA000", fontWeight: 600 }}>explore degree subjects</Link>.
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
