import { useState } from "react";
import { Link, useOutletContext } from "@remix-run/react";
import { 
  ArrowRight, 
  Globe2, 
  CheckCircle2, 
  GraduationCap, 
  Building2, 
  Search, 
  Sparkles, 
  MapPin, 
  Clock, 
  ShieldCheck 
} from "lucide-react";
import { destinations, partnerUniversities, siteConfig } from "~/data/siteData";

export default function AllDestinationsPage() {
  const { openConsultation } = useOutletContext<{ openConsultation: () => void }>() || {};
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");

  const destinationCovers: Record<string, string> = {
    turkey: "/images/destinations/turkey.jpg",
    uk: "/images/destinations/uk.jpg",
    australia: "/images/destinations/australia.jpg",
    "new-zealand": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop",
    uae: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
    portugal: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=1600&auto=format&fit=crop",
    japan: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1600&auto=format&fit=crop",
    "czech-republic": "https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=1600&auto=format&fit=crop",
    hungary: "https://images.unsplash.com/photo-1549877452-9c387954fbc2?q=80&w=1600&auto=format&fit=crop",
    latvia: "https://images.unsplash.com/photo-1578637387939-43c525550085?q=80&w=1600&auto=format&fit=crop",
    cyprus: "https://images.unsplash.com/photo-1580837119756-563d608dd119?q=80&w=1600&auto=format&fit=crop",
    malta: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1600&auto=format&fit=crop",
    malaysia: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1600&auto=format&fit=crop",
    sweden: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=1600&auto=format&fit=crop",
    usa: "/images/destinations/usa.jpg",
    canada: "/images/destinations/canada.jpg",
    ireland: "/images/destinations/ireland.jpg",
    switzerland: "/images/destinations/switzerland.jpg",
    spain: "/images/destinations/spain.jpg",
    netherlands: "/images/destinations/netherlands.jpg",
    germany: "/images/destinations/germany.jpg",
    finland: "/images/destinations/finland.jpg",
    france: "/images/destinations/france.jpg",
    europe: "/images/destinations/europe.jpg",
  };

  const regionMapping: Record<string, string> = {
    uk: "europe",
    germany: "europe",
    france: "europe",
    ireland: "europe",
    finland: "europe",
    sweden: "europe",
    netherlands: "europe",
    switzerland: "europe",
    spain: "europe",
    turkey: "europe",
    portugal: "europe",
    "czech-republic": "europe",
    hungary: "europe",
    latvia: "europe",
    cyprus: "europe",
    malta: "europe",
    europe: "europe",
    canada: "north-america",
    usa: "north-america",
    australia: "oceania",
    "new-zealand": "oceania",
    uae: "middle-east",
    japan: "asia",
    malaysia: "asia",
  };

  const countryUniCounts: Record<string, number> = {
    canada: 103,
    uk: 100,
    australia: 32,
    "new-zealand": 33,
    uae: 23,
    japan: 7,
    "czech-republic": 3,
    hungary: 9,
    latvia: 1,
    cyprus: 3,
    malta: 20,
    malaysia: 18,
    sweden: 15,
    portugal: 3,
    germany: 22,
    france: 30,
    ireland: 42,
    finland: 18,
    netherlands: 12,
    switzerland: 8,
    spain: 15,
    turkey: 20,
    usa: 220,
    europe: 35,
  };

  const filteredDestinations = destinations.filter((dest) => {
    const matchesSearch = 
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.popularUniversities.some((u) => u.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesRegion = 
      selectedRegion === "all" || regionMapping[dest.id] === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  return (
    <div>
      {/* ── Header Banner ── */}
      <section className="dest-all-hero-banner">
        <div className="container">
          <h1 className="dest-all-hero-title">Choose Your Ideal Study Abroad Country</h1>
          <p className="dest-all-hero-subtitle">
            Explore 21+ premier international education destinations, post-study work rights, visa acceptance rates, and our 450+ partner university network.
          </p>

          {/* Search & Region Filter Bar */}
          <div className="dest-all-filter-bar">
            <div className="dest-search-input-box">
              <Search size={18} className="search-icon-inside" />
              <input
                type="text"
                placeholder="Search by country or university..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="dest-main-search"
              />
            </div>

            <div className="dest-region-pills">
              <button
                type="button"
                className={`region-pill-btn ${selectedRegion === "all" ? "active" : ""}`}
                onClick={() => setSelectedRegion("all")}
              >
                All Regions ({destinations.length})
              </button>
              <button
                type="button"
                className={`region-pill-btn ${selectedRegion === "asia" ? "active" : ""}`}
                onClick={() => setSelectedRegion("asia")}
              >
                Asia / Japan (1)
              </button>
              <button
                type="button"
                className={`region-pill-btn ${selectedRegion === "oceania" ? "active" : ""}`}
                onClick={() => setSelectedRegion("oceania")}
              >
                Australia &amp; NZ (2)
              </button>
              <button
                type="button"
                className={`region-pill-btn ${selectedRegion === "middle-east" ? "active" : ""}`}
                onClick={() => setSelectedRegion("middle-east")}
              >
                UAE / Middle East (1)
              </button>
              <button
                type="button"
                className={`region-pill-btn ${selectedRegion === "europe" ? "active" : ""}`}
                onClick={() => setSelectedRegion("europe")}
              >
                Europe (15)
              </button>
              <button
                type="button"
                className={`region-pill-btn ${selectedRegion === "north-america" ? "active" : ""}`}
                onClick={() => setSelectedRegion("north-america")}
              >
                North America (2)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Destinations Cards Catalog ── */}
      <section className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container">
          <div className="dest-catalog-grid">
            {filteredDestinations.map((dest) => {
              const coverImg = destinationCovers[dest.id] || "/Countries Background - Study Prime.jpg";
              const uniCount = countryUniCounts[dest.id] || dest.popularUniversities.length;

              return (
                <div key={dest.id} className="dest-catalog-card">
                  {/* Card Image Banner */}
                  <Link to={`/destinations/${dest.id}`} className="dest-card-img-link">
                    <div className="dest-catalog-img-wrap">
                      <img src={coverImg} alt={`${dest.name} Landscape`} className="dest-catalog-img" />
                      <div className="dest-catalog-img-overlay" />
                      
                      {/* Top Badges */}
                      <div className="dest-card-top-badges">
                        <div className="dest-flag-badge-pill">
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
                        <span className="dest-unis-badge">{uniCount}+ Universities</span>
                      </div>
                    </div>
                  </Link>

                  {/* Card Content Body */}
                  <div className="dest-catalog-body">
                    <h3 className="dest-catalog-title">
                      <Link to={`/destinations/${dest.id}`}>{dest.name}</Link>
                    </h3>
                    <p className="dest-catalog-desc">{dest.description}</p>

                    {/* Highlights List */}
                    <div className="dest-catalog-highlights">
                      {dest.keyHighlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="highlight-pill-row">
                          <CheckCircle2 size={15} color="#10B981" style={{ flexShrink: 0 }} />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Partner Preview */}
                    <div className="dest-catalog-uni-preview">
                      <div className="preview-label">
                        <GraduationCap size={14} color="#081736" />
                        <span>Top Panel Institutions:</span>
                      </div>
                      <div className="preview-uni-names">
                        {dest.popularUniversities.slice(0, 3).join(" • ")}
                        {dest.popularUniversities.length > 3 && ` +${dest.popularUniversities.length - 3} more`}
                      </div>
                    </div>

                    {/* Action Button Link */}
                    <div className="dest-catalog-footer">
                      <Link to={`/destinations/${dest.id}`} className="btn-explore-destination">
                        <span>Explore {dest.name} Details</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredDestinations.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 20px" }}>
              <p style={{ fontSize: "1.2rem", color: "#64748B", marginBottom: "16px" }}>
                No destination matched your search "{searchQuery}".
              </p>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedRegion("all");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Consultation CTA Banner ── */}
      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <div className="cta-banner-text">
                <h2>Undecided on which country matches your profile?</h2>
                <p>
                  Our senior international education advisors evaluate your academic scores, budget, and post-graduation goals to recommend the right country.
                </p>
              </div>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <button
                  type="button"
                  className="btn btn-accent"
                  onClick={openConsultation}
                >
                  Get Free Country Assessment <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
