import { SyncdHero } from "~/components/marketing/syncd/SyncdHero";
import { SyncdHowItWorks } from "~/components/marketing/syncd/SyncdHowItWorks";
import { SyncdFeatures } from "~/components/marketing/syncd/SyncdFeatures";
import { SyncdTargetAudience } from "~/components/marketing/syncd/SyncdTargetAudience";
import { SyncdAIAddons } from "~/components/marketing/syncd/SyncdAIAddons";
import { SyncdPricing } from "~/components/marketing/syncd/SyncdPricing";
import { SyncdFAQ } from "~/components/marketing/syncd/SyncdFAQ";
import { UmbrellaCTA } from "~/components/marketing/home/UmbrellaCTA";

export function meta() {
  return [
    { title: "Syncd — Pinnacle to Shopify Product Sync | SemanticLab" },
    {
      name: "description",
      content:
        "Automatically sync your Pinnacle auto parts inventory to Shopify. Smart field mapping, SEO templates, tiered markup pricing, and optional AI add-ons. Built for auto parts businesses.",
    },
    {
      property: "og:title",
      content: "Syncd — Pinnacle to Shopify Product Sync",
    },
    {
      property: "og:description",
      content:
        "Sync your Pinnacle inventory to Shopify automatically with intelligent field mapping, SEO templates, and flexible markup pricing.",
    },
  ];
}

export default function SyncdPage() {
  return (
    <>
      <SyncdHero />
      <SyncdHowItWorks />
      <SyncdFeatures />
      <SyncdTargetAudience />
      <SyncdAIAddons />
      <SyncdPricing />
      <SyncdFAQ />
      <UmbrellaCTA />
    </>
  );
}
