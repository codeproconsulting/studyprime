import { useState } from "react";
import { ArrowRight, Globe2, X, CheckCircle2, GraduationCap, Calendar, ShieldCheck, Sparkles, MapPin } from "lucide-react";
import { destinations, type StudyDestination } from "~/data/siteData";

export function DestinationsSection({ onOpenConsultation }: { onOpenConsultation?: () => void }) {
  const [selectedDestination, setSelectedDestination] = useState<StudyDestination | null>(null);

  const destinationCovers: Record<string, string> = {
    turkey: "/images/destinations/turkey.jpg",
    uk: "/images/destinations/uk.jpg",
    australia: "/images/destinations/australia.jpg",
    usa: "/images/destinations/usa.jpg",
    canada: "/images/destinations/canada.jpg",
    ireland: "/images/destinations/ireland.jpg",
    switzerland: "/images/destinations/switzerland.jpg",
    spain: "/images/destinations/spain.jpg",
    netherlands: "/images/destinations/netherlands.jpg",
    germany: "/images/destinations/germany.jpg",
    finland: "/images/destinations/finland.jpg",
    europe: "/images/destinations/europe.jpg",
  };

  const destinationDetails: Record<
    string,
    {
      pswBadge: string;
      intakes: string;
      visaRate: string;
      avgTuition: string;
      overview: string;
      featuredUnis: string[];
    }
  > = {
    canada: {
      pswBadge: "PGWP up to 3 Years • Pathway to PR",
      intakes: "September, January & May (varies by institution)",
      visaRate: "High Approval for Pakistani Students",
      avgTuition: "CAD 12,000 - CAD 35,000 / Year",
      overview:
        "Canada offers 103+ partner institutions across British Columbia, Ontario, Alberta, and Atlantic provinces. Students benefit from a Post-Graduation Work Permit (PGWP), pathways to Permanent Residency, and access to world-class polytechnics and universities.",
      featuredUnis: [
        "Thompson Rivers University",
        "Seneca College",
        "Algonquin College",
        "Humber Polytechnic",
        "BCIT",
        "University of New Brunswick",
        "Sheridan College",
        "SAIT",
      ],
    },
    ireland: {
      pswBadge: "2-Year Stay Back Visa • English-Speaking EU",
      intakes: "September & January / February",
      visaRate: "97% High Approval",
      avgTuition: "€10,000 - €20,000 / Year",
      overview:
        "Ireland is the only English-speaking EU country, home to the European HQs of Google, Meta, Apple, and Pfizer. Pakistani students benefit from a 2-year Graduate Stay Back visa after studies.",
      featuredUnis: [
        "Trinity College Dublin",
        "University College Dublin",
        "Dublin City University",
        "University of Galway",
        "University of Limerick",
        "Maynooth University",
        "Technological University Dublin",
        "Munster Technological University",
      ],
    },
    switzerland: {
      pswBadge: "Prestigious European Business & Hospitality Degrees",
      intakes: "September / October & February / March",
      visaRate: "95% Success Rate",
      avgTuition: "CHF 12,000 - CHF 28,000 / Year",
      overview:
        "Switzerland is globally respected for its business, hotel management, and executive education programs. Multi-campus institutions offer studies across Switzerland, Spain, and Germany.",
      featuredUnis: [
        "European University / EU Business School",
        "BHMS University Centre Switzerland",
        "Rushford Business School",
      ],
    },
    spain: {
      pswBadge: "Schengen Zone Access • Affordable EU Degrees",
      intakes: "September / October & February / March",
      visaRate: "95% Success Rate",
      avgTuition: "€5,000 - €18,000 / Year",
      overview:
        "Spain is a thriving destination for international students seeking world-class business, design, tourism, and hospitality programs in Barcelona, Madrid, Murcia, and Marbella at an affordable cost.",
      featuredUnis: [
        "Universidad Europea",
        "Toulouse Business School (Barcelona)",
        "UCAM Universidad Catolica",
        "CETT Barcelona School of Tourism",
        "EU Business School Barcelona",
        "SBS Swiss Business School",
        "Marbella International University Centre",
        "LaSalle College International Barcelona",
      ],
    },
    netherlands: {
      pswBadge: "1-Year Zoekjaar Post-Study Work Visa",
      intakes: "September & February",
      visaRate: "96% Success Rate",
      avgTuition: "€8,000 - €16,000 / Year",
      overview:
        "The Netherlands is continental Europe's top destination for English-taught degrees. Home to global tech leaders, sustainable energy institutes, and dynamic applied science universities with a post-study orientation year.",
      featuredUnis: [
        "CEG - ONCAMPUS Amsterdam",
        "SRH Haarlem University of Applied Sciences",
        "TIO University of Applied Sciences (Tio Business School)",
        "EIT InnoEnergy & ISE - Institute of Sustainable Energy",
      ],
    },
    germany: {
      pswBadge: "18-Month Post-Study Job Seeker Visa • EU Work Mobility",
      intakes: "Winter (September/October) & Summer (March/April)",
      visaRate: "96% Success Rate",
      avgTuition: "€0 - €14,000 / Year (Low / No Tuition options)",
      overview:
        "Germany is Europe's economic powerhouse with world-leading engineering, tech, and business education. Graduates receive an 18-month job seeker visa to launch high-paying European careers.",
      featuredUnis: [
        "University of Europe for Applied Sciences (UE)",
        "SRH Higher Education (Heidelberg / Berlin / NRW)",
        "GISMA University of Applied Sciences",
        "Berlin School of Business & Innovation (BSBI)",
        "Munich Business School",
        "IU International University of Applied Sciences",
        "Macromedia University of Applied Sciences",
        "ISM International School of Management",
      ],
    },
    finland: {
      pswBadge: "2-Year Post-Study Residence Permit • World #1 Education",
      intakes: "Autumn (August/September) & Spring (January)",
      visaRate: "97% High Approval",
      avgTuition: "€6,000 - €13,000 / Year (Scholarships up to 100%)",
      overview:
        "Finland offers the world's highest-ranked education system, safe and modern society, generous international scholarships, and clear pathways to Finnish permanent residency for graduates.",
      featuredUnis: [
        "LUT University (Lappeenranta-Lahti)",
        "University of Vaasa",
        "South-Eastern Finland UAS (XAMK)",
        "Metropolia UAS (Helsinki)",
        "Arcada UAS (Helsinki)",
        "LAB University of Applied Sciences",
        "Turku University of Applied Sciences",
        "Edunation Finland Network",
      ],
    },
    turkey: {
      pswBadge: "No IELTS Required • Affordable European Degrees",
      intakes: "Fall (September/October) & Spring (February)",
      visaRate: "99% High Approval",
      avgTuition: "$2,000 - $6,000 / Year",
      overview:
        "Turkey offers globally accredited degree programs taught 100% in English, low tuition fees, vibrant cultural life, and high visa approval rates for Pakistani students.",
      featuredUnis: [
        "Istanbul Aydin University",
        "Bahcesehir University",
        "Istanbul Medipol University",
        "Sabanci University",
        "Istinye University",
        "Yeditepe University",
        "Atlas University",
        "Uskudar University",
      ],
    },
    uk: {
      pswBadge: "2-Year Post Study Work (PSW) Visa",
      intakes: "September & January / February",
      visaRate: "98% Success Rate",
      avgTuition: "£13,000 - £22,000 / Year",
      overview:
        "Home to world-leading universities, 1-year Master's degree options, and 2-year Graduate Route post-study work permits for international graduates.",
      featuredUnis: [
        "University of Oxford",
        "University of Birmingham",
        "University of Bristol",
        "King's College London",
        "Brunel University",
        "University of Greenwich",
        "University of Manchester",
        "Queen Mary University",
      ],
    },
    australia: {
      pswBadge: "2 to 4 Years Post-Study Work Rights",
      intakes: "February & July / November",
      visaRate: "96% High Success",
      avgTuition: "AUD $24,000 - $38,000 / Year",
      overview:
        "High-standard education system, lucrative minimum wages, generous student work permissions, and globally ranked Group of Eight institutions.",
      featuredUnis: [
        "University of Sydney",
        "University of Western Australia",
        "Griffith University",
        "University of Tasmania",
      ],
    },
    usa: {
      pswBadge: "Up to 3-Year STEM OPT Extension",
      intakes: "Fall (August/September) & Spring (January)",
      visaRate: "95% Success Rate",
      avgTuition: "$18,000 - $35,000 / Year",
      overview:
        "World-class academic flexibility, unmatched research opportunities, and up to 3 years of post-study OPT work authorization for STEM graduates.",
      featuredUnis: [
        "Top State & Private Research Universities across 50 States",
        "Public Ivy Institutions",
        "Renowned Community Colleges & Transfer Pathways",
      ],
    },
    europe: {
      pswBadge: "Schengen 27-Country Mobility & Low Tuition",
      intakes: "September & February / March",
      visaRate: "97% Success Rate",
      avgTuition: "Low / Moderate Tuition Options",
      overview:
        "Affordable education opportunities across Schengen member countries including Norway, Italy, France, Germany, Finland, and Ireland.",
      featuredUnis: [
        "Leading Universities across Norway, Italy, France, Finland, Denmark, Belgium & Ireland",
      ],
    },
  };

  return (
    <section className="section-padding clean-destinations-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-gold" style={{ marginBottom: "12px" }}>
            <Globe2 size={15} /> Global Opportunities
          </div>
          <h2 className="section-title" style={{ fontSize: "2.75rem", letterSpacing: "-0.5px" }}>
            Explore Top Study Destinations
          </h2>
          <p className="section-subtitle">
            Choose your preferred country to learn about admission requirements, post-study work rights, and partner universities.
          </p>
        </div>

        {/* Clean, Minimalist Cards Grid with Country Images */}
        <div className="clean-destinations-grid">
          {destinations.map((dest) => {
            const coverImage = destinationCovers[dest.id] || "/Countries Background - Study Prime.jpg";
            return (
              <div
                key={dest.id}
                className="clean-destination-card"
                onClick={() => setSelectedDestination(dest)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelectedDestination(dest);
                }}
              >
                {/* Image Banner */}
                <div className="destination-image-box">
                  <img
                    src={coverImage}
                    alt={`${dest.name} Landscape`}
                    className="destination-cover-photo"
                  />
                  <div className="destination-image-overlay" />
                  <div className="destination-flag-badge">
                    {dest.flagImage && (
                      <img
                        src={dest.flagImage}
                        alt={dest.name}
                        className="flag-icon-mini"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = "none";
                        }}
                      />
                    )}
                    <span>{dest.name}</span>
                  </div>
                </div>

                {/* Minimalist Card Body */}
                <div className="destination-card-summary">
                  <h3 className="destination-title-text">{dest.name}</h3>
                  <p className="destination-brief-desc">{dest.description}</p>

                  <div className="destination-explore-btn">
                    <span>View Requirements &amp; Universities</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ============================================================
          INTERACTIVE DESTINATION DETAILS MODAL (ON CLICK)
      ============================================================ */}
      {selectedDestination && (
        <div
          className="dest-modal-backdrop"
          onClick={() => setSelectedDestination(null)}
        >
          <div
            className="dest-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              type="button"
              className="dest-modal-close-btn"
              onClick={() => setSelectedDestination(null)}
              aria-label="Close details"
            >
              <X size={22} />
            </button>

            {/* Modal Header Banner */}
            <div className="dest-modal-header-banner">
              <img
                src={destinationCovers[selectedDestination.id] || "/Countries Background - Study Prime.jpg"}
                alt={selectedDestination.name}
                className="dest-modal-banner-img"
              />
              <div className="dest-modal-banner-overlay" />
              <div className="dest-modal-header-text">
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
                  {selectedDestination.flagImage && (
                    <img
                      src={selectedDestination.flagImage}
                      alt={selectedDestination.name}
                      style={{ width: "36px", height: "24px", borderRadius: "4px", objectFit: "cover" }}
                    />
                  )}
                  <h2 style={{ color: "#FFFFFF", fontSize: "2rem", margin: 0 }}>
                    Study in {selectedDestination.name}
                  </h2>
                </div>
                <div className="dest-modal-psw-badge">
                  <Sparkles size={13} color="#FFB200" />
                  <span>
                    {destinationDetails[selectedDestination.id]?.pswBadge || "Post-Study Work Opportunities"}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="dest-modal-content">
              {/* Quick Metrics Bar */}
              <div className="dest-modal-metrics-bar">
                <div className="modal-metric-item">
                  <Calendar size={18} color="#FFA000" />
                  <div>
                    <div className="metric-title">Main Intakes</div>
                    <div className="metric-text">
                      {destinationDetails[selectedDestination.id]?.intakes || "Fall & Spring"}
                    </div>
                  </div>
                </div>
                <div className="modal-metric-item">
                  <ShieldCheck size={18} color="#10B981" />
                  <div>
                    <div className="metric-title">Visa Success</div>
                    <div className="metric-text highlight-green">
                      {destinationDetails[selectedDestination.id]?.visaRate || "High Approval"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div style={{ marginBottom: "24px" }}>
                <p style={{ color: "#475569", fontSize: "0.975rem", lineHeight: "1.7" }}>
                  {destinationDetails[selectedDestination.id]?.overview || selectedDestination.description}
                </p>
              </div>

              {/* Key Advantages */}
              <div style={{ marginBottom: "28px" }}>
                <h4 style={{ fontSize: "1.1rem", marginBottom: "14px", color: "var(--primary-navy)" }}>
                  Key Advantages:
                </h4>
                <ul className="modal-advantages-list">
                  {selectedDestination.keyHighlights.map((hl, i) => (
                    <li key={i}>
                      <CheckCircle2 size={18} color="#10B981" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Partner Institutions */}
              <div style={{ marginBottom: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                  <GraduationCap size={20} color="#0066FF" />
                  <h4 style={{ fontSize: "1.1rem", margin: 0, color: "var(--primary-navy)" }}>
                    Top Partner Universities
                  </h4>
                </div>
                <div className="modal-unis-grid">
                  {(destinationDetails[selectedDestination.id]?.featuredUnis || selectedDestination.popularUniversities).map((uni, idx) => (
                    <div key={idx} className="modal-uni-pill">
                      <MapPin size={14} color="#FFA000" style={{ flexShrink: 0 }} />
                      <span>{uni}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="dest-modal-footer">
                <button
                  type="button"
                  className="btn btn-accent"
                  style={{ flexGrow: 1, padding: "14px 24px" }}
                  onClick={() => {
                    setSelectedDestination(null);
                    onOpenConsultation?.();
                  }}
                >
                  Apply for {selectedDestination.name} <ArrowRight size={18} />
                </button>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setSelectedDestination(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
