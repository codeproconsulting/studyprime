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
  DollarSign, 
  AlertCircle, 
  ShieldCheck, 
  Check, 
  AlertTriangle, 
  PenTool, 
  Compass, 
  ChevronDown, 
  UserCheck, 
  HelpCircle,
  Clock,
  ArrowUpRight,
  Split,
  FileQuestion,
  Search,
  SlidersHorizontal,
  FileSpreadsheet,
  MapPin,
  Award,
  Zap,
  Info,
  ExternalLink
} from "lucide-react";
import { CANONICAL_BASE_URL } from "~/utils/seo";

export const meta: MetaFunction = () => {
  const canonicalUrl = `${CANONICAL_BASE_URL}/services/student-visa`;
  const pageTitle = "Student visa assistance | Study Prime";
  const pageDescription =
    "Student visa assistance for Pakistani applicants. Review study plans, funding evidence and interview preparation with Study Prime. Book a free assessment.";

  return [
    { title: pageTitle },
    { name: "description", content: pageDescription },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: "website" },
    { property: "og:image", content: `${CANONICAL_BASE_URL}/student.webp` },
    { property: "og:image:alt", content: "Student visa assistance with Study Prime" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: pageDescription },
    { name: "twitter:image", content: `${CANONICAL_BASE_URL}/student.webp` },
    { tagName: "link", rel: "canonical", href: canonicalUrl },
  ];
};

