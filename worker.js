import { createRequestHandler } from "@remix-run/server-runtime";
import * as build from "./build/server/index.js";

const handleRequest = createRequestHandler(build, "production");

export default {
  async fetch(request, env, ctx) {
    return handleRequest(request, {
      cloudflare: { env, ctx },
    });
  },
};
