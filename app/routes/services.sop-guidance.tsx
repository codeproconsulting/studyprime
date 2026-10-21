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
  FileCheck, 
  FileText, 
  Layers, 
  Building2, 
  GraduationCap, 
  Scale, 
  Calendar, 
  AlertCircle, 
  ShieldCheck, 
  Check, 
  AlertTriangle, 
  PenTool, 
  Compass, 
  FileSpreadsheet, 
  UserCheck, 
  ChevronDown,
  Quote,
  CheckCircle,
  ExternalLink
} from "lucide-react";
import { CANONICAL_BASE_URL } from "~/utils/seo";

export const meta: MetaFunction = () => {
  const canonicalUrl = `${CANONICAL_BASE_URL}/services/sop-guidance`;
  const pageTitle = "SOP & Recommendation Support | Study Prime";
  const pageDescription =
    "Explain your study plans in your own voice. Get guidance on SOP structure, CV clarity and references with Study Prime. Start with a free assessment.";

  return [
    { title: pageTitle },
    { name: "description", content: pageDescription },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: "website" },
    { property: "og:image", content: `${CANONICAL_BASE_URL}/student.webp` },
    { property: "og:image:alt", content: "Academic writing notes, CV and Statement of Purpose drafting guide" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: pageDescription },
    { name: "twitter:image", content: `${CANONICAL_BASE_URL}/student.webp` },
    { tagName: "link", rel: "canonical", href: canonicalUrl },
  ];
};

