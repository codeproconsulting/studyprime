import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";
import { 
  ArrowRight, 
  PhoneCall, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  GraduationCap, 
  ShieldCheck, 
  BookOpen, 
  DollarSign, 
  Calendar, 
  AlertCircle,
  FileText,
  Clock,
  Compass,
  Scale,
  Users,
  ShieldAlert,
  HelpCircle,
  Briefcase,
  FileCheck,
  Award,
  Layers
} from "lucide-react";
import { CANONICAL_BASE_URL } from "~/utils/seo";

export const meta: MetaFunction = () => {
  const canonicalUrl = `${CANONICAL_BASE_URL}/destinations/study-in-australia`;
  const pageTitle = "Study in Australia | Admissions, Fees & Student Visa | Study Prime";
  const pageDescription =
    "Study in Australia with a clearer course and funding plan. Explore admissions, costs, scholarships and visa questions with Study Prime. Book a free assessment.";

  return [
    { title: pageTitle },
    { name: "description", content: pageDescription },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: "website" },
    { property: "og:image", content: `${CANONICAL_BASE_URL}/images/destinations/australia.jpg` },
    { property: "og:image:alt", content: "Study in Australia with Study Prime" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: pageDescription },
    { name: "twitter:image", content: `${CANONICAL_BASE_URL}/images/destinations/australia.jpg` },
    { tagName: "link", rel: "canonical", href: canonicalUrl },
  ];
};

