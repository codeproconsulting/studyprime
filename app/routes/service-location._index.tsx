import { redirect } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  return redirect("/services-location", 301);
}

export default function ServiceLocationRedirect() {
  return null;
}
