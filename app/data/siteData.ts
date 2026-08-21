export interface StudyDestination {
  id: string;
  name: string;
  slug: string;
  description: string;
  popularUniversities: string[];
  keyHighlights: string[];
  flagImage?: string;
  icon?: string;
}

export interface UniversityPartner {
  name: string;
  country: string;
  city?: string;
  logo: string;
}

export interface Testimonial {
  name: string;
  role: string;
  feedback: string;
  avatar?: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  icon: string;
}

export interface CourseItem {
  slug: string;
  title: string;
  category: string;
  badge: string;
  duration: string;
  level: string;
  intakes: string[];
  estimatedTuition: string;
  averageSalary: string;
  shortDescription: string;
  fullDescription: string;
  whyStudy: string[];
  topDestinations: string[];
  entryRequirements: string[];
  careerProspects: string[];
  popularUniversities: string[];
  keyModules: string[];
  icon: string;
}

export const siteConfig = {
  name: "Study Prime",
  tagline: "Study Abroad Experts",
  motto: "Your Study Abroad Partner — We Invest In Your Future",
  heroSubtitle:
    "We provide professional study visa guidance, personalized counseling, and strategic consultation to help you achieve your international education goals.",
  contact: {
    phone: "+92 310 1193888",
    altPhone: "+92 51 8740888",
    email: "info@studyprime.pk",
    address: "Office #F-15, First Floor, Galleria Mall, I-8 Markaz, Islamabad, Pakistan",
    timing: "Mon - Fri: 10:00 AM - 6:00 PM | Sat: 10:00 AM - 3:00 PM",
  },
  stats: [
    { label: "Assessments Done", value: "2,500+", suffix: "" },
    { label: "Visas Granted", value: "98%", suffix: "Success Rate" },
    { label: "Visa Experts", value: "6+", suffix: "Certified Advisors" },
    { label: "Years Experience", value: "10+", suffix: "In Consultancy" },
  ],
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
    twitter: "https://twitter.com",
  },
  vision:
    "At Study Prime, our vision is to guide students toward the right international education opportunities based on their qualifications, interests, and future goals. We aim to become a trusted partner in helping students build successful global careers through personalized guidance and professional support.",
  mission:
    "Our mission is to support students throughout their study abroad journey by helping them choose the right country, university, and career-focused degree programs. From admissions to visa guidance, we provide professional assistance at every step to help students achieve their international education goals with confidence.",
};

export const services: ServiceItem[] = [
  {
    id: "student-visa",
    title: "Student Visa Assistance",
    shortDesc: "Complete visa preparation, documentation support, and mock interview guidance to maximize approval chances.",
    fullDesc:
      "We provide premium student visa consultancy with transparent guidance and strategic support. Our experienced advisors assist students throughout every stage of the application journey with precision and care.",
    features: [
      "Document verification & financial proof structuring",
      "Visa file preparation as per embassy requirements",
      "One-on-one mock interview preparation",
      "Real-time tracking and embassy updates",
    ],
    icon: "ShieldCheck",
  },
  {
    id: "university-matching",
    title: "University & Course Matching",
    shortDesc: "Selecting the ideal accredited institutions and future-proof academic programs aligned with your aspirations.",
    fullDesc:
      "Helping students choose future-ready degree programs that best suit their academic background, financial budget, and career goals.",
    features: [
      "In-depth academic profile assessment",
      "Course suitability and job market outlook",
      "Official liaison with top panel universities",
      "Tuition fee comparison and budget planning",
    ],
    icon: "GraduationCap",
  },
  {
    id: "admission-support",
    title: "Admissions & Application Support",
    shortDesc: "Comprehensive assistance from drafting applications to receiving official unconditional offer letters.",
    fullDesc:
      "We manage end-to-end application processing to premier universities worldwide, ensuring accuracy and speedy turnarounds.",
    features: [
      "Application fee waiver support where applicable",
      "Direct portal application submission",
      "Deadlines and intake management (Fall/Spring)",
      "Continuous admission status follow-ups",
    ],
    icon: "FileCheck",
  },
  {
    id: "sop-guidance",
    title: "SOP & Recommendation Support",
    shortDesc: "Expert review and constructive feedback for Statements of Purpose, resumes, and academic reference letters.",
    fullDesc:
      "Study Prime provides complete assistance in writing and reviewing your Statement of Purpose (SOP) and personal statement, highlighting your academic strengths while preserving your authentic voice.",
    features: [
      "Structuring high-impact personal statements",
      "Aligning statements with university & embassy guidelines",
      "CV & cover letter enhancement",
      "Recommendation letter refinement",
    ],
    icon: "PenTool",
  },
  {
    id: "departure-briefing",
    title: "Pre & Post Departure Briefing",
    shortDesc: "Smooth transition assistance including accommodation finding, travel briefing, and on-arrival settling tips.",
    fullDesc:
      "Our support does not end when your visa is approved. We prepare students for life in a new country with practical advice and orientation.",
    features: [
      "Flight bookings and luggage checklist",
      "Student housing & on-campus accommodation guidance",
      "Airport pickup and local transit advice",
      "Bank account and national identity setup help",
    ],
    icon: "PlaneTakeoff",
  },
];

export const destinations: StudyDestination[] = [
  {
    id: "turkey",
    name: "Turkey",
    slug: "turkey",
    description: "World-class European accredited degrees, affordable tuition fees, vibrant cultural life, and high visa approval rates for Pakistani students.",
    popularUniversities: ["Istanbul Aydin University", "Bahcesehir University", "Medipol University", "Sabanci University", "Yeditepe University", "Istinye University"],
    keyHighlights: ["Affordable tuition & low cost of living", "100% English taught programs available", "No IELTS required in many top universities", "High visa success with swift processing"],
    flagImage: "/images/flags/turkey.svg",
  },
  {
    id: "uk",
    name: "United Kingdom",
    slug: "united-kingdom",
    description: "Globally recognized universities, diverse academic opportunities, and strong 2-year post-study work visa options.",
    popularUniversities: ["University of Oxford", "University of Bristol", "University of Birmingham", "Brunel University", "University of Greenwich"],
    keyHighlights: ["1-year Master's degree options", "Post-Study Graduate Visa (PSW)", "World-leading research universities", "Multicultural environment"],
    flagImage: "/images/flags/uk.svg",
  },
  {
    id: "usa",
    name: "United States",
    slug: "united-states",
    description: "World-class Ivy League and public universities offering cutting-edge academic and research-driven environments.",
    popularUniversities: ["Top Tier Research Universities", "State & Private Institutions across 50 States"],
    keyHighlights: ["Up to 3 years STEM OPT extension", "Flexible curriculum and majors", "Generous research grants & scholarships", "Global career networking"],
    flagImage: "/images/flags/usa.svg",
  },
  {
    id: "australia",
    name: "Australia",
    slug: "australia",
    description: "High-quality education system with excellent post-study opportunities, welcoming culture, and high living standards.",
    popularUniversities: ["University of Sydney", "University of Western Australia", "Griffith University", "University of Tasmania"],
    keyHighlights: ["Post-study work rights", "Group of Eight (Go8) institutions", "High minimum wage & student part-time work", "Sunny climate & vibrant lifestyle"],
    flagImage: "/images/flags/australia.svg",
  },
  {
    id: "canada",
    name: "Canada",
    slug: "canada",
    description: "One of the top study destinations for Pakistani students — offering 100+ partner institutions, Post-Graduation Work Permits, and a clear pathway to permanent residency.",
    popularUniversities: ["Thompson Rivers University", "Seneca College", "Algonquin College", "Humber Polytechnic", "SAIT", "University of New Brunswick", "Sheridan College", "BCIT"],
    keyHighlights: ["Post-Graduation Work Permit (PGWP) up to 3 years", "Pathway to Canadian Permanent Residency", "100+ partner colleges & universities", "Co-op & internship programs widely available"],
    flagImage: "/images/flags/canada.svg",
  },
  {
    id: "ireland",
    name: "Ireland",
    slug: "ireland",
    description: "A booming tech and pharma hub with world-class universities, English-speaking culture, and a growing international student community in the heart of Europe.",
    popularUniversities: ["Trinity College Dublin", "University College Dublin", "Dublin City University", "University of Galway", "University of Limerick", "Maynooth University"],
    keyHighlights: ["English-speaking EU country", "2-year Stay Back Visa after graduation", "Thriving tech industry (Google, Meta, Apple HQs)", "Low cost of living vs UK"],
    flagImage: "/images/flags/ireland.svg",
  },
  {
    id: "switzerland",
    name: "Switzerland",
    slug: "switzerland",
    description: "World-renowned for hospitality, business, and management degrees. Switzerland offers prestigious European education with multi-lingual campuses and global career pathways.",
    popularUniversities: ["EU Business School", "BHMS University Centre", "Rushford Business School"],
    keyHighlights: ["Top-ranked hospitality & business programs", "Multi-campus: Switzerland, Spain & Germany", "Strong career network in European industry", "Prestigious European diploma recognition"],
    flagImage: "/images/flags/switzerland.svg",
  },
  {
    id: "spain",
    name: "Spain",
    slug: "spain",
    description: "A vibrant European destination with top-ranked business, design, tourism, and hospitality programs in Barcelona, Madrid, and beyond — all at an affordable cost of living.",
    popularUniversities: ["Universidad Europea", "Toulouse Business School Barcelona", "UCAM", "EU Business School", "CETT Barcelona", "SBS Swiss Business School"],
    keyHighlights: ["Affordable tuition & sunny lifestyle", "World-class business & design schools", "Schengen zone – travel across 27 EU countries", "English-taught degree programs available"],
    flagImage: "/images/flags/spain.svg",
  },
  {
    id: "netherlands",
    name: "Netherlands",
    slug: "netherlands",
    description: "A European innovation powerhouse offering world-class applied sciences, sustainable energy, and business education taught 100% in English in Amsterdam, Haarlem, and Utrecht.",
    popularUniversities: ["CEG ONCAMPUS Amsterdam", "SRH Haarlem University", "Tio Business School", "EIT InnoEnergy & ISE"],
    keyHighlights: ["1-Year Orientation Year (Zoekjaar) Post-Study Visa", "95%+ English proficiency across the country", "Hub for tech, sustainable energy & logistics", "High graduate employability across the EU"],
    flagImage: "/images/flags/netherlands.svg",
  },
  {
    id: "germany",
    name: "Germany",
    slug: "germany",
    description: "Europe's leading economic and engineering powerhouse offering world-class applied sciences, technology, and management degrees with an 18-month post-study work visa.",
    popularUniversities: ["University of Europe for Applied Sciences (UE)", "SRH Higher Education", "GISMA University of Applied Sciences", "BSBI Berlin", "Munich Business School", "IU International University", "Macromedia University", "ISM International School of Management"],
    keyHighlights: ["18-Month Post-Study Job Seeker Visa", "Zero or low tuition fees across partner institutions", "Strongest job market in Europe for tech, business & engineering", "Schengen travel across 27 EU member states"],
    flagImage: "/images/flags/germany.svg",
  },
  {
    id: "finland",
    name: "Finland",
    slug: "finland",
    description: "Ranked the happiest country in the world with Europe's top-rated education system, cutting-edge technology & innovation hubs, generous scholarships, and post-study residence permits.",
    popularUniversities: ["LUT University", "University of Vaasa", "XAMK University", "Metropolia UAS", "Arcada UAS", "LAB UAS", "Turku UAS", "Edunation Finland"],
    keyHighlights: ["2-Year Post-Study Work Permit", "Ranked #1 World's Best Education System", "Generous merit-based scholarships up to 100%", "Fast track to Finnish & EU permanent residency"],
    flagImage: "/images/flags/finland.svg",
  },
  {
    id: "france",
    name: "France",
    slug: "france",
    description: "A world-renowned cultural, culinary, fashion, engineering, and business capital. France offers globally accredited Grandes Écoles, 2-year post-study APS work visas, and government housing subsidies (CAF).",
    popularUniversities: ["Le Cordon Bleu Paris", "Toulouse Business School", "NEOMA Business School", "Montpellier Business School", "ESSCA", "PSB Paris", "EPITECH", "OMNES Education"],
    keyHighlights: ["2-Year Post-Study Work Visa (APS / RECE)", "French Government CAF Housing Subsidy (up to 40% rent assistance)", "Triple-accredited (EQUIS/AMBA/AACSB) Grandes Écoles", "Schengen visa travel across 27 EU countries"],
    flagImage: "/images/flags/france.svg",
  },
  {
    id: "europe",
    name: "Europe",
    slug: "europe",
    description: "Affordable, low-tuition, and career-focused education opportunities across leading European Schengen countries.",
    popularUniversities: ["Norway", "Italy", "Iceland", "France", "Finland", "Denmark", "Belgium"],
    keyHighlights: ["Low / No tuition fee programs in select countries", "Schengen visa travel across 27+ countries", "English-taught Master's degrees", "Rich cultural heritage"],
    flagImage: "/images/flags/europe.svg",
  },
];

