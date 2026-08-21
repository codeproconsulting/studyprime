import { useState } from "react";
import { Link } from "@remix-run/react";
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
  Layers
} from "lucide-react";
import { coursesData } from "~/data/siteData";

export function CoursesSection() {
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
    { id: "all", label: "All Programs" },
    { id: "Computer Science & IT", label: "Computer Science & AI" },
    { id: "Business & Finance", label: "Business & FinTech" },
    { id: "Healthcare & Life Sciences", label: "Healthcare & Public Health" },
    { id: "Pathway & Top-Up", label: "1-Year Top-Up (UK)" },
    { id: "Engineering & Tech", label: "Engineering & Robotics" },
  ];

  const filteredCourses = coursesData.filter((c) => {
    if (selectedCategory === "all") return true;
    return c.category === selectedCategory;
  });

  return (
    <section className="courses-homepage-section section-padding">
      <div className="container">
        {/* Top Header */}
        <div className="section-header-flex">
          <div className="header-text-col">
            <div className="badge badge-gold" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
              <Sparkles size={14} /> High-Demand Academic Programs
            </div>
            <h2 className="section-title" style={{ fontSize: "2.6rem", color: "var(--primary-navy)", lineHeight: "1.2", marginBottom: "10px" }}>
              Top In-Demand Global Courses
            </h2>
            <p className="section-subtitle" style={{ fontSize: "1.05rem", color: "var(--text-muted)", maxWidth: "620px" }}>
              Explore future-ready degree programs and fast-track pathways across leading universities in the UK, Canada, Australia, and Europe with extended post-study work rights.
            </p>
          </div>

          <div className="header-action-col">
            <Link to="/courses" className="btn btn-outline btn-explore-all-courses">
              <Layers size={16} />
              <span>Browse All Degrees</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="courses-category-pills-row">
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

        {/* Courses Cards Grid */}
        <div className="courses-cards-grid">
          {filteredCourses.slice(0, 6).map((course) => {
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
                    <span>Top Hubs: {course.topDestinations.slice(0, 3).join(", ")}</span>
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
      </div>
    </section>
  );
}
