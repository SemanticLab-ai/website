import {
  ArrowLeftRight,
  DollarSign,
  Search,
  Image,
  Clock,
  History,
} from "lucide-react";
import { SectionWrapper } from "~/components/shared/SectionWrapper";
import { SectionHeader } from "~/components/shared/SectionHeader";
import { FeatureCard } from "~/components/shared/FeatureCard";

export function SyncdFeatures() {
  const features = [
    {
      icon: ArrowLeftRight,
      title: "Smart Field Mapping",
      description:
        "Map 8 Pinnacle fields to Shopify — titles, descriptions, vendor, tags, pricing, SKU, and more. Drag-and-drop template builder for dynamic product titles.",
      gradient: "from-lime to-emerald-400",
    },
    {
      icon: DollarSign,
      title: "Tiered Markup Pricing",
      description:
        "Set minimum sync prices and tiered markup rules that automatically calculate retail pricing from your cost data. Flexible rules per price band.",
      gradient: "from-teal to-cyan-400",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Auto-generate SEO-friendly titles, descriptions, and URL handles. Templates ensure every product listing is optimized for search out of the box.",
      gradient: "from-lime to-teal",
    },
    {
      icon: Image,
      title: "Image Sync & Enhancement",
      description:
        "Pull product images from Pinnacle and sync them to Shopify with configurable alt text. Pair with our AI Image Enhancer add-on for pro results.",
      gradient: "from-teal to-cyan-400",
    },
    {
      icon: Clock,
      title: "Flexible Sync Intervals",
      description:
        "Choose sync frequency that fits your business — from every 10 minutes on Premium to every 4 hours on Lite. Background processing via Temporal workflows.",
      gradient: "from-lime to-emerald-400",
    },
    {
      icon: History,
      title: "Version History",
      description:
        "Every configuration change is versioned automatically. Compare, restore, or roll back to any previous config with one click. Nothing is ever lost.",
      gradient: "from-lime to-teal",
    },
  ];

  return (
    <SectionWrapper bg="dark-bg">
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-lime/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-teal/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <SectionHeader
        badge="Features"
        badgeIcon={ArrowLeftRight}
        title={
          <>
            Everything You Need to{" "}
            <span className="gradient-text-lime">Sync Smarter</span>
          </>
        }
        subtitle="Built specifically for auto parts businesses running Pinnacle inventory systems."
      />

      <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            gradient={feature.gradient}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