export const turkishUniversities = [
  { name: "Istanbul Aydin University", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/aydin.svg" },
  { name: "Atlas University", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/atlas.svg" },
  { name: "Bahcesehir University", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/bahcesehir.svg" },
  { name: "Beykoz University", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/beykoz.svg" },
  { name: "Fenerbahce University", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/fenerbahce.svg" },
  { name: "Istanbul Gelisim University", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/gelisim.svg" },
  { name: "Isik University", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/isik.svg" },
  { name: "Istinye University", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/istinye.svg" },
  { name: "Kadir Has University", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/kadir-has.svg" },
  { name: "Istanbul Kultur University", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/kultur.svg" },
  { name: "Istanbul Okan University", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/okan.svg" },
  { name: "Istanbul Topkapi University", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/topkapi.svg" },
  { name: "Uskudar University", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/uskudar.svg" },
  { name: "Yasar University", city: "İzmir", country: "Turkey", logo: "/images/universities/turkey/yasar.svg" },
  { name: "Istanbul Yeni Yuzyil University", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/yeni-yuzyil.svg" },
  { name: "Yeditepe University", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/yeditepe.svg" },
  { name: "Biruni University", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/biruni.svg" },
  { name: "Cyprus Aydın University", city: "Northern Cyprus", country: "Turkey / Cyprus", logo: "/images/universities/turkey/cyprus-aydin.svg" },
  { name: "Dogus University", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/dogus.svg" },
  { name: "Istanbul Gedik University", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/gedik.svg" },
  { name: "Istanbul Galata University", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/galata.svg" },
  { name: "Halic University", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/halic.svg" },
  { name: "Istanbul Kent University", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/kent.svg" },
  { name: "Lokman Hekim University", city: "Ankara", country: "Turkey", logo: "/images/universities/turkey/lokman-hekim.svg" },
  { name: "Istanbul Medipol University", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/medipol-ist.svg" },
  { name: "Ankara Medipol University", city: "Ankara", country: "Turkey", logo: "/images/universities/turkey/medipol-ank.svg" },
  { name: "Istanbul Nisantasi University", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/nisantasi.svg" },
  { name: "Ozyegin University", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/ozyegin.svg" },
  { name: "Ostim Technical University", city: "Ankara", country: "Turkey", logo: "/images/universities/turkey/ostim.svg" },
  { name: "Sabanci University", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/sabanci.svg" },
  { name: "School of Business & Management", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/sbm-istanbul.svg" },
  { name: "Istanbul Ticaret University", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/ticaret.svg" },
  { name: "Istanbul Arel University", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/arel.svg" },
  { name: "Beykent University", city: "Istanbul", country: "Turkey", logo: "/images/universities/turkey/beykent.svg" },
];

export const ukUniversities = [
  {
    "name": "Abertay Univeristy",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/abertay-univeristy.svg"
  },
  {
    "name": "Aberystwyth University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/aberystwyth-university.svg"
  },
  {
    "name": "Amity University in London",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/amity-university-in-london.svg"
  },
  {
    "name": "Anglia Ruskin University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/anglia-ruskin-university.svg"
  },
  {
    "name": "Anglia Ruskin University- London Campus",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/anglia-ruskin-university-londo.svg"
  },
  {
    "name": "Arden University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/arden-university.svg"
  },
  {
    "name": "Arts University Bournemouth",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/arts-university-bournemouth.svg"
  },
  {
    "name": "Arts University Plymouth",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/arts-university-plymouth.svg"
  },
  {
    "name": "Aston University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/aston-university.svg"
  },
  {
    "name": "Aston University - London",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/aston-university-london.svg"
  },
  {
    "name": "Bangor University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/bangor-university.svg"
  },
  {
    "name": "Bath Spa University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/bath-spa-university.svg"
  },
  {
    "name": "Bath Spa University - London",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/bath-spa-university-london.svg"
  },
  {
    "name": "Bayswater Education",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/bayswater-education.svg"
  },
  {
    "name": "BIMM University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/bimm-university.svg"
  },
  {
    "name": "Birkbeck, University of London",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/birkbeck-university-of-london.svg"
  },
  {
    "name": "Birmingham City University",
    "city": "Birmingham",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/birmingham-city-university.svg"
  },
  {
    "name": "Bishop Grosseteste University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/bishop-grosseteste-university.svg"
  },
  {
    "name": "Bloomsbury Institute, London",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/bloomsbury-institute-london.svg"
  },
  {
    "name": "Bournemouth University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/bournemouth-university.svg"
  },
  {
    "name": "BPP Univeristy",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/bpp-univeristy.svg"
  },
  {
    "name": "Brunel University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/brunel-university.svg"
  },
  {
    "name": "Buckinghamshire New University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/buckinghamshire-new-university.svg"
  },
  {
    "name": "Bucks New University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/bucks-new-university.svg"
  },
  {
    "name": "Cambridge Education Group - ONCAMPUS UK",
    "city": "Cambridge",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/cambridge-education-group-onca.svg"
  },
  {
    "name": "Canterbury Christ Church University (GUS)",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/canterbury-christ-church-unive.svg"
  },
  {
    "name": "Cardiff Metropolitan University",
    "city": "Cardiff",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/cardiff-metropolitan-universit.svg"
  },
  {
    "name": "Cardiff University",
    "city": "Cardiff",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/cardiff-university.svg"
  },
  {
    "name": "Centre for English Studies (CES) Harrogate",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/centre-for-english-studies-ces.svg"
  },
  {
    "name": "Centre for English Studies (CES) Leeds",
    "city": "Leeds",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/centre-for-english-studies-ces.svg"
  },
  {
    "name": "Centre for English Studies (CES) London",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/centre-for-english-studies-ces.svg"
  },
  {
    "name": "Centre for English Studies (CES) Oxford",
    "city": "Oxford",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/centre-for-english-studies-ces.svg"
  },
  {
    "name": "Centre for English Studies (CES) Worthing",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/centre-for-english-studies-ces.svg"
  },
  {
    "name": "City St. George's, University of London",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/city-st-george-s-university-of.svg"
  },
  {
    "name": "City University London",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/city-university-london.svg"
  },
  {
    "name": "Coventry University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/coventry-university.svg"
  },
  {
    "name": "Cranfield University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/cranfield-university.svg"
  },
  {
    "name": "De Montfort University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/de-montfort-university.svg"
  },
  {
    "name": "Durham University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/durham-university.svg"
  },
  {
    "name": "EC English",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/ec-english.svg"
  },
  {
    "name": "Edge Hill University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/edge-hill-university.svg"
  },
  {
    "name": "Edinburgh Napier University",
    "city": "Edinburgh",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/edinburgh-napier-university.svg"
  },
  {
    "name": "EF INTERNATIONAL ACADEMY LTD - TRADING AS: EF ACADEMY",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/ef-international-academy-ltd-t.svg"
  },
  {
    "name": "English Path - UNDER GEDU",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/english-path-under-gedu.svg"
  },
  {
    "name": "European School of Economics (ESE)",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/european-school-of-economics-e.svg"
  },
  {
    "name": "Falmouth University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/falmouth-university.svg"
  },
  {
    "name": "Glasgow Caledonian University",
    "city": "Glasgow",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/glasgow-caledonian-university.svg"
  },
  {
    "name": "Glasgow Caledonian University, London",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/glasgow-caledonian-university-.svg"
  },
  {
    "name": "Glasgow School of Arts",
    "city": "Glasgow",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/glasgow-school-of-arts.svg"
  },
  {
    "name": "Global Banking School",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/global-banking-school.svg"
  },
  {
    "name": "Goldsmiths, University of London",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/goldsmiths-university-of-londo.svg"
  },
  {
    "name": "Harper Adams University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/harper-adams-university.svg"
  },
  {
    "name": "Hartpury University & Harpury College (GUS)",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/hartpury-university-harpury-co.svg"
  },
  {
    "name": "Health Sciences University (HSU)",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/health-sciences-university-hsu.svg"
  },
  {
    "name": "Henley Business School",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/henley-business-school.svg"
  },
  {
    "name": "Heriot-watt University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/heriot-watt-university.svg"
  },
  {
    "name": "Hult International Business School",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/hult-international-business-sc.svg"
  },
  {
    "name": "INTO",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/into.svg"
  },
  {
    "name": "ISTITUTO MARANGONI - MILANO, PARIS, LONDON AND FLORENCE",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/istituto-marangoni-milano-pari.svg"
  },
  {
    "name": "JCA - LONDON FASHION ACADEMY",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/jca-london-fashion-academy.svg"
  },
  {
    "name": "KAPLAN - UK - KAPLAN International Colleges",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/kaplan-uk-kaplan-international.svg"
  },
  {
    "name": "KAPLAN Open Learning",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/kaplan-open-learning.svg"
  },
  {
    "name": "Keele University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/keele-university.svg"
  },
  {
    "name": "KIC London",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/kic-london.svg"
  },
  {
    "name": "King's College London",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/king-s-college-london.svg"
  },
  {
    "name": "Kings Education",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/kings-education.svg"
  },
  {
    "name": "Kingston University, London",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/kingston-university-london.svg"
  },
  {
    "name": "Lancaster University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/lancaster-university.svg"
  },
  {
    "name": "Le Cordon Bleu",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/le-cordon-bleu.svg"
  },
  {
    "name": "Leeds Arts University",
    "city": "Leeds",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/leeds-arts-university.svg"
  },
  {
    "name": "Leeds Beckett University",
    "city": "Leeds",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/leeds-beckett-university.svg"
  },
  {
    "name": "Leeds Conservatoire",
    "city": "Leeds",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/leeds-conservatoire.svg"
  },
  {
    "name": "Leeds Trinity University",
    "city": "Leeds",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/leeds-trinity-university.svg"
  },
  {
    "name": "Liverpool Hope University",
    "city": "Liverpool",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/liverpool-hope-university.svg"
  },
  {
    "name": "Liverpool John Moores University",
    "city": "Liverpool",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/liverpool-john-moores-universi.svg"
  },
  {
    "name": "London Fashion Academy",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/london-fashion-academy.svg"
  },
  {
    "name": "London Metropolitan University",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/london-metropolitan-university.svg"
  },
  {
    "name": "London South Bank University",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/london-south-bank-university.svg"
  },
  {
    "name": "Loughborough University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/loughborough-university.svg"
  },
  {
    "name": "Loughborough University London",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/loughborough-university-london.svg"
  },
  {
    "name": "Malvern International",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/malvern-international.svg"
  },
  {
    "name": "Manchester Metropolitan University",
    "city": "Manchester",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/manchester-metropolitan-univer.svg"
  },
  {
    "name": "Maynooth University",
    "city": "Maynooth",
    "country": "Ireland",
    "logo": "/images/universities/uk/maynooth-university.svg"
  },
  {
    "name": "McTimoney College of Chiropractic",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/mctimoney-college-of-chiroprac.svg"
  },
  {
    "name": "Met Film School Ltd",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/met-film-school-ltd.svg"
  },
  {
    "name": "Metfilm School - London & Leeds Campus",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/metfilm-school-london-leeds-ca.svg"
  },
  {
    "name": "Middlesex University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/middlesex-university.svg"
  },
  {
    "name": "MLA College",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/mla-college.svg"
  },
  {
    "name": "Navitas",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/navitas.svg"
  },
  {
    "name": "Newcastle University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/newcastle-university.svg"
  },
  {
    "name": "Northeastern University London",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/northeastern-university-london.svg"
  },
  {
    "name": "Northumbria University Newcastle",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/northumbria-university-newcast.svg"
  },
  {
    "name": "Norwich University of the Arts",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/norwich-university-of-the-arts.svg"
  },
  {
    "name": "Nottingham Trent University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/nottingham-trent-university.svg"
  },
  {
    "name": "Oxford Brookes University",
    "city": "Oxford",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/oxford-brookes-university.svg"
  },
  {
    "name": "Oxford International Education Group (OIEG)",
    "city": "Oxford",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/oxford-international-education.svg"
  },
  {
    "name": "Paris Dauphine International",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/paris-dauphine-international.svg"
  },
  {
    "name": "Queen Margaret University Edinburgh",
    "city": "Edinburgh",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/queen-margaret-university-edin.svg"
  },
  {
    "name": "Queen Mary, University of London",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/queen-mary-university-of-londo.svg"
  },
  {
    "name": "Queen’s University Belfast",
    "city": "Belfast",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/queen-s-university-belfast.svg"
  },
  {
    "name": "Ravensbourne University London",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/ravensbourne-university-london.svg"
  },
  {
    "name": "Regents College London",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/regents-college-london.svg"
  },
  {
    "name": "Richmond The American International",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/richmond-the-american-internat.svg"
  },
  {
    "name": "Robert Gordon University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/robert-gordon-university.svg"
  },
  {
    "name": "Roehampton University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/roehampton-university.svg"
  },
  {
    "name": "Royal Agricultural University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/royal-agricultural-university.svg"
  },
  {
    "name": "Royal Holloway, University of London",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/royal-holloway-university-of-l.svg"
  },
  {
    "name": "Sheffield Hallam University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/sheffield-hallam-university.svg"
  },
  {
    "name": "SOAS University of London",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/soas-university-of-london.svg"
  },
  {
    "name": "Solent University, Southampton",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/solent-university-southampton.svg"
  },
  {
    "name": "St. Mary's University, Twickenham London",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/st-mary-s-university-twickenha.svg"
  },
  {
    "name": "Study Group - UK - ISC",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/study-group-uk-isc.svg"
  },
  {
    "name": "Swansea University",
    "city": "Swansea",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/swansea-university.svg"
  },
  {
    "name": "Teesside University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/teesside-university.svg"
  },
  {
    "name": "The Glasgow School of Art",
    "city": "Glasgow",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/the-glasgow-school-of-art.svg"
  },
  {
    "name": "The University of Buckingham",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/the-university-of-buckingham.svg"
  },
  {
    "name": "The University of Edinburgh",
    "city": "Edinburgh",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/the-university-of-edinburgh.svg"
  },
  {
    "name": "The University of Law",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/the-university-of-law.svg"
  },
  {
    "name": "The University of Law, London Bloomsbury",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/the-university-of-law-london-b.svg"
  },
  {
    "name": "The University of Manchester",
    "city": "Manchester",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/the-university-of-manchester.svg"
  },
  {
    "name": "Ulster University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/ulster-university.svg"
  },
  {
    "name": "Ulster University (QA)",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/ulster-university-qa.svg"
  },
  {
    "name": "Ulster University Coleraine Campus",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/ulster-university-coleraine-ca.svg"
  },
  {
    "name": "University Academy 92 (UA92)-via NAVITAS",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-academy-92-ua92-via.svg"
  },
  {
    "name": "University College Birmingham",
    "city": "Birmingham",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-college-birmingham.svg"
  },
  {
    "name": "University for the Creative Arts",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-for-the-creative-ar.svg"
  },
  {
    "name": "University of Aberdeen",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-aberdeen.svg"
  },
  {
    "name": "University of Bath",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-bath.svg"
  },
  {
    "name": "University of Bedfordshire",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-bedfordshire.svg"
  },
  {
    "name": "University of Birmingham",
    "city": "Birmingham",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-birmingham.svg"
  },
  {
    "name": "University of Bolton",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-bolton.svg"
  },
  {
    "name": "University of Bolton (SABO)",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-bolton-sabo.svg"
  },
  {
    "name": "University of Bradford",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-bradford.svg"
  },
  {
    "name": "University of Brighton",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-brighton.svg"
  },
  {
    "name": "University of Bristol",
    "city": "Bristol",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-bristol.svg"
  },
  {
    "name": "University of Buckingham",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-buckingham.svg"
  },
  {
    "name": "University of Chester",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-chester.svg"
  },
  {
    "name": "University of Chichester",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-chichester.svg"
  },
  {
    "name": "University of Cumbria",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-cumbria.svg"
  },
  {
    "name": "University of Derby",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-derby.svg"
  },
  {
    "name": "University of Dundee",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-dundee.svg"
  },
  {
    "name": "University of East Anglia",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-east-anglia.svg"
  },
  {
    "name": "University of East London",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-east-london.svg"
  },
  {
    "name": "University of Essex",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-essex.svg"
  },
  {
    "name": "University of Exeter",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-exeter.svg"
  },
  {
    "name": "University of Glasgow",
    "city": "Glasgow",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-glasgow.svg"
  },
  {
    "name": "University of Gloucestershire",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-gloucestershire.svg"
  },
  {
    "name": "University of Greenwich",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-greenwich.svg"
  },
  {
    "name": "University of Hertfordshire",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-hertfordshire.svg"
  },
  {
    "name": "University of Huddersfield",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-huddersfield.svg"
  },
  {
    "name": "University of Hull",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-hull.svg"
  },
  {
    "name": "University of Hull - London",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-hull-london.svg"
  },
  {
    "name": "University of Kent",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-kent.svg"
  },
  {
    "name": "University of Lancashire",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-lancashire.svg"
  },
  {
    "name": "University of Leeds",
    "city": "Leeds",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-leeds.svg"
  },
  {
    "name": "University of Leicester",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-leicester.svg"
  },
  {
    "name": "University of Lincoln",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-lincoln.svg"
  },
  {
    "name": "University of Liverpool",
    "city": "Liverpool",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-liverpool.svg"
  },
  {
    "name": "University of Northampton",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-northampton.svg"
  },
  {
    "name": "University of Nottingham",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-nottingham.svg"
  },
  {
    "name": "University of Plymouth",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-plymouth.svg"
  },
  {
    "name": "University of Portsmouth",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-portsmouth.svg"
  },
  {
    "name": "University of Portsmouth, London",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-portsmouth-londo.svg"
  },
  {
    "name": "University of Reading",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-reading.svg"
  },
  {
    "name": "University of Roehampton, London",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-roehampton-londo.svg"
  },
  {
    "name": "University of Salford",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-salford.svg"
  },
  {
    "name": "University of Sheffield",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-sheffield.svg"
  },
  {
    "name": "University of South Wales",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-south-wales.svg"
  },
  {
    "name": "University of Southampton",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-southampton.svg"
  },
  {
    "name": "University of Staffordshire",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-staffordshire.svg"
  },
  {
    "name": "University of Stirling",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-stirling.svg"
  },
  {
    "name": "University of Strathclyde",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-strathclyde.svg"
  },
  {
    "name": "University of Suffolk",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-suffolk.svg"
  },
  {
    "name": "University of Sunderland",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-sunderland.svg"
  },
  {
    "name": "University of Surrey",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-surrey.svg"
  },
  {
    "name": "University of Sussex",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-sussex.svg"
  },
  {
    "name": "University of Wales Trinity Saint David",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-wales-trinity-sa.svg"
  },
  {
    "name": "University of West London",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-west-london.svg"
  },
  {
    "name": "University of West of England, Bristol",
    "city": "Bristol",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-west-of-england-.svg"
  },
  {
    "name": "University of West of Scotland",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-west-of-scotland.svg"
  },
  {
    "name": "University of West of Scotland, London",
    "city": "London",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-west-of-scotland.svg"
  },
  {
    "name": "University of Westminster",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-westminster.svg"
  },
  {
    "name": "University of Winchester",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-winchester.svg"
  },
  {
    "name": "University of Wolverhampton",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-wolverhampton.svg"
  },
  {
    "name": "University of Wolverhampton International Study Centre",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-wolverhampton-in.svg"
  },
  {
    "name": "University of Worcester",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-worcester.svg"
  },
  {
    "name": "University of York",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/university-of-york.svg"
  },
  {
    "name": "Wrexham University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/wrexham-university.svg"
  },
  {
    "name": "York St John University",
    "city": "UK",
    "country": "United Kingdom",
    "logo": "/images/universities/uk/york-st-john-university.svg"
  }
];

export const australianUniversities = [
  { name: "University of Sydney", city: "Sydney", country: "Australia", logo: "/images/University-of-sydney-rlqpsda51hzn3zq07uqmyf9rdzqmxu2llv3zgipkyk.png" },
  { name: "University of Western Australia", city: "Perth", country: "Australia", logo: "/images/University-of-western-australia-rlqpsda51hzn3zq07uqmyf9rdzqmxu2llv3zgipkyk.png" },
  { name: "Griffith University", city: "Brisbane / Gold Coast", country: "Australia", logo: "/images/University-griffith-rlqpsda51hzn3zq07uqmyf9rdzqmxu2llv3zgipkyk.png" },
  { name: "University of Tasmania", city: "Hobart", country: "Australia", logo: "/images/University-tasmania-rlqpsda51hzn3zq07uqmyf9rdzqmxu2llv3zgipkyk.png" }
];

export const irishUniversities = [
  { name: "Maynooth University", city: "Maynooth", country: "Ireland", logo: "/images/universities/ireland/maynooth.svg" },
  { name: "University of Limerick", city: "Limerick", country: "Ireland", logo: "/images/universities/ireland/limerick.svg" },
  { name: "University of Galway", city: "Galway", country: "Ireland", logo: "/images/universities/ireland/galway.svg" },
  { name: "Shannon College of Hotel Management", city: "Shannon", country: "Ireland", logo: "/images/universities/ireland/shannon-hotel.svg" },
  { name: "Cambridge Education Group (ONCAMPUS Ireland)", city: "Dublin", country: "Ireland", logo: "/images/universities/ireland/oncampus-ireland.svg" },
  { name: "Dublin City University", city: "Dublin", country: "Ireland", logo: "/images/universities/ireland/dcu.svg" },
  { name: "Technological University of the Shannon (TUS)", city: "Athlone / Limerick", country: "Ireland", logo: "/images/universities/ireland/tus.svg" },
  { name: "English Path (GEDU Ireland)", city: "Dublin", country: "Ireland", logo: "/images/universities/ireland/english-path-ireland.svg" },
  { name: "Galway Business School & GCI", city: "Galway", country: "Ireland", logo: "/images/universities/ireland/galway-business.svg" },
  { name: "Dundalk Institute of Technology (DKIT)", city: "Dundalk", country: "Ireland", logo: "/images/universities/ireland/dkit.svg" },
  { name: "BIMM University Ireland", city: "Dublin", country: "Ireland", logo: "/images/universities/ireland/bimm-ireland.svg" },
  { name: "IBAT College Dublin (GUS)", city: "Dublin", country: "Ireland", logo: "/images/universities/ireland/ibat.svg" },
  { name: "Trinity College Dublin", city: "Dublin", country: "Ireland", logo: "/images/universities/ireland/tcd.svg" },
  { name: "Munster Technological University", city: "Cork", country: "Ireland", logo: "/images/universities/ireland/mtu.svg" },
  { name: "Study Group – University College Dublin ISC", city: "Dublin", country: "Ireland", logo: "/images/universities/ireland/ucd-isc.svg" },
  { name: "South East Technological University (SETU)", city: "Waterford / Carlow", country: "Ireland", logo: "/images/universities/ireland/setu.svg" },
  { name: "Irish American University (American College Dublin)", city: "Dublin", country: "Ireland", logo: "/images/universities/ireland/iau.svg" },
  { name: "DIFC – Dublin International Foundation College", city: "Dublin", country: "Ireland", logo: "/images/universities/ireland/difc.svg" },
  { name: "Technological University Dublin (TU Dublin)", city: "Dublin", country: "Ireland", logo: "/images/universities/ireland/tu-dublin.svg" },
];

export const swissUniversities = [
  { name: "European University / EU Business School", city: "Geneva / Barcelona / Munich", country: "Switzerland", logo: "/images/universities/switzerland/eu-business-school.svg" },
  { name: "BHMS University Centre Switzerland", city: "Lucerne, Switzerland", country: "Switzerland", logo: "/images/universities/switzerland/bhms.svg" },
  { name: "Rushford Business School", city: "Geneva / Germany", country: "Switzerland", logo: "/images/universities/switzerland/rushford.svg" },
];

export const spanishUniversities = [
  { name: "European University / EU Business School", city: "Barcelona / Geneva / Munich", country: "Spain", logo: "/images/universities/spain/eu-business-school-spain.svg" },
  { name: "Toulouse Business School", city: "Barcelona / Paris / Toulouse", country: "Spain", logo: "/images/universities/spain/toulouse-bs.svg" },
  { name: "UCAM Universidad Catolica San Antonio", city: "Murcia, Spain", country: "Spain", logo: "/images/universities/spain/ucam.svg" },
  { name: "Berlin School of Business & Innovation (BSBI)", city: "Barcelona / Berlin / Hamburg", country: "Spain", logo: "/images/universities/spain/bsbi-spain.svg" },
  { name: "Universidad Europea (UEM, UEC, UEV)", city: "Madrid / Canarias / Valencia", country: "Spain", logo: "/images/universities/spain/universidad-europea.svg" },
  { name: "CEDEU Centro de Estudios Universitarios", city: "Madrid, Spain", country: "Spain", logo: "/images/universities/spain/cedeu.svg" },
  { name: "CESINE School of Design & Business", city: "Santander, Spain", country: "Spain", logo: "/images/universities/spain/cesine.svg" },
  { name: "SBS Swiss Business School Barcelona & Madrid", city: "Barcelona / Madrid", country: "Spain", logo: "/images/universities/spain/sbs-spain.svg" },
  { name: "European School of Economics (ESE)", city: "Barcelona / London / Rome", country: "Spain", logo: "/images/universities/spain/ese-spain.svg" },
  { name: "ENAE International Business School", city: "Murcia, Spain", country: "Spain", logo: "/images/universities/spain/enae.svg" },
  { name: "Marbella International University Centre (MIUC)", city: "Marbella, Spain", country: "Spain", logo: "/images/universities/spain/miuc.svg" },
  { name: "Campus Spain", city: "Spain", country: "Spain", logo: "/images/universities/spain/campus-spain.svg" },
  { name: "Fundacio UAB / UAB Languages", city: "Barcelona, Spain", country: "Spain", logo: "/images/universities/spain/uab-barcelona.svg" },
  { name: "CETT Barcelona School of Tourism & Hospitality", city: "Barcelona, Spain", country: "Spain", logo: "/images/universities/spain/cett.svg" },
  { name: "Escuela Universitaria ADEMA", city: "Palma, Mallorca", country: "Spain", logo: "/images/universities/spain/adema.svg" },
  { name: "LaSalle College International Barcelona", city: "Barcelona, Spain", country: "Spain", logo: "/images/universities/spain/lasalle-barcelona.svg" },
  { name: "C3S Business School Spain", city: "Spain", country: "Spain", logo: "/images/universities/spain/c3s-spain.svg" },
];

export const canadianUniversities = [
  { name: "Thompson Rivers University (TRU)", city: "Kamloops, BC", country: "Canada", logo: "/images/universities/canada/thompson-rivers-university-tru.svg" },
  { name: "University of the Fraser Valley", city: "Abbotsford, BC", country: "Canada", logo: "/images/universities/canada/university-of-the-fraser-valley.svg" },
  { name: "Confederation College", city: "Thunder Bay, ON", country: "Canada", logo: "/images/universities/canada/confederation-college.svg" },
  { name: "Centennial College", city: "Toronto, ON", country: "Canada", logo: "/images/universities/canada/centennial-college.svg" },
  { name: "Mohawk College", city: "Hamilton, ON", country: "Canada", logo: "/images/universities/canada/mohawk-college-of-applied-arts-and-.svg" },
  { name: "Conestoga College", city: "Kitchener, ON", country: "Canada", logo: "/images/universities/canada/conestoga-college.svg" },
  { name: "Seneca College", city: "Toronto, ON", country: "Canada", logo: "/images/universities/canada/seneca-college.svg" },
  { name: "Algonquin College", city: "Ottawa, ON", country: "Canada", logo: "/images/universities/canada/algonquin-college.svg" },
  { name: "George Brown College", city: "Toronto, ON", country: "Canada", logo: "/images/universities/canada/george-brown-college.svg" },
  { name: "Le Cordon Bleu Canada", city: "Ottawa, ON", country: "Canada", logo: "/images/universities/canada/le-cordon-bleu-canada.svg" },
  { name: "Cape Breton University", city: "Sydney, NS", country: "Canada", logo: "/images/universities/canada/cape-breton-university.svg" },
  { name: "Niagara College", city: "Welland, ON", country: "Canada", logo: "/images/universities/canada/niagara-college.svg" },
  { name: "Dalhousie University", city: "Halifax, NS", country: "Canada", logo: "/images/universities/canada/dalhousie-university.svg" },
  { name: "Georgian College", city: "Barrie, ON", country: "Canada", logo: "/images/universities/canada/georgian-college.svg" },
  { name: "Fairleigh Dickinson University Vancouver", city: "Vancouver, BC", country: "Canada", logo: "/images/universities/canada/fairleigh-dickinson-university-vanc.svg" },
  { name: "Columbia College", city: "Vancouver, BC", country: "Canada", logo: "/images/universities/canada/columbia-college.svg" },
  { name: "North Island College", city: "Courtenay, BC", country: "Canada", logo: "/images/universities/canada/north-island-college.svg" },
  { name: "Northern Lights College", city: "Dawson Creek, BC", country: "Canada", logo: "/images/universities/canada/northern-lights-college.svg" },
  { name: "Bow Valley College", city: "Calgary, AB", country: "Canada", logo: "/images/universities/canada/bow-valley-college.svg" },
  { name: "New York Institute of Technology (NYIT) Vancouver", city: "Vancouver, BC", country: "Canada", logo: "/images/universities/canada/new-york-institute-of-technology-ny.svg" },
  { name: "University Canada West", city: "Vancouver, BC", country: "Canada", logo: "/images/universities/canada/university-canada-west.svg" },
  { name: "Northern College", city: "Timmins, ON", country: "Canada", logo: "/images/universities/canada/northern-college.svg" },
  { name: "Fleming College", city: "Peterborough, ON", country: "Canada", logo: "/images/universities/canada/fleming-college.svg" },
  { name: "Douglas College", city: "New Westminster, BC", country: "Canada", logo: "/images/universities/canada/douglas-college.svg" },
  { name: "British Columbia Institute of Technology (BCIT)", city: "Burnaby, BC", country: "Canada", logo: "/images/universities/canada/british-columbia-institute-of-techn.svg" },
  { name: "Cambrian College", city: "Sudbury, ON", country: "Canada", logo: "/images/universities/canada/cambrian-college.svg" },
  { name: "Vancouver Community College", city: "Vancouver, BC", country: "Canada", logo: "/images/universities/canada/vancouver-community-college.svg" },
  { name: "College of New Caledonia", city: "Prince George, BC", country: "Canada", logo: "/images/universities/canada/college-of-new-caledonia.svg" },
  { name: "Royal Roads University", city: "Victoria, BC", country: "Canada", logo: "/images/universities/canada/royal-roads-university.svg" },
  { name: "Red River College (RRC Polytechnic)", city: "Winnipeg, MB", country: "Canada", logo: "/images/universities/canada/red-river-college-rrc-polytechnic.svg" },
  { name: "Selkirk College", city: "Castlegar, BC", country: "Canada", logo: "/images/universities/canada/selkirk-college.svg" },
  { name: "St. Francis Xavier University", city: "Antigonish, NS", country: "Canada", logo: "/images/universities/canada/st-francis-xavier-university.svg" },
  { name: "University of New Brunswick", city: "Fredericton / Saint John, NB", country: "Canada", logo: "/images/universities/canada/university-of-new-brunswick.svg" },
  { name: "Sheridan College", city: "Brampton / Oakville, ON", country: "Canada", logo: "/images/universities/canada/sheridan-college.svg" },
  { name: "King's University College at Western", city: "London, ON", country: "Canada", logo: "/images/universities/canada/king-university-college-at-western-.svg" },
  { name: "Southern Alberta Institute of Technology (SAIT)", city: "Calgary, AB", country: "Canada", logo: "/images/universities/canada/southern-alberta-institute-of-techn.svg" },
  { name: "Medicine Hat College", city: "Medicine Hat, AB", country: "Canada", logo: "/images/universities/canada/medicine-hat-college.svg" },
  { name: "MacEwan University", city: "Edmonton, AB", country: "Canada", logo: "/images/universities/canada/macewan-university.svg" },
  { name: "Manitoba Institute of Trades and Technology (MITT)", city: "Winnipeg, MB", country: "Canada", logo: "/images/universities/canada/manitoba-institute-of-trades-and-te.svg" },
  { name: "Alexander College", city: "Burnaby / Vancouver, BC", country: "Canada", logo: "/images/universities/canada/alexander-college.svg" },
  { name: "Durham College", city: "Oshawa, ON", country: "Canada", logo: "/images/universities/canada/durham-college.svg" },
  { name: "Brock University", city: "St. Catharines, ON", country: "Canada", logo: "/images/universities/canada/brock-university.svg" },
  { name: "St. Lawrence College", city: "Kingston / Cornwall, ON", country: "Canada", logo: "/images/universities/canada/st-lawrence-college.svg" },
  { name: "Vancouver Film School", city: "Vancouver, BC", country: "Canada", logo: "/images/universities/canada/vancouver-film-school.svg" },
  { name: "University of Saskatchewan", city: "Saskatoon, SK", country: "Canada", logo: "/images/universities/canada/university-of-saskatchewan.svg" },
  { name: "Kwantlen Polytechnic University (KPU)", city: "Surrey, BC", country: "Canada", logo: "/images/universities/canada/kwantlen-polytechnic-university-kpu.svg" },
  { name: "University of Victoria", city: "Victoria, BC", country: "Canada", logo: "/images/universities/canada/university-of-victoria.svg" },
  { name: "University of Alberta", city: "Edmonton, AB", country: "Canada", logo: "/images/universities/canada/university-of-alberta.svg" },
  { name: "Coquitlam College", city: "Coquitlam, BC", country: "Canada", logo: "/images/universities/canada/coquitlam-college.svg" },
  { name: "NorQuest College", city: "Edmonton, AB", country: "Canada", logo: "/images/universities/canada/norquest-college.svg" },
  { name: "Loyalist College", city: "Belleville, ON", country: "Canada", logo: "/images/universities/canada/loyalist-college.svg" },
  { name: "Langara College", city: "Vancouver, BC", country: "Canada", logo: "/images/universities/canada/langara-college.svg" },
  { name: "Mount Saint Vincent University", city: "Halifax, NS", country: "Canada", logo: "/images/universities/canada/mount-saint-vincent-university.svg" },
  { name: "University of Regina", city: "Regina, SK", country: "Canada", logo: "/images/universities/canada/university-of-regina.svg" },
  { name: "Lakehead University", city: "Thunder Bay / Orillia, ON", country: "Canada", logo: "/images/universities/canada/lakehead-university.svg" },
  { name: "Wilfrid Laurier University", city: "Waterloo / Brantford, ON", country: "Canada", logo: "/images/universities/canada/wilfrid-laurier-university.svg" },
  { name: "The University of Winnipeg", city: "Winnipeg, MB", country: "Canada", logo: "/images/universities/canada/the-university-of-winnipeg.svg" },
  { name: "Concordia University of Edmonton", city: "Edmonton, AB", country: "Canada", logo: "/images/universities/canada/concordia-university-of-edmonton.svg" },
  { name: "University of Waterloo", city: "Waterloo, ON", country: "Canada", logo: "/images/universities/canada/university-of-waterloo.svg" },
  { name: "Trent University", city: "Peterborough, ON", country: "Canada", logo: "/images/universities/canada/trent-university.svg" },
  { name: "University of Lethbridge", city: "Lethbridge, AB", country: "Canada", logo: "/images/universities/canada/university-of-lethbridge.svg" },
  { name: "Lakeland College", city: "Vermilion / Lloydminster, AB", country: "Canada", logo: "/images/universities/canada/lakeland-college.svg" },
  { name: "Herzing College", city: "Ottawa / Montreal, QC", country: "Canada", logo: "/images/universities/canada/herzing-college.svg" },
  { name: "Saskatchewan Colleges (Suncrest, North West, Great Plains)", city: "Saskatchewan", country: "Canada", logo: "/images/universities/canada/saskatchewan-colleges-suncrest-nort.svg" },
  { name: "Brighton College Canada", city: "Canada", country: "Canada", logo: "/images/universities/canada/brighton-college-canada.svg" },
  { name: "Toronto Film School", city: "Toronto, ON", country: "Canada", logo: "/images/universities/canada/toronto-film-school.svg" },
  { name: "Vanier College", city: "Montreal, QC", country: "Canada", logo: "/images/universities/canada/vanier-college.svg" },
  { name: "Adler University Vancouver", city: "Vancouver, BC", country: "Canada", logo: "/images/universities/canada/adler-university-vancouver.svg" },
  { name: "Crandall University", city: "Moncton, NB", country: "Canada", logo: "/images/universities/canada/crandall-university.svg" },
  { name: "Ontario Tech University", city: "Oshawa, ON", country: "Canada", logo: "/images/universities/canada/ontario-tech-university.svg" },
  { name: "Toronto School of Management (TSOM)", city: "Toronto, ON", country: "Canada", logo: "/images/universities/canada/toronto-school-of-management-tsom.svg" },
  { name: "Trebas Institute", city: "Montreal / Toronto", country: "Canada", logo: "/images/universities/canada/trebas-institute.svg" },
  { name: "Mount Royal University Calgary", city: "Calgary, AB", country: "Canada", logo: "/images/universities/canada/mount-royal-university-calgary.svg" },
  { name: "Toronto Metropolitan University", city: "Toronto, ON", country: "Canada", logo: "/images/universities/canada/toronto-metropolitan-university.svg" },
  { name: "Algoma University", city: "Sault Ste. Marie, ON", country: "Canada", logo: "/images/universities/canada/algoma-university.svg" },
  { name: "Royal Crown School", city: "Canada", country: "Canada", logo: "/images/universities/canada/royal-crown-school.svg" },
  { name: "Pacific Link College", city: "Canada", country: "Canada", logo: "/images/universities/canada/pacific-link-college.svg" },
  { name: "Vanwest College", city: "Vancouver, BC", country: "Canada", logo: "/images/universities/canada/vanwest-college.svg" },
  { name: "University of Prince Edward Island", city: "Charlottetown, PEI", country: "Canada", logo: "/images/universities/canada/university-of-prince-edward-island.svg" },
  { name: "Trinity Western University", city: "Langley, BC", country: "Canada", logo: "/images/universities/canada/trinity-western-university.svg" },
  { name: "University of Calgary Continuing Education", city: "Calgary, AB", country: "Canada", logo: "/images/universities/canada/university-of-calgary-continuing-ed.svg" },
  { name: "ILSC Greystone College", city: "Vancouver / Toronto", country: "Canada", logo: "/images/universities/canada/ilsc-greystone-college.svg" },
  { name: "University of Ottawa", city: "Ottawa, ON", country: "Canada", logo: "/images/universities/canada/university-of-ottawa.svg" },
  { name: "University of Niagara Falls", city: "Niagara Falls, ON", country: "Canada", logo: "/images/universities/canada/university-of-niagara-falls.svg" },
  { name: "Carleton University", city: "Ottawa, ON", country: "Canada", logo: "/images/universities/canada/carleton-university.svg" },
  { name: "Niagara University", city: "Niagara Falls, ON", country: "Canada", logo: "/images/universities/canada/niagara-university.svg" },
  { name: "Red Deer Polytechnic", city: "Red Deer, AB", country: "Canada", logo: "/images/universities/canada/red-deer-polytechnic.svg" },
  { name: "NAIT Northern Alberta Institute of Technology", city: "Edmonton, AB", country: "Canada", logo: "/images/universities/canada/nait-northern-alberta-institute-of-.svg" },
  { name: "Vancouver Premier College", city: "Vancouver, BC", country: "Canada", logo: "/images/universities/canada/vancouver-premier-college.svg" },
  { name: "Humber Polytechnic", city: "Toronto / Orangeville, ON", country: "Canada", logo: "/images/universities/canada/humber-polytechnic.svg" },
  { name: "Renison University College", city: "Waterloo, ON", country: "Canada", logo: "/images/universities/canada/renison-university-college.svg" },
  { name: "Olds College", city: "Olds, AB", country: "Canada", logo: "/images/universities/canada/olds-college.svg" },
  { name: "Memorial University of Newfoundland", city: "St. John's, NL", country: "Canada", logo: "/images/universities/canada/memorial-university-of-newfoundland.svg" },
  { name: "College of the Rockies", city: "Cranbrook, BC", country: "Canada", logo: "/images/universities/canada/college-of-the-rockies.svg" },
  { name: "Canadore College", city: "North Bay / Parry Sound, ON", country: "Canada", logo: "/images/universities/canada/canadore-college.svg" },
  { name: "LaSalle College International Canada", city: "Montreal / Vancouver", country: "Canada", logo: "/images/universities/canada/lasalle-college-international-canad.svg" },
  { name: "University of Manitoba", city: "Winnipeg, MB", country: "Canada", logo: "/images/universities/canada/university-of-manitoba.svg" },
  { name: "St. Clair College", city: "Windsor, ON", country: "Canada", logo: "/images/universities/canada/st-clair-college.svg" },
  { name: "Nipissing University", city: "North Bay, ON", country: "Canada", logo: "/images/universities/canada/nipissing-university.svg" },
  { name: "Northeastern University Toronto & Vancouver", city: "Toronto / Vancouver", country: "Canada", logo: "/images/universities/canada/northeastern-university-toronto-van.svg" },
  { name: "Assiniboine Community College", city: "Brandon, MB", country: "Canada", logo: "/images/universities/canada/assiniboine-community-college.svg" },
  { name: "Lambton College", city: "Sarnia, ON", country: "Canada", logo: "/images/universities/canada/lambton-college.svg" },
  { name: "TAIE International Institute", city: "Toronto, ON", country: "Canada", logo: "/images/universities/canada/taie-international-institute.svg" },
];

export const dutchUniversities = [
  { name: "CEG - ONCAMPUS Amsterdam", city: "Amsterdam", country: "Netherlands", logo: "/images/universities/netherlands/oncampus-amsterdam.svg" },
  { name: "SRH Haarlem University of Applied Sciences", city: "Haarlem", country: "Netherlands", logo: "/images/universities/netherlands/srh-haarlem.svg" },
  { name: "TIO University of Applied Sciences (Tio Business School)", city: "Amsterdam / Utrecht / Rotterdam", country: "Netherlands", logo: "/images/universities/netherlands/tio-business-school.svg" },
  { name: "EIT InnoEnergy & ISE - Institute of Sustainable Energy", city: "Eindhoven / Amsterdam", country: "Netherlands", logo: "/images/universities/netherlands/eit-innoenergy.svg" },
];

export const germanUniversities = [
  { name: "University of Europe for Applied Sciences (UE)", city: "Berlin / Hamburg / Iserlohn", country: "Germany", logo: "/images/universities/germany/ue-germany.svg" },
  { name: "SRH Higher Education (Heidelberg, Berlin, NRW)", city: "Heidelberg / Berlin / Cologne", country: "Germany", logo: "/images/universities/germany/srh-germany.svg" },
  { name: "GISMA University of Applied Sciences", city: "Potsdam / Berlin", country: "Germany", logo: "/images/universities/germany/gisma.svg" },
  { name: "Steinbeis University - Schools of Next Practices", city: "Berlin / Stuttgart", country: "Germany", logo: "/images/universities/germany/steinbeis.svg" },
  { name: "Berlin School of Business & Innovation (BSBI)", city: "Berlin / Hamburg", country: "Germany", logo: "/images/universities/germany/bsbi-germany.svg" },
  { name: "Munich Business School", city: "Munich", country: "Germany", logo: "/images/universities/germany/munich-business-school.svg" },
  { name: "New European College (Wittenborg Munich)", city: "Munich", country: "Germany", logo: "/images/universities/germany/new-european-college.svg" },
  { name: "ISM International School of Management", city: "Dortmund / Munich / Hamburg / Berlin", country: "Germany", logo: "/images/universities/germany/ism-germany.svg" },
  { name: "Northern Institute of Technology Management (NIT)", city: "Hamburg", country: "Germany", logo: "/images/universities/germany/nit-hamburg.svg" },
  { name: "Hochschule Fresenius University of Applied Sciences", city: "Cologne / Munich / Hamburg / Berlin", country: "Germany", logo: "/images/universities/germany/fresenius.svg" },
  { name: "PFH Private University of Applied Sciences", city: "Göttingen / Berlin", country: "Germany", logo: "/images/universities/germany/pfh-germany.svg" },
  { name: "Rushford Business School Germany", city: "Munich / Berlin", country: "Germany", logo: "/images/universities/germany/rushford-germany.svg" },
  { name: "Rheinisches Studienkolleg", city: "Bonn / Cologne", country: "Germany", logo: "/images/universities/germany/rheinisches-studienkolleg.svg" },
  { name: "Schiller Language School", city: "Bonn / Berlin", country: "Germany", logo: "/images/universities/germany/schiller-language-school.svg" },
  { name: "Kühne Logistics University (KLU)", city: "Hamburg", country: "Germany", logo: "/images/universities/germany/klu-hamburg.svg" },
  { name: "BIMM University Germany", city: "Berlin / Hamburg", country: "Germany", logo: "/images/universities/germany/bimm-germany.svg" },
  { name: "IGC International Graduate Center - HS Bremen", city: "Bremen", country: "Germany", logo: "/images/universities/germany/igc-bremen.svg" },
  { name: "EBS Universität für Wirtschaft und Recht", city: "Wiesbaden / Oestrich-Winkel", country: "Germany", logo: "/images/universities/germany/ebs-universitat.svg" },
  { name: "Karlshochschule International University", city: "Karlsruhe", country: "Germany", logo: "/images/universities/germany/karlshochschule.svg" },
  { name: "Freshman Program at FH Aachen", city: "Aachen / Geilenkirchen", country: "Germany", logo: "/images/universities/germany/fh-aachen-freshman.svg" },
  { name: "IU International University of Applied Sciences", city: "Berlin / Bad Honnef / Nationwide", country: "Germany", logo: "/images/universities/germany/iu-germany.svg" },
  { name: "Media University of Applied Sciences", city: "Berlin / Cologne / Frankfurt", country: "Germany", logo: "/images/universities/germany/media-university.svg" },
  { name: "ICN Business School (GEDU Germany)", city: "Berlin / Nuremberg", country: "Germany", logo: "/images/universities/germany/icn-germany.svg" },
  { name: "CBS International Business School", city: "Cologne / Mainz / Potsdam", country: "Germany", logo: "/images/universities/germany/cbs-germany.svg" },
  { name: "FHM University (Fachhochschule des Mittelstands)", city: "Bielefeld / Berlin / Cologne", country: "Germany", logo: "/images/universities/germany/fhm-germany.svg" },
  { name: "Berlin International College (BIC)", city: "Berlin", country: "Germany", logo: "/images/universities/germany/bic-berlin.svg" },
  { name: "EU Business School Munich", city: "Munich", country: "Germany", logo: "/images/universities/germany/eu-business-school-munich.svg" },
  { name: "Macromedia University of Applied Sciences", city: "Munich / Berlin / Cologne / Hamburg", country: "Germany", logo: "/images/universities/germany/macromedia.svg" },
  { name: "Hochschule der Wirtschaft für Management (HDWM)", city: "Mannheim", country: "Germany", logo: "/images/universities/germany/hdwm.svg" },
  { name: "HIU - University of Applied Sciences", city: "Germany", country: "Germany", logo: "/images/universities/germany/hiu-germany.svg" },
];

export const finnishUniversities = [
  { name: "South-Eastern Finland UAS (XAMK)", city: "Mikkeli / Kotka / Kouvola", country: "Finland", logo: "/images/universities/finland/xamk.svg" },
  { name: "LUT University (Lappeenranta-Lahti)", city: "Lappeenranta / Lahti", country: "Finland", logo: "/images/universities/finland/lut-university.svg" },
  { name: "University of Vaasa", city: "Vaasa", country: "Finland", logo: "/images/universities/finland/university-of-vaasa.svg" },
  { name: "Edunation Finland", city: "Helsinki", country: "Finland", logo: "/images/universities/finland/edunation.svg" },
  { name: "Arcada University of Applied Sciences", city: "Helsinki", country: "Finland", logo: "/images/universities/finland/arcada.svg" },
  { name: "Kajaani University of Applied Sciences (KAMK)", city: "Kajaani", country: "Finland", logo: "/images/universities/finland/kamk.svg" },
  { name: "Karelia University of Applied Sciences", city: "Joensuu", country: "Finland", logo: "/images/universities/finland/karelia.svg" },
  { name: "LAB University of Applied Sciences", city: "Lahti / Lappeenranta", country: "Finland", logo: "/images/universities/finland/lab-uas.svg" },
  { name: "Metropolia University of Applied Sciences", city: "Helsinki / Espoo / Vantaa", country: "Finland", logo: "/images/universities/finland/metropolia.svg" },
  { name: "Seinäjoki University of Applied Sciences (SeAMK)", city: "Seinäjoki", country: "Finland", logo: "/images/universities/finland/seamk.svg" },
  { name: "Turku University of Applied Sciences", city: "Turku", country: "Finland", logo: "/images/universities/finland/turku-uas.svg" },
  { name: "Edusampo Vocational College", city: "Lappeenranta / Imatra", country: "Finland", logo: "/images/universities/finland/edusampo.svg" },
  { name: "Sasky Municipal Education and Training", city: "Sastamala / Tampere", country: "Finland", logo: "/images/universities/finland/sasky.svg" },
  { name: "STEP Education (STEP-Koulutus)", city: "Järvenpää / Ruokolahti", country: "Finland", logo: "/images/universities/finland/step-education.svg" },
  { name: "WinNova Vocational Education", city: "Pori / Rauma", country: "Finland", logo: "/images/universities/finland/winnova.svg" },
  { name: "Taito-Koulutus", city: "Finland", country: "Finland", logo: "/images/universities/finland/taito-koulutus.svg" },
  { name: "Helsinki Business College", city: "Helsinki", country: "Finland", logo: "/images/universities/finland/helsinki-business-college.svg" },
];

export const frenchUniversities = [
  { name: "Le Cordon Bleu Paris", city: "Paris", country: "France", logo: "/images/universities/france/le-cordon-bleu-paris.svg" },
  { name: "Toulouse Business School", city: "Toulouse / Paris", country: "France", logo: "/images/universities/france/toulouse-bs-france.svg" },
  { name: "New York Film Academy (NYFA)", city: "Paris", country: "France", logo: "/images/universities/france/nyfa-paris.svg" },
  { name: "Institut Superieur de Gestion (ISG)", city: "Paris", country: "France", logo: "/images/universities/france/isg-paris.svg" },
  { name: "Pole Leonard de Vinci (ESILV & EMLV)", city: "Paris La Defense", country: "France", logo: "/images/universities/france/leonard-de-vinci.svg" },
  { name: "University of Europe for Applied Sciences (UE)", city: "Paris", country: "France", logo: "/images/universities/france/ue-paris.svg" },
  { name: "Ecole de Management Applique (EMA)", city: "Paris", country: "France", logo: "/images/universities/france/ema-paris.svg" },
  { name: "ESC Clermont Business School", city: "Clermont-Ferrand", country: "France", logo: "/images/universities/france/esc-clermont.svg" },
  { name: "BSBI Paris Campus (GUS)", city: "Paris", country: "France", logo: "/images/universities/france/bsbi-paris.svg" },
  { name: "CY Cergy Paris University (CY Tech)", city: "Cergy / Paris", country: "France", logo: "/images/universities/france/cy-tech.svg" },
  { name: "ESSCA School of Management", city: "Angers / Paris / Lyon / Bordeaux", country: "France", logo: "/images/universities/france/essca.svg" },
  { name: "ISEP - Engineering Graduate School", city: "Paris", country: "France", logo: "/images/universities/france/isep-paris.svg" },
  { name: "ESIGELEC Graduate School of Engineering", city: "Rouen / Poitiers", country: "France", logo: "/images/universities/france/esigelec.svg" },
  { name: "PSB Paris School of Business (Galileo)", city: "Paris", country: "France", logo: "/images/universities/france/psb-paris.svg" },
  { name: "LISAA School of Art & Design (Galileo)", city: "Paris / Nantes / Rennes", country: "France", logo: "/images/universities/france/lisaa.svg" },
  { name: "Cours Florent & CLCF Cinema (Galileo)", city: "Paris", country: "France", logo: "/images/universities/france/cours-florent.svg" },
  { name: "Strate Ecole de Design & HETIC (Galileo)", city: "Paris", country: "France", logo: "/images/universities/france/strate-design.svg" },
  { name: "ESG Ecoles de Commerce & MBA ESG", city: "Paris / Bordeaux / Lyon", country: "France", logo: "/images/universities/france/esg-paris.svg" },
  { name: "ISTEC Business School Paris", city: "Paris", country: "France", logo: "/images/universities/france/istec-paris.svg" },
  { name: "CEG - ONCAMPUS Paris", city: "Paris", country: "France", logo: "/images/universities/france/oncampus-paris.svg" },
  { name: "Vatel Bordeaux International Hospitality", city: "Bordeaux", country: "France", logo: "/images/universities/france/vatel-bordeaux.svg" },
  { name: "NEOMA Business School", city: "Reims / Rouen / Paris", country: "France", logo: "/images/universities/france/neoma.svg" },
  { name: "Montpellier Business School (MBS)", city: "Montpellier", country: "France", logo: "/images/universities/france/montpellier-bs.svg" },
  { name: "ESDES Lyon Business School", city: "Lyon", country: "France", logo: "/images/universities/france/esdes-lyon.svg" },
  { name: "Groupe EDH (EFAP Communication & ICART)", city: "Paris / Lyon / Bordeaux", country: "France", logo: "/images/universities/france/groupe-edh.svg" },
  { name: "AD Education (Ecole de Conde, ECV, ESP)", city: "Paris / Lyon / Bordeaux", country: "France", logo: "/images/universities/france/ad-education.svg" },
  { name: "YSchools (South Champagne Business School)", city: "Troyes / Metz", country: "France", logo: "/images/universities/france/yschools.svg" },
  { name: "Brest Business School", city: "Brest", country: "France", logo: "/images/universities/france/brest-bs.svg" },
  { name: "Ferrieres & EBS Paris (Ga Education)", city: "Paris", country: "France", logo: "/images/universities/france/ferrieres-ebs.svg" },
  { name: "EPITECH Digital Innovation School", city: "Paris / Lyon / Toulouse", country: "France", logo: "/images/universities/france/epitech.svg" },
  { name: "IPAG Business School", city: "Paris / Nice", country: "France", logo: "/images/universities/france/ipag.svg" },
  { name: "ISC Paris Business School", city: "Paris / Orleans", country: "France", logo: "/images/universities/france/isc-paris.svg" },
  { name: "JUNIA Graduate School of Engineering", city: "Lille / Bordeaux", country: "France", logo: "/images/universities/france/junia.svg" },
  { name: "Ecole de Commerce de Lyon", city: "Lyon", country: "France", logo: "/images/universities/france/ecole-commerce-lyon.svg" },
  { name: "Sup Biotech Biotechnology Engineering", city: "Paris / Lyon", country: "France", logo: "/images/universities/france/supbiotech.svg" },
  { name: "ICN Business School (GEDU Paris)", city: "Paris / Nancy", country: "France", logo: "/images/universities/france/icn-paris.svg" },
  { name: "Groupe IGENSIA Education (Groupe IGS)", city: "Paris / Lyon / Toulouse", country: "France", logo: "/images/universities/france/igensia.svg" },
  { name: "OMNES Education (INSEEC, ECE, ESCE)", city: "Paris / Bordeaux / Lyon / Monaco", country: "France", logo: "/images/universities/france/omnes-education.svg" },
  { name: "Istituto Marangoni Paris", city: "Paris", country: "France", logo: "/images/universities/france/marangoni-paris.svg" },
  { name: "Eminence Business Ecole de Paris (EBEP)", city: "Paris", country: "France", logo: "/images/universities/france/ebep-paris.svg" },
  { name: "Data ScienceTech Institute (DSTI)", city: "Paris / Sophia Antipolis", country: "France", logo: "/images/universities/france/dsti-france.svg" },
];

export const partnerUniversities: UniversityPartner[] = [
  ...turkishUniversities,
  ...irishUniversities,
  ...swissUniversities,
  ...spanishUniversities,
  ...dutchUniversities,
  ...germanUniversities,
  ...finnishUniversities,
  ...frenchUniversities,
  ...canadianUniversities,
  ...ukUniversities,
  ...australianUniversities
];

export const processSteps = [
  {
    step: "01",
    title: "Free Consultation",
    desc: "We understand your academic background, career interests, financial budget, and future migration or work goals.",
    icon: "MessageSquare",
  },
  {
    step: "02",
    title: "Profile Evaluation",
    desc: "Our expert advisors evaluate your qualifications, GPA, and test scores to recommend the best-matching universities.",
    icon: "CheckCircle2",
  },
  {
    step: "03",
    title: "University Applications",
    desc: "We assist with application filing, documentation, Statement of Purpose (SOP), and secure admission offer letters.",
    icon: "FileSpreadsheet",
  },
  {
    step: "04",
    title: "Visa Guidance & Approval",
    desc: "Complete support for preparing financial files, scheduling appointments, mock interviews, and lodging visa applications.",
    icon: "Award",
  },
];

export interface GoogleReview {
  id: string;
  authorName: string;
  authorPhoto?: string;
  rating: number;
  relativeTime: string;
  destination: string;
  university?: string;
  reviewText: string;
  isVerified: boolean;
}

export const googleReviews: GoogleReview[] = [
  {
    id: "rev-1",
    authorName: "Akhtar Zaman",
    rating: 5,
    relativeTime: "2 weeks ago",
    destination: "United Kingdom",
    university: "University of Birmingham",
    reviewText:
      "I am very thankful to StudyPrime for guiding me throughout my study abroad journey. From the very first step, they explained everything clearly and made the process simple for me. The team was always available to answer my questions and supported me with patience. Their guidance in choosing the right university and preparing documents was extremely helpful. Because of their effort, my application and visa process went smoothly without any stress. Highly recommended!",
    isVerified: true,
  },
  {
    id: "rev-2",
    authorName: "Sara Sultan",
    rating: 5,
    relativeTime: "1 month ago",
    destination: "United Kingdom",
    university: "Brunel University London",
    reviewText:
      "I did my UK process through this consultancy and it was very smooth and easy. They handled everything professionally, and since I was also working and had limited time, their support made the whole process stress-free. Received my student visa within 14 days without any hassle!",
    isVerified: true,
  },
  {
    id: "rev-3",
    authorName: "Farah Mamoona",
    rating: 5,
    relativeTime: "1 month ago",
    destination: "United Kingdom",
    university: "University of Chester",
    reviewText:
      "I had an amazing experience with Study Prime Consultants! Despite my challenging case and study gap, Sir Ehsan and his team provided exceptional guidance and support throughout the process. After struggling for over a year with UK visa applications, their professionalism and smart approach finally made it possible. Alhamdulillah, I'm now in the UK!",
    isVerified: true,
  },
  {
    id: "rev-4",
    authorName: "Muhammad Hamza Khan",
    rating: 5,
    relativeTime: "3 weeks ago",
    destination: "Canada",
    university: "Thompson Rivers University",
    reviewText:
      "Best educational consultancy in Islamabad! The advisors are very knowledgeable about Canadian study permits and SDS requirements. They drafted a compelling SOP that clearly justified my career pathway. Got my Canada visa approved on the first attempt!",
    isVerified: true,
  },
  {
    id: "rev-5",
    authorName: "Ayesha Tariq",
    rating: 5,
    relativeTime: "2 months ago",
    destination: "Australia",
    university: "University of Western Australia",
    reviewText:
      "Study Prime handled my Australian Student Visa (Subclass 500) application seamlessly. From course matching to genuine temporary entrant (GS) preparation and financial proofs, their attention to detail was exceptional. Truly 5-star service!",
    isVerified: true,
  },
  {
    id: "rev-6",
    authorName: "Bilal Ahmed Qureshi",
    rating: 5,
    relativeTime: "2 months ago",
    destination: "Germany",
    university: "SRH Berlin University of Applied Sciences",
    reviewText:
      "Outstanding guidance for English-taught master's programs in Germany. They assisted with APS certificate prerequisites, blocked account setup, and German embassy appointment preparation. Very transparent and cooperative staff.",
    isVerified: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Akhtar Zaman",
    role: "Student in UK (University of Birmingham)",
    feedback:
      "I am very thankful to StudyPrime for guiding me throughout my study abroad journey. From the very first step, they explained everything clearly and made the process simple for me. The team was always available to answer my questions and supported me with patience.",
    rating: 5,
  },
  {
    name: "Sara Sultan",
    role: "Student in UK (Brunel University)",
    feedback:
      "I did my UK process through this consultancy and it was very smooth and easy. They handled everything professionally, and since I was also working and had limited time, their support made the whole process stress-free. Highly recommended!",
    rating: 5,
  },
  {
    name: "Farah Mamoona",
    role: "Student in UK (University of Chester)",
    feedback:
      "I had an amazing experience with Study Prime Consultants! Despite my challenging case, Sir Ehsan and his team provided exceptional guidance and support throughout the process. Alhamdulillah, I'm now in the UK!",
    rating: 5,
  },
];

export const faqs: FAQ[] = [
  {
    question: "What does Study Prime offer to international students?",
    answer:
      "We offer comprehensive higher education consultancy, university course matching, admissions application processing, IELTS/TOEFL preparation courses, SOP writing guidance, financial documentation checks, visa filing, and pre- & post-departure orientations.",
    category: "General",
  },
  {
    question: "Does Study Prime have official liaison with universities on the panel?",
    answer:
      "Yes, Study Prime is an official representative in Pakistan for numerous prestigious universities across the UK, USA, Australia, Canada, and Europe.",
    category: "Universities",
  },
  {
    question: "How can I book an appointment with a Study Prime counsellor for admission?",
    answer:
      "You can book an appointment by contacting us through our website inquiry form, calling +92 310 1193888 | +92 51 8740888, or emailing info@studyprime.pk. Our team will schedule a personalized counseling session—either in-person at our Islamabad Galleria Mall office or online via Zoom/Teams.",
    category: "Admissions",
  },
  {
    question: "Which documents do I need to bring for my counseling session?",
    answer:
      "Please bring copies of all educational transcripts & degrees, your updated CV/resume, 2 recommendation letters from academic teachers/employers, a copy of your valid passport, English test scorecard (if taken), and any initial draft of your Statement of Purpose (SOP).",
    category: "Documents",
  },
  {
    question: "Can I get assistance in writing my Statement of Purpose (SOP)?",
    answer:
      "Yes! Study Prime provides end-to-end assistance in reviewing and polishing your Statement of Purpose (SOP) and personal statement to ensure it strictly meets university and immigration department standards while remaining 100% authentic and original.",
    category: "Admissions",
  },
  {
    question: "Can I apply without IELTS / TOEFL?",
    answer:
      "In many universities in the UK, Europe, and Australia, students who completed their previous degree in English medium or hold a high English score in intermediate/A-levels may be eligible for an English Language Proficiency Waiver (MOI) or alternate tests like PTE / Oxford ELLT.",
    category: "Tests",
  },
];

export const blogPosts = [
  {
    id: "1",
    title: "Complete Guide to UK Student Visa Process for Pakistani Students",
    excerpt: "Everything you need to know about CAS letters, maintenance funds, TB tests, and biometric appointments for UK universities.",
    date: "August 2026",
    category: "Study Visa",
    author: "Study Prime Advisory Team",
    image: "/student.webp",
  },
  {
    id: "2",
    title: "How to Choose the Right University and Degree for Post-Study Work Rights",
    excerpt: "A strategic overview of high-demand fields like Data Science, Healthcare, Engineering, and Business in the UK, Australia, and Canada.",
    date: "August 2026",
    category: "Career Guidance",
    author: "Study Prime Advisory Team",
    image: "/Countries Background - Study Prime.jpg",
  },
  {
    id: "3",
    title: "Mastering Your Statement of Purpose (SOP) with Zero Plagiarism",
    excerpt: "Key elements admissions officers and visa case officers look for in your academic journey and career justification.",
    date: "August 2026",
    category: "Admissions",
    author: "Study Prime Advisory Team",
    image: "/student.webp",
  },
];

export const coursesData: CourseItem[] = [
  {
    slug: "computer-science-artificial-intelligence",
    title: "Computer Science & Artificial Intelligence",
    category: "Computer Science & IT",
    badge: "Highest Demand",
    duration: "3 - 4 Years (UG) / 1 Year (PG)",
    level: "BSc / BEng / MSc",
    intakes: ["September", "January", "May"],
    estimatedTuition: "£14,000 - £22,000 / year",
    averageSalary: "£42,000 - £65,000 / year",
    shortDescription: "Master generative AI, deep neural networks, software architecture, and cloud ecosystems with top global universities.",
    fullDescription:
      "A cutting-edge program designed to equip students with practical skills in algorithmic computing, machine learning, computer vision, and scalable software systems. Leading international tech hubs in the UK, Canada, and Australia offer extended post-study work permits for STEM graduates in this discipline.",
    whyStudy: [
      "Critical shortage of skilled AI and software engineers globally",
      "Eligible for 2 to 3 years Post-Study Work (PSW / PGWP) rights",
      "High starting graduate salaries and rapid career advancement",
      "Industry-sponsored capstone projects and internship opportunities",
    ],
    topDestinations: ["United Kingdom", "Canada", "Australia", "Germany", "Ireland"],
    entryRequirements: [
      "For UG: Minimum 65% in HSSC (Pre-Engineering / ICS) or 3 A-Level passes",
      "For PG: 4-Year Bachelor's in CS/IT/Engineering with minimum 2.5+ CGPA (or 55%+)",
      "IELTS 6.0 - 6.5 (or Oxford ELLT / PTE / English MOI Waiver for eligible universities)",
      "Statement of Purpose (SOP) tailored to technical career objectives",
    ],
    careerProspects: [
      "Artificial Intelligence Engineer",
      "Full-Stack Software Developer",
      "Machine Learning Specialist",
      "Cloud Solutions Architect",
      "DevOps & Systems Engineer",
    ],
    popularUniversities: [
      "University of Birmingham",
      "Brunel University London",
      "University of Greenwich",
      "University of Hertfordshire",
      "University of Europe for Applied Sciences",
      "Thompson Rivers University",
    ],
    keyModules: [
      "Machine Learning & Deep Neural Networks",
      "Advanced Data Structures & Algorithms",
      "Cloud Computing & Distributed Systems",
      "Natural Language Processing (NLP)",
      "Cyber Security & Software Quality Assurance",
      "MSc Research Project & Industrial Internship",
    ],
    icon: "Laptop",
  },
  {
    slug: "data-science-big-data-analytics",
    title: "Data Science & Big Data Analytics",
    category: "Computer Science & IT",
    badge: "Top STEM Track",
    duration: "1 - 2 Years (PG) / 3 Years (UG)",
    level: "BSc / MSc",
    intakes: ["September", "January"],
    estimatedTuition: "£13,500 - £19,500 / year",
    averageSalary: "£40,000 - £58,000 / year",
    shortDescription: "Turn massive volumes of unstructured data into actionable strategic insights using Python, R, SQL, and predictive AI models.",
    fullDescription:
      "Data Science connects mathematical modeling, statistical programming, and modern machine learning to solve complex industrial and commercial challenges. Graduates are heavily recruited across global financial institutions, healthcare giants, logistics networks, and e-commerce leaders.",
    whyStudy: [
      "Unprecedented commercial demand for data-driven decision makers",
      "Strong curriculum covering both technical coding and commercial strategy",
      "Excellent pathway for career switchers from engineering, math, and business",
      "Direct pathway to high-paying consultancy and analyst roles",
    ],
    topDestinations: ["United Kingdom", "Ireland", "Australia", "Canada", "Germany"],
    entryRequirements: [
      "Bachelor's degree with quantitative background (CS, Math, Engineering, Business, Finance) with min 2.4+ CGPA",
      "IELTS 6.0 - 6.5 or equivalent PTE / Duolingo / MOI certificate",
      "Updated resume and 2 academic/professional recommendation letters",
      "Statement of Purpose demonstrating passion for analytical modeling",
    ],
    careerProspects: [
      "Lead Data Scientist",
      "Big Data Engineer",
      "Business Intelligence Consultant",
      "Quantitative Analyst",
      "Data Visualization Architect",
    ],
    popularUniversities: [
      "University of Chester",
      "University of Greenwich",
      "University of Western Australia",
      "SRH Berlin University",
      "National College of Ireland",
    ],
    keyModules: [
      "Statistical Methods & Predictive Modeling",
      "Big Data Engineering & Apache Spark",
      "Data Visualization & Tableau / PowerBI",
      "Database Management & Cloud Data Warehouses",
      "Applied Business Intelligence",
    ],
    icon: "BarChart3",
  },
  {
    slug: "fintech-business-analytics",
    title: "FinTech & Financial Analytics",
    category: "Business & Finance",
    badge: "High Growth",
    duration: "1 Year (PG) / 3 Years (UG)",
    level: "BSc / MSc",
    intakes: ["September", "January", "May"],
    estimatedTuition: "£13,000 - £18,000 / year",
    averageSalary: "£45,000 - £70,000 / year",
    shortDescription: "Bridge the gap between modern financial markets, blockchain technologies, algorithmic trading, and data analytics.",
    fullDescription:
      "A next-generation business degree tailored for students aiming to lead the digital transformation of banking, investment funds, payments, and risk management. Blends corporate finance fundamentals with Python for financial modeling and digital asset compliance.",
    whyStudy: [
      "Rapidly replacing conventional finance degrees in terms of employability",
      "High demand across London, Dublin, Toronto, and Frankfurt financial districts",
      "Hands-on trading simulation and financial lab certifications",
      "Strong visa approval rates for career-focused business profiles",
    ],
    topDestinations: ["United Kingdom", "Ireland", "France", "Germany", "Australia"],
    entryRequirements: [
      "Undergraduate degree in Business, Commerce, Economics, Banking, or CS/IT",
      "Minimum 50% - 60% in previous academics (2.3+ CGPA)",
      "English proficiency proof (IELTS 6.0 - 6.5 or MOI)",
      "Statement of Purpose detailing financial technology interests",
    ],
    careerProspects: [
      "FinTech Strategy Consultant",
      "Financial Risk Analyst",
      "Blockchain & Digital Payments Manager",
      "Investment Analytics Associate",
      "Corporate Treasury Officer",
    ],
    popularUniversities: [
      "University of Birmingham",
      "Brunel University London",
      "Toulouse Business School",
      "Dublin Business School",
      "University of Europe for Applied Sciences",
    ],
    keyModules: [
      "Digital Banking & Payment Systems",
      "Quantitative Financial Modeling with Python",
      "Blockchain Architecture & Smart Contracts",
      "Financial Econometrics & Risk Analytics",
      "Corporate Finance & Global Investment Strategy",
    ],
    icon: "Coins",
  },
  {
    slug: "international-mba-global-management",
    title: "International MBA & Global Management",
    category: "Business & Finance",
    badge: "Executive Favorite",
    duration: "1 - 2 Years",
    level: "Master of Business Administration (MBA)",
    intakes: ["September", "January", "May"],
    estimatedTuition: "£12,000 - £17,500 / year",
    averageSalary: "£48,000 - £75,000 / year",
    shortDescription: "Accelerate your leadership trajectory with an globally accredited MBA program offering flexible entry routes and practical project placements.",
    fullDescription:
      "Designed for ambitious professionals and recent graduates looking to develop strategic leadership, international marketing, operations oversight, and venture creation skills. Many partner UK universities offer MBA options with no prior work experience required or with 1-year paid placement years.",
    whyStudy: [
      "Globally recognized degree recognized by multinational corporations",
      "Option to choose specialized tracks (Supply Chain, Marketing, HR, Finance, Project Management)",
      "Available with 1-Year Professional Placement in the UK",
      "Generous scholarship discounts available for South Asian students",
    ],
    topDestinations: ["United Kingdom", "Canada", "Germany", "France", "Australia"],
    entryRequirements: [
      "Bachelor's degree in any discipline (BBA, BCom, BA, BSc, BE, MBBS)",
      "Fresh graduates accepted at selected universities; work experience preferred for executive tracks",
      "IELTS 6.0 - 6.5 (or MOI waiver from recognized English-medium institutions)",
      "Detailed resume & personal statement highlighting leadership ambitions",
    ],
    careerProspects: [
      "Operations Director",
      "Management Consultant",
      "International Project Manager",
      "Business Development Lead",
      "Enterprise Founder & Startup CEO",
    ],
    popularUniversities: [
      "University of Chester",
      "University of Greenwich",
      "SRH Berlin University",
      "GISMA University of Applied Sciences",
      "University of Europe for Applied Sciences",
    ],
    keyModules: [
      "Strategic Global Leadership",
      "Operations & Supply Chain Management",
      "International Marketing & Brand Positioning",
      "Strategic Financial Decision Making",
      "Business Research Project & Consulting Practice",
    ],
    icon: "Briefcase",
  },
  {
    slug: "healthcare-public-health-nursing",
    title: "Public Health (MPH) & Healthcare Management",
    category: "Healthcare & Life Sciences",
    badge: "Critical Shortage",
    duration: "1 - 2 Years (PG) / 3 Years (UG)",
    level: "BSc / MPH / MSc",
    intakes: ["September", "January"],
    estimatedTuition: "£13,000 - £18,000 / year",
    averageSalary: "£36,000 - £52,000 / year",
    shortDescription: "Lead disease prevention, healthcare policy, epidemiology, and clinical operations in international healthcare systems like the NHS.",
    fullDescription:
      "An essential degree preparing health professionals, doctors, pharmacists, dentists, and science graduates for non-clinical leadership, healthcare analytics, health promotion, and hospital administration in international public and private sectors.",
    whyStudy: [
      "High demand across National Health Service (NHS UK), Canadian health authorities, and WHO",
      "Open to MBBS, BDS, Pharm-D, DPT, Nursing, and Biological Science graduates",
      "Fast-track visa processing under health shortage provisions in select countries",
      "Ideal pathway for clinical professionals seeking international career transitions",
    ],
    topDestinations: ["United Kingdom", "Australia", "Canada", "Ireland", "Sweden"],
    entryRequirements: [
      "Undergraduate degree in Health, Medicine, Pharmacy, Nursing, Allied Health, or Life Sciences",
      "Minimum 50% - 60% academic grade",
      "IELTS 6.5 (or 6.0 with pre-sessional English)",
      "Personal statement outlining public health motivation",
    ],
    careerProspects: [
      "Public Health Specialist",
      "Healthcare Operations Manager",
      "Epidemiologist & Health Researcher",
      "Health Promotion Officer",
      "Clinical Trial Coordinator",
    ],
    popularUniversities: [
      "University of Birmingham",
      "Brunel University London",
      "University of Chester",
      "University of Greenwich",
      "Karolinska Institutet",
    ],
    keyModules: [
      "Principles of Epidemiology & Disease Control",
      "Health Economics & Healthcare Policy",
      "Global Health Systems & Leadership",
      "Research Methods in Public Health",
      "Environmental Health & Occupational Safety",
    ],
    icon: "HeartPulse",
  },
  {
    slug: "cyber-security-cloud-engineering",
    title: "Cyber Security & Cloud Infrastructure",
    category: "Computer Science & IT",
    badge: "100% Employability",
    duration: "1 Year (PG) / 3 - 4 Years (UG)",
    level: "BSc / MSc",
    intakes: ["September", "January", "May"],
    estimatedTuition: "£13,500 - £18,500 / year",
    averageSalary: "£45,000 - £68,000 / year",
    shortDescription: "Protect critical infrastructure, enterprise networks, and digital identities against cyber threats and ransomware.",
    fullDescription:
      "A comprehensive curriculum integrating ethical hacking, network forensics, cryptography, cloud security architecture (AWS/Azure), and information assurance governance accredited by professional bodies such as BCS and NCSC in the UK.",
    whyStudy: [
      "Zero unemployment in certified cyber security professionals across G7 nations",
      "Specialized training with industry cyber lab simulations",
      "Eligible for post-study work visas with abundant job opportunities",
      "Competitive entry scholarships available for Pakistani applicants",
    ],
    topDestinations: ["United Kingdom", "Australia", "Canada", "Germany", "Ireland"],
    entryRequirements: [
      "Bachelor's in CS, IT, Software Engineering, Telecommunications, or Electrical Engineering",
      "Minimum 2.4+ CGPA (or 55%+ marks)",
      "IELTS 6.0 - 6.5 or equivalent",
      "Statement of Purpose highlighting IT security focus",
    ],
    careerProspects: [
      "Information Security Analyst",
      "Ethical Hacker / Penetration Tester",
      "SOC Incident Responder",
      "Cloud Security Engineer",
      "Chief Information Security Officer (CISO)",
    ],
    popularUniversities: [
      "University of Greenwich",
      "University of Hertfordshire",
      "Birmingham City University",
      "SRH Berlin University",
      "National College of Ireland",
    ],
    keyModules: [
      "Network Security & Penetration Testing",
      "Cloud Architecture & Zero-Trust Security",
      "Applied Cryptography & Secure Protocols",
      "Digital Forensics & Incident Response",
      "Governance, Risk Management & Compliance",
    ],
    icon: "ShieldCheck",
  },
  {
    slug: "one-year-top-up-degrees-uk",
    title: "1-Year Top-Up Bachelor's Degrees (UK)",
    category: "Pathway & Top-Up",
    badge: "Fast-Track Pathway",
    duration: "1 Academic Year (9 - 12 Months)",
    level: "BA (Hons) / BSc (Hons)",
    intakes: ["September", "January", "May"],
    estimatedTuition: "£11,500 - £15,000 (Total Degree)",
    averageSalary: "£32,000 - £45,000 / year",
    shortDescription: "Convert your 2-Year Associate Degree (ADP), DAE 3-Year Diploma, or HND directly into an accredited full British Honours Bachelor's Degree in just 1 year.",
    fullDescription:
      "A tailored fast-track program enabling Pakistani students with existing diplomas (DAE, B.Com, BA, B.Sc 2-year old system, or HND Pearson qualifications) to enter directly into the Final (3rd) Year of a UK university and graduate with a full British Bachelor’s degree + 2-Year UK Graduate Route PSW Visa.",
    whyStudy: [
      "Save 2 years of tuition fees and living expenses compared to 3-year degrees",
      "Receive the exact same full UK Bachelor (Honours) degree and graduation certificate",
      "Qualifies you for 2 full years of UK Post-Study Work Visa (Graduate Route)",
      "Excellent pathway to progress directly into 1-Year UK Master's / MBA programs",
    ],
    topDestinations: ["United Kingdom"],
    entryRequirements: [
      "Completion of 2-Year Associate Degree (ADP), B.Com / BA / BSc (2 Years), or 3-Year DAE Diploma",
      "HND / Pearson BTEC Level 5 qualifications with passing grades",
      "IELTS 6.0 (min 5.5 in each component) or Oxford ELLT / PTE",
      "Official academic transcripts and passing certificates",
    ],
    careerProspects: [
      "Full Bachelor Graduate Qualifications worldwide",
      "Eligible for UK 2-Year Post-Study Work Visa",
      "Direct entry into UK Master's / MSc / MBA degrees",
      "Mid-level management and technical roles in the UK and overseas",
    ],
    popularUniversities: [
      "University of Greenwich",
      "University of Chester",
      "University of Hertfordshire",
      "Birmingham City University",
      "London South Bank University",
    ],
    keyModules: [
      "Strategic Business Project / Technical Dissertation",
      "Advanced Subject Specialization",
      "Contemporary Issues in International Business/IT",
      "Professional Development & Enterprise Management",
    ],
    icon: "GraduationCap",
  },
  {
    slug: "engineering-robotics-automation",
    title: "Robotics, Mechatronics & Automation",
    category: "Engineering & Tech",
    badge: "Industry 4.0",
    duration: "1 Year (PG) / 3 - 4 Years (UG)",
    level: "BEng / MEng / MSc",
    intakes: ["September", "January"],
    estimatedTuition: "£14,500 - £20,500 / year",
    averageSalary: "£42,000 - £62,000 / year",
    shortDescription: "Design autonomous robots, smart manufacturing lines, sensor systems, and industrial AI controllers for modern automation.",
    fullDescription:
      "A forward-looking engineering program uniting electrical engineering, mechanical systems, embedded microcontrollers, and computer intelligence. Positioned at the core of European and North American industrial modernization.",
    whyStudy: [
      "High priority on global shortage occupation lists",
      "State-of-the-art engineering robotics labs with Siemens and ABB hardware",
      "Direct collaboration with automotive, aerospace, and biomedical sectors",
      "Access to extensive postgraduate research funding and bursaries",
    ],
    topDestinations: ["Germany", "United Kingdom", "Canada", "Australia", "Sweden"],
    entryRequirements: [
      "BSc/BEng in Electrical, Mechanical, Mechatronics, Aerospace, or Robotics Engineering (min 2.5 CGPA)",
      "IELTS 6.0 - 6.5 or equivalent",
      "Technical Statement of Purpose and portfolio of project work if available",
    ],
    careerProspects: [
      "Robotics Control Engineer",
      "Automation Systems Architect",
      "Embedded Software Developer",
      "Mechatronics Design Specialist",
      "Smart Manufacturing Consultant",
    ],
    popularUniversities: [
      "University of Birmingham",
      "Brunel University London",
      "SRH Berlin University",
      "University of Europe for Applied Sciences",
      "University of Western Australia",
    ],
    keyModules: [
      "Autonomous Mobile Robotics & Navigation",
      "Control Systems Engineering & PLC Programming",
      "Sensor Fusion & Computer Vision for Robotics",
      "Industrial IoT & Industry 4.0 Standards",
      "MSc Engineering Capstone Project",
    ],
    icon: "Cpu",
  },
];

