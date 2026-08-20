import { Link } from "@remix-run/react";
import { Mail, Phone, MapPin, ChevronRight, Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import { siteConfig } from "~/data/siteData";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand">
            <h3 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span>Study Prime</span>
            </h3>
            <p>
              Study Prime is a premier overseas education consultancy committed to helping Pakistani students secure university admissions and visas worldwide with transparency and excellence.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noreferrer"
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
                <Link to="/"><ChevronRight size={14} /> Home</Link>
              </li>
              <li>
                <Link to="/about"><ChevronRight size={14} /> About Us</Link>
              </li>
              <li>
                <Link to="/services"><ChevronRight size={14} /> Our Services</Link>
              </li>
              <li>
                <Link to="/destinations"><ChevronRight size={14} /> Study Destinations</Link>
              </li>
              <li>
                <Link to="/courses"><ChevronRight size={14} /> Degree Programs</Link>
              </li>
              <li>
                <Link to="/blog"><ChevronRight size={14} /> Blog &amp; Updates</Link>
              </li>
            </ul>
          </div>

          {/* Top Destinations */}
          <div>
            <h4 className="footer-title">Study Destinations</h4>
            <ul className="footer-links">
              <li>
                <Link to="/destinations"><ChevronRight size={14} /> Study in UK</Link>
              </li>
              <li>
                <Link to="/destinations"><ChevronRight size={14} /> Study in USA</Link>
              </li>
              <li>
                <Link to="/destinations"><ChevronRight size={14} /> Study in Australia</Link>
              </li>
              <li>
                <Link to="/destinations"><ChevronRight size={14} /> Study in Canada</Link>
              </li>
              <li>
                <Link to="/destinations"><ChevronRight size={14} /> Study in Europe (Schengen)</Link>
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
                <div>{siteConfig.contact.phone}</div>
                <div>{siteConfig.contact.altPhone}</div>
              </div>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} />
              <span>{siteConfig.contact.email}</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} Study Prime (PVT) Ltd. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms &amp; Conditions</Link>
            <Link to="/contact">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
