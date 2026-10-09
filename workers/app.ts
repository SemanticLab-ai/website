import { clientTiemanPresoEnabled, isPreviewBuild } from "../app/lib/deployment";
import { createRequestHandler } from "react-router";

const privateHostname = "tieman.semanticlab.ai";
const privateMedia = /^\/(?:images|videos)\/deck\/tieman\//;
const deckBundle = /^\/assets\/(?:tieman-client-preso|TiemanDeck|DeckPresentation|tieman-deck|sales-deck)[-.]/i;

function noIndex(response: Response) {
  const headers = new Headers(response.headers);
  headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

declare module "react-router" {
  export interface AppLoadContext {
    cloudflare: { env: Env; ctx: ExecutionContext };
  }
}

const requestHandler = createRequestHandler(
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE,
);

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const isPrivateHost = url.hostname === privateHostname;
    const mayServePreso = clientTiemanPresoEnabled &&
      env.SL_FEATURE_CLIENT_TIEMAN_PRESO === "true" &&
      (isPreviewBuild || isPrivateHost);

    if ((privateMedia.test(url.pathname) || deckBundle.test(url.pathname)) && !mayServePreso) {
      return new Response("Not Found", { status: 404 });
    }

    if (isPrivateHost && !mayServePreso) {
      return new Response("Not Found", { status: 404 });
    }

    if (isPrivateHost && url.pathname === "/") {
      return Response.redirect(new URL("/preso", request.url), 302);
    }

    if (isPrivateHost && !url.pathname.startsWith("/preso") &&
        !url.pathname.startsWith("/assets/") &&
        !privateMedia.test(url.pathname) &&
        !["/favicon.ico", "/favicon.png"].includes(url.pathname)) {
      return new Response("Not Found", { status: 404, headers: { "X-Robots-Tag": "noindex, nofollow, noarchive" } });
    }

    if (url.pathname.startsWith("/assets/") || privateMedia.test(url.pathname)) {
      const assetResponse = await env.ASSETS.fetch(request);
      return isPreviewBuild || isPrivateHost ? noIndex(assetResponse) : assetResponse;
    }

    const response = await requestHandler(request, {
      cloudflare: { env, ctx },
    });
    return isPreviewBuild || isPrivateHost ? noIndex(response) : response;
  },
} satisfies ExportedHandler<Env>;
