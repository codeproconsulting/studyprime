import { redirect, type LoaderFunctionArgs } from "@remix-run/node";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return redirect("/destinations/study-in-australia", 301);
};

export default function StudyInAustraliaRedirect() {
  return null;
}
