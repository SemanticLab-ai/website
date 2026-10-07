import type { Route } from "./+types/home";
import { networkMotionEnabled } from "~/lib/deployment";
import { IntelligentHome } from "~/components/marketing/home/IntelligentHome";

export function meta({}: Route.MetaArgs) {
  const title = "SemanticLab - AI systems that do the actual work";
  const description =
    "SemanticLab is a founder-led AI studio. We design, build and deploy custom AI systems that remove busywork, unlock revenue and compound every month they run.";
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
  return {
    networkMotion:
      networkMotionEnabled &&
      context.cloudflare.env.SL_FEATURE_NETWORK_MOTION === "true",
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <IntelligentHome networkMotion={loaderData.networkMotion} />;
}
