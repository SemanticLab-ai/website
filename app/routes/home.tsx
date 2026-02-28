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
  return [
    { title: "SemanticLab — Founder-Led AI Product Studio" },
    {
      name: "description",
      content:
        "SemanticLab is a founder-led product studio helping ambitious individuals turn validated ideas into AI-ready digital platforms — from strategy to launch.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <StudioHero />
      <OurStory />
      <WhatWeDo />
      <HowWereDifferent />
      <PlatformsBuilt />
      <WhoWeWorkWith />
      <OurProcess />
      <StudioCTA />
    </>
  );
}
