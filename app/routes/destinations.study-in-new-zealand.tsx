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
  const canonicalUrl = `${CANONICAL_BASE_URL}/destinations/study-in-new-zealand`;
  const pageTitle = "Study in New Zealand | Courses, Costs & Visas | Study Prime";
  const pageDescription =
    "Plan to study in New Zealand. Compare courses, costs, entry rules and visa options with Study Prime. Book your free assessment.";

  return [
    { title: pageTitle },
    { name: "description", content: pageDescription },
    { property: "og:title", content: "Study in New Zealand | Study Prime" },
    { property: "og:description", content: pageDescription },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop" },
    { property: "og:image:alt", content: "Scenic landscape of New Zealand" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Study in New Zealand | Study Prime" },
    { name: "twitter:description", content: pageDescription },
    { name: "twitter:image", content: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop" },
    { tagName: "link", rel: "canonical", href: canonicalUrl },
  ];
};

export default function DestinationsStudyInNewZealandRoute() {
  const canonicalUrl = `${CANONICAL_BASE_URL}/destinations/study-in-new-zealand`;

  const faqs = [
    {
      q: "How much does it cost to study in New Zealand?",
      a: "Tuition depends on the course, provider and intake. Add living costs, travel, insurance and other charges. Visa funding minimums are not a complete household budget. Compare written fees for your shortlist before deciding.",
    },
    {
      q: "Can I study without IELTS?",
      a: "That depends on the provider and course. Some accept other English tests or evidence. Check admission and visa requirements separately. Do not assume an exemption applies until it is confirmed.",
    },
    {
      q: "Can I work while studying?",
      a: "Eligible students may work up to 25 hours weekly. Your own visa conditions control what you can do. Full-time work during breaks has additional conditions. Do not rely on a job to fund the whole course.",
    },
    {
      q: "Will I get a three-year work visa after graduating?",
      a: "Not automatically. Eligibility, length and work conditions depend on your qualification and study. Check the exact course against current rules before enrolling.",
    },
    {
      q: "Can my partner work in New Zealand?",
      a: "Some students can support a partner's work visa application. Eligibility depends on the qualification and other requirements. Your partner must apply separately. Check this before making family travel plans.",
    },
    {
      q: "Are scholarships available to Pakistani students?",
      a: "Some awards may accept applicants from Pakistan. Check each award's nationality rules, course coverage and deadline. Do not include an unconfirmed award in your funding plan.",
    },
    {
      q: "Which intake should I choose?",
      a: "Choose an intake offered for your exact course. February and July are common starts, but not universal. Allow time for entry requirements, funding and visa steps. Do not assume an assessment guarantees the next intake.",
    },
    {
      q: "Can studying lead to permanent residence?",
      a: "Some graduates may later qualify under a separate immigration route. Study alone does not guarantee residence. Employment, qualifications and other rules may affect eligibility. Choose a course for its educational value as well.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: "Study in New Zealand Guidance & Assessment",
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
            name: "Study in New Zealand",
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
            <span className="current">Study in New Zealand</span>
          </div>
        </div>
      </nav>

      {/* S01: Hero Section */}
      <section className="dest-hero-premium">
        <div
          className="dest-hero-bg-overlay"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop')` }}
        />
        <div className="dest-hero-vignette" />

        <div className="container">
          <div className="dest-hero-grid">
            <div>
              <div className="dest-hero-eyebrow">
                <Sparkles size={14} />
                <span>OFFICIAL STUDY DESTINATION GUIDE &middot; NEW ZEALAND</span>
              </div>

              <h1 className="dest-hero-title">
                Study in <span>New Zealand</span>
              </h1>

              <p className="dest-hero-lead">
                A course can look right online and still stretch your budget. Before you apply, check the fees, entry rules and visa requirements together.
              </p>

              <p className="dest-hero-body-text">
                Study Prime helps you compare your options and plan your next step. Start with a free assessment of your study goals.
              </p>

              {/* Trust Chips */}
              <div className="dest-hero-chips">
                <span className="dest-hero-chip">
                  <CheckCircle2 size={14} color="#FFA000" />
                  Course that fits your background
                </span>
                <span className="dest-hero-chip">
                  <CheckCircle2 size={14} color="#FFA000" />
                  Understand costs before commitment
                </span>
                <span className="dest-hero-chip">
                  <CheckCircle2 size={14} color="#FFA000" />
                  Official 25-Hr work &amp; visa rules
                </span>
              </div>

              {/* Action Buttons */}
              <div className="dest-hero-actions">
                <Link to="/assessment?destination=new-zealand" className="dest-btn-primary">
                  <span>Get my free New Zealand assessment</span>
                  <ArrowRight size={18} />
                </Link>
                <a href="#costs" className="dest-btn-secondary">
                  Explore fees &amp; funding
                </a>
              </div>

              <p className="dest-hero-trust-note">
                Prefer to speak first? Call <a href="tel:+923101193888" style={{ color: "#FFA000", fontWeight: 700 }}>+92 310 1193888</a>.
              </p>
            </div>

            {/* Showcase Floating Card */}
            <div>
              <div className="dest-hero-card">
                <div className="dest-hero-photo-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop"
                    alt="Scenic mountains and lake in New Zealand"
                    loading="eager"
                  />
                  <div className="dest-hero-card-badge">
                    <GraduationCap size={13} />
                    <span>World Top 3% Unis</span>
                  </div>
                </div>

                <div className="dest-hero-card-body">
                  <div className="dest-hero-card-title">
                    <img
                      src="/images/flags/new-zealand.svg"
                      alt="New Zealand Flag"
                      className="dest-hero-card-flag"
                      onError={(e) => ((e.target as HTMLElement).style.display = "none")}
                    />
                    <span>Key New Zealand Study Facts</span>
                  </div>

                  <div className="dest-hero-card-list">
                    <div className="dest-hero-card-item">
                      <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span><strong>Intakes:</strong> February (Primary) &amp; July (Mid-Year)</span>
                    </div>
                    <div className="dest-hero-card-item">
                      <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span><strong>Student Work:</strong> Up to 25 hours weekly for eligible students</span>
                    </div>
                    <div className="dest-hero-card-item">
                      <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span><strong>PSW Visa:</strong> Up to 3 years depending on qualification level</span>
                    </div>
                  </div>

                  <Link to="/assessment?destination=new-zealand" className="dest-hero-card-btn">
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
      <nav className="dest-sticky-nav-bar" aria-label="Jump to New Zealand topics">
        <div className="container">
          <div className="dest-sticky-nav-list">
            <a href="#fit" className="dest-sticky-nav-link">Decision Support</a>
            <a href="#suitability" className="dest-sticky-nav-link">Country Fit</a>
            <a href="#courses" className="dest-sticky-nav-link">Courses</a>
            <a href="#providers" className="dest-sticky-nav-link">Providers</a>
            <a href="#costs" className="dest-sticky-nav-link">Budget &amp; Funds</a>
            <a href="#scholarships" className="dest-sticky-nav-link">Scholarships</a>
            <a href="#admissions" className="dest-sticky-nav-link">Admissions</a>
            <a href="#visa" className="dest-sticky-nav-link">Visa Planning</a>
            <a href="#work" className="dest-sticky-nav-link">Work Rights</a>
            <a href="#after-study" className="dest-sticky-nav-link">Post-Study</a>
            <a href="#faqs" className="dest-sticky-nav-link">FAQs</a>
          </div>
        </div>
      </nav>

      {/* S02: Decision support */}
      <section id="fit" className="dest-section dest-section-white">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>DECISION SUPPORT</span>
              </div>
              <h2 className="dest-section-title">Start with the questions that matter</h2>
              <p className="dest-section-subline">
                Which course builds on what you already know? Can your family cover the costs without relying on part-time work? What happens if your plans change?
              </p>
            </div>

            <div className="dest-card-panel explore-card">
              <p>
                These questions deserve clear answers before you pay a deposit.
              </p>
              <p>
                Your assessment gives us a starting point. We can discuss your education, budget and preferred intake. Then we can explain which options need a closer look.
              </p>
              <p style={{ margin: 0, fontWeight: 700, color: "#011E3E" }}>
                There is no need to choose a university on your first call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S03: Country fit */}
      <section id="suitability" className="dest-section dest-section-light">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>EVALUATION CRITERIA</span>
              </div>
              <h2 className="dest-section-title">Is New Zealand a good fit for you?</h2>
              <p className="dest-section-subline">
                Look beyond the country name. The right choice depends on what you will study and what you can afford.
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
                  New Zealand may suit you if you want an English-language study setting. Compare the course content, teaching approach and support at each provider.
                </p>
                <p>
                  Quality teaching across tech, business, and applied sciences with transparent post-study work routes for qualifying degrees.
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
                  Take more time if your plan depends on an immediate job. Do the same if you need a scholarship to cover most costs.
                </p>
                <p>
                  Check family plans early too. A partner's work rights do not follow automatically from your admission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S04: Courses */}
      <section id="courses" className="dest-section dest-section-white">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>COURSE SPECIALISMS</span>
              </div>
              <h2 className="dest-section-title">Choose the course before the campus</h2>
              <p className="dest-section-subline">
                For every course, ask how the learning supports your plans. Consider opportunities at home as well as overseas. No course can promise a job.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div className="dest-cost-card">
                <div className="dest-cost-body">
                  <h3>Technology and Computing</h3>
                  <p>Compare the modules, practical work and entry requirements. A course title alone will not tell you how much coding it includes.</p>
                </div>
              </div>

              <div className="dest-cost-card">
                <div className="dest-cost-body">
                  <h3>Engineering &amp; Applied Science</h3>
                  <p>Check the subject requirements and any professional recognition you may need. Confirm whether placements are included or arranged separately.</p>
                </div>
              </div>

              <div className="dest-cost-card">
                <div className="dest-cost-body">
                  <h3>Business and Management</h3>
                  <p>Look closely at the course level and specialism. Check whether it adds useful skills to your earlier study or work.</p>
                </div>
              </div>

              <div className="dest-cost-card">
                <div className="dest-cost-body">
                  <h3>Other Specialist Subjects</h3>
                  <p>Agriculture, hospitality and other practical subjects may offer suitable options. Compare the training setting and any extra equipment costs.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "28px" }}>
              <Link to="/courses" className="dest-btn-secondary">
                Explore courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S05: Provider comparison */}
      <section id="providers" className="dest-section dest-section-light">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>INSTITUTION ASSESSMENT</span>
              </div>
              <h2 className="dest-section-title">Compare providers on more than rankings</h2>
              <p className="dest-section-subline">
                Check the exact qualification, campus and course length. Two similar course names can lead to different study experiences.
              </p>
            </div>

            <div className="dest-card-panel explore-card">
              <p>
                Ask what support is available for international students. Review the assessment style and how much teaching happens in person.
              </p>
              <p>
                Read the fee and refund terms before accepting an offer. A university ranking cannot answer those questions for you.
              </p>
              <p style={{ margin: 0, fontWeight: 600, color: "#011E3E" }}>
                We can help you organise the comparison. Any direct partnership should be confirmed for the provider you choose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S06: Budget */}
      <section id="costs" className="dest-section dest-section-white">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>EXPENSES &amp; IMMIGRATION FUNDS</span>
              </div>
              <h2 className="dest-section-title">Know what your family will need to pay</h2>
              <p className="dest-section-subline">
                A minimum visa amount is not a promise that it covers your lifestyle. Check the latest rules and your real costs before making a payment.
              </p>
            </div>

            <div className="dest-cost-card">
              <div className="dest-cost-body">
                <h3>Tuition</h3>
                <p>Use the fee for your exact course and intake. Check whether the amount covers one year or the full programme.</p>
              </div>
            </div>

            <div className="dest-cost-card">
              <div className="dest-cost-body">
                <h3>Living Costs</h3>
                <p>Allow for accommodation, food, transport and everyday spending. Your city and housing choice can change the total.</p>
              </div>
            </div>

            <div className="dest-cost-card">
              <div className="dest-cost-body">
                <h3>Other Costs</h3>
                <p>Include flights, insurance and visa charges. Check for course equipment, placement costs and housing deposits too.</p>
              </div>
            </div>

            <div className="dest-cost-card">
              <div className="dest-cost-body">
                <h3>Payment Timing</h3>
                <p>Ask when each payment is due. Read the refund rules, including what happens if your visa is refused.</p>
              </div>
            </div>

            {/* Official Funding Evidence Inset */}
            <div className="dest-card-panel pause-card" style={{ marginTop: "24px", marginBottom: "28px" }}>
              <h3 className="dest-card-title" style={{ color: "#011E3E", marginBottom: "12px" }}>
                Immigration Funding Evidence vs. Real Budget
              </h3>
              <p>
                Immigration funding rules are separate from a comfortable living budget. Eligible tertiary students paying their own costs generally need <strong>NZD 20,000 for a year</strong> of living expenses.
              </p>
              <p>
                For study shorter than a year, the published amount is <strong>NZD 1,667 per month</strong>. Tuition and outward travel costs are separate. Other accepted funding arrangements have their own conditions.
              </p>
            </div>

            <Link to="/assessment?destination=new-zealand" className="dest-btn-primary">
              <span>Discuss my study budget</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* S07: Scholarships */}
      <section id="scholarships" className="dest-section dest-section-light">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>SCHOLARSHIP CRITERIA</span>
              </div>
              <h2 className="dest-section-title">Treat a scholarship as an option, not a budget plan</h2>
              <p className="dest-section-subline">
                Some providers offer scholarships for international students. Eligibility can depend on your nationality, results, subject and study level.
              </p>
            </div>

            <div className="dest-card-panel explore-card">
              <p>
                An admission offer does not mean you have a scholarship. A partial fee award may leave most living costs unpaid.
              </p>
              <p><strong>Before counting an award in your budget, check:</strong></p>
              <ul style={{ margin: "12px 0 20px 20px", color: "#475569" }}>
                <li style={{ marginBottom: "6px" }}>Can you apply for this course and intake?</li>
                <li style={{ marginBottom: "6px" }}>What costs does the award actually cover?</li>
                <li>When will you receive a written decision?</li>
              </ul>
              <p style={{ margin: 0, fontWeight: 600, color: "#011E3E" }}>
                Build a plan using confirmed funds. If you cannot afford the course without an award, discuss that early.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S08: Admissions */}
      <section id="admissions" className="dest-section dest-section-white">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>ADMISSION STAGES</span>
              </div>
              <h2 className="dest-section-title">Understand the admission steps</h2>
              <p className="dest-section-subline">
                Admission and visa approval are separate decisions. An offer does not guarantee a student visa.
              </p>
            </div>

            <div className="dest-steps-timeline">
              <div className="dest-step-card">
                <div className="dest-step-circle">1</div>
                <div className="dest-step-body">
                  <h3>Check your starting point</h3>
                  <p>Entry rules depend on your qualification, results and chosen course. A suitable route for one student may not suit another.</p>
                </div>
              </div>

              <div className="dest-step-card">
                <div className="dest-step-circle">2</div>
                <div className="dest-step-body">
                  <h3>Confirm the English requirement</h3>
                  <p>Check which tests or other evidence the provider accepts. Do not assume one IELTS score applies to every programme.</p>
                </div>
              </div>

              <div className="dest-step-card">
                <div className="dest-step-circle">3</div>
                <div className="dest-step-body">
                  <h3>Read the offer carefully</h3>
                  <p>An offer may still have conditions to meet. Understand those conditions before you accept or pay.</p>
                </div>
              </div>

              <div className="dest-step-card">
                <div className="dest-step-circle">4</div>
                <div className="dest-step-body">
                  <h3>Plan the intake</h3>
                  <p>Many courses use February or July starts, but dates vary. Check the exact application deadline and allow time for each stage.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S09: Visa planning */}
      <section id="visa" className="dest-section dest-section-light">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>VISA COMPLIANCE</span>
              </div>
              <h2 className="dest-section-title">Build a clear student visa plan</h2>
              <p className="dest-section-subline">
                Your application needs to explain your study plans and meet current requirements. Immigration New Zealand makes the visa decision.
              </p>
            </div>

            <div className="dest-comparison-grid">
              <div className="dest-card-panel">
                <h3 className="dest-card-title" style={{ marginBottom: "12px" }}>Funding Documentation</h3>
                <p>
                  Funding needs careful attention. The amount matters, but so does evidence that the money is available to you.
                </p>
                <p>
                  If a parent or another person will help, check the accepted arrangements. Do not assume every sponsor or financial guarantee meets the same rules.
                </p>
              </div>

              <div className="dest-card-panel">
                <h3 className="dest-card-title" style={{ marginBottom: "12px" }}>Health, Character &amp; History</h3>
                <p>
                  Check any health, character and insurance requirements that apply. Leave time to address questions before your intended travel date.
                </p>
                <p>
                  Discuss your circumstances honestly. A previous refusal or study gap needs careful review, not a promise of approval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S10: Work during study */}
      <section id="work" className="dest-section dest-section-navy">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill" style={{ color: "#FFA000" }}>
                <span className="dest-eyebrow-dot" />
                <span>OFFICIAL WORK PERMISSIONS</span>
              </div>
              <h2 className="dest-section-title">Part-time work should not fund the whole plan</h2>
              <p className="dest-section-subline" style={{ color: "rgba(255,255,255,0.85)" }}>
                Eligible students may be allowed to work up to 25 hours weekly. Your actual permission depends on your course and visa conditions.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
              <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px", padding: "20px" }}>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#FFA000", margin: "0 0 6px 0" }}>25-Hour Weekly Condition</h3>
                <p style={{ margin: 0, fontSize: "0.98rem", color: "rgba(255,255,255,0.85)" }}>
                  Some students can work full-time during qualifying breaks. Check your own visa before taking extra hours. Do not assume an older 20-hour condition changes automatically. Check what your visa allows.
                </p>
              </div>

              <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px", padding: "20px" }}>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#FFA000", margin: "0 0 6px 0" }}>Realistic Earnings View</h3>
                <p style={{ margin: 0, fontSize: "0.98rem", color: "rgba(255,255,255,0.85)" }}>
                  A job may take time to find. Hours and income can vary. Plan to cover your costs without relying on work that is not secured.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S11: After study and family */}
      <section id="after-study" className="dest-section dest-section-white">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>POST-STUDY &amp; FAMILY</span>
              </div>
              <h2 className="dest-section-title">Check your options after graduation</h2>
              <p className="dest-section-subline">
                Eligible graduates may qualify for a Post Study Work Visa. It can last up to three years, depending on the qualification and study.
              </p>
            </div>

            <div className="dest-card-panel explore-card" style={{ marginBottom: "28px" }}>
              <p>
                Not every course qualifies. Some routes also restrict the type of work you can do.
              </p>
              <p>
                Check the rules for the exact qualification before you enrol. Future rule changes may affect your plans by the time you graduate.
              </p>
              <p style={{ margin: 0, fontWeight: 600, color: "#011E3E" }}>
                A post-study visa is not a job offer or a residence guarantee. Green List routes have separate requirements.
              </p>
            </div>

            <div className="dest-card-panel pause-card">
              <h3 className="dest-card-title" style={{ marginBottom: "12px" }}>Planning to bring your family?</h3>
              <p>
                A partner's work rights depend on the qualification and other conditions. Children's study options have separate rules too.
              </p>
              <p>
                Family members apply for their own visas. They are not simply added to your student visa application.
              </p>
              <p style={{ margin: 0 }}>
                Discuss these plans before choosing a course. Do not commit to fees on the assumption that everyone can travel or work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S12: Service and honest expectations */}
      <section className="dest-section dest-section-light">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>HONEST EXPECTATIONS</span>
              </div>
              <h2 className="dest-section-title">Get guidance without false promises</h2>
              <p className="dest-section-subline">
                Study Prime can help you compare study options and understand the next steps. We can discuss course fit, likely costs and application requirements.
              </p>
            </div>

            <div className="dest-card-panel">
              <p>
                Ask which services are included before paid work starts. Confirm any service fees and provider charges in writing.
              </p>
              <p>
                The provider decides admission and scholarship awards. Immigration New Zealand decides visas.
              </p>
              <p style={{ fontWeight: 700, color: "#011E3E" }}>
                No consultant can guarantee admission, a scholarship or a visa. We will not treat any of those outcomes as certain.
              </p>
              <p style={{ margin: 0 }}>
                You should understand your options before making a commitment. If a key question remains open, we should explain what needs checking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S13: Assessment */}
      <section className="dest-section dest-section-navy">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header">
              <div className="dest-eyebrow-pill" style={{ color: "#FFA000" }}>
                <span className="dest-eyebrow-dot" />
                <span>PROFILE ASSESSMENT</span>
              </div>
              <h2 className="dest-section-title">Start with your own situation</h2>
              <p className="dest-section-subline" style={{ color: "rgba(255,255,255,0.85)" }}>
                Tell us what you have studied and what you want to do next. Share your preferred intake and the budget you are working with.
              </p>
            </div>

            <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "14px", padding: "26px", marginBottom: "28px" }}>
              <p style={{ color: "#FFFFFF", fontSize: "1.05rem", lineHeight: 1.65, margin: "0 0 14px 0" }}>
                The booking page lets you choose a phone call, online meeting or office visit.
              </p>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.98rem", lineHeight: 1.6, margin: 0 }}>
                Use the discussion to ask about course fit and costs. You can also raise questions about timing, family plans or previous applications.
              </p>
            </div>

            <Link to="/assessment?destination=new-zealand" className="dest-btn-primary">
              <span>Get my free New Zealand assessment</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* S14: FAQs */}
      <section id="faqs" className="dest-section dest-section-white">
        <div className="container">
          <div className="dest-container-narrow">
            <div className="dest-section-header" style={{ textAlign: "center" }}>
              <div className="dest-eyebrow-pill">
                <span className="dest-eyebrow-dot" />
                <span>FREQUENT QUESTIONS</span>
              </div>
              <h2 className="dest-section-title">Questions about studying in New Zealand</h2>
              <p className="dest-section-subline">
                Straightforward answers to the most common questions from students and families.
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

      {/* S15: Closing contact */}
      <section id="contact" className="dest-closing-cta-section">
        <div className="container">
          <div className="dest-closing-card">
            <h2>Make your next step a clear one</h2>
            <p>
              You do not need every answer before speaking to us. Start with your goals and the questions holding you back.
            </p>

            <div className="dest-closing-actions">
              <Link to="/assessment?destination=new-zealand" className="dest-btn-primary">
                <span>Get my free New Zealand assessment</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="dest-contact-row">
              <a href="tel:+923101193888">
                <PhoneCall size={16} /> Call: +92 310 1193888
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
          <span className="bar-title">Study in New Zealand</span>
          <span className="bar-subtitle">Free Assessment</span>
        </div>
        <Link to="/assessment?destination=new-zealand" className="bar-btn">
          Get Assessment
        </Link>
      </div>
    </div>
  );
}
