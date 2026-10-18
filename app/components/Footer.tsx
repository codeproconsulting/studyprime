import { Link } from "@remix-run/react";
import { Mail, Phone, MapPin, ChevronRight, Facebook, Instagram, Linkedin, Youtube, Twitter, MessageCircle } from "lucide-react";
import { siteConfig } from "~/data/siteData";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand">
            <Link to="/" className="footer-brand-logo-link" aria-label="Study Prime Home">
              <img
                src="/logoforfooter.png"
                alt="Study Prime"
                className="site-footer-logo-img"
              />
            </Link>
            <p style={{ marginTop: "14px", lineHeight: "1.6", color: "rgba(255,255,255,0.8)" }}>
              Study Prime is Pakistan's premier overseas education consultancy committed to helping students secure university admissions, scholarships, and visas worldwide with transparency and excellence.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Study Prime Facebook"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                }}
              >
                <Facebook size={16} />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Study Prime Instagram"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                }}
              >
                <Instagram size={16} />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Study Prime LinkedIn"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                }}
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" title="Study Prime Homepage"><ChevronRight size={14} /> Home</Link>
              </li>
              <li>
                <Link to="/destinations" title="Explore Study Destinations"><ChevronRight size={14} /> Study Destinations</Link>
              </li>
              <li>
                <Link to="/services" title="Study Abroad Services"><ChevronRight size={14} /> Our Services</Link>
              </li>
              <li>
                <Link to="/courses" title="Degree Programs & Courses"><ChevronRight size={14} /> Degree Programs</Link>
              </li>
              <li>
                <Link to="/universities" title="Partner Universities Worldwide"><ChevronRight size={14} /> Partner Universities</Link>
              </li>
              <li>
                <Link to="/blog" title="Study Abroad Blog & Visa Updates"><ChevronRight size={14} /> Blog &amp; Visa Updates</Link>
              </li>
              <li>
                <Link to="/assessment" title="Free Study Visa Assessment"><ChevronRight size={14} /> Free Assessment</Link>
              </li>
              <li>
                <Link to="/about" title="About Study Prime"><ChevronRight size={14} /> About Us</Link>
              </li>
              <li>
                <Link to="/contact" title="Contact Study Prime"><ChevronRight size={14} /> Contact Us</Link>
              </li>
              <li>
                <Link to="/services-location" title="Services Location"><ChevronRight size={14} /> Services Location</Link>
              </li>
            </ul>
          </div>

          {/* Top Destinations */}
          <div>
            <h4 className="footer-title">Study Destinations</h4>
            <ul className="footer-links">
              <li>
                <Link to="/destinations/uk"><ChevronRight size={14} /> Study in UK</Link>
              </li>
              <li>
                <Link to="/destinations/australia"><ChevronRight size={14} /> Study in Australia</Link>
              </li>
              <li>
                <Link to="/destinations/canada"><ChevronRight size={14} /> Study in Canada</Link>
              </li>
              <li>
                <Link to="/destinations/usa"><ChevronRight size={14} /> Study in USA</Link>
              </li>
              <li>
                <Link to="/destinations/germany"><ChevronRight size={14} /> Study in Germany</Link>
              </li>
              <li>
                <Link to="/destinations/ireland"><ChevronRight size={14} /> Study in Ireland</Link>
              </li>
              <li>
                <Link to="/destinations/new-zealand"><ChevronRight size={14} /> Study in New Zealand</Link>
              </li>
              <li>
                <Link to="/destinations/malaysia"><ChevronRight size={14} /> Study in Malaysia</Link>
              </li>
              <li>
                <Link to="/destinations/turkey"><ChevronRight size={14} /> Study in Turkey</Link>
              </li>
              <li>
                <Link to="/destinations/sweden"><ChevronRight size={14} /> Study in Sweden</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-title">Head Office</h4>
            <div className="footer-contact-item">
              <MapPin size={18} />
              <span>{siteConfig.contact.address}</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} />
              <div>
                <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`} style={{ color: "inherit", textDecoration: "none" }}>
                  {siteConfig.contact.phone}
                </a>
                <div style={{ fontSize: "0.85rem", opacity: 0.8 }}>
                  {siteConfig.contact.altPhone}
                </div>
              </div>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} />
              <a href={`mailto:${siteConfig.contact.email}`} style={{ color: "inherit", textDecoration: "none" }}>
                {siteConfig.contact.email}
              </a>
            </div>
            <div style={{ marginTop: "14px" }}>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Study Prime! I need assistance with university admission and visa guidance.")}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-white"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px", fontSize: "0.85rem", textDecoration: "none" }}
              >
                <MessageCircle size={15} color="#25D366" />
                <span>WhatsApp Helpline</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} Study Prime (PVT) Ltd. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
            <Link to="/contact">Contact &amp; Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
