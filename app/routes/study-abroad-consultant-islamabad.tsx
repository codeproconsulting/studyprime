import type { MetaFunction } from "@remix-run/node";
import { StudyAbroadConsultantIslamabadView } from "~/components/StudyAbroadConsultantIslamabadView";
import { CANONICAL_BASE_URL } from "~/utils/seo";

export const meta: MetaFunction = () => {
  const canonicalUrl = `${CANONICAL_BASE_URL}/study-abroad-consultant-islamabad`;

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

export default function StudyAbroadConsultantIslamabadRoute() {
  return (
    <StudyAbroadConsultantIslamabadView
      canonicalPath="/study-abroad-consultant-islamabad"
    />
  );
}
