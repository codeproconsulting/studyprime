import type { LoaderFunctionArgs } from "@remix-run/server-runtime";
import { destinations, coursesData, services } from "~/data/siteData";

export async function loader({ request }: LoaderFunctionArgs) {
  const host = request.headers.get("host") || "studyprime.withered-hill-9746.workers.dev";
  const protocol = host.includes("localhost") ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  const staticRoutes = [
    "",
    "/services",
    "/destinations",
    "/universities",
    "/courses",
    "/about",
    "/contact",
    "/assessment",
    "/blog",
  ];

  const destinationRoutes = destinations.map((d) => `/destinations/${d.id}`);
  const courseRoutes = coursesData.map((c) => `/courses/${c.slug}`);
  const serviceRoutes = services.map((s) => `/services/${s.id}`);

  const allUrls = [
    ...staticRoutes,
    ...destinationRoutes,
    ...courseRoutes,
    ...serviceRoutes,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (path) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${path === "" ? "daily" : "weekly"}</changefreq>
    <priority>${path === "" ? "1.0" : path.startsWith("/destinations") || path.startsWith("/services") ? "0.9" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "x-content-type-options": "nosniff",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
