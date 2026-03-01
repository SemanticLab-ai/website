import type { Route } from "./+types/services";
import { ServicesHero } from "~/components/marketing/services/ServicesHero";
import { ServicesTiers } from "~/components/marketing/services/ServicesTiers";
import { WhySemanticLab } from "~/components/marketing/services/WhySemanticLab";
import { ServicesCTA } from "~/components/marketing/services/ServicesCTA";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Services — SemanticLab | From Idea to Launched Product" },
    {
      name: "description",
      content:
        "We partner with founders, creators, and growing teams to validate, design, build and ship AI-ready digital platforms — from foundation to growth.",
    },
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
