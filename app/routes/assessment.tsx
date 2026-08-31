import { useState } from "react";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { 
  CheckCircle2, 
  GraduationCap, 
  Globe2, 
  Award, 
  Send, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck,
  ArrowRight,
  FileCheck,
  Building2,
  Sparkles
} from "lucide-react";
import { siteConfig, destinations } from "~/data/siteData";

export const meta: MetaFunction = () => {
  return [
    { title: "Free Study Abroad & Visa Assessment | Study Prime" },
    {
      name: "description",
      content:
        "Get a free personalized evaluation of your university admission eligibility, merit scholarship opportunities, and visa success probability from Study Prime specialists.",
    },
  ];
};

export default function AssessmentPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    currentEducation: "bachelor",
    majorSubject: "",
    gradeScore: "",
    passingYear: "2024",
    targetDegree: "master",
    targetCountry: "United Kingdom",
    targetIntake: "September / Fall 2026",
    englishTest: "none_yet",
    englishScore: "",
    budgetRange: "10k-18k",
    needScholarship: "yes",
    hasRefusal: "no",
    studyGap: "no",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="assessment-page-wrapper">
      {/* ── 1. Hero Banner ── */}
      <section className="assessment-hero-strip">
        <div className="container">
          <div className="assessment-hero-inner">
            <div className="section-eyebrow section-eyebrow-gold">
              <span className="eyebrow-dot" />
              100% Free Initial Evaluation
            </div>

            <h1 className="assessment-hero-title">
              Free Study Abroad &amp;{" "}
              <span className="heading-accent">Visa Assessment</span>
            </h1>
            <span className="section-heading-underline" />

            <p className="assessment-hero-desc">
              Submit your academic profile and study goals. Our senior counselors evaluate your grades, match you with verified partner universities, check scholarship eligibility, and guide your visa pathway.
            </p>

            {/* Trust Badges */}
            <div className="assessment-trust-pills-row">
              <div className="assessment-trust-pill">
                <CheckCircle2 size={16} color="#10B981" />
                <span>450+ Partner Universities</span>
              </div>
              <div className="assessment-trust-pill">
                <CheckCircle2 size={16} color="#10B981" />
                <span>98.4% Visa Success Rate</span>
              </div>
              <div className="assessment-trust-pill">
                <CheckCircle2 size={16} color="#10B981" />
                <span>Personalized Counselor Review in 24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Assessment Form & Overview ── */}
      <section className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container">
          {submitted ? (
            <div className="assessment-success-card">
              <div className="assessment-success-icon-wrap">
                <CheckCircle2 size={56} color="#10B981" />
              </div>
              <h2 className="assessment-success-title">Assessment Request Received!</h2>
              <p className="assessment-success-desc">
                Thank you, <strong>{formData.fullName || "Student"}</strong>. Our dedicated admissions team has received your profile for <strong>{formData.targetCountry}</strong> ({formData.targetDegree === "master" ? "Master's Degree" : "Bachelor's Degree"}).
              </p>

              <div className="assessment-success-box">
                <h4 style={{ color: "#0B1B3A", marginBottom: "8px", fontWeight: 800 }}>Next Steps:</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, textAlign: "left", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.92rem", color: "#475569" }}>
                    <CheckCircle2 size={16} color="#FFA700" /> A senior education counselor will review your grades and shortlisted institutions.
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.92rem", color: "#475569" }}>
                    <CheckCircle2 size={16} color="#FFA700" /> We will contact you via WhatsApp ({formData.phone}) or Email ({formData.email}) within 24 business hours.
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.92rem", color: "#475569" }}>
                    <CheckCircle2 size={16} color="#FFA700" /> You will receive estimated tuition fee budgets and applicable scholarship options.
                  </li>
                </ul>
              </div>

              <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hi%20Study%20Prime,%20I%20just%20submitted%20my%20Free%20Assessment%20for%20${encodeURIComponent(formData.targetCountry)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                >
                  <span>Connect Directly on WhatsApp</span>
                  <ArrowRight size={16} />
                </a>
                <Link to="/" className="btn btn-outline">
                  Return to Homepage
                </Link>
              </div>
            </div>
          ) : (
            <div className="assessment-layout-grid">
              {/* Left Column: Form */}
              <div className="assessment-form-card">
                <div className="assessment-form-header">
                  <h2 className="assessment-form-title">Student Profile Assessment Form</h2>
                  <p className="assessment-form-subtitle">
                    Please provide accurate details so our advisory committee can evaluate your admission options effectively.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="assessment-form-body">
                  {/* Part 1: Contact Information */}
                  <div className="form-section-block">
                    <h3 className="form-section-heading">
                      <span className="step-num">1</span>
                      Personal &amp; Contact Information
                    </h3>
                    <div className="form-row-2col">
                      <div className="form-group">
                        <label htmlFor="fullName">Full Name (as per Passport) *</label>
                        <input
                          id="fullName"
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Muhammad Ali"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. name@example.com"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-row-2col">
                      <div className="form-group">
                        <label htmlFor="phone">WhatsApp / Contact Number *</label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +92 300 1234567"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="city">City of Residence *</label>
                        <input
                          id="city"
                          type="text"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="e.g. Islamabad, Lahore, Karachi"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Part 2: Academic History */}
                  <div className="form-section-block">
                    <h3 className="form-section-heading">
                      <span className="step-num">2</span>
                      Academic Background
                    </h3>
                    <div className="form-row-2col">
                      <div className="form-group">
                        <label htmlFor="currentEducation">Highest Completed Education *</label>
                        <select
                          id="currentEducation"
                          name="currentEducation"
                          value={formData.currentEducation}
                          onChange={handleChange}
                          className="form-control"
                        >
                          <option value="matric_olevel">Matric / O-Levels</option>
                          <option value="inter_alevel">Intermediate / F.Sc / ICS / A-Levels</option>
                          <option value="bachelor">Bachelor's Degree (4 Years / BS)</option>
                          <option value="bachelor_2yr">Bachelor's Degree (2 Years / BA/BSc)</option>
                          <option value="master">Master's / MS / MPhil Degree</option>
                          <option value="diploma">Associate Degree / Polytech Diploma</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="majorSubject">Major Subject / Discipline *</label>
                        <input
                          id="majorSubject"
                          type="text"
                          name="majorSubject"
                          required
                          value={formData.majorSubject}
                          onChange={handleChange}
                          placeholder="e.g. Computer Science, Pre-Medical, BBA"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-row-2col">
                      <div className="form-group">
                        <label htmlFor="gradeScore">CGPA / Percentage / Grade *</label>
                        <input
                          id="gradeScore"
                          type="text"
                          name="gradeScore"
                          required
                          value={formData.gradeScore}
                          onChange={handleChange}
                          placeholder="e.g. 3.2 CGPA or 76%"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="passingYear">Year of Completion *</label>
                        <select
                          id="passingYear"
                          name="passingYear"
                          value={formData.passingYear}
                          onChange={handleChange}
                          className="form-control"
                        >
                          <option value="2026">2026 (Upcoming / Result Awaiting)</option>
                          <option value="2025">2025</option>
                          <option value="2024">2024</option>
                          <option value="2023">2023</option>
                          <option value="2022">2022</option>
                          <option value="2021">2021 or earlier</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Part 3: Study Abroad Ambitions */}
                  <div className="form-section-block">
                    <h3 className="form-section-heading">
                      <span className="step-num">3</span>
                      Study Preferences &amp; Target Destination
                    </h3>
                    <div className="form-row-2col">
                      <div className="form-group">
                        <label htmlFor="targetDegree">Desired Degree Level *</label>
                        <select
                          id="targetDegree"
                          name="targetDegree"
                          value={formData.targetDegree}
                          onChange={handleChange}
                          className="form-control"
                        >
                          <option value="master">Master's / Postgraduate Degree (MSc / MA / MBA)</option>
                          <option value="bachelor">Undergraduate / Bachelor's Degree (BSc / BA / BEng)</option>
                          <option value="phd">PhD / Doctoral Research</option>
                          <option value="pathway">Foundation / Pre-Master's Pathway</option>
                          <option value="language">Language School / Short Course</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="targetCountry">Primary Target Country *</label>
                        <select
                          id="targetCountry"
                          name="targetCountry"
                          value={formData.targetCountry}
                          onChange={handleChange}
                          className="form-control"
                        >
                          <option value="United Kingdom">United Kingdom (UK)</option>
                          <option value="United States">United States (USA)</option>
                          <option value="Australia">Australia</option>
                          <option value="Canada">Canada</option>
                          <option value="Germany">Germany</option>
                          <option value="Ireland">Ireland</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Sweden">Sweden</option>
                          <option value="Malta">Malta</option>
                          <option value="Cyprus">Cyprus</option>
                          <option value="Hungary">Hungary</option>
                          <option value="Czech Republic">Czech Republic</option>
                          <option value="Japan">Japan</option>
                          <option value="UAE / Dubai">United Arab Emirates (Dubai)</option>
                          <option value="Other">Other European / Global Destination</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-row-2col">
                      <div className="form-group">
                        <label htmlFor="targetIntake">Target Intake *</label>
                        <select
                          id="targetIntake"
                          name="targetIntake"
                          value={formData.targetIntake}
                          onChange={handleChange}
                          className="form-control"
                        >
                          <option value="September / Fall 2026">September / Fall 2026</option>
                          <option value="January / Spring 2027">January / Spring 2027</option>
                          <option value="May / Summer 2027">May / Summer 2027</option>
                          <option value="Flexible">Earliest Available Intake</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="englishTest">English Language Test Status</label>
                        <select
                          id="englishTest"
                          name="englishTest"
                          value={formData.englishTest}
                          onChange={handleChange}
                          className="form-control"
                        >
                          <option value="ielts_taken">IELTS (Completed)</option>
                          <option value="pte_taken">PTE Academic (Completed)</option>
                          <option value="duolingo_taken">Duolingo English Test (Completed)</option>
                          <option value="moi_waiver">Seeking MOI (Medium of Instruction) Waiver</option>
                          <option value="planning_to_take">Planning to Take Test Soon</option>
                          <option value="none_yet">No English Test Yet</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Part 4: Budget & Special Requirements */}
                  <div className="form-section-block">
                    <h3 className="form-section-heading">
                      <span className="step-num">4</span>
                      Budget &amp; Additional Information
                    </h3>
                    <div className="form-row-2col">
                      <div className="form-group">
                        <label htmlFor="budgetRange">Estimated Annual Tuition Budget</label>
                        <select
                          id="budgetRange"
                          name="budgetRange"
                          value={formData.budgetRange}
                          onChange={handleChange}
                          className="form-control"
                        >
                          <option value="under_10k">Affordable (Under $10,000 / £8,000)</option>
                          <option value="10k-18k">Moderate ($10,000 - $18,000 / £9,000 - £15,000)</option>
                          <option value="18k-25k">Standard ($18,000 - $25,000 / £15,000 - £20,000)</option>
                          <option value="above_25k">High / Top-Ranked ($25,000+ / £20,000+)</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="needScholarship">Interested in Merit Scholarships?</label>
                        <select
                          id="needScholarship"
                          name="needScholarship"
                          value={formData.needScholarship}
                          onChange={handleChange}
                          className="form-control"
                        >
                          <option value="yes">Yes, maximize scholarship opportunities</option>
                          <option value="no">No, self-funded</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="notes">Any Special Circumstances or Questions?</label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Mention any study gaps, previous visa refusals, preferred universities, or specific career goals..."
                        className="form-control"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-submit-assessment"
                  >
                    <Send size={18} />
                    <span>Submit Free Profile Assessment</span>
                  </button>
                </form>
              </div>

              {/* Right Column: Advisory Highlights & Contact */}
              <aside className="assessment-sidebar">
                <div className="assessment-sidebar-card highlight-box">
                  <h3 className="sidebar-title">
                    <Sparkles size={20} color="#FFA700" />
                    What Happens After You Submit?
                  </h3>
                  <div className="sidebar-process-steps">
                    <div className="sidebar-step-item">
                      <div className="step-badge">1</div>
                      <div>
                        <strong>Transcript Evaluation</strong>
                        <p>Our counselor checks your grades against minimum entry requirements for your destination.</p>
                      </div>
                    </div>
                    <div className="sidebar-step-item">
                      <div className="step-badge">2</div>
                      <div>
                        <strong>University Shortlisting</strong>
                        <p>We filter through 450+ partner universities to find programs matching your budget.</p>
                      </div>
                    </div>
                    <div className="sidebar-step-item">
                      <div className="step-badge">3</div>
                      <div>
                        <strong>1-on-1 Consultation</strong>
                        <p>We discuss your offer letters, CAS/I-20 readiness, and step-by-step visa documentation.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="assessment-sidebar-card contact-box">
                  <h3 className="sidebar-title">Prefer to Speak Directly?</h3>
                  <p style={{ fontSize: "0.9rem", color: "#64748B", marginBottom: "18px" }}>
                    Our office in Islamabad is open Monday to Saturday for walk-in and booked counseling sessions.
                  </p>
                  
                  <div className="sidebar-contact-list">
                    <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`} className="sidebar-contact-link">
                      <Phone size={16} color="#0B1B3A" />
                      <span>{siteConfig.contact.phone}</span>
                    </a>
                    <a href={`mailto:${siteConfig.contact.email}`} className="sidebar-contact-link">
                      <Mail size={16} color="#0B1B3A" />
                      <span>{siteConfig.contact.email}</span>
                    </a>
                    <div className="sidebar-contact-link">
                      <Clock size={16} color="#0B1B3A" />
                      <span>{siteConfig.contact.timing}</span>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
