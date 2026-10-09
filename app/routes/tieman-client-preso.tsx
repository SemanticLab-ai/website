import { useLoaderData } from "react-router";
import type { Route } from "./+types/tieman-client-preso";
import { TiemanDeck } from "~/components/deck/TiemanDeck";
import { clientTiemanPresoEnabled, isPreviewBuild } from "~/lib/deployment";
import "~/styles/sales-deck.css";
import "~/styles/tieman-deck.css";

const privateHostname = "tieman.semanticlab.ai";

export function loader({ request, context }: Route.LoaderArgs) {
  const url = new URL(request.url);
  if (!clientTiemanPresoEnabled ||
      context.cloudflare.env.SL_FEATURE_CLIENT_TIEMAN_PRESO !== "true" ||
      (!isPreviewBuild && url.hostname !== privateHostname)) {
    throw new Response("Not Found", { status: 404 });
  }

  const challengeVariant = url.searchParams.get("challenges") === "current" ? "current" : "story";
  const proofVariant = url.searchParams.get("proof") === "outcomes" ? "outcomes" : "current";
  const sessionVariant = url.searchParams.get("session") === "discovery" ? "discovery" : "presentation";

  return { challengeVariant, proofVariant, sessionVariant } as const;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SemanticLab × Tieman Tankers | Opportunity" },
    { name: "description", content: "A private Connected Data & AI Transformation Brief for Tieman Tankers." },
    { name: "robots", content: "noindex, nofollow, noarchive" },
  ];
}

export default function TiemanClientPreso() {
  const { challengeVariant, proofVariant, sessionVariant } = useLoaderData<typeof loader>();
  return <TiemanDeck challengeVariant={challengeVariant} proofVariant={proofVariant} sessionVariant={sessionVariant} />;
}
