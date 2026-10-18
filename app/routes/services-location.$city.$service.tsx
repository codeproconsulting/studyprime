import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useParams } from "@remix-run/react";
import { StudyAbroadConsultantIslamabadView } from "~/components/StudyAbroadConsultantIslamabadView";
import { CANONICAL_BASE_URL } from "~/utils/seo";

export const meta: MetaFunction = ({ params }) => {
  const city = (params.city || "islamabad").toLowerCase();
  const service = (params.service || "study-abroad-consultant").toLowerCase();
  const canonicalUrl = `${CANONICAL_BASE_URL}/services-location/${city}/${service}`;

  return [
    { title: "Study Abroad Consultant in Islamabad — Free Assessment | Study Prime" },
    {
      name: "description",
      content:
        "Honest study abroad consultancy at Galleria Mall, I-8 Markaz, Islamabad. Free profile assessment with a written plan in 48 hours — UK, Europe & NZ admissions, visas, IELTS. No fake guarantees.",
    },
    { property: "og:title", content: "Study Abroad Consultant in Islamabad — Free Assessment | Study Prime" },
    {
      property: "og:description",
      content:
        "Honest study abroad consultancy at Galleria Mall, I-8 Markaz, Islamabad. Free profile assessment with a written plan in 48 hours — UK, Europe & NZ admissions, visas, IELTS. No fake guarantees.",
    },
    { property: "og:url", content: canonicalUrl },
    { tagName: "link", rel: "canonical", href: canonicalUrl },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const city = (params.city || "islamabad").toLowerCase();
  const service = (params.service || "study-abroad-consultant").toLowerCase();
  return json({ city, service });
}

export default function ServicesCityServiceRoute() {
  const params = useParams();
  const city = (params.city || "islamabad").toLowerCase();
  const service = (params.service || "study-abroad-consultant").toLowerCase();

  return (
    <StudyAbroadConsultantIslamabadView
      canonicalPath={`/services-location/${city}/${service}`}
    />
  );
}
