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

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesHref },
  { rel: "icon", type: "image/png", href: "/images/cropped-for-website-1-scaled-1-192x192.png" },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Study Prime | Study Abroad Experts - Visa & Admissions Consultancy" },
    {
      name: "description",
      content:
        "Study Prime is Pakistan's premier overseas education consultancy providing personalized university admissions and study visa guidance for UK, USA, Australia, Canada, and Europe.",
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        
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
