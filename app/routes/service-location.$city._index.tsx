import { redirect } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ params }: LoaderFunctionArgs) {
  const city = params.city || "islamabad";
  return redirect(`/services-location/${city}`, 301);
}

export default function ServiceLocationCityRedirect() {
  return null;
}
