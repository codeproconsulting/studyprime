import { useState, useEffect, useRef } from "react";
import {
  Star,
  CheckCircle2,
  Quote,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  GraduationCap,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { googleReviews } from "~/data/siteData";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselTrackRef = useRef<HTMLDivElement>(null);

  // Automatic gentle swiping every 4.5 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % googleReviews.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Scroll to active card
  useEffect(() => {
    if (carouselTrackRef.current) {
      const track = carouselTrackRef.current;
      const cardWidth = track.scrollWidth / googleReviews.length;
      track.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + googleReviews.length) % googleReviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % googleReviews.length);
  };

  return (
    <section className="google-reviews-section section-padding">
      <div className="container">
        {/* Header Block */}
        <div className="section-head centered">
          <div className="section-eyebrow section-eyebrow-gold">
            <span className="eyebrow-dot" />
            <Sparkles size={12} />
            Student Success Stories
          </div>
          <h2 className="section-heading">
            Trusted by Hundreds of{" "}
            <span className="heading-accent">Pakistani Students</span>
          </h2>
          <span className="section-heading-underline centered" />
          <p className="section-desc" style={{ marginTop: "18px", margin: "18px auto 0" }}>
            Real experiences from students who successfully secured their university admissions and study visas with Study Prime.
          </p>

          {/* Official Google Reviews Trust Badge */}
          <div className="google-trust-badge-card">
            <div className="google-logo-badge">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" />
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.97 0 12s.45 3.82 1.25 5.42l4.03-3.15z" />
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
              </svg>
              <span className="google-brand-text">Google Reviews</span>
            </div>

            <div className="google-rating-score-group">
              <span className="google-numeric-score">5.0</span>
              <div className="google-stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={17} fill="#FFA700" color="#FFA700" />
                ))}
              </div>
              <span className="google-review-count">128+ Verified Reviews</span>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Study+Prime+Galleria+Mall+I-8+Markaz+Islamabad"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-google-maps-link"
              title="View all Google Reviews for Study Prime"
            >
              <span>View Business Reviews</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>



        {/* Single Row Swiper Carousel with Controls */}
        <div
          className="reviews-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Controls */}
          <div className="carousel-nav-buttons">
            <button
              type="button"
              className="carousel-btn-nav prev-nav"
              onClick={handlePrev}
              aria-label="Previous review"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="carousel-btn-nav next-nav"
              onClick={handleNext}
              aria-label="Next review"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Carousel Single-Row Track */}
          <div className="reviews-carousel-track" ref={carouselTrackRef}>
            {googleReviews.map((rev, index) => {
              const initials = rev.authorName
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2);

              const isActive = index === currentIndex;

              return (
                <div
                  key={rev.id}
                  className={`google-review-card carousel-card ${isActive ? "active-slide" : ""}`}
                >
                  {/* Top Card Header */}
                  <div className="rev-card-header">
                    <div className="rev-author-info">
                      <div className="rev-avatar-circle">
                        <span>{initials}</span>
                      </div>
                      <div className="rev-name-box">
                        <div className="rev-name-verified">
                          <span className="author-name-text">{rev.authorName}</span>
                          <span title="Verified Google Reviewer" style={{ display: "inline-flex" }}>
                            <CheckCircle2 size={14} color="#10B981" />
                          </span>
                        </div>
                        <span className="rev-time-text">{rev.relativeTime}</span>
                      </div>
                    </div>

                    <div className="rev-google-icon-watermark">
                      <svg width="18" height="18" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
                        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" />
                        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.97 0 12s.45 3.82 1.25 5.42l4.03-3.15z" />
                        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
                      </svg>
                    </div>
                  </div>

                  {/* Star Rating Row */}
                  <div className="rev-stars-row">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#FFA700" color="#FFA700" />
                    ))}
                    <span className="rev-verified-tag">Verified Visa Approval</span>
                  </div>

                  {/* Destination & University Tag */}
                  {rev.university && (
                    <div className="rev-uni-pill">
                      <GraduationCap size={13} color="#081736" />
                      <span>{rev.university} ({rev.destination})</span>
                    </div>
                  )}

                  {/* Review Body */}
                  <p className="rev-text-content">
                    "{rev.reviewText}"
                  </p>
                </div>
              );
            })}
          </div>

          {/* Carousel Pagination Dots */}
          <div className="carousel-dots-indicator">
            {googleReviews.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`carousel-dot ${i === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