export default function DestinationsStudyInAustraliaRoute() {
  const canonicalUrl = `${CANONICAL_BASE_URL}/destinations/study-in-australia`;

  // S05 Interactive Course Decision Walkthrough
  const [activeScenario, setActiveScenario] = useState<number>(0);

  const scenarios = [
    {
      id: "funding-unclear",
      title: "Course fits, funding unclear",
      badge: "SCENARIO 1",
      tag: "BUDGET EVALUATION",
      input: "The modules fit my goals, but we have not confirmed the full budget.",
      decision: "Pause the payment decision and review tuition, living costs and funding evidence separately.",
      status: "Course interest established. Affordability remains unresolved.",
      statusColor: "#0284C7",
      statusBg: "#F0F9FF",
      statusBorder: "#BAE6FD"
    },
    {
      id: "scholarship-pending",
      title: "Scholarship pending",
      badge: "SCENARIO 2",
      tag: "AWARD DECISION",
      input: "I have applied for an award but do not have a written decision.",
      decision: "Compare the plan with and without the award before accepting financial commitments.",
      status: "Scholarship not confirmed. Do not deduct it from available funds.",
      statusColor: "#D97706",
      statusBg: "#FFFBEB",
      statusBorder: "#FDE68A"
    },
    {
      id: "family-travel",
      title: "Family travel essential",
      badge: "SCENARIO 3",
      tag: "DEPENDANT ELIGIBILITY",
      input: "The plan only works if my partner and child can travel with me.",
      decision: "Check current family inclusion rules and the full household costs before committing.",
      status: "Family eligibility needs individual review. Admission does not establish it.",
      statusColor: "#DC2626",
      statusBg: "#FEF2F2",
      statusBorder: "#FECACA"
    }
  ];

  const faqs = [
    {
      q: "Is an Australian offer letter a visa approval?",
      a: "No. An offer, a Confirmation of Enrolment and a Student visa decision are separate stages. Check the requirements for your own application."
    },
    {
      q: "How much money should my family plan for?",
      a: "Use current provider fees and realistic costs for the study location. Separately check visa financial evidence, insurance and payment dates. A visa minimum is not a complete household budget."
    },
    {
      q: "Can a scholarship cover the full cost?",
      a: "Coverage depends on the award. Many awards cover only part of the cost. Check eligibility and written conditions before counting any scholarship as funding."
    },
    {
      q: "Can my family join me?",
      a: "Do not assume they can. Current Student visa family inclusion rules restrict eligibility, and joining later is not a routine fallback. Obtain individual review before financial commitments."
    },
    {
      q: "Does graduation guarantee work rights or permanent residence?",
      a: "No. Graduate and other immigration routes have separate rules. A course cannot guarantee employment, a graduate visa or permanent residence."
    },
    {
      q: "How can Study Prime help me start?",
      a: "Book the free assessment to discuss course fit, funding questions and your application stage. Confirm any later service scope and charges before paid work begins."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: "Study in Australia",
        url: canonicalUrl,
        serviceType: "Study abroad education guidance",
        provider: {
          "@type": "Organization",
          name: "Study Prime",
          url: `${CANONICAL_BASE_URL}/`
        }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${CANONICAL_BASE_URL}/`
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Study destinations",
            item: `${CANONICAL_BASE_URL}/destinations`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Study in Australia",
            item: canonicalUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="dest-page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <style>{`
        /* ══════════════════════════════════════════════════════════════
           AUSTRALIA DESTINATION · MASTER DESIGN SYSTEM & TOKENS
           --sp-navy: #011E3E
           --sp-orange: #FFA000
           --sp-white: #FFFFFF
           --sp-text: #334155
           --sp-muted: #64748B
           ══════════════════════════════════════════════════════════════ */

        .dest-page-wrapper {
          color: #334155;
          font-family: var(--font-body, "Inter", sans-serif);
          line-height: 1.65;
          background-color: #FFFFFF;
        }

        /* ── HERO MASTER SECTION ── */
        .sp-aus-hero {
          position: relative;
          background: linear-gradient(135deg, #011428 0%, #011E3E 45%, #05264E 100%);
          color: #FFFFFF;
          padding: 70px 0 85px;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .sp-aus-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 36px 36px;
          pointer-events: none;
        }

        .sp-aus-glow-orb {
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

        .sp-aus-hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 52px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 992px) {
          .sp-aus-hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .sp-aus-eyebrow {
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

        .sp-aus-hero-title {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: clamp(2.4rem, 4.8vw, 3.8rem);
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.12;
          letter-spacing: -0.02em;
          margin-bottom: 22px;
        }

        .sp-aus-hero-title span {
          color: #FFA000;
          position: relative;
          display: inline-block;
        }

        .sp-aus-hero-lead {
          font-size: 1.18rem;
          font-weight: 500;
          color: #F8FAFC;
          line-height: 1.68;
          margin-bottom: 16px;
          max-width: 620px;
        }

        .sp-aus-hero-body-text {
          font-size: 1.02rem;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.65;
          margin-bottom: 16px;
          max-width: 620px;
        }

        .sp-aus-hero-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 24px 0 32px 0;
        }

        .sp-aus-hero-chip {
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

        .sp-aus-hero-chip:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: #FFA000;
        }

        .sp-aus-hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .sp-aus-btn-primary {
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

        .sp-aus-btn-primary:hover {
          background-color: #FFB300;
          transform: translateY(-3px);
          box-shadow: 0 14px 34px rgba(255, 160, 0, 0.5);
          text-decoration: none;
        }

        .sp-aus-btn-secondary {
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

        .sp-aus-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.16);
          border-color: #FFA000;
          transform: translateY(-2px);
          text-decoration: none;
        }

        .sp-aus-trust-note {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
          margin-top: 14px;
          max-width: 600px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* Hero Right Card (Authored Path Diagram) */
        .sp-aus-hero-card {
          background: rgba(1, 30, 62, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 24px;
          padding: 30px;
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(16px);
        }

        .sp-aus-card-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 160, 0, 0.18);
          border: 1px solid rgba(255, 160, 0, 0.4);
          color: #FFA000;
          font-size: 0.78rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 20px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .sp-aus-card-title {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.35rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .sp-aus-path-steps {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .sp-aus-path-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 12px 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
        }

        .sp-aus-path-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(255, 160, 0, 0.15);
          border: 1px solid rgba(255, 160, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFA000;
          flex-shrink: 0;
        }

        .sp-aus-path-text h4 {
          font-size: 0.94rem;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 3px 0;
        }

        .sp-aus-path-text p {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.72);
          margin: 0;
          line-height: 1.4;
        }

        /* ── SECTION COMMON STYLING ── */
        .dest-section {
          padding: 85px 0;
          position: relative;
        }

        .dest-section-alt {
          background-color: #F8FAFC;
        }

        .dest-section-white {
          background-color: #FFFFFF;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .dest-section-header {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 52px auto;
        }

        .dest-section-title {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: clamp(2rem, 3.4vw, 2.75rem);
          font-weight: 800;
          color: #011E3E;
          line-height: 1.18;
          margin: 12px 0 16px 0;
          letter-spacing: -0.01em;
        }

        .dest-eyebrow-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(1, 30, 62, 0.06);
          border: 1px solid rgba(1, 30, 62, 0.14);
          color: #011E3E;
          padding: 5px 14px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .dest-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #FFA000;
        }

        /* ── S03: STAGE PANELS (OFFER / COE / VISA) ── */
        .sp-stages-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 36px;
        }

        @media (max-width: 860px) {
          .sp-stages-grid {
            grid-template-columns: 1fr;
          }
        }

        .sp-stage-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 28px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.02);
          display: flex;
          flex-direction: column;
          gap: 12px;
          position: relative;
        }

        .sp-stage-num {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.6rem;
          font-weight: 800;
          color: #FFA000;
        }

        .sp-stage-card h3 {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.3rem;
          font-weight: 800;
          color: #011E3E;
          margin: 0;
        }

        .sp-stage-card p {
          font-size: 1rem;
          color: #475569;
          line-height: 1.65;
          margin: 0;
        }

        /* ── S04: COST CATEGORIES ── */
        .sp-cost-cat-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 26px;
          margin-bottom: 28px;
        }

        @media (max-width: 768px) {
          .sp-cost-cat-grid {
            grid-template-columns: 1fr;
          }
        }

        .sp-cost-cat-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 30px;
        }

        .sp-cost-cat-card h3 {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.3rem;
          font-weight: 800;
          color: #011E3E;
          margin: 0 0 10px 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .sp-cost-cat-card p {
          font-size: 1.02rem;
          color: #475569;
          line-height: 1.68;
          margin: 0;
        }

        .sp-cost-warning-box {
          background: #FFFBEB;
          border: 1px solid #FDE68A;
          border-left: 5px solid #FFA000;
          border-radius: 12px;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 1.02rem;
          color: #92400E;
          font-weight: 600;
        }

        /* ── S05: PROGRESSIVE SCENARIO EXPLAINER ── */
        .sp-scenario-wrapper {
          max-width: 920px;
          margin: 0 auto;
        }

        .sp-scenario-selector {
          display: flex;
          gap: 12px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }

        .sp-scenario-btn {
          flex: 1;
          min-width: 220px;
          padding: 16px 20px;
          background: #FFFFFF;
          border: 2px solid #E2E8F0;
          border-radius: 14px;
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.12rem;
          font-weight: 700;
          color: #334155;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
        }

        .sp-scenario-btn:hover {
          border-color: #FFA000;
          background: #FFFDF9;
        }

        .sp-scenario-btn.active {
          border-color: #011E3E;
          background: #011E3E;
          color: #FFFFFF;
          box-shadow: 0 10px 24px rgba(1, 30, 62, 0.15);
        }

        .sp-scenario-btn .pill {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 10px;
          background: rgba(1, 30, 62, 0.08);
          color: #011E3E;
        }

        .sp-scenario-btn.active .pill {
          background: rgba(255, 160, 0, 0.25);
          color: #FFA000;
        }

        .sp-scenario-display {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 38px;
          box-shadow: 0 18px 40px -10px rgba(1, 30, 62, 0.08);
        }

        .sp-scenario-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #E2E8F0;
          padding-bottom: 18px;
          margin-bottom: 26px;
        }

        .sp-scenario-title {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.55rem;
          font-weight: 800;
          color: #011E3E;
          margin: 0;
        }

        .sp-state-box {
          padding: 18px 22px;
          border-radius: 12px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          margin-bottom: 18px;
        }

        .sp-state-label {
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: #64748B;
          margin-bottom: 6px;
        }

        .sp-state-text {
          font-size: 1.08rem;
          font-weight: 500;
          color: #011E3E;
          margin: 0;
          line-height: 1.6;
        }

        /* ── S07: SUBSECTIONS (SCHOLARSHIPS, WORK, FAMILY) ── */
        .sp-subsections-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }

        @media (max-width: 900px) {
          .sp-subsections-grid {
            grid-template-columns: 1fr;
          }
        }

        .sp-subsec-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .sp-subsec-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .sp-subsec-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #FFF8EB;
          border: 1px solid #FFE4B5;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #D97706;
          flex-shrink: 0;
        }

        .sp-subsec-card h3 {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.35rem;
          font-weight: 800;
          color: #011E3E;
          margin: 0;
        }

        .sp-subsec-card p {
          font-size: 1.02rem;
          color: #475569;
          line-height: 1.68;
          margin: 0;
        }

        /* ── S08: FROM AN INTERESTING COURSE TO A REASONED DECISION ── */
        .sp-steps-stack {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 860px;
          margin: 0 auto 44px auto;
        }

        .sp-step-row {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 24px 28px;
          display: flex;
          gap: 22px;
          align-items: flex-start;
          transition: border-color 0.2s ease;
        }

        .sp-step-row:hover {
          border-color: #FFA000;
        }

        .sp-step-num {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #011E3E;
          color: #FFA000;
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.35rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .sp-step-content h3 {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.25rem;
          font-weight: 800;
          color: #011E3E;
          margin: 0 0 6px 0;
        }

        .sp-step-content p {
          font-size: 1.02rem;
          color: #475569;
          margin: 0;
          line-height: 1.65;
        }

        .sp-comparison-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 860px;
          margin: 0 auto;
        }

        @media (max-width: 680px) {
          .sp-comparison-grid {
            grid-template-columns: 1fr;
          }
        }

        .sp-comp-box {
          border-radius: 16px;
          padding: 26px;
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

        .sp-comp-header {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.2rem;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .sp-comp-box.before .sp-comp-header {
          color: #991B1B;
        }

        .sp-comp-box.after .sp-comp-header {
          color: #065F46;
        }

        .sp-comp-box p {
          font-size: 1.02rem;
          color: #334155;
          line-height: 1.65;
          margin: 0;
        }

        .sp-sibling-links-box {
          max-width: 860px;
          margin: 28px auto 0 auto;
          padding: 20px 24px;
          background: #F8FAFC;
          border-radius: 14px;
          border: 1px solid #E2E8F0;
          font-size: 1.02rem;
          color: #475569;
          text-align: center;
        }

        .sp-sibling-links-box a {
          color: #011E3E;
          font-weight: 700;
          text-decoration: underline;
        }

        /* ── S09: FAQ ACCORDION ── */
        .sp-faq-stack {
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
          font-size: 1.25rem;
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

        .sp-faq-toggle-icon {
          color: #FFA000;
          font-size: 1.2rem;
          transition: transform 0.2s ease;
        }

        .sp-faq-card[open] .sp-faq-toggle-icon {
          transform: rotate(180deg);
        }

        .sp-faq-body {
          padding: 0 26px 24px 26px;
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.7;
          border-top: 1px solid #E2E8F0;
          margin-top: 4px;
          padding-top: 18px;
        }

        /* ── S10: CLOSING MASTER CTA BANNER ── */
        .sp-closing-cta {
          background: radial-gradient(circle at 50% 20%, rgba(255, 160, 0, 0.15) 0%, transparent 50%),
                      linear-gradient(135deg, #011428 0%, #011E3E 55%, #05264E 100%);
          color: #FFFFFF;
          padding: 90px 0 85px;
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
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 62ch;
          margin: 0 auto 16px auto;
          line-height: 1.7;
        }

        .sp-closing-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin: 32px 0 26px 0;
        }

        .sp-closing-contact-cluster {
          margin-top: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          font-size: 1.02rem;
          color: rgba(255, 255, 255, 0.85);
        }

        .sp-closing-contact-cluster a {
          color: #FFA000;
          font-weight: 700;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .sp-closing-nap {
          margin-top: 28px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.72);
          max-width: 760px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .sp-closing-nap a {
          color: #FFFFFF;
          font-weight: 600;
          text-decoration: underline;
        }
      `}</style>

      {/* Top Breadcrumb Trail */}
      <nav className="dest-landing-breadcrumb" aria-label="Breadcrumb">
        <div className="container">
          <div className="breadcrumb-inner">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/destinations">Study destinations</Link>
            <span>/</span>
            <span className="current">Study in Australia</span>
          </div>
        </div>
      </nav>

      {/* S01: Hero Section */}
      <section className="sp-aus-hero">
        <div className="sp-aus-pattern" />
        <div className="sp-aus-glow-orb" />

        <div className="container">
          <div className="sp-aus-hero-grid">
            <div>
              <div className="sp-aus-eyebrow">
                <span className="dest-eyebrow-dot" />
                <span>OFFICIAL STUDY DESTINATION GUIDE &middot; AUSTRALIA</span>
              </div>

              <h1 className="sp-aus-hero-title">
                Study in <span>Australia</span>
              </h1>

              <p className="sp-aus-hero-lead">
                A course offer can look exciting until the family asks what it really costs. Study in Australia with a plan that makes sense before you pay a deposit.
              </p>

              <p className="sp-aus-hero-body-text">
                Study Prime helps you connect course choice, admissions and visa preparation. Compare what you will learn with what your family can realistically fund.
              </p>

              <p className="sp-aus-hero-body-text">
                Start with the education decision. Treat work, family and graduate options as separate questions, not benefits promised with admission.
              </p>

              {/* Trust Chips */}
              <div className="sp-aus-hero-chips">
                <span className="sp-aus-hero-chip">
                  <CheckCircle2 size={14} color="#FFA000" />
                  CRICOS Registered Providers
                </span>
                <span className="sp-aus-hero-chip">
                  <CheckCircle2 size={14} color="#FFA000" />
                  CoE &amp; Visa Distinction
                </span>
                <span className="sp-aus-hero-chip">
                  <CheckCircle2 size={14} color="#FFA000" />
                  Genuine Student (GS) Clarity
                </span>
                <span className="sp-aus-hero-chip">
                  <CheckCircle2 size={14} color="#FFA000" />
                  Realistic Deposit &amp; Living Plan
                </span>
              </div>

              {/* Action Buttons */}
              <div className="sp-aus-hero-actions">
                <Link to="/assessment" className="sp-aus-btn-primary">
                  <span>Discuss my Australia plan</span>
                  <ArrowRight size={18} />
                </Link>
                <a href="#course-value" className="sp-aus-btn-secondary">
                  Compare course value
                </a>
              </div>

              <p className="sp-aus-trust-note">
                <ShieldCheck size={18} color="#FFA000" style={{ flexShrink: 0 }} />
                <span>For students and parents in Pakistan weighing an Australian study route.</span>
              </p>
            </div>

            {/* Showcase Floating Card (Authored SVG Decision Path) */}
            <div>
              <div className="sp-aus-hero-card">
                <div className="sp-aus-card-badge">
                  <Sparkles size={14} />
                  <span>DECISION ROADMAP</span>
                </div>

                <div className="sp-aus-card-title">
                  <GraduationCap size={24} color="#FFA000" />
                  <span>Australia Study Sequence</span>
                </div>

                <div className="sp-aus-path-steps">
                  <div className="sp-aus-path-item">
                    <div className="sp-aus-path-icon">
                      <BookOpen size={18} />
                    </div>
                    <div className="sp-aus-path-text">
                      <h4>1. Academic Offer Letter</h4>
                      <p>CRICOS registration, entry prerequisites &amp; campus fit</p>
                    </div>
                  </div>

                  <div className="sp-aus-path-item">
                    <div className="sp-aus-path-icon">
                      <FileCheck size={18} />
                    </div>
                    <div className="sp-aus-path-text">
                      <h4>2. Confirmation of Enrolment (CoE)</h4>
                      <p>Fee deposit, refund terms &amp; official university documentation</p>
                    </div>
                  </div>

                  <div className="sp-aus-path-item">
                    <div className="sp-aus-path-icon">
                      <Scale size={18} />
                    </div>
                    <div className="sp-aus-path-text">
                      <h4>3. Subclass 500 Student Visa</h4>
                      <p>Genuine Student criteria, verified funding &amp; OSHC insurance</p>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: "18px", padding: "12px", background: "rgba(255,160,0,0.08)", borderRadius: "12px", border: "1px solid rgba(255,160,0,0.2)", display: "flex", alignItems: "center", gap: "8px" }}>
                  <CheckCircle2 size={16} color="#FFA000" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: "0.85rem", color: "#F8FAFC" }}>
                    Each stage has its own independent decision-maker.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky In-Page Navigation Bar */}
      <nav className="dest-sticky-nav-bar" aria-label="Jump to Australia topics">
        <div className="container">
          <div className="dest-sticky-nav-list">
            <a href="#course-value" className="dest-sticky-nav-link">Course Value</a>
            <a href="#stages" className="dest-sticky-nav-link">Offer vs CoE</a>
            <a href="#costs" className="dest-sticky-nav-link">Payments vs Funding</a>
            <a href="#decision-test" className="dest-sticky-nav-link">Decision Test</a>
            <a href="#genuine-student" className="dest-sticky-nav-link">Genuine Student</a>
            <a href="#scholarships-work" className="dest-sticky-nav-link">Scholarships &amp; Work</a>
            <a href="#process" className="dest-sticky-nav-link">Planning Steps</a>
            <a href="#faqs" className="dest-sticky-nav-link">FAQs</a>
          </div>
        </div>
      </nav>

      {/* S02: Choose a course worth taking even if your plans change */}
      <section id="course-value" className="dest-section dest-section-white">
        <div className="container">
          <div className="dest-section-header" style={{ textAlign: "left", maxWidth: "900px", margin: "0 0 36px 0" }}>
            <div className="dest-eyebrow-pill">
              <span className="dest-eyebrow-dot" />
              <span>EDUCATION FIRST</span>
            </div>
            <h2 className="dest-section-title">
              Choose a course worth taking even if your plans change
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: "40px", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "1.08rem", color: "#334155", lineHeight: "1.75" }}>
              <p style={{ fontWeight: 600, color: "#011E3E", borderLeft: "4px solid #FFA000", paddingLeft: "16px" }}>
                A familiar university name does not explain what you will study. Look at modules, assessment and the campus where teaching happens.
              </p>
              <p>
                For a career change, ask what knowledge the course assumes. For a research degree, investigate the research fit and supervision process.
              </p>
              <p>
                Think about the value of returning to Pakistan too. Regulated professions may require recognition or registration beyond university admission.
              </p>
              <p>
                A placement mentioned in marketing may be competitive or separately arranged. Confirm what is included before treating it as part of your future experience.
              </p>
            </div>

            {/* Authored module to skills SVG visual */}
            <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "20px", padding: "28px" }}>
              <div style={{ fontWeight: 800, fontSize: "1.15rem", color: "#011E3E", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <BookOpen size={20} color="#FFA000" />
                <span>Curriculum Depth Check</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ background: "#FFFFFF", padding: "12px 16px", borderRadius: "10px", border: "1px solid #E2E8F0" }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#64748B" }}>CORE MODULES</div>
                  <div style={{ fontWeight: 600, color: "#011E3E" }}>Practical skills &amp; industry-standard tools</div>
                </div>
                <div style={{ background: "#FFFFFF", padding: "12px 16px", borderRadius: "10px", border: "1px solid #E2E8F0" }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#64748B" }}>REGULATORY RECOGNITION</div>
                  <div style={{ fontWeight: 600, color: "#011E3E" }}>Recognised credentials if returning to Pakistan</div>
                </div>
                <div style={{ background: "#FFFFFF", padding: "12px 16px", borderRadius: "10px", border: "1px solid #E2E8F0" }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#64748B" }}>WORK INTEGRATED LEARNING</div>
                  <div style={{ fontWeight: 600, color: "#011E3E" }}>Verified placement conditions vs general marketing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S03: Compare the course and the student route */}
      <section id="stages" className="dest-section dest-section-alt">
        <div className="container">
          <div className="dest-section-header">
            <div className="dest-eyebrow-pill">
              <span className="dest-eyebrow-dot" />
              <span>CRICOS &amp; ADMISSION STAGES</span>
            </div>
            <h2 className="dest-section-title">
              Compare the course and the student route
            </h2>
          </div>

          <div style={{ maxWidth: "860px", margin: "0 auto 36px auto", fontSize: "1.08rem", color: "#334155", lineHeight: "1.75" }}>
            <p>
              Check that the provider and course are registered for international students on CRICOS. That check does not establish professional recognition or guarantee a visa.
            </p>
            <p>
              An offer explains the provider&apos;s conditions. A Confirmation of Enrolment, or CoE, is a separate provider document generally needed for the Student visa application.
            </p>
            <p>
              Meeting an English requirement for admission does not automatically settle every visa evidence question. Check both sets of requirements for your case.
            </p>
            <p style={{ margin: 0, fontWeight: 600, color: "#011E3E" }}>
              Study Prime can help you discuss course fit and application steps. Ask which providers and support are available for your proposed study plan.
            </p>
          </div>

          {/* 3 Clearly Separated Stage Panels */}
          <div className="sp-stages-grid">
            <div className="sp-stage-card">
              <div className="sp-stage-num">01</div>
              <h3>Provider Offer</h3>
              <p>Conditional or unconditional admission issued by a CRICOS-registered Australian institution.</p>
            </div>

            <div className="sp-stage-card">
              <div className="sp-stage-num">02</div>
              <h3>Confirmation of Enrolment (CoE)</h3>
              <p>Issued by the provider upon deposit payment, declaring the official study period.</p>
            </div>

            <div className="sp-stage-card">
              <div className="sp-stage-num">03</div>
              <h3>Subclass 500 Visa</h3>
              <p>Assessed independently by Home Affairs based on genuine temporary intent and funding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* S04: Separate the money you pay from the money you must show */}
      <section id="costs" className="dest-section dest-section-white">
        <div className="container">
          <div className="dest-section-header">
            <div className="dest-eyebrow-pill">
              <span className="dest-eyebrow-dot" />
              <span>FINANCIAL ARCHITECTURE</span>
            </div>
            <h2 className="dest-section-title">
              Separate the money you pay from the money you must show
            </h2>
          </div>

          <div className="sp-cost-cat-grid">
            {/* Category 1 */}
            <div className="sp-cost-cat-card">
              <h3>
                <DollarSign size={22} color="#011E3E" />
                <span>Course payments</span>
              </h3>
              <p>
                Confirm the current tuition fee, deposit timing and refund conditions. Ask whether the quoted amount covers a year or the full course.
              </p>
            </div>

            {/* Category 2 */}
            <div className="sp-cost-cat-card">
              <h3>
                <Building2 size={22} color="#011E3E" />
                <span>Living and arrival costs</span>
              </h3>
              <p>
                Compare housing, food, transport and initial setup costs for your study location. Actual costs can exceed a visa minimum.
              </p>
            </div>

            {/* Category 3 */}
            <div className="sp-cost-cat-card">
              <h3>
                <Scale size={22} color="#011E3E" />
                <span>Visa funding evidence</span>
              </h3>
              <p>
                Check the financial evidence required for your circumstances. A tuition payment and proof of living funds serve different purposes.
              </p>
            </div>

            {/* Category 4 */}
            <div className="sp-cost-cat-card">
              <h3>
                <ShieldCheck size={22} color="#011E3E" />
                <span>Insurance and other charges</span>
              </h3>
              <p>
                Include required health cover, application charges and relevant course expenses. Check current amounts before making a commitment.
              </p>
            </div>
          </div>

          <div className="sp-cost-warning-box">
            <AlertCircle size={22} style={{ flexShrink: 0 }} />
            <span>
              Build the plan without relying on work you have not secured. A possible scholarship is also not confirmed funding.
            </span>
          </div>
        </div>
      </section>

      {/* S05: Test the decision before paying the deposit (Progressive Explainer) */}
      <section id="decision-test" className="dest-section dest-section-alt">
        <div className="container">
          <div className="dest-section-header">
            <div className="dest-eyebrow-pill">
              <span className="dest-eyebrow-dot" />
              <span>PRACTICAL DECISION WALKTHROUGH</span>
            </div>
            <h2 className="dest-section-title">
              Test the decision before paying the deposit
            </h2>
            <p style={{ color: "#64748B", fontSize: "0.98rem", margin: "8px 0 0 0", fontStyle: "italic" }}>
              Illustrative course-decision walkthrough. These are made-up planning situations, not offers, visa decisions or client results.
            </p>
          </div>

          <div className="sp-scenario-wrapper">
            {/* 3-State Selector Buttons */}
            <div className="sp-scenario-selector" role="tablist" aria-label="Course decision scenarios">
              {scenarios.map((scen, idx) => (
                <button
                  key={scen.id}
                  type="button"
                  role="tab"
                  aria-selected={activeScenario === idx}
                  aria-pressed={activeScenario === idx}
                  className={`sp-scenario-btn ${activeScenario === idx ? "active" : ""}`}
                  onClick={() => setActiveScenario(idx)}
                >
                  <span>{scen.title}</span>
                  <span className="pill">{scen.badge}</span>
                </button>
              ))}
            </div>

            {/* Active Scenario Card */}
            <div className="sp-scenario-display">
              <div className="sp-scenario-header-row">
                <h3 className="sp-scenario-title">
                  {scenarios[activeScenario].title}
                </h3>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#64748B", textTransform: "uppercase" }}>
                  {scenarios[activeScenario].tag}
                </span>
              </div>

              <div>
                <div className="sp-state-box">
                  <div className="sp-state-label">Input</div>
                  <p className="sp-state-text">
                    {scenarios[activeScenario].input}
                  </p>
                </div>

                <div className="sp-state-box">
                  <div className="sp-state-label" style={{ color: "#D97706" }}>Decision</div>
                  <p className="sp-state-text">
                    {scenarios[activeScenario].decision}
                  </p>
                </div>

                <div 
                  className="sp-state-box"
                  style={{ 
                    borderLeftWidth: "5px",
                    borderLeftColor: scenarios[activeScenario].statusColor,
                    background: scenarios[activeScenario].statusBg,
                    borderColor: scenarios[activeScenario].statusBorder
                  }}
                >
                  <div className="sp-state-label" style={{ color: scenarios[activeScenario].statusColor }}>
                    Status
                  </div>
                  <p className="sp-state-text" style={{ color: "#011E3E", fontWeight: 600 }}>
                    {scenarios[activeScenario].status}
                  </p>
                </div>
              </div>

              <div style={{ marginTop: "24px", textAlign: "center" }}>
                <Link to="/assessment" className="sp-aus-btn-primary">
                  <span>Talk through my decision</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S06: Build a study explanation from your real reasons */}
      <section id="genuine-student" className="dest-section dest-section-white">
        <div className="container">
          <div className="dest-section-header" style={{ textAlign: "left", maxWidth: "900px", margin: "0 auto 36px auto" }}>
            <div className="dest-eyebrow-pill">
              <span className="dest-eyebrow-dot" />
              <span>GENUINE STUDENT REQUIREMENT</span>
            </div>
            <h2 className="dest-section-title">
              Build a study explanation from your real reasons
            </h2>
          </div>

          <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "18px", fontSize: "1.08rem", color: "#334155", lineHeight: "1.75" }}>
            <p>
              Australia&apos;s Genuine Student requirement considers your circumstances and reasons for studying. Understand why the course fits and how it connects to your plans.
            </p>
            <p>
              Use your actual study and work history. Explain gaps or changes honestly rather than borrowing a story that sounds more convincing.
            </p>
            <p>
              Future options do not replace the need for a genuine study purpose. Equally, do not invent a promise about your future to fit a script.
            </p>
            <p style={{ margin: 0, fontWeight: 600, color: "#011E3E" }}>
              Keep course entry, provider confirmation and the visa decision separate. Each stage can ask different questions and has its own decision-maker.
            </p>
          </div>
        </div>
      </section>

      {/* S07: Scholarships, work and family need separate checks */}
      <section id="scholarships-work" className="dest-section dest-section-alt">
        <div className="container">
          <div className="dest-section-header">
            <div className="dest-eyebrow-pill">
              <span className="dest-eyebrow-dot" />
              <span>BEYOND ADMISSION</span>
            </div>
            <h2 className="dest-section-title">
              Scholarships, work and family need separate checks
            </h2>
          </div>

          <div className="sp-subsections-grid">
            {/* Subsection 1 */}
            <div className="sp-subsec-card">
              <div className="sp-subsec-header">
                <div className="sp-subsec-icon">
                  <Award size={22} />
                </div>
                <h3>Scholarships</h3>
              </div>
              <p>
                Government, university and research awards have different terms. Check nationality, study level, coverage and application timing for each award.
              </p>
              <p style={{ margin: 0, fontWeight: 600, color: "#011E3E" }}>
                An award may cover only part of tuition. Do not count it until the decision and conditions are clear.
              </p>
            </div>

            {/* Subsection 2 */}
            <div className="sp-subsec-card">
              <div className="sp-subsec-header">
                <div className="sp-subsec-icon">
                  <Briefcase size={22} />
                </div>
                <h3>Work during study</h3>
              </div>
              <p>
                Work depends on your visa conditions and study circumstances. Check your own permission before starting work, and keep study as the purpose of the journey.
              </p>
              <p style={{ margin: 0, fontWeight: 600, color: "#011E3E" }}>
                Permission to work does not guarantee a job or enough income. It should not carry the funding plan.
              </p>
            </div>

            {/* Subsection 3 */}
            <div className="sp-subsec-card">
              <div className="sp-subsec-header">
                <div className="sp-subsec-icon">
                  <Users size={22} />
                </div>
                <h3>Family and life after study</h3>
              </div>
              <p>
                Student family inclusion is restricted and depends on current rules and your circumstances. Do not assume a partner or child can join later.
              </p>
              <p style={{ margin: 0, fontWeight: 600, color: "#011E3E" }}>
                The Temporary Graduate visa is a separate route with its own eligibility rules. Completing a course does not guarantee graduate permission, employment or permanent residence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S08: From an interesting course to a reasoned decision */}
      <section id="process" className="dest-section dest-section-white">
        <div className="container">
          <div className="dest-section-header">
            <div className="dest-eyebrow-pill">
              <span className="dest-eyebrow-dot" />
              <span>STRUCTURED PLANNING</span>
            </div>
            <h2 className="dest-section-title">
              From an interesting course to a reasoned decision
            </h2>
          </div>

          <div className="sp-steps-stack">
            {/* Step 1 */}
            <div className="sp-step-row">
              <div className="sp-step-num">1</div>
              <div className="sp-step-content">
                <h3>Review your starting point</h3>
                <p>
                  Discuss your qualifications, goals and budget with Study Prime. Identify questions about course fit before sending applications.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="sp-step-row">
              <div className="sp-step-num">2</div>
              <div className="sp-step-content">
                <h3>Compare the real offer</h3>
                <p>
                  Review the course, campus, entry conditions and payment terms. Ask what remains unconfirmed and who can answer it.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="sp-step-row">
              <div className="sp-step-num">3</div>
              <div className="sp-step-content">
                <h3>Prepare the next stage</h3>
                <p>
                  If the study plan is workable, discuss provider steps and visa preparation. Check current requirements before submission or travel commitments.
                </p>
              </div>
            </div>
          </div>

          {/* Comparison */}
          <div className="sp-comparison-grid">
            <div className="sp-comp-box before">
              <div className="sp-comp-header">
                <AlertCircle size={20} />
                <span>Before</span>
              </div>
              <p>
                A course name, a rough fee and assumptions about work after study.
              </p>
            </div>

            <div className="sp-comp-box after">
              <div className="sp-comp-header">
                <CheckCircle2 size={20} />
                <span>Target state</span>
              </div>
              <p>
                A course rationale, a realistic funding plan and separate checks for visa, family and graduate options.
              </p>
            </div>
          </div>

          <p style={{ textAlign: "center", marginTop: "20px", fontSize: "0.92rem", color: "#64748B", fontStyle: "italic" }}>
            This illustrates a planning process, not a client result or guaranteed outcome.
          </p>

          <div style={{ textAlign: "center", marginTop: "14px", fontWeight: 700, color: "#991B1B", fontSize: "0.98rem" }}>
            No consultant can guarantee a scholarship, admission or visa, and we do not.
          </div>

          <div className="sp-sibling-links-box">
            Explore <Link to="/services/university-matching">course matching</Link>,{" "}
            <Link to="/services/admission-support">admissions support</Link> and{" "}
            <Link to="/services/student-visa">student visa assistance</Link>.
          </div>
        </div>
      </section>

      {/* S09: Questions about studying in Australia */}
      <section id="faqs" className="dest-section dest-section-alt">
        <div className="container">
          <div className="dest-section-header">
            <div className="dest-eyebrow-pill">
              <span className="dest-eyebrow-dot" />
              <span>FREQUENT QUESTIONS</span>
            </div>
            <h2 className="dest-section-title">Questions about studying in Australia</h2>
          </div>

          <div className="sp-faq-stack">
            {faqs.map((faq, index) => (
              <details key={index} className="sp-faq-card">
                <summary className="sp-faq-summary">
                  <span>{faq.q}</span>
                  <span className="sp-faq-toggle-icon">&darr;</span>
                </summary>
                <div className="sp-faq-body">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* S10: Closing Master CTA Banner */}
      <section className="sp-closing-cta">
        <div className="container">
          <h2>Make the next payment a considered decision</h2>

          <p>
            Bring your course idea and the question your family needs answered first. It may be affordability, course value or whether the wider plan is workable.
          </p>

          <p>
            Study Prime&apos;s free assessment is a starting conversation, not an admission or visa decision.
          </p>

          <div className="sp-closing-actions">
            <Link to="/assessment" className="sp-aus-btn-primary">
              <span>Discuss my Australia plan</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="sp-closing-contact-cluster">
            Compare <Link to="/destinations">study destinations</Link> or{" "}
            <Link to="/contact">contact Study Prime</Link>.
          </div>

          <div className="sp-closing-nap">
            Email <a href="mailto:info@studyprime.pk">info@studyprime.pk</a>. Office #F-15, First Floor, Galleria Mall, I-8 Markaz, Islamabad, Pakistan.{" "}
            Call <a href="tel:+923101193888">+92 310 1193888</a> or <a href="tel:+92518740888">+92 51 8740888</a>.
          </div>
        </div>
      </section>

      {/* Mobile Sticky Bar */}
      <div className="dest-mobile-sticky-bar">
        <div>
          <span className="bar-title">Study in Australia</span>
          <span className="bar-subtitle">Free Assessment</span>
        </div>
        <Link to="/assessment" className="bar-btn">
          Get Assessment
        </Link>
      </div>
    </div>
  );
}
