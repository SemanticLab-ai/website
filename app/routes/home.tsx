import type { Route } from "./+types/home";
import { UmbrellaHero } from "~/components/marketing/home/UmbrellaHero";
import { SocialProofBar } from "~/components/marketing/home/SocialProofBar";
import { FeaturedProduct } from "~/components/marketing/home/FeaturedProduct";
import { ProductGrid } from "~/components/marketing/home/ProductGrid";
import { FoundersSection } from "~/components/FoundersSection";
import { UmbrellaCTA } from "~/components/marketing/home/UmbrellaCTA";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SemanticLab — AI Products That Work As Hard As You Do" },
    {
      name: "description",
      content:
        "AI-powered products for e-commerce and careers: Image Enhancer for professional product photos, SmartApply for tailored resumes. Built by founders, not committees.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <UmbrellaHero />
      <SocialProofBar />
      <FeaturedProduct />
      <ProductGrid />
      <FoundersSection />
      <UmbrellaCTA />
    </>
  );
}
