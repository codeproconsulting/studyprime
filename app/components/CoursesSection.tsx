import { Link } from "@remix-run/react";
import { 
  BookOpen, 
  ArrowRight, 
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

  // Featured 3 top programs for a single, impactful row on homepage
  const featuredCourses = coursesData.slice(0, 3);

  return (
    <section className="courses-homepage-section section-padding">
      <div className="container">
        {/* Top Header */}
        <div className="section-head-split">
          <div className="section-head-text">
            <div className="section-eyebrow">
              <span className="eyebrow-dot" />
              Popular Degree Programs
            </div>
            <h2 className="section-heading">
              Top In-Demand{" "}
              <span className="heading-accent">Global Courses</span>
            </h2>
            <span className="section-heading-underline" />
            <p className="section-desc" style={{ marginTop: "16px" }}>
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

        {/* Courses Cards Grid: Exactly 1 Row of 3 Featured Cards */}
        <div className="courses-cards-grid single-row-featured-grid">
          {featuredCourses.map((course) => {
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

        {/* Bottom Hub Link */}
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <Link
            to="/courses"
            className="btn btn-accent"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 32px", fontSize: "1rem", fontWeight: 700 }}
          >
            <span>Explore All 50+ In-Demand Disciplines &amp; Top-Ups</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
