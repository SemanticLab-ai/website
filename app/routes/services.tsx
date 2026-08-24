import type { Route } from "./+types/services";
import { ServicesHero } from "~/components/marketing/services/ServicesHero";
import { ServicesCapabilities } from "~/components/marketing/services/ServicesCapabilities";
import { EngagementPath } from "~/components/marketing/services/EngagementPath";
import { StrategyEngagement } from "~/components/marketing/services/StrategyEngagement";

export function meta({}: Route.MetaArgs) {
  const title = "Services | SemanticLab Product Innovation Partner";
  const description =
    "Strategy, experience, intelligence and engineering connected around the business opportunity, from first question through launch and evolution.";
  const ogImage = "/images/og-default.jpg";
  const url = "https://semanticlab.ai/services";

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

export default function Services() {
  return (
    <div className="semantic-services">
      <ServicesHero />
      <ServicesCapabilities />
      <EngagementPath />
      <StrategyEngagement />
    </div>
  );
}
