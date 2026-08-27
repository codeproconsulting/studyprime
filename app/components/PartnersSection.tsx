import { useState, useMemo } from "react";
import { Link } from "@remix-run/react";
import { 
  MapPin, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  GraduationCap
} from "lucide-react";
import { partnerUniversities } from "~/data/siteData";
import { getOfficialUniversityLogo } from "~/utils/universityLogos";

// Curated palette for authentic university crest badges
const UNIVERSITY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  usa: { bg: "#0F294A", text: "#FFFFFF", border: "#E11D48" },
  uk: { bg: "#0B1B3A", text: "#FFA700", border: "#E2E8F0" },
  australia: { bg: "#004B87", text: "#FFA700", border: "#BFDBFE" },
  "new-zealand": { bg: "#00247D", text: "#FFFFFF", border: "#CC0000" },
  japan: { bg: "#BC002D", text: "#FFFFFF", border: "#FEE2E2" },
  "czech-republic": { bg: "#11457E", text: "#FFFFFF", border: "#D7141A" },
  hungary: { bg: "#436F4D", text: "#FFFFFF", border: "#CD2A3E" },
  latvia: { bg: "#9E3039", text: "#FFFFFF", border: "#E2E8F0" },
  cyprus: { bg: "#D57800", text: "#FFFFFF", border: "#4E7037" },
  malta: { bg: "#CF142B", text: "#FFFFFF", border: "#E2E8F0" },
  portugal: { bg: "#006600", text: "#FFFFFF", border: "#FF0000" },
  uae: { bg: "#00732F", text: "#FFFFFF", border: "#FED7AA" },
  canada: { bg: "#7F1D1D", text: "#FFFFFF", border: "#FECACA" },
  germany: { bg: "#1E293B", text: "#F59E0B", border: "#E2E8F0" },
  ireland: { bg: "#047857", text: "#FFFFFF", border: "#D1FAE5" },
  turkey: { bg: "#991B1B", text: "#FFFFFF", border: "#FEE2E2" },
  france: { bg: "#1E3A8A", text: "#FFFFFF", border: "#BFDBFE" },
  finland: { bg: "#1E40AF", text: "#FFFFFF", border: "#DBEAFE" },
  netherlands: { bg: "#C2410C", text: "#FFFFFF", border: "#FFEDD5" },
  switzerland: { bg: "#B91C1C", text: "#FFFFFF", border: "#FEE2E2" },
  spain: { bg: "#B45309", text: "#FFFFFF", border: "#FEF3C7" },
};

function getUniversityInitials(name: string): string {
  return name
    .replace(/University of | University| College| School of | Institute of | Institute/gi, "")
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase() || "UNI";
}

function getCountryFlag(country: string): string {
  const c = country.toLowerCase();
  if (c.includes("malta")) return "🇲🇹";
  if (c.includes("cyprus")) return "🇨🇾";
  if (c.includes("latvia")) return "🇱🇻";
  if (c.includes("hungary")) return "🇭🇺";
  if (c.includes("czech")) return "🇨🇿";
  if (c.includes("japan")) return "🇯🇵";
  if (c.includes("usa") || c.includes("united states")) return "🇺🇸";
  if (c.includes("uk") || c.includes("united kingdom")) return "🇬🇧";
  if (c.includes("zealand") || c.includes("nz")) return "🇳🇿";
  if (c.includes("portugal")) return "🇵🇹";
  if (c.includes("uae") || c.includes("emirates") || c.includes("dubai")) return "🇦🇪";
  if (c.includes("australia")) return "🇦🇺";
  if (c.includes("canada")) return "🇨🇦";
  if (c.includes("germany")) return "🇩🇪";
  if (c.includes("ireland")) return "🇮🇪";
  if (c.includes("turkey")) return "🇹🇷";
  if (c.includes("france")) return "🇫🇷";
  if (c.includes("finland")) return "🇫🇮";
  if (c.includes("netherlands")) return "🇳🇱";
  if (c.includes("switzerland")) return "🇨🇭";
  if (c.includes("spain")) return "🇪🇸";
  return "🌍";
}

