import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import stylesHref from "~/styles/app.css?url";
import { useState } from "react";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { ConsultationModal } from "~/components/ConsultationModal";

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
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header onOpenConsultation={() => setModalOpen(true)} />
        <main>
          <Outlet context={{ openConsultation: () => setModalOpen(true) }} />
        </main>
        <Footer />
        <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
