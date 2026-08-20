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
                <svg viewBox="0 0 24 24" width="36" height="36" fill="#FDB813">
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                  <path d="M6 14h6v2H6z" fill="#081736"/>
                </svg>
              </div>
              <div className="results-stat-text-wrap">
                <div className="results-stat-number">3500+</div>
                <div className="results-stat-label">Assessments Done</div>
              </div>
            </div>

            <div className="results-stat-group">
              <div className="results-stat-icon-wrap stat-globe-icon-box">
                <svg viewBox="0 0 24 24" width="36" height="36" fill="#FDB813">
                  <rect x="3" y="3" width="18" height="18" rx="2" fill="#FDB813"/>
                  <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10.5c-2.48 0-4.5-2.02-4.5-4.5S9.52 7.5 12 7.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5zm-1-8h2v2h-2zm0 3h2v4h-2z" fill="#081736"/>
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
