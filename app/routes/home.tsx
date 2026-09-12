import type { Route } from "./+types/home";
import { galaxyMotionEnabled } from "~/lib/deployment";
import { IntelligentHome } from "~/components/marketing/home/IntelligentHome";

export function meta({}: Route.MetaArgs) {
  const title = "SemanticLab - Designing Intelligent Businesses";
  const description =
    "SemanticLab is a product innovation partner helping founders and business leaders move from strategic opportunity to intelligent products and systems.";
  const ogImage = "/images/og-default.jpg";
  const url = "https://semanticlab.ai/";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImage },
    { property: "og:url", content: url },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
    { tagName: "link", rel: "canonical", href: url },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { galaxyMotion: galaxyMotionEnabled && context.cloudflare.env.SL_DEPLOY_ENV === "preview" && context.cloudflare.env.SL_FEATURE_GALAXY_MOTION === "true" };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <IntelligentHome galaxyMotion={loaderData.galaxyMotion} />;
}
