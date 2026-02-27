import { VSHero } from "~/components/marketing/visual-search/VSHero";
import { VSProblem } from "~/components/marketing/visual-search/VSProblem";
import { VSProductDemo } from "~/components/marketing/visual-search/VSProductDemo";
import { VSFeatures } from "~/components/marketing/visual-search/VSFeatures";
import { VSResults } from "~/components/marketing/visual-search/VSResults";
import { VSPricingTeaser } from "~/components/marketing/visual-search/VSPricingTeaser";

export function meta() {
  return [
    { title: "Visual Search — Coming Soon | SemanticLab" },
    {
      name: "description",
      content:
        "AI-powered visual search for fashion Shopify stores. Coming soon. Get notified when we launch.",
    },
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
