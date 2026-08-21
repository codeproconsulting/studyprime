import { useState, useMemo } from "react";
import { Link, useOutletContext } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { 
  BookOpen, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Laptop, 
  BarChart3, 
  Coins, 
  Briefcase, 
  HeartPulse, 
  ShieldCheck, 
  GraduationCap, 
  Cpu, 
  Clock, 
  MapPin, 
  Search,
  Filter
} from "lucide-react";
import { coursesData, type CourseItem } from "~/data/siteData";

export const meta: MetaFunction = () => {
  return [
    { title: "Academic Courses & In-Demand Programs | Study Prime" },
    { name: "description", content: "Explore accredited in-demand degree programs and fast-track 1-year top-up degrees across leading global universities." },
  ];
};

export default function CoursesPage() {
  const { openConsultation } = useOutletContext<{ openConsultation: () => void }>() || {};
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const iconMap: Record<string, any> = {
    Laptop,
    BarChart3,
    Coins,
    Briefcase,
    HeartPulse,
    ShieldCheck,
    GraduationCap,
    Cpu,
  };

  const categories = [
    { id: "all", label: "All Disciplines" },
    { id: "Computer Science & IT", label: "Computer Science & IT" },
    { id: "Business & Finance", label: "Business & Finance" },
    { id: "Healthcare & Life Sciences", label: "Healthcare & Sciences" },
    { id: "Pathway & Top-Up", label: "1-Year Top-Up (UK)" },
    { id: "Engineering & Tech", label: "Engineering & Tech" },
  ];

  const filteredCourses = useMemo(() => {
    return coursesData.filter((c) => {
      const matchesCategory = selectedCategory === "all" || c.category === selectedCategory;
      const matchesSearch =
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.topDestinations.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div>
      {/* Header Banner */}
      <section style={{ background: "linear-gradient(135deg, #1B244A 0%, #0D1329 100%)", color: "#FFFFFF", padding: "80px 0", textAlign: "center" }}>
        <div className="container">
          <div className="badge badge-gold" style={{ marginBottom: "16px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
            <Sparkles size={14} /> Future-Ready Programs &amp; Degrees
          </div>
          <h1 style={{ fontSize: "3rem", color: "#FFFFFF", marginBottom: "16px", fontWeight: 800 }}>
            Academic Courses &amp; Programs
          </h1>
          <p style={{ maxWidth: "700px", margin: "0 auto", fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", lineHeight: "1.6" }}>
            Explore accredited undergraduate, postgraduate, and 1-year top-up degree programs across world-ranking universities with post-study work rights.
          </p>

          {/* Search Bar */}
          <div style={{ maxWidth: "600px", margin: "32px auto 0", position: "relative" }}>
            <div className="dest-search-wrap" style={{ background: "#FFFFFF", borderRadius: "50px", padding: "4px 8px" }}>
              <Search size={20} className="search-icon-inside" style={{ color: "#0066FF" }} />
              <input
                type="text"
                placeholder="Search by course name, field, or destination (e.g. AI, Top-Up, UK)..."
                className="dest-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ fontSize: "0.95rem" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container">
          {/* Category Filter Buttons */}
          <div className="courses-category-pills-row" style={{ justifyContent: "center", marginBottom: "36px" }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`course-cat-pill-btn ${selectedCategory === cat.id ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Course Cards Grid */}
          <div className="courses-cards-grid">
            {filteredCourses.map((course) => {
              const IconComponent = iconMap[course.icon] || BookOpen;

              return (
                <div key={course.slug} className="course-card-enhanced">
                  <div className="course-card-top-bar">
                    <div className="course-icon-box">
                      <IconComponent size={24} color="#0066FF" />
                    </div>
                    <span className="course-badge-pill">{course.badge}</span>
                  </div>

                  <div className="course-card-main-content">
                    <div className="course-meta-tags">
                      <span className="course-level-tag">{course.level}</span>
                      <span className="course-duration-tag">
                        <Clock size={12} /> {course.duration}
                      </span>
                    </div>

                    <h3 className="course-card-title">
                      <Link to={`/courses/${course.slug}`}>{course.title}</Link>
                    </h3>

                    <p className="course-card-desc">{course.shortDescription}</p>

                    <div className="course-destinations-preview">
                      <MapPin size={13} color="#FFA700" />
                      <span>Destinations: {course.topDestinations.join(", ")}</span>
                    </div>
                  </div>

                  <div className="course-card-footer">
                    <div className="course-fee-tag">
                      <span className="fee-label">Est. Tuition</span>
                      <span className="fee-amount">{course.estimatedTuition}</span>
                    </div>

                    <Link
                      to={`/courses/${course.slug}`}
                      className="btn btn-primary btn-see-detail-action"
                    >
                      <span>See in Detail</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredCourses.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 20px" }}>
              <BookOpen size={48} color="#CBD5E1" style={{ margin: "0 auto 16px" }} />
              <h3 style={{ color: "var(--primary-navy)" }}>No programs found matching "{searchQuery}"</h3>
              <p style={{ color: "#64748B" }}>Try adjusting your search query or discipline filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <div className="cta-banner-text">
                <h2>Need Help Selecting the Right Course?</h2>
                <p>
                  Our senior consultants assess your qualifications, career aspirations, and budget to shortlist the best-fit programs.
                </p>
              </div>
              <button
                type="button"
                className="btn btn-accent"
                onClick={openConsultation}
              >
                <span>Free Course Assessment</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
