import { copyFileSync, mkdirSync, writeFileSync } from "node:fs";

mkdirSync("dist/server", { recursive: true });
mkdirSync("dist/.openai", { recursive: true });
copyFileSync(".openai/hosting.json", "dist/.openai/hosting.json");

writeFileSync(
  "dist/server/index.js",
  String.raw`async function assetFetch(env, request) {
  if (!env || !env.ASSETS) {
    return new Response("Static asset binding is unavailable.", { status: 500 });
  }
  return env.ASSETS.fetch(request);
}

function withPath(request, pathname) {
  const url = new URL(request.url);
  url.pathname = pathname;
  return new Request(url, request);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let response = await assetFetch(env, request);

    if (response.status !== 404 || url.pathname.includes(".")) {
      return response;
    }

    const htmlPath = url.pathname.replace(/\/$/, "") + ".html";
    response = await assetFetch(env, withPath(request, htmlPath));
    if (response.status !== 404) {
      return response;
    }

    return assetFetch(env, withPath(request, "/404.html"));
  },
};
`,
);
