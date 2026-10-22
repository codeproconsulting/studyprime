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
  Compass, 
  ChevronDown, 
  HelpCircle,
  Clock,
  MapPin,
  Plane,
  PlaneTakeoff,
  PlaneLanding,
  Key,
  Home,
  Users,
  ShieldAlert,
  ArrowUpRight,
  ExternalLink,
  ChevronRight,
  UserCheck,
  BaggageClaim,
  HeartHandshake,
  Info
} from "lucide-react";
import { CANONICAL_BASE_URL } from "~/utils/seo";

export const meta: MetaFunction = () => {
  const canonicalUrl = `${CANONICAL_BASE_URL}/services/departure-briefing`;
  const pageTitle = "Pre and post departure briefing | Study Prime";
  const pageDescription =
    "Plan housing, travel and your first days abroad with Study Prime pre and post departure briefing. Get practical guidance and book a free assessment.";

  return [
    { title: pageTitle },
    { name: "description", content: pageDescription },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: "website" },
    { property: "og:image", content: `${CANONICAL_BASE_URL}/student.webp` },
    { property: "og:image:alt", content: "Pre and post departure briefing with Study Prime" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: pageDescription },
    { name: "twitter:image", content: `${CANONICAL_BASE_URL}/student.webp` },
    { tagName: "link", rel: "canonical", href: canonicalUrl },
  ];
};

