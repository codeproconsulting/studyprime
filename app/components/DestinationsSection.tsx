import { useState, useEffect, useRef } from "react";
import { Link } from "@remix-run/react";
import { 
  ArrowRight, 
  Globe2, 
  CheckCircle2, 
  GraduationCap, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight,
  MapPin,
  Clock,
  Compass
} from "lucide-react";
import { destinations, type StudyDestination } from "~/data/siteData";

export function DestinationsSection() {
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
    france: "/images/destinations/france.jpg",
    europe: "/images/destinations/europe.jpg",
  };

  const countryUniCounts: Record<string, number> = {
    canada: 103,
    uk: 100,
    australia: 40,
    germany: 22,
    france: 30,
    ireland: 42,
    finland: 18,
    netherlands: 12,
    switzerland: 8,
    spain: 15,
    turkey: 20,
    usa: 50,
    europe: 35,
  };

  // Top featured destinations for the homepage carousel
  const featuredDestinations = destinations;

  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScrollBounds = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      
      const cardWidth = 380; // approximate width + gap
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(newIndex, featuredDestinations.length - 1));
    }
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (el) {
      el.addEventListener("scroll", checkScrollBounds, { passive: true });
      checkScrollBounds();
      return () => el.removeEventListener("scroll", checkScrollBounds);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollToIndex = (idx: number) => {
    if (sliderRef.current) {
      const cardWidth = 380;
      sliderRef.current.scrollTo({ left: idx * cardWidth, behavior: "smooth" });
      setActiveIndex(idx);
    }
  };

  return (
    <section className="section-padding clean-destinations-section">
      <div className="container">
        {/* Section Header with Carousel Arrows */}
        <div className="dest-carousel-header">
          <div className="dest-header-text">
            <div className="badge badge-gold" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
              <Globe2 size={15} /> Top Study Destinations
            </div>
            <h2 className="section-title" style={{ fontSize: "2.6rem", color: "var(--primary-navy)", lineHeight: "1.2", marginBottom: "10px" }}>
              Explore Global Academic Hubs
            </h2>
            <p className="section-subtitle" style={{ fontSize: "1.02rem", color: "var(--text-muted)", maxWidth: "620px" }}>
              Choose your destination to view dedicated admission criteria, post-study work routes, and verified university partner networks.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="dest-slider-nav-buttons">
            <button
              type="button"
              className={`dest-nav-btn ${!canScrollLeft ? "disabled" : ""}`}
              onClick={() => scroll("left")}
              aria-label="Previous destination"
              disabled={!canScrollLeft}
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              className={`dest-nav-btn ${!canScrollRight ? "disabled" : ""}`}
              onClick={() => scroll("right")}
              aria-label="Next destination"
              disabled={!canScrollRight}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div 
          className="dest-carousel-track" 
          ref={sliderRef}
        >
          {featuredDestinations.map((dest, idx) => {
            const coverImage = destinationCovers[dest.id] || "/Countries Background - Study Prime.jpg";
            const uniCount = countryUniCounts[dest.id] || dest.popularUniversities.length;

            return (
              <div key={dest.id} className="dest-carousel-item">
                <div className="dest-carousel-card">
                  {/* Card Banner Image */}
                  <Link to={`/destinations/${dest.id}`} className="dest-carousel-img-wrap">
                    <img
                      src={coverImage}
                      alt={`${dest.name} Landscape`}
                      className="dest-carousel-photo"
                      loading="lazy"
                    />
                    <div className="dest-carousel-img-overlay" />
                    
                    {/* Country Badge */}
                    <div className="dest-carousel-flag-badge">
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

                    {/* Uni Count Tag */}
                    <div className="dest-carousel-uni-tag">
                      <GraduationCap size={13} color="#FFA700" />
                      <span>{uniCount}+ Universities</span>
                    </div>
                  </Link>

                  {/* Card Body */}
                  <div className="dest-carousel-body">
                    <h3 className="dest-carousel-title">
                      <Link to={`/destinations/${dest.id}`}>{dest.name}</Link>
                    </h3>
                    <p className="dest-carousel-desc">{dest.description}</p>

                    {/* Quick Highlights */}
                    <div className="dest-carousel-perks">
                      {dest.keyHighlights.slice(0, 2).map((hl, i) => (
                        <div key={i} className="perk-row">
                          <CheckCircle2 size={15} color="#10B981" style={{ flexShrink: 0 }} />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button: Dedicated Page Link */}
                    <div className="dest-carousel-footer">
                      <Link to={`/destinations/${dest.id}`} className="btn-dest-explore">
                        <span>Explore {dest.name} Guide</span>
                        <ArrowRight size={15} className="arrow-right-icon" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Indicator & View All Button */}
        <div className="dest-carousel-bottom-bar">
          <div className="dest-carousel-dots">
            {featuredDestinations.slice(0, Math.min(featuredDestinations.length, 8)).map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                className={`dest-dot ${activeIndex === dotIdx ? "active" : ""}`}
                onClick={() => scrollToIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>

          <div className="dest-view-all-wrapper">
            <Link to="/destinations" className="btn btn-primary btn-all-destinations">
              <span>View All 12+ Study Destinations</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
