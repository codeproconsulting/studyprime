import { useState } from "react";
import { useLoaderData, useOutletContext, Link } from "@remix-run/react";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { 
  BookOpen, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  GraduationCap, 
  DollarSign, 
  TrendingUp, 
  MapPin, 
  ShieldCheck, 
  Building2, 
  Sparkles, 
  ArrowLeft,
  Award,
  Users,
  FileText
} from "lucide-react";
import { coursesData, type CourseItem, siteConfig } from "~/data/siteData";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data?.course) {
    return [{ title: "Course Not Found | Study Prime" }];
  }
  return [
    { title: `${data.course.title} | Study Abroad Admissions - Study Prime` },
    { name: "description", content: data.course.shortDescription },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  const course = coursesData.find((c) => c.slug === slug);

  if (!course) {
    throw new Response("Course Not Found", { status: 404 });
  }

  const relatedCourses = coursesData
    .filter((c) => c.slug !== slug && c.category === course.category)
    .slice(0, 3);

  return json({ course, relatedCourses });
}

export default function CourseDetailPage() {
  const { course, relatedCourses } = useLoaderData<typeof loader>();

  return (
    <div className="course-detail-page">
      {/* Hero Banner with Brand Gradient & Texture */}
      <section className="course-hero-header">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/courses" className="breadcrumb-link">Courses</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{course.title}</span>
          </div>

          <div className="course-hero-content-grid">
            <div className="course-hero-text">
              <div className="course-hero-badges-row">
                <span className="badge badge-gold">
                  <Sparkles size={14} /> {course.badge}
                </span>
                <span className="course-category-tag">{course.category}</span>
              </div>

              <h1 className="course-main-title">{course.title}</h1>
              <p className="course-main-subtitle">{course.shortDescription}</p>

              {/* Key Quick Facts Grid */}
              <div className="course-quick-facts-bar">
                <div className="fact-item">
                  <span className="fact-label"><GraduationCap size={14} color="#FFA700" /> Degree Level</span>
                  <span className="fact-value">{course.level}</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label"><Clock size={14} color="#FFA700" /> Duration</span>
                  <span className="fact-value">{course.duration}</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label"><Calendar size={14} color="#FFA700" /> Key Intakes</span>
                  <span className="fact-value">{course.intakes.join(", ")}</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label"><TrendingUp size={14} color="#FFA700" /> Est. Graduate Salary</span>
                  <span className="fact-value">{course.averageSalary}</span>
                </div>
              </div>
            </div>

            {/* Sidebar CTA Card */}
            <div className="course-hero-cta-card">
              <div className="tuition-box">
                <span className="tuition-label">Estimated Tuition Fee</span>
                <span className="tuition-price">{course.estimatedTuition}</span>
                <span className="tuition-note">*Scholarships up to 30% available</span>
              </div>

              <div className="cta-action-group">
                <button
                  type="button"
                  className="btn btn-accent btn-full-width"
                  onClick={handleOpenConsult}
                >
                  <span>Apply for This Program</span>
                  <ArrowRight size={16} />
                </button>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="btn btn-outline-navy btn-full-width"
                >
                  <span>Call Admissions: {siteConfig.contact.phone}</span>
                </a>
              </div>

              <div className="guarantee-list">
                <div className="guarantee-item">
                  <CheckCircle2 size={15} color="#10B981" />
                  <span>Free eligibility &amp; profile assessment</span>
                </div>
                <div className="guarantee-item">
                  <CheckCircle2 size={15} color="#10B981" />
                  <span>Direct application to partner universities</span>
                </div>
                <div className="guarantee-item">
                  <CheckCircle2 size={15} color="#10B981" />
                  <span>Complete visa documentation &amp; SOP guidance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="course-body-section section-padding">
        <div className="container">
          <div className="course-layout-grid">
            {/* Left Main Content */}
            <div className="course-main-column">
              {/* 1. Program Overview */}
              <div className="course-content-block">
                <h2 className="block-title">
                  <BookOpen size={22} color="#011E3E" /> Program Overview
                </h2>
                <p className="block-text">{course.fullDescription}</p>

                <h3 className="sub-block-title" style={{ marginTop: "24px" }}>Why Choose This Field?</h3>
                <div className="why-study-grid">
                  {course.whyStudy.map((point, idx) => (
                    <div key={idx} className="why-study-card">
                      <div className="why-icon-wrap">
                        <CheckCircle2 size={18} color="#10B981" />
                      </div>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Key Modules & Curriculum */}
              <div className="course-content-block">
                <h2 className="block-title">
                  <FileText size={22} color="#011E3E" /> Key Curriculum &amp; Core Modules
                </h2>
                <p className="block-text">
                  Below are representative foundational and elective modules offered by partner universities in this program:
                </p>
                <div className="modules-list-grid">
                  {course.keyModules.map((mod, idx) => (
                    <div key={idx} className="module-item-pill">
                      <span className="module-index">{idx + 1}</span>
                      <span className="module-name">{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Entry Requirements */}
              <div className="course-content-block">
                <h2 className="block-title">
                  <ShieldCheck size={22} color="#011E3E" /> Admission &amp; Entry Requirements
                </h2>
                <div className="requirements-box">
                  <ul className="requirements-list">
                    {course.entryRequirements.map((req, idx) => (
                      <li key={idx} className="requirement-item">
                        <CheckCircle2 size={16} color="#011E3E" className="req-icon" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 4. Career Prospects */}
              <div className="course-content-block">
                <h2 className="block-title">
                  <TrendingUp size={22} color="#011E3E" /> Career Opportunities &amp; Graduate Roles
                </h2>
                <p className="block-text">
                  Graduates from accredited programs in this field can pursue competitive roles worldwide:
                </p>
                <div className="careers-tags-wrap">
                  {course.careerProspects.map((career, idx) => (
                    <div key={idx} className="career-tag-pill">
                      <Award size={14} color="#FFA700" />
                      <span>{career}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Popular Partner Universities */}
              <div className="course-content-block">
                <h2 className="block-title">
                  <Building2 size={22} color="#011E3E" /> Top Panel Universities Offering This Course
                </h2>
                <div className="course-unis-grid">
                  {course.popularUniversities.map((uni, idx) => (
                    <div key={idx} className="course-uni-card">
                      <Building2 size={20} color="#011E3E" />
                      <div>
                        <span className="course-uni-name">{uni}</span>
                        <span className="course-uni-badge">Panel Partner</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <div className="course-sidebar-column">
              <div className="sidebar-sticky-box">
                {/* Advisor Contact Card */}
                <div className="sidebar-advisor-card">
                  <div className="advisor-avatar-circle">
                    <Users size={24} color="#011E3E" />
                  </div>
                  <h4 className="advisor-heading">Talk to a Course Advisor</h4>
                  <p className="advisor-sub">
                    Our team assesses your profile against eligibility criteria for 450+ universities.
                  </p>
                  <Link
                    to="/assessment"
                    className="btn btn-primary btn-full-width"
                    style={{ marginBottom: "10px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
                  >
                    <span>Book Free Counseling</span>
                    <ArrowRight size={15} />
                  </Link>
                  <a
                    href="https://wa.me/923101193888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-full-width"
                  >
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

                {/* Course Details Snapshot Card */}
                <div className="sidebar-snapshot-card">
                  <h4 className="snapshot-title">Program Snapshot</h4>
                  <ul className="snapshot-list">
                    <li>
                      <span className="snapshot-label">Discipline:</span>
                      <span className="snapshot-val">{course.category.toUpperCase()}</span>
                    </li>
                    <li>
                      <span className="snapshot-label">Avg. Duration:</span>
                      <span className="snapshot-val">{course.duration}</span>
                    </li>
                    <li>
                      <span className="snapshot-label">Direct Admissions:</span>
                      <span className="snapshot-val" style={{ color: "#10B981", fontWeight: 700 }}>Open Now</span>
                    </li>
                    <li>
                      <span className="snapshot-label">Scholarship Status:</span>
                      <span className="snapshot-val" style={{ color: "#FFA700", fontWeight: 700 }}>Up to 50%</span>
                    </li>
                  </ul>
                </div>

                {/* Top Study Hubs */}
                <div className="sidebar-destinations-card">
                  <h4 className="sidebar-subheading">Available Study Destinations</h4>
                  <div className="destinations-pills-list">
                    {course.topDestinations.map((dest, idx) => (
                      <span key={idx} className="dest-pill-item">
                        <MapPin size={12} color="#FFA700" /> {dest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Back to All Courses */}
                <Link to="/courses" className="back-courses-link">
                  <ArrowLeft size={16} />
                  <span>Explore All In-Demand Programs</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Consultation Banner */}
      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <div className="cta-banner-text">
                <h2>Ready to Apply for {course.title}?</h2>
                <p>
                  Get your free document assessment and fast-track university application processed through Study Prime.
                </p>
              </div>
              <Link
                to="/assessment"
                className="btn btn-accent"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <span>Start Application</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
