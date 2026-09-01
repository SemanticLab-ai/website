import type { Route } from "./+types/sales-deck";
import { SalesDeck } from "~/components/deck/SalesDeck";
import { salesDeckEnabled } from "~/lib/deployment";
import "~/styles/sales-deck.css";

export function loader() {
  if (!salesDeckEnabled) {
    throw new Response("Not Found", { status: 404 });
  }

  return null;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SemanticLab | Product Innovation Partner" },
    {
      name: "description",
      content:
        "A private presentation of SemanticLab's product innovation capability, built products and founder experience.",
    },
    { name: "robots", content: "noindex, nofollow, noarchive" },
  ];
}

export default function SalesDeckRoute() {
  return <SalesDeck />;
}
