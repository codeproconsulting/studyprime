import { redirect, type LoaderFunctionArgs } from "@remix-run/node";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const search = url.search;
  return redirect(`/destinations/study-in-uk${search}`, 301);
};

export default function StudyInUkRedirect() {
  return null;
}
