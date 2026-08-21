import { useState, useMemo } from "react";
import { Link } from "@remix-run/react";
import { 
  Search, 
  MapPin, 
  Building2, 
  Globe2, 
  ChevronDown, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  GraduationCap,
  Award,
  X
} from "lucide-react";
import { partnerUniversities } from "~/data/siteData";

// Curated palette for authentic university crest badges
const UNIVERSITY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  uk: { bg: "#0B1B3A", text: "#FFA700", border: "#E2E8F0" },
  canada: { bg: "#7F1D1D", text: "#FFFFFF", border: "#FECACA" },
  australia: { bg: "#065F46", text: "#FFFFFF", border: "#A7F3D0" },
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
  if (c.includes("uk") || c.includes("united kingdom")) return "🇬🇧";
  if (c.includes("canada")) return "🇨🇦";
  if (c.includes("australia")) return "🇦🇺";
  if (c.includes("germany")) return "🇩🇪";
  if (c.includes("ireland")) return "🇮🇪";
  if (c.includes("turkey")) return "🇹🇷";
  if (c.includes("france")) return "🇫🇷";
  if (c.includes("finland")) return "🇫🇮";
  if (c.includes("netherlands")) return "🇳🇱";
  if (c.includes("switzerland")) return "🇨🇭";
  if (c.includes("spain")) return "🇪🇸";
  if (c.includes("usa") || c.includes("united states")) return "🇺🇸";
  return "🌍";
}

