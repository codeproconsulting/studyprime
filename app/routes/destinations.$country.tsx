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
  uae: {
    heroTagline: "World-Class Branch Campuses, Tax-Free Career Prospects & Rapid Student Visas",
    pswBadge: "Green Visa & Golden Visa Pathways • Tax-Free Earnings",
    intakes: "September (Fall), January/February (Spring) & Summer",
    visaRate: "99% High Approval Rate",
    avgTuition: "AED 35,000 - 85,000 / Year (£7,500 - £18,000)",
    livingCost: "AED 30,000 - 45,000 / Year",
    overview:
      "The United Arab Emirates (Dubai, Abu Dhabi, Ras Al Khaimah, and Ajman) is one of the world's fastest-growing higher education and business hubs. Students can graduate with authentic degrees from top British, Australian, European, and American branch campuses with streamlined visa processing and tax-free post-study career opportunities.",
    keyBenefits: [
      "Graduate with identical UK, Australian & US degrees from top branch campuses",
      "High visa approval rate with simplified paperwork and no extensive holding period requirements",
      "Zero personal income tax on graduate earnings with direct access to Fortune 500 corporate hubs",
      "5-Year Student Green Visa and 10-Year Golden Visa opportunities for high achievers",
      "Extremely safe, multicultural environment in Dubai, RAK, and Ajman",
    ],
    admissionRequirements: [
      "Intermediate / A-Levels / High School Certificate (min 55%+)",
      "Bachelor's degree for Master's programs (min 2.2+ CGPA)",
      "IELTS Academic 5.5 - 6.5 (or MOI / University internal English test)",
      "Statement of Purpose (SOP)",
      "Valid Passport copy and passport-size photographs",
    ],
    visaRequirements: [
      "University Offer Letter and confirmation of student visa sponsorship",
      "Tuition deposit receipt",
      "Passport valid for at least 6 months",
      "UAE Student Entry Permit / E-Visa issuance",
      "Mandatory UAE Medical Fitness Test and Emirates ID registration on arrival",
    ],
    popularFields: [
      "International Business, Finance & FinTech",
      "Artificial Intelligence, Data Science & Cybersecurity",
      "Hospitality, Tourism & Event Management",
      "Fashion, Interior Design & Creative Media (DIDI & Marangoni)",
      "Civil, Mechanical & Electrical Engineering",
    ],
  },
  "new-zealand": {
    heroTagline: "QS Top-Ranked Universities, 3-Year Post-Study Work Visas & Green List PR Pathways",
    pswBadge: "Up to 3-Year Post-Study Work Visa • Green List PR Pathway",
    intakes: "February (Semester 1) & July (Semester 2)",
    visaRate: "95% High Success Rate",
    avgTuition: "NZD $24,000 - $38,000 / Year",
    livingCost: "NZD $20,000 / Year",
    overview:
      "New Zealand is renowned worldwide for academic prestige (100% of its 8 public universities are ranked in the global top 3%), safety, and progressive innovation. International graduates can access up to 3 years of post-study work rights and direct pathways to New Zealand Permanent Residency under the Green List skill shortage occupations.",
    keyBenefits: [
      "All 8 New Zealand public universities rank in the QS World Top 3%",
      "Up to 3-Year Post-Study Work Visa (PSWV) with open employer work rights",
      "Fast-track New Zealand Permanent Residency for Green List in-demand professions",
      "20 hours/week part-time work rights during study & full-time during holidays",
      "Spouse work rights available for eligible Master's and Level 8 Post-Grad qualifications",
    ],
    admissionRequirements: [
      "Intermediate / A-Levels (min 60%+) for Bachelor's or Bachelor degree (min 2.5+ CGPA) for Master's",
      "IELTS Academic 6.0 - 6.5 or PTE Academic 50 - 58+ (or NZCEL qualifications)",
      "Statement of Purpose (SOP) addressing Genuine Student Intent",
      "Academic transcripts, mark sheets, and certified degree certificates",
      "CV & Reference letters for postgraduate programs",
    ],
    visaRequirements: [
      "Unconditional Offer of Place from NZQA-accredited university or ITP",
      "Proof of full tuition fee payment or approved financial undertaking",
      "Living expenses funds: NZD $20,000 per year held in an acceptable bank account",
      "Immigration New Zealand (INZ) Medical Certificate & Chest X-Ray",
      "Police clearance certificate & travel/health insurance",
    ],
    popularFields: [
      "Information Technology, Software Development & AI",
      "Civil, Structural & Environmental Engineering",
      "Business Analytics, Supply Chain & Management",
      "Culinary Arts, Hospitality & Tourism Management (ITC & Le Cordon Bleu)",
      "Aviation & Commercial Pilot Training (NZAAL)",
      "Agricultural Science & Viticulture (Lincoln University)",
    ],
  },
  portugal: {
    heroTagline: "Schengen Mobility, Triple-Accredited Business Schools & 1-Year Job Search Visas",
    pswBadge: "1-Year Job Search Visa • EU Schengen Residency",
    intakes: "September/October (Fall) & February (Spring)",
    visaRate: "96% High Success Rate",
    avgTuition: "€3,000 - €9,000 / Year",
    livingCost: "€6,000 - €8,500 / Year",
    overview:
      "Portugal has emerged as one of Western Europe's most attractive, welcoming, and cost-effective study destinations. Offering globally ranked institutions such as ISCTE Executive Education and Business School with triple accreditations (AACSB, AMBA, EQUIS), students benefit from 100% English-taught Master's degrees, vibrant tech hubs in Lisbon, and a 1-year post-study job search visa.",
    keyBenefits: [
      "1-Year Post-Study Job Search Residence Permit across Portugal",
      "Triple-accredited world-class business and executive programs (ISCTE)",
      "Significantly lower cost of living and tuition compared to northern Europe",
      "Full Schengen visa mobility across 27 EU member states",
      "Right to work part-time (20 hours/week) during academic semesters",
    ],
    admissionRequirements: [
      "High School Diploma / Intermediate for Bachelor's; Bachelor's degree for Master's/Executive programs",
      "IELTS Academic 6.0 - 6.5 or verified English Medium of Instruction (MOI)",
      "Statement of Purpose (SOP) & Updated CV / Resume",
      "Attested academic transcripts and degree certificates",
      "Professional references for Executive Education / MBA applications",
    ],
    visaRequirements: [
      "National D4 / D2 Student Visa Application Form",
      "Official Letter of Acceptance from accredited Portuguese university (e.g. ISCTE)",
      "Proof of financial means (min ~€8,400 per year in bank account)",
      "Proof of accommodation in Portugal (lease agreement or university housing letter)",
      "Valid passport, travel health insurance (€30,000 coverage), and Police Clearance Certificate (attested)",
    ],
    popularFields: [
      "Executive Management, Strategy & Leadership (ISCTE)",
      "International Management, Finance & Business Analytics",
      "Data Science, Applied AI & Information Systems",
      "Tourism, Hospitality & Sustainable Heritage Management",
      "Software Engineering & Digital Transformation",
    ],
  },
  japan: {
    heroTagline: "Cutting-Edge Innovation, 28-Hour Work Rights & Direct Pathways to Tech Employment",
    pswBadge: "28 Hrs/Week Work Rights • SSW & Engineer Work Visas",
    intakes: "April (Spring - Primary), October (Autumn), July & January",
    visaRate: "97% High Success Rate with COE",
    avgTuition: "¥650,000 - ¥1,200,000 / Year (~$4,500 - $8,000)",
    livingCost: "¥80,000 - ¥140,000 / Month (~$550 - $950)",
    overview:
      "Japan is the world's third-largest economy and a global technological powerhouse. Japanese language programs and vocational/university degrees offer high-demand career pathways in software engineering, robotics, business management, tourism, and healthcare. International students are permitted to work up to 28 hours per week with abundant part-time and full-time employment options upon graduation.",
    keyBenefits: [
      "Generous part-time work permit: 28 hours/week during semesters & 40 hours/week during official holidays",
      "Certificate of Eligibility (COE) issued directly by Japanese Immigration Bureau",
      "Direct progression from Japanese Language Institutes to Top National Universities (Todai, Kyoto, Tokyo Tech) and Senmon Gakko (Vocational Colleges)",
      "Streamlined transition to 'Specified Skilled Worker (SSW)' or 'Engineer/Specialist in Humanities' full-time work visas",
      "World-class public safety, futuristic infrastructure, and rich cultural heritage",
    ],
    admissionRequirements: [
      "Minimum 12 years of formal education (FA/FSc/ICS/A-Levels or equivalent)",
      "Basic Japanese language proficiency (min 150 hours of study or JLPT N5 / NAT-TEST 5Q)",
      "Statement of Purpose / Study Plan detailing academic goals in Japan",
      "Academic mark sheets, passing certificates, and attested degrees",
      "Financial sponsor documentation (bank statement of approx PKR 35-40 Lakhs / $15,000+)",
    ],
    visaRequirements: [
      "Original Certificate of Eligibility (COE) issued by Japan Immigration",
      "Official Letter of Admission / Acceptance from Japanese Language Institute or University",
      "Japanese Visa Application Form with 45x35mm photos (white background)",
      "Sponsor's tax returns, salary certificates, and bank balance confirmation",
      "Original passport, CNIC, and relationship documents (FRC/birth certificate attested)",
    ],
    popularFields: [
      "Japanese Language & Cultural Immersion Programs",
      "Robotics, Computer Science & AI Engineering",
      "Automobile Technology & Advanced Manufacturing",
      "International Business, Trade & Supply Chain",
      "Culinary Arts, Hospitality & Tourism Management",
    ],
  },
  "czech-republic": {
    heroTagline: "Heart of Europe, Dual US/EU Accreditations & 9-Month Job Search Visa",
    pswBadge: "9-Month Job Search Visa • Schengen EU Mobility",
    intakes: "September / October (Fall) & February (Spring)",
    visaRate: "95% Success Rate",
    avgTuition: "€3,500 - €9,500 / Year",
    livingCost: "€5,000 - €7,500 / Year",
    overview:
      "The Czech Republic is a prime European academic destination celebrated for its rich scholastic heritage, top-ranking engineering faculties, and vibrant student capitals like Prague and Pilsen. Offering prestigious dual-accredited American/European programs and world-class film schools, graduates enjoy full Schengen mobility, low living costs, and 9 months of post-study job seeker residency.",
    keyBenefits: [
      "9-Month Post-Study Job Seeker Residence Permit across the Czech Republic",
      "Dual American and European accredited degrees (Anglo-American University AAU)",
      "Prestigious hands-on filmmaking and media production (Prague Film Institute)",
      "High-tech engineering and robotics research (University of West Bohemia)",
      "Part-time work permitted during studies without a separate work permit",
      "Central Schengen location with direct access to Germany, Austria, and Poland",
    ],
    admissionRequirements: [
      "Intermediate / High School Diploma for Bachelor's; Bachelor's degree for Master's programs",
      "IELTS Academic 6.0 - 6.5 / TOEFL or English Medium of Instruction (MOI) certificate",
      "Statement of Purpose (SOP) & Curriculum Vitae (CV)",
      "Attested academic transcripts and degree certificates (Nostrification assistance provided)",
      "Portfolio or creative sample (for Film & Media programs)",
    ],
    visaRequirements: [
      "Long-Term Student Visa (Type D) / Long-Term Residence Permit for Studies Application",
      "Official Letter of Acceptance from accredited Czech institution",
      "Proof of funds (approx €5,500 - €6,500 in student or sponsor bank account)",
      "Proof of accommodation in the Czech Republic (dormitory contract or rental agreement)",
      "Police Clearance Certificate with Superlegalization / Apostille & Comprehensive Health Insurance (PVZP)",
    ],
    popularFields: [
      "Business Administration, International Relations & Law (AAU Prague)",
      "Cinematography, Directing & Film Production (Prague Film Institute)",
      "Electrical Engineering, Electronics & Power Systems (UWB)",
      "Computer Science & Applied Information Technologies",
      "Humanities, Journalism & Visual Arts",
    ],
  },
  hungary: {
    heroTagline: "EU Academic Hub, Stipendium Scholarships & 9-Month Study-to-Work Permit",
    pswBadge: "9-Month Study-to-Work Permit • Schengen EU Mobility",
    intakes: "September / October (Fall) & February (Spring)",
    visaRate: "96% High Success Rate",
    avgTuition: "€2,500 - €6,500 / Year",
    livingCost: "€4,500 - €6,500 / Year (~$400-$600/month)",
    overview:
      "Hungary is situated in the very center of Europe and is home to centuries-old universities such as the University of Pécs (founded 1367), Budapest Metropolitan University, and Széchenyi István University. With highly affordable tuition fees, world-class English-taught degrees, Stipendium Hungaricum opportunities, and a 9-month Study-to-Work post-study residence permit, Hungary is a premier European gateway.",
    keyBenefits: [
      "9-Month Study-to-Work residence permit upon graduation in Hungary",
      "Full Schengen mobility across all 27 European member states",
      "Highly affordable tuition fees starting from just €2,500/year",
      "Part-time work permitted during studies (up to 24 hours/week)",
      "Vibrant student life in Budapest, Central Europe's safest and most scenic student capital",
    ],
    admissionRequirements: [
      "Intermediate / 12 years education for Bachelor's; Bachelor's degree for Master's programs",
      "IELTS Academic 5.5 - 6.5 or internal university English language proficiency test / MOI",
      "Motivation Letter (Statement of Purpose) & CV",
      "Attested educational documents and transcripts",
      "Online entrance exam / interview for select universities (BIC, METU, Pécs)",
    ],
    visaRequirements: [
      "D-Type Residence Permit for Studies Application Form (via Enter Hungary portal)",
      "Official Letter of Admission / Acceptance from accredited Hungarian university",
      "Proof of payment of tuition fee (first semester/year)",
      "Bank statement showing minimum €6,000 - €8,000 to cover living expenses",
      "Proof of accommodation in Hungary (dormitory confirmation or lease agreement)",
      "Health insurance covering entire stay & clean criminal record certificate",
    ],
    popularFields: [
      "General Medicine, Dentistry & Pharmacy (University of Pécs)",
      "Business Administration, International Economics & Marketing (BBU & METU)",
      "Computer Science, Software Engineering & Artificial Intelligence (BIC & SZE)",
      "Automotive Engineering & Mechatronics (Széchenyi István University)",
      "Management, Finance & International Business (ESSCA Budapest & Wekerle)",
    ],
  },
  latvia: {
    heroTagline: "Northern European Knowledge Hub, EU Degrees & 9-Month Job Search Visa",
    pswBadge: "9-Month Job Search Visa • Schengen EU Mobility",
    intakes: "September / October (Fall) & February (Spring)",
    visaRate: "95% Success Rate",
    avgTuition: "€2,800 - €5,500 / Year",
    livingCost: "€4,200 - €6,000 / Year (~$350-$500/month)",
    overview:
      "Latvia is a progressive Northern European EU member nation with a centuries-old academic culture centered in its historic capital, Riga. The University of Latvia (founded 1919) offers globally recognized degrees in medicine, computer science, business, and humanities, with low tuition fees, affordable living, and 9 months of post-study job search residency.",
    keyBenefits: [
      "9-Month Post-Study Job Search Residence Permit in Latvia",
      "Full Schengen mobility across all 27 EU member countries",
      "Premier national comprehensive university (University of Latvia, Riga)",
      "Part-time work permitted during studies (up to 20 hours/week)",
      "Vibrant IT startup ecosystem and multinational business centers in Riga",
    ],
    admissionRequirements: [
      "High School Diploma / Intermediate for Bachelor's; Bachelor's degree for Master's programs",
      "IELTS Academic 5.5 - 6.0 or university internal English test / MOI certificate",
      "Statement of Purpose (SOP) & Updated CV",
      "Attested educational documents, AIC (Academic Information Centre) diploma recognition",
      "Passport copy and passport-sized photographs",
    ],
    visaRequirements: [
      "Long-Stay Visa (Type D) / Residence Permit Application Form",
      "Official Study Agreement & Invitation Letter approved by OCMA (Office of Citizenship and Migration Affairs)",
      "Bank statement showing minimum €6,000 for annual living expenses",
      "Proof of accommodation in Latvia (dormitory or rental agreement)",
      "Police Clearance Certificate with Apostille/Superlegalization & Health insurance",
    ],
    popularFields: [
      "General Medicine & Healthcare Sciences (University of Latvia)",
      "Computer Science, IT & Software Engineering",
      "Business Administration & International Economics",
      "Physics, Optometry & Material Sciences",
      "European Studies & International Relations",
    ],
  },
  cyprus: {
    heroTagline: "QS Top-Ranked Mediterranean Education, 50% Scholarships & European Pathways",
    pswBadge: "EU Degree Recognition • Mediterranean Career Pathways",
    intakes: "October (Fall Intake) & February (Spring Intake)",
    visaRate: "97% Very High Approval Rate",
    avgTuition: "€3,000 - €7,500 / Year (Up to 50% Scholarships)",
    livingCost: "€3,600 - €5,400 / Year (~$300-$450/month)",
    overview:
      "Cyprus is an established Mediterranean educational hub offering globally recognized European degrees taught entirely in English. Home to the University of Nicosia (ranked in the top 500 universities globally by QS and Times Higher Education) and Frederick University, Cyprus offers affordable tuition, generous scholarships up to 50%, a sunny lifestyle, and direct transfer opportunities across Europe.",
    keyBenefits: [
      "Top 500 globally ranked institutions (University of Nicosia - UNIC)",
      "Up to 50% merit and international student scholarships available",
      "Very high visa success rate with streamlined admission processing",
      "Part-time student employment permitted during academic sessions",
      "Safe, English-speaking Mediterranean European lifestyle with low living expenses",
    ],
    admissionRequirements: [
      "Higher Secondary School Certificate / Intermediate for Bachelor's programs",
      "Bachelor's degree with minimum 2.2 GPA for Master's programs",
      "English Proficiency: IELTS 5.5-6.0 / TOEFL / University English Placement Test / MOI",
      "Attested academic transcripts, Statement of Purpose & 2 Reference Letters",
      "Valid passport (minimum 2 years validity) and police clearance certificate",
    ],
    visaRequirements: [
      "Entry Permit / Student Visa Application Form approved by Migration Department",
      "Official University Acceptance Letter & Migration Entry Permit (Blue Slip)",
      "Proof of payment of tuition fee deposit",
      "Bank solvency letter showing minimum €7,000 in sponsor account",
      "Attested Medical Fitness Certificates (HIV, Hepatitis B & C, Syphilis, Chest X-ray)",
      "Attested Police Clearance Certificate & Travel Health Insurance",
    ],
    popularFields: [
      "Human Medicine, Surgery & Pharmacy (University of Nicosia)",
      "Blockchain, Fintech & Computer Science (UNIC)",
      "Civil, Mechanical & Electrical Engineering (Frederick University)",
      "Hospitality, Tourism & Culinary Arts Management",
      "Business Administration, Digital Marketing & Finance",
    ],
  },
  malta: {
    heroTagline: "English-Speaking EU Member State, UK-Accredited Degrees & Post-Study Work",
    pswBadge: "9-Month Job Search Visa • English-Speaking EU Nation",
    intakes: "October (Fall Intake) & February (Spring Intake)",
    visaRate: "96% High Success Rate",
    avgTuition: "€3,000 - €8,500 / Year",
    livingCost: "€4,000 - €6,000 / Year (~$350-$500/month)",
    overview:
      "Malta is an official English-speaking EU and Schengen Member State in the heart of the Mediterranean. Offering British-standard higher education through prestigious institutions like the University of Malta (founded 1592), Middlesex University Malta, MCAST, and Global College Malta, it provides an unbeatable combination of affordable tuition, UK-standard curricula, and post-study employment rights in Europe.",
    keyBenefits: [
      "Official English-speaking country with European Union & Schengen membership",
      "Up to 9-month Post-Study Work Residence Permit upon graduation",
      "Part-time work permitted (up to 20 hours/week) during academic terms",
      "Affordable tuition fees and low European living costs",
      "UK degree validation and direct pathways to European and British employment",
    ],
    admissionRequirements: [
      "Intermediate / HSSC / 12 years schooling for Bachelor's; Bachelor's degree for Master's programs",
      "English Proficiency: IELTS Academic 5.5 - 6.5 or internal university English test / MOI",
      "Statement of Purpose (SOP) & Curriculum Vitae (CV)",
      "Attested academic transcripts, certificates, and 2 Letters of Recommendation",
      "Valid international passport (minimum 2 years validity)",
    ],
    visaRequirements: [
      "National Long-Stay Student Visa (Type D) / Identità Malta Application",
      "Official Letter of Acceptance from accredited Maltese higher education institution",
      "Proof of full tuition fee payment / initial deposit",
      "Bank statement showing minimum €6,000 - €8,000 for living support",
      "Proof of verified accommodation in Malta & Travel Medical Insurance (€30,000+ coverage)",
      "Police Conduct Certificate with Apostille/Superlegalization",
    ],
    popularFields: [
      "Computer Science, Software Development & Artificial Intelligence (Middlesex & MCAST)",
      "Business Administration, International Finance & Fintech (GBS & Global College)",
      "International Tourism, Cruise & Hospitality Management (ITS Malta)",
      "Nursing, Health Sciences & Pharmacy (University of Malta)",
      "Engineering, Marine Technologies & Applied Sciences",
    ],
  },
  malaysia: {
    heroTagline: "Asia's Premier Education Powerhouse, UK/US/Aus Dual Degrees & Affordable Excellence",
    pswBadge: "Dual Degrees • Rapid EMGS Visa • Low Living Cost",
    intakes: "February, July, September & October",
    visaRate: "98% High Approval Rate",
    avgTuition: "USD $3,500 - $8,500 / Year (MYR 16,000 - 38,000)",
    livingCost: "USD $3,000 - $4,500 / Year (~$250-$350/month)",
    overview:
      "Malaysia is one of the world's most dynamic and affordable higher education destinations. It hosts top-ranked international branch campuses from the UK and Australia (Monash, Nottingham, Curtin, Heriot-Watt) alongside premier domestic universities (Universiti Malaya, Taylor's, Sunway, APU). Students earn globally recognized degrees at a fraction of Western tuition costs, with fast EMGS student visa approvals and no stringent bank freeze requirements.",
    keyBenefits: [
      "Prestigious UK, Australian & US dual-degree, twinning (2+1, 3+0), and transfer options",
      "Extremely affordable tuition fees ($3,500 - $8,500/year) and low living expenses",
      "Fast electronic visa approval (EMGS eVAL) with high visa success for Pakistani students",
      "100% English-medium instruction in a safe, multicultural, and modern environment",
      "Hub for international tech, finance, and engineering multinationals across Southeast Asia",
    ],
    admissionRequirements: [
      "Intermediate / HSSC / A-Levels (min 50%+) for Bachelor's; 16-year education for Master's",
      "English Proficiency: IELTS Academic 5.0 - 6.0 or Pearson PTE / Medium of Instruction letter (MOI)",
      "Complete academic transcripts and educational certificates",
      "Statement of Purpose (SOP) & Updated CV / Resume",
      "Valid passport with minimum 18 months validity & passport-size white background photos",
    ],
    visaRequirements: [
      "EMGS (Education Malaysia Global Services) Visa Approval Letter (eVAL) application",
      "Letter of Offer from accredited Malaysian higher education institution",
      "Pre-arrival Medical Screening / Health Declaration Form",
      "Proof of payment of EMGS processing fees and initial university registration fee",
      "Bank statement showing basic living expense maintenance",
      "Single Entry Visa (SEV) endorsement from Malaysian Embassy / High Commission",
    ],
    popularFields: [
      "Computer Science, Software Engineering, AI & Cybersecurity (APU & Sunway)",
      "Business Administration, International Marketing & FinTech (Taylor's & Monash)",
      "Civil, Mechanical, Electrical & Chemical Engineering (Curtin & Nottingham)",
      "Hospitality, Tourism & Event Management (Taylor's QS #16 Worldwide)",
      "Biotechnology, Biomedical Sciences & Pharmacy (UCSI & MSU)",
    ],
  },
  sweden: {
    heroTagline: "Global Innovation Leader, SI Full Scholarships & 1-Year Post-Study Job Seeker Visa",
    pswBadge: "1-Year Post-Study Work Visa • Swedish Institute Scholarships",
    intakes: "August / September (Autumn Main Round) & January (Spring)",
    visaRate: "95% High Success Rate",
    avgTuition: "SEK 90,000 - 150,000 / Year (~€8,000 - €14,000)",
    livingCost: "SEK 10,000 / Month (~€850 - €950/month)",
    overview:
      "Sweden ranks among the most innovative, sustainable, and forward-thinking nations in the world. Home to prestigious QS Top 100 research universities such as Lund University, KTH Royal Institute of Technology, Uppsala University, and Chalmers, Sweden delivers cutting-edge English-taught degree programs. International graduates enjoy full Schengen mobility, generous Swedish Institute (SI) full-ride scholarships, and a 12-month post-study residence permit to launch careers in Europe.",
    keyBenefits: [
      "1-Year Post-Study Job Search Residence Permit in Sweden upon graduation",
      "Prestigious Swedish Institute (SI) Scholarships covering 100% tuition + monthly stipend",
      "Birthplace of global tech and design leaders: Spotify, Ericsson, Volvo, IKEA, Klarna",
      "No legal limit on student part-time work hours during studies",
      "Schengen 27-country residence permit with complete European travel freedom",
    ],
    admissionRequirements: [
      "12 years of education (min 65%+) for Bachelor's; 4-year Bachelor's degree (min 2.7+ CGPA) for Master's",
      "IELTS Academic 6.5 (no band below 5.5) or TOEFL iBT 90 / PTE Academic 62",
      "Motivation Letter / Statement of Intent tailored to the program syllabus",
      "Official degree certificates, transcripts, and syllabus descriptions where required",
      "CV / Portfolio (for architecture, design, and interactive media programs)",
    ],
    visaRequirements: [
      "Swedish Migration Agency (Migrationsverket) Residence Permit for Higher Education Studies",
      "Official Notification of Selection Results / Admission Letter from University Admissions Sweden",
      "Proof of full tuition fee payment for the first semester",
      "Maintenance fund requirement: SEK 10,314 per month held in student's personal bank account",
      "Comprehensive comprehensive health and accident insurance coverage",
      "Valid passport covering the full duration of the intended study permit",
    ],
    popularFields: [
      "Software Engineering, Autonomous Systems & Artificial Intelligence (KTH & Chalmers)",
      "Renewable Energy, Sustainable Engineering & Smart Cities (Lund & Uppsala)",
      "Industrial Design, Interaction Design & Innovation Management (Umeå & Jönköping)",
      "International Business, Supply Chain & Sustainability Leadership (Stockholm & Linnaeus)",
      "Public Health, Biomedicine & Biotechnology (Karolinska & Skövde)",
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

  const details = destinationDetailsData[destination.id] || destinationDetailsData["new-zealand"] || destinationDetailsData["uk"];
  const { openConsultation } = useOutletContext<{ openConsultation: () => void }>() || {};

  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"overview" | "universities" | "requirements" | "visa">("overview");

  // Filter partner universities for this country
  const countryNameMap: Record<string, string> = {
    canada: "Canada",
    uk: "UK",
    australia: "Australia",
    "new-zealand": "New Zealand",
    uae: "United Arab Emirates",
    portugal: "Portugal",
    japan: "Japan",
    "czech-republic": "Czech Republic",
    hungary: "Hungary",
    latvia: "Latvia",
    cyprus: "Cyprus",
    malta: "Malta",
    germany: "Germany",
    france: "France",
    ireland: "Ireland",
    finland: "Finland",
    netherlands: "Netherlands",
    switzerland: "Switzerland",
    spain: "Spain",
    turkey: "Turkey",
    usa: "USA",
    malaysia: "Malaysia",
    sweden: "Sweden",
    europe: "Europe",
  };

  const currentCountryName = countryNameMap[destination.id] || destination.name;
  
  const matchedUniversities = partnerUniversities.filter((uni) => 
    uni.country.toLowerCase() === currentCountryName.toLowerCase() ||
    uni.country.toLowerCase().includes(destination.id) ||
    (destination.id === "malaysia" && (uni.country.toLowerCase().includes("malaysia") || uni.city?.toLowerCase().includes("kuala lumpur") || uni.city?.toLowerCase().includes("subang") || uni.city?.toLowerCase().includes("petaling") || uni.city?.toLowerCase().includes("sunway") || uni.city?.toLowerCase().includes("miri") || uni.city?.toLowerCase().includes("semenyih") || uni.city?.toLowerCase().includes("putrajaya") || uni.city?.toLowerCase().includes("damansara") || uni.city?.toLowerCase().includes("nilai") || uni.city?.toLowerCase().includes("shah alam"))) ||
    (destination.id === "sweden" && (uni.country.toLowerCase().includes("sweden") || uni.city?.toLowerCase().includes("lund") || uni.city?.toLowerCase().includes("stockholm") || uni.city?.toLowerCase().includes("uppsala") || uni.city?.toLowerCase().includes("gothenburg") || uni.city?.toLowerCase().includes("jönköping") || uni.city?.toLowerCase().includes("växjö") || uni.city?.toLowerCase().includes("halmstad") || uni.city?.toLowerCase().includes("skövde") || uni.city?.toLowerCase().includes("malmö") || uni.city?.toLowerCase().includes("linköping"))) ||
    (destination.id === "malta" && (uni.country.toLowerCase().includes("malta") || uni.city?.toLowerCase().includes("msida") || uni.city?.toLowerCase().includes("valletta") || uni.city?.toLowerCase().includes("paola") || uni.city?.toLowerCase().includes("swieqi") || uni.city?.toLowerCase().includes("sliema") || uni.city?.toLowerCase().includes("bormla") || uni.city?.toLowerCase().includes("floriana") || uni.city?.toLowerCase().includes("mosta") || uni.city?.toLowerCase().includes("birkirkara") || uni.city?.toLowerCase().includes("gzira") || uni.city?.toLowerCase().includes("hamrun") || uni.city?.toLowerCase().includes("luqa") || uni.city?.toLowerCase().includes("smartcity"))) ||
    (destination.id === "cyprus" && (uni.country.toLowerCase().includes("cyprus") || uni.city?.toLowerCase().includes("nicosia") || uni.city?.toLowerCase().includes("famagusta") || uni.city?.toLowerCase().includes("limassol"))) ||
    (destination.id === "latvia" && (uni.country.toLowerCase().includes("latvia") || uni.city?.toLowerCase().includes("riga"))) ||
    (destination.id === "hungary" && (uni.country.toLowerCase().includes("hungary") || uni.city?.toLowerCase().includes("budapest") || uni.city?.toLowerCase().includes("gyor") || uni.city?.toLowerCase().includes("győr") || uni.city?.toLowerCase().includes("pecs") || uni.city?.toLowerCase().includes("pécs") || uni.city?.toLowerCase().includes("miskolc") || uni.city?.toLowerCase().includes("kecskemet"))) ||
    (destination.id === "czech-republic" && (uni.country.toLowerCase().includes("czech") || uni.city?.toLowerCase().includes("prague") || uni.city?.toLowerCase().includes("pilsen") || uni.city?.toLowerCase().includes("plzeň"))) ||
    (destination.id === "japan" && (uni.country.toLowerCase().includes("japan") || uni.city?.toLowerCase().includes("tokyo") || uni.city?.toLowerCase().includes("kyoto") || uni.city?.toLowerCase().includes("gunma") || uni.city?.toLowerCase().includes("osaka"))) ||
    (destination.id === "portugal" && (uni.country.toLowerCase().includes("portugal") || uni.city?.toLowerCase().includes("lisbon"))) ||
    (destination.id === "usa" && (uni.country.toLowerCase().includes("united states") || uni.country.toLowerCase().includes("usa"))) ||
    (destination.id === "new-zealand" && (uni.country.toLowerCase().includes("zealand") || uni.country.toLowerCase().includes("nz"))) ||
    (destination.id === "uae" && (uni.country.toLowerCase().includes("emirates") || uni.city?.toLowerCase().includes("dubai") || uni.city?.toLowerCase().includes("ajman") || uni.city?.toLowerCase().includes("rak")))
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
    "new-zealand": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop",
    uae: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
    portugal: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=1600&auto=format&fit=crop",
    japan: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1600&auto=format&fit=crop",
    "czech-republic": "https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=1600&auto=format&fit=crop",
    hungary: "https://images.unsplash.com/photo-1549877452-9c387954fbc2?q=80&w=1600&auto=format&fit=crop",
    latvia: "https://images.unsplash.com/photo-1578637387939-43c525550085?q=80&w=1600&auto=format&fit=crop",
    cyprus: "https://images.unsplash.com/photo-1580837119756-563d608dd119?q=80&w=1600&auto=format&fit=crop",
    malta: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1600&auto=format&fit=crop",
    malaysia: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1600&auto=format&fit=crop",
    sweden: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=1600&auto=format&fit=crop",
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
                        <GraduationCap size={15} color="#081736" />
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
