import { siteConfig } from "~/data/siteData";

export const CANONICAL_BASE_URL = "https://studyprime.pk";

/**
 * Returns canonical full URL for a given path
 */
export function getCanonicalUrl(path = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${CANONICAL_BASE_URL}${cleanPath === "/" ? "" : cleanPath}`;
}

/**
 * Generates global Schema.org JSON-LD structured data graph including:
 * 1. WebSite (for Brand identity & Sitelinks Searchbox)
 * 2. SiteNavigationElement (explicitly guides Google to award sitelinks to key hubs)
 * 3. EducationalOrganization / LocalBusiness (business NAP, office address, opening hours)
 */
export function getGlobalStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      // 1. WebSite Schema with Sitelinks Search potential
      {
        "@type": "WebSite",
        "@id": `${CANONICAL_BASE_URL}/#website`,
        "url": CANONICAL_BASE_URL,
        "name": "Study Prime",
        "alternateName": [
          "Study Prime Pakistan",
          "Study Prime Consultants",
          "Study Prime Study Abroad",
          "Study Prime Islamabad"
        ],
        "description": "Premier overseas education and study visa consultancy in Pakistan providing university admissions and visa guidance.",
        "inLanguage": "en-PK",
        "publisher": {
          "@id": `${CANONICAL_BASE_URL}/#organization`
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${CANONICAL_BASE_URL}/destinations?search={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      },

      // 2. EducationalOrganization / LocalBusiness Schema
      {
        "@type": "EducationalOrganization",
        "@id": `${CANONICAL_BASE_URL}/#organization`,
        "name": siteConfig.name,
        "alternateName": "Study Prime Study Abroad Experts",
        "url": CANONICAL_BASE_URL,
        "logo": `${CANONICAL_BASE_URL}/studyprimelogo.png`,
        "image": `${CANONICAL_BASE_URL}/student.webp`,
        "telephone": siteConfig.contact.phone,
        "email": siteConfig.contact.email,
        "description": siteConfig.heroSubtitle,
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office #F-15, First Floor, Galleria Mall, I-8 Markaz",
          "addressLocality": "Islamabad",
          "addressRegion": "Islamabad Capital Territory",
          "postalCode": "44000",
          "addressCountry": "PK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 33.6693,
          "longitude": 73.0768
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "10:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday"],
            "opens": "10:00",
            "closes": "15:00"
          }
        ],
        "sameAs": [
          siteConfig.socials.facebook,
          siteConfig.socials.instagram,
          siteConfig.socials.linkedin,
          siteConfig.socials.youtube,
          siteConfig.socials.twitter
        ].filter(Boolean)
      },

      // 3. SiteNavigationElement (Crucial signal for Google Sitelinks algorithm)
      {
        "@type": "ItemList",
        "@id": `${CANONICAL_BASE_URL}/#navigation`,
        "name": "Primary Site Navigation",
        "itemListElement": [
          {
            "@type": "SiteNavigationElement",
            "position": 1,
            "name": "Study Destinations",
            "description": "Explore study abroad destinations including UK, USA, Canada, Australia, and Europe.",
            "url": `${CANONICAL_BASE_URL}/destinations`
          },
          {
            "@type": "SiteNavigationElement",
            "position": 2,
            "name": "Our Services",
            "description": "Comprehensive student visa processing, university admissions, and SOP drafting services.",
            "url": `${CANONICAL_BASE_URL}/services`
          },
          {
            "@type": "SiteNavigationElement",
            "position": 3,
            "name": "Degree Programs & Courses",
            "description": "Top academic programs, undergraduate and postgraduate degrees abroad.",
            "url": `${CANONICAL_BASE_URL}/courses`
          },
          {
            "@type": "SiteNavigationElement",
            "position": 4,
            "name": "Partner Universities",
            "description": "Explore 200+ prestigious partner universities worldwide.",
            "url": `${CANONICAL_BASE_URL}/universities`
          },
          {
            "@type": "SiteNavigationElement",
            "position": 5,
            "name": "Free Visa Assessment",
            "description": "Free profile assessment to calculate your eligibility and scholarship possibilities.",
            "url": `${CANONICAL_BASE_URL}/assessment`
          },
          {
            "@type": "SiteNavigationElement",
            "position": 6,
            "name": "About Study Prime",
            "description": "Meet our experienced counselors and learn about our visa success rate.",
            "url": `${CANONICAL_BASE_URL}/about`
          },
          {
            "@type": "SiteNavigationElement",
            "position": 7,
            "name": "Contact Us",
            "description": "Visit our Islamabad office at Galleria Mall, I-8 Markaz or connect with us online.",
            "url": `${CANONICAL_BASE_URL}/contact`
          }
        ]
      }
    ]
  };
}

/**
 * Breadcrumb structured data generator
 */
export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.path.startsWith("http") ? item.path : getCanonicalUrl(item.path)
    }))
  };
}
