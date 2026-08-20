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
          {/* Left Column: Headings, CTA & Trust Badge */}
          <div className="hero-left-content">
            <div className="hero-tagline-text">
              Your Study Abroad Partner,
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

            <div className="hero-action-row">
              <button
                type="button"
                className="btn-hero-assessment"
                onClick={onOpenConsultation}
              >
                Get Free Assessment
              </button>
            </div>

            {/* 200+ Satisfied Students Badge */}
            <div className="satisfied-students-badge">
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

          {/* Right Column: Student Cutout Anchored to the Top of the Results Banner */}
          <div className="hero-student-media-col">
            <div className="student-image-frame">
              <img
                src="/student.webp"
                alt="Study Prime Student"
                className="student-cutout-img"
              />
            </div>
          </div>
        </div>

        {/* Bottom Results Banner */}
        <div className="results-partnership-banner">
          <div className="results-badge-white">
            <div className="results-badge-title">Results That Define</div>
            <div className="results-badge-title">a True Partnership</div>
          </div>

          <div className="results-vertical-divider"></div>

          <div className="results-stat-group">
            <div className="results-stat-icon-wrap">
              <img
                src="/icon/credit_score.png"
                alt="Assessments Done"
                className="stat-gold-icon"
              />
            </div>
            <div className="results-stat-text-wrap">
              <div className="results-stat-number">3500+</div>
              <div className="results-stat-label">Assessments Done</div>
            </div>
          </div>

          <div className="results-stat-group">
            <div className="results-stat-icon-wrap">
              <img
                src="/icon/passport.png"
                alt="Visas Granted"
                className="stat-gold-icon"
              />
            </div>
            <div className="results-stat-text-wrap">
              <div className="results-stat-number">800+</div>
              <div className="results-stat-label">Visas Granted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
