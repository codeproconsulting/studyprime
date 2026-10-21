import { useParams, Link, useOutletContext } from "@remix-run/react";
import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { CANONICAL_BASE_URL } from "~/utils/seo";
import { useState } from "react";
import { 
  ShieldCheck, 
  GraduationCap, 
  FileCheck, 
  PenTool, 
  PlaneTakeoff, 
  ArrowRight, 
  CheckCircle2, 
  PhoneCall, 
  ChevronRight, 
  FileText, 
  HelpCircle, 
  ArrowLeft,
  Sparkles,
  MapPin,
  Clock,
  Award,
  BookOpen
} from "lucide-react";
import { siteConfig } from "~/data/siteData";

// Rich specific data for each individual service
const SERVICE_DETAILS: Record<string, {
  id: string;
  title: string;
  heroSubtitle: string;
  overview: string;
  highlights: string[];
  processSteps: { title: string; desc: string }[];
  requiredDocs: string[];
  faqs: { q: string; a: string }[];
  icon: any;
}> = {
  "student-visa": {
    id: "student-visa",
    title: "Student Visa Assistance",
    heroSubtitle: "Strategic visa documentation, financial proof structuring, and embassy interview coaching.",
    overview:
      "Securing a student visa requires meticulous attention to detail, strict adherence to embassy regulations, and convincing evidence of genuine temporary intent. Study Prime's dedicated visa team assists you through every critical step — from CAS/I-20 verification and financial asset valuation to mock interview sessions with seasoned advisors.",
    highlights: [
      "98% historical student visa approval track record across UK, Canada, Australia & Europe",
      "Comprehensive verification of financial sponsorship, bank statements & source of funds",
      "Rigorous 1-on-1 mock interview preparation for UKVI and embassy credibility checks",
      "Full guidance on TB medical screening, biometric scheduling, and visa fee processing",
    ],
    processSteps: [
      {
        title: "1. Financial Assessment & Document Verification",
        desc: "We verify that your bank maintenance funds, tax returns, and sponsorship affidavits meet exact embassy holding period rules (e.g., 28 consecutive days for UKVI).",
      },
      {
        title: "2. Visa File Compilation & SOP Review",
        desc: "Our advisors compile your official visa dossier, ensuring complete consistency between your academic history, Statement of Purpose, and study permit application forms.",
      },
      {
        title: "3. Mock Interview & Credibility Training",
        desc: "We conduct simulated interview sessions covering university knowledge, course justification, career outcomes, and financial clarity to build unshakable confidence.",
      },
      {
        title: "4. Biometrics Submission & Tracking",
        desc: "We schedule your VFS/Gerry's appointment, track application status with embassy case officers, and prepare you for passport collection.",
      },
    ],
    requiredDocs: [
      "Original Passport (valid for at least 6 months)",
      "Unconditional University Offer Letter & CAS / COE / I-20",
      "Verified Bank Statement & Bank Solvency Letter",
      "Affidavit of Financial Support & FBR Tax Returns",
      "Statement of Purpose (SOP) tailored for Visa Case Officers",
      "All previous Academic Transcripts, Degrees & Equivalences",
      "IELTS / PTE / English MOI Certificate",
      "TB Medical Test Certificate (from IOM approved centers)",
    ],
    faqs: [
      {
        q: "How much bank balance do I need to show for a UK/Canada student visa?",
        a: "For the UK, you must show remaining tuition fees plus living expenses (£9,207 outside London or £12,006 inside London) held for 28 consecutive days. For Canada SDS, a 1-year GIC of CAD $20,635 plus 1st year paid tuition is required. Our consultants provide exact calculation sheets based on your specific university.",
      },
      {
        q: "What if I have a study gap?",
        a: "Study gaps are acceptable if substantiated with authentic experience letters, salary slips, or professional development certificates. We help structure strong justification letters to satisfy visa case officers.",
      },
      {
        q: "Does Study Prime provide interview preparation?",
        a: "Yes. Every student receives multiple one-on-one mock interview sessions with realistic questions asked by embassy visa officers.",
      },
    ],
    icon: ShieldCheck,
  },
  "university-matching": {
    id: "university-matching",
    title: "University & Course Matching",
    heroSubtitle: "Compare courses, entry requirements and costs with Study Prime. Build a shortlist that fits your background and plans.",
    overview:
      "Too many university options can make a simple decision feel impossible. University and course matching helps you compare what matters before you apply. Study Prime helps you weigh your background, course interests and budget, starting with your goals and narrowing choices with clear reasons.",
    highlights: [
      "Look beyond a familiar university name to evaluate real fit",
      "Compare curriculum modules, campus location and entry requirements",
      "Understand which qualification questions still need provider confirmation",
      "Structure fee timing, living costs and refund terms before applications",
    ],
    processSteps: [
      {
        title: "1. Start with your goals",
        desc: "Tell us what you have studied and what you want next. Explain any limits around budget, location or family plans.",
      },
      {
        title: "2. Compare realistic options",
        desc: "Review course content, entry requirements and costs together. Ask why an option fits rather than accepting a list without reasons.",
      },
      {
        title: "3. Resolve the open questions",
        desc: "Check missing information with the relevant provider or official source. An uncertain entry route should stay uncertain until confirmed.",
      },
      {
        title: "4. Decide what to apply for",
        desc: "Choose which options to pursue and discuss application support separately. You stay involved in the choice before any commitment.",
      },
    ],
    requiredDocs: [
      "Academic Transcripts & Certificates for starting profile review",
      "Detailed CV / Resume outlining work history and subjects studied",
      "Valid Passport copy",
      "English Proficiency results (if already completed)",
    ],
    faqs: [
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
    ],
    icon: GraduationCap,
  },
  "admission-support": {
    id: "admission-support",
    title: "Admissions & Application Support",
    heroSubtitle: "Get help with university applications, offer conditions and next steps. Understand what remains outstanding before paying.",
    overview:
      "A university application has more moving parts than the submit button suggests. University application support helps you understand the requirements and keep the next steps clear. Study Prime supports applications, offer reviews and follow-up. You stay involved in what is submitted and what you agree to pay.",
    highlights: [
      "Review course and intake requirements to identify missing details before submission",
      "Verify consistency across qualifications, identity documents and study choices",
      "Track provider correspondence and understand conditional offer terms",
      "Clarify deposit deadlines, refund policies and visa handover steps",
    ],
    processSteps: [
      {
        title: "1. Confirm the course and intake",
        desc: "Start with the exact programme and campus. If the choice is unsettled, resolve that before preparing the application.",
      },
      {
        title: "2. Review and approve",
        desc: "Check the application details and any supporting explanations. Correct errors before they become part of the submitted record.",
      },
      {
        title: "3. Track the response",
        desc: "The university controls its review process. Respond to requests carefully and keep copies of the correspondence.",
      },
      {
        title: "4. Act on the decision",
        desc: "An offer, request for information or refusal needs a different response. Discuss the options before paying or applying elsewhere.",
      },
    ],
    requiredDocs: [
      "Certified Copies of All Academic Degrees & Transcripts",
      "Two Academic or Professional Letters of Recommendation (LOR)",
      "Statement of Purpose (SOP) tailored to the course",
      "Valid Passport copy",
      "English Language Proficiency Test Result",
      "Work Experience Letters (if applicable)",
    ],
    faqs: [
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
    ],
    icon: FileCheck,
  },
  "sop-guidance": {
    id: "sop-guidance",
    title: "SOP & Recommendation Support",
    heroSubtitle: "Explain your study plans in your own voice. Get guidance on SOP structure, CV clarity and references with Study Prime.",
    overview:
      "A blank page can make your study plans hard to explain. SOP guidance helps you turn your own experience into a clear statement of purpose. Study Prime offers help with structure, draft review and academic CVs. Recommendation guidance keeps the referee's own judgement at the centre.",
    highlights: [
      "Follow the actual institution prompt rather than forcing every statement into one template",
      "Improve sentence order, clarity and evidence while preserving your personal voice",
      "Format academic CVs with readable structure, accurate dates and verified achievements",
      "Explain the referee role accurately so recommendations reflect the referee's genuine judgement",
    ],
    processSteps: [
      {
        title: "1. Check the prompt first",
        desc: "Find out what the institution asks, including the format and length. Different courses and application routes may ask different questions.",
      },
      {
        title: "2. Build from your notes",
        desc: "Start with your own reasons, experiences and examples. You do not need a polished draft before discussing the structure.",
      },
      {
        title: "3. Review for clarity",
        desc: "Look for unsupported claims and weak connections to the course. Then improve the order, sentences and grammar.",
      },
      {
        title: "4. Read and approve",
        desc: "Check every detail and make sure the wording still feels like yours. Follow the institution's rules before submitting.",
      },
    ],
    requiredDocs: [
      "Application prompt and formatting requirements",
      "Rough Notes / Initial Draft of your reasons and experiences",
      "Target Course Syllabus & University Details",
      "Current Academic CV / Resume",
      "Referee Guidelines (if institutional instructions provided)",
    ],
    faqs: [
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
    ],
    icon: PenTool,
  },
  "departure-briefing": {
    id: "departure-briefing",
    title: "Pre & Post Departure Briefing",
    heroSubtitle: "Complete student relocation guidance, student accommodation support, airport transit, and settlement assistance.",
    overview:
      "Your journey does not end when your visa is stamped. Study Prime ensures you travel with peace of mind. We host thorough pre-departure orientation sessions covering luggage checklists, port of entry immigration clearance, student housing, public transit, and opening your international student bank account.",
    highlights: [
      "Comprehensive pre-departure packing checklist and flight booking advice",
      "Assistance in booking vetted on-campus and private student accommodation",
      "Airport arrival guidance, local SIM card setup, and public transit navigation",
      "Instructions on collecting your UK BRP card, registering with GP, and part-time work rights",
    ],
    processSteps: [
      {
        title: "1. Pre-Departure Orientation Session",
        desc: "A comprehensive briefing on what to carry, currency exchange, port of entry immigration questioning, and academic expectations.",
      },
      {
        title: "2. Accommodation Search & Booking",
        desc: "We connect you with certified student housing providers near your campus (e.g. AmberStudent, Casita, university halls).",
      },
      {
        title: "3. Flight & Travel Coordination",
        desc: "Advice on flight routes, extra student baggage allowances, and airport pickup booking.",
      },
      {
        title: "4. On-Arrival Settling Checklist",
        desc: "Guidance on collecting your Biometric Residence Permit (BRP), National Insurance (NIN) number, bank accounts, and registering with a local doctor (GP).",
      },
    ],
    requiredDocs: [
      "Stamped Student Visa & Valid Passport",
      "Official University Enrollment Confirmation & CAS/I-20",
      "Accommodation Tenancy Agreement / Address Details",
      "Tuition Fee & Living Expenses Receipts",
      "TB Certificate & Health Immunization Records",
    ],
    faqs: [
      {
        q: "How many hours can I work part-time as an international student?",
        a: "In the UK, Australia, and Ireland, international degree-level students are permitted to work up to 20 hours per week during term time and full-time during official vacation periods.",
      },
      {
        q: "How do I open a bank account abroad?",
        a: "We guide you on generating official university bank letters to easily open student accounts with digital banks like Monzo, Revolut, Lloyds, or CommBank upon arrival.",
      },
    ],
    icon: PlaneTakeoff,
  },
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const service = params.service || "";
  const validKeys = Object.keys(SERVICE_DETAILS);
  const matchedKey = validKeys.find((k) => service === k || service.includes(k) || k.includes(service));
  if (!matchedKey) {
    throw new Response("Service Not Found", { status: 404 });
  }
  return null;
};

