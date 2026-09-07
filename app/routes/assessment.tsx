import { useState, useMemo, useEffect } from "react";
import type { MetaFunction, ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useFetcher } from "@remix-run/react";
import { 
  CheckCircle2, 
  GraduationCap, 
  Globe2, 
  Award, 
  Calendar, 
  Clock, 
  MapPin, 
  Video, 
  Building2, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft, 
  FileCheck, 
  Sparkles, 
  Phone, 
  PhoneCall,
  Mail, 
  HelpCircle, 
  UserCheck, 
  ChevronLeft, 
  ChevronRight,
  Share2,
  User,
  BookOpen,
  Send,
  Loader2
} from "lucide-react";
import { siteConfig } from "~/data/siteData";
import { CANONICAL_BASE_URL } from "~/utils/seo";

export const meta: MetaFunction = () => {
  return [
    { title: "Free Visa Assessment & Consultation | Study Prime" },
    {
      name: "description",
      content:
        "Schedule a free 1-on-1 study abroad consultation session. Check university eligibility, scholarship chances, and student visa requirements with Study Prime.",
    },
    { property: "og:title", content: "Free Visa Assessment & Consultation | Study Prime" },
    {
      property: "og:description",
      content:
        "Schedule a free 1-on-1 study abroad consultation session. Check university eligibility, scholarship chances, and student visa requirements with Study Prime.",
    },
    { property: "og:url", content: `${CANONICAL_BASE_URL}/assessment` },
    { tagName: "link", rel: "canonical", href: `${CANONICAL_BASE_URL}/assessment` },
  ];
};

export const action = async ({ request, context }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const submission: Record<string, string> = {};
  formData.forEach((val, key) => {
    submission[key] = String(val);
  });

  const bookingRef = submission.bookingRef || `SP-${Math.floor(100000 + Math.random() * 900000)}`;
  submission.bookingRef = bookingRef;
  submission.timestamp = new Date().toISOString();

  // Webhook forwarding (Google Sheets Apps Script or WordPress REST endpoint)
  const env = (context as any)?.cloudflare?.env || process.env;
  const webhookUrl = env?.GOOGLE_SHEET_WEBHOOK_URL || process.env.GOOGLE_SHEET_WEBHOOK_URL;
  const wpLeadUrl = env?.WORDPRESS_LEAD_WEBHOOK_URL || process.env.WORDPRESS_LEAD_WEBHOOK_URL;

  let webhookForwarded = false;

  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });
      webhookForwarded = true;
    } catch (err) {
      console.error("Failed to forward lead to Google Sheet webhook:", err);
    }
  }

  if (wpLeadUrl) {
    try {
      await fetch(wpLeadUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });
      webhookForwarded = true;
    } catch (err) {
      console.error("Failed to forward lead to WordPress webhook:", err);
    }
  }

  return json({
    success: true,
    bookingRef,
    webhookForwarded,
  });
};