export function PartnersSection() {
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showAllModal, setShowAllModal] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState<number>(12);

  // Top featured partner universities for homepage view
  const featuredUniversities = useMemo(() => {
    const topKeywords = [
      "University of Birmingham",
      "Brunel University London",
      "University of Oxford",
      "University of Chester",
      "Thompson Rivers University",
      "University of Victoria",
      "The University of Sydney",
      "University of Western Australia",
      "Trinity College Dublin",
      "University College Dublin",
      "SRH Berlin University",
      "University of Europe for Applied Sciences",
      "Istanbul Aydin University",
      "Bahcesehir University",
      "Toulouse Business School",
      "LUT University",
    ];

    const found = partnerUniversities.filter((uni) =>
      topKeywords.some((kw) => uni.name.toLowerCase().includes(kw.toLowerCase()))
    );

    return found.length >= 12 ? found.slice(0, 12) : partnerUniversities.slice(0, 12);
  }, []);

  // Filtered universities for the full catalog modal
  const modalFilteredUniversities = useMemo(() => {
    return partnerUniversities.filter((uni) => {
      const matchesCountry =
        selectedCountry === "all"
          ? true
          : uni.country.toLowerCase().includes(selectedCountry.toLowerCase());

      const matchesSearch =
        uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ("city" in uni && uni.city && uni.city.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCountry && matchesSearch;
    });
  }, [selectedCountry, searchQuery]);

  return (
    <section className="clean-partners-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-flex">
          <div className="header-text-col">
            <div className="badge badge-gold" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
              <Globe2 size={15} /> Verified Institutional Panels
            </div>
            <h2 className="section-title" style={{ fontSize: "2.6rem", color: "var(--primary-navy)", lineHeight: "1.2", marginBottom: "10px" }}>
              450+ Panel Universities Worldwide
            </h2>
            <p className="section-subtitle" style={{ fontSize: "1.05rem", color: "var(--text-muted)", maxWidth: "620px" }}>
              Study Prime is an authorized direct representative for accredited institutions across the UK, Canada, Australia, Germany, Ireland, and Europe.
            </p>
          </div>

          <div className="header-action-col">
            <button
              type="button"
              className="btn btn-outline btn-view-all-unis"
              onClick={() => setShowAllModal(true)}
            >
              <Building2 size={16} />
              <span>Browse All 450+ Universities</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* Curated 12-Card Grid with High-Resolution Emblem Badges */}
        <div className="curated-partners-grid">
          {featuredUniversities.map((uni, idx) => {
            const initials = getUniversityInitials(uni.name);
            const flag = getCountryFlag(uni.country);
            const countryKey = Object.keys(UNIVERSITY_COLORS).find((k) =>
              uni.country.toLowerCase().includes(k)
            ) || "uk";
            const colorTheme = UNIVERSITY_COLORS[countryKey];

            return (
              <div key={idx} className="curated-partner-card">
                <div className="partner-emblem-header">
                  <div
                    className="partner-crest-badge"
                    style={{
                      background: `linear-gradient(135deg, ${colorTheme.bg}, #0066FF)`,
                      color: colorTheme.text,
                    }}
                  >
                    <GraduationCap size={16} />
                    <span>{initials}</span>
                  </div>
                  <span className="partner-flag-bubble">{flag}</span>
                </div>

                <div className="partner-card-body">
                  <div className="partner-meta-row">
                    <span className="partner-location-pill">
                      <MapPin size={12} color="#FFA700" />
                      {uni.country}
                    </span>
                    <span className="partner-verified-pill">
                      <CheckCircle2 size={11} color="#10B981" />
                      Authorized
                    </span>
                  </div>

                  <h3 className="partner-uni-name" title={uni.name}>
                    {uni.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Triggering Full Directory */}
        <div className="partners-bottom-cta-banner">
          <div className="banner-content">
            <div className="banner-text">
              <span className="banner-eyebrow">
                <Sparkles size={14} color="#FFA700" /> Direct University Admissions &amp; CAS Support
              </span>
              <h4 className="banner-title">Looking for a Specific University or Degree?</h4>
              <p className="banner-desc">Explore our full global network of 450+ verified partner institutions with instant search and country filters.</p>
            </div>
            <button
              type="button"
              className="btn btn-primary btn-load-all-unis"
              onClick={() => setShowAllModal(true)}
            >
              <span>Explore All 450+ Universities</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Full 450+ Partner Universities Interactive Modal */}
      {showAllModal && (
        <div className="dest-modal-backdrop" onClick={() => setShowAllModal(false)}>
          <div 
            className="dest-modal-dialog full-unis-modal-dialog" 
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="dest-modal-close-btn"
              onClick={() => setShowAllModal(false)}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="modal-top-header">
              <div className="badge badge-gold" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                <Building2 size={14} /> Full Panel Directory ({partnerUniversities.length} Institutions)
              </div>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--primary-navy)", margin: "0 0 16px 0" }}>
                Verified Partner Universities &amp; Colleges
              </h3>

              {/* Modal Search Bar */}
              <div className="modal-search-row">
                <div className="dest-search-wrap" style={{ flexGrow: 1 }}>
                  <Search size={18} className="search-icon-inside" />
                  <input
                    type="text"
                    placeholder="Search university by name, city, or keyword..."
                    className="dest-search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                </div>
              </div>

              {/* Country Filter Tabs */}
              <div className="modal-country-pills">
                {[
                  { id: "all", label: "All Countries" },
                  { id: "uk", label: "🇬🇧 UK" },
                  { id: "canada", label: "🇨🇦 Canada" },
                  { id: "australia", label: "🇦🇺 Australia" },
                  { id: "germany", label: "🇩🇪 Germany" },
                  { id: "ireland", label: "🇮🇪 Ireland" },
                  { id: "turkey", label: "🇹🇷 Turkey" },
                  { id: "france", label: "🇫🇷 France" },
                  { id: "finland", label: "🇫🇮 Finland" },
                  { id: "netherlands", label: "🇳🇱 Netherlands" },
                  { id: "switzerland", label: "🇨🇭 Switzerland" },
                  { id: "spain", label: "🇪🇸 Spain" },
                ].map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    className={`modal-country-btn ${selectedCountry === c.id ? "active" : ""}`}
                    onClick={() => setSelectedCountry(c.id)}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Modal Body: Searchable Grid */}
            <div className="modal-unis-scrollable-body">
              <div className="modal-unis-grid-layout">
                {modalFilteredUniversities.slice(0, visibleCount * 3).map((uni, i) => {
                  const initials = getUniversityInitials(uni.name);
                  const flag = getCountryFlag(uni.country);

                  return (
                    <div key={i} className="modal-uni-row-card">
                      <div className="modal-uni-crest-box">
                        <span className="modal-uni-flag-mini">{flag}</span>
                        <span className="modal-uni-initials">{initials}</span>
                      </div>
                      <div className="modal-uni-info">
                        <h4 className="modal-uni-title">{uni.name}</h4>
                        <span className="modal-uni-loc">
                          <MapPin size={12} color="#FFA700" />
                          {uni.city ? `${uni.city}, ` : ""}
                          {uni.country}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {modalFilteredUniversities.length === 0 && (
                <div style={{ textAlign: "center", padding: "50px 20px", color: "#64748B" }}>
                  <Building2 size={42} color="#CBD5E1" style={{ margin: "0 auto 12px" }} />
                  <p>No partner universities found matching "{searchQuery}".</p>
                </div>
              )}

              {visibleCount * 3 < modalFilteredUniversities.length && (
                <div style={{ textAlign: "center", marginTop: "24px" }}>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => setVisibleCount((prev) => prev + 12)}
                    style={{ padding: "10px 22px", fontSize: "0.9rem" }}
                  >
                    <span>Load More Institutions ({modalFilteredUniversities.length - visibleCount * 3} remaining)</span>
                    <ChevronDown size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