export default function SopGuidanceRoute() {
  const canonicalUrl = `${CANONICAL_BASE_URL}/services/sop-guidance`;

  const [activeStep, setActiveStep] = useState<number | null>(1);

  const faqs = [
    {
      q: "Can I start without a draft?",
      a: "Yes. Start with your reasons for the course and your actual experience. Discuss the structure before trying to make every sentence sound finished.",
    },
    {
      q: "Will you invent a stronger story for me?",
      a: "No. Your statement must be based on your own experience. Support should make accurate information clearer, not create events or achievements.",
    },
    {
      q: "Can you help explain a study gap?",
      a: "Guidance can help you explain the facts in a clear order. It cannot remove the gap or guarantee how an institution will assess it.",
    },
    {
      q: "Can I use the same statement for every course?",
      a: "Check the application instructions and how closely the courses relate. A generic statement may miss important questions. Adapt your reasons without changing the facts.",
    },
    {
      q: "Can you write a recommendation on behalf of my referee?",
      a: "The recommendation must reflect the referee's own judgement. Guidance can clarify the requested format, but cannot invent their opinion or approval.",
    },
    {
      q: "Can editing guarantee that AI tools will not flag my statement?",
      a: "No. Do not rely on a promised detector score. Follow the institution's rules and make sure the work honestly represents you.",
    },
    {
      q: "Is this the same as visa application advice?",
      a: "No. Academic statements and immigration requirements are not interchangeable. Discuss visa questions through the relevant service and current official guidance.",
    },
    {
      q: "What does SOP support cost?",
      a: "The initial assessment is free. Confirm any paid scope, revision terms and charges before work starts. There is no outcome guarantee.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: "SOP & Recommendation Support",
        url: canonicalUrl,
        serviceType: "Statement of Purpose and academic CV guidance",
        description:
          "Explain your study plans in your own voice. Get guidance on SOP structure, CV clarity and references with Study Prime. Start with a free assessment.",
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
            name: "SOP & Recommendation Support",
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
        /* ══════════════════════════════════════════════════════════════
           FLAGSHIP SERVICE DESIGN SYSTEM · SOP & RECOMMENDATION SUPPORT
           ══════════════════════════════════════════════════════════════ */

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

        /* Hero Left Column */
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

        /* ── HERO RIGHT: STATEMENT ARCHITECTURE BLUEPRINT ── */
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

        /* ── SECTION COMMON STYLING ── */
        .sp-section {
          padding: 85px 0;
        }

        .sp-section-white {
          background: #FFFFFF;
        }

        .sp-section-light {
          background: #F8FAFC;
          border-top: 1px solid #E2E8F0;
          border-bottom: 1px solid #E2E8F0;
        }

        .sp-section-header {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 52px auto;
        }

        .sp-eyebrow-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FFFDF9;
          border: 1px solid #FED7AA;
          color: #B45309;
          padding: 5px 14px;
          border-radius: 20px;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .sp-eyebrow-dot {
          width: 8px;
          height: 8px;
          background: #FFA000;
          border-radius: 50%;
        }

        .sp-section-title {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: clamp(2rem, 3.2vw, 2.75rem);
          font-weight: 800;
          color: #011E3E;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        /* ── S02: PROBLEM EDITORIAL GRID ── */
        .sp-editorial-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: start;
        }

        @media (max-width: 992px) {
          .sp-editorial-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
        }

        .sp-editorial-prose p {
          font-size: 1.1rem;
          color: #334155;
          line-height: 1.75;
          margin-bottom: 20px;
        }

        .sp-editorial-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 16px 40px -10px rgba(1, 30, 62, 0.08);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .sp-editorial-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 16px;
          border-bottom: 1px solid #E2E8F0;
        }

        .sp-editorial-card-title {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.25rem;
          font-weight: 800;
          color: #011E3E;
        }

        .sp-annotation-pill {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-left: 5px solid #FFA000;
          border-radius: 12px;
          padding: 16px 20px;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .sp-annotation-pill:hover {
          transform: translateX(4px);
          border-color: #CBD5E1;
          border-left-color: #FFA000;
          background: #FFFDF9;
        }

        .sp-annotation-tag {
          font-size: 0.82rem;
          font-weight: 800;
          color: #B45309;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          margin-bottom: 5px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .sp-annotation-text {
          font-size: 0.98rem;
          color: #475569;
          line-height: 1.55;
          margin: 0;
        }

        /* ── S03: SCOPE BENTO GRID ── */
        .sp-scope-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 26px;
          margin-bottom: 36px;
        }

        .sp-scope-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 32px 28px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.04);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          display: flex;
          flex-direction: column;
        }

        .sp-scope-card:hover {
          transform: translateY(-5px);
          border-color: #FFA000;
          box-shadow: 0 20px 45px -10px rgba(1, 30, 62, 0.12);
        }

        .sp-scope-icon-wrap {
          width: 54px;
          height: 54px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(255, 160, 0, 0.15) 0%, rgba(1, 30, 62, 0.08) 100%);
          border: 1px solid rgba(255, 160, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #011E3E;
          margin-bottom: 22px;
        }

        .sp-scope-card h3 {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.35rem;
          font-weight: 700;
          color: #011E3E;
          margin-bottom: 12px;
        }

        .sp-scope-card p {
          color: #475569;
          font-size: 1.02rem;
          line-height: 1.65;
          margin: 0;
        }

        .sp-scope-note {
          background: #FFFDF9;
          border: 1px solid #FED7AA;
          border-left: 5px solid #FFA000;
          border-radius: 14px;
          padding: 22px 26px;
          font-size: 1.05rem;
          color: #7C2D12;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 4px 15px rgba(255, 160, 0, 0.06);
        }

        /* ── S04: OWN STORY PIPELINE ── */
        .sp-fit-container {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 36px;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.04);
          margin-top: 40px;
        }

        .sp-fit-pipeline {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 20px;
        }

        @media (max-width: 900px) {
          .sp-fit-pipeline {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .sp-fit-pipeline-arrow {
            transform: rotate(90deg);
            margin: 4px auto;
          }
        }

        .sp-fit-box {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 24px;
          text-align: center;
          transition: all 0.2s ease;
        }

        .sp-fit-box.highlight {
          background: #FFFDF9;
          border: 2px solid #FFA000;
          box-shadow: 0 8px 24px -5px rgba(255, 160, 0, 0.2);
        }

        .sp-fit-box-title {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.3rem;
          font-weight: 800;
          color: #011E3E;
          margin-bottom: 8px;
        }

        .sp-fit-box-desc {
          font-size: 0.95rem;
          color: #64748B;
          line-height: 1.5;
        }

        .sp-fit-pipeline-arrow {
          font-size: 1.6rem;
          color: #FFA000;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── S05: GAPS ADVISORY PANEL ── */
        .sp-advisory-panel {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-left: 6px solid #011E3E;
          border-radius: 18px;
          padding: 42px 48px;
          box-shadow: 0 12px 40px rgba(1, 30, 62, 0.05);
        }

        @media (max-width: 768px) {
          .sp-advisory-panel {
            padding: 28px 24px;
          }
        }

        .sp-advisory-panel p {
          font-size: 1.08rem;
          color: #334155;
          line-height: 1.75;
          margin-bottom: 18px;
        }

        .sp-advisory-foot {
          margin-top: 26px;
          padding-top: 22px;
          border-top: 1px solid #E2E8F0;
          font-size: 1.02rem;
          color: #475569;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* ── S06: WORKFLOW STEPPER ── */
        .sp-stepper-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin-top: 36px;
        }

        .sp-step-tile {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 28px;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.03);
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .sp-step-tile:hover {
          transform: translateY(-4px);
          border-color: #FFA000;
          box-shadow: 0 16px 36px -10px rgba(1, 30, 62, 0.1);
        }

        .sp-step-tile-badge {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #011E3E;
          color: #FFA000;
          font-weight: 800;
          font-size: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
        }

        .sp-step-tile h3 {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.3rem;
          font-weight: 700;
          color: #011E3E;
          margin-bottom: 10px;
        }

        .sp-step-tile p {
          color: #475569;
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
        }

        /* ── S07: BEFORE & AFTER CARDS ── */
        .sp-comparison-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: start;
        }

        @media (max-width: 768px) {
          .sp-comparison-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        .sp-comp-card {
          border-radius: 18px;
          padding: 34px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }

        .sp-comp-card-before {
          background: #FFFDF9;
          border: 1px solid #FED7AA;
          border-left: 5px solid #F59E0B;
        }

        .sp-comp-card-after {
          background: #F0FDF4;
          border: 1px solid #BBF7D0;
          border-left: 5px solid #10B981;
        }

        .sp-comp-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .sp-comp-header h3 {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.35rem;
          font-weight: 800;
          color: #011E3E;
          margin: 0;
        }

        .sp-comp-card p {
          font-size: 1.05rem;
          color: #334155;
          line-height: 1.7;
          margin: 0;
        }

        /* ── S08: INTEGRITY PANEL ── */
        .sp-integrity-panel {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 38px 42px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.03);
        }

        .sp-integrity-panel p {
          font-size: 1.05rem;
          color: #334155;
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .sp-integrity-panel a {
          color: #011E3E;
          font-weight: 700;
          text-decoration: underline;
          text-decoration-color: #FFA000;
          text-underline-offset: 4px;
          transition: color 0.15s ease;
        }

        .sp-integrity-panel a:hover {
          color: #FFA000;
        }

        .sp-integrity-warning {
          margin-top: 24px;
          padding: 16px 20px;
          background: #FEF2F2;
          border: 1px solid #FECACA;
          border-left: 4px solid #DC2626;
          border-radius: 10px;
          color: #991B1B;
          font-weight: 700;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* ── S09: FAQ ACCORDION ── */
        .sp-faq-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 900px;
          margin: 0 auto;
        }

        .sp-faq-item {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);
          overflow: hidden;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .sp-faq-item[open] {
          border-color: #FFA000;
          box-shadow: 0 10px 30px -10px rgba(255, 160, 0, 0.15);
        }

        .sp-faq-trigger {
          padding: 20px 24px;
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.25rem;
          font-weight: 700;
          color: #011E3E;
          cursor: pointer;
          min-height: 48px;
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          user-select: none;
          outline: none;
        }

        .sp-faq-trigger::-webkit-details-marker {
          display: none;
        }

        .sp-faq-trigger:focus-visible {
          background: rgba(255, 160, 0, 0.08);
          border-radius: 14px;
        }

        .sp-faq-content {
          padding: 0 24px 22px 24px;
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.7;
          border-top: 1px solid rgba(226, 232, 240, 0.6);
          margin-top: 4px;
          padding-top: 16px;
        }

        /* ── S10: CLOSING CALL TO ACTION ── */
        .sp-closing-cta {
          background: linear-gradient(135deg, #011428 0%, #011E3E 50%, #05264E 100%);
          color: #FFFFFF;
          padding: 85px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .sp-closing-cta h2 {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: clamp(2.2rem, 3.8vw, 3.2rem);
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 18px;
        }

        .sp-closing-cta p {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.88);
          max-width: 640px;
          margin: 0 auto 32px auto;
          line-height: 1.65;
        }

        .sp-closing-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }

        .sp-closing-nav-links {
          margin-top: 24px;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .sp-closing-nav-links a {
          color: #FFA000;
          text-decoration: underline;
          text-underline-offset: 4px;
          font-weight: 600;
        }

        .sp-closing-nav-links a:hover {
          color: #FFB300;
        }

        .sp-closing-contacts {
          margin-top: 14px;
          font-size: 0.98rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .sp-closing-contacts a {
          color: #FFFFFF;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.15s ease;
        }

        .sp-closing-contacts a:hover {
          color: #FFA000;
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
            <span className="current">SOP &amp; Recommendation Support</span>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════════════════
          S01. HERO SECTION (FLAGSHIP AESTHETIC WITH STATEMENT ARCHITECTURE)
          ══════════════════════════════════════════════════════════════ */}
      <section className="sp-hero-master">
        <div className="sp-hero-pattern" />
        <div className="sp-hero-glow-orb" />

        <div className="container">
          <div className="sp-hero-grid">
            {/* Left Content Column */}
            <div>
              <div className="sp-hero-eyebrow">
                <Sparkles size={14} />
                <span>OFFICIAL ADVISORY SERVICE &middot; WRITING &amp; CV</span>
              </div>

              <h1 className="sp-hero-title">
                SOP &amp; <span>Recommendation Support</span>
              </h1>

              <p className="sp-hero-lead">
                A blank page can make your study plans hard to explain. SOP guidance helps you turn your own experience into a clear statement of purpose.
              </p>

              <p className="sp-hero-body-text">
                Study Prime offers help with structure, draft review and academic CVs. Recommendation guidance keeps the referee's own judgement at the centre.
              </p>

              {/* Trust Feature Chips */}
              <div className="sp-hero-chips">
                <span className="sp-hero-chip">
                  <CheckCircle2 size={15} color="#FFA000" />
                  Structure &amp; Prompt Alignment
                </span>
                <span className="sp-hero-chip">
                  <CheckCircle2 size={15} color="#FFA000" />
                  Academic CV Formatting
                </span>
                <span className="sp-hero-chip">
                  <CheckCircle2 size={15} color="#FFA000" />
                  Referee Guidance
                </span>
                <span className="sp-hero-chip">
                  <CheckCircle2 size={15} color="#FFA000" />
                  Zero Ghostwriting
                </span>
              </div>

              {/* Dual Action Buttons */}
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
                <CheckCircle size={15} color="#10B981" style={{ flexShrink: 0 }} />
                <span>Your experience supplies the substance. The goal is clearer writing, not an invented story.</span>
              </p>
            </div>

            {/* Right Interactive Architecture Blueprint Visual */}
            <div>
              <div className="sp-blueprint-card" aria-label="Statement Architecture Blueprint">
                <div className="sp-blueprint-header">
                  <div className="sp-blueprint-dots">
                    <span className="sp-blueprint-dot" style={{ background: "#EF4444" }} />
                    <span className="sp-blueprint-dot" style={{ background: "#F59E0B" }} />
                    <span className="sp-blueprint-dot" style={{ background: "#10B981" }} />
                  </div>
                  <div className="sp-blueprint-title">
                    <PenTool size={13} color="#FFA000" />
                    <span>Statement Architecture Blueprint</span>
                  </div>
                  <span className="sp-blueprint-badge">Authentic</span>
                </div>

                <div className="sp-blueprint-body">
                  {/* Pillar 1 */}
                  <div className="sp-blueprint-section">
                    <div className="sp-blueprint-tag-row">
                      <span className="sp-blueprint-tag">Pillar 01 &middot; Motivation</span>
                      <span className="sp-blueprint-status">Prompt Alignment</span>
                    </div>
                    <div className="sp-blueprint-heading">Academic Catalyst &amp; Intent</div>
                    <p className="sp-blueprint-desc">
                      Address target department syllabus directly, avoiding generic praise or inflated boasts.
                    </p>
                  </div>

                  {/* Pillar 2 */}
                  <div className="sp-blueprint-section">
                    <div className="sp-blueprint-tag-row">
                      <span className="sp-blueprint-tag">Pillar 02 &middot; Substance</span>
                      <span className="sp-blueprint-status">Empirical Backing</span>
                    </div>
                    <div className="sp-blueprint-heading">Concrete Evidence &amp; Projects</div>
                    <p className="sp-blueprint-desc">
                      Anchor claims with verifiable lab coursework, capstone research and documented experience.
                    </p>
                  </div>

                  {/* Pillar 3 */}
                  <div className="sp-blueprint-section">
                    <div className="sp-blueprint-tag-row">
                      <span className="sp-blueprint-tag">Pillar 03 &middot; Connection</span>
                      <span className="sp-blueprint-status">Department Fit</span>
                    </div>
                    <div className="sp-blueprint-heading">Curriculum &amp; Faculty Synergy</div>
                    <p className="sp-blueprint-desc">
                      Clarify how specific postgraduate modules connect to defined career milestones.
                    </p>
                  </div>
                </div>

                <div className="sp-blueprint-footer">
                  <div className="sp-blueprint-footer-text">
                    <ShieldCheck size={16} color="#10B981" />
                    <span>100% Authentic Voice Verified</span>
                  </div>
                  <Link to="/assessment" className="sp-blueprint-footer-btn">
                    <span>Draft Review</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          S02. PROBLEM SECTION (EDITORIAL COLUMNS + MARGIN ANNOTATIONS)
          ══════════════════════════════════════════════════════════════ */}
      <section className="sp-section sp-section-white" id="problem">
        <div className="container">
          <div className="sp-editorial-grid">
            <div className="sp-editorial-prose">
              <div className="sp-eyebrow-pill">
                <span className="sp-eyebrow-dot" />
                <span>NARRATIVE CLARITY</span>
              </div>

              <h2 className="sp-section-title" style={{ textAlign: "left" }}>
                You do not need a dramatic story to sound convincing
              </h2>

              <p>
                You may know why you want the course but struggle to explain it. Or your draft may say plenty without showing what you have done.
              </p>

              <p>
                Start with the experience you can support. Explain what you learned and why the next course makes sense.
              </p>

              <p>
                A clear account of a real project is more useful than grand claims. The statement should sound like someone you would recognise in an interview.
              </p>
            </div>

            {/* Editorial Annotations Card */}
            <div>
              <div className="sp-editorial-card" aria-label="Margin Annotations">
                <div className="sp-editorial-card-header">
                  <div className="sp-editorial-card-title">Editorial Margin Annotations</div>
                  <span style={{ fontSize: "0.82rem", color: "#64748B", fontWeight: 600 }}>Three Review Dimensions</span>
                </div>

                <div className="sp-annotation-pill">
                  <div className="sp-annotation-tag">
                    <CheckCircle2 size={16} color="#FFA000" />
                    <span>Claim</span>
                  </div>
                  <p className="sp-annotation-text">
                    State clear academic and professional goals directly, avoiding generic praise or inflated boasts.
                  </p>
                </div>

                <div className="sp-annotation-pill">
                  <div className="sp-annotation-tag">
                    <CheckCircle2 size={16} color="#FFA000" />
                    <span>Evidence</span>
                  </div>
                  <p className="sp-annotation-text">
                    Back each statement with concrete modules, tangible projects, verified internships or coursework tasks.
                  </p>
                </div>

                <div className="sp-annotation-pill">
                  <div className="sp-annotation-tag">
                    <CheckCircle2 size={16} color="#FFA000" />
                    <span>Course Connection</span>
                  </div>
                  <p className="sp-annotation-text">
                    Explain exactly why this syllabus, teaching laboratory, or research department fits the next step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          S03. SCOPE SECTION (BENTO GRID + VERBATIM REASSURANCE)
          ══════════════════════════════════════════════════════════════ */}
      <section className="sp-section sp-section-light" id="scope">
        <div className="container">
          <div className="sp-section-header">
            <div className="sp-eyebrow-pill">
              <span className="sp-eyebrow-dot" />
              <span>WRITING SUPPORT BOUNDARIES</span>
            </div>
            <h2 className="sp-section-title">What the writing support covers</h2>
          </div>

          <div className="sp-scope-grid">
            {/* 1. Statement Structure */}
            <div className="sp-scope-card">
              <div className="sp-scope-icon-wrap">
                <Layers size={26} />
              </div>
              <h3>Statement structure</h3>
              <p>
                Organise your reasons for the course and relevant experience. Follow the actual application prompt rather than forcing every statement into one template.
              </p>
            </div>

            {/* 2. Draft Review */}
            <div className="sp-scope-card">
              <div className="sp-scope-icon-wrap">
                <PenTool size={26} />
              </div>
              <h3>Draft review</h3>
              <p>
                Look for vague claims, repeated ideas and missing explanations. Improve clarity while keeping your meaning and voice.
              </p>
            </div>

            {/* 3. Academic CV Clarity */}
            <div className="sp-scope-card">
              <div className="sp-scope-icon-wrap">
                <FileSpreadsheet size={26} />
              </div>
              <h3>Academic CV clarity</h3>
              <p>
                Present your education, projects and experience in a readable order. Keep dates, roles and achievements accurate.
              </p>
            </div>

            {/* 4. Recommendation Guidance */}
            <div className="sp-scope-card">
              <div className="sp-scope-icon-wrap">
                <UserCheck size={26} />
              </div>
              <h3>Recommendation guidance</h3>
              <p>
                Help you understand what the institution asks of a referee. The referee should supply and approve their own judgement.
              </p>
            </div>
          </div>

          <div className="sp-scope-note">
            <ShieldCheck size={28} color="#FFA000" style={{ flexShrink: 0 }} />
            <span>Agree the scope, revision process and any charges before paid work starts. Editing cannot guarantee an admission or scholarship decision.</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          S04. OWN STORY SECTION (PIPELINE CONNECTOR)
          ══════════════════════════════════════════════════════════════ */}
      <section className="sp-section sp-section-white" id="own-story">
        <div className="container">
          <div className="sp-section-header">
            <div className="sp-eyebrow-pill">
              <span className="sp-eyebrow-dot" />
              <span>PERSONAL RELEVANCE</span>
            </div>
            <h2 className="sp-section-title">Connect your experience to the course</h2>
            <div style={{ maxWidth: "700px", margin: "16px auto 0 auto", textAlign: "center" }}>
              <p style={{ color: "#475569", fontSize: "1.08rem", lineHeight: "1.7", marginBottom: "14px" }}>
                Name the parts of the programme that matter to your goals. Explain why they build on your studies, work or interests.
              </p>
              <p style={{ color: "#475569", fontSize: "1.08rem", lineHeight: "1.7", marginBottom: "14px" }}>
                If you mention a project, describe your actual contribution. A small task explained well is better than an achievement you cannot defend.
              </p>
              <p style={{ color: "#475569", fontSize: "1.08rem", lineHeight: "1.7", marginBottom: "14px" }}>
                For a change of subject, show what led to the decision. Explain any relevant preparation without pretending you already have missing skills.
              </p>
              <p style={{ color: "#475569", fontSize: "1.08rem", lineHeight: "1.7", marginBottom: "0" }}>
                Consider the course's value if you return to Pakistan too. Avoid claiming a guaranteed job or making migration the only reason to study.
              </p>
            </div>
          </div>

          <div className="sp-fit-container" aria-label="Course-fit Connector Diagram">
            <div className="sp-fit-pipeline">
              <div className="sp-fit-box">
                <div className="sp-fit-box-title">Experience</div>
                <div className="sp-fit-box-desc">Real projects, past studies &amp; verified tasks</div>
              </div>

              <div className="sp-fit-pipeline-arrow">&rarr;</div>

              <div className="sp-fit-box highlight">
                <div className="sp-fit-box-title">Learning</div>
                <div className="sp-fit-box-desc">Skills acquired, lessons learned &amp; gaps identified</div>
              </div>

              <div className="sp-fit-pipeline-arrow">&rarr;</div>

              <div className="sp-fit-box">
                <div className="sp-fit-box-title">Next Study</div>
                <div className="sp-fit-box-desc">Target curriculum, modules &amp; specific academic goals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          S05. GAPS AND ACCURACY SECTION (AUTHENTIC ADVISORY PANEL)
          ══════════════════════════════════════════════════════════════ */}
      <section className="sp-section sp-section-light" id="gaps">
        <div className="container">
          <div className="sp-advisory-panel">
            <div className="sp-eyebrow-pill">
              <span className="sp-eyebrow-dot" />
              <span>INTEGRITY &amp; ACCURACY</span>
            </div>

            <h2 className="sp-section-title" style={{ textAlign: "left", marginBottom: "20px" }}>
              Explain a gap without covering it up
            </h2>

            <p>
              A study gap or lower grade may need a clear explanation. Use accurate dates and describe what happened in plain language.
            </p>

            <p>
              Do not invent employment, projects or personal events to fill the space. Claims in the statement should agree with the wider application.
            </p>

            <p style={{ marginBottom: "0" }}>
              Share only the personal context needed for the question. Discuss uncertain points before turning them into a polished explanation.
            </p>

            <div className="sp-advisory-foot">
              <ShieldCheck size={20} color="#FFA000" style={{ flexShrink: 0 }} />
              <span>A strong edit makes the facts easier to understand. It does not erase the facts or promise a different decision.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          S06. PROCESS SECTION (4-STEP METHODOLOGY WORKFLOW)
          ══════════════════════════════════════════════════════════════ */}
      <section className="sp-section sp-section-white" id="process">
        <div className="container">
          <div className="sp-section-header">
            <div className="sp-eyebrow-pill">
              <span className="sp-eyebrow-dot" />
              <span>EDITING METHODOLOGY</span>
            </div>
            <h2 className="sp-section-title">How the review should work</h2>
          </div>

          <div className="sp-stepper-grid">
            {/* Step 1 */}
            <div className="sp-step-tile">
              <div className="sp-step-tile-badge">1</div>
              <h3>Check the prompt first</h3>
              <p>
                Find out what the institution asks, including the format and length. Different courses and application routes may ask different questions.
              </p>
            </div>

            {/* Step 2 */}
            <div className="sp-step-tile">
              <div className="sp-step-tile-badge">2</div>
              <h3>Build from your notes</h3>
              <p>
                Start with your own reasons, experiences and examples. You do not need a polished draft before discussing the structure.
              </p>
            </div>

            {/* Step 3 */}
            <div className="sp-step-tile">
              <div className="sp-step-tile-badge">3</div>
              <h3>Review for clarity</h3>
              <p>
                Look for unsupported claims and weak connections to the course. Then improve the order, sentences and grammar.
              </p>
            </div>

            {/* Step 4 */}
            <div className="sp-step-tile">
              <div className="sp-step-tile-badge">4</div>
              <h3>Read and approve</h3>
              <p>
                Check every detail and make sure the wording still feels like yours. Follow the institution's rules before submitting.
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "32px", color: "#64748B", fontStyle: "italic", fontSize: "1.02rem" }}>
            The applicant remains responsible for the final application. A referee remains responsible for their recommendation.
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          S07. BEFORE AND AFTER SECTION (PROCESS ILLUSTRATION)
          ══════════════════════════════════════════════════════════════ */}
      <section className="sp-section sp-section-light" id="comparison">
        <div className="container">
          <div className="sp-section-header">
            <div className="sp-eyebrow-pill">
              <span className="sp-eyebrow-dot" />
              <span>WRITING PROCESS ILLUSTRATION</span>
            </div>
            <h2 className="sp-section-title">From general claims to a clearer explanation</h2>
          </div>

          <div className="sp-comparison-grid">
            <div className="sp-comp-card sp-comp-card-before">
              <div className="sp-comp-header">
                <AlertCircle size={24} color="#F59E0B" />
                <h3>Before a focused review</h3>
              </div>
              <p>
                The draft lists strengths but gives little evidence. Course reasons could apply to almost any university.
              </p>
            </div>

            <div className="sp-comp-card sp-comp-card-after">
              <div className="sp-comp-header">
                <CheckCircle2 size={24} color="#10B981" />
                <h3>After a focused review</h3>
              </div>
              <p>
                The writing links real examples to the chosen subject. The reader can follow what you learned and why you want to continue.
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "24px", color: "#64748B", fontSize: "0.95rem" }}>
            This is a process illustration, not a claim about an applicant's result. Clearer writing does not guarantee acceptance.
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          S08. INTEGRITY AND NEXT STEP SECTION
          ══════════════════════════════════════════════════════════════ */}
      <section className="sp-section sp-section-white" id="integrity">
        <div className="container">
          <div className="sp-integrity-panel">
            <div className="sp-eyebrow-pill">
              <span className="sp-eyebrow-dot" />
              <span>ACADEMIC COMPLIANCE</span>
            </div>

            <h2 className="sp-section-title" style={{ textAlign: "left", marginBottom: "20px" }}>
              Follow the rules for your application
            </h2>

            <p>
              A statement of purpose is not always the format an application needs. Some routes use structured questions or separate responses.
            </p>

            <p>
              Check the current instructions before writing. Ask what help or tools the institution permits, including any rules on AI use.
            </p>

            <p>
              Do not copy another applicant's statement or submit invented experiences. Do not ask a referee to sign a recommendation they do not support.
            </p>

            <p>
              For the wider submission process, explore{" "}
              <Link to="/services/admission-support">application support</Link>. If the course choice is unclear, begin with{" "}
              <Link to="/services/university-matching">university matching</Link>.
            </p>

            <div className="sp-integrity-warning">
              <AlertTriangle size={20} color="#DC2626" style={{ flexShrink: 0 }} />
              <span>No consultant can guarantee a scholarship, admission or visa.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          S09. FAQ SECTION (SSR NATIVE ACCORDION)
          ══════════════════════════════════════════════════════════════ */}
      <section className="sp-section sp-section-light" id="faq">
        <div className="container">
          <div className="sp-section-header">
            <div className="sp-eyebrow-pill">
              <span className="sp-eyebrow-dot" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="sp-section-title">Questions about SOP and recommendation support</h2>
          </div>

          <div className="sp-faq-grid">
            {faqs.map((faq, idx) => (
              <details key={idx} className="sp-faq-item">
                <summary className="sp-faq-trigger">
                  <span>{faq.q}</span>
                  <ChevronDown size={18} color="#FFA000" style={{ flexShrink: 0, marginLeft: "12px" }} />
                </summary>
                <div className="sp-faq-content">
                  <p style={{ margin: 0 }}>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          S10. CLOSE SECTION (HIGH-CONVERSION CLOSING CTA)
          ══════════════════════════════════════════════════════════════ */}
      <section className="sp-closing-cta">
        <div className="container">
          <h2>Start with what you want to say</h2>
          <p>
            You do not need impressive wording before asking for help. Bring your course idea and the part you find hardest to explain.
          </p>

          <div className="sp-closing-actions">
            <Link to="/assessment" className="sp-hero-btn-primary">
              <span>Book my free assessment</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="sp-closing-nav-links">
            <Link to="/services">View all advisory services</Link> or{" "}
            <Link to="/contact">contact Study Prime</Link>.
          </div>

          <div className="sp-closing-contacts">
            Call <a href="tel:+923101193888">+92 310 1193888</a> or email{" "}
            <a href="mailto:info@studyprime.pk">info@studyprime.pk</a>.
          </div>
        </div>
      </section>
    </div>
  );
}