export default function StudentVisaRoute() {
  const canonicalUrl = `${CANONICAL_BASE_URL}/services/student-visa`;

  // Interactive Scenario Selector (S05)
  const [activeScenario, setActiveScenario] = useState<number>(0);

  const scenarios = [
    {
      id: "funding",
      title: "Funding concern",
      tag: "FINANCIAL ROUTE",
      icon: DollarSign,
      input: "My parent will pay, but I do not know which evidence applies.",
      question: "Which sponsor and account rules apply to this destination?",
      nextStep: "Confirm the permitted evidence route before choosing what to submit.",
    },
    {
      id: "course-change",
      title: "Course change",
      tag: "STUDY PROGRESSION",
      icon: GraduationCap,
      input: "My new course is different from my earlier subject.",
      question: "What real study or work experience explains this choice?",
      nextStep: "Connect your reasons to evidence you can honestly discuss.",
    },
    {
      id: "refusal",
      title: "Earlier refusal",
      tag: "CASE HISTORY",
      icon: ShieldCheck,
      input: "I have a previous refusal and want to apply again.",
      question: "What did the decision say, and what has genuinely changed?",
      nextStep: "Review the reasons before deciding whether another application is sensible.",
    },
  ];

  const faqs = [
    {
      q: "Can you guarantee my student visa?",
      a: "No. The immigration authority decides the application. Advice, preparation and interview practice do not guarantee a visa.",
    },
    {
      q: "Can I get help after a refusal?",
      a: "You can discuss the refusal and your current circumstances. A fresh application is not automatically the right response. Some matters need qualified legal advice.",
    },
    {
      q: "How much does student visa assistance cost?",
      a: "The initial assessment is free. Ask for the proposed support and charges in writing before paid work begins. Government and third-party charges are separate.",
    },
    {
      q: "Is an offer letter enough to apply?",
      a: "Not always. Your destination may require further provider confirmation, funding evidence or other steps. Check your route before treating an offer as a complete visa file.",
    },
    {
      q: "Will you give me interview answers to memorise?",
      a: "Preparation should help you explain your own circumstances. It must not invent a study plan, employment history or financial story.",
    },
    {
      q: "Can a part-time job cover the funds I need now?",
      a: "Do not build the application around work you have not secured. Work permission and funding evidence are separate questions, with country-specific rules.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: "Student visa assistance",
        url: canonicalUrl,
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
            name: "Student visa assistance",
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
           STUDENT VISA ASSISTANCE · FLAGSHIP SERVICE DESIGN SYSTEM
           Strict Study Prime Invariants matching University & Course Matching:
           --primary-navy: #011E3E
           --brand-yellow: #FFA000
           --text-white: #FFFFFF
           --bg-light: #F8FAFC
           --border-light: #E2E8F0
           ══════════════════════════════════════════════════════════════ */

        .dest-page-wrapper {
          color: #334155;
          font-family: var(--font-body, "Inter", sans-serif);
          line-height: 1.65;
          background: #FFFFFF;
          -webkit-font-smoothing: antialiased;
        }

        .dest-page-wrapper * {
          box-sizing: border-box;
        }


        /* ── CONTAINER ── */
        .container {
          max-width: 72rem;
          margin-left: auto;
          margin-right: auto;
          padding-left: 24px;
          padding-right: 24px;
        }

        @media (max-width: 640px) {
          .container {
            padding-left: 18px;
            padding-right: 18px;
          }
        }

        /* ── S01: HERO SECTION (EXACT MATCH TO UNIVERSITY MATCHING) ── */
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
          margin-bottom: 22px;
          max-width: 620px;
        }

        .sp-hero-aim-box {
          font-size: 0.98rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          margin-bottom: 26px;
          max-width: 620px;
          border-left: 3px solid #FFA000;
          padding-left: 14px;
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

        /* ── SECTION COMMONS ── */
        .sp-section {
          padding: 85px 0;
        }

        @media (max-width: 768px) {
          .sp-section {
            padding: 56px 0;
          }
        }

        .sp-section-white {
          background: #FFFFFF;
        }

        .sp-section-light {
          background: #F8FAFC;
          border-top: 1px solid #E2E8F0;
          border-bottom: 1px solid #E2E8F0;
        }

        .sp-eyebrow-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 160, 0, 0.1);
          border: 1px solid rgba(255, 160, 0, 0.35);
          color: #FFA000;
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
          font-size: clamp(2rem, 3.4vw, 2.75rem);
          font-weight: 800;
          color: #011E3E;
          line-height: 1.2;
          margin: 0 0 16px 0;
          letter-spacing: -0.01em;
        }

        .sp-section-header {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 52px auto;
        }

        /* ── S02: DECISION PATH & EDITORIAL ── */
        .dest-comparison-grid-top {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }

        @media (max-width: 992px) {
          .dest-comparison-grid-top {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }

        .sp-prose-col p {
          font-size: 1.08rem;
          color: #334155;
          line-height: 1.75;
          margin-bottom: 18px;
        }

        .sp-path-diagram {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 26px;
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
          border-color: rgba(255, 160, 0, 0.4);
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
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
        }

        .sp-path-connector {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94A3B8;
          font-size: 1.1rem;
          line-height: 1;
        }

        /* ── S03: SCOPE CARDS GRID ── */
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
          color: #FFA000;
          margin-bottom: 18px;
        }

        .sp-scope-card h3 {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
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
          border: 1px solid rgba(255, 160, 0, 0.35);
          border-left: 5px solid #FFA000;
          border-radius: 12px;
          font-size: 1.02rem;
          color: #011E3E;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        /* ── S04: FUNDING VS PAYMENT ── */
        .sp-funding-prose {
          max-width: 62ch;
          margin: 0 auto 36px auto;
          text-align: left;
        }

        .sp-funding-prose p {
          font-size: 1.08rem;
          color: #334155;
          line-height: 1.75;
          margin-bottom: 16px;
        }

        .sp-funding-comparison-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 26px;
          max-width: 920px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .sp-funding-comparison-grid {
            grid-template-columns: 1fr;
          }
        }

        .sp-funding-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .sp-funding-card:hover {
          border-color: #FFA000;
          transform: translateY(-2px);
        }

        .sp-funding-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.74rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 12px;
        }

        .sp-funding-badge.provider {
          background: #EFF6FF;
          color: #1D4ED8;
          border: 1px solid #BFDBFE;
        }

        .sp-funding-badge.visa {
          background: rgba(255, 160, 0, 0.12);
          color: #FFA000;
          border: 1px solid rgba(255, 160, 0, 0.35);
        }

        .sp-funding-card h3 {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.38rem;
          font-weight: 800;
          color: #011E3E;
          margin: 0 0 14px 0;
        }

        .sp-funding-card p {
          font-size: 0.98rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .sp-funding-card ul {
          margin: 0;
          padding-left: 20px;
          color: #475569;
          font-size: 0.94rem;
          line-height: 1.6;
        }

        .sp-funding-card li {
          margin-bottom: 8px;
        }

        /* ── S05: PROGRESSIVE SCENARIO EXPLAINER ── */
        .sp-scenario-master {
          max-width: 920px;
          margin: 0 auto;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 22px;
          padding: 38px;
          box-shadow: 0 20px 50px -15px rgba(1, 30, 62, 0.08);
        }

        @media (max-width: 640px) {
          .sp-scenario-master {
            padding: 22px;
          }
        }

        .sp-scenario-caption {
          font-size: 0.92rem;
          color: #64748B;
          font-style: italic;
          margin-bottom: 26px;
          text-align: center;
        }

        .sp-scenario-selector-tabs {
          display: flex;
          gap: 12px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .sp-scenario-tab {
          flex: 1;
          min-width: 190px;
          min-height: 52px;
          padding: 12px 20px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          font-size: 0.98rem;
          font-weight: 700;
          color: #011E3E;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-align: center;
        }

        @media (max-width: 640px) {
          .sp-scenario-tab {
            width: 100%;
            flex: none;
          }
        }

        .sp-scenario-tab:hover {
          background: #EFF6FF;
          border-color: #FFA000;
          transform: translateY(-1px);
        }

        .sp-scenario-tab.active {
          background: #011E3E;
          color: #FFFFFF;
          border-color: #FFA000;
          box-shadow: 0 8px 20px rgba(255, 160, 0, 0.25);
        }

        .sp-scenario-tab.active svg {
          color: #FFA000;
        }

        .sp-scenario-display-box {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .sp-flow-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 18px 22px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
        }

        .sp-flow-tag {
          font-size: 0.74rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .sp-flow-text {
          font-size: 1.08rem;
          color: #011E3E;
          font-weight: 600;
          line-height: 1.5;
          margin: 0;
        }

        .sp-scenario-status-ribbon {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          background: #FFFDF9;
          border: 1px solid rgba(255, 160, 0, 0.35);
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #011E3E;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 22px;
        }

        .sp-scenario-action-wrap {
          margin-top: 28px;
          text-align: center;
        }

        .sp-scenario-action-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #FFA000;
          color: #011E3E !important;
          font-weight: 800;
          font-size: 1.02rem;
          padding: 14px 28px;
          border-radius: 10px;
          text-decoration: none;
          min-height: 50px;
          box-shadow: 0 8px 20px rgba(255, 160, 0, 0.35);
          transition: all 0.2s ease;
        }

        .sp-scenario-action-btn:hover {
          background: #FFB300;
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(255, 160, 0, 0.45);
        }

        /* ── S06: INTERVIEW & CREDIBILITY ── */
        .sp-interview-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 48px;
          align-items: center;
        }

        @media (max-width: 992px) {
          .sp-interview-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
        }

        .sp-interview-prose p {
          font-size: 1.1rem;
          color: #334155;
          line-height: 1.75;
          margin-bottom: 18px;
          max-width: 62ch;
        }

        .sp-emphasis-rail {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 18px 45px -12px rgba(1, 30, 62, 0.08);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .sp-rail-header {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.3rem;
          font-weight: 800;
          color: #011E3E;
          border-bottom: 2px solid #F1F5F9;
          padding-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .sp-rail-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .sp-rail-item-icon {
          color: #FFA000;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .sp-rail-item-title {
          font-size: 0.98rem;
          font-weight: 700;
          color: #011E3E;
          margin-bottom: 3px;
        }

        .sp-rail-item-desc {
          font-size: 0.88rem;
          color: #64748B;
          line-height: 1.5;
        }

        /* ── S07: PROCESS & COMPARISON ── */
        .sp-timeline-wrapper {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 880px;
          margin: 0 auto 52px auto;
        }

        .sp-timeline-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 24px 28px;
          display: flex;
          gap: 22px;
          align-items: flex-start;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);
          transition: all 0.25s ease;
        }

        .sp-timeline-card:hover {
          border-color: #FFA000;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px -6px rgba(1, 30, 62, 0.1);
        }

        .sp-timeline-digit {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #011E3E;
          color: #FFA000;
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-weight: 800;
          font-size: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(1, 30, 62, 0.18);
        }

        .sp-timeline-body h3 {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.3rem;
          font-weight: 700;
          color: #011E3E;
          margin: 0 0 6px 0;
        }

        .sp-timeline-body p {
          font-size: 1.02rem;
          color: #475569;
          line-height: 1.6;
          margin: 0;
        }

        .sp-comparison-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          max-width: 880px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .sp-comparison-cards-grid {
            grid-template-columns: 1fr;
          }
        }

        .sp-comp-box {
          border-radius: 16px;
          padding: 26px;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.02);
        }

        .sp-comp-box.before {
          background: #FEF2F2;
          border: 1px solid #FECACA;
          border-left: 5px solid #EF4444;
        }

        .sp-comp-box.after {
          background: #ECFDF5;
          border: 1px solid #A7F3D0;
          border-left: 5px solid #10B981;
        }

        .sp-comp-box-header {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.22rem;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .sp-comp-box.before .sp-comp-box-header {
          color: #991B1B;
        }

        .sp-comp-box.after .sp-comp-box-header {
          color: #065F46;
        }

        .sp-comp-box p {
          font-size: 1.02rem;
          color: #334155;
          line-height: 1.65;
          margin: 0;
        }

        .sp-process-disclaimer {
          text-align: center;
          max-width: 720px;
          margin: 26px auto 0 auto;
          color: #64748B;
          font-size: 0.92rem;
          font-style: italic;
        }

        /* ── S08: CHOOSE SUPPORT ── */
        .sp-choose-box {
          max-width: 880px;
          margin: 0 auto;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 22px;
          padding: 46px;
          box-shadow: 0 20px 50px -15px rgba(1, 30, 62, 0.08);
        }

        @media (max-width: 640px) {
          .sp-choose-box {
            padding: 26px;
          }
        }

        .sp-choose-box p {
          font-size: 1.1rem;
          color: #334155;
          line-height: 1.75;
          margin-bottom: 18px;
        }

        .sp-caution-banner {
          margin: 30px 0;
          padding: 18px 22px;
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

        .sp-cross-nav-cluster {
          margin-top: 26px;
          padding: 24px;
          background: #F8FAFC;
          border-radius: 14px;
          border: 1px solid #E2E8F0;
          font-size: 1.04rem;
          color: #475569;
          line-height: 1.7;
        }

        .sp-cross-nav-cluster a {
          color: #011E3E;
          font-weight: 700;
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: color 0.15s ease;
        }

        .sp-cross-nav-cluster a:hover {
          color: #FFA000;
        }

        /* ── S09: FAQ ACCORDION ── */
        .sp-faq-accordion-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 880px;
          margin: 0 auto;
        }

        .sp-faq-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);
          overflow: hidden;
          transition: all 0.25s ease;
        }

        .sp-faq-card[open] {
          border-color: #FFA000;
          box-shadow: 0 10px 30px -8px rgba(255, 160, 0, 0.15);
        }

        .sp-faq-summary {
          padding: 22px 26px;
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.28rem;
          font-weight: 700;
          color: #011E3E;
          cursor: pointer;
          min-height: 52px;
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          user-select: none;
          outline: none;
        }

        .sp-faq-summary::-webkit-details-marker {
          display: none;
        }

        .sp-faq-summary:focus-visible {
          background: #FFFDF9;
        }

        .sp-faq-body {
          padding: 0 26px 24px 26px;
          font-size: 1.06rem;
          color: #475569;
          line-height: 1.7;
          border-top: 1px solid #E2E8F0;
          margin-top: 4px;
          padding-top: 18px;
        }

        /* ── S10: CLOSING MASTER CTA ── */
        .sp-closing-cta {
          background: radial-gradient(circle at 50% 20%, rgba(255, 160, 0, 0.15) 0%, transparent 50%),
                      linear-gradient(135deg, #011428 0%, #011E3E 55%, #05264E 100%);
          color: #FFFFFF;
          padding: 92px 0 88px;
          text-align: center;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .sp-closing-cta h2 {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: clamp(2.3rem, 4vw, 3.4rem);
          font-weight: 800;
          color: #FFFFFF;
          margin: 0 0 18px 0;
          letter-spacing: -0.01em;
        }

        .sp-closing-cta p {
          font-size: 1.18rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 62ch;
          margin: 0 auto 20px auto;
          line-height: 1.7;
        }

        .sp-closing-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin: 32px 0 28px 0;
        }

        .sp-closing-contacts-block {
          margin-top: 28px;
          padding-top: 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.14);
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.7;
        }

        .sp-closing-contacts-block a {
          color: #FFA000;
          text-decoration: underline;
          text-underline-offset: 4px;
          font-weight: 700;
          transition: color 0.15s ease;
        }

        .sp-closing-contacts-block a:hover {
          color: #FFB300;
        }

        .sp-closing-address-line {
          margin-top: 14px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
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
            <span className="current">Student Visa Assistance</span>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════════════════
          S01. HERO SECTION (EXACT MATCH TO UNIVERSITY & COURSE MATCHING)
          ══════════════════════════════════════════════════════════════ */}
      <section className="sp-hero-master">
        <div className="sp-hero-pattern" />
        <div className="sp-hero-glow-orb" />

        <div className="container">
          <div className="sp-hero-grid">
            {/* Left Column */}
            <div>
              <div className="sp-hero-eyebrow">
                <Sparkles size={14} color="#FFA000" />
                <span>OFFICIAL ADVISORY SERVICE &middot; VISA PREPARATION</span>
              </div>

              <h1 className="sp-hero-title">
                Student Visa &amp; <br />
                <span>Assistance</span>
              </h1>

              <p className="sp-hero-lead">
                An offer letter is good news. Unclear funding evidence can still leave you unsure what to do next. Student visa assistance helps you prepare the next stage with a clearer view of your case.
              </p>

              <p className="sp-hero-body-text">
                Study Prime supports visa preparation, financial evidence review and interview practice. Bring your real circumstances into the conversation, including anything that worries you.
              </p>

              <div className="sp-hero-aim-box">
                The aim is a file you understand and answers you can explain. A polished application cannot replace genuine evidence.
              </div>

              {/* Feature Chips */}
              <div className="sp-hero-chips">
                <span className="sp-hero-chip">
                  <CheckCircle2 size={15} color="#FFA000" />
                  Visa preparation &amp; checklist
                </span>
                <span className="sp-hero-chip">
                  <CheckCircle2 size={15} color="#FFA000" />
                  Financial evidence review
                </span>
                <span className="sp-hero-chip">
                  <CheckCircle2 size={15} color="#FFA000" />
                  Interview practice
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
                <span>For students and parents preparing a study visa application from Pakistan.</span>
              </p>
            </div>

            {/* Right Column: Blueprint Visual (Exact Match to Screenshot) */}
            <div>
              <div className="sp-blueprint-card" aria-label="Visa Assistance Blueprint">
                <div className="sp-blueprint-header">
                  <div className="sp-blueprint-dots">
                    <span className="sp-blueprint-dot" style={{ background: "#EF4444" }} />
                    <span className="sp-blueprint-dot" style={{ background: "#F59E0B" }} />
                    <span className="sp-blueprint-dot" style={{ background: "#10B981" }} />
                  </div>
                  <div className="sp-blueprint-title">
                    <ShieldCheck size={13} color="#FFA000" />
                    <span>Visa Preparation Blueprint</span>
                  </div>
                  <span className="sp-blueprint-badge">Evidence-Based</span>
                </div>

                <div className="sp-blueprint-body">
                  {/* Pillar 1 */}
                  <div className="sp-blueprint-section">
                    <div className="sp-blueprint-tag-row">
                      <span className="sp-blueprint-tag">Criterion 01 &middot; Foundation</span>
                      <span className="sp-blueprint-status">Study Plan Review</span>
                    </div>
                    <div className="sp-blueprint-heading">A Review of Your Study Plan</div>
                    <p className="sp-blueprint-desc">
                      Discuss why you chose the course and how it fits your background. Explain gaps, changes and earlier decisions.
                    </p>
                  </div>

                  {/* Pillar 2 */}
                  <div className="sp-blueprint-section">
                    <div className="sp-blueprint-tag-row">
                      <span className="sp-blueprint-tag">Criterion 02 &middot; Financials</span>
                      <span className="sp-blueprint-status">Evidence Audit</span>
                    </div>
                    <div className="sp-blueprint-heading">Funding Evidence Questions</div>
                    <p className="sp-blueprint-desc">
                      Review who is paying and which evidence route applies. Check source, access and timing of funds.
                    </p>
                  </div>

                  {/* Pillar 3 */}
                  <div className="sp-blueprint-section">
                    <div className="sp-blueprint-tag-row">
                      <span className="sp-blueprint-tag">Criterion 03 &middot; Credibility</span>
                      <span className="sp-blueprint-status">Mock Interview</span>
                    </div>
                    <div className="sp-blueprint-heading">Application &amp; Interview Practice</div>
                    <p className="sp-blueprint-desc">
                      Check consistency across answers and supporting evidence before submission. Practise in your own words.
                    </p>
                  </div>
                </div>

                <div className="sp-blueprint-footer">
                  <div className="sp-blueprint-footer-text">
                    <ShieldCheck size={16} color="#10B981" />
                    <span>100% Genuine Evidence Verified</span>
                  </div>
                  <Link to="/assessment" className="sp-blueprint-footer-btn">
                    <span>Check Eligibility</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          S02. PROBLEM SECTION (EDITORIAL COLUMNS + STRUCTURED PATH)
          ══════════════════════════════════════════════════════════════ */}
      <section className="sp-section sp-section-white" id="attention">
        <div className="container">
          <div className="dest-comparison-grid-top">
            {/* Left Prose */}
            <div className="sp-prose-col">
              <div className="sp-eyebrow-pill">
                <span className="sp-eyebrow-dot" />
                <span>PRE-SUBMISSION CLARITY</span>
              </div>

              <h2 className="sp-section-title" style={{ textAlign: "left" }}>
                Know what needs attention before you submit
              </h2>

              <p>
                A sponsor may have enough money but need a different evidence route. A course change may make sense but remain unexplained in the application.
              </p>

              <p>
                These are different problems. They need different questions, rather than a larger pile of papers.
              </p>

              <p>
                Start by connecting your course, study history and funding plan. Then identify which requirements apply to your destination and situation.
              </p>

              <p style={{ marginBottom: "0" }}>
                You should know what is ready, what needs clarification and what remains uncertain. That makes the next decision easier to discuss as a family.
              </p>
            </div>

            {/* Right: Path Diagram */}
            <div className="sp-path-diagram" aria-label="Visa File Diagnostic Sequence">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ fontWeight: 700, color: "#011E3E" }}>Preparation Sequence</span>
                <span style={{ fontSize: "0.82rem", color: "#64748B" }}>4 Structured Milestones</span>
              </div>

              <div className="sp-path-node">
                <div className="sp-path-num">1</div>
                <div>
                  <div className="sp-path-label">Study history</div>
                  <div style={{ fontSize: "0.85rem", color: "#64748B" }}>Course coherence, qualifications &amp; study gaps</div>
                </div>
              </div>

              <div className="sp-path-connector">&darr;</div>

              <div className="sp-path-node">
                <div className="sp-path-num">2</div>
                <div>
                  <div className="sp-path-label">Funding route</div>
                  <div style={{ fontSize: "0.85rem", color: "#64748B" }}>Sponsor rules, holding duration &amp; source origin</div>
                </div>
              </div>

              <div className="sp-path-connector">&darr;</div>

              <div className="sp-path-node">
                <div className="sp-path-num">3</div>
                <div>
                  <div className="sp-path-label">Destination criteria</div>
                  <div style={{ fontSize: "0.85rem", color: "#64748B" }}>Embassy-specific genuine student requirements</div>
                </div>
              </div>

              <div className="sp-path-connector">&darr;</div>

              <div className="sp-path-node highlighted">
                <div className="sp-path-num">4</div>
                <div>
                  <div className="sp-path-label">Family clarity</div>
                  <div style={{ fontSize: "0.85rem", color: "#64748B" }}>Resolved open questions before financial commitments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          S03. SCOPE SECTION (CARDS GRID WITH NOTE BANNER)
          ══════════════════════════════════════════════════════════════ */}
      <section className="sp-section sp-section-light" id="scope">
        <div className="container">
          <div className="sp-section-header">
            <div className="sp-eyebrow-pill">
              <span className="sp-eyebrow-dot" />
              <span>SERVICE SCOPE</span>
            </div>
            <h2 className="sp-section-title">What visa preparation covers</h2>
          </div>

          <div className="sp-scope-grid">
            {/* Card 1 */}
            <div className="sp-scope-card">
              <div className="sp-scope-icon-wrap">
                <BookOpen size={24} />
              </div>
              <h3>A review of your study plan</h3>
              <p>
                Discuss why you chose the course and how it fits your background. Explain gaps, changes and earlier immigration decisions honestly.
              </p>
            </div>

            {/* Card 2 */}
            <div className="sp-scope-card">
              <div className="sp-scope-icon-wrap">
                <DollarSign size={24} />
              </div>
              <h3>Funding evidence questions</h3>
              <p>
                Review who is paying and which evidence route may apply. Check whether the source, access and timing of funds need further explanation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="sp-scope-card">
              <div className="sp-scope-icon-wrap">
                <FileCheck size={24} />
              </div>
              <h3>Application preparation</h3>
              <p>
                Work through the information the relevant authority requires. Check consistency across your answers and supporting evidence before submission.
              </p>
            </div>

            {/* Card 4 */}
            <div className="sp-scope-card">
              <div className="sp-scope-icon-wrap">
                <UserCheck size={24} />
              </div>
              <h3>Interview practice</h3>
              <p>
                Practise explaining your actual plans in your own words. Useful preparation helps you answer clearly rather than memorise a script.
              </p>
            </div>
          </div>

          <div className="sp-note-banner">
            <ShieldCheck size={26} color="#FFA000" style={{ flexShrink: 0 }} />
            <span>
              Agree the support, responsibilities and any charges before paid work starts. Government charges and other third-party costs are separate from advisory fees.
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          S04. FUNDING VS PAYMENT (TWO-COLUMN ARCHITECTURAL COMPARISON)
          ══════════════════════════════════════════════════════════════ */}
      <section className="sp-section sp-section-white" id="funding-story">
        <div className="container">
          <div className="sp-section-header">
            <div className="sp-eyebrow-pill">
              <span className="sp-eyebrow-dot" />
              <span>FINANCIAL REALITY</span>
            </div>
            <h2 className="sp-section-title">A bank balance is only part of the funding story</h2>
          </div>

          <div className="sp-funding-prose">
            <p>
              A tuition deposit is a payment to a provider. Evidence of living funds answers a different question for the visa application.
            </p>
            <p>
              Your route may have rules about acceptable sponsors, account ownership or evidence dates. A statement showing enough money does not settle every requirement.
            </p>
            <p>
              Check the official rules for your own country and application date. Do not move money simply to create a more attractive statement.
            </p>
            <p style={{ marginBottom: "0" }}>
              Keep expected wages and undecided scholarships outside your confirmed funding plan. They are not money already available to pay your costs.
            </p>
          </div>

          <div className="sp-funding-comparison-grid">
            {/* Column 1: Tuition Deposit */}
            <div className="sp-funding-card">
              <div className="sp-funding-badge provider">
                <Building2 size={13} />
                <span>Provider Payment</span>
              </div>
              <h3>Tuition Deposit to University</h3>
              <p>
                A payment made directly to the university or college to secure your confirmed academic place and CAS/COE.
              </p>
              <ul>
                <li>Secures provider registration and enrolment seat</li>
                <li>Subject to university institutional refund terms</li>
                <li>Does not evaluate overseas maintenance capacity</li>
                <li>Receipt only proves fee transfer to an educational body</li>
              </ul>
            </div>

            {/* Column 2: Visa Maintenance Funds */}
            <div className="sp-funding-card">
              <div className="sp-funding-badge visa">
                <ShieldCheck size={13} />
                <span>Visa Maintenance</span>
              </div>
              <h3>Living Funds for Immigration</h3>
              <p>
                Strict legal demonstration of continuous liquid capital to sustain your entire overseas living duration.
              </p>
              <ul>
                <li>Strict holding periods apply (e.g. 28 continuous days)</li>
                <li>Limited permitted sponsor relationships (parents vs distant third parties)</li>
                <li>Clear, documented legitimate financial origin required</li>
                <li>Funds must remain accessible and unencumbered during review</li>
              </ul>
            </div>
          </div>

          <div className="sp-note-banner" style={{ maxWidth: "920px", margin: "32px auto 0 auto" }}>
            <AlertTriangle size={26} color="#FFA000" style={{ flexShrink: 0 }} />
            <span>
              Important rule: Do not move funds simply to create an artificial statement, and keep expected future wages or undecided scholarships outside your confirmed funding file.
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          S05. PROGRESSIVE SCENARIO EXPLAINER (INTERACTIVE COMPONENT)
          ══════════════════════════════════════════════════════════════ */}
      <section className="sp-section sp-section-light" id="walkthrough">
        <div className="container">
          <div className="sp-section-header">
            <div className="sp-eyebrow-pill">
              <span className="sp-eyebrow-dot" />
              <span>PREPARATION WALKTHROUGH</span>
            </div>
            <h2 className="sp-section-title">See how a concern becomes a useful question</h2>
          </div>

          <div className="sp-scenario-master">
            <div className="sp-scenario-caption">
              Illustrative preparation walkthrough. This is a made-up scenario, not a client case or visa decision.
            </div>

            {/* 3-Button Concern Selector */}
            <div className="sp-scenario-selector-tabs" role="tablist" aria-label="Scenario Selection">
              {scenarios.map((sc, index) => {
                const IconComponent = sc.icon;
                return (
                  <button
                    key={sc.id}
                    type="button"
                    role="tab"
                    aria-selected={activeScenario === index}
                    aria-controls={`scenario-panel-${sc.id}`}
                    className={`sp-scenario-tab ${activeScenario === index ? "active" : ""}`}
                    onClick={() => setActiveScenario(index)}
                  >
                    <IconComponent size={18} />
                    <span>{sc.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Interactive Panel Content */}
            <div
              id={`scenario-panel-${scenarios[activeScenario].id}`}
              role="tabpanel"
              className="sp-scenario-display-box"
            >
              {/* Input Card */}
              <div className="sp-flow-card" style={{ borderLeft: "4px solid #64748B" }}>
                <div className="sp-flow-tag" style={{ color: "#475569" }}>
                  <AlertCircle size={14} />
                  <span>Input</span>
                </div>
                <p className="sp-flow-text" style={{ fontStyle: "italic", color: "#334155" }}>
                  "{scenarios[activeScenario].input}"
                </p>
              </div>

              {/* Question Card */}
              <div className="sp-flow-card" style={{ borderLeft: "4px solid #FFA000", background: "#FFFDF9" }}>
                <div className="sp-flow-tag" style={{ color: "#FFA000" }}>
                  <HelpCircle size={14} />
                  <span>Preparation question</span>
                </div>
                <p className="sp-flow-text" style={{ color: "#011E3E", fontWeight: 700 }}>
                  {scenarios[activeScenario].question}
                </p>
              </div>

              {/* Next Step Card */}
              <div className="sp-flow-card" style={{ borderLeft: "4px solid #10B981", background: "#F0FDF4" }}>
                <div className="sp-flow-tag" style={{ color: "#059669" }}>
                  <CheckCircle2 size={14} />
                  <span>Next step</span>
                </div>
                <p className="sp-flow-text" style={{ color: "#065F46", fontWeight: 700 }}>
                  {scenarios[activeScenario].nextStep}
                </p>
              </div>
            </div>

            {/* Status Ribbon */}
            <div className="sp-scenario-status-ribbon">
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Clock size={18} color="#FFA000" />
                <span>Status: Preparation questions identified. Eligibility and outcome remain unconfirmed.</span>
              </div>
            </div>

            <div className="sp-scenario-action-wrap">
              <Link to="/assessment" className="sp-scenario-action-btn">
                <span>Discuss my situation</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          S06. INTERVIEW & CREDIBILITY SECTION
          ══════════════════════════════════════════════════════════════ */}
      <section className="sp-section sp-section-white" id="credibility">
        <div className="container">
          <div className="sp-interview-grid">
            <div className="sp-interview-prose">
              <div className="sp-eyebrow-pill">
                <span className="sp-eyebrow-dot" />
                <span>INTERVIEW PREPARATION</span>
              </div>

              <h2 className="sp-section-title" style={{ textAlign: "left" }}>
                Prepare answers you can stand behind
              </h2>

              <p>
                An interview is not a performance of someone else's story. You need to understand your course, costs and reasons for studying.
              </p>

              <p>
                Discuss unclear points before practising answers. If your plans have changed, explain what changed and why.
              </p>

              <p>
                Do not hide a refusal or invent employment to fill a gap. False information can create much bigger problems than an honest explanation.
              </p>

              <p style={{ marginBottom: "0" }}>
                Some cases need advice beyond routine application support. Ask whether the issue needs a suitably qualified immigration professional before proceeding.
              </p>
            </div>

            {/* Narrow quote-free emphasis rail */}
            <div>
              <div className="sp-emphasis-rail" aria-label="Credibility Guidance Rails">
                <div className="sp-rail-header">
                  <ShieldCheck size={22} color="#FFA000" />
                  <span>Credibility Guidance Principles</span>
                </div>

                <div className="sp-rail-item">
                  <CheckCircle2 size={20} className="sp-rail-item-icon" />
                  <div>
                    <div className="sp-rail-item-title">Understanding Your Course &amp; Costs</div>
                    <div className="sp-rail-item-desc">
                      Explain modules and career progression in your own authentic words rather than memorised templates.
                    </div>
                  </div>
                </div>

                <div className="sp-rail-item">
                  <CheckCircle2 size={20} className="sp-rail-item-icon" />
                  <div>
                    <div className="sp-rail-item-title">Full Disclosure of Prior Decisions</div>
                    <div className="sp-rail-item-desc">
                      Address previous refusals or study gaps honestly. Discrepancies between oral statements and records damage credibility.
                    </div>
                  </div>
                </div>

                <div className="sp-rail-item">
                  <CheckCircle2 size={20} className="sp-rail-item-icon" />
                  <div>
                    <div className="sp-rail-item-title">Immigration Professional Referrals</div>
                    <div className="sp-rail-item-desc">
                      Complex legal issues or adverse immigration history may require formal representation from a licensed professional.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          S07. PROCESS SECTION (VERTICAL TIMELINE + BEFORE/TARGET STATE)
          ══════════════════════════════════════════════════════════════ */}
      <section className="sp-section sp-section-light" id="process">
        <div className="container">
          <div className="sp-section-header">
            <div className="sp-eyebrow-pill">
              <span className="sp-eyebrow-dot" />
              <span>STRUCTURED METHODOLOGY</span>
            </div>
            <h2 className="sp-section-title">A clearer preparation process</h2>
          </div>

          {/* Vertical Process Timeline */}
          <div className="sp-timeline-wrapper">
            {/* Step 1 */}
            <div className="sp-timeline-card">
              <div className="sp-timeline-digit">1</div>
              <div className="sp-timeline-body">
                <h3>Begin with your actual position</h3>
                <p>
                  Tell the adviser your destination, course stage and main concern. Include any earlier visa decisions or important changes.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="sp-timeline-card">
              <div className="sp-timeline-digit">2</div>
              <div className="sp-timeline-body">
                <h3>Separate evidence from assumptions</h3>
                <p>
                  Review the applicable requirements and identify unanswered questions. Confirm who must obtain each answer and what may affect timing.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="sp-timeline-card">
              <div className="sp-timeline-digit">3</div>
              <div className="sp-timeline-body">
                <h3>Review before submission</h3>
                <p>
                  Read the application yourself and check that it reflects your circumstances. Understand the declarations before giving approval.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="sp-timeline-card">
              <div className="sp-timeline-digit">4</div>
              <div className="sp-timeline-body">
                <h3>Follow the authority's next steps</h3>
                <p>
                  Respond to genuine requests and keep records of submissions. An appointment, payment or application receipt is not visa approval.
                </p>
              </div>
            </div>
          </div>

          {/* Before & Target State Comparison */}
          <div className="sp-comparison-cards-grid">
            <div className="sp-comp-box before">
              <div className="sp-comp-box-header">
                <AlertCircle size={22} color="#DC2626" />
                <span>Before</span>
              </div>
              <p>
                Mixed messages, unexplained gaps and uncertainty about what you are declaring.
              </p>
            </div>

            <div className="sp-comp-box after">
              <div className="sp-comp-box-header">
                <CheckCircle2 size={22} color="#059669" />
                <span>Target state</span>
              </div>
              <p>
                A reviewed application, clear open questions and a student who understands the submission.
              </p>
            </div>
          </div>

          <div className="sp-process-disclaimer">
            This compares preparation processes. It does not promise approval or a faster decision.
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          S08. CHOOSE SUPPORT SECTION (NAVY HEADING ON WHITE + FIT LINKS)
          ══════════════════════════════════════════════════════════════ */}
      <section className="sp-section sp-section-white" id="choose-support">
        <div className="container">
          <div className="sp-choose-box">
            <div className="sp-eyebrow-pill">
              <span className="sp-eyebrow-dot" />
              <span>INFORMED ADVISORY</span>
            </div>

            <h2 className="sp-section-title" style={{ textAlign: "left", marginBottom: "20px" }}>
              Choose support that leaves you informed
            </h2>

            <p>
              You should be able to ask why a requirement matters. You should also know what your adviser can and cannot control.
            </p>

            <p>
              Study Prime brings course, admissions and visa preparation support into one advisory journey. That helps you discuss how an earlier decision affects the next stage.
            </p>

            <p>
              This service suits applicants who want honest review and will provide accurate information. It does not suit anyone seeking invented evidence or a guaranteed visa.
            </p>

            <div className="sp-caution-banner">
              <AlertTriangle size={24} color="#DC2626" style={{ flexShrink: 0 }} />
              <span>No consultant can guarantee a scholarship, admission or visa, and we do not.</span>
            </div>

            <div className="sp-cross-nav-cluster">
              Still deciding what to study? Start with{" "}
              <Link to="/services/university-matching">university and course matching</Link>. Need help with an offer? See{" "}
              <Link to="/services/admission-support">admissions support</Link>.
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          S09. FAQ SECTION (SSR NATIVE DETAILS ACCORDION)
          ══════════════════════════════════════════════════════════════ */}
      <section className="sp-section sp-section-light" id="faq">
        <div className="container">
          <div className="sp-section-header">
            <div className="sp-eyebrow-pill">
              <span className="sp-eyebrow-dot" />
              <span>COMMON INQUIRIES</span>
            </div>
            <h2 className="sp-section-title">Questions before you start</h2>
          </div>

          <div className="sp-faq-accordion-grid">
            {faqs.map((faq, idx) => (
              <details key={idx} className="sp-faq-card">
                <summary className="sp-faq-summary">
                  <span>{faq.q}</span>
                  <div style={{ 
                    width: "32px", 
                    height: "32px", 
                    borderRadius: "50%", 
                    background: "rgba(255, 160, 0, 0.12)", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    flexShrink: 0, 
                    marginLeft: "14px" 
                  }}>
                    <ChevronDown size={18} color="#FFA000" />
                  </div>
                </summary>
                <div className="sp-faq-body">
                  <p style={{ margin: 0 }}>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          S10. CLOSING MASTER CALL TO ACTION & CONTACT BLOCK
          ══════════════════════════════════════════════════════════════ */}
      <section className="sp-closing-cta">
        <div className="container">
          <h2>Bring the concern you keep putting off</h2>

          <p>
            You do not need to pretend every part of your plan is settled. Start with the question that could change your next decision.
          </p>

          <p>
            Book Study Prime's free assessment to discuss your current stage. Ask what preparation support fits and which issues need specialist review.
          </p>

          <div className="sp-closing-actions">
            <Link to="/assessment" className="sp-hero-btn-primary">
              <span>Book my free assessment</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="sp-closing-contacts-block">
            <div>
              <Link to="/contact">Contact Study Prime</Link> or email{" "}
              <a href="mailto:info@studyprime.pk">info@studyprime.pk</a>.
            </div>

            <div className="sp-closing-address-line">
              <MapPin size={16} color="#FFA000" />
              <span>Visit Office #F-15, First Floor, Galleria Mall, I-8 Markaz, Islamabad, Pakistan. Call </span>
              <a href="tel:+923101193888">+92 310 1193888</a>
              <span> or </span>
              <a href="tel:+92518740888">+92 51 8740888</a>.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
