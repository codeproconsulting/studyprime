import { useState, useMemo } from "react";
import { Link, useOutletContext } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { 
  ArrowRight, 
  CheckCircle2, 
  FileCheck, 
  GraduationCap, 
  ShieldCheck, 
  PenTool, 
  PlaneTakeoff, 
  Award,
  Layers,
  Sparkles,
  PhoneCall,
  Clock,
  Briefcase,
  HelpCircle,
  FileText,
  BadgePercent,
  Compass
} from "lucide-react";
import { services, siteConfig } from "~/data/siteData";
import { FAQSection } from "~/components/FAQSection";
import { ConsultationModal } from "~/components/ConsultationModal";

export const meta: MetaFunction = () => {
  return [
    { title: "Professional Overseas Education & Visa Services | Study Prime" },
    { name: "description", content: "Explore Study Prime's comprehensive study abroad services: university admissions, student visa filing, SOP vetting, scholarship aid, and pre-departure briefings." },
  ];
};

const iconMap: Record<string, any> = {
  ShieldCheck,
  GraduationCap,
  FileCheck,
  PenTool,
  PlaneTakeoff,
};

// Deliverables mapping per service
const serviceDeliverables: Record<string, { title: string; items: string[]; guarantee: string }> = {
  "student-visa": {
    title: "Visa Case Deliverables",
    items: [
      "100% Embassy-compliant financial dossier review",
      "Comprehensive visa application filing (UK VI, Canada SDS, Aus Subclass 500, US F-1, Schengen Type D)",
      "Tailored 1-on-1 mock visa interview simulation",
      "Real-time portal tracking and biometric appointment booking",
    ],
    guarantee: "98% High Visa Approval Success Rate",
  },
  "university-matching": {
    title: "Academic Profiling Deliverables",
    items: [
      "Shortlist of 3-5 accredited universities matching your grades & budget",
      "Post-study work rights and regional migration scoring report",
      "Eligibility verification against university entry quotas",
      "Direct pathway and scholarship opportunity mapping",
    ],
    guarantee: "100% Direct Official University Liaison",
  },
  "admission-support": {
    title: "Application Deliverables",
    items: [
      "Direct university portal submission with zero intermediary delays",
      "Application fee waiver assistance on partner panel programs",
      "Follow-up for conditional and unconditional offer letters",
      "CAS, I-20, COE, and Acceptance Certificate management",
    ],
    guarantee: "Fast-track 48h to 2-week Offer Letter Turnaround",
  },
  "sop-guidance": {
    title: "Document Vetting Deliverables",
    items: [
      "Authentic, plagiarism-free Statement of Purpose (SOP) drafting mentorship",
      "Alignment with strict GTE, SDS, and Genuine Student (GS) standards",
      "Academic CV & Resume optimization for foreign faculty reviewers",
      "Letters of Recommendation (LOR) & intent structure validation",
    ],
    guarantee: "Zero AI Boilerplate — 100% Human Expert Review",
  },
  "departure-briefing": {
    title: "Settlement Deliverables",
    items: [
      "Verified student housing & private accommodation assistance",
      "Flight booking guidance and student baggage allowance advice",
      "International SIM cards, health insurance & banking setup guidance",
      "On-arrival orientation and alumni networking connections",
    ],
    guarantee: "End-to-End Support Beyond Visa Grant",
  },
};

