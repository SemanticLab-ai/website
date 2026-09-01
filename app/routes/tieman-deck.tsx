import type { Route } from "./+types/tieman-deck";
import { TiemanDeck } from "~/components/deck/TiemanDeck";
import { salesDeckEnabled } from "~/lib/deployment";
import "~/styles/sales-deck.css";
import "~/styles/tieman-deck.css";

export function loader() {
  if (!salesDeckEnabled) {
    throw new Response("Not Found", { status: 404 });
  }

  return null;
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
  return <TiemanDeck />;
}
