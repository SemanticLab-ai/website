import type { Route } from "./+types/home";
import { StudioHero } from "~/components/marketing/home/StudioHero";
import { OurStory } from "~/components/marketing/home/OurStory";
import { WhatWeDo } from "~/components/marketing/home/WhatWeDo";
import { HowWereDifferent } from "~/components/marketing/home/HowWereDifferent";
import { PlatformsBuilt } from "~/components/marketing/home/PlatformsBuilt";
import { WhoWeWorkWith } from "~/components/marketing/home/WhoWeWorkWith";
import { OurProcess } from "~/components/marketing/home/OurProcess";
import { StudioCTA } from "~/components/marketing/home/StudioCTA";

export function meta({}: Route.MetaArgs) {
  const title = "SemanticLab — Founder-Led AI Product Studio";
  const description =
    "SemanticLab is a founder-led product studio helping ambitious individuals turn validated ideas into AI-ready digital platforms — from strategy to launch.";
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

export default function Home() {
  return (
    <>
      <StudioHero />
      <WhatWeDo />
      <PlatformsBuilt />
      <HowWereDifferent />
      <WhoWeWorkWith />
      <OurProcess />
      <OurStory />
      <StudioCTA />
    </>
  );
}
