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
  const canonicalUrl = `${CANONICAL_BASE_URL}/destinations/study-in-france`;
  const pageTitle = "Study in France | Grande École Admissions & Visas | Study Prime";
  const pageDescription =
    "Compare courses, public and private fees, language needs and application steps for France. Book a free Study Prime assessment to discuss your plans.";

  return [
    { title: pageTitle },
    { name: "description", content: pageDescription },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: "website" },
    { property: "og:image", content: `${CANONICAL_BASE_URL}/images/destinations/france.jpg` },
    { property: "og:image:alt", content: "Eiffel Tower and Paris cityscape in France" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: pageDescription },
    { name: "twitter:image", content: `${CANONICAL_BASE_URL}/images/destinations/france.jpg` },
    { tagName: "link", rel: "canonical", href: canonicalUrl },
  ];
};

export default function DestinationsStudyInFranceRoute() {
  const canonicalUrl = `${CANONICAL_BASE_URL}/destinations/study-in-france`;

  const faqs = [
    {
      q: "Can I study in France entirely in English?",
      a: "Some programmes use English, but check every required part of your course. French may still matter for everyday life, work and internships.",
    },
    {
      q: "Is public university free for Pakistani students?",
      a: "Do not assume that it is. Applicable fees and any exemption depend on your situation and institution. Get the exact course charges confirmed before accepting.",
    },
    {
      q: "Does direct admission replace the Campus France process?",
      a: "Not automatically. Campus France Pakistan publishes a pre-consular route for students with direct admission. Check the current route for your institution and intake.",
    },
    {
      q: "Can a student job cover all my costs?",
      a: "Do not rely on that plan. Work has conditions, and finding a suitable job can take time. Arrange funding without assuming immediate earnings.",
    },
    {
      q: "Will I receive CAF housing support?",
      a: "You need an individual eligibility check under the current rules. Do not budget around a fixed payment or rent discount.",
    },
    {
      q: "Can my family join me while I study?",
      a: "Do not assume your student status gives relatives the same rights. Check each person's visa route, costs and work rights before planning travel.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: "Study in France Guidance & Profile Assessment",
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
            name: "Study in France",
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
            <span className="current">Study in France</span>
          </div>
        </div>
      </nav>

      {/* S01: Hero Section */}
      <section className="dest-hero-premium">
        <div
          className="dest-hero-bg-overlay"
          style={{ backgroundImage: `url('/images/destinations/france.jpg')` }}
        />
        <div className="dest-hero-vignette" />

        <div className="container">
          <div className="dest-hero-grid">
            <div>
              <div className="dest-hero-eyebrow">
                <Sparkles size={14} />
                <span>OFFICIAL STUDY DESTINATION GUIDE &middot; FRANCE</span>
              </div>

              <h1 className="dest-hero-title">
                Study in <span>France</span>
              </h1>

              <p className="dest-hero-lead">
                A course can look affordable until rent and extra fees appear. An English course can still leave you needing French outside class. These details deserve attention before you pay a deposit.
              </p>

              <p className="dest-hero-body-text">
                Study Prime helps you compare France against your grades and family budget. Start with the course, its full cost and your next step. Then decide whether the plan makes sense for you.
              </p>

              {/* Trust Chips */}
              <div className="dest-hero-chips">
                <span className="dest-hero-chip">
                  <CheckCircle2 size={14} color="#FFA000" />
                  No False Guarantees
                </span>
                <span className="dest-hero-chip">
                  <CheckCircle2 size={14} color="#FFA000" />
                  Campus France Local Route
                </span>
                <span className="dest-hero-chip">
                  <CheckCircle2 size={14} color="#FFA000" />
                  Public &amp; Grande École Fees
                </span>
                <span className="dest-hero-chip">
                  <CheckCircle2 size={14} color="#FFA000" />
                  Free 1-on-1 Profile Review
                </span>
              </div>

              {/* Action Buttons */}
              <div className="dest-hero-actions">
                <Link to="/assessment?destination=france" className="dest-btn-primary">
                  <span>Get free France assessment</span>
                  <ArrowRight size={18} />
                </Link>
                <a href="#costs" className="dest-btn-secondary">
                  Explore fees &amp; living costs
                </a>
              </div>

              <p className="dest-hero-trust-note">
                You can discuss course choices, language needs and application routes. Admission, scholarships and visas remain separate decisions by the relevant bodies.
              </p>
            </div>

            {/* Showcase Floating Card */}
            <div>
              <div className="dest-hero-card">
                <div className="dest-hero-photo-wrap">
                  <img
                    src="/images/destinations/france.jpg"
                    alt="Eiffel Tower, Paris cityscape in France"
                    loading="eager"
                  />
                  <div className="dest-hero-card-badge">
                    <GraduationCap size={13} />
                    <span>30+ Top Institutions</span>
                  </div>
                </div>

                <div className="dest-hero-card-body">
                  <div className="dest-hero-card-title">
                    <img
                      src="/images/flags/france.svg"
                      alt="France Flag"
                      className="dest-hero-card-flag"
                      onError={(e) => ((e.target as HTMLElement).style.display = "none")}
                    />
                    <span>Key France Study Facts</span>
                  </div>

                  <div className="dest-hero-card-list">
                    <div className="dest-hero-card-item">
                      <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span><strong>Intakes:</strong> September/October &amp; January/February</span>
                    </div>
                    <div className="dest-hero-card-item">
                      <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span><strong>Degrees:</strong> Public Universities &amp; Triple-Crown Grandes Écoles</span>
                    </div>
                    <div className="dest-hero-card-item">
                      <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span><strong>Post-Study:</strong> APS/RECE routes subject to individual qualification checks</span>
                    </div>
                  </div>

                  <Link to="/assessment?destination=france" className="dest-hero-card-btn">
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
      <nav className="dest-sticky-nav-bar" aria-label="Jump to France topics">
        <div className="container">
          <div className="dest-sticky-nav-list">
            <a href="#fit" className="dest-sticky-nav-link">Suitability</a>
            <a href="#courses" className="dest-sticky-nav-link">Qualifications</a>
            <a href="#costs" className="dest-sticky-nav-link">Fees &amp; Budget</a>
            <a href="#language" className="dest-sticky-nav-link">French Language</a>
            <a href="#admissions" className="dest-sticky-nav-link">Pakistan Process</a>
            <a href="#visa" className="dest-sticky-nav-link">Visa &amp; Deposits</a>
            <a href="#scholarships" className="dest-sticky-nav-link">Scholarships</a>
            <a href="#housing" className="dest-sticky-nav-link">CAF Housing</a>
            <a href="#work" className="dest-sticky-nav-link">Work &amp; Internships</a>
            <a href="#after-study" className="dest-sticky-nav-link">After Graduation</a>
            <a href="#faqs" className="dest-sticky-nav-link">FAQs</a>
          </div>
        </div>
      </nav>

      {/* S02: Fit before destination */}
      <section id="fit" className="dest-section dest-section-white">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>DECISION FRAMEWORK</span>
              </div>
              <h2 className="dest-section-title">Is France right for your plans?</h2>
              <p className="dest-section-subline">
                France deserves a closer look when a specific course fits your goals. Its appeal should go beyond a city name or travel plans.
              </p>
            </div>

            <div className="dest-comparison-grid">
              <div className="dest-card-panel explore-card">
                <div className="dest-card-header-row">
                  <div className="dest-card-icon-wrap green-bg">
                    <CheckCircle2 size={22} />
                  </div>
                  <h3 className="dest-card-title">What to Evaluate</h3>
                </div>
                <p>
                  Ask what you want to learn and where you might use it. Compare the teaching, assessment style and practical work within each course. A business course and an engineering degree need different checks.
                </p>
                <p>
                  Your comfort with French matters too, even with English teaching. So does your ability to cover costs without a quick job.
                </p>
              </div>

              <div className="dest-card-panel pause-card">
                <div className="dest-card-header-row">
                  <div className="dest-card-icon-wrap amber-bg">
                    <AlertCircle size={22} />
                  </div>
                  <h3 className="dest-card-title">Start with Open Choices</h3>
                </div>
                <p>
                  Bring these questions to your assessment while your choices remain open. You do not need a fixed university choice to start the conversation.
                </p>
                <p>
                  We help compare course modules with realistic goals in Pakistan and abroad so your investment carries lasting educational value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S03: Course and recognition */}
      <section id="courses" className="dest-section dest-section-light">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>DEGREE RECOGNITION</span>
              </div>
              <h2 className="dest-section-title">Choose the qualification, not just the school name</h2>
              <p className="dest-section-subline">
                Public universities and private schools do not all award the same qualifications. Check the exact award, awarding body and recognition before comparing offers.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div className="dest-cost-card featured-cost">
                <div className="dest-cost-body">
                  <h3>Beyond Marketing Reputations</h3>
                  <p>
                    A school's reputation does not answer every question about its courses. Ask whether your chosen qualification supports further study or professional registration. Regulated careers may need extra checks in your intended country.
                  </p>
                </div>
              </div>

              <div className="dest-cost-card featured-cost">
                <div className="dest-cost-body">
                  <h3>HEC Pakistan Verification</h3>
                  <p>
                    If you plan to return to Pakistan, check HEC recognition requirements early. Campus France Pakistan also asks applicants to consider recognition before applying.
                  </p>
                </div>
              </div>

              <div className="dest-cost-card featured-cost">
                <div className="dest-cost-body">
                  <h3>Curriculum Purpose</h3>
                  <p>
                    Compare course modules with roles you would consider at home. That gives your degree a purpose beyond a possible stay abroad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S04: Tuition & S05: Full budget */}
      <section id="costs" className="dest-section dest-section-white">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>TUITION &amp; FINANCES</span>
              </div>
              <h2 className="dest-section-title">Public and private fees need separate comparisons</h2>
              <p className="dest-section-subline">
                A lower headline fee is only useful if the whole course fits. Compare the qualification, teaching language and total cost together.
              </p>
            </div>

            <div className="dest-comparison-grid" style={{ marginBottom: "36px" }}>
              <div className="dest-card-panel">
                <div className="dest-card-header-row">
                  <div className="dest-card-icon-wrap navy-bg">
                    <Building2 size={22} />
                  </div>
                  <h3 className="dest-card-title">Public Universities</h3>
                </div>
                <p>
                  Public study does not mean every international student pays the lowest fee. Different fees can apply to students outside the European Union. Exemptions depend on the rules and your own circumstances.
                </p>
                <p>
                  Get any fee exemption or discount confirmed in writing before relying on it.
                </p>
              </div>

              <div className="dest-card-panel">
                <div className="dest-card-header-row">
                  <div className="dest-card-icon-wrap amber-bg">
                    <DollarSign size={22} />
                  </div>
                  <h3 className="dest-card-title">Private Grandes Écoles</h3>
                </div>
                <p>
                  Private schools usually set higher fees, with large differences between courses. Ask for the price of your exact programme and intake. Check whether later study years carry the same fee.
                </p>
                <p>
                  Also check application charges, student contribution fees, and payment dates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S05: Full budget */}
      <section className="dest-section dest-section-navy">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill" style={{ color: "#FFA000" }}>
                <span className="dest-eyebrow-dot" />
                <span>REALISTIC BUDGETING</span>
              </div>
              <h2 className="dest-section-title">Plan for the months before any earnings</h2>
              <p className="dest-section-subline" style={{ color: "rgba(255,255,255,0.85)" }}>
                Rent, food and transport continue whether you find work or not. Compare housing in the city where you will actually study. Include a deposit, initial travel and basic arrival costs.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
              <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px", padding: "20px" }}>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#FFA000", margin: "0 0 6px 0" }}>Tuition vs. Living Capital</h3>
                <p style={{ margin: 0, fontSize: "0.98rem", color: "rgba(255,255,255,0.85)" }}>
                  Keep tuition payments separate from money available for daily living. A paid deposit should not also count as spare living money.
                </p>
              </div>

              <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px", padding: "20px" }}>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#FFA000", margin: "0 0 6px 0" }}>Family Financial Clarity</h3>
                <p style={{ margin: 0, fontSize: "0.98rem", color: "rgba(255,255,255,0.85)" }}>
                  Discuss who will pay, when funds become available and currency changes. Visa financial evidence is another check, not your complete household budget.
                </p>
              </div>

              <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px", padding: "20px" }}>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#FFA000", margin: "0 0 6px 0" }}>Contingency Buffer</h3>
                <p style={{ margin: 0, fontSize: "0.98rem", color: "rgba(255,255,255,0.85)" }}>
                  Your family should understand the plan if costs rise or work takes longer. Leave room for unexpected expenses rather than spending every available rupee. A plan that depends on immediate earnings needs another look.
                </p>
              </div>
            </div>

            <Link to="/assessment?destination=france" className="dest-btn-primary">
              <span>Discuss my France study budget</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* S06: French practicalities */}
      <section id="language" className="dest-section dest-section-white">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>LANGUAGE REALITY</span>
              </div>
              <h2 className="dest-section-title">English teaching does not remove the need for French</h2>
              <p className="dest-section-subline">
                Check the language of every required module, assessment and practical component. Do not assume a course title proves that everything uses English.
              </p>
            </div>

            <div className="dest-comparison-grid">
              <div className="dest-card-panel">
                <h3 className="dest-card-title" style={{ marginBottom: "12px" }}>Academic Evidence</h3>
                <p>
                  Your school decides which language evidence it accepts for admission. Ask whether your current test or previous study meets its requirements.
                </p>
                <p>
                  Ask each institution about French classes, their cost and available places. Free lessons are not a benefit you should assume everywhere.
                </p>
              </div>

              <div className="dest-card-panel">
                <h3 className="dest-card-title" style={{ marginBottom: "12px" }}>Daily Life &amp; Internships</h3>
                <p>
                  French can matter when arranging housing, handling everyday tasks and seeking work. It can also widen the internships you can realistically pursue.
                </p>
                <p>
                  Build language learning into your study plan before arrival. You do not need perfect French to recognise its practical value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S07: Pakistan process */}
      <section id="admissions" className="dest-section dest-section-light">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>APPLICATION ROADMAP</span>
              </div>
              <h2 className="dest-section-title">Follow the application route for your course</h2>
              <p className="dest-section-subline">
                Campus France Pakistan publishes Études en France guidance for local applicants. This is an online process linked to study applications and pre-consular review.
              </p>
            </div>

            <div className="dest-steps-timeline">
              <div className="dest-step-card">
                <div className="dest-step-circle">1</div>
                <div className="dest-step-body">
                  <h3>Determine Platform vs. Direct Route</h3>
                  <p>
                    The route depends on whether your institution uses the platform for admission. Campus France Pakistan also describes a route after direct admission. That route uses the accepted-student process before the visa stage.
                  </p>
                </div>
              </div>

              <div className="dest-step-card">
                <div className="dest-step-circle">2</div>
                <div className="dest-step-body">
                  <h3>Local Campaign Deadlines</h3>
                  <p>
                    Check the current local guidance for your programme and intake. Deadlines and steps need checking against the relevant campaign.
                  </p>
                </div>
              </div>

              <div className="dest-step-card">
                <div className="dest-step-circle">3</div>
                <div className="dest-step-body">
                  <h3>Pre-Consular Review &amp; Visa Distinction</h3>
                  <p>
                    An admission letter does not finish every stage or secure a visa. Campus France review and the visa decision have different roles.
                  </p>
                </div>
              </div>

              <div className="dest-step-card">
                <div className="dest-step-circle">4</div>
                <div className="dest-step-body">
                  <h3>Maintain Application Clarity</h3>
                  <p>
                    Keep control of your application and understand what each stage means. Ask for an explanation whenever a request is unclear.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S08: Payments and visa */}
      <section id="visa" className="dest-section dest-section-white">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>DEPOSIT &amp; VISA SECURITY</span>
              </div>
              <h2 className="dest-section-title">Understand the risk before paying a deposit</h2>
              <p className="dest-section-subline">
                Check the offer conditions before accepting a place or transferring money. Ask what happens if you cannot attend or receive a visa refusal.
              </p>
            </div>

            <div className="dest-card-panel pause-card" style={{ marginBottom: "24px" }}>
              <div className="dest-card-header-row">
                <div className="dest-card-icon-wrap amber-bg">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="dest-card-title">Written Refund Rules &amp; Visa Terms</h3>
              </div>
              <p>
                Refund rules can differ between institutions and payment types. Read the written terms rather than relying on a spoken promise. Ask about deductions, deadlines and how a refund request works.
              </p>
              <p>
                For the visa stage, use the current instructions for your situation. Your course offer and financial plan must make sense together.
              </p>
              <p style={{ fontWeight: 600, color: "#011E3E" }}>
                No consultant can guarantee admission, a scholarship or a visa. If a plan has a weak point, discuss it before spending more. Delaying an application can be better than rushing an unsuitable one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S09: Scholarships & S10: CAF */}
      <section id="scholarships" className="dest-section dest-section-light">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>FUNDING REALITY</span>
              </div>
              <h2 className="dest-section-title">Treat each scholarship as a separate application</h2>
              <p className="dest-section-subline">
                Scholarships can help, but their rules differ by award and intake. Nationality, course level and application timing can affect your eligibility.
              </p>
            </div>

            <div className="dest-comparison-grid">
              <div className="dest-card-panel">
                <h3 className="dest-card-title" style={{ marginBottom: "12px" }}>Award Scope &amp; Timing</h3>
                <p>
                  Campus France lists funding routes and a scholarship search service. A listing does not mean you qualify or will receive an award.
                </p>
                <p>
                  Read what an award covers and what you must still pay. A tuition reduction may leave rent and other costs entirely yours. Check whether an institution must nominate you before you can apply.
                </p>
                <p>
                  Keep unconfirmed funding outside your committed budget. If the course only works with a scholarship, decide your fallback first.
                </p>
              </div>

              <div id="housing" className="dest-card-panel">
                <h3 className="dest-card-title" style={{ marginBottom: "12px" }}>Do not build your rent plan around CAF</h3>
                <p>
                  CAF housing support depends on your circumstances and the current rules. It is not a fixed rent discount for every international student.
                </p>
                <p>
                  Current rules place additional conditions on many students outside Europe. Your residence status, resources and housing can also affect eligibility.
                </p>
                <p>
                  Do not subtract a promised percentage from your housing budget. Plan to cover rent yourself unless support has been confirmed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S11: Work and internships */}
      <section id="work" className="dest-section dest-section-white">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>EMPLOYMENT CONDITIONS</span>
              </div>
              <h2 className="dest-section-title">Work and internships are opportunities, not a funding promise</h2>
              <p className="dest-section-subline">
                Student work is subject to your status and the applicable limits. Jobs still depend on employers, your skills and local demand. French ability can affect the roles open to you.
              </p>
            </div>

            <div className="dest-comparison-grid">
              <div className="dest-card-panel">
                <h3 className="dest-card-title" style={{ marginBottom: "12px" }}>Student Employment</h3>
                <p>
                  Keep class time and study demands in mind before planning shifts. Future earnings should not carry the cost of your degree.
                </p>
                <p>
                  Legal limits apply to part-time student work. Relying on wages from day one adds unnecessary pressure to your studies.
                </p>
              </div>

              <div className="dest-card-panel">
                <h3 className="dest-card-title" style={{ marginBottom: "12px" }}>Internships ("Stage")</h3>
                <p>
                  Some courses include an internship, often called a stage in France. Check whether yours requires one and who finds the host organisation.
                </p>
                <p>
                  An internship needs the required agreement, and compensation rules depend on its terms. Ask what support the school provides if a placement proves difficult. Neither admission nor consultancy support guarantees a placement or a job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S12: After study */}
      <section id="after-study" className="dest-section dest-section-navy">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill" style={{ color: "#FFA000" }}>
                <span className="dest-eyebrow-dot" />
                <span>POST-STUDY PATHWAYS</span>
              </div>
              <h2 className="dest-section-title">Keep more than one plan after graduation</h2>
              <p className="dest-section-subline" style={{ color: "rgba(255,255,255,0.85)" }}>
                Post-study options depend on nationality, the qualification and your residence situation. France does not offer every graduate a blanket two-year APS route.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "28px" }}>
              <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px", padding: "20px" }}>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#FFA000", margin: "0 0 6px 0" }}>Job-Search / Business Creation Route</h3>
                <p style={{ margin: 0, fontSize: "0.98rem", color: "rgba(255,255,255,0.85)" }}>
                  The general job-search or business-creation route has its own eligibility rules. Bilateral arrangements can differ, so the route needs an individual check. Permission to seek work is not a job offer or permanent residence.
                </p>
              </div>

              <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px", padding: "20px" }}>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#FFA000", margin: "0 0 6px 0" }}>Dual-Path Planning</h3>
                <p style={{ margin: 0, fontSize: "0.98rem", color: "rgba(255,255,255,0.85)" }}>
                  Consider a return-home plan with equal care before choosing your degree. What skills would you bring to employers or further study in Pakistan? Keep course projects and practical experience relevant to those goals. Your decision should still have value if you leave France after studying.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S13: Service scope */}
      <section className="dest-section dest-section-white">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>SERVICE SCOPE</span>
              </div>
              <h2 className="dest-section-title">Get help comparing the decisions that matter</h2>
              <p className="dest-section-subline">
                Use the free assessment to discuss your academic background and France plans. Explain your budget limits and the course level you are considering.
              </p>
            </div>

            <div className="dest-card-panel explore-card">
              <p>
                Study Prime can help you identify questions about course fit and applications. Ask which support is included and which services carry separate fees. Agree the scope before any paid work begins.
              </p>
              <p>
                Before a review, you may have several offers that seem hard to compare. A useful next step is a clear view of the remaining questions. That is a planning goal, not a promised admission outcome.
              </p>
              <p style={{ margin: 0, fontWeight: 600, color: "#011E3E" }}>
                The assessment suits students who want practical guidance rather than guaranteed results. You remain involved in the choices and understand what happens next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S14: FAQ */}
      <section id="faqs" className="dest-section dest-section-light">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header" style={{ textAlign: "center" }}>
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>FREQUENT QUESTIONS</span>
              </div>
              <h2 className="dest-section-title">Questions about studying in France</h2>
              <p className="dest-section-subline">
                Clear, verified answers to common questions about admissions, language, fees, and visas.
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

      {/* S15: Final CTA */}
      <section id="contact" className="dest-closing-cta-section">
        <div className="container">
          <div className="dest-closing-card">
            <h2>Take the next step with a clearer France plan</h2>
            <p>
              You do not need to solve every question before asking for help. Start with your current studies, preferred course and a realistic budget.
            </p>
            <p>
              Book a free assessment to discuss whether France fits your plans. Include the concerns that could change your decision, especially costs or language. Those questions matter more than choosing a university quickly.
            </p>

            <div className="dest-closing-actions">
              <Link to="/assessment?destination=france" className="dest-btn-primary">
                <span>Get free France assessment</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="dest-contact-row">
              <a href="tel:+923101193888">
                <PhoneCall size={16} /> Prefer to speak first? Call +92 310 1193888
              </a>
              <a href="mailto:info@studyprime.pk">
                <Mail size={16} /> info@studyprime.pk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Bar */}
      <div className="dest-mobile-sticky-bar">
        <div>
          <span className="bar-title">Study in France</span>
          <span className="bar-subtitle">Free Profile Assessment</span>
        </div>
        <Link to="/assessment?destination=france" className="bar-btn">
          Get Assessment
        </Link>
      </div>
    </div>
  );
}
