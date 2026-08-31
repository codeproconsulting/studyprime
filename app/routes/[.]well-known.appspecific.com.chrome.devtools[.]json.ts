import type { LoaderFunctionArgs } from "@remix-run/server-runtime";

export async function loader({ request }: LoaderFunctionArgs) {
  return new Response("{}", {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