const TIME_SLOTS = [
  "10:30 AM",
  "11:30 AM",
  "12:30 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const DAYS_OF_WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function AssessmentPage() {
  const fetcher = useFetcher<{ success: boolean; bookingRef: string; webhookForwarded: boolean }>();
  const isSubmitting = fetcher.state === "submitting";

  // Main Page Level Steps: 1 = Calendar/Time, 2 = Multi-Step Form, 3 = Confirmed
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Inner Multi-step Questionnaire Steps: 1 = Contact, 2 = Academics, 3 = Goals
  const [formSubStep, setFormSubStep] = useState<1 | 2 | 3>(1);

  // Validation feedback state
  const [validationError, setValidationError] = useState<string>("");

  // Calendar State
  const today = useMemo(() => new Date(), []);
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth()); // 0-indexed

  // Selected Booking Details
  const [selectedDay, setSelectedDay] = useState<number>(today.getDate());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("03:00 PM");
  // Default to 'phone' as requested by the user
  const [consultationMode, setConsultationMode] = useState<"phone" | "virtual" | "office">("phone");
  const [bookingRef, setBookingRef] = useState<string>("");

  // Student Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "Islamabad",
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

  // Calendar helper calculation
  const calendarDays = useMemo(() => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    // Adjust for Monday starting index (0 = Monday, 6 = Sunday)
    let startDay = firstDayOfMonth.getDay() - 1;
    if (startDay === -1) startDay = 6;

    const days: { dayNumber: number | null; isPast: boolean; isSunday: boolean }[] = [];

    // Empty lead slots
    for (let i = 0; i < startDay; i++) {
      days.push({ dayNumber: null, isPast: true, isSunday: false });
    }

    // Days in current month
    for (let d = 1; d <= daysInMonth; d++) {
      const dateObj = new Date(currentYear, currentMonth, d);
      const isPast = dateObj < new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const isSunday = dateObj.getDay() === 0; // Sundays usually closed or phone/virtual
      days.push({ dayNumber: d, isPast, isSunday });
    }

    return days;
  }, [currentYear, currentMonth, today]);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const selectedDateFormatted = useMemo(() => {
    const d = new Date(currentYear, currentMonth, selectedDay);
    return d.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }, [currentYear, currentMonth, selectedDay]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (validationError) {
      setValidationError("");
    }
  };

  const handleProceedToDetails = () => {
    setStep(2);
    setFormSubStep(1);
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  // Sub-step transition handlers with clean field validation
  const handleNextSubStep = () => {
    if (formSubStep === 1) {
      if (!formData.fullName.trim()) {
        setValidationError("Please enter your full name as on passport/CNIC.");
        return;
      }
      if (!formData.phone.trim()) {
        setValidationError("Please enter your WhatsApp or phone number.");
        return;
      }
      if (!formData.email.trim() || !formData.email.includes("@")) {
        setValidationError("Please enter a valid email address.");
        return;
      }
      if (!formData.city.trim()) {
        setValidationError("Please enter your city of residence.");
        return;
      }
      setValidationError("");
      setFormSubStep(2);
      window.scrollTo({ top: 180, behavior: "smooth" });
    } else if (formSubStep === 2) {
      if (!formData.majorSubject.trim()) {
        setValidationError("Please enter your major field of study.");
        return;
      }
      if (!formData.gradeScore.trim()) {
        setValidationError("Please enter your CGPA or marks percentage.");
        return;
      }
      setValidationError("");
      setFormSubStep(3);
      window.scrollTo({ top: 180, behavior: "smooth" });
    }
  };

  const handlePrevSubStep = () => {
    setValidationError("");
    if (formSubStep === 3) {
      setFormSubStep(2);
    } else if (formSubStep === 2) {
      setFormSubStep(1);
    } else if (formSubStep === 1) {
      setStep(1);
    }
    window.scrollTo({ top: 180, behavior: "smooth" });
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const newBookingRef = `SP-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(newBookingRef);

    // Dispatch via Remix Fetcher to call server action (for webhook delivery)
    const payload = new FormData();
    payload.append("bookingRef", newBookingRef);
    payload.append("selectedDate", selectedDateFormatted);
    payload.append("selectedTimeSlot", selectedTimeSlot);
    payload.append("consultationMode", consultationMode);
    Object.entries(formData).forEach(([k, v]) => {
      payload.append(k, v);
    });

    fetcher.submit(payload, { method: "post" });
  };

  // Watch for successful submission
  useEffect(() => {
    if (fetcher.data?.success) {
      if (fetcher.data.bookingRef) {
        setBookingRef(fetcher.data.bookingRef);
      }
      setStep(3);
      window.scrollTo({ top: 80, behavior: "smooth" });
    }
  }, [fetcher.data]);

  // Construct structured WhatsApp message
  const modeLabel = consultationMode === "phone" 
    ? "Direct Phone Call" 
    : consultationMode === "virtual" 
      ? "Virtual Video Call (Zoom)" 
      : "Islamabad Office Visit";

  const whatsappText = encodeURIComponent(
`*New 1-on-1 Consultation Booking - Study Prime*
📌 *Reference:* ${bookingRef || "SP-868924"}
📅 *Date:* ${selectedDateFormatted}
⏰ *Time:* ${selectedTimeSlot} (PKT)
📞 *Mode:* ${modeLabel}

👤 *Student:* ${formData.fullName}
📱 *Phone:* +92 ${formData.phone}
📧 *Email:* ${formData.email}
🏙️ *City:* ${formData.city}

🎓 *Qualification:* ${formData.currentEducation}
📚 *Major:* ${formData.majorSubject}
📊 *CGPA/Grades:* ${formData.gradeScore} (${formData.passingYear})

🌍 *Target Country:* ${formData.targetCountry}
🎯 *Target Degree:* ${formData.targetDegree}
🗓️ *Intake:* ${formData.targetIntake}
🗣️ *English Test:* ${formData.englishTest}
⚠️ *Previous Refusal:* ${formData.hasRefusal}
⏳ *Study Gap:* ${formData.studyGap}
${formData.notes ? `📝 *Notes:* ${formData.notes}` : ""}

Please confirm my consultation slot!`
  );

  return (
    <main className="assessment-page-wrapper">
      {/* ── 1. Header Hero Strip ── */}
      <section className="assessment-hero-strip">
        <div className="container">
          <div className="assessment-hero-inner">
            <div className="section-eyebrow section-eyebrow-gold">
              <span className="eyebrow-dot" />
              1-on-1 Free Consultation &amp; Profile Evaluation
            </div>

            <h1 className="assessment-hero-title">
              Book Your 1-on-1 Strategy Call with a{" "}
              <span className="heading-accent">Senior Education Specialist</span>
            </h1>
            <span className="section-heading-underline" />

            <p className="assessment-hero-desc">
              Select an available appointment date and time below to lock your 100% free consultation. We evaluate your academic profile, match you with verified global universities, check scholarships, and map your study visa roadmap.
            </p>

            {/* Top Stepper Bar */}
            <div className="booking-stepper-bar">
              <div className={`step-pill ${step >= 1 ? "active" : ""} ${step > 1 ? "completed" : ""}`}>
                <div className="step-pill-num">1</div>
                <div className="step-pill-label">Date &amp; Mode</div>
              </div>
              <div className="step-divider" />
              <div className={`step-pill ${step === 2 && formSubStep === 1 ? "active" : ""} ${(step === 2 && formSubStep > 1) || step > 2 ? "completed" : ""}`}>
                <div className="step-pill-num">2</div>
                <div className="step-pill-label">Contact Info</div>
              </div>
              <div className="step-divider" />
              <div className={`step-pill ${step === 2 && formSubStep === 2 ? "active" : ""} ${(step === 2 && formSubStep > 2) || step > 2 ? "completed" : ""}`}>
                <div className="step-pill-num">3</div>
                <div className="step-pill-label">Academic Profile</div>
              </div>
              <div className="step-divider" />
              <div className={`step-pill ${step === 2 && formSubStep === 3 ? "active" : ""} ${step > 2 ? "completed" : ""}`}>
                <div className="step-pill-num">4</div>
                <div className="step-pill-label">Study Goals</div>
              </div>
              <div className="step-divider" />
              <div className={`step-pill ${step === 3 ? "active completed" : ""}`}>
                <div className="step-pill-num">5</div>
                <div className="step-pill-label">Confirmed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Interactive Booking Container ── */}
      <section className="section-padding" style={{ backgroundColor: "#F8FAFC", minHeight: "650px" }}>
        <div className="container">

          {/* ═════════ STEP 1: DATE, TIME & MODE SELECTION ═════════ */}
          {step === 1 && (
            <div className="booking-widget-card">
              {/* Meeting Mode Selector (3 options: Phone Call, Video Zoom, Office Visit) */}
              <div className="booking-mode-header">
                <h3 className="booking-widget-title">
                  <Calendar size={22} color="#011E3E" />
                  <span>Choose Your Preferred Consultation Mode</span>
                </h3>
                <div className="booking-mode-toggle-group">
                  {/* Mode 1: Direct Phone Call (Popular Choice) */}
                  <button
                    type="button"
                    className={`booking-mode-btn ${consultationMode === "phone" ? "active" : ""}`}
                    onClick={() => setConsultationMode("phone")}
                  >
                    <PhoneCall size={20} />
                    <div>
                      <span className="booking-mode-badge gold">Most Popular</span>
                      <strong>Direct Phone Call</strong>
                      <span>Senior counselor calls your mobile number directly • Quick &amp; convenient</span>
                    </div>
                  </button>

                  {/* Mode 2: Virtual Video Call */}
                  <button
                    type="button"
                    className={`booking-mode-btn ${consultationMode === "virtual" ? "active" : ""}`}
                    onClick={() => setConsultationMode("virtual")}
                  >
                    <Video size={20} />
                    <div>
                      <span className="booking-mode-badge">Online Video</span>
                      <strong>Zoom / Google Meet</strong>
                      <span>Screen share, live university course matching &amp; transcript evaluation</span>
                    </div>
                  </button>

                  {/* Mode 3: Office Visit */}
                  <button
                    type="button"
                    className={`booking-mode-btn ${consultationMode === "office" ? "active" : ""}`}
                    onClick={() => setConsultationMode("office")}
                  >
                    <Building2 size={20} />
                    <div>
                      <span className="booking-mode-badge">In-Person</span>
                      <strong>Islamabad Office Visit</strong>
                      <span>1st Floor, Galleria Mall, I-8 Markaz, Islamabad (Face-to-Face)</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Calendar & Time Slots Grid */}
              <div className="booking-calendar-slots-grid">
                {/* Left: Interactive Calendar */}
                <div className="calendar-panel">
                  <div className="calendar-month-nav">
                    <button type="button" onClick={handlePrevMonth} className="cal-nav-btn" aria-label="Previous Month">
                      <ChevronLeft size={20} />
                    </button>
                    <h4 className="cal-month-title">
                      {MONTH_NAMES[currentMonth]} {currentYear}
                    </h4>
                    <button type="button" onClick={handleNextMonth} className="cal-nav-btn" aria-label="Next Month">
                      <ChevronRight size={20} />
                    </button>
                  </div>

                  {/* Day Headers */}
                  <div className="calendar-weekdays-row">
                    {DAYS_OF_WEEK.map((dw) => (
                      <span key={dw} className="cal-weekday-label">{dw}</span>
                    ))}
                  </div>

                  {/* Calendar Dates Grid */}
                  <div className="calendar-days-grid">
                    {calendarDays.map((cd, index) => {
                      if (!cd.dayNumber) {
                        return <div key={`empty-${index}`} className="cal-day-cell empty" />;
                      }
                      const isSelected = selectedDay === cd.dayNumber;
                      return (
                        <button
                          key={`day-${cd.dayNumber}`}
                          type="button"
                          disabled={cd.isPast}
                          onClick={() => setSelectedDay(cd.dayNumber!)}
                          className={`cal-day-cell ${cd.isPast ? "disabled" : ""} ${isSelected ? "selected" : ""} ${cd.isSunday ? "sunday" : ""}`}
                        >
                          <span className="cal-day-number">{cd.dayNumber}</span>
                          {isSelected && <span className="cal-day-dot" />}
                        </button>
                      );
                    })}
                  </div>

                  <div className="calendar-timezone-note">
                    <Clock size={14} color="#64748B" />
                    <span>Timezone: Pakistan Standard Time (PKT, GMT+5)</span>
                  </div>
                </div>

                {/* Right: Available Time Slots */}
                <div className="slots-panel">
                  <div className="slots-header">
                    <h4 className="slots-title">
                      Available Slots for <span>{selectedDateFormatted}</span>
                    </h4>
                    <span className="slots-badge">Free 30-Min Session</span>
                  </div>

                  <div className="slots-buttons-grid">
                    {TIME_SLOTS.map((slot) => {
                      const isChosen = selectedTimeSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`time-slot-btn ${isChosen ? "active" : ""}`}
                        >
                          <Clock size={15} />
                          <span>{slot}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Slot Summary & Proceed */}
                  <div className="slots-summary-box">
                    <div className="slots-summary-info">
                      <div className="slots-summary-mode">
                        {consultationMode === "phone" ? (
                          <><PhoneCall size={16} color="#FFA700" /> <span>Direct Phone Call Consultation</span></>
                        ) : consultationMode === "virtual" ? (
                          <><Video size={16} color="#FFA700" /> <span>Virtual Video Call (Zoom / Meet)</span></>
                        ) : (
                          <><MapPin size={16} color="#FFA700" /> <span>Islamabad Office Visit</span></>
                        )}
                      </div>
                      <div className="slots-summary-time">
                        {selectedDateFormatted} at {selectedTimeSlot}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleProceedToDetails}
                      className="btn btn-primary btn-proceed-booking"
                    >
                      <span>Proceed to Student Details</span>
                      <ArrowRight size={17} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ═════════ STEP 2: MULTI-STEP STUDENT QUESTIONNAIRE ═════════ */}
          {step === 2 && (
            <div className="booking-form-wrapper">
              {/* Selected Slot Summary Ribbon */}
              <div className="booking-ribbon-card">
                <div className="booking-ribbon-left">
                  <div className="ribbon-icon-wrap">
                    {consultationMode === "phone" ? (
                      <PhoneCall size={22} color="#011E3E" />
                    ) : consultationMode === "virtual" ? (
                      <Video size={22} color="#011E3E" />
                    ) : (
                      <Building2 size={22} color="#011E3E" />
                    )}
                  </div>
                  <div>
                    <h4 className="ribbon-title">Selected Consultation Slot</h4>
                    <p className="ribbon-desc">
                      {selectedDateFormatted} at <strong>{selectedTimeSlot}</strong> &bull; {
                        consultationMode === "phone" 
                          ? "Direct Counselor Phone Call" 
                          : consultationMode === "virtual" 
                            ? "Virtual Video Call (Zoom)" 
                            : "Islamabad Office (Galleria Mall)"
                      }
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="btn btn-outline btn-change-slot"
                >
                  Change Date / Mode
                </button>
              </div>

              {/* Questionnaire Form Card */}
              <div className="assessment-form-card">
                {/* Progress Bar & Sub-Step Tracker */}
                <div className="form-step-progress-wrapper">
                  <div className="form-step-progress-track">
                    <div 
                      className="form-step-progress-fill" 
                      style={{ width: formSubStep === 1 ? "33.3%" : formSubStep === 2 ? "66.6%" : "100%" }}
                    />
                  </div>
                  <div className="form-step-indicator-row">
                    <div className="form-step-indicator-title">
                      {formSubStep === 1 && <User size={17} color="#011E3E" />}
                      {formSubStep === 2 && <GraduationCap size={17} color="#011E3E" />}
                      {formSubStep === 3 && <Globe2 size={17} color="#011E3E" />}
                      <span>
                        {formSubStep === 1 && "Personal & Contact Information"}
                        {formSubStep === 2 && "Academic Background & Qualifications"}
                        {formSubStep === 3 && "Study Goals & Visa Readiness"}
                      </span>
                    </div>
                    <span className="form-step-indicator-stage">
                      Step {formSubStep} of 3
                    </span>
                  </div>
                </div>

                {/* Sub-step navigation pills (clickable for easy back & forth) */}
                <div className="form-step-tabs-nav">
                  <button
                    type="button"
                    className={`form-step-tab-btn ${formSubStep === 1 ? "active" : "completed"}`}
                    onClick={() => { setValidationError(""); setFormSubStep(1); }}
                  >
                    <span>1. Contact Details</span>
                  </button>
                  <button
                    type="button"
                    disabled={!formData.fullName || !formData.phone}
                    className={`form-step-tab-btn ${formSubStep === 2 ? "active" : formSubStep > 2 ? "completed" : ""}`}
                    onClick={() => { 
                      if (formData.fullName && formData.phone) {
                        setValidationError("");
                        setFormSubStep(2);
                      }
                    }}
                  >
                    <span>2. Academics</span>
                  </button>
                  <button
                    type="button"
                    disabled={!formData.fullName || !formData.phone || !formData.majorSubject}
                    className={`form-step-tab-btn ${formSubStep === 3 ? "active" : ""}`}
                    onClick={() => {
                      if (formData.fullName && formData.phone && formData.majorSubject) {
                        setValidationError("");
                        setFormSubStep(3);
                      }
                    }}
                  >
                    <span>3. Study Intent</span>
                  </button>
                </div>

                {/* Validation Error Banner */}
                {validationError && (
                  <div style={{
                    padding: "12px 18px",
                    background: "#FEF2F2",
                    border: "1px solid #F87171",
                    color: "#991B1B",
                    borderRadius: "10px",
                    marginBottom: "20px",
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}>
                    <HelpCircle size={16} />
                    <span>{validationError}</span>
                  </div>
                )}

                <form onSubmit={handleSubmitBooking} className="assessment-form-body">
                  {/* ──── SUB-STEP 1: CONTACT DETAILS ──── */}
                  {formSubStep === 1 && (
                    <div className="form-section-block" style={{ border: "none", marginBottom: 0, paddingBottom: 0 }}>
                      <div className="assessment-form-header" style={{ marginBottom: "22px" }}>
                        <h2 className="assessment-form-title">Step 1: Your Contact Information</h2>
                        <p className="assessment-form-subtitle">
                          {consultationMode === "phone" 
                            ? "Provide your active mobile or WhatsApp number so our counselor can call you at your appointed time." 
                            : "Provide your contact details to receive your booking confirmation and appointment reminder."}
                        </p>
                      </div>

                      <div className="form-row-2col">
                        <div className="form-group">
                          <label htmlFor="fullName">Full Name (as on Passport / CNIC) *</label>
                          <input
                            id="fullName"
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="e.g. Muhammad Ali"
                            className="form-control"
                            autoFocus
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
                            placeholder="e.g. yourname@gmail.com"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="form-row-2col">
                        <div className="form-group">
                          <label htmlFor="phone">
                            {consultationMode === "phone" ? "Mobile Phone Number for Counselor Call *" : "WhatsApp / Contact Number *"}
                          </label>
                          <div className="phone-input-wrap">
                            <span className="phone-prefix-tag">+92</span>
                            <input
                              id="phone"
                              type="tel"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="300 1234567"
                              className="form-control phone-with-prefix"
                            />
                          </div>
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
                            placeholder="e.g. Islamabad, Rawalpindi, Lahore"
                            className="form-control"
                          />
                        </div>
                      </div>

                      {/* Action Bar for Sub-Step 1 */}
                      <div className="form-submit-row">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="btn btn-outline"
                          style={{ padding: "12px 22px" }}
                        >
                          <ArrowLeft size={16} />
                          <span>Back to Calendar</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleNextSubStep}
                          className="btn btn-primary"
                          style={{ padding: "14px 28px", fontWeight: 700 }}
                        >
                          <span>Continue to Academic Profile</span>
                          <ArrowRight size={17} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ──── SUB-STEP 2: ACADEMIC CREDENTIALS ──── */}
                  {formSubStep === 2 && (
                    <div className="form-section-block" style={{ border: "none", marginBottom: 0, paddingBottom: 0 }}>
                      <div className="assessment-form-header" style={{ marginBottom: "22px" }}>
                        <h2 className="assessment-form-title">Step 2: Academic Background</h2>
                        <p className="assessment-form-subtitle">
                          Accurate grades and degree details allow our counselors to match you with matching university entry criteria and scholarship brackets.
                        </p>
                      </div>

                      <div className="form-row-2col">
                        <div className="form-group">
                          <label htmlFor="currentEducation">Highest Qualification Achieved *</label>
                          <select
                            id="currentEducation"
                            name="currentEducation"
                            value={formData.currentEducation}
                            onChange={handleChange}
                            className="form-control"
                          >
                            <option value="bachelor">Bachelor's Degree (4-Year BS)</option>
                            <option value="inter_alevel">Intermediate / F.Sc / ICS / A-Levels</option>
                            <option value="bachelor_2yr">Bachelor's Degree (2-Year BA/BSc)</option>
                            <option value="master">Master's / MS / MPhil Degree</option>
                            <option value="matric_olevel">Matric / O-Levels</option>
                            <option value="diploma">Associate Degree / DAE Diploma</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="majorSubject">Major / Field of Study *</label>
                          <input
                            id="majorSubject"
                            type="text"
                            name="majorSubject"
                            required
                            value={formData.majorSubject}
                            onChange={handleChange}
                            placeholder="e.g. Computer Science, Business, Pre-Med, Engineering"
                            className="form-control"
                            autoFocus
                          />
                        </div>
                      </div>

                      <div className="form-row-2col">
                        <div className="form-group">
                          <label htmlFor="gradeScore">CGPA or Percentage / Grades *</label>
                          <input
                            id="gradeScore"
                            type="text"
                            name="gradeScore"
                            required
                            value={formData.gradeScore}
                            onChange={handleChange}
                            placeholder="e.g. 3.2 CGPA or 78% or ABB"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="passingYear">Year of Graduation / Completion</label>
                          <select
                            id="passingYear"
                            name="passingYear"
                            value={formData.passingYear}
                            onChange={handleChange}
                            className="form-control"
                          >
                            <option value="2026">2026 (Expected / Current Finalist)</option>
                            <option value="2025">2025</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021 or earlier</option>
                          </select>
                        </div>
                      </div>

                      {/* Action Bar for Sub-Step 2 */}
                      <div className="form-submit-row">
                        <button
                          type="button"
                          onClick={handlePrevSubStep}
                          className="btn btn-outline"
                          style={{ padding: "12px 22px" }}
                        >
                          <ArrowLeft size={16} />
                          <span>Back to Contact</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleNextSubStep}
                          className="btn btn-primary"
                          style={{ padding: "14px 28px", fontWeight: 700 }}
                        >
                          <span>Continue to Study Goals</span>
                          <ArrowRight size={17} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ──── SUB-STEP 3: STUDY GOALS & VISA READINESS ──── */}
                  {formSubStep === 3 && (
                    <div className="form-section-block" style={{ border: "none", marginBottom: 0, paddingBottom: 0 }}>
                      <div className="assessment-form-header" style={{ marginBottom: "22px" }}>
                        <h2 className="assessment-form-title">Step 3: Study Goals &amp; Visa Intent</h2>
                        <p className="assessment-form-subtitle">
                          Help us tailor university shortlists, intake timelines, and compliance requirements before your call.
                        </p>
                      </div>

                      <div className="form-row-2col">
                        <div className="form-group">
                          <label htmlFor="targetCountry">Preferred Study Destination *</label>
                          <select
                            id="targetCountry"
                            name="targetCountry"
                            value={formData.targetCountry}
                            onChange={handleChange}
                            className="form-control"
                          >
                            <option value="United Kingdom">United Kingdom (UK)</option>
                            <option value="Australia">Australia</option>
                            <option value="Canada">Canada</option>
                            <option value="United States">United States (USA)</option>
                            <option value="Germany">Germany &amp; Europe</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Multiple">Open to Counselor Recommendation</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="targetDegree">Target Degree Level *</label>
                          <select
                            id="targetDegree"
                            name="targetDegree"
                            value={formData.targetDegree}
                            onChange={handleChange}
                            className="form-control"
                          >
                            <option value="master">Master's / Postgraduate (1 or 2 Years)</option>
                            <option value="bachelor">Bachelor's / Undergraduate (3 or 4 Years)</option>
                            <option value="topup">1-Year Fast-Track Top-up Degree</option>
                            <option value="phd">PhD / Doctoral Research</option>
                            <option value="foundation">Foundation / Pre-Master's Pathway</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-row-2col">
                        <div className="form-group">
                          <label htmlFor="targetIntake">Target Intake Period</label>
                          <select
                            id="targetIntake"
                            name="targetIntake"
                            value={formData.targetIntake}
                            onChange={handleChange}
                            className="form-control"
                          >
                            <option value="September / Fall 2026">September / Fall 2026 (Primary Intake)</option>
                            <option value="January / Winter 2027">January / Winter 2027</option>
                            <option value="May / Spring 2027">May / Spring 2027</option>
                            <option value="Immediate Available">Earliest Possible Intake</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="englishTest">English Proficiency Status</label>
                          <select
                            id="englishTest"
                            name="englishTest"
                            value={formData.englishTest}
                            onChange={handleChange}
                            className="form-control"
                          >
                            <option value="none_yet">No Test Taken Yet (Looking for MOI Waiver / Online Test)</option>
                            <option value="ielts_academic">IELTS Academic</option>
                            <option value="pte_academic">PTE Academic</option>
                            <option value="oxford_ellt">Oxford ELLT</option>
                            <option value="duolingo">Duolingo English Test (DET)</option>
                            <option value="planning_to_book">Planning to Take Test Soon</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-row-2col">
                        <div className="form-group">
                          <label htmlFor="hasRefusal">Any Previous Visa Refusals? *</label>
                          <select
                            id="hasRefusal"
                            name="hasRefusal"
                            value={formData.hasRefusal}
                            onChange={handleChange}
                            className="form-control"
                          >
                            <option value="no">No Refusals (Clean Travel / Visa Record)</option>
                            <option value="uk_refusal">Yes - UK Visa Refusal</option>
                            <option value="canada_refusal">Yes - Canada Visa Refusal</option>
                            <option value="aus_refusal">Yes - Australia Visa Refusal</option>
                            <option value="us_refusal">Yes - USA Visa Refusal</option>
                            <option value="other_refusal">Yes - Schengen / Other Country</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="studyGap">Any Academic or Study Gap? *</label>
                          <select
                            id="studyGap"
                            name="studyGap"
                            value={formData.studyGap}
                            onChange={handleChange}
                            className="form-control"
                          >
                            <option value="no">No Study Gap (Fresh Graduate / Currently Enrolled)</option>
                            <option value="1_2_years">1 to 2 Years (With Work Experience / Job)</option>
                            <option value="3_5_years">3 to 5 Years (With Experience Letters)</option>
                            <option value="5_plus_years">5+ Years (Require Gap Justification Advisory)</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group" style={{ marginTop: "10px" }}>
                        <label htmlFor="notes">Specific Inquiries or University Preferences (Optional)</label>
                        <textarea
                          id="notes"
                          name="notes"
                          rows={3}
                          value={formData.notes}
                          onChange={handleChange}
                          placeholder="Mention any specific universities you are interested in, scholarship requirements, spouse visa inquiries, or financial queries..."
                          className="form-control"
                        />
                      </div>

                      {/* Action Bar for Sub-Step 3 (Final Submission) */}
                      <div className="form-submit-row">
                        <button
                          type="button"
                          onClick={handlePrevSubStep}
                          className="btn btn-outline"
                          style={{ padding: "12px 22px" }}
                        >
                          <ArrowLeft size={16} />
                          <span>Back to Academics</span>
                        </button>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn btn-accent btn-confirm-submit"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 size={18} className="spin" />
                              <span>Securing Consultation Slot...</span>
                            </>
                          ) : (
                            <>
                              <CheckCircle2 size={18} />
                              <span>Confirm &amp; Lock Consultation Slot</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          )}

          {/* ═════════ STEP 3: CONFIRMED BOOKING SCREEN ═════════ */}
          {step === 3 && (
            <div className="assessment-success-card">
              <div className="assessment-success-icon-wrap">
                <CheckCircle2 size={64} color="#10B981" />
              </div>
              <div className="badge badge-gold" style={{ margin: "0 auto 12px auto", width: "fit-content" }}>
                Booking Ref: {bookingRef || "SP-868924"}
              </div>
              <h2 className="assessment-success-title">1-on-1 Consultation Successfully Scheduled!</h2>
              <p className="assessment-success-desc">
                Thank you, <strong>{formData.fullName || "Student"}</strong>. Your strategy session with our senior education specialist is locked for:
              </p>

              {/* Appointment Highlight Box */}
              <div className="confirmed-appointment-card">
                <div className="confirmed-detail-row">
                  <div className="confirmed-detail-item">
                    <Calendar size={20} color="#FFA700" />
                    <div>
                      <span className="lbl">Date</span>
                      <strong className="val">{selectedDateFormatted}</strong>
                    </div>
                  </div>

                  <div className="confirmed-detail-item">
                    <Clock size={20} color="#FFA700" />
                    <div>
                      <span className="lbl">Time (PKT)</span>
                      <strong className="val">{selectedTimeSlot}</strong>
                    </div>
                  </div>

                  <div className="confirmed-detail-item">
                    {consultationMode === "phone" ? (
                      <PhoneCall size={20} color="#FFA700" />
                    ) : consultationMode === "virtual" ? (
                      <Video size={20} color="#FFA700" />
                    ) : (
                      <MapPin size={20} color="#FFA700" />
                    )}
                    <div>
                      <span className="lbl">Consultation Mode</span>
                      <strong className="val">
                        {consultationMode === "phone" 
                          ? `Phone Call (+92 ${formData.phone})`
                          : consultationMode === "virtual" 
                            ? "Virtual Call (Zoom / Google Meet)" 
                            : "Islamabad Office (Galleria Mall)"
                        }
                      </strong>
                    </div>
                  </div>

                  <div className="confirmed-detail-item">
                    <Globe2 size={20} color="#FFA700" />
                    <div>
                      <span className="lbl">Target Destination</span>
                      <strong className="val">{formData.targetCountry}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Steps Checklist */}
              <div className="assessment-success-box">
                <h4 style={{ color: "#011E3E", marginBottom: "10px", fontWeight: 800 }}>Next Steps &amp; Preparation:</h4>
                <ul className="success-checklist">
                  {consultationMode === "phone" ? (
                    <li>
                      <CheckCircle2 size={16} color="#10B981" />
                      <span>Our senior education counselor will call your mobile number directly (<strong>+92 {formData.phone}</strong>) at the appointed time.</span>
                    </li>
                  ) : consultationMode === "virtual" ? (
                    <li>
                      <CheckCircle2 size={16} color="#10B981" />
                      <span>A Zoom / Google Meet link has been dispatched to <strong>{formData.email}</strong> and your WhatsApp number.</span>
                    </li>
                  ) : (
                    <li>
                      <CheckCircle2 size={16} color="#10B981" />
                      <span>Please visit our Islamabad Head Office at <strong>1st Floor, Galleria Mall, I-8 Markaz, Islamabad</strong> 10 minutes prior to your session.</span>
                    </li>
                  )}
                  <li>
                    <CheckCircle2 size={16} color="#10B981" />
                    <span>A confirmation email with your booking summary has been sent to <strong>{formData.email}</strong>.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} color="#10B981" />
                    <span>Please have your academic transcripts (DMCs/Degrees), CV, and Passport copy accessible during the session for instant eligibility assessment.</span>
                  </li>
                </ul>
              </div>

              {/* Fast Action Buttons */}
              <div className="success-action-buttons">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappText}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px" }}
                >
                  <Phone size={17} />
                  <span>Instant WhatsApp Confirmation</span>
                  <ArrowRight size={16} />
                </a>

                <Link to="/" className="btn btn-outline" style={{ padding: "14px 24px" }}>
                  Return to Homepage
                </Link>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ── 3. Trust Pillars (Why Choose Study Prime) ── */}
      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 36px auto" }}>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--primary-navy)", marginBottom: "12px" }}>
              Why Book Your Consultation With Study Prime?
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
              We represent top-tier global universities and offer 100% ethical, transparent guidance from admissions to visa grants.
            </p>
          </div>

          <div className="service-assurance-grid">
            <div className="assurance-card">
              <div className="assurance-icon">
                <ShieldCheck size={26} color="#011E3E" />
              </div>
              <h3 className="assurance-title">100% Direct Partnerships</h3>
              <p className="assurance-desc">
                Authorized official university portals for priority application filing and exclusive institutional fee waivers.
              </p>
            </div>

            <div className="assurance-card">
              <div className="assurance-icon">
                <Award size={26} color="#FFA700" />
              </div>
              <h3 className="assurance-title">98.4% Visa Approval Rate</h3>
              <p className="assurance-desc">
                Comprehensive financial vetting and 1-on-1 embassy interview preparation ensuring pristine compliance.
              </p>
            </div>

            <div className="assurance-card">
              <div className="assurance-icon">
                <FileCheck size={26} color="#10B981" />
              </div>
              <h3 className="assurance-title">Merit Scholarship Advisory</h3>
              <p className="assurance-desc">
                Mapping up to 50% tuition fee discounts and automatic academic excellence bursaries across UK, Aus &amp; USA.
              </p>
            </div>

            <div className="assurance-card">
              <div className="assurance-icon">
                <GraduationCap size={26} color="#8B5CF6" />
              </div>
              <h3 className="assurance-title">Certified Expert Advisors</h3>
              <p className="assurance-desc">
                British Council and ICEF trained counselors dedicated to finding the exact course that matches your budget and ambition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Contact & Office Banner ── */}
      <section className="section-padding" style={{ backgroundColor: "#011E3E", color: "#FFFFFF" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "28px" }}>
            <div style={{ maxWidth: "600px" }}>
              <h2 style={{ fontSize: "2.1rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "10px" }}>
                Prefer Direct In-Person Walk-In?
              </h2>
              <p style={{ color: "#E2E8F0", fontSize: "1.05rem", lineHeight: "1.6" }}>
                Visit our dedicated Islamabad office located in Galleria Mall, I-8 Markaz. Our senior counseling panel is available Monday to Saturday, 10:00 AM – 7:00 PM.
              </p>
            </div>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="btn btn-accent"
                style={{ padding: "14px 28px", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <Phone size={17} />
                <span>Call: {siteConfig.contact.phone}</span>
              </a>
              <a
                href="https://maps.google.com/?q=Galleria+Mall+I-8+Markaz+Islamabad"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-white"
                style={{ padding: "14px 24px", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <MapPin size={17} />
                <span>View On Map</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