export default function Services() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const context = useOutletContext<{ openConsultation?: () => void }>() || {};

  const handleOpenConsult = () => {
    if (context.openConsultation) {
      context.openConsultation();
    } else {
      setIsConsultationOpen(true);
    }
  };

  const filterTabs = [
    { id: "all", label: "All Services" },
    { id: "student-visa", label: "Student Visa Advisory" },
    { id: "university-matching", label: "University Matching" },
    { id: "admission-support", label: "Admissions & Offers" },
    { id: "sop-guidance", label: "SOP & Document Review" },
    { id: "departure-briefing", label: "Pre-Departure Briefing" },
  ];

  const filteredServices = useMemo(() => {
    if (selectedFilter === "all") return services;
    return services.filter((s) => s.id === selectedFilter);
  }, [selectedFilter]);

  return (
    <div className="services-page-wrapper">
      {/* ── 1. Hero Header Banner ── */}
      <section className="services-hero-banner">
        <div className="container">
          <h1 className="services-hero-title">
            Professional Overseas Education Services
          </h1>
          <p className="services-hero-subtitle">
            From strategic university selection and unconditional offer letters to embassy visa filing and pre-departure briefings, Study Prime provides 100% transparent, certified advisory.
          </p>

          {/* Quick Metrics Strip */}
          <div className="services-stats-strip">
            <div className="services-stat-pill">
              <div className="services-stat-val">450+</div>
              <div className="services-stat-lbl">Partner Universities</div>
            </div>
            <div className="services-stat-pill">
              <div className="services-stat-val">98%</div>
              <div className="services-stat-lbl">Visa Success Rate</div>
            </div>
            <div className="services-stat-pill">
              <div className="services-stat-val">3,500+</div>
              <div className="services-stat-lbl">Students Assessed</div>
            </div>
            <div className="services-stat-pill">
              <div className="services-stat-val">100%</div>
              <div className="services-stat-lbl">Free Initial Case Review</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Services Catalog & Filter Bar ── */}
      <section className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container">
          {/* Filter Pills */}
          <div className="services-filter-row">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`service-pill-btn ${selectedFilter === tab.id ? "active" : ""}`}
                onClick={() => setSelectedFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Service Cards Stack */}
          <div className="services-cards-stack">
            {filteredServices.map((srv, idx) => {
              const IconComponent = iconMap[srv.icon] || FileCheck;
              const deliverables = serviceDeliverables[srv.id] || {
                title: "Service Deliverables",
                items: srv.features,
                guarantee: "Verified Quality Standard",
              };

              return (
                <div key={srv.id} id={srv.id} className="service-showcase-card">
                  {/* Left Column: Information & Actions */}
                  <div className="service-card-left">
                    <div className="service-header-row">
                      <div className="service-icon-box-lg">
                        <IconComponent size={28} color="#081736" />
                      </div>
                      <h2 className="service-card-title">{srv.title}</h2>
                    </div>

                    <p className="service-card-desc">{srv.fullDesc}</p>

                    {/* Features Checklist */}
                    <div className="service-features-grid">
                      {srv.features.map((feat, i) => (
                        <div key={i} className="service-feature-item">
                          <CheckCircle2 size={18} color="#10B981" style={{ flexShrink: 0, marginTop: "2px" }} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="service-action-buttons">
                      <Link
                        to={`/services/${srv.id}`}
                        className="btn btn-primary"
                        style={{ padding: "12px 24px", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "8px" }}
                      >
                        <span>Explore Step-by-Step Guide</span>
                        <ArrowRight size={15} />
                      </Link>
                      <button
                        type="button"
                        className="btn btn-outline"
                        onClick={handleOpenConsult}
                        style={{ padding: "12px 20px", fontWeight: 600 }}
                      >
                        Free Case Assessment
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Deliverables & Quality Guarantee Panel */}
                  <div className="service-deliverables-panel">
                    <h3 className="deliverables-title">
                      <FileText size={18} color="#081736" />
                      <span>{deliverables.title}</span>
                    </h3>

                    <div className="deliverables-list">
                      {deliverables.items.map((item, i) => (
                        <div key={i} className="deliverable-item">
                          <span style={{ color: "#FFA700", fontWeight: 700, marginRight: "4px" }}>•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="deliverables-guarantee-tag">
                      <Award size={16} />
                      <span>{deliverables.guarantee}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. The Study Prime Service Assurance Grid ── */}
      <section className="service-assurance-section">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.4rem", color: "var(--primary-navy)", fontWeight: 800, marginBottom: "12px" }}>
              The Study Prime Service Standard
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
              Our advisory framework is built on absolute transparency, ethical counseling, and measurable student success.
            </p>
          </div>

          <div className="service-assurance-grid">
            <div className="assurance-card">
              <div className="assurance-icon">
                <ShieldCheck size={24} color="#081736" />
              </div>
              <h3 className="assurance-title">100% Direct Partnerships</h3>
              <p className="assurance-desc">
                Authorized direct representatives with official admission portals for fast-track processing and application fee waivers.
              </p>
            </div>

            <div className="assurance-card">
              <div className="assurance-icon">
                <FileCheck size={24} color="#10B981" />
              </div>
              <h3 className="assurance-title">Precision Financial Vetting</h3>
              <p className="assurance-desc">
                Rigorous inspection of bank statements, tax returns, and affidavit of support to satisfy embassy genuine student criteria.
              </p>
            </div>

            <div className="assurance-card">
              <div className="assurance-icon">
                <PenTool size={24} color="#FFA700" />
              </div>
              <h3 className="assurance-title">Original SOP Mentorship</h3>
              <p className="assurance-desc">
                One-on-one mentorship to craft authentic, plagiarism-free personal statements that highlight genuine career objectives.
              </p>
            </div>

            <div className="assurance-card">
              <div className="assurance-icon">
                <PlaneTakeoff size={24} color="#8B5CF6" />
              </div>
              <h3 className="assurance-title">Post-Visa Settlement</h3>
              <p className="assurance-desc">
                Comprehensive pre-departure briefings, accommodation coordination, flight guidance, and bank account setup support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Call to Action Banner ── */}
      <section className="section-padding" style={{ backgroundColor: "#081736", color: "#FFFFFF" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "28px" }}>
            <div style={{ maxWidth: "600px" }}>
              <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "10px" }}>
                Ready to Evaluate Your Profile?
              </h2>
              <p style={{ color: "#E2E8F0", fontSize: "1.05rem", lineHeight: "1.6" }}>
                Visit our Islamabad Galleria Mall office or book a virtual session to discuss courses, scholarships, and visa eligibility with our senior consultants.
              </p>
            </div>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <button
                type="button"
                className="btn btn-accent"
                onClick={handleOpenConsult}
                style={{ padding: "14px 28px", fontWeight: 700 }}
              >
                Book Free Advisory Session
              </button>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="btn btn-outline-white"
                style={{ padding: "14px 24px", fontWeight: 600 }}
              >
                Call: {siteConfig.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. FAQs ── */}
      <FAQSection />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
