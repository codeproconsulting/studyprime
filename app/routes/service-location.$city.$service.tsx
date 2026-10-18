import { redirect } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ params }: LoaderFunctionArgs) {
  const city = params.city || "islamabad";
  const service = params.service || "study-abroad-consultant";
  return redirect(`/services-location/${city}/${service}`, 301);
}

export default function ServiceLocationCityServiceRedirect() {
  return null;
}
