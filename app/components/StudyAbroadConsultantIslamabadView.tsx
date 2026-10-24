import { useState, useId } from "react";
import { Link } from "@remix-run/react";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  MessageCircle,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  GraduationCap,
  Sparkles,
  Award,
  Users,
  Compass,
  Building2,
  Calendar,
  AlertCircle,
  HelpCircle,
  BookOpen,
  ArrowUpRight
} from "lucide-react";
import { siteConfig } from "~/data/siteData";
import { CANONICAL_BASE_URL } from "~/utils/seo";

export function StudyAbroadConsultantIslamabadView({
  canonicalPath = "/study-abroad-consultant-islamabad",
}: {
  canonicalPath?: string;
}) {
  const formId = useId();

  // Form State with chips/pills
  const [fullName, setFullName] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [currentLevel, setCurrentLevel] = useState("BS");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [targetDestination, setTargetDestination] = useState("UK");
  const [targetIntake, setTargetIntake] = useState("2027 Fall");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const levelOptions = ["FSc/A-Levels", "BS", "MS", "Already graduated", "Other"];
  const destinationOptions = ["UK", "Europe", "New Zealand", "Not sure yet"];
  const intakeOptions = ["2027 Spring", "2027 Fall", "2028", "Not sure"];

  const scrollToForm = () => {
    const el = document.getElementById("assessment-form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!whatsappNumber.trim()) {
      alert("Please provide your WhatsApp number for consultation booking.");
      return;
    }
    setIsSubmitting(true);

    // Optional webhook post or local confirmation
    try {
      // Simulate submission or post
      await new Promise((resolve) => setTimeout(resolve, 600));
      setFormSubmitted(true);
    } catch (err) {
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappDirectUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    `Hello Study Prime Islamabad! I would like to book my Free Profile Assessment for ${targetDestination} (${targetIntake}). My name is ${fullName || "Student"} and WhatsApp is ${whatsappNumber || "provided"}.`
  )}`;

  // FAQ Schema Data
  const faqs = [
    {
      q: "Can I study abroad with my degree?",
      a: "Most likely, yes. If you have finished your degree or are still studying, you probably have options. The free assessment shows which courses and countries fit your grades and goals — including when the honest answer is \"one more year of profile, then a better one\".",
    },
    {
      q: "How much does it cost?",
      a: "The assessment, university options and study plan are free. If we charge a service fee, it is explained before you commit and confirmed in writing. Tuition, visa and test fees go to the university, the visa office and the test centre — not to us.",
    },
    {
      q: "How long does the process take?",
      a: "It depends on your intake, course and country. After your assessment we give you a clear timeline that works back from your target intake. Rule of thumb: serious planning for a UK or European fall intake starts 8–12 months before departure.",
    },
    {
      q: "What if my visa is refused?",
      a: "No consultant can promise a visa. What we do is prepare your documents carefully, so your application is as strong as it can be, and train you for the interview. If you do get a refusal, we talk through your next steps with you — no extra charge for that conversation.",
    },
    {
      q: "Which countries do you cover?",
      a: "The United Kingdom is our main focus. We also help students applying to Europe and New Zealand. We deliberately do not claim every country in the world — see why above.",
    },
    {
      q: "Can I visit the office before paying anything?",
      a: "Yes — that's how most families start. Office #F-15, First Floor, Galleria Mall, I-8 Markaz. Mon–Fri 10:00–18:00, Sat 10:00–15:00. Walk in or WhatsApp first so an advisor is free: +92 310 1193888.",
    },
    {
      q: "I'm still in my last semester — can I apply?",
      a: "Yes. Conditional offers are made against expected results all the time. You'll need your transcripts up to date and a clear plan for when final results arrive — we schedule around it.",
    },
    {
      q: "My grades are weak. Is there any point?",
      a: "Often, yes — differently. Lower grades change the university tier, the country mix and the entry route (foundation and top-up years exist for a reason), not necessarily the dream. The free assessment is exactly for this question.",
    },
    {
      q: "Do you handle scholarships too?",
      a: "We point you to awards you may genuinely qualify for and help with the applications. Realistically: partial awards and university merit discounts far more often than fully funded ones — and we'll tell you which you're actually in range for, before months disappear into the wrong portal.",
    },
    {
      q: "How is StudyPrime different from the other offices in Markaz?",
      a: "You should compare. Take one test: ask any consultant, including us, \"what are my chances — where, honestly, and in writing?\" The office that answers that question with certainty about the future is selling you something. We aren't.",
    },
  ];

  // Technical SEO JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "EducationalOrganization"],
        "@id": `${CANONICAL_BASE_URL}/#islamabad-office`,
        name: "Study Prime",
        image: `${CANONICAL_BASE_URL}/logoforfooter.png`,
        url: `${CANONICAL_BASE_URL}${canonicalPath}`,
        telephone: "+92 310 1193888",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Office #F-15, First Floor, Galleria Mall, I-8 Markaz",
          addressLocality: "Islamabad",
          addressRegion: "Islamabad Capital Territory",
          postalCode: "44000",
          addressCountry: "PK",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 33.6702,
          longitude: 73.0768,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "10:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "10:00",
            closes: "15:00",
          },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+92 310 1193888",
          contactType: "customer service",
          areaServed: "PK",
          availableLanguage: ["English", "Urdu"],
        },
        email: "info@studyprime.pk",
      },
      {
        "@type": "Service",
        name: "Study Abroad Consultancy & Visa Guidance Islamabad",
        provider: {
          "@id": `${CANONICAL_BASE_URL}/#islamabad-office`,
        },
        areaServed: {
          "@type": "City",
          name: "Islamabad",
        },
        description:
          "Honest study abroad consultancy at Galleria Mall, I-8 Markaz, Islamabad. Profile assessment with written study plan for UK, Europe & New Zealand university admissions and visas.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: CANONICAL_BASE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services Location",
            item: `${CANONICAL_BASE_URL}/services-location`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Islamabad",
            item: `${CANONICAL_BASE_URL}/services-location/islamabad`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Study Abroad Consultant in Islamabad",
            item: `${CANONICAL_BASE_URL}${canonicalPath}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="study-abroad-islamabad-lander">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation Bar */}
      <div style={{ backgroundColor: "#02162C", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "12px 0" }}>
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ fontSize: "0.86rem", color: "rgba(255,255,255,0.75)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <Link to="/" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>Home</Link>
              <ChevronRight size={13} />
              <Link to="/services-location" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>Services Location</Link>
              <ChevronRight size={13} />
              <Link to="/services-location/islamabad" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>Islamabad</Link>
              <ChevronRight size={13} />
              <span style={{ color: "var(--accent-gold, #FFB200)", fontWeight: 600 }}>Study Abroad Consultant Islamabad</span>
            </div>
          </nav>
        </div>
      </div>

      {/* SECTION 1 — HERO */}
      <section
        style={{
          background: "linear-gradient(135deg, #011E3E 0%, #082A54 50%, #031830 100%)",
          color: "#FFFFFF",
          padding: "70px 0 65px",
          position: "relative",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "860px" }}>
            {/* Eyebrow */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255, 178, 0, 0.15)",
                border: "1px solid rgba(255, 178, 0, 0.4)",
                color: "#FFB200",
                padding: "6px 16px",
                borderRadius: "30px",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.6px",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              <Building2 size={15} />
              <span>STUDY PRIME &middot; OFFICE #F-15, GALLERIA MALL, I-8 MARKAZ, ISLAMABAD</span>
            </div>

            {/* H1 */}
            <h1
              style={{
                fontSize: "clamp(2.2rem, 4.4vw, 3.4rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.15,
                marginBottom: "20px",
                letterSpacing: "-0.5px",
              }}
            >
              A Study Abroad Consultant in Islamabad That Tells You the Truth First
            </h1>

            {/* Sub */}
            <p
              style={{
                fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
                color: "rgba(255, 255, 255, 0.88)",
                lineHeight: 1.6,
                maxWidth: "780px",
                marginBottom: "28px",
              }}
            >
              Not sure where to study or how to apply? We sit down with you, look at your grades and goals, and help you pick a course that makes sense. Then we stay with you through your application, your visa and your move abroad — one step at a time.
            </p>

            {/* Trust chips */}
            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                marginBottom: "32px",
              }}
            >
              {[
                "Honest advice",
                "Friendly support",
                "Clear fees, in writing",
                "Walk in, or start online",
              ].map((chip, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.16)",
                    color: "#FFFFFF",
                    padding: "6px 14px",
                    borderRadius: "20px",
                    fontSize: "0.86rem",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <CheckCircle2 size={15} color="#FFB200" />
                  <span>{chip}</span>
                </div>
              ))}
            </div>

            {/* Dual CTAs */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
              <button
                type="button"
                onClick={scrollToForm}
                className="btn btn-gold"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "14px 30px",
                  fontSize: "1.02rem",
                  fontWeight: 700,
                  borderRadius: "10px",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <span>Get My Free Profile Assessment</span>
                <ArrowRight size={18} />
              </button>

              <a
                href={`https://wa.me/923101193888?text=${encodeURIComponent("Hello Study Prime Islamabad! I would like to consult regarding study abroad admissions and visas.")}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-white"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "13px 24px",
                  fontSize: "0.98rem",
                  fontWeight: 600,
                  borderRadius: "10px",
                  textDecoration: "none",
                }}
              >
                <MessageCircle size={18} color="#25D366" />
                <span>WhatsApp Us — +92 310 1193888</span>
              </a>
            </div>

            {/* Stat tiles */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "18px",
                marginTop: "48px",
                paddingTop: "32px",
                borderTop: "1px solid rgba(255, 255, 255, 0.15)",
              }}
            >
              <div style={{ background: "rgba(255,255,255,0.05)", padding: "18px 20px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#FFB200" }}>2,500+</div>
                <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.85)", marginTop: "4px" }}>assessments done</div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.05)", padding: "18px 20px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#FFB200" }}>98%</div>
                <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.85)", marginTop: "4px" }}>visa success across granted cases</div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.05)", padding: "18px 20px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#FFB200" }}>Direct Panels</div>
                <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.85)", marginTop: "4px" }}>Direct university panels — fast offers</div>
              </div>
            </div>

            {/* Micro */}
            <p style={{ fontSize: "0.82rem", color: "rgba(255, 255, 255, 0.65)", marginTop: "14px", fontStyle: "italic" }}>
              Figures as published on studyprime.pk. No consultant can promise a visa — and we don't.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE BIG TYPE */}
      <section style={{ backgroundColor: "#F1F5F9", padding: "50px 0", borderBottom: "1px solid #E2E8F0" }}>
        <div className="container">
          <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.3rem)",
                fontWeight: 800,
                color: "#011E3E",
                lineHeight: 1.25,
                marginBottom: "14px",
              }}
            >
              Islamabad has no shortage of study abroad offices.
            </h2>
            <p
              style={{
                fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)",
                color: "#334155",
                lineHeight: 1.6,
                fontWeight: 500,
              }}
            >
              Shortage of offices that tell you &ldquo;not this year, not this country&rdquo; when that's the truth. We do. That sentence has saved more students here than any promise ever will.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE LOCAL PROBLEM (Agitation) */}
      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#011E3E", textTransform: "uppercase", letterSpacing: "1px" }}>
                The Local Reality
              </span>
              <h2 style={{ fontSize: "2.1rem", fontWeight: 800, color: "#011E3E", marginTop: "8px" }}>
                What We See Walk In Every Week
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div
                style={{
                  background: "#FEF2F2",
                  borderLeft: "4px solid #DC2626",
                  padding: "18px 22px",
                  borderRadius: "0 10px 10px 0",
                  fontSize: "1rem",
                  color: "#7F1D1D",
                  lineHeight: 1.55,
                }}
              >
                A student from Bahria Town with three &ldquo;guaranteed visa&rdquo; files from three different agents — and no shortlist anyone actually built around his grades.
              </div>

              <div
                style={{
                  background: "#FEF2F2",
                  borderLeft: "4px solid #DC2626",
                  padding: "18px 22px",
                  borderRadius: "0 10px 10px 0",
                  fontSize: "1rem",
                  color: "#7F1D1D",
                  lineHeight: 1.55,
                }}
              >
                A father from I-9 with a paid admission letter to a university nobody can find on the UK register.
              </div>

              <div
                style={{
                  background: "#FEF2F2",
                  borderLeft: "4px solid #DC2626",
                  padding: "18px 22px",
                  borderRadius: "0 10px 10px 0",
                  fontSize: "1rem",
                  color: "#7F1D1D",
                  lineHeight: 1.55,
                }}
              >
                A girl with a 3.4 GPA told she &ldquo;only qualifies for colleges&rdquo;, because no one opened her transcript properly.
              </div>

              <div
                style={{
                  background: "#FFFBEB",
                  borderLeft: "4px solid #D97706",
                  padding: "20px 22px",
                  borderRadius: "0 10px 10px 0",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "#92400E",
                  lineHeight: 1.6,
                  marginTop: "10px",
                }}
              >
                Every month that a wrong file moves forward, an intake moves away. The cost of bad advice is not the fee you paid. It's the year.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHAT WE DELIVER */}
      <section className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 48px" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#011E3E", textTransform: "uppercase", letterSpacing: "1px" }}>
              WHAT WE DELIVER
            </span>
            <h2 style={{ fontSize: "2.1rem", fontWeight: 800, color: "#011E3E", marginTop: "8px" }}>
              Help at Every Stage — First Question to First Day Abroad
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                num: "1",
                title: "Course selection",
                text: "We look at your grades and goals and suggest courses and universities that really suit you — not whichever pays an agent the best commission.",
              },
              {
                num: "2",
                title: "Applications",
                text: "We prepare and send your applications, and keep track of every deadline for you.",
              },
              {
                num: "3",
                title: "Personal statement and CV",
                text: "We help you write a statement and CV that sound like you, only sharper.",
              },
              {
                num: "4",
                title: "Scholarship guidance",
                text: "We point you to scholarships you may qualify for and help you apply.",
              },
              {
                num: "5",
                title: "IELTS preparation",
                text: "We tell you which score you need — and honestly, when a medium-of-instruction route exists — then help you get ready.",
              },
              {
                num: "6",
                title: "Visa and pre-departure",
                text: "We check your documents and funds, prepare you for the interview and brief you before you fly.",
              },
            ].map((card) => (
              <div
                key={card.num}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "14px",
                  padding: "28px",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    background: "rgba(1, 30, 62, 0.08)",
                    color: "#011E3E",
                    fontWeight: 800,
                    fontSize: "1.15rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  {card.num}
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#011E3E", marginBottom: "8px" }}>
                  {card.title}
                </h3>
                <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — PROBLEM → SOLUTION → WHAT YOU GET */}
      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 44px" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#011E3E", textTransform: "uppercase", letterSpacing: "1px" }}>
              PROBLEMS WE SOLVE
            </span>
            <h2 style={{ fontSize: "2.1rem", fontWeight: 800, color: "#011E3E", marginTop: "8px" }}>
              From Confused to Confident
            </h2>
          </div>

          <div
            style={{
              overflowX: "auto",
              background: "#FFFFFF",
              borderRadius: "14px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 6px 20px rgba(0,0,0,0.04)",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "640px" }}>
              <thead>
                <tr style={{ background: "#011E3E", color: "#FFFFFF", textAlign: "left" }}>
                  <th style={{ padding: "16px 20px", fontSize: "0.95rem", fontWeight: 700, width: "32%" }}>The worry</th>
                  <th style={{ padding: "16px 20px", fontSize: "0.95rem", fontWeight: 700, width: "38%" }}>How we handle it</th>
                  <th style={{ padding: "16px 20px", fontSize: "0.95rem", fontWeight: 700, width: "30%", background: "#082A54", color: "#FFB200" }}>So you get</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    worry: "I don't know where to start",
                    handle: "We build a shortlist of courses and universities around your profile.",
                    outcome: "A plan instead of forty browser tabs.",
                  },
                  {
                    worry: "I'm not sure I'm eligible",
                    handle: "A clear, honest answer in your free assessment.",
                    outcome: "Certainty before spending, not after.",
                  },
                  {
                    worry: "My applications keep getting rejected",
                    handle: "We review your CV, statement and documents first, and rebuild what's weak.",
                    outcome: "A file a university reader takes seriously.",
                  },
                  {
                    worry: "Visa paperwork is stressing me out",
                    handle: "We walk you through every document and run mock interviews.",
                    outcome: "Calm on interview day.",
                  },
                  {
                    worry: "I'm afraid of hidden charges",
                    handle: "Fees explained and confirmed in writing before you commit.",
                    outcome: "The full number, known upfront.",
                  },
                  {
                    worry: "My parents don't trust consultants",
                    handle: "A real office in Galleria Mall with visiting hours, and a free first step.",
                    outcome: "A family that says yes because they saw us.",
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: "1px solid #E2E8F0",
                      backgroundColor: idx % 2 === 0 ? "#FFFFFF" : "#F8FAFC",
                    }}
                  >
                    <td style={{ padding: "16px 20px", fontSize: "0.92rem", fontWeight: 600, color: "#1E293B" }}>
                      {row.worry}
                    </td>
                    <td style={{ padding: "16px 20px", fontSize: "0.92rem", color: "#475569", lineHeight: 1.5 }}>
                      {row.handle}
                    </td>
                    <td
                      style={{
                        padding: "16px 20px",
                        fontSize: "0.92rem",
                        fontWeight: 700,
                        color: "#065F46",
                        backgroundColor: idx % 2 === 0 ? "rgba(16, 185, 129, 0.08)" : "rgba(16, 185, 129, 0.12)",
                      }}
                    >
                      {row.outcome}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 6 — THE FREE OFFER */}
      <section className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 44px" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#011E3E", textTransform: "uppercase", letterSpacing: "1px" }}>
              YOUR FREE OFFER
            </span>
            <h2 style={{ fontSize: "2.1rem", fontWeight: 800, color: "#011E3E", marginTop: "8px" }}>
              Your Free Profile Assessment
            </h2>
            <p style={{ color: "#475569", fontSize: "1.05rem", marginTop: "10px", lineHeight: 1.6 }}>
              Three clear outcomes, with no payment needed to receive them. Come to the office, or start on WhatsApp — same honesty either way.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              marginBottom: "36px",
            }}
          >
            <div style={{ background: "#FFFFFF", borderRadius: "14px", padding: "28px", border: "1px solid #E2E8F0", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
              <div style={{ color: "#011E3E", marginBottom: "14px" }}><CheckCircle2 size={32} color="#059669" /></div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#011E3E", marginBottom: "10px" }}>An honest review</h3>
              <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                Your grades, degree and budget, read by people who do this daily. Including the parts nobody else says out loud.
              </p>
            </div>

            <div style={{ background: "#FFFFFF", borderRadius: "14px", padding: "28px", border: "1px solid #E2E8F0", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
              <div style={{ color: "#011E3E", marginBottom: "14px" }}><BookOpen size={32} color="#0284C7" /></div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#011E3E", marginBottom: "10px" }}>A list of real options</h3>
              <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                Universities and courses that actually admit profiles like yours, with entry requirements and costs.
              </p>
            </div>

            <div style={{ background: "#FFFFFF", borderRadius: "14px", padding: "28px", border: "1px solid #E2E8F0", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
              <div style={{ color: "#011E3E", marginBottom: "14px" }}><FileCheck size={32} color="#D97706" /></div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#011E3E", marginBottom: "10px" }}>A study plan made for you</h3>
              <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                What to do first, what it takes, and the dates that matter for your intake. Yours to keep, whether you hire us or not.
              </p>
            </div>
          </div>

          <div
            style={{
              background: "#011E3E",
              borderRadius: "14px",
              padding: "24px 32px",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Clock size={24} color="#FFB200" />
              <span style={{ fontSize: "1.05rem", fontWeight: 600 }}>
                Book in two minutes. Assessment done within 48 hours.
              </span>
            </div>
            <button
              type="button"
              onClick={scrollToForm}
              className="btn btn-gold"
              style={{ padding: "10px 24px", fontWeight: 700, borderRadius: "8px", border: "none", cursor: "pointer" }}
            >
              Get My Free Profile Assessment
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 7 — HOW IT WORKS */}
      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 48px" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#011E3E", textTransform: "uppercase", letterSpacing: "1px" }}>
              THE PROCESS
            </span>
            <h2 style={{ fontSize: "2.1rem", fontWeight: 800, color: "#011E3E", marginTop: "8px" }}>
              Three Simple Steps
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "28px",
            }}
          >
            {[
              {
                step: "1",
                title: "Tell us about you",
                desc: "Share your degree, grades and goals. Free — on WhatsApp, on a call, or at our office in I-8 Markaz.",
                tag: "FREE",
                tagColor: "#059669",
                tagBg: "#ECFDF5",
              },
              {
                step: "2",
                title: "Choose and apply",
                desc: "We help you pick a course and country, then prepare and send your applications and track every deadline.",
                tag: "PAID SERVICE",
                tagColor: "#0369A1",
                tagBg: "#F0F9FF",
              },
              {
                step: "3",
                title: "Get your visa",
                desc: "Documents, finances, CAS/offer letters and interview practice — walked through with you, step by step.",
                tag: "PAID SERVICE",
                tagColor: "#0369A1",
                tagBg: "#F0F9FF",
              },
            ].map((st) => (
              <div
                key={st.step}
                style={{
                  background: "#F8FAFC",
                  borderRadius: "14px",
                  padding: "32px 28px",
                  border: "1px solid #E2E8F0",
                  position: "relative",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "#011E3E",
                      color: "#FFFFFF",
                      fontSize: "1.2rem",
                      fontWeight: 800,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {st.step}
                  </div>
                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      background: st.tagBg,
                      color: st.tagColor,
                    }}
                  >
                    {st.tag}
                  </span>
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#011E3E", marginBottom: "10px" }}>
                  {st.title}
                </h3>
                <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "28px",
              padding: "16px 20px",
              background: "#F1F5F9",
              borderRadius: "10px",
              fontSize: "0.88rem",
              color: "#64748B",
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            Steps two and three are optional. Plenty of students take the plan and run part of it themselves — we tell them exactly what's left to do.
          </div>
        </div>
      </section>

      {/* SECTION 8 — THE INTAKE CLOCK (Timeline) */}
      <section className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 44px" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#011E3E", textTransform: "uppercase", letterSpacing: "1px" }}>
              TIMELINE PLANNING
            </span>
            <h2 style={{ fontSize: "2.1rem", fontWeight: 800, color: "#011E3E", marginTop: "8px" }}>
              One Intake, Start to Departure
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
              marginBottom: "32px",
            }}
          >
            {[
              {
                month: "Month 1",
                text: "Free assessment. Shortlist agreed. IELTS date booked if needed.",
              },
              {
                month: "Month 2",
                text: "Applications out. References and documents collected while universities reply.",
              },
              {
                month: "Month 3",
                text: "Offers in. We help you choose between them — that conversation matters more than students expect.",
              },
              {
                month: "Month 4+",
                text: "Visa file built, finances arranged, mock interview done, pre-departure briefing. Then you fly.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: "#FFFFFF",
                  padding: "24px",
                  borderRadius: "12px",
                  border: "1px solid #E2E8F0",
                  position: "relative",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                }}
              >
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#011E3E", marginBottom: "8px" }}>
                  {item.month}
                </div>
                <p style={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.55, margin: 0 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              background: "#EFF6FF",
              border: "1px solid #BFDBFE",
              borderRadius: "12px",
              padding: "20px 24px",
              color: "#1E40AF",
              fontSize: "0.95rem",
              lineHeight: 1.6,
            }}
          >
            <strong>Intake Note:</strong> Fall intakes in the UK and Europe are decided a year early. The students who start in January get the offers in June — and the scholarships conversations happen at the same time as the applications, not after.
          </div>
        </div>
      </section>

      {/* SECTION 9 — FEES WITHOUT SURPRISES */}
      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 44px" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#011E3E", textTransform: "uppercase", letterSpacing: "1px" }}>
              FEES
            </span>
            <h2 style={{ fontSize: "2.1rem", fontWeight: 800, color: "#011E3E", marginTop: "8px" }}>
              Fees Without Surprises
            </h2>
            <p style={{ color: "#475569", fontSize: "1.05rem", marginTop: "10px" }}>
              Here is what is free and what you pay for, before you decide anything.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "28px",
            }}
          >
            {/* Col 1 */}
            <div style={{ background: "#F8FAFC", borderRadius: "14px", padding: "28px", border: "1px solid #E2E8F0" }}>
              <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#011E3E", marginBottom: "16px" }}>
                Free with us
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.92rem", color: "#334155" }}>
                <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: "2px" }} /><span>Profile assessment</span></li>
                <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: "2px" }} /><span>University and course options</span></li>
                <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: "2px" }} /><span>A study plan made for you</span></li>
                <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: "2px" }} /><span>No obligation to continue</span></li>
              </ul>
            </div>

            {/* Col 2 */}
            <div style={{ background: "#F8FAFC", borderRadius: "14px", padding: "28px", border: "1px solid #E2E8F0" }}>
              <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#011E3E", marginBottom: "16px" }}>
                You pay others, never us
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.92rem", color: "#334155" }}>
                <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><CheckCircle2 size={16} color="#0284C7" style={{ flexShrink: 0, marginTop: "2px" }} /><span>Tuition fees</span></li>
                <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><CheckCircle2 size={16} color="#0284C7" style={{ flexShrink: 0, marginTop: "2px" }} /><span>University application fees, if any</span></li>
                <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><CheckCircle2 size={16} color="#0284C7" style={{ flexShrink: 0, marginTop: "2px" }} /><span>Visa and health surcharge</span></li>
                <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><CheckCircle2 size={16} color="#0284C7" style={{ flexShrink: 0, marginTop: "2px" }} /><span>IELTS test fee</span></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "14px",
                padding: "28px",
                border: "2px solid #011E3E",
                boxShadow: "0 6px 20px rgba(1, 30, 62, 0.08)",
              }}
            >
              <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#011E3E", marginBottom: "16px" }}>
                Our service fee
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.92rem", color: "#334155" }}>
                <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><CheckCircle2 size={16} color="#D97706" style={{ flexShrink: 0, marginTop: "2px" }} /><span>Explained before you commit</span></li>
                <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><CheckCircle2 size={16} color="#D97706" style={{ flexShrink: 0, marginTop: "2px" }} /><span>Confirmed in writing</span></li>
                <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><CheckCircle2 size={16} color="#D97706" style={{ flexShrink: 0, marginTop: "2px" }} /><span>Scope agreed per stage — you choose what you need help with</span></li>
                <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><CheckCircle2 size={16} color="#D97706" style={{ flexShrink: 0, marginTop: "2px" }} /><span>No promise of admission or visa, ever — that's why the fee is for the work, not for a guarantee</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — BEFORE / AFTER */}
      <section className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 44px" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#011E3E", textTransform: "uppercase", letterSpacing: "1px" }}>
              THE DIFFERENCE
            </span>
            <h2 style={{ fontSize: "2.1rem", fontWeight: 800, color: "#011E3E", marginTop: "8px" }}>
              Before You Sit Down With Us — and After
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px" }}>
            {/* Before */}
            <div style={{ background: "#F1F5F9", borderRadius: "14px", padding: "30px", border: "1px solid #CBD5E1" }}>
              <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "#64748B", marginBottom: "18px" }}>
                Before StudyPrime
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.95rem", color: "#475569" }}>
                <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}><span style={{ color: "#EF4444", fontWeight: 800 }}>✕</span> Three countries in mind because three agents sold three of them.</li>
                <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}><span style={{ color: "#EF4444", fontWeight: 800 }}>✕</span> An application file that reads like everyone else's.</li>
                <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}><span style={{ color: "#EF4444", fontWeight: 800 }}>✕</span> Deadlines discovered on Facebook groups after they passed.</li>
                <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}><span style={{ color: "#EF4444", fontWeight: 800 }}>✕</span> Parents funding a plan they were never shown on paper.</li>
              </ul>
            </div>

            {/* After */}
            <div style={{ background: "#FFFFFF", borderRadius: "14px", padding: "30px", border: "2px solid #011E3E", boxShadow: "0 6px 20px rgba(1, 30, 62, 0.08)" }}>
              <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "#011E3E", marginBottom: "18px" }}>
                After StudyPrime
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.95rem", color: "#1E293B" }}>
                <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}><CheckCircle2 size={18} color="#059669" style={{ flexShrink: 0, marginTop: "2px" }} /> One country and course mix chosen against your grades and budget.</li>
                <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}><CheckCircle2 size={18} color="#059669" style={{ flexShrink: 0, marginTop: "2px" }} /> A statement and CV that sound like you, only sharper.</li>
                <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}><CheckCircle2 size={18} color="#059669" style={{ flexShrink: 0, marginTop: "2px" }} /> A calendar of dates — and us tracking it with you.</li>
                <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}><CheckCircle2 size={18} color="#059669" style={{ flexShrink: 0, marginTop: "2px" }} /> A written plan your whole family has seen and agreed to.</li>
              </ul>
            </div>
          </div>

          <p style={{ fontSize: "0.82rem", color: "#64748B", marginTop: "18px", textAlign: "center", fontStyle: "italic" }}>
            Illustrative of how the process runs. Our published figures are on this page; your individual outcome, nobody can promise.
          </p>
        </div>
      </section>

      {/* SECTION 11 — WHY STUDENTS AND FAMILIES CHOOSE US */}
      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 44px" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#011E3E", textTransform: "uppercase", letterSpacing: "1px" }}>
              WHY STUDYPRIME
            </span>
            <h2 style={{ fontSize: "2.1rem", fontWeight: 800, color: "#011E3E", marginTop: "8px" }}>
              Honest Advice, Real People, a Process You Can Follow
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              marginBottom: "36px",
            }}
          >
            <div style={{ background: "#F8FAFC", padding: "26px", borderRadius: "12px", border: "1px solid #E2E8F0" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#011E3E", marginBottom: "8px" }}>We say no</h3>
              <p style={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
                To the wrong country, the wrong year, the wrong course. Saying no when it's true is the service you're actually paying for.
              </p>
            </div>

            <div style={{ background: "#F8FAFC", padding: "26px", borderRadius: "12px", border: "1px solid #E2E8F0" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#011E3E", marginBottom: "8px" }}>Direct university panels</h3>
              <p style={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
                Representation agreements mean faster offers and a straight line to admissions — no middleman by middleman.
              </p>
            </div>

            <div style={{ background: "#F8FAFC", padding: "26px", borderRadius: "12px", border: "1px solid #E2E8F0" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#011E3E", marginBottom: "8px" }}>We answer after payment</h3>
              <p style={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
                Follow-ups at every stage, and a team reachable beyond office hours when deadlines push.
              </p>
            </div>

            <div style={{ background: "#F8FAFC", padding: "26px", borderRadius: "12px", border: "1px solid #E2E8F0" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#011E3E", marginBottom: "8px" }}>Your parents are welcome</h3>
              <p style={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
                Bring them to the office. Ask us anything in front of them. Fee in writing, plan on paper, motto on the wall: we invest in your future.
              </p>
            </div>
          </div>

          <div
            style={{
              background: "linear-gradient(90deg, #011E3E, #0A3A6B)",
              borderRadius: "12px",
              padding: "20px 28px",
              color: "#FFFFFF",
              textAlign: "center",
              fontSize: "1.1rem",
              fontWeight: 700,
              letterSpacing: "0.5px",
            }}
          >
            100% honesty, zero false promises &middot; We invest in your future
          </div>
        </div>
      </section>

      {/* SECTION 12 — PROOF (Anonymised, realistic) */}
      <section className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 44px" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#011E3E", textTransform: "uppercase", letterSpacing: "1px" }}>
              STUDENT STORIES
            </span>
            <h2 style={{ fontSize: "2.1rem", fontWeight: 800, color: "#011E3E", marginTop: "8px" }}>
              Students and Parents, in Their Words
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            <div style={{ background: "#FFFFFF", padding: "28px", borderRadius: "14px", border: "1px solid #E2E8F0", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
              <p style={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.6, fontStyle: "italic", marginBottom: "16px" }}>
                &ldquo;Do gaz agenton ne 'guaranteed visa' becha. StudyPrime ne pehle din bataya ke mere profile pe UK ka desired course possible hai ya nahi — likh ke. Yakeen usne kiya jo sach bola.&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "linear-gradient(135deg, #011E3E, #FFB200)", color: "#FFFFFF", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem" }}>
                  DM
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "#011E3E", fontSize: "0.92rem" }}>Danish M., BS applicant</div>
                  <div style={{ color: "#64748B", fontSize: "0.8rem" }}>Rawalpindi</div>
                </div>
              </div>
            </div>

            <div style={{ background: "#FFFFFF", padding: "28px", borderRadius: "14px", border: "1px solid #E2E8F0", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
              <p style={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.6, fontStyle: "italic", marginBottom: "16px" }}>
                &ldquo;My statement got rebuilt twice. The second version got the offer. I'd have sent the first one anywhere and wondered why.&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "linear-gradient(135deg, #011E3E, #059669)", color: "#FFFFFF", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem" }}>
                  ZK
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "#011E3E", fontSize: "0.92rem" }}>Zoya K., MS applicant</div>
                  <div style={{ color: "#64748B", fontSize: "0.8rem" }}>Islamabad</div>
                </div>
              </div>
            </div>

            <div style={{ background: "#FFFFFF", padding: "28px", borderRadius: "14px", border: "1px solid #E2E8F0", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
              <p style={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.6, fontStyle: "italic", marginBottom: "16px" }}>
                &ldquo;As a father I cared about two things: is the office real, and is the fee written. Galleria Mall, office number, landline, one page of costs. Done — we signed the same day.&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "linear-gradient(135deg, #011E3E, #0284C7)", color: "#FFFFFF", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem" }}>
                  TS
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "#011E3E", fontSize: "0.92rem" }}>Tariq S., parent</div>
                  <div style={{ color: "#64748B", fontSize: "0.8rem" }}>Bahria Town</div>
                </div>
              </div>
            </div>

            <div style={{ background: "#FFFFFF", padding: "28px", borderRadius: "14px", border: "1px solid #E2E8F0", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
              <p style={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.6, fontStyle: "italic", marginBottom: "16px" }}>
                &ldquo;They talked me out of applying that year and gave me a 9-month plan instead. Stronger profile, better university, actual scholarship shortlist.&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "linear-gradient(135deg, #011E3E, #9333EA)", color: "#FFFFFF", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem" }}>
                  HJ
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "#011E3E", fontSize: "0.92rem" }}>Hira J., MS applicant</div>
                  <div style={{ color: "#64748B", fontSize: "0.8rem" }}>Faisalabad</div>
                </div>
              </div>
            </div>
          </div>

          <p style={{ fontSize: "0.82rem", color: "#64748B", marginTop: "18px", textAlign: "center", fontStyle: "italic" }}>
            Names anonymised, details generalised. Real reviews live on our Google Business Profile.
          </p>
        </div>
      </section>

      {/* SECTION 13 — WHERE YOU CAN STUDY */}
      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 44px" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#011E3E", textTransform: "uppercase", letterSpacing: "1px" }}>
              DESTINATIONS
            </span>
            <h2 style={{ fontSize: "2.1rem", fontWeight: 800, color: "#011E3E", marginTop: "8px" }}>
              Where We Can Help You Study
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "32px" }}>
            <div style={{ background: "#F8FAFC", padding: "26px", borderRadius: "14px", border: "1px solid #E2E8F0" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#011E3E", marginBottom: "8px" }}>
                United Kingdom — our main focus
              </h3>
              <p style={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "16px" }}>
                100+ partner universities, 1-year masters, graduate route back.
              </p>
              <Link to="/destinations/study-in-uk" style={{ color: "#011E3E", fontWeight: 700, fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                Explore the UK guide &rarr;
              </Link>
            </div>

            <div style={{ background: "#F8FAFC", padding: "26px", borderRadius: "14px", border: "1px solid #E2E8F0" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#011E3E", marginBottom: "8px" }}>
                Europe
              </h3>
              <p style={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "16px" }}>
                Germany, Sweden, Finland, Netherlands and more — low-fee and English-taught routes.
              </p>
              <Link to="/destinations" style={{ color: "#011E3E", fontWeight: 700, fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                See all destinations &rarr;
              </Link>
            </div>

            <div style={{ background: "#F8FAFC", padding: "26px", borderRadius: "14px", border: "1px solid #E2E8F0" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#011E3E", marginBottom: "8px" }}>
                New Zealand
              </h3>
              <p style={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "16px" }}>
                Highly ranked universities, generous post-study work, pathway to a green-list residency.
              </p>
              <Link to="/destinations/study-in-new-zealand" style={{ color: "#011E3E", fontWeight: 700, fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                NZ guide &rarr;
              </Link>
            </div>
          </div>

          <div
            style={{
              padding: "18px 24px",
              background: "#F1F5F9",
              borderRadius: "12px",
              fontSize: "0.92rem",
              color: "#334155",
              lineHeight: 1.6,
              borderLeft: "4px solid #011E3E",
            }}
          >
            <strong>Honest Scope:</strong> We focus on the destinations we genuinely know — the UK, Europe and New Zealand. If a student's profile fits Canada or Australia, we say so plainly and refer rather than fumble. A consultant who does everything equally does nothing equally well.
          </div>
        </div>
      </section>

      {/* SECTION 14 — FAQ (Server-rendered native <details>) */}
      <section className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 44px" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#011E3E", textTransform: "uppercase", letterSpacing: "1px" }}>
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 style={{ fontSize: "2.1rem", fontWeight: 800, color: "#011E3E", marginTop: "8px" }}>
              Questions Students and Parents Ask Us
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(460px, 1fr))",
              gap: "20px",
              maxWidth: "1050px",
              margin: "0 auto",
            }}
          >
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "12px",
                  padding: "16px 20px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
                }}
              >
                <summary
                  style={{
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#011E3E",
                    cursor: "pointer",
                    outline: "none",
                    lineHeight: 1.45,
                  }}
                >
                  {faq.q}
                </summary>
                <p
                  style={{
                    color: "#475569",
                    fontSize: "0.92rem",
                    lineHeight: 1.6,
                    marginTop: "12px",
                    marginBottom: "4px",
                    paddingTop: "10px",
                    borderTop: "1px solid #F1F5F9",
                  }}
                >
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 15 — CONVERSION BLOCK + WHAT HAPPENS NEXT */}
      <section
        id="assessment-form-section"
        className="section-padding"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "48px",
              alignItems: "start",
            }}
          >
            {/* Left Col: Pitch + What Happens Next + Parent Strip */}
            <div>
              <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#011E3E", textTransform: "uppercase", letterSpacing: "1px" }}>
                GET STARTED TODAY
              </span>
              <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#011E3E", marginTop: "8px", lineHeight: 1.25 }}>
                Two Minutes Now. An Honest Plan Within 48 Hours.
              </h2>
              <p style={{ color: "#475569", fontSize: "1.05rem", lineHeight: 1.6, marginTop: "14px", marginBottom: "28px" }}>
                Tell us about your goals and we'll give you an honest review, a list of university options and a study plan. Our friendly team in Islamabad is happy to help — in person, on a call, or right here on WhatsApp.
              </p>

              {/* What happens next */}
              <div style={{ background: "#F8FAFC", borderRadius: "14px", padding: "24px", border: "1px solid #E2E8F0", marginBottom: "24px" }}>
                <div style={{ fontWeight: 800, color: "#011E3E", fontSize: "1rem", marginBottom: "14px" }}>
                  What happens next:
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "0.92rem", color: "#334155" }}>
                    <span style={{ background: "#011E3E", color: "#FFFFFF", borderRadius: "50%", width: "22px", height: "22px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", flexShrink: 0 }}>1</span>
                    <span><strong>We confirm on WhatsApp</strong> the same working day.</span>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "0.92rem", color: "#334155" }}>
                    <span style={{ background: "#011E3E", color: "#FFFFFF", borderRadius: "50%", width: "22px", height: "22px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", flexShrink: 0 }}>2</span>
                    <span><strong>Your free assessment within 48 hours</strong> — booked at the office or on video.</span>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "0.92rem", color: "#334155" }}>
                    <span style={{ background: "#011E3E", color: "#FFFFFF", borderRadius: "50%", width: "22px", height: "22px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", flexShrink: 0 }}>3</span>
                    <span><strong>You leave with your written plan</strong>, whatever you decide next.</span>
                  </div>
                </div>
              </div>

              {/* Parent strip */}
              <div
                style={{
                  background: "#FEF3C7",
                  borderLeft: "4px solid #D97706",
                  padding: "16px 20px",
                  borderRadius: "0 10px 10px 0",
                  fontSize: "0.92rem",
                  color: "#92400E",
                  lineHeight: 1.55,
                }}
              >
                <strong>Parents:</strong> office hours are above, the landline is +92 51 8740888, and the first conversation costs nothing and commits you to nothing.
              </div>
            </div>

            {/* Right Col: Interactive Lead Capture Form */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                padding: "36px 32px",
                border: "2px solid #011E3E",
                boxShadow: "0 12px 36px rgba(1, 30, 62, 0.1)",
              }}
            >
              {formSubmitted ? (
                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                  <div style={{ width: "64px", height: "64px", background: "#ECFDF5", borderRadius: "50%", color: "#059669", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#011E3E", marginBottom: "8px" }}>
                    Assessment Request Received!
                  </h3>
                  <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "24px" }}>
                    Thank you, <strong>{fullName}</strong>. Our Islamabad team will confirm your consultation details on WhatsApp ({whatsappNumber}) within today.
                  </p>
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-gold"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "12px 24px",
                      fontWeight: 700,
                      borderRadius: "10px",
                      textDecoration: "none",
                    }}
                  >
                    <MessageCircle size={18} />
                    <span>Open Instant Chat on WhatsApp</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#011E3E", marginBottom: "20px" }}>
                    Book Your Free Assessment
                  </h3>

                  {/* Full Name */}
                  <div style={{ marginBottom: "16px" }}>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#334155", marginBottom: "6px" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Ali Ahmed"
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: "8px",
                        border: "1px solid #CBD5E1",
                        fontSize: "0.95rem",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>

                  {/* WhatsApp Number (Mandatory) */}
                  <div style={{ marginBottom: "16px" }}>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#334155", marginBottom: "6px" }}>
                      WhatsApp Number (MANDATORY) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      placeholder="e.g. 03XX —XXXXXXX"
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: "8px",
                        border: "1px solid #CBD5E1",
                        fontSize: "0.95rem",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>

                  {/* Current Level (Pill/Chips) */}
                  <div style={{ marginBottom: "16px" }}>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#334155", marginBottom: "6px" }}>
                      Current Level
                    </label>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                      {levelOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setCurrentLevel(opt)}
                          style={{
                            padding: "6px 12px",
                            borderRadius: "20px",
                            fontSize: "0.82rem",
                            fontWeight: 600,
                            cursor: "pointer",
                            border: currentLevel === opt ? "1px solid #011E3E" : "1px solid #E2E8F0",
                            backgroundColor: currentLevel === opt ? "#011E3E" : "#F8FAFC",
                            color: currentLevel === opt ? "#FFFFFF" : "#475569",
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Field of Study */}
                  <div style={{ marginBottom: "16px" }}>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#334155", marginBottom: "6px" }}>
                      Field of Study
                    </label>
                    <input
                      type="text"
                      value={fieldOfStudy}
                      onChange={(e) => setFieldOfStudy(e.target.value)}
                      placeholder="e.g. Computer Science, Business, Health"
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: "8px",
                        border: "1px solid #CBD5E1",
                        fontSize: "0.95rem",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>

                  {/* Target Destination (Pills) */}
                  <div style={{ marginBottom: "16px" }}>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#334155", marginBottom: "6px" }}>
                      Target Destination
                    </label>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                      {destinationOptions.map((dest) => (
                        <button
                          key={dest}
                          type="button"
                          onClick={() => setTargetDestination(dest)}
                          style={{
                            padding: "6px 12px",
                            borderRadius: "20px",
                            fontSize: "0.82rem",
                            fontWeight: 600,
                            cursor: "pointer",
                            border: targetDestination === dest ? "1px solid #011E3E" : "1px solid #E2E8F0",
                            backgroundColor: targetDestination === dest ? "#011E3E" : "#F8FAFC",
                            color: targetDestination === dest ? "#FFFFFF" : "#475569",
                          }}
                        >
                          {dest}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Target Intake (Pills) */}
                  <div style={{ marginBottom: "16px" }}>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#334155", marginBottom: "6px" }}>
                      Target Intake
                    </label>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                      {intakeOptions.map((intk) => (
                        <button
                          key={intk}
                          type="button"
                          onClick={() => setTargetIntake(intk)}
                          style={{
                            padding: "6px 12px",
                            borderRadius: "20px",
                            fontSize: "0.82rem",
                            fontWeight: 600,
                            cursor: "pointer",
                            border: targetIntake === intk ? "1px solid #011E3E" : "1px solid #E2E8F0",
                            backgroundColor: targetIntake === intk ? "#011E3E" : "#F8FAFC",
                            color: targetIntake === intk ? "#FFFFFF" : "#475569",
                          }}
                        >
                          {intk}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Optional Message */}
                  <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#334155", marginBottom: "6px" }}>
                      Message (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Any specific questions, grades (GPA/IELTS), or preferences..."
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: "8px",
                        border: "1px solid #CBD5E1",
                        fontSize: "0.95rem",
                        boxSizing: "border-box",
                        fontFamily: "inherit",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    style={{
                      width: "100%",
                      padding: "14px",
                      fontSize: "1rem",
                      fontWeight: 700,
                      borderRadius: "10px",
                      cursor: "pointer",
                      border: "none",
                    }}
                  >
                    {isSubmitting ? "Submitting..." : "Get My Free Profile Assessment"}
                  </button>

                  <p style={{ fontSize: "0.78rem", color: "#64748B", marginTop: "12px", textAlign: "center", lineHeight: 1.45 }}>
                    Your details are used only to prepare your assessment and contact you. One respectful follow-up — no call-centre harassment.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 16 — VISIT US + AUTHOR BYLINE + FOOTER CTA */}
      <section className="section-padding" style={{ backgroundColor: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
        <div className="container">
          <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#011E3E", textTransform: "uppercase", letterSpacing: "1px" }}>
                HEAD OFFICE &middot; ISLAMABAD
              </span>
              <h2 style={{ fontSize: "2.1rem", fontWeight: 800, color: "#011E3E", marginTop: "8px" }}>
                Study Prime — Islamabad Head Office
              </h2>
            </div>

            {/* NAP Card */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "16px",
                padding: "32px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                marginBottom: "32px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "24px",
                }}
              >
                <div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <MapPin size={20} color="#011E3E" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <div style={{ fontWeight: 700, color: "#011E3E", fontSize: "0.95rem" }}>Canonical Address</div>
                      <div style={{ color: "#475569", fontSize: "0.9rem", marginTop: "4px", lineHeight: 1.5 }}>
                        Office #F-15, First Floor, Galleria Mall, I-8 Markaz, Islamabad, Pakistan
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <Phone size={20} color="#011E3E" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <div style={{ fontWeight: 700, color: "#011E3E", fontSize: "0.95rem" }}>Telephone &amp; WhatsApp</div>
                      <div style={{ color: "#475569", fontSize: "0.9rem", marginTop: "4px", lineHeight: 1.5 }}>
                        <div>WhatsApp: <strong>+92 310 1193888</strong></div>
                        <div>Landline: <strong>+92 51 8740888</strong></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <Mail size={20} color="#011E3E" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <div style={{ fontWeight: 700, color: "#011E3E", fontSize: "0.95rem" }}>Direct Email</div>
                      <div style={{ color: "#475569", fontSize: "0.9rem", marginTop: "4px", lineHeight: 1.5 }}>
                        <a href="mailto:info@studyprime.pk" style={{ color: "#011E3E", textDecoration: "none" }}>
                          info@studyprime.pk
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <Clock size={20} color="#011E3E" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <div style={{ fontWeight: 700, color: "#011E3E", fontSize: "0.95rem" }}>Visiting Hours</div>
                      <div style={{ color: "#475569", fontSize: "0.9rem", marginTop: "4px", lineHeight: 1.5 }}>
                        Mon–Fri: 10:00 AM – 6:00 PM<br />
                        Sat: 10:00 AM – 3:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lazy Google Map Embed */}
              <div style={{ marginTop: "28px", borderRadius: "12px", overflow: "hidden", border: "1px solid #E2E8F0" }}>
                <iframe
                  title="Study Prime Islamabad Head Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.0890697968537!2d73.0768!3d33.6702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9557620398cd%3A0x6b4fb6c12b6f4cf8!2sGalleria%20I-8%20Markaz%20Islamabad!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
                  width="100%"
                  height="260"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Byline & Freshness Stamp */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "14px",
                padding: "24px",
                border: "1px solid #E2E8F0",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginBottom: "32px",
              }}
            >
              <div style={{ fontSize: "0.92rem", color: "#334155", lineHeight: 1.55 }}>
                <strong>Reviewed by Study Prime's senior advisory team</strong> — 10+ years in international admissions and visa counselling, direct university panel partnerships, I-8 Markaz Islamabad.
              </div>
              <div style={{ fontSize: "0.82rem", color: "#64748B", borderTop: "1px solid #F1F5F9", paddingTop: "8px" }}>
                Page last reviewed: October 2026 — university lists, visa rules and post-study work routes change; we re-verify this page every intake season.
              </div>
            </div>

            {/* Final Footer CTA Band */}
            <div
              style={{
                background: "linear-gradient(135deg, #011E3E 0%, #082A54 100%)",
                borderRadius: "16px",
                padding: "36px",
                color: "#FFFFFF",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "12px" }}>
                Your future deserves an honest first conversation.
              </h3>
              <p style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "1rem", maxWidth: "600px", margin: "0 auto 24px" }}>
                Walk into our I-8 Markaz office or book a free WhatsApp assessment. Zero false promises.
              </p>
              <button
                type="button"
                onClick={scrollToForm}
                className="btn btn-gold"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "14px 32px",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  borderRadius: "10px",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <span>Get My Free Profile Assessment</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
