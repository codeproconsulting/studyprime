# Study Prime — Destination Pages Architecture & Design Guidelines
> **Master Directive**: This document defines the non-negotiable standards for creating, migrating, or redesigning destination landing pages on **Study Prime**. Any AI agent, developer, or agency working on this codebase must follow these exact specifications.

---

## 1. URL Architecture & Slug Convention (STRICT RULE)

Every country destination page **MUST** reside under the `/destinations/` directory path and use the `study-in-[country]` slug format.

### Approved Canonical URLs & File Paths:
| Country | Public Canonical URL | Remix Route File Path |
| :--- | :--- | :--- |
| **France** | `https://studyprime.pk/destinations/study-in-france` | `app/routes/destinations.study-in-france.tsx` |
| **New Zealand** | `https://studyprime.pk/destinations/study-in-new-zealand` | `app/routes/destinations.study-in-new-zealand.tsx` |
| **Hungary** | `https://studyprime.pk/destinations/study-in-hungary` | `app/routes/destinations.study-in-hungary.tsx` |
| **United Kingdom** | `https://studyprime.pk/destinations/study-in-uk` | `app/routes/destinations.study-in-uk.tsx` |
| **Canada** | `https://studyprime.pk/destinations/study-in-canada` | `app/routes/destinations.study-in-canada.tsx` |
| **Australia** | `https://studyprime.pk/destinations/study-in-australia` | `app/routes/destinations.study-in-australia.tsx` |
| **Germany** | `https://studyprime.pk/destinations/study-in-germany` | `app/routes/destinations.study-in-germany.tsx` |

### ❌ Strict Prohibitions:
1. **NO Root Slugs**: Never create destination pages at the domain root (e.g., `/study-in-france` or `/study-in-new-zealand`).
2. **NO Dual Indexable Pages**: Never leave old URLs like `/destinations/france` active as duplicate indexable content. Always 301 redirect them.

---

## 2. Server 301 Permanent Redirects

Whenever a country gets its dedicated `destinations.study-in-[country].tsx` page, the generic route handler (`app/routes/destinations.$country.tsx`) **MUST** issue an HTTP 301 permanent redirect:

```tsx
// File: app/routes/destinations.$country.tsx
export const loader = async ({ params }: LoaderFunctionArgs) => {
  const country = (params.country || "").toLowerCase().trim();
  
  if (country === "france") {
    return redirect("/destinations/study-in-france", 301);
  }
  if (country === "new-zealand") {
    return redirect("/destinations/study-in-new-zealand", 301);
  }
  if (country === "hungary") {
    return redirect("/destinations/study-in-hungary", 301);
  }
  
  return null;
};
```

---

## 3. Visual & Aesthetic Standards (Ultra-Premium Only)

Destination landing pages represent high-value student enrollment funnels. **Plain, basic black-and-white text pages are strictly prohibited.**

Every page must implement the following components from `app/styles/destination-landing.css`:

### A. Dark Luxury Hero Section (`.dest-hero-premium`)
- **Background**: Multi-stop gradient `linear-gradient(135deg, #011E3E 0%, #06274E 45%, #02162C 100%)`.
- **Landscape Backdrop**: High-resolution destination photo with 16% opacity, radial vignette, and subtle blur.
- **Eyebrow Badge**: Glowing gold badge (`OFFICIAL STUDY DESTINATION GUIDE &middot; [COUNTRY]`).
- **Hero Title**: Bold H1 with the country name highlighted in `#FFA000` (Gold/Orange).
- **Trust Chips**: Frosted glass badges (`No False Guarantees`, `Official Guidance`, `Direct Assessment`).
- **Dual Action Buttons**:
  - Primary CTA: Glowing Gold/Orange button (`#FFA000`) with Navy text (`#011E3E`).
  - Secondary CTA: Frosted outline button linking directly to `#costs`.
- **Right Showcase Floating Card**:
  - Arched country photo container with subtle scale-on-hover effect.
  - Country flag badge + Top 3 verified study facts with green checkmarks.
  - Direct profile assessment booking button.

### B. Sticky Frosted Glass Subnav (`.dest-sticky-nav-bar`)
- Sticks below the global header (`top: 74px`) with `backdrop-filter: blur(14px)`.
- Quick-jump anchor links with hover pills: `Suitability`, `Courses`, `Fees & Budget`, `Admissions`, `Visa`, `Scholarships`, `FAQs`.

### C. Rich Visual Card Systems
- **Comparison Panels (2-Column Grid)**:
  - Green top-border (`#10B981`) for "Worth exploring / What to evaluate".
  - Amber top-border (`#FFA000`) for "Pause and review / Risk factors".
- **Admission Process Timeline**:
  - Numbered step cards (1 to 4) with dark navy circles and gold numerals.
- **Cost Breakdown Cards**:
  - Separate structured cards for Tuition, Daily Living, Payment Timing, and Immigration Funding Minimums.
- **SSR Accessible FAQ Accordion**:
  - Built with semantic `<details>` and `<summary>` tags so that all answers are 100% crawlable in initial server HTML.

### D. Mobile Floating Sticky Bar (`.dest-mobile-sticky-bar`)
- Fixed at the bottom of screens below 768px.
- Complies with safe area padding: `padding-bottom: max(12px, env(safe-area-inset-bottom))`.
- Displays country title and primary CTA button.

---

## 4. Technical SEO & Data Integrity Checklist

Every new or updated destination page must satisfy these verification steps:

1. **Sitemap (`app/routes/[sitemap.xml].ts`)**:
   - Add `/destinations/study-in-[country]` into `dedicatedDestinations`.
   - Exclude the country ID from the generic `destinationRoutes` mapping.
2. **Internal Navigation Consistency**:
   - Update `app/components/Header.tsx` dropdown links.
   - Update `app/components/Footer.tsx` quick links.
   - Update `app/components/DestinationsSection.tsx` homepage carousel.
   - Update `app/routes/destinations._index.tsx` directory catalog.
3. **Structured Data (JSON-LD `@graph`)**:
   - `Service` schema (serviceType: `"Study abroad education guidance"`).
   - `BreadcrumbList` schema (`Home` -> `Study destinations` -> `Study in [Country]`).
   - `FAQPage` schema matching the visible FAQ records verbatim.
4. **Assessment Lead Funnel Integration**:
   - All primary CTAs point to `/assessment?destination=[country-id]`.
   - `app/routes/assessment.tsx` must parse `searchParams.get("destination")` and automatically pre-select the country in the form state.

---

## 5. Development & Deployment Safety Protocol

- **Zero Push Without Approval**: Never run `git push origin` without explicit user permission.
- **Mandatory Typecheck**: Always run `npm.cmd run typecheck` (`tsc`) and ensure `exit code 0` before staging any changes.
- **Local Review**: Verify all links, responsive layouts (360px, 768px, 1440px), and redirects locally at `http://localhost:3000` before committing.
