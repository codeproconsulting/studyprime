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
              <span className="desktop-tagline-text">Your Study Abroad Partner,</span>
              <span className="mobile-tagline-text">Your Study Abroad Partner</span>
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

            {/* Desktop-only action button */}
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
          {/* Desktop Badge (2 lines) / Mobile Badge (1 line pill) */}
          <div className="results-badge-white">
            <span className="desktop-badge-text">
              <span className="badge-line-1">Results That Define</span>
              <span className="badge-line-2">a True Partnership</span>
            </span>
            <span className="mobile-badge-text">
              Results That Define a True Partnership
            </span>
          </div>

          {/* Vertical yellow bar for Desktop / Horizontal yellow bar for Mobile */}
          <div className="results-yellow-divider"></div>

          <div className="results-stats-row-container">
            {/* Stat 1: Assessments Done */}
            <div className="results-stat-group">
              <div className="results-stat-icon-wrap">
                <svg viewBox="0 0 54 44" width="48" height="40" fill="none">
                  {/* Card base */}
                  <rect x="2" y="3" width="50" height="38" rx="6" fill="#FFA700"/>
                  {/* Card top stripe */}
                  <rect x="2" y="9" width="50" height="6" fill="#081736"/>
                  {/* Checkmark in bottom right */}
                  <path d="M22 28 L30 36 L46 18" stroke="#081736" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="results-stat-text-wrap">
                <div className="results-stat-number">3500+</div>
                <div className="results-stat-label">Assessments Done</div>
              </div>
            </div>

            {/* Stat 2: Visas Granted */}
            <div className="results-stat-group">
              <div className="results-stat-icon-wrap">
                <svg viewBox="0 0 40 48" width="40" height="44" fill="none">
                  {/* Passport card base */}
                  <rect x="2" y="2" width="36" height="44" rx="5" fill="#FFA700"/>
                  {/* Globe circle */}
                  <circle cx="20" cy="18" r="9" stroke="#081736" strokeWidth="2.5" fill="none"/>
                  <ellipse cx="20" cy="18" rx="4.5" ry="9" stroke="#081736" strokeWidth="2" fill="none"/>
                  <line x1="11" y1="18" x2="29" y2="18" stroke="#081736" strokeWidth="2.2"/>
                  {/* Document lines */}
                  <line x1="8" y1="34" x2="32" y2="34" stroke="#081736" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="12" y1="39" x2="28" y2="39" stroke="#081736" strokeWidth="2.5" strokeLinecap="round"/>
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
