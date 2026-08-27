import { useState, useMemo } from "react";
import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { 
  Search, 
  Building2, 
  MapPin, 
  ChevronDown,
  ArrowLeft,
  GraduationCap,
  CheckCircle2
} from "lucide-react";
import { partnerUniversities } from "~/data/siteData";
import { getOfficialUniversityLogo } from "~/utils/universityLogos";

export const meta: MetaFunction = () => [
  { title: "Partner Universities | Study Prime — 450+ Global Partner Institutions" },
  { name: "description", content: "Browse Study Prime's full network of 450+ authorized partner universities across the UK, USA, Australia, Canada, Europe, and beyond." },
];

const COUNTRY_FILTERS = [
  { id: "all", label: "All Countries" },
  { id: "uk", label: "🇬🇧 UK" },
  { id: "new-zealand", label: "🇳🇿 New Zealand" },
  { id: "malaysia", label: "🇲🇾 Malaysia" },
  { id: "turkey", label: "🇹🇷 Turkey" },
  { id: "sweden", label: "🇸🇪 Sweden" },
  { id: "finland", label: "🇫🇮 Finland" },
  { id: "hungary", label: "🇭🇺 Hungary" },
  { id: "usa", label: "🇺🇸 USA" },
  { id: "germany", label: "🇩🇪 Germany" },
  { id: "france", label: "🇫🇷 France" },
  { id: "malta", label: "🇲🇹 Malta" },
  { id: "canada", label: "🇨🇦 Canada" },
  { id: "australia", label: "🇦🇺 Australia" },
  { id: "ireland", label: "🇮🇪 Ireland" },
  { id: "uae", label: "🇦🇪 UAE" },
  { id: "spain", label: "🇪🇸 Spain" },
  { id: "netherlands", label: "🇳🇱 Netherlands" },
  { id: "switzerland", label: "🇨🇭 Switzerland" },
  { id: "portugal", label: "🇵🇹 Portugal" },
  { id: "japan", label: "🇯🇵 Japan" },
  { id: "czech-republic", label: "🇨🇿 Czech Republic" },
  { id: "latvia", label: "🇱🇻 Latvia" },
  { id: "cyprus", label: "🇨🇾 Cyprus" },
];

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
  if (c.includes("malaysia")) return "🇲🇾";
  if (c.includes("sweden")) return "🇸🇪";
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

function matchesCountryFilter(uni: { name: string; country: string; city?: string }, selectedCountry: string): boolean {
  if (selectedCountry === "all") return true;
  const country = uni.country.toLowerCase();
  const city = (uni.city ?? "").toLowerCase();
  switch (selectedCountry) {
    case "malaysia": return country.includes("malaysia") || ["kuala lumpur","subang","petaling","sunway","miri","semenyih","putrajaya","damansara","nilai","shah alam"].some(c => city.includes(c));
    case "sweden": return country.includes("sweden") || ["lund","stockholm","uppsala","gothenburg","jönköping","växjö","halmstad","skövde","malmö","linköping"].some(c => city.includes(c));
    case "malta": return country.includes("malta") || ["msida","valletta","paola","swieqi","sliema","bormla","floriana","mosta","birkirkara","gzira","hamrun","luqa","smartcity"].some(c => city.includes(c));
    case "cyprus": return country.includes("cyprus") || ["nicosia","famagusta","limassol"].some(c => city.includes(c));
    case "latvia": return country.includes("latvia") || city.includes("riga");
    case "hungary": return country.includes("hungary") || ["budapest","gyor","győr","pecs","pécs","miskolc","kecskemet"].some(c => city.includes(c));
    case "czech-republic": return country.includes("czech") || ["prague","pilsen","plzeň"].some(c => city.includes(c));
    case "japan": return country.includes("japan") || ["tokyo","kyoto","gunma","osaka"].some(c => city.includes(c));
    case "portugal": return country.includes("portugal") || city.includes("lisbon");
    case "usa": return country.includes("united states") || country.includes("usa");
    case "new-zealand": return country.includes("zealand") || country.includes("nz");
    case "uae": return country.includes("emirates") || country.includes("uae") || ["dubai","ajman","rak"].some(c => city.includes(c));
    default: return country.includes(selectedCountry);
  }
}

