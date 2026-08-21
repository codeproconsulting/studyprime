import { useState } from "react";
import { useParams, Link, useOutletContext } from "@remix-run/react";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  ShieldCheck, 
  GraduationCap, 
  MapPin, 
  Sparkles, 
  Building2, 
  Search, 
  FileText, 
  Compass, 
  Clock, 
  DollarSign, 
  HelpCircle,
  PhoneCall
} from "lucide-react";
import { 
  destinations, 
  partnerUniversities, 
  siteConfig,
  type StudyDestination 
} from "~/data/siteData";

export const destinationDetailsData: Record<
  string,
  {
    heroTagline: string;
    pswBadge: string;
    intakes: string;
    visaRate: string;
    avgTuition: string;
    livingCost: string;
    overview: string;
    keyBenefits: string[];
    admissionRequirements: string[];
    visaRequirements: string[];
    popularFields: string[];
  }
> = {
  canada: {
    heroTagline: "World-Class Education, Flexible PGWP & Direct Pathways to Permanent Residency",
    pswBadge: "PGWP up to 3 Years • Direct PR Pathways",
    intakes: "September (Fall), January (Winter) & May (Summer)",
    visaRate: "96% High Success for Pakistani Students",
    avgTuition: "CAD $13,000 - $32,000 / Year",
    livingCost: "CAD $12,000 - $18,000 / Year",
    overview:
      "Canada is globally recognized for high academic standards, welcoming multicultural society, post-graduation work permits (PGWP), and transparent economic immigration streams like Express Entry and Provincial Nominee Programs (PNP). Study Prime works directly with over 100+ accredited Canadian universities, community colleges, and polytechnic institutes.",
    keyBenefits: [
      "Up to 3-year Post-Graduation Work Permit (PGWP) upon completion",
      "Opportunity for spouse open work permit and free public schooling for children",
      "Part-time work permitted during studies (20-24 hrs/week)",
      "Points awarded under Canadian Express Entry (CRS) for Canadian credentials",
      "Access to co-op paid internship work terms embedded in academic degrees",
    ],
    admissionRequirements: [
      "Completed intermediate (FSc/FA/ICS) or Bachelor's degree with min 55%-65% marks",
      "IELTS Academic (min 6.0 for Diploma/UG, 6.5 for Master's) or PTE / Duolingo equivalent",
      "Statement of Purpose (SOP) demonstrating genuine academic intent and home ties",
      "Academic transcripts, mark sheets, and degree certificates attested",
      "2 Academic or Professional Letters of Recommendation (LORs)",
    ],
    visaRequirements: [
      "Unconditional Letter of Acceptance (LOA) from a Designated Learning Institution (DLI)",
      "Provincial Attestation Letter (PAL) where required",
      "Proof of funds: Tuition fee for Year 1 + Cost of living (GIC or verifiable bank balance)",
      "Upfront Medical exam from an authorized IOM panel physician",
      "Biometrics appointment at VFS Global Pakistan",
    ],
    popularFields: [
      "Computer Science & Data Analytics",
      "Business Administration & Supply Chain Management",
      "Engineering (Civil, Mechanical, Electrical)",
      "Health Care, Nursing & Biotechnology",
      "Hospitality & Tourism Management",
    ],
  },
  uk: {
    heroTagline: "Prestigious British Heritage, 1-Year Masters & 2-Year Graduate Stay Back Route",
    pswBadge: "2-Year Graduate Route (PSW) • 3 Years for PhD",
    intakes: "September / October (Major) & January / February",
    visaRate: "98% Visa Success Rate",
    avgTuition: "£11,000 - £24,000 / Year",
    livingCost: "£9,207 - £12,006 / Year (Inside/Outside London)",
    overview:
      "The United Kingdom is home to globally renowned Russell Group universities and modern innovative institutions. With fast-track 1-year Master's degrees and a 2-year Graduate Route post-study work visa, the UK provides exceptional return on investment for international students.",
    keyBenefits: [
      "2-Year Graduate Route post-study work visa for all bachelor and master graduates",
      "Fast 1-year Master's degrees reducing living and tuition expenses significantly",
      "20 hours per week part-time work rights during term time and full-time in holidays",
      "IELTS waiver possible based on high scores in Intermediate English (65%+)",
      "Comprehensive National Health Service (NHS) coverage for students",
    ],
    admissionRequirements: [
      "High School Diploma / Intermediate for Bachelor's; 4-year Bachelor's (or 2+2) for Master's",
      "IELTS Academic 6.0 - 6.5 (or Oxford ELLT / PTE / LanguageCert / English Waiver)",
      "Compelling Statement of Purpose (SOP)",
      "Updated Curriculum Vitae (CV) highlighting academic and professional history",
      "Passport copy and academic reference letters",
    ],
    visaRequirements: [
      "Confirmation of Acceptance for Studies (CAS) issued by UK sponsor university",
      "Proof of maintenance funds held for 28 consecutive days in approved bank",
      "Tuberculosis (TB) test certificate from approved IOM clinic in Pakistan",
      "Immigration Health Surcharge (IHS) payment and visa application fee",
      "Biometrics and possible credential interview",
    ],
    popularFields: [
      "MSc Management, MBA & International Business",
      "Artificial Intelligence, Cybersecurity & Software Engineering",
      "Project Management & Construction",
      "Public Health & Biomedical Sciences",
      "LLM International Commercial Law",
    ],
  },
  australia: {
    heroTagline: "World-Ranked Universities, Lucrative Wages & Post-Study Work Permissions",
    pswBadge: "2 to 4 Years Post-Study Work Rights",
    intakes: "February (Semester 1), July (Semester 2) & November",
    visaRate: "96% High Success Rate",
    avgTuition: "AUD $22,000 - $42,000 / Year",
    livingCost: "AUD $21,000 - $26,000 / Year",
    overview:
      "Australia offers superior quality of life, highest minimum student wages in the world, and access to Group of Eight (Go8) research powerhouses as well as vibrant regional universities offering extended post-study work entitlements.",
    keyBenefits: [
      "2 to 4 years Temporary Graduate Visa (Subclass 485) post-study work rights",
      "Extra 1-2 years PSW in designated regional growth areas (Adelaide, Perth, Tasmania)",
      "High student hourly minimum wage allowing students to comfortably offset living costs",
      "Postgraduate research students have unlimited work rights",
      "Clear permanent residency pathways under General Skilled Migration (GSM)",
    ],
    admissionRequirements: [
      "Intermediate / A-Levels (min 60%+) or Bachelor degree (min 2.5+ CGPA)",
      "IELTS Academic 6.0 - 6.5 or PTE Academic 50 - 58+",
      "Genuine Student (GS) statement detailing academic progression and career ROI",
      "Detailed financial sponsorship documentation and tax returns",
      "Academic and employment credentials with verified references",
    ],
    visaRequirements: [
      "Electronic Confirmation of Enrolment (eCoE) from registered CRICOS institution",
      "Overseas Student Health Cover (OSHC) for the full visa duration",
      "Comprehensive Genuine Student (GS) assessment documentation",
      "Proof of funds: 1 Year tuition + 1 Year Living Expenses + Return Airfare",
      "Biometrics and panel health examination",
    ],
    popularFields: [
      "Information Technology, Cloud & Systems Architecture",
      "Civil, Mining & Renewable Energy Engineering",
      "Professional Accounting & Financial Planning",
      "Nursing, Occupational Therapy & Public Health",
      "Agribusiness & Environmental Science",
    ],
  },
  germany: {
    heroTagline: "Europe's Economic Engine, Low/No Tuition Fees & 18-Month Job Seeker Visa",
    pswBadge: "18-Month Job Seeker Visa • EU Blue Card Pathway",
    intakes: "Winter (September/October) & Summer (March/April)",
    visaRate: "96% Success Rate",
    avgTuition: "€0 - €14,000 / Year (State unis tuition-free)",
    livingCost: "€11,208 / Year (Blocked Account / Sperrkonto)",
    overview:
      "Germany is Europe's powerhouse for engineering, automotive, artificial intelligence, and business innovation. International students enjoy low or zero tuition fees at public universities, affordable private business schools with 100% English medium instruction, and an 18-month post-study visa to transition to an EU Blue Card.",
    keyBenefits: [
      "18-Month Post-Study Job Seeker Residence Permit across Germany",
      "Many public universities charge zero tuition fees (only semester contribution of ~€300)",
      "English-taught Bachelor's and Master's programs available across top hubs",
      "Fast-track permanent residency (Niederlassungserlaubnis) after 21-24 months of working",
      "Right to travel freely across 27 Schengen European countries",
    ],
    admissionRequirements: [
      "12 years of schooling for Studienkolleg/Foundation, or 13-14 years for direct Bachelor entry",
      "16-year Bachelor's degree (4 years) with min 2.7+ German GPA for Master's entry",
      "IELTS Academic 6.0 - 6.5 (or Medium of Instruction certificate for select private universities)",
      "Motivation Letter / Statement of Purpose",
      "Academic CV in Europass format",
    ],
    visaRequirements: [
      "Official University Admission Letter or Conditional Offer",
      "German Blocked Account (Sperrkonto) deposited with approx. €11,208",
      "Statutory or private health insurance coverage (e.g. TK, Barmer, or Mawista)",
      "Proof of academic qualifications and language capability",
      "Embassy appointment at German Mission in Islamabad or Karachi",
    ],
    popularFields: [
      "Automotive, Mechanical & Industrial Engineering",
      "Computer Science, AI & Embedded Systems",
      "International Business & Strategic Management",
      "Renewable Energy & Sustainable Systems",
      "Data Analytics & Supply Chain Management",
    ],
  },
  ireland: {
    heroTagline: "Silicon Valley of Europe, English-Speaking EU Member & 2-Year Graduate Visa",
    pswBadge: "2-Year Third Level Graduate Scheme (PSW)",
    intakes: "September (Autumn) & January / February (Spring)",
    visaRate: "97% High Visa Approval Rate",
    avgTuition: "€10,000 - €22,000 / Year",
    livingCost: "€10,000 - €14,000 / Year",
    overview:
      "Ireland is the only native English-speaking nation in the European Union, serving as the European headquarters for Google, Meta, Apple, Pfizer, and Microsoft. International graduates receive a 2-year post-study work visa under the Third Level Graduate Scheme (Stamp 1G) with seamless pathways to Critical Skills Employment Permits.",
    keyBenefits: [
      "2-Year Stamp 1G Graduate Post-Study Work Visa for Master's graduates",
      "Only native English-speaking country in the Eurozone with top global tech clusters",
      "High starting graduate salaries in IT, finance, pharma, and engineering",
      "Generous scholarship opportunities ranging from €2,000 up to 50% tuition reduction",
      "Direct pathway to Irish Critical Skills Employment Permit and EU Permanent Residency",
    ],
    admissionRequirements: [
      "Intermediate / A-Levels with 65%+ for Bachelor's degrees",
      "4-year Bachelor's degree with min 2.8+ CGPA for Master's programs",
      "IELTS Academic 6.5 (min 6.0 in each band) or Duolingo (110+) / PTE Academic (63+)",
      "Statement of Purpose (SOP) highlighting chosen field and long-term career vision",
      "Two Academic references and verified degree transcripts",
    ],
    visaRequirements: [
      "Full unconditional Letter of Acceptance from recognized Irish HEI",
      "Evidence of full tuition fee payment (Electronic Transfer or PayToStudy receipt)",
      "Proof of sufficient finances: €10,000 immediate access + verifiable 6-month bank statement",
      "Private medical insurance for international students",
      "Clear explanation of any study or employment gaps",
    ],
    popularFields: [
      "Data Analytics, Software Engineering & Cybersecurity",
      "Pharmaceutical Sciences, Biotechnology & MedTech",
      "Finance, Fintech, Accounting & Risk Management",
      "Digital Marketing & International Management",
      "Renewable Energy Systems & Environmental Engineering",
    ],
  },
  france: {
    heroTagline: "Global Hub for Business, Fashion & Tech with CAF Housing Grants",
    pswBadge: "2-Year Post-Study APS Visa • CAF Housing Subsidy",
    intakes: "September / October & January / February",
    visaRate: "96% High Success Rate",
    avgTuition: "€7,000 - €18,000 / Year (Public & Triple-Crown Grandes Écoles)",
    livingCost: "€8,000 - €12,000 / Year (Subsidized by French CAF up to 40%)",
    overview:
      "France is world-famous for prestigious Triple-Crown accredited Business Schools (Grandes Écoles), world-class engineering, culinary arts, fashion, and luxury management. International students enjoy government-subsidized healthcare, CAF housing subsidies that cover up to 40% of rent, and a 2-year post-study APS work visa.",
    keyBenefits: [
      "2-Year Post-Study Authorization (APS / Recherche d'Emploi) for Master's graduates",
      "French Government CAF housing assistance reimburses up to €150-€250/month on rent",
      "100% English-taught programs with free French language classes provided",
      "Access to paid 6-month internships ('Stage') with statutory minimum stipends (~€600+/mo)",
      "Travel throughout the 27 European Schengen countries without additional visas",
    ],
    admissionRequirements: [
      "Completed 12 years of education for Bachelor's; 3 or 4 year Bachelor's for Master's",
      "IELTS Academic 6.0 - 6.5 (or MOI English waiver for select top business schools)",
      "Statement of Purpose (SOP) and academic resume",
      "Academic transcripts and degree certificates",
      "Online interview with the admissions committee",
    ],
    visaRequirements: [
      "Official Acceptance Letter and Campus France authorization (Etudes en France)",
      "Proof of accommodation for the first 3 months in France",
      "Proof of financial resources (minimum €615/month for 1 academic year, ~€7,380)",
      "International travel health insurance",
      "Visa interview at Campus France / French Embassy Islamabad",
    ],
    popularFields: [
      "Luxury Brand Management, Fashion & Haute Couture",
      "International MBA, Finance & Supply Chain Management",
      "Computer Science, Artificial Intelligence & Cybersecurity",
      "Culinary Arts, Gastronomy & Hospitality Management",
      "Aeronautics, Automotive & Biotechnology Engineering",
    ],
  },
  finland: {
    heroTagline: "World's #1 Happiest Nation, Top Education System & 2-Year Post-Study Permit",
    pswBadge: "2-Year Post-Study Residence Permit • Fast PR Pathway",
    intakes: "August / September (Autumn) & January (Spring)",
    visaRate: "97% High Approval Rate",
    avgTuition: "€6,000 - €14,000 / Year (Scholarships up to 100%)",
    livingCost: "€7,000 - €10,000 / Year",
    overview:
      "Finland is recognized as the world's happiest country, leading global rankings in education, safety, innovation, and clean environment. Finnish universities offer practical, industry-integrated learning, generous institutional scholarships, and a 2-year post-graduation residence permit that directly leads to permanent residency after 4 years.",
    keyBenefits: [
      "2-Year Post-Study Job Search Residence Permit after graduation",
      "Time spent on student residence permit (Type A) counts 100% towards Finnish Citizenship & PR",
      "Generous merit scholarships covering 20% to 100% of international tuition fees",
      "30 hours per week permitted student work rights",
      "Family can accompany student with full unrestricted working rights for spouse",
    ],
    admissionRequirements: [
      "Intermediate / High School for UAS Bachelor's; 4-year Bachelor's for Master's",
      "IELTS Academic 6.0 - 6.5 or PTE / TOEFL iBT / Duolingo",
      "Motivation letter and academic portfolio (for design/architecture)",
      "Verified mark sheets and degree certificates",
      "Online entrance exam or interview (for select UAS programs)",
    ],
    visaRequirements: [
      "Certificate of Acceptance from Finnish University or University of Applied Sciences (UAS)",
      "Proof of funds: €6,720 per year in student's personal bank account",
      "Comprehensive private student health insurance (covering up to €120,000)",
      "Receipt of paid tuition fee or official scholarship award letter",
      "Biometrics appointment at Embassy of Finland in Islamabad or VFS",
    ],
    popularFields: [
      "Information Technology, Game Design & Cyber Defense",
      "Sustainable Energy, Cleantech & Environmental Engineering",
      "International Business, Logistics & Innovation Management",
      "Nursing, Social Healthcare & Physiotherapy",
      "Artificial Intelligence, Robotics & Data Sciences",
    ],
  },
  netherlands: {
    heroTagline: "Continental Europe's #1 English Study Hub with 1-Year Zoekjaar Visa",
    pswBadge: "1-Year Zoekjaar Post-Study Work Orientation Year",
    intakes: "September (Major) & February",
    visaRate: "96% Success Rate",
    avgTuition: "€8,000 - €16,000 / Year",
    livingCost: "€10,000 - €13,000 / Year",
    overview:
      "The Netherlands is continental Europe's primary destination for English-taught degrees. Home to 2,100+ English programs, global corporations like ASML, Philips, Shell, and Unilever, Dutch universities offer dynamic research and applied sciences with a dedicated 1-year 'Zoekjaar' orientation work year.",
    keyBenefits: [
      "1-Year 'Zoekjaar' (Search Year) visa allows unrestricted work in the Netherlands",
      "Over 95% of the Dutch population speaks fluent English",
      "World-class teaching standards with strong industry internships",
      "Centrally located in Europe with easy rail access to Paris, Berlin, and Brussels",
      "Direct conversion to Highly Skilled Migrant (Kennismigrant) visa once employed",
    ],
    admissionRequirements: [
      "12 years schooling for Applied Sciences (UAS), or 13-14 years for Research Universities",
      "4-year Bachelor's degree with strong GPA for Master's programs",
      "IELTS Academic 6.0 - 6.5 or TOEFL iBT / PTE equivalent",
      "Letter of Motivation explaining academic fit and career goals",
      "Curriculum Vitae and academic reference letters",
    ],
    visaRequirements: [
      "University acts as your recognized visa sponsor and applies directly to the Dutch IND",
      "Tuition fee deposit and living cost proof transferred directly to university escrow",
      "Valid passport and legal birth certificate with apostille / MOFA attestation",
      "Entry visa (MVV) pickup at the Embassy of the Netherlands in Islamabad",
      "Tuberculosis test upon arrival in the Netherlands",
    ],
    popularFields: [
      "International Business & Strategic Management",
      "Sustainable Energy Engineering & Water Resource Tech",
      "Computer Science, Software & AI",
      "Logistics, Supply Chain & Maritime Studies",
      "Creative Media, Gaming & Interactive Tech",
    ],
  },
  switzerland: {
    heroTagline: "Global Capital for Hospitality, Luxury Brand Management & Private Banking",
    pswBadge: "Prestigious Swiss Degrees • Global Campus Mobility",
    intakes: "September / October & February / March",
    visaRate: "95% Success Rate",
    avgTuition: "CHF 12,000 - 28,000 / Year",
    livingCost: "CHF 14,000 - 18,000 / Year",
    overview:
      "Switzerland represents the pinnacle of hospitality, luxury brand management, private banking, and international diplomacy. Swiss degrees combine rigorous Swiss craftsmanship with paid international internships at 5-star hotel groups and Fortune 500 corporations worldwide.",
    keyBenefits: [
      "Paid semester internships in Switzerland with statutory minimum pay (~CHF 2,200+/mo)",
      "Global alumni network in luxury hospitality, executive finance, and diplomacy",
      "Option to study across multi-campuses in Switzerland, Spain, and Germany",
      "State-of-the-art campus facilities in Geneva, Lucerne, Montreux, and Zurich",
      "Dual degree options accredited by Swiss, UK, and US bodies",
    ],
    admissionRequirements: [
      "High school diploma for Bachelor's; Bachelor's degree for Master's / MBA",
      "IELTS Academic 5.5 - 6.0 (or English proficiency waiver based on interview)",
      "Personal statement and CV",
      "Online video interview with admissions panel",
    ],
    visaRequirements: [
      "Acceptance letter and paid tuition deposit invoice",
      "Proof of funds in student or parent bank account for tuition & living costs",
      "Motivation letter explaining why Switzerland is chosen for this specific degree",
      "Commitment to depart Switzerland following study completion",
      "Visa file submission at Embassy of Switzerland in Islamabad",
    ],
    popularFields: [
      "International Hospitality & Resort Management",
      "Luxury Brand & Event Management",
      "Global Banking, Wealth Management & Fintech",
      "Culinary Arts & Restaurant Leadership",
      "International Business & Entrepreneurship",
    ],
  },
  spain: {
    heroTagline: "Vibrant Mediterranean Lifestyle, Affordable EU Degrees & Tech Hubs",
    pswBadge: "1-Year Post-Study Job Seeker Visa • Schengen Access",
    intakes: "September / October & February / March",
    visaRate: "95% Success Rate",
    avgTuition: "€5,000 - €16,000 / Year",
    livingCost: "€7,000 - €10,000 / Year",
    overview:
      "Spain is one of Europe's top destinations for international students seeking world-class business, tourism, design, and architecture programs in Barcelona, Madrid, Valencia, and Murcia at highly affordable living and tuition costs.",
    keyBenefits: [
      "1-Year Post-Study Work / Job Search Residence Authorization",
      "Very affordable living costs compared to Northern Europe and North America",
      "Barcelona and Madrid are major European tech and start-up capitals",
      "Wide selection of 100% English-taught Bachelor's and Master's degrees",
      "Opportunity to learn Spanish, the world's second most spoken native language",
    ],
    admissionRequirements: [
      "High school diploma with apostille for Bachelor's; Bachelor's degree for Master's",
      "IELTS Academic 6.0 (or English test waiver based on past medium of instruction)",
      "Motivation Letter and updated CV",
      "Official academic transcripts",
    ],
    visaRequirements: [
      "Official enrollment certificate from accredited Spanish institution",
      "Proof of financial resources (IPREM requirement approx. €600/month, ~€7,200/year)",
      "Comprehensive Spanish student health insurance with full coverage (no co-pay)",
      "Police character certificate attested by MOFA Pakistan",
      "Medical fitness certificate from approved clinic",
    ],
    popularFields: [
      "International MBA & Digital Business",
      "Tourism, Event & Hospitality Management",
      "Graphic Design, Animation & Architecture",
      "Sports Management & Football Business",
      "Biotechnology & Health Sciences",
    ],
  },
  turkey: {
    heroTagline: "No IELTS Required, 100% English Medium & 99% Visa Approval Rate",
    pswBadge: "No IELTS Needed • Affordable European Degrees",
    intakes: "Fall (September/October) & Spring (February)",
    visaRate: "99% High Approval Rate for Pakistani Students",
    avgTuition: "$2,000 - $6,500 / Year",
    livingCost: "$3,000 - $4,500 / Year",
    overview:
      "Turkey offers European Bologna-compliant degrees taught 100% in English across vibrant Istanbul and Ankara universities. With low tuition fees, affordable living, and almost 100% visa approval rate for Pakistani students, Turkey is an ideal global gateway.",
    keyBenefits: [
      "No IELTS / TOEFL mandatory - English proficiency letter from previous school accepted",
      "European Bologna system degrees recognized across EU and worldwide",
      "Exceptionally low tuition fees starting from just $2,000 per year",
      "Fast admission offer letters issued within 48 to 72 hours",
      "Direct pathway for credit transfers to European and North American universities",
    ],
    admissionRequirements: [
      "Matric / O-Levels and Intermediate / A-Levels for Bachelor's entry",
      "Bachelor's degree for Master's / PhD programs",
      "English Proficiency Certificate from previous institution",
      "Passport scan and passport size photographs",
    ],
    visaRequirements: [
      "Official Acceptance and Deposit Receipt from Turkish university",
      "Bank statement showing minimum $6,000 - $8,000 balance",
      "Travel health insurance",
      "Gerry's / Turkish Visa Application Center appointment in Pakistan",
    ],
    popularFields: [
      "Medicine (MBBS / MD) & Dentistry (BDS)",
      "Computer Science & Software Engineering",
      "Civil, Architecture & Mechanical Engineering",
      "Aviation & Pilot Training",
      "International Business & Finance",
    ],
  },
  usa: {
    heroTagline: "Global Academic Leader, Flexible Curricula & Up to 3-Year STEM OPT",
    pswBadge: "Up to 3-Year STEM OPT Extension",
    intakes: "Fall (August/September), Spring (January) & Summer",
    visaRate: "95% Success Rate",
    avgTuition: "$16,000 - $38,000 / Year",
    livingCost: "$12,000 - $18,000 / Year",
    overview:
      "The United States provides the highest concentration of top-ranked global universities, cutting-edge laboratory facilities, and up to 3 years of Optional Practical Training (STEM OPT) work authorization for science, technology, engineering, and mathematics graduates.",
    keyBenefits: [
      "Up to 36 months (3 years) of paid STEM OPT work authorization",
      "Unmatched academic flexibility to double major or customize coursework",
      "On-campus work opportunities and Graduate Assistantships (RA/TA)",
      "Extensive university merit scholarships for high-achieving applicants",
      "Direct interaction with Silicon Valley and Fortune 500 corporate recruiters",
    ],
    admissionRequirements: [
      "12 years of education for Bachelor's; 4-year Bachelor's for Master's programs",
      "IELTS 6.5 / TOEFL 80+ / Duolingo 110+ (GRE/GMAT required for select top programs)",
      "Statement of Purpose and 2-3 Letters of Recommendation",
      "Academic transcripts evaluated via WES/ECE if required",
    ],
    visaRequirements: [
      "Form I-20 issued by SEVP-approved US institution",
      "Payment of SEVIS I-901 fee ($350)",
      "Proof of liquid financial sponsorship covering 1 year of estimated expenses",
      "DS-160 visa application form and visa interview appointment at US Embassy Islamabad or Consulate Karachi",
    ],
    popularFields: [
      "Computer Science, AI & Data Engineering",
      "Biomedical Engineering & Healthcare Informatics",
      "MBA & Financial Engineering",
      "Cybersecurity & Cloud Computing",
      "Mechanical & Aerospace Engineering",
    ],
  },
  europe: {
    heroTagline: "Schengen 27-Country Mobility, Low Tuition & High Quality of Life",
    pswBadge: "Schengen 27-Country Mobility & Low Tuition",
    intakes: "September / October & February / March",
    visaRate: "97% High Approval Rate",
    avgTuition: "€4,000 - €12,000 / Year",
    livingCost: "€6,000 - €9,000 / Year",
    overview:
      "European countries across the Schengen Area offer affordable, high-quality higher education, English-taught programs, and unrestricted visa-free travel across 27 European nations during your studies.",
    keyBenefits: [
      "Study in English across Norway, Italy, Hungary, Poland, and Austria",
      "Significantly lower tuition fees and living costs compared to UK/USA",
      "Freedom to travel and explore 27 Schengen European countries",
      "Rich cultural immersion and historic university traditions",
      "Post-study job seeker permissions available across most member states",
    ],
    admissionRequirements: [
      "High school diploma / Intermediate for Bachelor's; Bachelor's degree for Master's",
      "IELTS Academic 6.0 or verified English proficiency certificate",
      "Statement of Purpose and motivation letter",
      "Attested academic transcripts",
    ],
    visaRequirements: [
      "Official University Acceptance letter and tuition fee confirmation",
      "Proof of funds in bank account or approved sponsorship",
      "Travel and international student health insurance",
      "Police character certificate and medical check",
    ],
    popularFields: [
      "Information Technology & Data Science",
      "Renewable Energy & Environmental Science",
      "International Business & Economics",
      "Architecture, Urban Planning & Civil Engineering",
      "Art, Fashion & Creative Media",
    ],
  },
};

