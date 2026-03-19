import { VSHero } from "~/components/marketing/visual-search/VSHero";
import { VSProblem } from "~/components/marketing/visual-search/VSProblem";
import { VSProductDemo } from "~/components/marketing/visual-search/VSProductDemo";
import { VSFeatures } from "~/components/marketing/visual-search/VSFeatures";
import { VSResults } from "~/components/marketing/visual-search/VSResults";
import { VSPricingTeaser } from "~/components/marketing/visual-search/VSPricingTeaser";

export function meta() {
  const title =
    "Visual Search — AI-Powered Shopify Discovery | SemanticLab";
  const description =
    "AI-powered visual search for fashion and lifestyle Shopify stores. Let your shoppers find products by uploading photos instead of typing keywords. Coming soon.";
  const ogImage = "/images/og-default.jpg";
  const url = "https://semanticlab.ai/products/visual-search";

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

export default function VisualSearchPage() {
  return (
    <>
      <VSHero />
      <VSProblem />
      <VSProductDemo />
      <VSFeatures />
      <VSResults />
      <VSPricingTeaser />
    </>
  );
}
