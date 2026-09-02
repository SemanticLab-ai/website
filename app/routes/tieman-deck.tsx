import { useLoaderData } from "react-router";
import type { Route } from "./+types/tieman-deck";
import { TiemanDeck } from "~/components/deck/TiemanDeck";
import { salesDeckEnabled } from "~/lib/deployment";
import "~/styles/sales-deck.css";
import "~/styles/tieman-deck.css";

const tiemanDeferredImages = [
  "/images/deck/tieman/raihan-razi.webp",
  "/images/deck/tieman/naila-rahman.webp",
  "/images/deck/tieman/chemical.webp",
] as const;

export const links: Route.LinksFunction = () => [
  ...tiemanDeferredImages.map((href) => ({
    rel: "prefetch" as const,
    as: "image" as const,
    href,
    type: "image/webp",
  })),
];

export function loader({ request }: Route.LoaderArgs) {
  if (!salesDeckEnabled) {
    throw new Response("Not Found", { status: 404 });
  }

  const searchParams = new URL(request.url).searchParams;
  const challengeVariant = searchParams.get("challenges") === "current"
    ? "current"
    : "story";

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
