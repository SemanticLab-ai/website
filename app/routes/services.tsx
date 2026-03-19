import type { Route } from "./+types/services";
import { ServicesHero } from "~/components/marketing/services/ServicesHero";
import { ServicesTiers } from "~/components/marketing/services/ServicesTiers";
import { WhySemanticLab } from "~/components/marketing/services/WhySemanticLab";
import { ServicesCTA } from "~/components/marketing/services/ServicesCTA";

export function meta({}: Route.MetaArgs) {
  const title = "Services — SemanticLab | From Idea to Launched Product";
  const description =
    "We partner with founders, creators, and growing teams to validate, design, build and ship AI-ready digital platforms — from foundation to growth and scale.";
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
    <>
      <ServicesHero />
      <ServicesTiers />
      <WhySemanticLab />
      <ServicesCTA />
    </>
  );
}
