import { IEHero } from "~/components/marketing/image-enhancer/IEHero";
import { IEPipeline } from "~/components/marketing/image-enhancer/IEPipeline";
import { IEBeforeAfter } from "~/components/marketing/image-enhancer/IEBeforeAfter";
import { IEFeatures } from "~/components/marketing/image-enhancer/IEFeatures";
import { IEIntegrations } from "~/components/marketing/image-enhancer/IEIntegrations";
import { IETargetAudience } from "~/components/marketing/image-enhancer/IETargetAudience";
import { IEPricingTeaser } from "~/components/marketing/image-enhancer/IEPricingTeaser";
import { UmbrellaCTA } from "~/components/marketing/home/UmbrellaCTA";

export function meta() {
  const title =
    "Image Enhancer — AI Product Photo Enhancement | SemanticLab";
  const description =
    "Turn ugly product photos into professional images in seconds. AI-powered background removal, auto-centering, and enhancement for e-commerce sellers and brands.";
  const ogImage = "/images/og-default.jpg";
  const url = "https://semanticlab.ai/products/image-enhancer";

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

export default function ImageEnhancerPage() {
  return (
    <>
      <IEHero />
      <IEPipeline />
      <IEBeforeAfter />
      <IEFeatures />
      <IEIntegrations />
      <IETargetAudience />
      <IEPricingTeaser />
      <UmbrellaCTA />
    </>
  );
}