export default function CountryDetailPage() {
  const params = useParams();
  const rawCountry = (params.country || "").toLowerCase().trim();
  
  // Find destination matching id or slug
  const destination = destinations.find(
    (d) => d.id.toLowerCase() === rawCountry || d.slug.toLowerCase() === rawCountry
  ) || destinations.find((d) => d.id === "uk")!;

  const details = destinationDetailsData[destination.id] || destinationDetailsData["uk"];
  const { openConsultation } = useOutletContext<{ openConsultation: () => void }>() || {};

  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"overview" | "universities" | "requirements" | "visa">("overview");

  // Filter partner universities for this country
  const countryNameMap: Record<string, string> = {
    canada: "Canada",
    uk: "UK",
    australia: "Australia",
    germany: "Germany",
    france: "France",
    ireland: "Ireland",
    finland: "Finland",
    netherlands: "Netherlands",
    switzerland: "Switzerland",
    spain: "Spain",
    turkey: "Turkey",
    usa: "USA",
    europe: "Europe",
  };

  const currentCountryName = countryNameMap[destination.id] || destination.name;
  
  const matchedUniversities = partnerUniversities.filter((uni) => 
    uni.country.toLowerCase() === currentCountryName.toLowerCase() ||
    uni.country.toLowerCase().includes(destination.id)
  );

  const displayUniversities = matchedUniversities.length > 0 
    ? matchedUniversities 
    : destination.popularUniversities.map((name) => ({ name, country: destination.name, city: "Multiple Campuses", logo: "" }));

  const filteredUnis = displayUniversities.filter((u) => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (u.city && u.city.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const destinationCovers: Record<string, string> = {
    turkey: "/images/destinations/turkey.jpg",
    uk: "/images/destinations/uk.jpg",
    australia: "/images/destinations/australia.jpg",
    usa: "/images/destinations/usa.jpg",
    canada: "/images/destinations/canada.jpg",
    ireland: "/images/destinations/ireland.jpg",
    switzerland: "/images/destinations/switzerland.jpg",
    spain: "/images/destinations/spain.jpg",
    netherlands: "/images/destinations/netherlands.jpg",
    germany: "/images/destinations/germany.jpg",
    finland: "/images/destinations/finland.jpg",
    france: "/images/destinations/france.jpg",
    europe: "/images/destinations/europe.jpg",
  };

  const coverImage = destinationCovers[destination.id] || "/Countries Background - Study Prime.jpg";

  return (
    <div className="destination-page-container">
      {/* Breadcrumb Bar */}
      <div className="dest-breadcrumb-bar">
        <div className="container">
          <div className="dest-breadcrumb-inner">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/destinations" className="breadcrumb-link">Destinations</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">{destination.name}</span>
          </div>
        </div>
      </div>

      {/* Country Hero Banner */}
      <section className="dest-country-hero">
        <div className="dest-country-hero-bg">
          <img src={coverImage} alt={`${destination.name} Landscape`} className="dest-hero-bg-img" />
          <div className="dest-country-hero-overlay" />
        </div>

        <div className="container dest-country-hero-content">
          <div className="dest-hero-tag-row">
            <span className="dest-psw-pill">
              <Sparkles size={14} color="#FFA700" />
              {details.pswBadge}
            </span>
            <span className="dest-uni-count-pill">
              <GraduationCap size={14} color="#38BDF8" />
              {displayUniversities.length}+ Partner Institutions
            </span>
          </div>

          <div className="dest-title-with-flag">
            {destination.flagImage && (
              <img 
                src={destination.flagImage} 
                alt={`${destination.name} Flag`} 
                className="dest-hero-flag"
                onError={(e) => ((e.target as HTMLElement).style.display = "none")}
              />
            )}
            <h1 className="dest-hero-main-title">Study in {destination.name}</h1>
          </div>

          <p className="dest-hero-tagline">{details.heroTagline}</p>

          {/* Quick Metrics Bar */}
          <div className="dest-quick-metrics-grid">
            <div className="metric-box">
              <div className="metric-icon-wrap"><Clock size={20} color="#FFA700" /></div>
              <div>
                <div className="metric-lbl">Main Intakes</div>
                <div className="metric-val">{details.intakes}</div>
              </div>
            </div>

            <div className="metric-box">
              <div className="metric-icon-wrap"><ShieldCheck size={20} color="#10B981" /></div>
              <div>
                <div className="metric-lbl">Visa Success</div>
                <div className="metric-val highlight-green">{details.visaRate}</div>
              </div>
            </div>

            <div className="metric-box">
              <div className="metric-icon-wrap"><DollarSign size={20} color="#38BDF8" /></div>
              <div>
                <div className="metric-lbl">Avg. Tuition</div>
                <div className="metric-val">{details.avgTuition}</div>
              </div>
            </div>

            <div className="metric-box">
              <div className="metric-icon-wrap"><Building2 size={20} color="#A855F7" /></div>
              <div>
                <div className="metric-lbl">Est. Living Cost</div>
                <div className="metric-val">{details.livingCost}</div>
              </div>
            </div>
          </div>

          {/* Hero CTAs */}
          <div className="dest-hero-cta-group">
            <button
              type="button"
              className="btn btn-accent"
              onClick={openConsultation}
              style={{ padding: "14px 28px", fontSize: "1rem", fontWeight: 700 }}
            >
              Get Free Assessment for {destination.name} <ArrowRight size={18} />
            </button>
            <a 
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
              className="btn btn-outline-white"
              style={{ padding: "14px 24px" }}
            >
              <PhoneCall size={16} /> Call Advisor: {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Sticky Tab Navigation */}
      <div className="dest-tabs-bar">
        <div className="container">
          <div className="dest-tabs-flex">
            <button 
              type="button" 
              className={`dest-tab-btn ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              <Compass size={16} /> Overview &amp; Key Benefits
            </button>
            <button 
              type="button" 
              className={`dest-tab-btn ${activeTab === "universities" ? "active" : ""}`}
              onClick={() => setActiveTab("universities")}
            >
              <GraduationCap size={16} /> Partner Universities ({displayUniversities.length})
            </button>
            <button 
              type="button" 
              className={`dest-tab-btn ${activeTab === "requirements" ? "active" : ""}`}
              onClick={() => setActiveTab("requirements")}
            >
              <FileText size={16} /> Admission Requirements
            </button>
            <button 
              type="button" 
              className={`dest-tab-btn ${activeTab === "visa" ? "active" : ""}`}
              onClick={() => setActiveTab("visa")}
            >
              <ShieldCheck size={16} /> Visa Process
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="section-padding dest-detail-body">
        <div className="container">
          <div className="dest-layout-grid">
            {/* Left Column: Tab Content */}
            <div className="dest-main-content-col">
              {/* Tab 1: Overview */}
              {activeTab === "overview" && (
                <div className="dest-tab-content-panel">
                  <h2 className="dest-section-heading">Why Choose {destination.name} for Higher Education?</h2>
                  <p className="dest-body-paragraph">{details.overview}</p>

                  <h3 className="dest-sub-heading" style={{ marginTop: "36px" }}>Key Advantages &amp; Post-Study Work Rights</h3>
                  <div className="dest-benefits-grid">
                    {details.keyBenefits.map((benefit, i) => (
                      <div key={i} className="dest-benefit-card">
                        <CheckCircle2 size={20} className="dest-check-icon" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="dest-sub-heading" style={{ marginTop: "40px" }}>Popular &amp; High-Demand Degree Fields</h3>
                  <div className="dest-fields-chips">
                    {details.popularFields.map((f, i) => (
                      <div key={i} className="field-chip">
                        <GraduationCap size={15} color="#0066FF" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 2: Partner Universities */}
              {activeTab === "universities" && (
                <div className="dest-tab-content-panel">
                  <div className="dest-unis-header-flex">
                    <div>
                      <h2 className="dest-section-heading" style={{ marginBottom: "6px" }}>
                        Partner Universities &amp; Institutions in {destination.name}
                      </h2>
                      <p style={{ color: "#64748B", fontSize: "0.95rem" }}>
                        Study Prime holds direct representation and application routing with {displayUniversities.length}+ accredited institutions.
                      </p>
                    </div>

                    <div className="dest-search-wrap">
                      <Search size={18} className="search-icon-inside" />
                      <input
                        type="text"
                        placeholder="Search university or campus..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="dest-search-input"
                      />
                    </div>
                  </div>

                  <div className="dest-universities-card-grid">
                    {filteredUnis.length > 0 ? (
                      filteredUnis.map((uni, idx) => (
                        <div key={idx} className="dest-uni-card">
                          <div className="uni-card-header">
                            <div className="uni-icon-square">
                              <Building2 size={22} color="#081736" />
                            </div>
                            <span className="uni-verified-tag">Official Partner</span>
                          </div>
                          <h4 className="uni-card-title">{uni.name}</h4>
                          {uni.city && (
                            <div className="uni-location-row">
                              <MapPin size={14} color="#FFA700" />
                              <span>{uni.city}, {destination.name}</span>
                            </div>
                          )}
                          <div className="uni-card-footer">
                            <button
                              type="button"
                              onClick={openConsultation}
                              className="btn-apply-uni"
                            >
                              <span>Apply to this University</span>
                              <ArrowRight size={14} />
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="no-unis-found">
                        <HelpCircle size={32} color="#94A3B8" />
                        <p>No universities found matching "{searchTerm}".</p>
                        <button type="button" className="btn btn-outline" onClick={() => setSearchTerm("")}>
                          Clear Search Filter
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Tab 3: Admission Requirements */}
              {activeTab === "requirements" && (
                <div className="dest-tab-content-panel">
                  <h2 className="dest-section-heading">Admission Eligibility &amp; Criteria</h2>
                  <p className="dest-body-paragraph">
                    Requirements vary depending on degree levels (Undergraduate, Postgraduate, Diploma). Below is the standard benchmark required for Pakistani applicants:
                  </p>

                  <div className="dest-requirements-list">
                    {details.admissionRequirements.map((req, i) => (
                      <div key={i} className="req-item-card">
                        <div className="req-number-bubble">{i + 1}</div>
                        <div className="req-text-content">
                          <p>{req}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="dest-highlight-callout">
                    <Sparkles size={22} color="#FFA700" style={{ flexShrink: 0 }} />
                    <div>
                      <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#081736", marginBottom: "4px" }}>
                        Need help with SOP drafting or IELTS preparation?
                      </h4>
                      <p style={{ fontSize: "0.9rem", color: "#64748B", margin: 0 }}>
                        Study Prime provides complete Statement of Purpose (SOP) review, recommendation letter alignment, and IELTS coaching.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4: Visa Process */}
              {activeTab === "visa" && (
                <div className="dest-tab-content-panel">
                  <h2 className="dest-section-heading">Student Visa Process &amp; Documentation</h2>
                  <p className="dest-body-paragraph">
                    Our certified visa consultants have a proven 96%+ visa grant rate. We guide you through financial structuring, embassy file preparation, and mock interviews:
                  </p>

                  <div className="dest-visa-steps-grid">
                    {details.visaRequirements.map((vReq, idx) => (
                      <div key={idx} className="visa-step-card">
                        <ShieldCheck size={20} color="#10B981" className="visa-step-icon" />
                        <div className="visa-step-text">
                          <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#081736", marginBottom: "4px" }}>
                            Step {idx + 1} Requirement
                          </h4>
                          <p style={{ fontSize: "0.9rem", color: "#475569", margin: 0 }}>{vReq}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sticky Consultation Sidebar */}
            <div className="dest-sidebar-col">
              <div className="dest-sticky-consult-card">
                <div className="consult-card-top">
                  <span className="consult-badge">Free Advisory</span>
                  <h3 className="consult-title">Apply for {destination.name}</h3>
                  <p className="consult-desc">
                    Book a one-on-one session with our senior visa &amp; admissions advisors at our Islamabad office or online.
                  </p>
                </div>

                <div className="consult-perks-list">
                  <div className="perk-item">
                    <CheckCircle2 size={16} color="#10B981" />
                    <span>Profile Assessment &amp; University Matching</span>
                  </div>
                  <div className="perk-item">
                    <CheckCircle2 size={16} color="#10B981" />
                    <span>Scholarship &amp; Fee Waiver Evaluation</span>
                  </div>
                  <div className="perk-item">
                    <CheckCircle2 size={16} color="#10B981" />
                    <span>Visa File &amp; Financial Structuring</span>
                  </div>
                  <div className="perk-item">
                    <CheckCircle2 size={16} color="#10B981" />
                    <span>1-on-1 Mock Embassy Interview</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-accent consult-btn-full"
                  onClick={openConsultation}
                >
                  Book Free Appointment <ArrowRight size={16} />
                </button>

                <div className="consult-contact-row">
                  <div className="office-tag">
                    <MapPin size={13} color="#081736" />
                    <span>Galleria Mall, I-8 Markaz, Islamabad</span>
                  </div>
                </div>
              </div>

              {/* Other Destinations Quick Navigation */}
              <div className="other-destinations-card">
                <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#081736", marginBottom: "14px" }}>
                  Other Top Destinations
                </h4>
                <div className="other-dest-links">
                  {destinations
                    .filter((d) => d.id !== destination.id)
                    .slice(0, 6)
                    .map((other) => (
                      <Link key={other.id} to={`/destinations/${other.id}`} className="other-dest-item">
                        <span>{other.name}</span>
                        <ArrowRight size={14} />
                      </Link>
                    ))}
                </div>
                <Link to="/destinations" className="btn-view-all-dest">
                  View All Countries &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