export const meta: MetaFunction = ({ params }) => {
  const param = params.service || "student-visa";
  const matchedKey = Object.keys(SERVICE_DETAILS).find((k) => param.includes(k) || k.includes(param)) || "student-visa";
  const srv = SERVICE_DETAILS[matchedKey];
  const canonicalUrl = `${CANONICAL_BASE_URL}/services/${matchedKey}`;
  return [
    { title: `${srv.title} | Study Prime Educational Consultancy` },
    { name: "description", content: srv.heroSubtitle },
    { property: "og:title", content: `${srv.title} | Study Prime Educational Consultancy` },
    { property: "og:description", content: srv.heroSubtitle },
    { property: "og:url", content: canonicalUrl },
    { tagName: "link", rel: "canonical", href: canonicalUrl },
  ];
};

export default function ServiceDetailPage() {
  const { service: serviceParam } = useParams();

  // Find exact or matching service
  const param = serviceParam || "student-visa";
  const matchedKey = Object.keys(SERVICE_DETAILS).find((k) => param.includes(k) || k.includes(param)) || "student-visa";
  const service = SERVICE_DETAILS[matchedKey];

  const IconComponent = service.icon || ShieldCheck;
  const allOtherKeys = Object.keys(SERVICE_DETAILS).filter((k) => k !== matchedKey);

  return (
    <div className="service-detail-page-wrapper">
      {/* Breadcrumb Bar */}
      <div className="dest-breadcrumb-bar">
        <div className="container">
          <div className="dest-breadcrumb-inner">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/services" className="breadcrumb-link">Services</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="dest-country-hero" style={{ padding: "60px 0 50px 0", background: "linear-gradient(135deg, #011E3E 0%, #082A54 100%)" }}>
        <div className="dest-country-hero-overlay" />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "840px" }}>
            <div className="badge badge-gold" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "16px" }}>
              <Sparkles size={14} /> Official Advisory Service
            </div>
            <h1 style={{ fontSize: "3.2rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "16px", lineHeight: "1.15", letterSpacing: "-1px" }}>
              {service.title}
            </h1>
            <p style={{ fontSize: "1.15rem", color: "rgba(255, 255, 255, 0.88)", lineHeight: "1.65", marginBottom: "28px" }}>
              {service.heroSubtitle}
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link
                to="/assessment"
                className="btn btn-accent"
                style={{ padding: "14px 28px", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <span>Book Free Consultation</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="btn btn-outline"
                style={{ padding: "14px 24px", color: "#FFFFFF", borderColor: "rgba(255,255,255,0.4)" }}
              >
                <PhoneCall size={16} />
                <span>Call Advisor: {siteConfig.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section-padding" style={{ background: "#F8FAFC" }}>
        <div className="container">
          <div className="dest-layout-grid">
            {/* Left Content Column */}
            <div>
              {/* 1. Service Overview Card */}
              <div style={{ background: "#FFFFFF", borderRadius: "18px", border: "1px solid #E2E8F0", padding: "36px", marginBottom: "32px", boxShadow: "0 4px 18px rgba(8,23,54,0.03)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
                  <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(1, 30, 62, 0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <IconComponent size={26} color="#011E3E" />
                  </div>
                  <div>
                    <h2 style={{ fontSize: "1.7rem", fontWeight: 800, color: "var(--primary-navy)", margin: 0 }}>
                      Service Overview &amp; Scope
                    </h2>
                    <p style={{ color: "#64748B", margin: 0, fontSize: "0.95rem" }}>
                      End-to-end professional support tailored to your academic profile
                    </p>
                  </div>
                </div>

                <p style={{ fontSize: "1.02rem", color: "#475569", lineHeight: "1.7", marginBottom: "24px" }}>
                  {service.overview}
                </p>

                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--primary-navy)", marginBottom: "14px" }}>
                  Key Service Highlights
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "12px" }}>
                  {service.highlights.map((feat, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "#F8FAFC",
                        border: "1px solid #E2E8F0",
                        borderRadius: "12px",
                        padding: "16px 18px",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                      }}
                    >
                      <CheckCircle2 size={18} color="#10B981" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span style={{ fontSize: "0.95rem", color: "#334155", fontWeight: 600 }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Step-by-Step Methodology */}
              <div style={{ background: "#FFFFFF", borderRadius: "18px", border: "1px solid #E2E8F0", padding: "36px", marginBottom: "32px" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--primary-navy)", marginBottom: "20px" }}>
                  Our Step-by-Step Workflow for {service.title}
                </h3>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {service.processSteps.map((step, idx) => (
                    <div key={idx} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                      <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#011E3E", color: "#FFA700", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, flexShrink: 0 }}>
                        {idx + 1}
                      </div>
                      <div>
                        <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--primary-navy)", marginBottom: "4px" }}>
                          {step.title}
                        </h4>
                        <p style={{ fontSize: "0.92rem", color: "#64748B", margin: 0, lineHeight: "1.6" }}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Required Documents Checklist */}
              <div style={{ background: "#FFFFFF", borderRadius: "18px", border: "1px solid #E2E8F0", padding: "36px", marginBottom: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <FileText size={22} color="#011E3E" />
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--primary-navy)", margin: 0 }}>
                    Documents Checklist for This Service
                  </h3>
                </div>
                <p style={{ color: "#64748B", fontSize: "0.95rem", marginBottom: "20px" }}>
                  Please have the following documents ready when meeting with your Study Prime counselor:
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "12px" }}>
                  {service.requiredDocs.map((doc, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "#F8FAFC",
                        border: "1px solid #E2E8F0",
                        borderRadius: "10px",
                        padding: "12px 16px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "0.9rem",
                        color: "#1E293B",
                        fontWeight: 600
                      }}
                    >
                      <CheckCircle2 size={16} color="#011E3E" style={{ flexShrink: 0 }} />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Frequently Asked Questions */}
              <div style={{ background: "#FFFFFF", borderRadius: "18px", border: "1px solid #E2E8F0", padding: "36px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                  <HelpCircle size={22} color="#FFA700" />
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--primary-navy)", margin: 0 }}>
                    Frequently Asked Questions
                  </h3>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {service.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "#F8FAFC",
                        border: "1px solid #E2E8F0",
                        borderRadius: "12px",
                        padding: "18px 20px",
                      }}
                    >
                      <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--primary-navy)", marginBottom: "8px" }}>
                        {faq.q}
                      </h4>
                      <p style={{ fontSize: "0.92rem", color: "#475569", margin: 0, lineHeight: "1.6" }}>
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <div>
              <div className="dest-sticky-consult-card">
                <span className="consult-badge">Free Advisory Session</span>
                <h3 className="consult-title">Need Guidance on {service.title}?</h3>
                <p className="consult-desc">
                  Schedule a one-on-one session with our experienced consultants at our Islamabad office or online.
                </p>

                <div className="consult-perks-list">
                  <div className="perk-item">
                    <CheckCircle2 size={16} color="#10B981" />
                    <span>Free eligibility assessment</span>
                  </div>
                  <div className="perk-item">
                    <CheckCircle2 size={16} color="#10B981" />
                    <span>Authorized representative</span>
                  </div>
                  <div className="perk-item">
                    <CheckCircle2 size={16} color="#10B981" />
                    <span>98% Visa success rate</span>
                  </div>
                </div>

                <Link
                  to="/assessment"
                  className="btn btn-accent consult-btn-full"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  Book Free Assessment
                </Link>

                <div className="consult-contact-row">
                  <div className="office-tag">
                    <Award size={14} color="#011E3E" />
                    <span>Office: 1st Floor, Galleria Mall, I-8 Markaz</span>
                  </div>
                </div>
              </div>

              {/* Other Services Navigation */}
              <div className="other-destinations-card" style={{ marginTop: "24px" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--primary-navy)", marginBottom: "14px" }}>
                  Other Advisory Services
                </h4>
                <div className="other-dest-links">
                  {allOtherKeys.map((key) => {
                    const os = SERVICE_DETAILS[key];
                    return (
                      <Link
                        key={os.id}
                        to={`/services/${os.id}`}
                        className="other-dest-item"
                      >
                        <span>{os.title}</span>
                        <ChevronRight size={15} />
                      </Link>
                    );
                  })}
                </div>
                <Link to="/services" className="btn-view-all-dest" style={{ marginTop: "16px", display: "inline-block" }}>
                  View All Services Overview →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
