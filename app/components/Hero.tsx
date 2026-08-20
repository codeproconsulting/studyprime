export function Hero({ onOpenConsultation }: { onOpenConsultation?: () => void }) {
  return (
    <section className="exact-hero-section">
      {/* Subtle Blueprint Grid Pattern */}
      <div className="hero-grid-pattern"></div>

      {/* Faint Architectural Landmark Background */}
      <div className="hero-background-landmarks">
        <img
          src="/Countries Background - Study Prime.jpg"
          alt="Study Prime Background Landmarks"
          className="landmarks-bg-img"
        />
      </div>

      <div className="container hero-container-relative">
        <div className="exact-hero-main-grid">
          {/* Left Column (Desktop) / Top Heading Group (Mobile) */}
          <div className="hero-left-content">
            <div className="hero-tagline-text">
              Your Study Abroad Partner
            </div>

            <h1 className="hero-main-title">
              <span className="title-row-1">We Invest In</span>
              <span className="title-row-2">
                <span className="highlight-future-box">
                  <span className="highlight-future-brush-bg"></span>
                  <span className="highlight-future-text">Your Future</span>
                </span>
              </span>
            </h1>

            {/* Desktop-only action row */}
            <div className="hero-action-row desktop-only-hero-action">
              <button
                type="button"
                className="btn-hero-assessment"
                onClick={onOpenConsultation}
              >
                Get Free Assessment
              </button>
            </div>

            {/* Desktop-only 200+ Satisfied Students Badge */}
            <div className="satisfied-students-badge desktop-only-trust-badge">
              <div className="student-avatars-group">
                <div className="avatar-circle avatar-1">
                  <img
                    src="/images/avatars/student-1.jpg"
                    alt="Satisfied Student"
                  />
                </div>
                <div className="avatar-circle avatar-2">
                  <img
                    src="/images/avatars/student-2.jpg"
                    alt="Satisfied Student"
                  />
                </div>
                <div className="avatar-circle avatar-3">
                  <img
                    src="/images/avatars/student-3.jpg"
                    alt="Satisfied Student"
                  />
                </div>
              </div>
              <div className="satisfied-students-info">
                <span className="students-count-num">200+</span>
                <span className="students-count-label">Satisfied Students</span>
              </div>
            </div>
          </div>

          {/* Right Column (Desktop) / Student Media Frame with Floating Mobile Elements */}
          <div className="hero-student-media-col">
            <div className="student-image-frame">
              <img
                src="/student.webp"
                alt="Study Prime Student"
                className="student-cutout-img"
              />

              {/* Mobile-Only Floating Action Button (Right Side of Student) */}
              <div className="mobile-floating-cta">
                <button
                  type="button"
                  className="btn-mobile-hero-assessment"
                  onClick={onOpenConsultation}
                >
                  Get Free Assessment
                </button>
              </div>

              {/* Mobile-Only Floating Trust Badge (Bottom Right of Student) */}
              <div className="mobile-floating-trust-badge">
                <div className="mobile-avatars-group">
                  <div className="mobile-avatar-circle circle-1"></div>
                  <div className="mobile-avatar-circle circle-2"></div>
                  <div className="mobile-avatar-circle circle-3"></div>
                </div>
                <div className="mobile-trust-info">
                  <span className="mobile-trust-label">Trusted by</span>
                  <span className="mobile-trust-count">200+ Students</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Results Banner */}
        <div className="results-partnership-banner">
          <div className="results-badge-white">
            <span className="results-badge-title">Results That Define a True Partnership</span>
          </div>

          {/* Yellow accent bar */}
          <div className="results-yellow-divider-bar"></div>

          <div className="results-stats-row-container">
            <div className="results-stat-group">
              <div className="results-stat-icon-wrap stat-card-icon-box">
                <svg viewBox="0 0 32 32" width="40" height="40" fill="none">
                  <rect width="32" height="32" rx="6" fill="#FFA700"/>
                  <path d="M7 10h18v3H7v-3z" fill="#081736"/>
                  <path d="M12 21l-4-4 1.5-1.5 2.5 2.5 7-7 1.5 1.5-8.5 8.5z" fill="#081736"/>
                </svg>
              </div>
              <div className="results-stat-text-wrap">
                <div className="results-stat-number">3500+</div>
                <div className="results-stat-label">Assessments Done</div>
              </div>
            </div>

            <div className="results-stat-group">
              <div className="results-stat-icon-wrap stat-globe-icon-box">
                <svg viewBox="0 0 32 32" width="40" height="40" fill="none">
                  <rect width="32" height="32" rx="6" fill="#FFA700"/>
                  <circle cx="16" cy="16" r="8" stroke="#081736" strokeWidth="2"/>
                  <ellipse cx="16" cy="16" rx="4" ry="8" stroke="#081736" strokeWidth="1.5"/>
                  <line x1="8" y1="16" x2="24" y2="16" stroke="#081736" strokeWidth="1.5"/>
                </svg>
              </div>
              <div className="results-stat-text-wrap">
                <div className="results-stat-number">800+</div>
                <div className="results-stat-label">Visas Granted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