export default function UniversitiesPage() {
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(48);

  const filtered = useMemo(() => {
    return partnerUniversities.filter((uni) => {
      const matchesCountry = matchesCountryFilter(uni, selectedCountry);
      const matchesSearch =
        searchQuery.trim() === "" ||
        uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (uni.city && uni.city.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCountry && matchesSearch;
    });
  }, [selectedCountry, searchQuery]);

  return (
    <main className="unis-page">
      {/* Hero Strip */}
      <section className="unis-hero-strip">
        <div className="container">
          <div className="unis-hero-inner">
            <Link to="/" className="unis-back-link">
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <div className="section-eyebrow section-eyebrow-gold" style={{ marginTop: "20px" }}>
              <span className="eyebrow-dot" />
              450+ Authorized Partners
            </div>

            <h1 className="unis-hero-title">
              Our Global Partner{" "}
              <span className="heading-accent">Universities</span>
            </h1>
            <span className="section-heading-underline" />
            <p className="unis-hero-desc">
              Study Prime is an authorized representative for 450+ accredited institutions across the UK, Australia, USA, Canada, Europe, and beyond.
            </p>

            <div className="unis-hero-stats">
              <div className="unis-stat-pill">
                <GraduationCap size={16} />
                <strong>{partnerUniversities.length}+</strong> Universities
              </div>
              <div className="unis-stat-pill">
                <MapPin size={16} />
                <strong>22</strong> Countries
              </div>
              <div className="unis-stat-pill">
                <CheckCircle2 size={16} />
                <strong>100%</strong> Authorized
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search + Filter Bar */}
      <section className="unis-filter-bar-section">
        <div className="container">
          <div className="unis-search-wrap">
            <Search size={18} className="unis-search-icon" />
            <input
              type="text"
              placeholder="Search by university name, city, or country..."
              className="unis-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                className="unis-search-clear"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          <div className="unis-filter-pills">
            {COUNTRY_FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                className={`unis-filter-btn ${selectedCountry === f.id ? "active" : ""}`}
                onClick={() => { setSelectedCountry(f.id); setVisibleCount(48); }}
              >
                {f.label}
              </button>
            ))}
          </div>

          <p className="unis-results-count">
            Showing <strong>{Math.min(visibleCount, filtered.length)}</strong> of{" "}
            <strong>{filtered.length}</strong> institutions
            {selectedCountry !== "all" && ` · ${COUNTRY_FILTERS.find(f => f.id === selectedCountry)?.label}`}
          </p>
        </div>
      </section>

      {/* University Grid */}
      <section className="unis-grid-section">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="unis-empty-state">
              <Building2 size={52} color="#CBD5E1" />
              <h3>No universities found</h3>
              <p>Try adjusting your search or clearing the country filter.</p>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => { setSearchQuery(""); setSelectedCountry("all"); }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="unis-cards-grid">
                {filtered.slice(0, visibleCount).map((uni, i) => {
                  const initials = getUniversityInitials(uni.name);
                  const flag = getCountryFlag(uni.country);
                  const officialLogo = getOfficialUniversityLogo(uni.name, uni.country, uni.logo);

                  return (
                    <div key={i} className="unis-card">
                      <div className="unis-card-logo-row">
                        <div className="unis-logo-box">
                          {officialLogo ? (
                            <img
                              src={officialLogo}
                              alt={`${uni.name} logo`}
                              className="unis-logo-img"
                              loading="lazy"
                              onError={(e) => {
                                (e.currentTarget as HTMLImageElement).style.display = "none";
                              }}
                            />
                          ) : (
                            <span className="unis-initials">{initials}</span>
                          )}
                        </div>
                        <span className="unis-flag">{flag}</span>
                      </div>

                      <div className="unis-card-body">
                        <h3 className="unis-card-name">{uni.name}</h3>
                        <div className="unis-card-meta">
                          <span className="unis-location-tag">
                            <MapPin size={11} />
                            {uni.city ? `${uni.city}, ` : ""}{uni.country}
                          </span>
                          <span className="unis-partner-tag">
                            <CheckCircle2 size={10} />
                            Authorized
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {visibleCount < filtered.length && (
                <div className="unis-load-more-wrap">
                  <button
                    type="button"
                    className="btn btn-outline unis-load-more-btn"
                    onClick={() => setVisibleCount((prev) => prev + 48)}
                  >
                    <span>Load More Institutions</span>
                    <ChevronDown size={16} />
                    <span className="unis-remaining-badge">
                      {filtered.length - visibleCount} remaining
                    </span>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="unis-cta-section">
        <div className="container">
          <div className="unis-cta-inner">
            <div className="unis-cta-text">
              <h2>Ready to Apply to Your Dream University?</h2>
              <p>Our counselors provide free initial assessments and guide you from application to visa approval.</p>
            </div>
            <div className="unis-cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Book Free Consultation
              </Link>
              <Link to="/services" className="btn btn-outline">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
