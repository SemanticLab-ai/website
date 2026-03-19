import { SyncdHero } from "~/components/marketing/syncd/SyncdHero";
import { SyncdHowItWorks } from "~/components/marketing/syncd/SyncdHowItWorks";
import { SyncdFeatures } from "~/components/marketing/syncd/SyncdFeatures";
import { SyncdTargetAudience } from "~/components/marketing/syncd/SyncdTargetAudience";
import { SyncdAIAddons } from "~/components/marketing/syncd/SyncdAIAddons";
import { SyncdPricing } from "~/components/marketing/syncd/SyncdPricing";
import { SyncdFAQ } from "~/components/marketing/syncd/SyncdFAQ";
import { UmbrellaCTA } from "~/components/marketing/home/UmbrellaCTA";

export function meta() {
  const title = "Syncd — Pinnacle to Shopify Product Sync | SemanticLab";
  const description =
    "Automatically sync your Pinnacle auto parts inventory to Shopify. Smart field mapping, SEO templates, tiered markup pricing, and optional AI-powered add-ons.";
  const ogImage = "/images/og-default.jpg";
  const url = "https://semanticlab.ai/products/syncd";

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
