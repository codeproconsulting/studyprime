import { useParams, Link, useOutletContext } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
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
    heroSubtitle: "Finding the right accredited institutions and in-demand academic programs tailored to your budget and future career.",
    overview:
      "Choosing where and what to study is one of the most critical decisions of your academic journey. At Study Prime, our senior counselors evaluate your academic transcripts, career ambitions, budget constraints, and post-study work goals to shortlist the top matching institutions from our network of 450+ partner universities.",
    highlights: [
      "Access to direct admission panels across 450+ accredited global universities",
      "Detailed tuition fee and scholarship comparison across multiple countries",
      "Future-proof program selection aligned with global job shortage occupation lists",
      "Fast-track 1-Year Top-Up Degree options for DAE and 2-Year Associate Degree holders",
    ],
    processSteps: [
      {
        title: "1. Academic Profile & Transcript Evaluation",
        desc: "We review your grades, GPA, prerequisite subjects, and English proficiency to identify universities where you meet direct entry requirements.",
      },
      {
        title: "2. Career Alignment & In-Demand Programs",
        desc: "We analyze high-growth industries (e.g. AI, Data Science, FinTech, Public Health, Robotics) and connect you with degrees that offer maximum post-study work permits.",
      },
      {
        title: "3. Shortlisting & Budget Optimization",
        desc: "We present a curated list of Dream, Target, and Safe universities with transparent tuition fees, living costs, and automatic scholarship opportunities.",
      },
      {
        title: "4. Final Selection & Application Roadmap",
        desc: "Together with the student and parents, we finalize the target institutions and set deadlines for admissions intake submission.",
      },
    ],
    requiredDocs: [
      "Matric / O-Levels & Intermediate / A-Levels Marksheets",
      "Bachelor's Degree Transcripts & Degree Certificate (for PG applicants)",
      "Updated CV / Resume highlighting academic & extracurricular projects",
      "Current Passport copy",
      "English Proficiency Certificate (IELTS, PTE, or Medium of Instruction letter)",
    ],
    faqs: [
      {
        q: "Can I apply to multiple universities at the same time?",
        a: "Yes! We typically apply to 3 to 5 universities simultaneously to maximize your chance of securing unconditional offer letters and scholarships.",
      },
      {
        q: "Are scholarships available for Pakistani students?",
        a: "Yes, many partner universities offer automatic merit scholarships ranging from £1,500 to £5,000 (or up to 30% tuition fee discounts). We ensure all scholarship criteria are met during application.",
      },
    ],
    icon: GraduationCap,
  },
  "admission-support": {
    id: "admission-support",
    title: "Admissions & Application Support",
    heroSubtitle: "Complete application submission through direct university portals for expedited offer letter issuance.",
    overview:
      "Study Prime manages the entire university application lifecycle on your behalf. As official representatives, our applications bypass standard agent queues, granting you direct admission portal access, application fee waivers where available, and rapid unconditional offer turnaround.",
    highlights: [
      "Direct portal application submission with priority processing",
      "Application fee waivers at select partner universities",
      "Continuous admissions follow-up with international admissions officers",
      "Assistance in meeting conditional offer criteria and CAS/I-20 release",
    ],
    processSteps: [
      {
        title: "1. Document Compilation & Verification",
        desc: "We ensure all transcripts, certificates, recommendation letters, and identification files are formatted, attested, and ready for official submission.",
      },
      {
        title: "2. Direct Portal Submission",
        desc: "Applications are submitted directly into university partner management systems, ensuring priority review by admissions committees.",
      },
      {
        title: "3. Conditional Offer Assessment",
        desc: "Upon receiving your conditional offer, we guide you on fulfilling remaining prerequisites (e.g. English test scores, final year transcripts).",
      },
      {
        title: "4. Tuition Deposit & CAS / I-20 Issuance",
        desc: "We assist with secure tuition deposit transfers and prompt issuance of the Confirmation of Acceptance for Studies (CAS) needed for your visa.",
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
        q: "How long does it take to receive an offer letter?",
        a: "Through our direct university partner channels, initial offer letters typically arrive within 3 to 10 working days, depending on the university and intake season.",
      },
      {
        q: "Do I have to pay university application fees?",
        a: "At most of our partner universities in the UK, Australia, and Europe, application fees are 100% waived for students applying through Study Prime.",
      },
    ],
    icon: FileCheck,
  },
  "sop-guidance": {
    id: "sop-guidance",
    title: "SOP & Recommendation Support",
    heroSubtitle: "Professional structuring and constructive editing for Statements of Purpose, CVs, and reference letters.",
    overview:
      "A compelling Statement of Purpose (SOP) is often the decisive factor between an acceptance and a rejection. Our expert advisors work closely with you to craft a cohesive, authentic, and persuasive personal narrative that highlights your academic strengths, career logic, and reasons for choosing the institution without resorting to generic templates.",
    highlights: [
      "100% original, plagiarism-free drafting assistance highlighting your unique journey",
      "Alignment with specific university academic rubrics and visa case officer guidelines",
      "Professional resume formatting tailored to international academic standards",
      "Guidance for academic referees to draft strong, credible recommendation letters",
    ],
    processSteps: [
      {
        title: "1. One-on-One Questionnaire & Brainstorming",
        desc: "We discuss your academic background, pivotal learning experiences, career aspirations, and motivations for studying abroad.",
      },
      {
        title: "2. Strategic Narrative Structuring",
        desc: "We establish a clear outline connecting your previous studies to the chosen program and explaining how it bridges your long-term career goals.",
      },
      {
        title: "3. In-Depth Review & Grammar Polish",
        desc: "Our senior editors review your drafts, refining vocabulary, tone, and logical transitions while keeping your personal voice 100% authentic.",
      },
      {
        title: "4. Final Verification & Approval",
        desc: "A final check is completed against strict university and embassy plagiarism benchmarks before formal submission.",
      },
    ],
    requiredDocs: [
      "Detailed Academic Background & Marksheets",
      "Rough Notes / Initial Draft of your SOP",
      "Target Course Syllabus & University Details",
      "Current CV / Resume",
      "Details of Academic Referees (Professors / Supervisors)",
    ],
    faqs: [
      {
        q: "Do you use AI or generic templates for SOPs?",
        a: "No. University admissions teams and visa officers now use sophisticated AI and plagiarism detection tools. We work with your authentic thoughts, guiding you to write an original, high-impact statement.",
      },
      {
        q: "Can you help explain a low GPA or study gap in the SOP?",
        a: "Yes. We strategically address study gaps or grade fluctuations by highlighting relevant work experience, practical projects, or personal circumstances constructively.",
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
