import { useState, useMemo } from "react";
import { Search, MapPin, Building2, Globe2, ChevronDown } from "lucide-react";
import { partnerUniversities, turkishUniversities, ukUniversities, australianUniversities, irishUniversities, swissUniversities, spanishUniversities, canadianUniversities, dutchUniversities, germanUniversities, finnishUniversities, frenchUniversities } from "~/data/siteData";

export function PartnersSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(36);

  const filteredUniversities = useMemo(() => {
    return partnerUniversities.filter((uni) => {
      const matchesCountry =
        selectedFilter === "all"
          ? true
          : selectedFilter === "turkey"
            ? uni.country.toLowerCase().includes("turkey")
            : selectedFilter === "ireland"
              ? uni.country.toLowerCase() === "ireland"
              : selectedFilter === "switzerland"
                ? uni.country.toLowerCase() === "switzerland"
                : selectedFilter === "spain"
                  ? uni.country.toLowerCase() === "spain"
                  : selectedFilter === "netherlands"
                    ? uni.country.toLowerCase().includes("netherlands") || uni.country.toLowerCase().includes("holland")
                    : selectedFilter === "germany"
                      ? uni.country.toLowerCase().includes("germany")
                      : selectedFilter === "finland"
                        ? uni.country.toLowerCase().includes("finland")
                        : selectedFilter === "france"
                          ? uni.country.toLowerCase().includes("france")
                          : selectedFilter === "canada"
                            ? uni.country.toLowerCase() === "canada"
                            : selectedFilter === "uk"
                              ? uni.country.toLowerCase().includes("united kingdom")
                              : selectedFilter === "australia"
                                ? uni.country.toLowerCase().includes("australia")
                                : true;

      const matchesSearch =
        uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ("city" in uni && (uni as any).city.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCountry && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  const visibleList = filteredUniversities.slice(0, visibleCount);

  return (
    <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        <div className="section-header">
          <div className="badge badge-gold">
            <Globe2 size={14} /> Official Representative
          </div>
          <h2 className="section-title">Partner Universities &amp; Higher Education Institutions</h2>
          <p className="section-subtitle">
            Study Prime is an authorized international representative for prestigious institutions worldwide across the UK, Turkey, Ireland, and Australia.
          </p>
        </div>

        {/* Filter Tabs & Search */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", marginBottom: "36px" }}>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button
              type="button"
              className={`btn ${selectedFilter === "all" ? "btn-primary" : "btn-outline"}`}
              style={{ padding: "10px 18px", fontSize: "0.9rem" }}
              onClick={() => {
                setSelectedFilter("all");
                setVisibleCount(36);
              }}
            >
              All Panel Institutions ({partnerUniversities.length})
            </button>
            <button
              type="button"
              className={`btn ${selectedFilter === "turkey" ? "btn-primary" : "btn-outline"}`}
              style={{ padding: "10px 18px", fontSize: "0.9rem" }}
              onClick={() => {
                setSelectedFilter("turkey");
                setVisibleCount(36);
              }}
            >
              🇹🇷 Universities in Turkey ({turkishUniversities.length})
            </button>
            <button
              type="button"
              className={`btn ${selectedFilter === "ireland" ? "btn-primary" : "btn-outline"}`}
              style={{ padding: "10px 18px", fontSize: "0.9rem" }}
              onClick={() => {
                setSelectedFilter("ireland");
                setVisibleCount(36);
              }}
            >
              🇮🇪 Ireland ({irishUniversities.length})
            </button>
            <button
              type="button"
              className={`btn ${selectedFilter === "switzerland" ? "btn-primary" : "btn-outline"}`}
              style={{ padding: "10px 18px", fontSize: "0.9rem" }}
              onClick={() => {
                setSelectedFilter("switzerland");
                setVisibleCount(36);
              }}
            >
              🇨🇭 Switzerland ({swissUniversities.length})
            </button>
            <button
              type="button"
              className={`btn ${selectedFilter === "spain" ? "btn-primary" : "btn-outline"}`}
              style={{ padding: "10px 18px", fontSize: "0.9rem" }}
              onClick={() => {
                setSelectedFilter("spain");
                setVisibleCount(36);
              }}
            >
              🇪🇸 Spain ({spanishUniversities.length})
            </button>
            <button
              type="button"
              className={`btn ${selectedFilter === "netherlands" ? "btn-primary" : "btn-outline"}`}
              style={{ padding: "10px 18px", fontSize: "0.9rem" }}
              onClick={() => {
                setSelectedFilter("netherlands");
                setVisibleCount(36);
              }}
            >
              🇳🇱 Netherlands ({dutchUniversities.length})
            </button>
            <button
              type="button"
              className={`btn ${selectedFilter === "germany" ? "btn-primary" : "btn-outline"}`}
              style={{ padding: "10px 18px", fontSize: "0.9rem" }}
              onClick={() => {
                setSelectedFilter("germany");
                setVisibleCount(36);
              }}
            >
              🇩🇪 Germany ({germanUniversities.length})
            </button>
            <button
              type="button"
              className={`btn ${selectedFilter === "finland" ? "btn-primary" : "btn-outline"}`}
              style={{ padding: "10px 18px", fontSize: "0.9rem" }}
              onClick={() => {
                setSelectedFilter("finland");
                setVisibleCount(36);
              }}
            >
              🇫🇮 Finland ({finnishUniversities.length})
            </button>
            <button
              type="button"
              className={`btn ${selectedFilter === "france" ? "btn-primary" : "btn-outline"}`}
              style={{ padding: "10px 18px", fontSize: "0.9rem" }}
              onClick={() => {
                setSelectedFilter("france");
                setVisibleCount(36);
              }}
            >
              🇫🇷 France ({frenchUniversities.length})
            </button>
            <button
              type="button"
              className={`btn ${selectedFilter === "canada" ? "btn-primary" : "btn-outline"}`}
              style={{ padding: "10px 18px", fontSize: "0.9rem" }}
              onClick={() => {
                setSelectedFilter("canada");
                setVisibleCount(36);
              }}
            >
              🇨🇦 Canada ({canadianUniversities.length})
            </button>
            <button
              type="button"
              className={`btn ${selectedFilter === "uk" ? "btn-primary" : "btn-outline"}`}
              style={{ padding: "10px 18px", fontSize: "0.9rem" }}
              onClick={() => {
                setSelectedFilter("uk");
                setVisibleCount(36);
              }}
            >
              🇬🇧 United Kingdom ({ukUniversities.length})
            </button>
            <button
              type="button"
              className={`btn ${selectedFilter === "australia" ? "btn-primary" : "btn-outline"}`}
              style={{ padding: "10px 18px", fontSize: "0.9rem" }}
              onClick={() => {
                setSelectedFilter("australia");
                setVisibleCount(36);
              }}
            >
              🇦🇺 Australia ({australianUniversities.length})
            </button>
          </div>

          {/* Search Box */}
          <div style={{ position: "relative", minWidth: "280px" }}>
            <Search size={18} color="#94A3B8" style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }} />
            <input
              type="text"
              placeholder="Search university, campus or city..."
              className="form-control"
              style={{ paddingLeft: "40px", fontSize: "0.9rem", height: "44px" }}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(36);
              }}
            />
          </div>
        </div>

        {/* Universities Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
          {visibleList.map((uni, idx) => (
            <div
              key={idx}
              style={{
                background: "#FFFFFF",
                border: "1px solid var(--border-light)",
                borderRadius: "14px",
                padding: "18px 20px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.03)",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                transition: "all 0.2s ease-in-out",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  background: "#F8FAFC",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  overflow: "hidden",
                  border: "1px solid #ECEFF3",
                }}
              >
                <img
                  src={uni.logo}
                  alt={uni.name}
                  style={{ width: "100%", height: "100%", objectFit: "contain", padding: "4px" }}
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", overflow: "hidden", flexGrow: 1 }}>
                <h4
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "var(--primary-navy)",
                    lineHeight: "1.25",
                    marginBottom: "4px",
                    fontFamily: "var(--font-heading)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  title={uni.name}
                >
                  {uni.name}
                </h4>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.8rem", color: "#64748B" }}>
                  <MapPin size={12} color="#FFA000" style={{ flexShrink: 0 }} />
                  <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {"city" in uni && (uni as any).city ? `${(uni as any).city}, ` : ""}
                    {uni.country}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredUniversities.length && (
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => setVisibleCount((prev) => prev + 36)}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              <span>Load More Universities ({filteredUniversities.length - visibleCount} remaining)</span>
              <ChevronDown size={16} />
            </button>
          </div>
        )}

        {filteredUniversities.length === 0 && (
          <div style={{ textAlign: "center", padding: "50px 20px", color: "#64748B" }}>
            <Building2 size={40} color="#CBD5E1" style={{ margin: "0 auto 12px" }} />
            <p>No universities found matching "{searchQuery}".</p>
          </div>
        )}
      </div>
    </section>
  );
}