export function PartnersSection() {
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Curated prominent partner universities including ProConsulting / FrogConsulting UK institutions + Global Network
  const slideshowUniversities = useMemo(() => {
    const topKeywords = [
      "University of Bradford",
      "Keele University",
      "Birmingham City University",
      "Heriot-Watt University",
      "Brunel University London",
      "University of Portsmouth",
      "University of Greenwich",
      "Coventry University",
      "University of East London",
      "University of Bedfordshire",
      "Leeds Beckett University",
      "Anglia Ruskin University",
      "De Montfort University",
      "University of Central Lancashire",
      "University of Derby",
      "University of Northampton",
      "University of West London",
      "Cardiff Metropolitan University",
      "Oxford Brookes University",
      "Sheffield Hallam University",
      "University of Hull",
      "University of Lincoln",
      "University of Chester",
      "University of Sunderland",
      "Teesside University",
      "Aston University",
      "University of Huddersfield",
      "Northumbria University",
      "University of Hertfordshire",
      "Middlesex University",
      "BPP University",
      "University of Malta",
      "Middlesex University Malta",
      "MCAST",
      "Global College Malta",
      "GBS Malta",
      "Kyoto Japanese Language School",
      "Nippon Academy",
      "Tokyo Cocoro Japanese Language School",
      "ISCTE Executive Education",
      "ISCTE Business School",
      "Arizona State University",
      "Northeastern University",
      "Illinois Institute of Technology",
      "Johns Hopkins University",
      "University of California, Riverside",
      "Lincoln University",
      "Middlesex University Dubai",
      "University of Wollongong in Dubai",
      "Curtin University Dubai",
      "Hult International Business School",
      "La Trobe University",
      "University of Newcastle",
      "Southern Cross University",
      "University of New England",
      "Le Cordon Bleu",
      "Murdoch College",
      "Australian Institute of Music",
      "Thompson Rivers University",
      "Trinity College Dublin",
      "SRH Berlin University",
      "University of Europe for Applied Sciences",
      "Istanbul Aydin University",
      "Bahcesehir University",
    ];

    const found = partnerUniversities.filter((uni) =>
      topKeywords.some((kw) => uni.name.toLowerCase().includes(kw.toLowerCase()))
    );

    return found.length > 0 ? found : partnerUniversities.slice(0, 60);
  }, []);

  // Split into 4 distinct vertical streams for multi-column parallax glide
  const verticalColumns = useMemo(() => {
    const col1: typeof slideshowUniversities = [];
    const col2: typeof slideshowUniversities = [];
    const col3: typeof slideshowUniversities = [];
    const col4: typeof slideshowUniversities = [];

    slideshowUniversities.forEach((uni, i) => {
      if (i % 4 === 0) col1.push(uni);
      else if (i % 4 === 1) col2.push(uni);
      else if (i % 4 === 2) col3.push(uni);
      else col4.push(uni);
    });

    return [col1, col2, col3, col4];
  }, [slideshowUniversities]);


  return (
    <section className="section-padding partners-section-wrapper" id="partners">
      <div className="container">
        {/* Section Header */}
        <div className="section-head-split">
          <div className="section-head-text">
            <div className="section-eyebrow section-eyebrow-gold">
              <span className="eyebrow-dot" />
              450+ Partner Institutions
            </div>
            <h2 className="section-heading">
              Our Authorized{" "}
              <span className="heading-accent">Partner Universities</span>
            </h2>
            <span className="section-heading-underline" />
            <p className="section-desc" style={{ marginTop: "16px" }}>
              Study Prime holds direct representation agreements with 450+ accredited world-class universities and pathway colleges across the UK, USA, Australia, Europe, and Canada.
            </p>
          </div>

          <div className="header-right">
            <Link
              to="/universities"
              className="btn btn-outline btn-view-all-unis"
            >
              <Building2 size={16} />
              <span>Explore All Universities</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Vertical Gliding Multi-Column Showcase (Upward Motion with Top/Bottom Disappearance) */}
        <div 
          className="uni-vertical-showcase-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="uni-vertical-grid">
            {verticalColumns.map((col, colIdx) => (
              <div 
                key={colIdx} 
                className={`uni-vertical-column col-${colIdx + 1} ${isPaused ? "paused" : ""}`}
              >
                <div className="uni-vertical-column-track">
                  {[...col, ...col].map((uni, idx) => {
                    const initials = getUniversityInitials(uni.name);
                    const flag = getCountryFlag(uni.country);
                    const countryKey = Object.keys(UNIVERSITY_COLORS).find((k) =>
                      uni.country.toLowerCase().includes(k)
                    ) || "uk";
                    const colorTheme = UNIVERSITY_COLORS[countryKey];
                    const officialLogo = getOfficialUniversityLogo(uni.name, uni.country, uni.logo);

                    return (
                      <Link
                        key={`${uni.name}-${colIdx}-${idx}`}
                        to="/universities"
                        className="uni-vertical-card"
                        title={`View all ${uni.country} partner universities`}
                      >
                        <div className="partner-emblem-header">
                          <div className="partner-logo-container">
                            {officialLogo ? (
                              <div className="partner-logo-emblem-wrap">
                                <img
                                  src={officialLogo}
                                  alt={`${uni.name} logo`}
                                  className="partner-official-logo-img"
                                  loading="lazy"
                                  onError={(e) => {
                                    (e.currentTarget as HTMLImageElement).style.display = "none";
                                  }}
                                />
                              </div>
                            ) : (
                              <div
                                className="partner-crest-badge"
                                style={{
                                  background: `linear-gradient(135deg, ${colorTheme.bg}, #081736)`,
                                  color: colorTheme.text,
                                }}
                              >
                                <GraduationCap size={14} />
                                <span>{initials}</span>
                              </div>
                            )}
                          </div>
                          <span className="partner-flag-bubble">{flag}</span>
                        </div>

                        <div className="partner-card-body">
                          <div className="partner-meta-row">
                            <span className="partner-location-pill">
                              <MapPin size={11} color="#FFA700" />
                              {uni.country}
                            </span>
                            <span className="partner-verified-pill">
                              <CheckCircle2 size={10} color="#10B981" />
                              Partner
                            </span>
                          </div>

                          <h3 className="partner-uni-name" title={uni.name}>
                            {uni.name}
                          </h3>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="partners-bottom-cta-banner">
          <div className="banner-content">
            <div className="banner-text">
              <h4 className="banner-title">Looking for a Specific University or Degree?</h4>
              <p className="banner-desc">Explore our full global network of verified partner institutions across Australia, the UK, Europe, and Canada.</p>
            </div>
            <Link
              to="/universities"
              className="btn btn-primary btn-load-all-unis"
            >
              <span>Explore All Universities</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

