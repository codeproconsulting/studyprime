import type { LoaderFunctionArgs } from "@remix-run/server-runtime";
import { destinations, coursesData, services } from "~/data/siteData";
import { CANONICAL_BASE_URL } from "~/utils/seo";
import { getAllPostSlugs } from "~/services/wordpress.server";

export async function loader({ request, context }: LoaderFunctionArgs) {
  const host = request.headers.get("host") || "";
  const isLocal = host.includes("localhost") || host.includes("127.0.0.1");
  const baseUrl = isLocal ? `http://${host}` : CANONICAL_BASE_URL;

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
    "/privacy",
    "/terms",
    "/services-location",
    "/services-location/islamabad",
    "/services-location/islamabad/study-abroad-consultant",
    "/study-abroad-consultant-islamabad",
  ];

  const dedicatedDestinations = [
    "/destinations/study-in-france",
    "/destinations/study-in-new-zealand",
    "/destinations/study-in-hungary",
    "/destinations/study-in-australia",
  ];

  const excludedFromGeneric = ["france", "new-zealand", "hungary", "australia"];
  const destinationRoutes = destinations
    .filter((d) => !excludedFromGeneric.includes(d.id.toLowerCase()))
    .map((d) => `/destinations/${d.id}`);

  const courseRoutes = coursesData.map((c) => `/courses/${c.slug}`);
  const serviceRoutes = services.map((s) => `/services/${s.id}`);

  // Fetch dynamic blog article routes from WordPress / fallback
  let blogPostRoutes: string[] = [];
  try {
    const slugs = await getAllPostSlugs(context);
    blogPostRoutes = slugs.map((slug) => `/blog/${slug}`);
  } catch (err) {
    console.error("Could not fetch blog slugs for sitemap:", err);
  }

  const allUrls = [
    ...staticRoutes,
    ...dedicatedDestinations,
    ...destinationRoutes,
    ...courseRoutes,
    ...serviceRoutes,
    ...blogPostRoutes,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (path) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${path === "" ? "daily" : path.startsWith("/blog/") ? "daily" : "weekly"}</changefreq>
    <priority>${
      path === ""
        ? "1.0"
        : path.startsWith("/destinations") || path.startsWith("/services")
        ? "0.9"
        : path.startsWith("/blog")
        ? "0.8"
        : "0.7"
    }</priority>
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
