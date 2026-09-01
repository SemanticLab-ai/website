import { useLoaderData } from "react-router";
import type { Route } from "./+types/tieman-deck";
import { TiemanDeck } from "~/components/deck/TiemanDeck";
import { salesDeckEnabled } from "~/lib/deployment";
import "~/styles/sales-deck.css";
import "~/styles/tieman-deck.css";

export function loader({ request }: Route.LoaderArgs) {
  if (!salesDeckEnabled) {
    throw new Response("Not Found", { status: 404 });
  }

  const searchParams = new URL(request.url).searchParams;
  const challengeVariant = searchParams.get("challenges") === "story"
    ? "story"
    : "current";

  return { challengeVariant } as const;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SemanticLab × Tieman Tankers | Opportunity" },
    {
      name: "description",
      content: "A private Connected Data & AI Transformation Brief for Tieman Tankers.",
    },
    { name: "robots", content: "noindex, nofollow, noarchive" },
  ];
}

export default function TiemanDeckRoute() {
  const { challengeVariant } = useLoaderData<typeof loader>();

  return (
    <TiemanDeck
      challengeVariant={challengeVariant}
    />
  );
}
