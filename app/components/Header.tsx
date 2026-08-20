import { Link, useLocation } from "@remix-run/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header({ onOpenConsultation }: { onOpenConsultation?: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Study Destinations", href: "/destinations" },
    { name: "Courses", href: "/courses" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="main-site-header">
      <div className="container">
        <div className="header-inner">
          {/* Logo matching exact mockup */}
          <Link to="/" className="site-brand-logo">
            <div className="logo-text-wrap">
              <div className="logo-main-text">
                <span className="logo-yellow">Study</span>
                <span className="logo-navy">Prime</span>
              </div>
              <div className="logo-sub-text">STUDY ABROAD EXPERTS</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-menu-list">
              {navLinks.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={`nav-menu-item ${isActive ? "active" : ""}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Header Action Button */}
          <div className="header-right-action">
            <button
              type="button"
              className="btn-header-assessment"
              onClick={onOpenConsultation}
            >
              Get Free Assessment
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? (
                <X size={28} color="#081736" strokeWidth={2.5} />
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

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobile-nav-dropdown">
            <ul className="mobile-nav-list">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="mobile-nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li style={{ marginTop: "12px" }}>
                <button
                  type="button"
                  className="btn-header-assessment"
                  style={{ width: "100%" }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation?.();
                  }}
                >
                  Get Free Assessment
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
