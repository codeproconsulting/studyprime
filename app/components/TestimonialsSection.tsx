import { Star, Quote } from "lucide-react";
import { testimonials } from "~/data/siteData";

export function TestimonialsSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="container">
        <div className="section-header">
          <div className="badge badge-blue">Student Stories</div>
          <h2 className="section-title">What Our Successful Students Say</h2>
          <p className="section-subtitle">
            Real feedback from Pakistani students who achieved their overseas education dreams with Study Prime.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <div className="testimonial-stars">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <Quote size={28} color="rgba(27, 36, 74, 0.15)" />
                </div>
                <p className="testimonial-quote">"{t.feedback}"</p>
              </div>

              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
