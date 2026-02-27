import { IEHero } from "~/components/marketing/image-enhancer/IEHero";
import { IEPipeline } from "~/components/marketing/image-enhancer/IEPipeline";
import { IEBeforeAfter } from "~/components/marketing/image-enhancer/IEBeforeAfter";
import { IEFeatures } from "~/components/marketing/image-enhancer/IEFeatures";
import { IEIntegrations } from "~/components/marketing/image-enhancer/IEIntegrations";
import { IETargetAudience } from "~/components/marketing/image-enhancer/IETargetAudience";
import { IEPricingTeaser } from "~/components/marketing/image-enhancer/IEPricingTeaser";
import { UmbrellaCTA } from "~/components/marketing/home/UmbrellaCTA";

export function meta() {
  return [
    { title: "Image Enhancer — AI Product Photo Enhancement | SemanticLab" },
    {
      name: "description",
      content:
        "Turn ugly product photos into professional images in seconds. AI-powered background removal, auto-centering, and enhancement.",
    },
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
