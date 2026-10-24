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
  Layers,
  ChevronDown
} from "lucide-react";
import { CANONICAL_BASE_URL } from "~/utils/seo";

export const meta: MetaFunction = () => {
  const canonicalUrl = `${CANONICAL_BASE_URL}/destinations/study-in-uk`;
  const pageTitle = "Study in UK | Study Prime";
  const pageDescription =
    "Study in UK with a clearer view of course fit, fees, CAS, visa funding and family plans. Explore the decisions, then book a free Study Prime assessment.";

  return [
    { title: pageTitle },
    { name: "description", content: pageDescription },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: "website" },
    { property: "og:image", content: `${CANONICAL_BASE_URL}/images/destinations/uk.jpg` },
    { property: "og:image:alt", content: "Study in UK with Study Prime" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: pageDescription },
    { name: "twitter:image", content: `${CANONICAL_BASE_URL}/images/destinations/uk.jpg` },
    { tagName: "link", rel: "canonical", href: canonicalUrl },
  ];
};

export default function DestinationsStudyInUkRoute() {
  const canonicalUrl = `${CANONICAL_BASE_URL}/destinations/study-in-uk`;

  // S06 Interactive UK Planning Walkthrough
  const [activeScenario, setActiveScenario] = useState<number>(0);

  const scenarios = [
    {
      id: "offer-received",
      tabLabel: "Offer received",
      title: "Offer received",
      input: "I have a conditional offer and want to pay the deposit.",
      review: "Check outstanding conditions, the payment terms and what happens if the visa is refused.",
      nextQuestion: "What must be resolved before I commit this money?",
    },
    {
      id: "funding-uncertain",
      tabLabel: "Funding uncertain",
      title: "Funding uncertain",
      input: "I am counting on part-time work to cover later costs.",
      review: "Separate money already available from uncertain earnings. Check the funding evidence rules for the application.",
      nextQuestion: "Can the plan still work if I find no job?",
    },
    {
      id: "family-plans",
      tabLabel: "Family plans",
      title: "Family plans",
      input: "I want my partner to travel with me during a taught master's.",
      review: "Check the current dependant rules for this specific course and situation. An offer does not establish family eligibility.",
      nextQuestion: "Does our family plan remain workable if dependants cannot apply?",
    },
  ];

  const faqs = [
    {
      q: "Does a UK offer guarantee a Student visa?",
      a: "No. Admission and immigration are separate decisions. You need the relevant provider steps, including a CAS for the Student route, and must meet the visa requirements.",
    },
    {
      q: "Is IELTS always the only English evidence route?",
      a: "No. The accepted route depends on the provider and applicable visa requirements. Check what evidence is accepted for your particular course and circumstances.",
    },
    {
      q: "How much should my family budget?",
      a: "Use the exact course fee, payment dates and realistic living costs. Keep the immigration funding requirement separate. A general country average cannot confirm your total commitment.",
    },
    {
      q: "Can part-time work cover my study costs?",
      a: "Do not rely on it. Work permission is conditional and a suitable job may not be available. Build the plan around confirmed funding, not expected earnings.",
    },
    {
      q: "Can my partner join me for a taught master's?",
      a: "Do not assume so. Dependant eligibility is restricted and depends on the course and circumstances. Check the current rules before making family travel or housing commitments.",
    },
    {
      q: "Will I receive a two-year Graduate visa?",
      a: "It is not a universal entitlement. Eligibility, qualification and application date matter. Check the rules expected to apply when you finish, and review them again before applying.",
    },
    {
      q: "Can Study Prime guarantee a scholarship?",
      a: "No. The award provider decides eligibility and selection. Check the award's conditions and coverage before treating it as available funding.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${CANONICAL_BASE_URL}/#organization`,
        name: "Study Prime",
        url: CANONICAL_BASE_URL,
        email: "info@studyprime.pk",
        telephone: "+923101193888",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
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
            name: "Study destinations",
            item: `${CANONICAL_BASE_URL}/destinations`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Study in UK",
            item: canonicalUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: "Study in UK",
        url: canonicalUrl,
        serviceType: "Study abroad education guidance",
        provider: {
          "@id": `${CANONICAL_BASE_URL}/#organization`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
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
           STUDY PRIME · STUDY IN UK DESTINATION DESIGN SYSTEM
           Palette: #011E3E navy, #06274E, #02162C, #FFA000 gold, #10B981 green
           ══════════════════════════════════════════════════════════════ */

        .uk-reading-column {
          max-width: 820px;
          margin: 0 auto;
        }

        .uk-prose-p {
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.72;
          margin-bottom: 20px;
        }

        .uk-prose-p:last-child {
          margin-bottom: 0;
        }

        /* ── S03: Visual Plate ── */
        .uk-plate-card {
          background: linear-gradient(135deg, #011E3E 0%, #06274E 100%);
          border: 1px solid rgba(255, 160, 0, 0.28);
          border-radius: 18px;
          padding: 26px 28px;
          margin: 28px 0;
          box-shadow: 0 12px 30px rgba(1, 30, 62, 0.12);
        }

        .uk-plate-title {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #FFA000;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .uk-plate-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        @media (max-width: 680px) {
          .uk-plate-grid {
            grid-template-columns: 1fr;
          }
        }

        .uk-plate-item {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 12px;
          padding: 16px 18px;
          text-align: center;
          backdrop-filter: blur(8px);
        }

        .uk-plate-label {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.12rem;
          font-weight: 700;
          color: #FFFFFF;
        }

        /* ── S04: 2x2 Cost Cards ── */
        .uk-cost-grid-2x2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
          margin: 32px 0 28px 0;
        }

        @media (max-width: 768px) {
          .uk-cost-grid-2x2 {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        .uk-cost-tile {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 26px;
          box-shadow: 0 4px 18px rgba(15, 23, 42, 0.03);
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .uk-cost-tile:hover {
          transform: translateY(-2px);
          border-color: #CBD5E1;
          box-shadow: 0 8px 24px rgba(1, 30, 62, 0.06);
        }

        .uk-cost-tile-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .uk-cost-tile-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #FEF3C7;
          color: #D97706;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .uk-cost-tile h3 {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.22rem;
          font-weight: 700;
          color: #011E3E;
          margin: 0;
        }

        .uk-cost-tile p {
          font-size: 0.98rem;
          color: #475569;
          line-height: 1.65;
          margin: 0;
        }

        .uk-costs-summary-note {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-left: 4px solid #FFA000;
          border-radius: 12px;
          padding: 18px 22px;
          font-size: 0.98rem;
          color: #334155;
          line-height: 1.65;
        }

        /* ── S05: Four-step Admissions Timeline ── */
        .uk-timeline-wrap {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-top: 32px;
          position: relative;
        }

        .uk-timeline-card {
          display: flex;
          gap: 22px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 24px 26px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.02);
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .uk-timeline-card:hover {
          border-color: #CBD5E1;
          transform: translateX(4px);
        }

        .uk-timeline-num {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          background: #011E3E;
          color: #FFA000;
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.35rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 2px solid rgba(255, 160, 0, 0.3);
        }

        .uk-timeline-body h3 {
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.25rem;
          font-weight: 700;
          color: #011E3E;
          margin: 0 0 8px 0;
        }

        .uk-timeline-body p {
          font-size: 1rem;
          color: #475569;
          line-height: 1.65;
          margin: 0;
        }

        /* ── S06: Demo Walkthrough ── */
        .uk-demo-container {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 34px;
          margin-top: 28px;
          box-shadow: 0 10px 30px rgba(1, 30, 62, 0.05);
        }

        .uk-demo-tabs {
          display: flex;
          gap: 12px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }

        .uk-demo-tab-btn {
          flex: 1;
          min-width: 180px;
          padding: 14px 20px;
          background: #F8FAFC;
          border: 2px solid #E2E8F0;
          border-radius: 12px;
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.08rem;
          font-weight: 700;
          color: #334155;
          cursor: pointer;
          transition: all 0.2s ease;
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .uk-demo-tab-btn:hover {
          border-color: #FFA000;
          background: #FFFDF9;
        }

        .uk-demo-tab-btn.active {
          background: #011E3E;
          color: #FFFFFF;
          border-color: #011E3E;
          box-shadow: 0 6px 18px rgba(1, 30, 62, 0.2);
        }

        .uk-demo-tab-btn:focus-visible {
          outline: 3px solid #FFA000;
          outline-offset: 2px;
        }

        .uk-demo-panel {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .uk-demo-block {
          border-radius: 14px;
          padding: 20px 24px;
        }

        .uk-demo-block.input-block {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-left: 5px solid #011E3E;
        }

        .uk-demo-block.review-block {
          background: #FEF3C7;
          border: 1px solid #FDE68A;
          border-left: 5px solid #D97706;
        }

        .uk-demo-block.next-block {
          background: #ECFDF5;
          border: 1px solid #A7F3D0;
          border-left: 5px solid #10B981;
        }

        .uk-demo-block-label {
          font-size: 0.76rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 6px;
        }

        .uk-demo-block.input-block .uk-demo-block-label {
          color: #011E3E;
        }

        .uk-demo-block.review-block .uk-demo-block-label {
          color: #92400E;
        }

        .uk-demo-block.next-block .uk-demo-block-label {
          color: #065F46;
        }

        .uk-demo-block-text {
          font-size: 1.04rem;
          font-weight: 500;
          color: #1E293B;
          line-height: 1.6;
          margin: 0;
        }

        /* ── S07: Scholarships Award Terms SVG Plate ── */
        .uk-award-plate {
          background: #FAF6ED;
          border: 1px solid #E9DEC8;
          border-radius: 18px;
          padding: 28px;
          margin: 28px 0;
          text-align: center;
        }

        /* ── S08: Work & Family Caution Rail ── */
        .uk-work-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 22px;
          margin-top: 28px;
        }

        .uk-work-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-left: 5px solid #FFA000;
          border-radius: 14px;
          padding: 22px 26px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.02);
        }

        .uk-work-card p {
          font-size: 1.02rem;
          color: #475569;
          line-height: 1.68;
          margin: 0;
        }

        /* ── S09: Semantic Comparison Table ── */
        .uk-comparison-wrap {
          margin-top: 32px;
          overflow-x: auto;
        }

        .uk-comparison-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          overflow: hidden;
          background: #FFFFFF;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);
        }

        .uk-comparison-table th {
          background: #F1F5F9;
          color: #011E3E;
          font-family: var(--font-heading, "Roboto Condensed", sans-serif);
          font-size: 1.15rem;
          font-weight: 800;
          text-align: left;
          padding: 18px 24px;
          border-bottom: 2px solid #E2E8F0;
        }

        .uk-comparison-table td {
          padding: 18px 24px;
          font-size: 1.02rem;
          line-height: 1.6;
          border-bottom: 1px solid #F1F5F9;
          vertical-align: top;
        }

        .uk-comparison-table tr:last-child td {
          border-bottom: none;
        }

        .uk-comparison-table td:first-child {
          color: #991B1B;
          background: #FEF2F2;
          font-weight: 600;
          width: 50%;
          border-right: 1px solid #FEE2E2;
        }

        .uk-comparison-table td:last-child {
          color: #065F46;
          background: #ECFDF5;
          font-weight: 600;
          width: 50%;
        }

        @media (max-width: 640px) {
          .uk-comparison-table,
          .uk-comparison-table thead,
          .uk-comparison-table tbody,
          .uk-comparison-table th,
          .uk-comparison-table td,
          .uk-comparison-table tr {
            display: block;
          }

          .uk-comparison-table thead {
            display: none;
          }

          .uk-comparison-table tr {
            margin-bottom: 16px;
            border: 1px solid #E2E8F0;
            border-radius: 14px;
            overflow: hidden;
          }

          .uk-comparison-table td {
            width: 100% !important;
            padding: 14px 18px;
            border-right: none !important;
          }

          .uk-comparison-table td:first-child::before {
            content: "A fragile assumption: ";
            display: block;
            font-size: 0.74rem;
            text-transform: uppercase;
            letter-spacing: 0.6px;
            color: #DC2626;
            margin-bottom: 4px;
          }

          .uk-comparison-table td:last-child::before {
            content: "A clearer planning question: ";
            display: block;
            font-size: 0.74rem;
            text-transform: uppercase;
            letter-spacing: 0.6px;
            color: #059669;
            margin-bottom: 4px;
          }
        }

        /* ── S10: Support Strip ── */
        .uk-support-strip {
          background: linear-gradient(135deg, #011E3E 0%, #06274E 100%);
          color: #FFFFFF;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          padding: 68px 0;
        }

        .uk-support-links-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
          margin: 28px 0;
          font-size: 1.05rem;
        }

        .uk-support-link-item {
          color: #FFA000;
          text-decoration: underline;
          font-weight: 700;
          transition: color 0.15s ease;
        }

        .uk-support-link-item:hover {
          color: #FFB300;
        }

        .uk-support-dot {
          color: rgba(255, 255, 255, 0.4);
        }

        .uk-support-guarantee-note {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.75);
          text-align: center;
          margin-top: 18px;
        }

        /* ── Focus and reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
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
            <span className="current">Study in UK</span>
          </div>
        </div>
      </nav>

      {/* S01: Hero Section */}
      <section id="hero" className="dest-hero-premium">
        <div
          className="dest-hero-bg-overlay"
          style={{ backgroundImage: `url('/images/destinations/uk.jpg')` }}
        />
        <div className="dest-hero-vignette" />

        <div className="container">
          <div className="dest-hero-grid">
            <div>
              <div className="dest-hero-eyebrow">
                <Sparkles size={14} />
                <span>Study destination guide &middot; UK</span>
              </div>

              <h1 className="dest-hero-title">
                Study in <span>UK</span>
              </h1>

              <p className="dest-hero-lead">
                A UK offer can feel like the hard part is over. Then the deposit, living costs and visa questions arrive together.
              </p>

              <p className="dest-hero-body-text">
                Choose a course you can explain and a commitment your family understands. Study Prime helps you compare the academic route, prepare applications and work through the next questions.
              </p>

              {/* Trust Chips (Exact 3 phrases) */}
              <div className="dest-hero-chips">
                <span className="dest-hero-chip">
                  <CheckCircle2 size={14} color="#FFA000" />
                  Course fit before commitment
                </span>
                <span className="dest-hero-chip">
                  <CheckCircle2 size={14} color="#FFA000" />
                  Separate admission and visa decisions
                </span>
                <span className="dest-hero-chip">
                  <CheckCircle2 size={14} color="#FFA000" />
                  A clear starting conversation
                </span>
              </div>

              {/* Action Buttons */}
              <div className="dest-hero-actions">
                <Link to="/assessment?destination=uk" className="dest-btn-primary">
                  <span>Get my free UK assessment</span>
                  <ArrowRight size={18} />
                </Link>
                <a href="#costs" className="dest-btn-secondary">
                  Review fees and budget
                </a>
              </div>
            </div>

            {/* Showcase Floating Card with authored SVG architectural illustration */}
            <div>
              <div className="dest-hero-card">
                <div className="dest-hero-photo-wrap">
                  <img
                    src="/images/destinations/uk.jpg"
                    alt="United Kingdom universities and London cityscape"
                    loading="eager"
                  />
                  <div className="dest-hero-card-badge">
                    <GraduationCap size={13} />
                    <span>Study destination guide &middot; UK</span>
                  </div>
                </div>

                <div className="dest-hero-card-body">
                  <div className="dest-hero-card-title">
                    <img
                      src="/images/flags/uk.svg"
                      alt="UK Flag"
                      className="dest-hero-card-flag"
                      onError={(e) => ((e.target as HTMLElement).style.display = "none")}
                    />
                    <span>Key UK Planning Facts</span>
                  </div>

                  <div className="dest-hero-card-list">
                    <div className="dest-hero-card-item">
                      <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span>CAS before Student visa application</span>
                    </div>
                    <div className="dest-hero-card-item">
                      <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span>Admission and visa decisions are separate</span>
                    </div>
                    <div className="dest-hero-card-item">
                      <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span>Family eligibility needs a separate check</span>
                    </div>
                  </div>

                  <Link to="/assessment?destination=uk" className="dest-hero-card-btn">
                    <span>Get my free UK assessment</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky In-Page Subnavigation */}
      <nav className="dest-sticky-nav-bar" aria-label="Jump to UK topics">
        <div className="container">
          <div className="dest-sticky-nav-list">
            <a href="#fit" className="dest-sticky-nav-link">Suitability</a>
            <a href="#courses" className="dest-sticky-nav-link">Courses</a>
            <a href="#costs" className="dest-sticky-nav-link">Fees &amp; Budget</a>
            <a href="#admissions" className="dest-sticky-nav-link">Admissions &amp; visa</a>
            <a href="#scholarships" className="dest-sticky-nav-link">Scholarships</a>
            <a href="#faq" className="dest-sticky-nav-link">FAQs</a>
          </div>
        </div>
      </nav>

      {/* S02: Fit before destination */}
      <section id="fit" className="dest-section dest-section-white">
        <div className="container">
          <div className="uk-reading-column">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>SUITABILITY EVALUATION</span>
              </div>
              <h2 className="dest-section-title">Is the UK the right setting for your next step?</h2>
              <p className="dest-section-subline">
                The right question is not whether a British degree sounds impressive. It is whether the course teaches what you need at a cost you can support.
              </p>
            </div>

            <div className="dest-comparison-grid">
              <div className="dest-card-panel explore-card">
                <div className="dest-card-header-row">
                  <div className="dest-card-icon-wrap green-bg">
                    <CheckCircle2 size={22} />
                  </div>
                  <h3 className="dest-card-title">Worth exploring</h3>
                </div>
                <p>
                  You can explain the subject you want to study. You are ready to compare modules and entry requirements. Your funding plan can stand without an uncertain job or scholarship.
                </p>
              </div>

              <div className="dest-card-panel pause-card">
                <div className="dest-card-header-row">
                  <div className="dest-card-icon-wrap amber-bg">
                    <AlertCircle size={22} />
                  </div>
                  <h3 className="dest-card-title">Pause and review</h3>
                </div>
                <p>
                  You need a future job to pay the next tuition instalment. Your family plans depend on automatic dependant eligibility. Or the main reason for choosing the course is a promised stay after graduation.
                </p>
              </div>
            </div>

            <div style={{ marginTop: "24px" }}>
              <p className="uk-prose-p">
                These concerns deserve a conversation before a payment. A different course, intake or destination may fit your circumstances better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S03: Look closely at what the course actually awards */}
      <section id="courses" className="dest-section dest-section-light">
        <div className="container">
          <div className="uk-reading-column">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>COURSE &amp; DEGREE EVALUATION</span>
              </div>
              <h2 className="dest-section-title">Look closely at what the course actually awards</h2>
            </div>

            <p className="uk-prose-p">
              For undergraduate study, compare the provider's entry route with your qualifications. For a taught master's, check the required subject background and assessment style.
            </p>

            <p className="uk-prose-p">
              Research degrees need a different discussion about the proposed work and provider requirements. A top-up route depends on accepted prior study, not simply an attractive final-year title.
            </p>

            {/* Arched navy/cream visual plate with guide labels */}
            <div className="uk-plate-card">
              <div className="uk-plate-title">
                <Layers size={15} />
                <span>Qualification Evaluation Framework</span>
              </div>
              <div className="uk-plate-grid">
                <div className="uk-plate-item">
                  <div className="uk-plate-label">Awarding body</div>
                </div>
                <div className="uk-plate-item">
                  <div className="uk-plate-label">Course content</div>
                </div>
                <div className="uk-plate-item">
                  <div className="uk-plate-label">Entry route</div>
                </div>
              </div>
            </div>

            <p className="uk-prose-p">
              Check who awards the qualification, especially if one college teaches another institution's degree. Degree recognition and permission to sponsor international students are different checks.
            </p>

            <p className="uk-prose-p">
              If you plan to return to Pakistan, consider the course's value there too. Where a career requires professional registration, confirm the relevant recognition route before committing.
            </p>

            <div style={{ marginTop: "28px" }}>
              <Link 
                to="/courses" 
                className="btn btn-primary"
                style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  gap: "8px", 
                  backgroundColor: "#011E3E", 
                  color: "#FFFFFF", 
                  padding: "14px 26px", 
                  borderRadius: "10px", 
                  fontWeight: 700,
                  textDecoration: "none" 
                }}
              >
                <span>Explore course areas</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S04: Separate the study budget from visa evidence */}
      <section id="costs" className="dest-section dest-section-white">
        <div className="container">
          <div className="uk-reading-column">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>FINANCIAL PLANNING</span>
              </div>
              <h2 className="dest-section-title">Separate the study budget from visa evidence</h2>
            </div>

            <div className="uk-cost-grid-2x2">
              <div className="uk-cost-tile">
                <div className="uk-cost-tile-header">
                  <div className="uk-cost-tile-icon">
                    <GraduationCap size={20} />
                  </div>
                  <h3>Tuition</h3>
                </div>
                <p>
                  Use the provider's written fee for your exact course and intake. Check the whole course cost rather than assuming every fee is annual.
                </p>
              </div>

              <div className="uk-cost-tile">
                <div className="uk-cost-tile-header">
                  <div className="uk-cost-tile-icon">
                    <Building2 size={20} />
                  </div>
                  <h3>Living costs</h3>
                </div>
                <p>
                  Plan for accommodation, bills, food, travel and everyday spending. London and other locations can create different commitments. An immigration minimum is not a complete household budget.
                </p>
              </div>

              <div className="uk-cost-tile">
                <div className="uk-cost-tile-header">
                  <div className="uk-cost-tile-icon">
                    <Calendar size={20} />
                  </div>
                  <h3>Payment timing</h3>
                </div>
                <p>
                  Check when a deposit or instalment is due and what the refund conditions allow. A payment deadline can arrive before the visa decision.
                </p>
              </div>

              <div className="uk-cost-tile">
                <div className="uk-cost-tile-header">
                  <div className="uk-cost-tile-icon">
                    <ShieldCheck size={20} />
                  </div>
                  <h3>Immigration funding evidence</h3>
                </div>
                <p>
                  The Student visa financial requirement is a separate rules-based check. Course fees, location, acceptable evidence and your circumstances affect what applies.
                </p>
              </div>
            </div>

            <div className="uk-costs-summary-note">
              <p style={{ margin: 0 }}>
                Confirm the current requirements before arranging funds or paying. Keep undecided awards and hoped-for wages outside the money already available to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S05: An offer, a CAS and a visa do different jobs */}
      <section id="admissions" className="dest-section dest-section-light">
        <div className="container">
          <div className="uk-reading-column">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>ADMISSION &amp; VISA SEQUENCE</span>
              </div>
              <h2 className="dest-section-title">An offer, a CAS and a visa do different jobs</h2>
            </div>

            <div className="uk-timeline-wrap">
              <div className="uk-timeline-card">
                <div className="uk-timeline-num">1</div>
                <div className="uk-timeline-body">
                  <h3>Compare the course</h3>
                  <p>
                    Check academic fit, entry requirements and the full financial commitment. Decide whether the option belongs on your shortlist.
                  </p>
                </div>
              </div>

              <div className="uk-timeline-card">
                <div className="uk-timeline-num">2</div>
                <div className="uk-timeline-body">
                  <h3>Meet the provider's conditions</h3>
                  <p>
                    A conditional offer is not a completed admission route. Follow the provider's actual requirements and ask about payment and refund terms.
                  </p>
                </div>
              </div>

              <div className="uk-timeline-card">
                <div className="uk-timeline-num">3</div>
                <div className="uk-timeline-body">
                  <h3>Confirm the CAS stage</h3>
                  <p>
                    A Confirmation of Acceptance for Studies, usually called a CAS, is a reference from the education provider. You need it before applying under the Student visa route. A CAS does not guarantee a visa.
                  </p>
                </div>
              </div>

              <div className="uk-timeline-card">
                <div className="uk-timeline-num">4</div>
                <div className="uk-timeline-body">
                  <h3>Prepare the visa application</h3>
                  <p>
                    Review the requirements that apply to your circumstances. Use genuine evidence and answers you can explain. The immigration authority makes the visa decision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S06: See why the order matters */}
      <section id="demo" className="dest-section dest-section-white">
        <div className="container">
          <div className="uk-reading-column">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>PLANNING WALKTHROUGH</span>
              </div>
              <h2 className="dest-section-title">See why the order matters</h2>
              <p className="dest-section-subline">
                Illustrative UK planning walkthrough. This invented example is not a student case or an eligibility assessment.
              </p>
            </div>

            <div className="uk-demo-container">
              {/* Native scenario buttons */}
              <div className="uk-demo-tabs" role="tablist" aria-label="UK planning scenarios">
                {scenarios.map((sc, index) => (
                  <button
                    key={sc.id}
                    type="button"
                    role="tab"
                    id={`scenario-tab-${index}`}
                    aria-selected={activeScenario === index}
                    aria-controls={`scenario-panel-${index}`}
                    aria-pressed={activeScenario === index}
                    className={`uk-demo-tab-btn ${activeScenario === index ? "active" : ""}`}
                    onClick={() => setActiveScenario(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveScenario(index);
                      }
                    }}
                  >
                    <span>{sc.tabLabel}</span>
                  </button>
                ))}
              </div>

              {/* Polite live region for accessibility */}
              <div className="sr-only" aria-live="polite">
                Active scenario: {scenarios[activeScenario].title}
              </div>

              {/* Visible Scenario Details */}
              {scenarios.map((sc, index) => {
                const isSelected = activeScenario === index;
                return (
                  <div
                    key={sc.id}
                    id={`scenario-panel-${index}`}
                    role="region"
                    aria-labelledby={`scenario-tab-${index}`}
                    className="uk-demo-panel"
                    style={{ display: isSelected ? "flex" : "none" }}
                  >
                    <div className="uk-demo-block input-block">
                      <div className="uk-demo-block-label">Input</div>
                      <p className="uk-demo-block-text">{sc.input}</p>
                    </div>

                    <div className="uk-demo-block review-block">
                      <div className="uk-demo-block-label">Review</div>
                      <p className="uk-demo-block-text">{sc.review}</p>
                    </div>

                    <div className="uk-demo-block next-block">
                      <div className="uk-demo-block-label">Next question</div>
                      <p className="uk-demo-block-text">{sc.nextQuestion}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* S07: Treat a scholarship as an award, not a promise */}
      <section id="scholarships" className="dest-section dest-section-light">
        <div className="container">
          <div className="uk-reading-column">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>SCHOLARSHIPS &amp; AWARDS</span>
              </div>
              <h2 className="dest-section-title">Treat a scholarship as an award, not a promise</h2>
            </div>

            <p className="uk-prose-p">
              University discounts and external scholarships have their own eligibility rules. Coverage, payment timing and conditions can differ even when both are called funding.
            </p>

            {/* Award-letter SVG showing Award terms / Coverage / Conditions */}
            <div className="uk-award-plate">
              <svg 
                viewBox="0 0 600 140" 
                xmlns="http://www.w3.org/2000/svg" 
                role="img" 
                aria-label="Award evaluation terms plate"
                style={{ width: "100%", maxHeight: "140px" }}
              >
                <rect width="600" height="140" rx="14" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2"/>
                <rect x="20" y="20" width="160" height="100" rx="10" fill="#FAF6ED" stroke="#D97706" strokeWidth="1.5"/>
                <text x="100" y="75" fontFamily="sans-serif" fontSize="16" fontWeight="700" fill="#011E3E" textAnchor="middle">Award terms</text>
                
                <rect x="220" y="20" width="160" height="100" rx="10" fill="#FAF6ED" stroke="#D97706" strokeWidth="1.5"/>
                <text x="300" y="75" fontFamily="sans-serif" fontSize="16" fontWeight="700" fill="#011E3E" textAnchor="middle">Coverage</text>
                
                <rect x="420" y="20" width="160" height="100" rx="10" fill="#FAF6ED" stroke="#D97706" strokeWidth="1.5"/>
                <text x="500" y="75" fontFamily="sans-serif" fontSize="16" fontWeight="700" fill="#011E3E" textAnchor="middle">Conditions</text>
              </svg>
            </div>

            <p className="uk-prose-p">
              Check the exact award for your nationality, course and intake. A submitted application is not an award, and an award may not cover every cost.
            </p>

            <p className="uk-prose-p">
              If support is essential, ask whether you can defer or choose another route if it does not arrive. Do not pay on the strength of an expected scholarship alone.
            </p>
          </div>
        </div>
      </section>

      {/* S08: Work and family plans need their own checks */}
      <section id="work" className="dest-section dest-section-white">
        <div className="container">
          <div className="uk-reading-column">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>POST-STUDY &amp; DEPENDANTS</span>
              </div>
              <h2 className="dest-section-title">Work and family plans need their own checks</h2>
            </div>

            <div className="uk-work-layout">
              <div className="uk-work-card">
                <p>
                  Student work permission depends on the course and your visa conditions. Permission to work is not a job offer or a reliable way to fund tuition.
                </p>
              </div>

              <div className="uk-work-card">
                <p>
                  Graduate visa eligibility depends on completing an eligible route and meeting the application rules. Duration also depends on the application date and qualification. Do not build a new study plan around a blanket two-year promise.
                </p>
              </div>

              <div className="uk-work-card">
                <p>
                  Partners and children do not automatically qualify because you receive an offer. The Student dependant rules restrict which study situations can qualify. Check the course and family circumstances before making joint plans.
                </p>
              </div>

              <div className="uk-work-card">
                <p>
                  A useful degree should still have value if you return home. Consider how the learning connects to work or further study without assuming migration or employment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S09: A stronger basis for the UK decision */}
      <section id="comparison" className="dest-section dest-section-light">
        <div className="container">
          <div className="uk-reading-column">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>DECISION COMPARISON</span>
              </div>
              <h2 className="dest-section-title">A stronger basis for the UK decision</h2>
              <p className="dest-section-subline">
                Illustrative decision comparison, not a client result.
              </p>
            </div>

            <div className="uk-comparison-wrap">
              <table className="uk-comparison-table">
                <thead>
                  <tr>
                    <th scope="col">A fragile assumption</th>
                    <th scope="col">A clearer planning question</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>My offer means the visa will follow</td>
                    <td>Which admission conditions and visa requirements remain?</td>
                  </tr>
                  <tr>
                    <td>The living-funds minimum is my full budget</td>
                    <td>What will this location and household actually cost?</td>
                  </tr>
                  <tr>
                    <td>My partner can join any master's course</td>
                    <td>Does this specific study route permit dependants?</td>
                  </tr>
                  <tr>
                    <td>I will definitely stay for two years afterwards</td>
                    <td>Which Graduate rules could apply when I complete and apply?</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: "32px", textAlign: "center" }}>
              <Link 
                to="/assessment?destination=uk" 
                className="dest-btn-primary"
                style={{ display: "inline-flex" }}
              >
                <span>Discuss my UK plan</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S10: Make the UK choice with the whole plan in view */}
      <section id="support" className="uk-support-strip">
        <div className="container">
          <div className="uk-reading-column" style={{ textAlign: "center" }}>
            <div className="dest-eyebrow-pill" style={{ background: "rgba(255, 160, 0, 0.15)", color: "#FFA000", border: "1px solid rgba(255, 160, 0, 0.35)" }}>
              <span className="dest-eyebrow-dot" />
              <span>STUDY PRIME GUIDANCE</span>
            </div>
            
            <h2 className="dest-section-title" style={{ color: "#FFFFFF", marginBottom: "18px" }}>
              Make the UK choice with the whole plan in view
            </h2>

            <p style={{ fontSize: "1.08rem", color: "rgba(255, 255, 255, 0.9)", lineHeight: 1.7, marginBottom: "16px" }}>
              Study Prime can discuss your course options, application needs and visa preparation. Bring your academic background and the questions your family needs answered.
            </p>

            <p style={{ fontSize: "1.02rem", color: "rgba(255, 255, 255, 0.8)", lineHeight: 1.7, marginBottom: "24px" }}>
              Start with the free assessment. Then agree any further support and charges before paid work begins. University fees, government charges and other external costs remain separate.
            </p>

            <div className="uk-support-links-row">
              <Link to="/services/university-matching" className="uk-support-link-item">
                University and course matching
              </Link>
              <span className="uk-support-dot">&middot;</span>
              <Link to="/services/admission-support" className="uk-support-link-item">
                Application support
              </Link>
              <span className="uk-support-dot">&middot;</span>
              <Link to="/services/student-visa" className="uk-support-link-item">
                Student visa assistance
              </Link>
            </div>

            <p className="uk-support-guarantee-note">
              No consultant can guarantee a scholarship, admission or visa.
            </p>

            <div style={{ marginTop: "32px" }}>
              <Link to="/assessment?destination=uk" className="dest-btn-primary" style={{ display: "inline-flex" }}>
                <span>Get my free UK assessment</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S11: Questions about studying in the UK */}
      <section id="faq" className="dest-section dest-section-white">
        <div className="container">
          <div className="uk-reading-column">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 className="dest-section-title">Questions about studying in the UK</h2>
            </div>

            <div className="dest-faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="dest-faq-card">
                  <details>
                    <summary>
                      <span>{faq.q}</span>
                      <span className="dest-faq-toggle-icon">
                        <ChevronDown size={18} />
                      </span>
                    </summary>
                    <div className="dest-faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* S12: Check the commitment before you make it */}
      <section id="close" className="dest-closing-cta-section">
        <div className="container">
          <div className="dest-closing-card">
            <h2>Check the commitment before you make it</h2>
            
            <p>
              If the UK is on your shortlist, make the next discussion about your actual course and funding plan. The aim is a decision you can explain without relying on promises.
            </p>

            <div className="dest-closing-actions">
              <Link to="/assessment?destination=uk" className="dest-btn-primary">
                <span>Get my free UK assessment</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            <p style={{ fontSize: "1rem", color: "rgba(255, 255, 255, 0.8)", marginBottom: "24px" }}>
              <Link to="/destinations" style={{ color: "#FFA000", textDecoration: "underline", fontWeight: 600 }}>
                Compare other study destinations
              </Link>
              {" "}or{" "}
              <Link to="/contact" style={{ color: "#FFA000", textDecoration: "underline", fontWeight: 600 }}>
                contact Study Prime
              </Link>.
            </p>

            <div className="dest-contact-row" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
              <span>
                Call <a href="tel:+923101193888">+92 310 1193888</a>
              </span>
              <span>&middot;</span>
              <span>
                Email <a href="mailto:info@studyprime.pk">info@studyprime.pk</a>
              </span>
            </div>

            <div style={{ marginTop: "18px", fontSize: "0.92rem", color: "rgba(255, 255, 255, 0.65)" }}>
              Office #F-15, First Floor, Galleria Mall, I-8 Markaz, Islamabad, Pakistan.
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Safe-Area Floating Sticky Bar */}
      <div className="dest-mobile-sticky-bar" role="region" aria-label="Mobile quick action">
        <div>
          <div className="bar-title">UK &middot; Destination Guide</div>
          <span className="bar-subtitle">Admissions, Fees &amp; Visa</span>
        </div>
        <Link to="/assessment?destination=uk" className="bar-btn">
          <span>Get my free UK assessment</span>
        </Link>
      </div>
    </div>
  );
}
