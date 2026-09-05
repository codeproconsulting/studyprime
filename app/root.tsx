import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import stylesHref from "~/styles/app.css?url";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { getGlobalStructuredData, CANONICAL_BASE_URL } from "~/utils/seo";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesHref },
  { rel: "icon", type: "image/png", href: "/images/cropped-for-website-1-scaled-1-192x192.png" },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Study Prime | Study Abroad Visa & Admission Consultants in Pakistan" },
    {
      name: "description",
      content:
        "Study Prime is Pakistan's premier overseas education consultancy providing personalized university admissions and study visa guidance for UK, USA, Australia, Canada, and Europe.",
    },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { property: "og:site_name", content: "Study Prime" },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "en_PK" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
};

export default function App() {
  const structuredData = getGlobalStructuredData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
