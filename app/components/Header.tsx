import { Link, useLocation } from "@remix-run/react";
import {
  ChevronDown,
  ArrowRight,
  Globe2,
  GraduationCap,
  Laptop,
  BarChart3,
  Briefcase,
  Coins,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  FileText,
  Plane,
  Cpu,
  Building2,
  X
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function Header({ onOpenConsultation }: { onOpenConsultation?: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  // Close mobile menu & dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = (menuKey: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const toggleMobileAccordion = (key: string) => {
    setMobileAccordion(mobileAccordion === key ? null : key);
  };

  // Grouped Destinations for Full-Width Grid
  const englishHubs = [
    {
      name: "United Kingdom",
      href: "/destinations/uk",
      badge: "PSW 2-Yr",
      desc: "1-Yr Master's & Russell Group Universities",
      flag: "/images/flags/uk.svg",
    },
    {
      name: "New Zealand",
      href: "/destinations/new-zealand",
      badge: "PSW up to 3-Yr",
      desc: "QS Top 3% Unis & Green List PR Pathways",
      flag: "/images/flags/new-zealand.svg",
    },
    {
      name: "United States",
      href: "/destinations/usa",
      badge: "3-Yr STEM OPT",
      desc: "Top Global Research & State Universities",
      flag: "/images/flags/usa.svg",
    },
    {
      name: "Canada",
      href: "/destinations/canada",
      badge: "PGWP up to 3-Yr",
      desc: "Direct PR Pathways & Co-op Internships",
      flag: "/images/flags/canada.svg",
    },
  ];

  const europeHubs = [
    {
      name: "Sweden",
      href: "/destinations/sweden",
      badge: "SI Scholarships",
      desc: "Global Innovation Leader & 1-Yr PSW",
      flag: "/images/flags/sweden.svg",
    },
    {
      name: "Finland",
      href: "/destinations/finland",
      badge: "2-Yr PSW",
      desc: "World #1 Education & 100% Scholarships",
      flag: "/images/flags/finland.svg",
    },
    {
      name: "Germany",
      href: "/destinations/germany",
      badge: "Zero Tuition",
      desc: "Tuition-Free Public Tech & Engineering",
      flag: "/images/flags/germany.svg",
    },
    {
      name: "France",
      href: "/destinations/france",
      badge: "Post-Study Visa",
      desc: "Grande École Business & French CAF Subsidy",
      flag: "/images/flags/france.svg",
    },
  ];

  const fastTrackHubs = [
    {
      name: "Malaysia",
      href: "/destinations/malaysia",
      badge: "Dual Degrees",
      desc: "UK/Aus Dual Degrees & Fast EMGS Visa",
      flag: "/images/flags/malaysia.svg",
    },
    {
      name: "Turkey",
      href: "/destinations/turkey",
      badge: "High Approval",
      desc: "Affordable European Degrees in English",
      flag: "/images/flags/turkey.svg",
    },
    {
      name: "Hungary",
      href: "/destinations/hungary",
      badge: "Schengen Hub",
      desc: "Stipendium Scholarships & Low Tuition",
      flag: "/images/flags/hungary.svg",
    },
    {
      name: "Malta",
      href: "/destinations/malta",
      badge: "English EU",
      desc: "British Standard Degrees & 20h Work Rights",
      flag: "/images/flags/malta.svg",
    },
  ];

  // Grouped Courses for Full-Width Grid
  const techCourses = [
    {
      title: "Computer Science & AI",
      href: "/courses/computer-science-software-engineering",
      desc: "Software, Machine Learning & Cloud",
      icon: Laptop,
      color: "#011E3E",
    },
    {
      title: "Data Science & Analytics",
      href: "/courses/data-science-business-analytics",
      desc: "Big Data & Business Intelligence",
      icon: BarChart3,
      color: "#FFA000",
    },
    {
      title: "Cybersecurity & Cloud",
      href: "/courses/cyber-security-cloud-computing",
      desc: "Network Security & Infrastructure",
      icon: ShieldCheck,
      color: "#011E3E",
    },
  ];

  const businessCourses = [
    {
      title: "MBA & Global Management",
      href: "/courses/business-administration-management",
      desc: "Strategic Leadership & Corporate",
      icon: Briefcase,
      color: "#FFA000",
    },
    {
      title: "Accounting, Finance & Fintech",
      href: "/courses/accounting-finance-fintech",
      desc: "ACCA/CPA Exemptions & Banking",
      icon: Coins,
      color: "#011E3E",
    },
    {
      title: "Digital Marketing & Analytics",
      href: "/courses/business-administration-management",
      desc: "E-Commerce, Brand & Growth",
      icon: Sparkles,
      color: "#FFA000",
    },
  ];

  const healthEngineeringCourses = [
    {
      title: "Healthcare & Nursing",
      href: "/courses/nursing-healthcare-biomedical",
      desc: "Hospital Practicums & Clinical",
      icon: HeartPulse,
      color: "#011E3E",
    },
    {
      title: "Robotics & Embedded Systems",
      href: "/courses/artificial-intelligence-robotics",
      desc: "Automation & Future Hardware",
      icon: Cpu,
      color: "#FFA000",
    },
    {
      title: "Biomedical & Life Sciences",
      href: "/courses/nursing-healthcare-biomedical",
      desc: "Pharmaceutical & Lab Research",
      icon: GraduationCap,
      color: "#011E3E",
    },
  ];

  const featuredServices = [
    {
      title: "Student Visa Assistance",
      href: "/services/student-visa",
      desc: "100% compliant documentation, financial proof structuring & 1-on-1 mock interviews",
      icon: ShieldCheck,
      color: "#FFA000",
    },
    {
      title: "University & Course Matching",
      href: "/services/university-matching",
      desc: "Profile assessment & maximum scholarship matching for 200+ partner universities",
      icon: GraduationCap,
      color: "#011E3E",
    },
    {
      title: "SOP & Document Drafting",
      href: "/services/sop-writing",
      desc: "Compelling personal statements, cover letters & academic recommendation review",
      icon: FileText,
      color: "#FFA000",
    },
    {
      title: "Pre-Departure & Forex Guidance",
      href: "/services/pre-departure",
      desc: "Flight briefing, student accommodation assistance, airport pickup & currency exchange",
      icon: Plane,
      color: "#011E3E",
    },
  ];

  const mobileDestinationsList = [...englishHubs, ...europeHubs, ...fastTrackHubs];

  return (
    <header className="main-site-header">
      <div className="container">
        <div className="header-inner">
          {/* Brand Logo */}
          <Link to="/" className="site-brand-logo" aria-label="Study Prime Home">
            <img
              src="/studyprime.png"
              alt="Study Prime - Study Abroad Experts"
              className="site-header-logo-img"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-menu-list">
              <li>
                <Link
                  to="/"
                  className={`nav-menu-item ${location.pathname === "/" ? "active" : ""}`}
                >
                  Home
                </Link>
              </li>

              {/* Study Destinations (Full-Width Trigger) */}
              <li
                className="nav-dropdown-wrapper"
                onMouseEnter={() => handleMouseEnter("destinations")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/destinations"
                  className={`nav-menu-item nav-dropdown-trigger ${location.pathname.startsWith("/destinations") ? "active" : ""
                    }`}
                >
                  <span>Study Destinations</span>
                  <ChevronDown
                    size={15}
                    className={`dropdown-arrow-icon ${activeDropdown === "destinations" ? "open" : ""}`}
                  />
                </Link>
              </li>

              {/* Courses & Degrees (Full-Width Trigger) */}
              <li
                className="nav-dropdown-wrapper"
                onMouseEnter={() => handleMouseEnter("courses")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/courses"
                  className={`nav-menu-item nav-dropdown-trigger ${location.pathname.startsWith("/courses") ? "active" : ""
                    }`}
                >
                  <span>Courses</span>
                  <ChevronDown
                    size={15}
                    className={`dropdown-arrow-icon ${activeDropdown === "courses" ? "open" : ""}`}
                  />
                </Link>
              </li>

              {/* Services (Full-Width Trigger) */}
              <li
                className="nav-dropdown-wrapper"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/services"
                  className={`nav-menu-item nav-dropdown-trigger ${location.pathname.startsWith("/services") ? "active" : ""
                    }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    size={15}
                    className={`dropdown-arrow-icon ${activeDropdown === "services" ? "open" : ""}`}
                  />
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className={`nav-menu-item ${location.pathname === "/about" ? "active" : ""}`}
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className={`nav-menu-item ${location.pathname === "/blog" ? "active" : ""}`}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          {/* Header Assessment Button */}
          <div className="header-right-action">
            <Link
              to="/assessment"
              className="btn-header-assessment"
            >
              Get Free Assessment
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? (
                <X size={28} color="#011E3E" strokeWidth={2.5} />
              ) : (
                <div className="custom-hamburger-bars">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================
          FULL-VIEWPORT-WIDTH ACETERNITY / SHADCN MEGA DROPDOWN
      ============================================================ */}
      {activeDropdown && (
        <div
          className="aceternity-fullwidth-dropdown"
          onMouseEnter={() => handleMouseEnter(activeDropdown)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container">
            {/* --- DESTINATIONS MEGA DROPDOWN --- */}
            {activeDropdown === "destinations" && (
              <div className="fullwidth-dropdown-content">
                {/* Left Spotlight Card */}
                <div className="dropdown-spotlight-card spotlight-destinations">
                  <div className="spotlight-badge">
                    <Globe2 size={15} /> <span>Global Hubs</span>
                  </div>
                  <h4 className="spotlight-title">Study at Top Global Universities</h4>
                  <p className="spotlight-desc">
                    Fast-track admissions, high visa approval rates, and extended post-study work rights across 20+ countries.
                  </p>
                  <div className="spotlight-stats-pill">
                    <span className="spotlight-stat-item"><strong>98%</strong> Visa Rate</span>
                    <span className="spotlight-stat-divider">•</span>
                    <span className="spotlight-stat-item"><strong>200+</strong> Panel Unis</span>
                  </div>
                  <Link
                    to="/assessment"
                    className="btn-spotlight-action"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span>Get Free Assessment</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Right 3-Column Categorized Grid */}
                <div className="dropdown-grid-wrapper destinations-3col-grid">
                  {/* Col 1: Popular English Hubs */}
                  <div className="dropdown-category-col">
                    <div className="dropdown-col-heading">
                      <span>Popular English Hubs</span>
                      <span className="col-count-tag">Top Choice</span>
                    </div>
                    <div className="dropdown-col-items">
                      {englishHubs.map((dest) => (
                        <Link
                          key={dest.name}
                          to={dest.href}
                          className="fullwidth-menu-item"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="fullwidth-flag-box">
                            <img src={dest.flag} alt="" className="fullwidth-flag-img" />
                          </div>
                          <div className="fullwidth-item-text">
                            <div className="fullwidth-item-title-row">
                              <span className="fullwidth-item-title">{dest.name}</span>
                              <span className="fullwidth-item-badge">{dest.badge}</span>
                            </div>
                            <p className="fullwidth-item-desc">{dest.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Col 2: Europe & Schengen */}
                  <div className="dropdown-category-col">
                    <div className="dropdown-col-heading">
                      <span>Europe &amp; Schengen</span>
                      <span className="col-count-tag">Affordable</span>
                    </div>
                    <div className="dropdown-col-items">
                      {europeHubs.map((dest) => (
                        <Link
                          key={dest.name}
                          to={dest.href}
                          className="fullwidth-menu-item"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="fullwidth-flag-box">
                            <img src={dest.flag} alt="" className="fullwidth-flag-img" />
                          </div>
                          <div className="fullwidth-item-text">
                            <div className="fullwidth-item-title-row">
                              <span className="fullwidth-item-title">{dest.name}</span>
                              <span className="fullwidth-item-badge">{dest.badge}</span>
                            </div>
                            <p className="fullwidth-item-desc">{dest.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Col 3: Fast-Track & Budget */}
                  <div className="dropdown-category-col">
                    <div className="dropdown-col-heading">
                      <span>Fast-Track &amp; Emerging</span>
                      <span className="col-count-tag">High Approval</span>
                    </div>
                    <div className="dropdown-col-items">
                      {fastTrackHubs.map((dest) => (
                        <Link
                          key={dest.name}
                          to={dest.href}
                          className="fullwidth-menu-item"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="fullwidth-flag-box">
                            <img src={dest.flag} alt="" className="fullwidth-flag-img" />
                          </div>
                          <div className="fullwidth-item-text">
                            <div className="fullwidth-item-title-row">
                              <span className="fullwidth-item-title">{dest.name}</span>
                              <span className="fullwidth-item-badge">{dest.badge}</span>
                            </div>
                            <p className="fullwidth-item-desc">{dest.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* --- COURSES MEGA DROPDOWN --- */}
            {activeDropdown === "courses" && (
              <div className="fullwidth-dropdown-content">
                {/* Left Spotlight Card */}
                <div className="dropdown-spotlight-card spotlight-courses">
                  <div className="spotlight-badge">
                    <GraduationCap size={15} /> <span>Degree Programs</span>
                  </div>
                  <h4 className="spotlight-title">In-Demand Global Degrees &amp; Top-Ups</h4>
                  <p className="spotlight-desc">
                    Explore accredited undergraduate, postgraduate, and fast-track pathways tailored for global employability.
                  </p>
                  <div className="spotlight-stats-pill">
                    <span className="spotlight-stat-item"><strong>50+</strong> Disciplines</span>
                    <span className="spotlight-stat-divider">•</span>
                    <span className="spotlight-stat-item"><strong>2-3 Yrs</strong> PSW</span>
                  </div>
                  <Link
                    to="/courses"
                    className="btn-spotlight-action"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span>Browse All Degrees</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Right 3-Column Categorized Grid */}
                <div className="dropdown-grid-wrapper courses-3col-grid">
                  {/* Col 1: Tech & AI */}
                  <div className="dropdown-category-col">
                    <div className="dropdown-col-heading">
                      <span>Tech &amp; Artificial Intelligence</span>
                      <span className="col-count-tag">STEM</span>
                    </div>
                    <div className="dropdown-col-items">
                      {techCourses.map((c) => {
                        const Icon = c.icon;
                        return (
                          <Link
                            key={c.title}
                            to={c.href}
                            className="fullwidth-menu-item"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="fullwidth-icon-box" style={{ background: `${c.color}15` }}>
                              <Icon size={18} color={c.color} />
                            </div>
                            <div className="fullwidth-item-text">
                              <span className="fullwidth-item-title">{c.title}</span>
                              <p className="fullwidth-item-desc">{c.desc}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Col 2: Business & Management */}
                  <div className="dropdown-category-col">
                    <div className="dropdown-col-heading">
                      <span>Business &amp; Finance</span>
                      <span className="col-count-tag">High ROI</span>
                    </div>
                    <div className="dropdown-col-items">
                      {businessCourses.map((c) => {
                        const Icon = c.icon;
                        return (
                          <Link
                            key={c.title}
                            to={c.href}
                            className="fullwidth-menu-item"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="fullwidth-icon-box" style={{ background: `${c.color}15` }}>
                              <Icon size={18} color={c.color} />
                            </div>
                            <div className="fullwidth-item-text">
                              <span className="fullwidth-item-title">{c.title}</span>
                              <p className="fullwidth-item-desc">{c.desc}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Col 3: Healthcare & Engineering */}
                  <div className="dropdown-category-col">
                    <div className="dropdown-col-heading">
                      <span>Healthcare &amp; Engineering</span>
                      <span className="col-count-tag">In-Demand</span>
                    </div>
                    <div className="dropdown-col-items">
                      {healthEngineeringCourses.map((c) => {
                        const Icon = c.icon;
                        return (
                          <Link
                            key={c.title}
                            to={c.href}
                            className="fullwidth-menu-item"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="fullwidth-icon-box" style={{ background: `${c.color}15` }}>
                              <Icon size={18} color={c.color} />
                            </div>
                            <div className="fullwidth-item-text">
                              <span className="fullwidth-item-title">{c.title}</span>
                              <p className="fullwidth-item-desc">{c.desc}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* --- SERVICES MEGA DROPDOWN --- */}
            {activeDropdown === "services" && (
              <div className="fullwidth-dropdown-content">
                {/* Left Spotlight Card */}
                <div className="dropdown-spotlight-card spotlight-services">
                  <div className="spotlight-badge">
                    <Sparkles size={15} /> <span>Student Services</span>
                  </div>
                  <h4 className="spotlight-title">Complete 360° Visa Consultancy</h4>
                  <p className="spotlight-desc">
                    Personalized counseling, error-free visa filing, SOP drafting, and pre-departure briefings.
                  </p>
                  <div className="spotlight-stats-pill">
                    <span className="spotlight-stat-item"><strong>100%</strong> Transparent</span>
                    <span className="spotlight-stat-divider">•</span>
                    <span className="spotlight-stat-item"><strong>1-on-1</strong> Mock Prep</span>
                  </div>
                  <Link
                    to="/services"
                    className="btn-spotlight-action"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span>View All Services</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Right 4-Grid Services Cards */}
                <div className="dropdown-grid-wrapper services-4col-grid">
                  {featuredServices.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.title}
                        to={service.href}
                        className="fullwidth-service-card"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="fullwidth-service-icon-box" style={{ background: `${service.color}15` }}>
                          <Icon size={24} color={service.color} />
                        </div>
                        <h5 className="fullwidth-service-title">{service.title}</h5>
                        <p className="fullwidth-service-desc">{service.desc}</p>
                        <div className="fullwidth-service-link-text">
                          <span>Learn More</span>
                          <ArrowRight size={13} />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Full-Width Strip */}
          <div className="fullwidth-dropdown-bottom-bar">
            <div className="container">
              <div className="dropdown-bottom-inner">
                <span className="dropdown-bottom-tagline">
                  <Sparkles size={15} color="#FFA700" />
                  <span>Ready to start your journey? Get an expert profile evaluation today with zero consultation fee.</span>
                </span>
                <Link
                  to="/assessment"
                  className="dropdown-bottom-cta-link"
                  onClick={() => setActiveDropdown(null)}
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          MOBILE NAVIGATION DROPDOWN WITH ACCORDIONS
      ============================================================ */}
      {mobileMenuOpen && (
        <div className="mobile-nav-dropdown">
          <ul className="mobile-nav-list">
            <li>
              <Link
                to="/"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            {/* Mobile Destinations Accordion */}
            <li className="mobile-accordion-item">
              <button
                type="button"
                className="mobile-accordion-trigger"
                onClick={() => toggleMobileAccordion("destinations")}
              >
                <span className="mobile-nav-link-text">Study Destinations</span>
                <ChevronDown
                  size={18}
                  className={`mobile-chevron ${mobileAccordion === "destinations" ? "open" : ""}`}
                />
              </button>

              {mobileAccordion === "destinations" && (
                <div className="mobile-accordion-content">
                  {mobileDestinationsList.map((dest) => (
                    <Link
                      key={dest.name}
                      to={dest.href}
                      className="mobile-sub-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <img src={dest.flag} alt="" className="mobile-sub-flag" />
                      <span>{dest.name}</span>
                      <span className="mobile-sub-badge">{dest.badge}</span>
                    </Link>
                  ))}
                  <Link
                    to="/destinations"
                    className="mobile-sub-view-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>View All 20+ Destinations</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              )}
            </li>

            {/* Mobile Universities Direct Link */}
            <li>
              <Link
                to="/universities"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Partner Universities
              </Link>
            </li>

            {/* Mobile Courses Accordion */}
            <li className="mobile-accordion-item">
              <button
                type="button"
                className="mobile-accordion-trigger"
                onClick={() => toggleMobileAccordion("courses")}
              >
                <span className="mobile-nav-link-text">Degree Programs</span>
                <ChevronDown
                  size={18}
                  className={`mobile-chevron ${mobileAccordion === "courses" ? "open" : ""}`}
                />
              </button>

              {mobileAccordion === "courses" && (
                <div className="mobile-accordion-content">
                  {[...techCourses, ...businessCourses, ...healthEngineeringCourses.slice(0, 1)].map((c) => (
                    <Link
                      key={c.title}
                      to={c.href}
                      className="mobile-sub-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{c.title}</span>
                    </Link>
                  ))}
                  <Link
                    to="/courses"
                    className="mobile-sub-view-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>View All 50+ Degrees</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              )}
            </li>

            {/* Mobile Services Accordion */}
            <li className="mobile-accordion-item">
              <button
                type="button"
                className="mobile-accordion-trigger"
                onClick={() => toggleMobileAccordion("services")}
              >
                <span className="mobile-nav-link-text">Services</span>
                <ChevronDown
                  size={18}
                  className={`mobile-chevron ${mobileAccordion === "services" ? "open" : ""}`}
                />
              </button>

              {mobileAccordion === "services" && (
                <div className="mobile-accordion-content">
                  {featuredServices.map((s) => (
                    <Link
                      key={s.title}
                      to={s.href}
                      className="mobile-sub-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{s.title}</span>
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    className="mobile-sub-view-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Explore All Services</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link
                to="/about"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/blog"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog &amp; Updates
              </Link>
            </li>

            <li style={{ marginTop: "12px" }}>
              <Link
                to="/assessment"
                className="btn-header-assessment"
                style={{ width: "100%", textAlign: "center", display: "block" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Free Assessment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

