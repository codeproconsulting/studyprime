import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
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
  Globe2, 
  AlertCircle,
  FileText
} from "lucide-react";
import { CANONICAL_BASE_URL } from "~/utils/seo";

export const meta: MetaFunction = () => {
  const canonicalUrl = `${CANONICAL_BASE_URL}/destinations/study-in-hungary`;
  const pageTitle = "Study in Hungary | Degrees, Stipendium Scholarships & Visas | Study Prime";
  const pageDescription =
    "Compare Hungary courses, tuition, living costs, scholarships and residence rules. Get a free Study Prime assessment before you commit.";

  return [
    { title: pageTitle },
    { name: "description", content: pageDescription },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://images.unsplash.com/photo-1549877452-9c387954fbc2?q=80&w=1600&auto=format&fit=crop" },
    { property: "og:image:alt", content: "Budapest architecture and Danube river in Hungary" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: pageDescription },
    { name: "twitter:image", content: "https://images.unsplash.com/photo-1549877452-9c387954fbc2?q=80&w=1600&auto=format&fit=crop" },
    { tagName: "link", rel: "canonical", href: canonicalUrl },
  ];
};

export default function DestinationsStudyInHungaryRoute() {
  const canonicalUrl = `${CANONICAL_BASE_URL}/destinations/study-in-hungary`;

  const faqs = [
    {
      q: "Can I study in Hungary without IELTS?",
      a: "Each programme decides which language evidence it accepts. Check the written requirement rather than relying on a general waiver claim.",
    },
    {
      q: "Is Stipendium Hungaricum fully funded?",
      a: "It provides defined benefits, but does not cover every living cost. Plan your own contribution and read the current award terms.",
    },
    {
      q: "Does an offer guarantee a visa?",
      a: "No. Admission and immigration approval are separate decisions. Paying tuition does not remove the residence requirements.",
    },
    {
      q: "Can part-time work pay my tuition?",
      a: "Do not build your plan around that assumption. Work rights are limited, and finding suitable employment is not guaranteed.",
    },
    {
      q: "Can I stay after graduation?",
      a: "An eligible graduate may apply for the separate job-seeking or business route. It is not automatic and lasts no more than nine months.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: "Hungary Study Assessment and Guidance",
        url: canonicalUrl,
        serviceType: "Study abroad education guidance",
        provider: {
          "@type": "Organization",
          name: "Study Prime",
          url: CANONICAL_BASE_URL,
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
            name: "Study destinations",
            item: `${CANONICAL_BASE_URL}/destinations`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Study in Hungary",
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

      {/* Top Breadcrumb Trail */}
      <nav className="dest-landing-breadcrumb" aria-label="Breadcrumb">
        <div className="container">
          <div className="breadcrumb-inner">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/destinations">Study destinations</Link>
            <span>/</span>
            <span className="current">Study in Hungary</span>
          </div>
        </div>
      </nav>

      {/* S01: Hero Section */}
      <section className="dest-hero-premium">
        <div
          className="dest-hero-bg-overlay"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1549877452-9c387954fbc2?q=80&w=1600&auto=format&fit=crop')` }}
        />
        <div className="dest-hero-vignette" />

        <div className="container">
          <div className="dest-hero-grid">
            <div>
              <div className="dest-hero-eyebrow">
                <Sparkles size={14} />
                <span>OFFICIAL STUDY DESTINATION GUIDE &middot; HUNGARY</span>
              </div>

              <h1 className="dest-hero-title">
                Study in <span>Hungary</span>
              </h1>

              <p className="dest-hero-lead">
                A university offer can look affordable until the other costs arrive. Rent, travel and an uncertain scholarship can change your family's plan.
              </p>

              <p className="dest-hero-body-text">
                Start with the course, the funding gap and your next step. Study Prime's free assessment helps you discuss whether Hungary fits your goals.
              </p>

              {/* Trust Chips */}
              <div className="dest-hero-chips">
                <span className="dest-hero-chip">
                  <CheckCircle2 size={14} color="#FFA000" />
                  Stipendium Hungaricum Roadmap
                </span>
                <span className="dest-hero-chip">
                  <CheckCircle2 size={14} color="#FFA000" />
                  Official 30-Hr Work Rules
                </span>
                <span className="dest-hero-chip">
                  <CheckCircle2 size={14} color="#FFA000" />
                  EUR Tuition &amp; HUF Living
                </span>
                <span className="dest-hero-chip">
                  <CheckCircle2 size={14} color="#FFA000" />
                  9-Month Job-Seeking Route
                </span>
              </div>

              {/* Action Buttons */}
              <div className="dest-hero-actions">
                <Link to="/assessment?destination=hungary" className="dest-btn-primary">
                  <span>Get free Hungary assessment</span>
                  <ArrowRight size={18} />
                </Link>
                <a href="#costs" className="dest-btn-secondary">
                  Understand the costs
                </a>
              </div>

              <p className="dest-hero-trust-note">
                Compare course fit, funding and residence conditions before you apply.
              </p>
            </div>

            {/* Showcase Floating Card */}
            <div>
              <div className="dest-hero-card">
                <div className="dest-hero-photo-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1549877452-9c387954fbc2?q=80&w=1600&auto=format&fit=crop"
                    alt="Budapest cityscape and architecture in Hungary"
                    loading="eager"
                  />
                  <div className="dest-hero-card-badge">
                    <GraduationCap size={13} />
                    <span>EU Central Hub</span>
                  </div>
                </div>

                <div className="dest-hero-card-body">
                  <div className="dest-hero-card-title">
                    <img
                      src="/images/flags/hungary.svg"
                      alt="Hungary Flag"
                      className="dest-hero-card-flag"
                      onError={(e) => ((e.target as HTMLElement).style.display = "none")}
                    />
                    <span>Key Hungary Study Facts</span>
                  </div>

                  <div className="dest-hero-card-list">
                    <div className="dest-hero-card-item">
                      <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span><strong>Intakes:</strong> September (Main) &amp; February</span>
                    </div>
                    <div className="dest-hero-card-item">
                      <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span><strong>Work Limits:</strong> Up to 30 hrs/wk during studies, 90 days full-time breaks</span>
                    </div>
                    <div className="dest-hero-card-item">
                      <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span><strong>Post-Study:</strong> 9-month job-search or entrepreneurship permit</span>
                    </div>
                  </div>

                  <Link to="/assessment?destination=hungary" className="dest-hero-card-btn">
                    <span>Book Free Consultation</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky In-Page Navigation Bar */}
      <nav className="dest-sticky-nav-bar" aria-label="Jump to Hungary topics">
        <div className="container">
          <div className="dest-sticky-nav-list">
            <a href="#suitability" className="dest-sticky-nav-link">Suitability</a>
            <a href="#courses" className="dest-sticky-nav-link">Courses</a>
            <a href="#costs" className="dest-sticky-nav-link">Tuition &amp; Living</a>
            <a href="#cities" className="dest-sticky-nav-link">City &amp; Language</a>
            <a href="#admissions" className="dest-sticky-nav-link">Admissions</a>
            <a href="#scholarships" className="dest-sticky-nav-link">Stipendium Hungaricum</a>
            <a href="#residence" className="dest-sticky-nav-link">Residence &amp; Funding</a>
            <a href="#work" className="dest-sticky-nav-link">Student Work</a>
            <a href="#after-study" className="dest-sticky-nav-link">Post-Study (9 Months)</a>
            <a href="#family" className="dest-sticky-nav-link">Family Rules</a>
            <a href="#faqs" className="dest-sticky-nav-link">FAQs</a>
          </div>
        </div>
      </nav>

      {/* S02: Suitability */}
      <section id="suitability" className="dest-section dest-section-white">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>DECISION FRAMEWORK</span>
              </div>
              <h2 className="dest-section-title">Is Hungary a sensible choice for you?</h2>
              <p className="dest-section-subline">
                Hungary deserves a closer look when a specific course fits your plans. Choosing only because it sits in Europe leaves too much unanswered.
              </p>
            </div>

            <div className="dest-comparison-grid">
              <div className="dest-card-panel explore-card">
                <div className="dest-card-header-row">
                  <div className="dest-card-icon-wrap green-bg">
                    <CheckCircle2 size={22} />
                  </div>
                  <h3 className="dest-card-title">Clear Academic Value</h3>
                </div>
                <p>
                  You may value an English-taught degree or a focused research programme. You still need to compare teaching, assessment and the full cost.
                </p>
                <p>
                  Think about the work you want after graduation, including in Pakistan. The right degree should remain useful if you return home immediately.
                </p>
              </div>

              <div className="dest-card-panel pause-card">
                <div className="dest-card-header-row">
                  <div className="dest-card-icon-wrap amber-bg">
                    <AlertCircle size={22} />
                  </div>
                  <h3 className="dest-card-title">When to Pause</h3>
                </div>
                <p>
                  Pause if your plan depends on winning a scholarship. Pause again if you need part-time wages to pay essential bills.
                </p>
                <p>
                  An assessment should help you test those weak points early. Deciding against a course can be better than paying for the wrong one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S03: Course value */}
      <section id="courses" className="dest-section dest-section-light">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>COURSE SELECTION</span>
              </div>
              <h2 className="dest-section-title">Choose the course before choosing the city</h2>
              <p className="dest-section-subline">
                Compare the actual modules, not just the name on the degree. Two computing courses may offer very different projects and practical work.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div className="dest-cost-card featured-cost">
                <div className="dest-cost-body">
                  <h3>Subject-Specific Rigour</h3>
                  <p>
                    For engineering, ask about lab access and the final project. For business, check the balance between theory and practical assignments.
                  </p>
                </div>
              </div>

              <div className="dest-cost-card featured-cost">
                <div className="dest-cost-body">
                  <h3>Research &amp; Facilities</h3>
                  <p>
                    For research study, look closely at supervision and available facilities. A broad subject match does not prove a supervisor fits your topic.
                  </p>
                </div>
              </div>

              <div className="dest-cost-card featured-cost">
                <div className="dest-cost-body">
                  <h3>Internship &amp; Placement Realities</h3>
                  <p>
                    Ask whether placements are compulsory, optional or arranged by students. Do not treat an internship mention as a promised job.
                  </p>
                  <p style={{ margin: 0, fontWeight: 600, color: "#011E3E" }}>
                    Compare the course with options you could take closer to home. Explain what the extra cost buys in skills or subject depth. That comparison gives your family a clearer reason for the investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S04: Costs */}
      <section id="costs" className="dest-section dest-section-white">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>CURRENCY &amp; LIVING LANES</span>
              </div>
              <h2 className="dest-section-title">Keep tuition and living costs separate</h2>
              <p className="dest-section-subline">
                Read tuition in the currency shown by your chosen university. Where fees are quoted in EUR, keep that tuition figure in EUR. Plan local living costs separately in Hungarian forint, written as HUF. Avoid comparing annual tuition with a monthly rent figure.
              </p>
            </div>

            <div className="dest-comparison-grid">
              <div className="dest-card-panel">
                <div className="dest-card-header-row">
                  <div className="dest-card-icon-wrap navy-bg">
                    <DollarSign size={22} />
                  </div>
                  <h3 className="dest-card-title">Tuition Fees (EUR)</h3>
                </div>
                <p>
                  Your university should confirm the current fee for your exact programme. Ask whether that amount covers one semester or a full year.
                </p>
                <p>
                  Keep tuition separate from living funds so an exchange shift doesn't jeopardize enrollment.
                </p>
              </div>

              <div className="dest-card-panel">
                <div className="dest-card-header-row">
                  <div className="dest-card-icon-wrap amber-bg">
                    <Building2 size={22} />
                  </div>
                  <h3 className="dest-card-title">Daily Living (HUF)</h3>
                </div>
                <p>
                  For living costs, consider rent, utilities, food and local transport. Add health cover, travel and the cost of settling into accommodation.
                </p>
                <p>
                  Your actual rent depends on housing availability and the lease you sign. Keep a separate reserve for delays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S05: City and language */}
      <section id="cities" className="dest-section dest-section-light">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>LOCATION &amp; LANGUAGE</span>
              </div>
              <h2 className="dest-section-title">Your city changes the daily budget</h2>
              <p className="dest-section-subline">
                Compare Budapest with university hubs such as Pécs, Szeged, and Debrecen. Start with the campus location and realistic housing near it.
              </p>
            </div>

            <div className="dest-comparison-grid">
              <div className="dest-card-panel">
                <h3 className="dest-card-title" style={{ marginBottom: "12px" }}>Accommodation Options</h3>
                <p>
                  A cheaper room can bring a longer journey to classes. Check what rent includes before comparing it with another offer.
                </p>
                <p>
                  A dormitory place can change the budget, but availability matters. Ask the university when places are allocated and what alternatives cost.
                </p>
              </div>

              <div className="dest-card-panel">
                <h3 className="dest-card-title" style={{ marginBottom: "12px" }}>Hungarian for Daily Life</h3>
                <p>
                  English teaching does not mean every daily task happens in English. Learning some Hungarian can help with everyday life and local opportunities.
                </p>
                <p>
                  Check the language used in practical training as well as lectures. This matters when a course involves contact with the public.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S06: Admission */}
      <section id="admissions" className="dest-section dest-section-white">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>ADMISSION REALITY</span>
              </div>
              <h2 className="dest-section-title">Admission and residence are separate decisions</h2>
              <p className="dest-section-subline">
                Start by checking entry rules for your exact course and intake. Previous subjects, grades and language evidence can affect your options.
              </p>
            </div>

            <div className="dest-steps-timeline">
              <div className="dest-step-card">
                <div className="dest-step-circle">1</div>
                <div className="dest-step-body">
                  <h3>Entry Assessment &amp; Interviews</h3>
                  <p>Some programmes may require an interview or an entrance assessment. Get the university's current requirements before paying an application fee.</p>
                </div>
              </div>

              <div className="dest-step-card">
                <div className="dest-step-circle">2</div>
                <div className="dest-step-body">
                  <h3>Written Language Evidence</h3>
                  <p>Do not assume every university accepts the same English evidence. A previous English-medium qualification does not create a universal exemption.</p>
                </div>
              </div>

              <div className="dest-step-card">
                <div className="dest-step-circle">3</div>
                <div className="dest-step-body">
                  <h3>Offer Conditions &amp; Refunds</h3>
                  <p>Read any offer conditions carefully before accepting your place. Confirm payment dates and the university's written refund terms.</p>
                </div>
              </div>

              <div className="dest-step-card">
                <div className="dest-step-circle">4</div>
                <div className="dest-step-body">
                  <h3>Residence Approval Distinction</h3>
                  <p>An admission offer does not guarantee permission to live in Hungary. Immigration authorities make a separate decision under the relevant residence rules.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S07: Scholarship process */}
      <section id="scholarships" className="dest-section dest-section-light">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>SCHOLARSHIP PROCESS</span>
              </div>
              <h2 className="dest-section-title">Stipendium Hungaricum needs a separate plan</h2>
              <p className="dest-section-subline">
                Stipendium Hungaricum is a Hungarian government scholarship managed by Tempus Public Foundation. Pakistan's listed sending partner is the Higher Education Commission, or HEC.
              </p>
            </div>

            <div className="dest-card-panel explore-card" style={{ marginBottom: "24px" }}>
              <p>
                The official partner information requires applications through both sides. It also identifies a written test for HEC's nomination process.
              </p>
              <p>
                Check the current HEC announcement before choosing courses or booking tests. Eligible fields, requirements and dates belong to the relevant application cycle.
              </p>
              <p>
                HEC nomination is not the final Hungarian scholarship award. University assessment and the Hungarian selection process still matter.
              </p>
              <p style={{ margin: 0, fontWeight: 700, color: "#011E3E" }}>
                Do not confuse submitting an application with securing funded study. Only commit to self-funded study if your family can support it. A scholarship application alone should not justify an unaffordable deposit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S08: Scholarship shortfall */}
      <section className="dest-section dest-section-navy">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill" style={{ color: "#FFA000" }}>
                <span className="dest-eyebrow-dot" />
                <span>FUNDING GAP</span>
              </div>
              <h2 className="dest-section-title">A scholarship can still leave a funding gap</h2>
              <p className="dest-section-subline" style={{ color: "rgba(255,255,255,0.85)" }}>
                Stipendium Hungaricum includes tuition support and contributions towards living expenses. Its benefits include a stipend, accommodation support and specified health cover.
              </p>
            </div>

            <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "14px", padding: "26px", marginBottom: "28px" }}>
              <p style={{ color: "#FFFFFF", fontSize: "1.02rem", lineHeight: 1.65, margin: "0 0 12px 0" }}>
                The accommodation benefit can be a dormitory place or a contribution. A contribution does not promise a private room at no extra cost. The programme explicitly says its support does not cover every living expense.
              </p>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.98rem", lineHeight: 1.6, margin: 0 }}>
                Read the terms for your study level and award cycle. Doctoral support and other study levels do not share identical arrangements. Count funding only when its terms and availability are confirmed.
              </p>
            </div>

            <Link to="/assessment?destination=hungary" className="dest-btn-primary">
              <span>Discuss your Hungary funding plan</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* S09: Residence and funding */}
      <section id="residence" className="dest-section dest-section-white">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>RESIDENCE RULES</span>
              </div>
              <h2 className="dest-section-title">Show how you will support your stay</h2>
              <p className="dest-section-subline">
                Hungary's study residence rules require more than a university place. They cover your study purpose, support, accommodation and health protection.
              </p>
            </div>

            <div className="dest-comparison-grid">
              <div className="dest-card-panel">
                <h3 className="dest-card-title" style={{ marginBottom: "12px" }}>Financial Documentation</h3>
                <p>
                  Authorities also consider the means to leave Hungary when required. Tuition and a monthly living budget answer different parts of your plan.
                </p>
                <p>
                  Personal savings, family support and scholarships can involve different evidence. Family support must show the supporter can actually provide that money.
                </p>
              </div>

              <div className="dest-card-panel">
                <h3 className="dest-card-title" style={{ marginBottom: "12px" }}>Application Process Abroad</h3>
                <p>
                  For applicants who need entry permission, the residence application normally starts abroad. Confirm the competent Hungarian mission and its current process.
                </p>
                <p>
                  Follow current official instructions for your own case before making payments. There is no consultant-made amount that guarantees approval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S10: Student work */}
      <section id="work" className="dest-section dest-section-light">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>STUDENT WORK RULES</span>
              </div>
              <h2 className="dest-section-title">Student work should support your studies</h2>
              <p className="dest-section-subline">
                Hungary's immigration guidance allows eligible study permit holders to work under specific statutory thresholds.
              </p>
            </div>

            <div className="dest-comparison-grid">
              <div className="dest-card-panel explore-card">
                <div className="dest-card-header-row">
                  <div className="dest-card-icon-wrap green-bg">
                    <CheckCircle2 size={22} />
                  </div>
                  <h3 className="dest-card-title">Know the limits</h3>
                </div>
                <p>
                  During the study period, the limit is <strong>30 hours weekly</strong>.
                </p>
                <p>
                  Outside the study period, full-time work has a separate limit: a maximum of <strong>90 days in a year</strong>.
                </p>
                <p>
                  These rules do not mean a suitable job will be available. Check your status and current conditions before agreeing to employment.
                </p>
              </div>

              <div className="dest-card-panel pause-card">
                <div className="dest-card-header-row">
                  <div className="dest-card-icon-wrap amber-bg">
                    <AlertCircle size={22} />
                  </div>
                  <h3 className="dest-card-title">Keep wages out of essential funding</h3>
                </div>
                <p>
                  Class schedules, language needs and local demand can limit your choices. A job search may take longer than your budget allows.
                </p>
                <p>
                  Plan to cover essentials without wages you have not earned. Work should not become the reason you miss classes or fall behind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S11: After graduation */}
      <section id="after-study" className="dest-section dest-section-white">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>POST-STUDY RESIDENCE</span>
              </div>
              <h2 className="dest-section-title">The nine-month route is not automatic</h2>
              <p className="dest-section-subline">
                Eligible graduates may apply to seek a job or start a business. The permit can last up to nine months and cannot be extended.
              </p>
            </div>

            <div className="dest-card-panel">
              <p>
                You must successfully complete your studies and hold a valid study permit. The planned work or business must match your completed study level.
              </p>
              <p>
                Apply from within Hungary at least 15 days before your permit expires. You must also meet the route's other residence and support conditions.
              </p>
              <p>
                Graduation does not automatically grant this permit or secure employment. Further stay needs a suitable residence route and a separate approval.
              </p>
              <p style={{ margin: 0, fontWeight: 700, color: "#011E3E" }}>
                Plan a return-home option alongside any local job search.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S12: Family */}
      <section id="family" className="dest-section dest-section-light">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>FAMILY RULES</span>
              </div>
              <h2 className="dest-section-title">Do not assume your family can join you</h2>
              <p className="dest-section-subline">
                Hungary's study route has a major restriction on family reunification. The official rules do not provide the usual family reunification option here.
              </p>
            </div>

            <div className="dest-card-panel pause-card">
              <p>
                This affects planning for a spouse or children joining a student. A narrow exception concerns a child born in Hungary during valid study residence. That exception is not a general route for bringing family members.
              </p>
              <p>
                A relative's visit would involve a different purpose and separate rules. It should not be treated as permission to live or work there.
              </p>
              <p style={{ margin: 0, fontWeight: 600, color: "#011E3E" }}>
                If living together abroad is essential, raise that before choosing Hungary. Your family's needs may change which destination makes sense.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S13: Return and recognition */}
      <section className="dest-section dest-section-white">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>CAREER ALIGNMENT</span>
              </div>
              <h2 className="dest-section-title">Make the degree useful when you return</h2>
              <p className="dest-section-subline">
                Imagine returning to Pakistan as soon as your course finishes. Would the skills, qualification and total cost still make sense?
              </p>
            </div>

            <div className="dest-card-panel explore-card">
              <p>
                Check recognition requirements for your intended next step before enrolling. Academic recognition and permission to practise a regulated profession are different questions.
              </p>
              <p>
                Do not assume a foreign degree automatically meets a professional regulator's rules. Seek confirmation from the relevant Pakistani authority for your exact qualification.
              </p>
              <p style={{ margin: 0, fontWeight: 600, color: "#011E3E" }}>
                A clear return plan gives you choices if overseas work does not follow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S14: FAQs */}
      <section id="faqs" className="dest-section dest-section-light">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header" style={{ textAlign: "center" }}>
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>FREQUENT QUESTIONS</span>
              </div>
              <h2 className="dest-section-title">Questions before you commit</h2>
              <p className="dest-section-subline">
                Straightforward answers to the most common questions regarding Hungary.
              </p>
            </div>

            <div className="dest-faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="dest-faq-card">
                  <details>
                    <summary>
                      <span>{faq.q}</span>
                      <span className="dest-faq-toggle-icon">↓</span>
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

      {/* S15: Assessment and close */}
      <section id="contact" className="dest-closing-cta-section">
        <div className="container">
          <div className="dest-closing-card">
            <h2>Get a free Hungary assessment</h2>
            <p>
              Bring your course interests, academic background and a realistic budget. Tell us whether you need a scholarship to make studying possible.
            </p>
            <p>
              Use the assessment to discuss course fit and the main funding questions. Raise family plans and your return-home goals at the same time.
            </p>
            <p style={{ fontStyle: "italic", opacity: 0.85, fontSize: "0.95rem" }}>
              Study Prime cannot guarantee admission, a scholarship or a visa. Universities, scholarship bodies and immigration authorities make those decisions.
            </p>

            <div className="dest-closing-actions">
              <Link to="/assessment?destination=hungary" className="dest-btn-primary">
                <span>Get free Hungary assessment</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="dest-contact-row">
              <a href="tel:+923101193888">
                <PhoneCall size={16} /> Prefer to speak first? Call +92 310 1193888
              </a>
              <a href="mailto:info@studyprime.pk">
                <Mail size={16} /> Email: info@studyprime.pk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Bar */}
      <div className="dest-mobile-sticky-bar">
        <div>
          <span className="bar-title">Study in Hungary</span>
          <span className="bar-subtitle">Free Assessment</span>
        </div>
        <Link to="/assessment?destination=hungary" className="bar-btn">
          Get Assessment
        </Link>
      </div>
    </div>
  );
}