export default function DepartureBriefingRoute() {
  const canonicalUrl = `${CANONICAL_BASE_URL}/services/departure-briefing`;

  // S05 Interactive Arrival Handover Scenarios
  const [activeScenario, setActiveScenario] = useState<number>(0);

  const scenarios = [
    {
      id: "housing-confirmed",
      title: "Housing confirmed",
      badge: "SCENARIO 1",
      tag: "CONFIRMED TIMING",
      input: "My housing provider has confirmed the address and key collection time.",
      action: "Match the arrival time to key collection and onward travel.",
      status: "Arrival sequence can be reviewed. Transport remains unconfirmed until booked.",
      statusColor: "#0284C7",
      statusBg: "#F0F9FF",
      statusBorder: "#BAE6FD"
    },
    {
      id: "keys-unavailable",
      title: "Keys unavailable",
      badge: "SCENARIO 2",
      tag: "ACCESS GAP",
      input: "My flight arrives after the key collection desk closes.",
      action: "Ask the housing provider about approved late access or another arrival date.",
      status: "Handover unresolved. Do not assume someone can let you in.",
      statusColor: "#D97706",
      statusBg: "#FFFBEB",
      statusBorder: "#FDE68A"
    },
    {
      id: "course-start-at-risk",
      title: "Course start at risk",
      badge: "SCENARIO 3",
      tag: "ENROLMENT DEADLINE",
      input: "My proposed arrival is later than the provider's instructions allow.",
      action: "Ask the provider whether late arrival is permitted before committing to travel.",
      status: "Provider decision needed. Travel advice cannot override enrolment rules.",
      statusColor: "#DC2626",
      statusBg: "#FEF2F2",
      statusBorder: "#FECACA"
    }
  ];

  const faqs = [
    {
      q: "Does the briefing include a confirmed room?",
      a: "Not automatically. Accommodation guidance is different from a confirmed booking. Check the provider's written confirmation, payment terms and move-in arrangements."
    },
    {
      q: "Will someone collect me at the airport?",
      a: "Only rely on a pickup that has been separately confirmed. Ask who operates it, what it costs and what happens if your flight changes."
    },
    {
      q: "Can my parents join the discussion?",
      a: "Ask about including your family when arranging the session. Their questions about arrival, costs and contact arrangements are worth raising early."
    },
    {
      q: "Can you guarantee a part-time job after arrival?",
      a: "No. Employment depends on vacancies, your circumstances and permission to work. Do not rely on a future job to fund the move."
    },
    {
      q: "Do all students need the same arrival steps?",
      a: "No. The country, university, housing provider and immigration permission affect what applies. Use instructions for your own situation."
    },
    {
      q: "What does the service cost?",
      a: "The initial assessment is free. Confirm the briefing scope and any later charges before agreeing to paid support. Flights, housing and other bookings have separate terms."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: "Pre and post departure briefing",
        url: canonicalUrl,
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
            name: "Services",
            item: `${CANONICAL_BASE_URL}/services`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Pre and post departure briefing",
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
           PRE & POST DEPARTURE BRIEFING · DESIGN SYSTEM & TOKENS
           Strict Study Prime Invariants:
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
          align-items: center;
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
          margin-bottom: 16px;
          max-width: 620px;
        }

        .sp-hero-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 24px 0 32px 0;
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

        /* Hero Right Visual Card (Authored SVG & Handover Journey) */
        .sp-hero-card {
          background: rgba(1, 30, 62, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(16px);
          position: relative;
        }

        .sp-card-badge {
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

        .sp-card-title {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.45rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* SVG Handover Visual Nodes */
        .sp-hero-journey-steps {
          display: flex;
          flex-direction: column;
          gap: 14px;
          position: relative;
        }

        .sp-journey-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 12px 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          transition: all 0.2s ease;
        }

        .sp-journey-item:hover {
          background: rgba(255, 255, 255, 0.09);
          border-color: rgba(255, 160, 0, 0.3);
        }

        .sp-journey-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255, 160, 0, 0.15);
          border: 1px solid rgba(255, 160, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFA000;
          flex-shrink: 0;
        }

        .sp-journey-text h4 {
          font-size: 0.94rem;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 3px 0;
        }

        .sp-journey-text p {
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

        .dest-section-navy {
          background: #011E3E;
          color: #FFFFFF;
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

        .dest-section-navy .dest-section-title {
          color: #FFFFFF;
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

        .dest-section-navy .dest-eyebrow-pill {
          background: rgba(255, 160, 0, 0.15);
          border-color: rgba(255, 160, 0, 0.35);
          color: #FFA000;
        }

        .dest-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #FFA000;
        }

        /* ── S02: OPEN EDITORIAL SPLIT (ARRIVAL VS HOUSING ACCESS) ── */
        .sp-editorial-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 48px;
          align-items: center;
        }

        @media (max-width: 900px) {
          .sp-editorial-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
        }

        .sp-editorial-text p {
          font-size: 1.08rem;
          color: #334155;
          line-height: 1.75;
          margin-bottom: 20px;
        }

        .sp-editorial-text p.sp-highlight-lead {
          font-size: 1.16rem;
          font-weight: 600;
          color: #011E3E;
          border-left: 4px solid #FFA000;
          padding-left: 18px;
        }

        .sp-editorial-visual-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 15px 35px -10px rgba(1, 30, 62, 0.08);
          position: relative;
        }

        .sp-gap-timeline {
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
          padding-left: 14px;
        }

        .sp-gap-timeline::before {
          content: "";
          position: absolute;
          left: 23px;
          top: 15px;
          bottom: 15px;
          width: 2px;
          background: #E2E8F0;
        }

        .sp-timeline-node {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          position: relative;
          z-index: 2;
        }

        .sp-node-bullet {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 4px solid #FFFFFF;
          box-shadow: 0 0 0 2px #E2E8F0;
          background: #64748B;
          margin-top: 3px;
          flex-shrink: 0;
        }

        .sp-node-bullet.warning {
          background: #DC2626;
          box-shadow: 0 0 0 2px #FECACA;
        }

        .sp-node-bullet.success {
          background: #10B981;
          box-shadow: 0 0 0 2px #A7F3D0;
        }

        .sp-timeline-content {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 12px 16px;
          width: 100%;
        }

        .sp-timeline-content.gap-alert {
          background: #FEF2F2;
          border-color: #FECACA;
        }

        .sp-timeline-time {
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #64748B;
        }

        .sp-timeline-content.gap-alert .sp-timeline-time {
          color: #DC2626;
        }

        .sp-timeline-desc {
          font-size: 0.95rem;
          font-weight: 600;
          color: #011E3E;
          margin-top: 2px;
        }

        /* ── S03: PRACTICAL SUPPORT FOR THE MOVE (4 READING ROWS) ── */
        .sp-support-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 26px;
          margin-bottom: 32px;
        }

        @media (max-width: 768px) {
          .sp-support-grid {
            grid-template-columns: 1fr;
          }
        }

        .sp-support-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 30px;
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
          gap: 14px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.02);
        }

        .sp-support-card:hover {
          border-color: #FFA000;
          transform: translateY(-3px);
          box-shadow: 0 16px 36px -10px rgba(1, 30, 62, 0.1);
        }

        .sp-support-header {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .sp-support-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #FFF8EB;
          border: 1px solid #FFE4B5;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #D97706;
          flex-shrink: 0;
        }

        .sp-support-card h3 {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.35rem;
          font-weight: 800;
          color: #011E3E;
          margin: 0;
        }

        .sp-support-card p {
          font-size: 1.02rem;
          color: #475569;
          line-height: 1.68;
          margin: 0;
        }

        .sp-scope-footnote {
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

        /* ── S04: LOOK BEYOND THE ROOM PHOTO (HOUSING DUE DILIGENCE) ── */
        .sp-housing-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        @media (max-width: 992px) {
          .sp-housing-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .sp-housing-grid {
            grid-template-columns: 1fr;
          }
        }

        .sp-housing-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 26px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          position: relative;
        }

        .sp-housing-num {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.8rem;
          font-weight: 800;
          color: #FFA000;
          line-height: 1;
        }

        .sp-housing-card p {
          font-size: 1rem;
          color: #334155;
          line-height: 1.65;
          margin: 0;
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
          font-size: 1.15rem;
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

        .sp-scenario-blocks {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .sp-state-box {
          padding: 18px 22px;
          border-radius: 12px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
        }

        .sp-state-label {
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: #64748B;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .sp-state-text {
          font-size: 1.08rem;
          font-weight: 500;
          color: #011E3E;
          margin: 0;
          line-height: 1.6;
        }

        .sp-state-box.status-box {
          border-left-width: 5px;
        }

        .sp-scenario-footer-note {
          text-align: center;
          margin-top: 26px;
          font-size: 0.96rem;
          font-style: italic;
          color: #64748B;
        }

        /* ── S06: RULES TRAVEL WITH PERMISSION ── */
        .sp-rules-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 26px;
        }

        @media (max-width: 768px) {
          .sp-rules-grid {
            grid-template-columns: 1fr;
          }
        }

        .sp-rule-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 28px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .sp-rule-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #EFF6FF;
          border: 1px solid #DBEAFE;
          color: #2563EB;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .sp-rule-body p {
          font-size: 1.04rem;
          color: #334155;
          line-height: 1.7;
          margin: 0;
        }

        /* ── S07: VERTICAL JOURNEY & BEFORE/AFTER COMPARISON ── */
        .sp-steps-stack {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 860px;
          margin: 0 auto 48px auto;
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

        /* Comparison Box */
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

        .sp-process-disclaimer {
          text-align: center;
          margin-top: 24px;
          font-size: 0.92rem;
          color: #64748B;
          font-style: italic;
        }

        /* ── S08: REASSURANCE & PARENT / STUDENT PERSPECTIVE ── */
        .sp-reassurance-panel {
          max-width: 900px;
          margin: 0 auto;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          padding: 44px;
          box-shadow: 0 20px 48px -15px rgba(1, 30, 62, 0.08);
        }

        @media (max-width: 640px) {
          .sp-reassurance-panel {
            padding: 26px;
          }
        }

        .sp-reassurance-columns {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          margin-bottom: 28px;
        }

        @media (max-width: 700px) {
          .sp-reassurance-columns {
            grid-template-columns: 1fr;
          }
        }

        .sp-col-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 24px;
        }

        .sp-col-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          color: #011E3E;
          margin-bottom: 10px;
        }

        .sp-col-card p {
          font-size: 1.04rem;
          color: #334155;
          line-height: 1.68;
          margin: 0;
        }

        .sp-reassurance-body p {
          font-size: 1.08rem;
          color: #334155;
          line-height: 1.75;
          margin-bottom: 16px;
        }

        .sp-caution-banner {
          margin: 28px 0;
          padding: 16px 20px;
          background: #FEF2F2;
          border: 1px solid #FECACA;
          border-left: 5px solid #DC2626;
          border-radius: 12px;
          color: #991B1B;
          font-weight: 700;
          font-size: 1.04rem;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .sp-cross-nav-cluster {
          margin-top: 24px;
          padding: 22px;
          background: #F8FAFC;
          border-radius: 14px;
          border: 1px solid #E2E8F0;
          font-size: 1.04rem;
          color: #475569;
          line-height: 1.65;
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

        .sp-faq-summary:focus-visible {
          background: #FFFDF9;
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

        /* ── S10: CLOSING MASTER CTA ── */
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

      {/* ── BREADCRUMB BAR ── */}
      <div className="dest-landing-breadcrumb">
        <div className="container">
          <div className="breadcrumb-inner">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services">Services</Link>
            <ChevronRight size={14} />
            <span className="current">Pre & Post Departure Briefing</span>
          </div>
        </div>
      </div>

      {/* ── S01: HERO MASTER SECTION ── */}
      <section className="sp-hero-master">
        <div className="sp-hero-pattern" />
        <div className="sp-hero-glow-orb" />

        <div className="container">
          <div className="sp-hero-grid">
            {/* Hero Left Content */}
            <div>
              <div className="sp-hero-eyebrow">
                <span className="dest-eyebrow-dot" />
                <span>PRE &amp; POST DEPARTURE BRIEFING · ARRIVAL READINESS</span>
              </div>

              <h1 className="sp-hero-title">
                Pre and post <span>departure briefing</span>
              </h1>

              <p className="sp-hero-lead">
                Your visa may be ready while your arrival plan is still scattered across messages. Pre and post departure briefing helps turn those loose ends into a journey you understand.
              </p>

              <p className="sp-hero-body-text">
                Study Prime offers practical guidance on accommodation, travel and settling into student life. Discuss the handovers before you depend on them.
              </p>

              <p className="sp-hero-body-text">
                Know where you will sleep, how you will get there and who can answer the next question. Your family should understand the plan too.
              </p>

              <div className="sp-hero-chips">
                <div className="sp-hero-chip">
                  <CheckCircle2 size={15} color="#FFA000" />
                  <span>No Housing Assumptions</span>
                </div>
                <div className="sp-hero-chip">
                  <CheckCircle2 size={15} color="#FFA000" />
                  <span>Arrival Sequence Verified</span>
                </div>
                <div className="sp-hero-chip">
                  <CheckCircle2 size={15} color="#FFA000" />
                  <span>Family &amp; Parent Clarity</span>
                </div>
              </div>

              <div className="sp-hero-actions">
                <Link to="/assessment" className="sp-hero-btn-primary">
                  <span>Plan my next steps</span>
                  <ArrowRight size={18} />
                </Link>

                <a href="#editorial-handover" className="sp-hero-btn-secondary">
                  <span>Review arrival handovers</span>
                </a>
              </div>

              <div className="sp-hero-trust-note">
                <ShieldCheck size={18} color="#FFA000" style={{ flexShrink: 0 }} />
                <span>For students preparing to travel and families supporting them from Pakistan.</span>
              </div>
            </div>

            {/* Hero Right Visual Diagram (Authored Arrival Journey SVG) */}
            <div>
              <div className="sp-hero-card">
                <div className="sp-card-badge">
                  <Sparkles size={14} />
                  <span>CONNECTED JOURNEY SEQUENCE</span>
                </div>

                <div className="sp-card-title">
                  <PlaneTakeoff size={24} color="#FFA000" />
                  <span>Arrival Handover Map</span>
                </div>

                <div className="sp-hero-journey-steps">
                  <div className="sp-journey-item">
                    <div className="sp-journey-icon-wrap">
                      <ShieldCheck size={18} />
                    </div>
                    <div className="sp-journey-text">
                      <h4>1. Visa Stamped &amp; Official Permission</h4>
                      <p>UK eVisa / Vignette and travel condition dates checked</p>
                    </div>
                  </div>

                  <div className="sp-journey-item">
                    <div className="sp-journey-icon-wrap">
                      <Calendar size={18} />
                    </div>
                    <div className="sp-journey-text">
                      <h4>2. Flight Touchdown &amp; Time Window</h4>
                      <p>Baggage rules, transit hours and customs clearance time</p>
                    </div>
                  </div>

                  <div className="sp-journey-item">
                    <div className="sp-journey-icon-wrap">
                      <Key size={18} />
                    </div>
                    <div className="sp-journey-text">
                      <h4>3. Key Collection &amp; First Address</h4>
                      <p>Tenancy agreement, move-in window &amp; late arrival protocol</p>
                    </div>
                  </div>

                  <div className="sp-journey-item">
                    <div className="sp-journey-icon-wrap">
                      <GraduationCap size={18} />
                    </div>
                    <div className="sp-journey-text">
                      <h4>4. University Registration &amp; Settling</h4>
                      <p>International check-in, local transport, banking &amp; health</p>
                    </div>
                  </div>
                </div>

                {/* Micro SVG connector line representation */}
                <div style={{ marginTop: "20px", padding: "14px", background: "rgba(255,160,0,0.08)", borderRadius: "12px", border: "1px solid rgba(255,160,0,0.2)", display: "flex", alignItems: "center", gap: "10px" }}>
                  <CheckCircle2 size={18} color="#FFA000" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: "0.85rem", color: "#F8FAFC" }}>
                    Identify the unconfirmed handover before committing money to travel.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S02: OPEN EDITORIAL SPLIT ── */}
      <section className="dest-section dest-section-white" id="editorial-handover">
        <div className="container">
          <div className="dest-section-header" style={{ textAlign: "left", maxWidth: "900px", margin: "0 0 44px 0" }}>
            <div className="dest-eyebrow-pill">
              <span className="dest-eyebrow-dot" />
              <span>THE FIRST NIGHT MATTERS</span>
            </div>
            <h2 className="dest-section-title">
              The first night deserves as much thought as the flight
            </h2>
          </div>

          <div className="sp-editorial-grid">
            <div className="sp-editorial-text">
              <p className="sp-highlight-lead">
                A cheaper flight can arrive after the accommodation desk closes. A room listing may not explain when you can collect the keys.
              </p>

              <p>
                Those details connect. Treating each booking as a separate task can leave a gap nobody expected.
              </p>

              <p>
                Start with the actual arrival date and time. Then check access to housing, onward travel and the provider&apos;s arrival instructions.
              </p>

              <p>
                If something is unconfirmed, keep it visible. A clear open question is safer than assuming someone else has arranged it.
              </p>
            </div>

            {/* Authored Handover Gap Diagram */}
            <div>
              <div className="sp-editorial-visual-card">
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "18px" }}>
                  <Clock size={20} color="#011E3E" />
                  <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.15rem", color: "#011E3E" }}>
                    Handover Timeline Check
                  </span>
                </div>

                <div className="sp-gap-timeline">
                  <div className="sp-timeline-node">
                    <div className="sp-node-bullet" />
                    <div className="sp-timeline-content">
                      <div className="sp-timeline-time">Flight Arrival &middot; 21:30 PM</div>
                      <div className="sp-timeline-desc">Touchdown at international terminal</div>
                    </div>
                  </div>

                  <div className="sp-timeline-node">
                    <div className="sp-node-bullet warning" />
                    <div className="sp-timeline-content gap-alert">
                      <div className="sp-timeline-time">Access Risk &middot; 23:00 PM</div>
                      <div className="sp-timeline-desc">Housing desk closed at 18:00 &mdash; Keys unavailable</div>
                    </div>
                  </div>

                  <div className="sp-timeline-node">
                    <div className="sp-node-bullet success" />
                    <div className="sp-timeline-content" style={{ background: "#ECFDF5", borderColor: "#A7F3D0" }}>
                      <div className="sp-timeline-time" style={{ color: "#065F46" }}>Study Prime Alignment</div>
                      <div className="sp-timeline-desc" style={{ color: "#065F46" }}>Confirm approved late-access locker or adjust flight time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S03: PRACTICAL SUPPORT FOR THE MOVE ── */}
      <section className="dest-section dest-section-alt" id="support">
        <div className="container">
          <div className="dest-section-header">
            <div className="dest-eyebrow-pill">
              <span className="dest-eyebrow-dot" />
              <span>CORE RELOCATION PILLARS</span>
            </div>
            <h2 className="dest-section-title">Practical support for the move</h2>
          </div>

          <div className="sp-support-grid">
            {/* Item 1 */}
            <div className="sp-support-card">
              <div className="sp-support-header">
                <div className="sp-support-icon">
                  <BaggageClaim size={24} />
                </div>
                <h3>Before travel</h3>
              </div>
              <p>
                Discuss your arrival timing, luggage rules and provider instructions. Check what must be arranged before leaving and what can wait.
              </p>
            </div>

            {/* Item 2 */}
            <div className="sp-support-card">
              <div className="sp-support-header">
                <div className="sp-support-icon">
                  <Home size={24} />
                </div>
                <h3>Accommodation guidance</h3>
              </div>
              <p>
                Review the location, tenancy terms and move-in arrangements. Ask who receives payment and who is responsible if plans change.
              </p>
            </div>

            {/* Item 3 */}
            <div className="sp-support-card">
              <div className="sp-support-header">
                <div className="sp-support-icon">
                  <MapPin size={24} />
                </div>
                <h3>Getting to your first address</h3>
              </div>
              <p>
                Compare the available transport options and expected arrival hours. Confirm any booked service directly with the responsible provider.
              </p>
            </div>

            {/* Item 4 */}
            <div className="sp-support-card">
              <div className="sp-support-header">
                <div className="sp-support-icon">
                  <GraduationCap size={24} />
                </div>
                <h3>Settling into student life</h3>
              </div>
              <p>
                Discuss enrolment, local transport, communication and access to relevant student services. Banking and healthcare arrangements depend on the country and your situation.
              </p>
            </div>
          </div>

          <div className="sp-scope-footnote">
            <ShieldCheck size={24} style={{ flexShrink: 0 }} />
            <span>
              Agree the help included and any charges before paid work begins. Guidance does not mean a room, flight or pickup has been booked.
            </span>
          </div>
        </div>
      </section>

      {/* ── S04: LOOK BEYOND THE ROOM PHOTO ── */}
      <section className="dest-section dest-section-white" id="housing-guidance">
        <div className="container">
          <div className="dest-section-header">
            <div className="dest-eyebrow-pill">
              <span className="dest-eyebrow-dot" />
              <span>ACCOMMODATION DUE DILIGENCE</span>
            </div>
            <h2 className="dest-section-title">Look beyond the room photo</h2>
          </div>

          <div className="sp-housing-grid">
            <div className="sp-housing-card">
              <div className="sp-housing-num">01</div>
              <p>
                Check the address against the campus where you will actually study. A low rent can come with a costly or impractical journey.
              </p>
            </div>

            <div className="sp-housing-card">
              <div className="sp-housing-num">02</div>
              <p>
                Read payment dates, cancellation terms and what the rent includes. Confirm the process for collecting keys if you arrive late.
              </p>
            </div>

            <div className="sp-housing-card">
              <div className="sp-housing-num">03</div>
              <p>
                Do not treat an adviser introduction as a tenancy guarantee. The housing provider&apos;s written terms still matter.
              </p>
            </div>

            <div className="sp-housing-card" style={{ borderLeft: "4px solid #FFA000" }}>
              <div className="sp-housing-num">04</div>
              <p>
                Plan a realistic first-week budget for food, transport and setup costs. Keep it separate from money already committed to tuition or housing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── S05: WALK THROUGH AN ARRIVAL HANDOVER (INTERACTIVE) ── */}
      <section className="dest-section dest-section-alt" id="handovers">
        <div className="container">
          <div className="dest-section-header">
            <div className="dest-eyebrow-pill">
              <span className="dest-eyebrow-dot" />
              <span>PRACTICAL SCENARIO EXPLAINER</span>
            </div>
            <h2 className="dest-section-title">Walk through an arrival handover</h2>
            <p style={{ color: "#64748B", fontSize: "0.98rem", margin: "8px 0 0 0", fontStyle: "italic" }}>
              Illustrative arrival scenario. This is not a real booking or a client result.
            </p>
          </div>

          <div className="sp-scenario-wrapper">
            {/* 3-State Selector Buttons */}
            <div className="sp-scenario-selector" role="tablist" aria-label="Arrival handover scenarios">
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

              <div className="sp-scenario-blocks">
                <div className="sp-state-box">
                  <div className="sp-state-label">
                    <UserCheck size={16} color="#011E3E" />
                    <span>Input</span>
                  </div>
                  <p className="sp-state-text">
                    {scenarios[activeScenario].input}
                  </p>
                </div>

                <div className="sp-state-box">
                  <div className="sp-state-label">
                    <Compass size={16} color="#FFA000" />
                    <span>Action</span>
                  </div>
                  <p className="sp-state-text">
                    {scenarios[activeScenario].action}
                  </p>
                </div>

                <div 
                  className="sp-state-box status-box"
                  style={{ 
                    borderLeftColor: scenarios[activeScenario].statusColor,
                    background: scenarios[activeScenario].statusBg,
                    borderColor: scenarios[activeScenario].statusBorder
                  }}
                >
                  <div className="sp-state-label" style={{ color: scenarios[activeScenario].statusColor }}>
                    <AlertCircle size={16} />
                    <span>Status</span>
                  </div>
                  <p className="sp-state-text" style={{ color: "#011E3E", fontWeight: 600 }}>
                    {scenarios[activeScenario].status}
                  </p>
                </div>
              </div>
            </div>

            <p className="sp-scenario-footer-note">
              The point is to find the missing handover before the journey starts.
            </p>
          </div>
        </div>
      </section>

      {/* ── S06: KNOW WHICH RULES TRAVEL WITH YOUR PERMISSION ── */}
      <section className="dest-section dest-section-white" id="rules">
        <div className="container">
          <div className="dest-section-header">
            <div className="dest-eyebrow-pill">
              <span className="dest-eyebrow-dot" />
              <span>REGULATORY CLARITY</span>
            </div>
            <h2 className="dest-section-title">Know which rules travel with your permission</h2>
          </div>

          <div className="sp-rules-grid">
            <div className="sp-rule-card">
              <div className="sp-rule-icon">
                <Scale size={22} />
              </div>
              <div className="sp-rule-body">
                <p>
                  Work rights depend on your immigration permission and circumstances. Do not copy a friend&apos;s hours or assume every student has the same conditions.
                </p>
              </div>
            </div>

            <div className="sp-rule-card">
              <div className="sp-rule-icon">
                <ShieldCheck size={22} />
              </div>
              <div className="sp-rule-body">
                <p>
                  Access to immigration status can also differ by country. For the UK, check your eVisa and linked travel details rather than expecting a new residence card.
                </p>
              </div>
            </div>

            <div className="sp-rule-card">
              <div className="sp-rule-icon">
                <Building2 size={22} />
              </div>
              <div className="sp-rule-body">
                <p>
                  Ask the university which arrival and registration steps apply to you. Its international student team is an important contact after arrival.
                </p>
              </div>
            </div>

            <div className="sp-rule-card">
              <div className="sp-rule-icon">
                <DollarSign size={22} />
              </div>
              <div className="sp-rule-body">
                <p>
                  Keep part-time earnings outside the money you need for the move. A job may take time to find, and permission to work is not a job offer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S07: CONNECT THE JOURNEY BEFORE YOU LEAVE ── */}
      <section className="dest-section dest-section-alt" id="steps">
        <div className="container">
          <div className="dest-section-header">
            <div className="dest-eyebrow-pill">
              <span className="dest-eyebrow-dot" />
              <span>STEP-BY-STEP HANDOVER</span>
            </div>
            <h2 className="dest-section-title">Connect the journey before you leave</h2>
          </div>

          <div className="sp-steps-stack">
            {/* Step 1 */}
            <div className="sp-step-row">
              <div className="sp-step-num">1</div>
              <div className="sp-step-content">
                <h3>Talk through the travel stage</h3>
                <p>
                  Share your study location, likely travel date and main concerns. Separate confirmed arrangements from plans you are still considering.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="sp-step-row">
              <div className="sp-step-num">2</div>
              <div className="sp-step-content">
                <h3>Review the handovers</h3>
                <p>
                  Connect flight arrival, onward travel and accommodation access. Identify who can confirm each unresolved point.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="sp-step-row">
              <div className="sp-step-num">3</div>
              <div className="sp-step-content">
                <h3>Understand the first days</h3>
                <p>
                  Review provider arrival instructions and essential local setup. Discuss who to contact for housing, enrolment or urgent practical concerns.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="sp-step-row">
              <div className="sp-step-num">4</div>
              <div className="sp-step-content">
                <h3>Revisit changes</h3>
                <p>
                  A flight change or delayed arrival can affect the rest of the plan. Confirm revised arrangements with the responsible organisations.
                </p>
              </div>
            </div>
          </div>

          {/* Before & Target State Comparison */}
          <div className="sp-comparison-grid">
            <div className="sp-comp-box before">
              <div className="sp-comp-header">
                <AlertCircle size={20} />
                <span>Before</span>
              </div>
              <p>
                A flight message, a housing conversation and assumptions about arrival.
              </p>
            </div>

            <div className="sp-comp-box after">
              <div className="sp-comp-header">
                <CheckCircle2 size={20} />
                <span>Target state</span>
              </div>
              <p>
                A connected travel plan with clear confirmations and named responsibilities.
              </p>
            </div>
          </div>

          <p className="sp-process-disclaimer">
            This is a process illustration, not a promise that third parties will provide a service.
          </p>
        </div>
      </section>

      {/* ── S08: REASSURANCE COMES FROM KNOWING WHO HANDLES WHAT ── */}
      <section className="dest-section dest-section-white" id="boundaries">
        <div className="container">
          <div className="sp-reassurance-panel">
            <div className="dest-eyebrow-pill" style={{ marginBottom: "16px" }}>
              <span className="dest-eyebrow-dot" />
              <span>ROLES &amp; RESPONSIBILITIES</span>
            </div>

            <h2 className="dest-section-title" style={{ textAlign: "left", marginBottom: "20px" }}>
              Reassurance comes from knowing who handles what
            </h2>

            <div className="sp-reassurance-columns">
              <div className="sp-col-card">
                <div className="sp-col-badge">
                  <Users size={16} color="#011E3E" />
                  <span>For Parents</span>
                </div>
                <p>
                  Parents often need to understand the first address and arrival sequence.
                </p>
              </div>

              <div className="sp-col-card">
                <div className="sp-col-badge">
                  <GraduationCap size={16} color="#011E3E" />
                  <span>For Students</span>
                </div>
                <p>
                  Students need to know what they must arrange themselves.
                </p>
              </div>
            </div>

            <div className="sp-reassurance-body">
              <p>
                Study Prime&apos;s advertised support continues beyond the visa preparation stage. Use the briefing to ask practical questions while there is time to resolve them.
              </p>

              <p>
                This service is useful when you want guidance, not someone to make every decision for you. Housing providers, airlines and universities remain responsible for their own services.
              </p>
            </div>

            <div className="sp-caution-banner">
              <ShieldAlert size={22} style={{ flexShrink: 0 }} />
              <span>We do not promise accommodation availability, employment or immigration outcomes.</span>
            </div>

            <div className="sp-cross-nav-cluster">
              Still preparing permission to travel? See{" "}
              <Link to="/services/student-visa">student visa assistance</Link>. Browse{" "}
              <Link to="/services">all advisory services</Link>.
            </div>
          </div>
        </div>
      </section>

      {/* ── S09: QUESTIONS ABOUT LEAVING AND SETTLING IN ── */}
      <section className="dest-section dest-section-alt" id="faq">
        <div className="container">
          <div className="dest-section-header">
            <div className="dest-eyebrow-pill">
              <span className="dest-eyebrow-dot" />
              <span>COMMON INQUIRIES</span>
            </div>
            <h2 className="dest-section-title">Questions about leaving and settling in</h2>
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

      {/* ── S10: CLOSING MASTER CTA BANNER ── */}
      <section className="sp-closing-cta">
        <div className="container">
          <h2>Leave with fewer unanswered handovers</h2>

          <p>
            Start with the part of arrival that is still uncertain. It may be housing access, a late flight or the university&apos;s first-day instructions.
          </p>

          <p>
            Discuss the next steps with Study Prime before treating a plan as a booking.
          </p>

          <div className="sp-closing-actions">
            <Link to="/assessment" className="sp-hero-btn-primary">
              <span>Plan my next steps</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="sp-closing-contact-cluster">
            <Link to="/contact">Contact Study Prime</Link>
            <span style={{ opacity: 0.4 }}>&bull;</span>
            <a href="mailto:info@studyprime.pk">info@studyprime.pk</a>
          </div>

          <div className="sp-closing-nap">
            Office #F-15, First Floor, Galleria Mall, I-8 Markaz, Islamabad, Pakistan.{" "}
            Call <a href="tel:+923101193888">+92 310 1193888</a> or <a href="tel:+92518740888">+92 51 8740888</a>.
          </div>
        </div>
      </section>
    </div>
  );
}
