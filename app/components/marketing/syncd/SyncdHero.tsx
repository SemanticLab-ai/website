import { ArrowRight, RefreshCw } from "lucide-react";
import { HeroSection } from "~/components/shared/HeroSection";

export function SyncdHero() {
  return (
    <HeroSection
      badgeIcon={RefreshCw}
      badgeText="Shopify Product Sync"
      title={
        <>
          Sync Your{" "}
          <span className="gradient-text-lime">Pinnacle Inventory</span> to
          Shopify Automatically
        </>
      }
      subtitle={
        <>
          Smart field mapping, SEO templates, and tiered markup pricing.
          Built for{" "}
          <span className="text-white font-semibold">
            auto parts businesses
          </span>{" "}
          that run on Pinnacle.
        </>
      }
      primaryCTA={{
        label: "Install on Shopify",
        href: "https://apps.shopify.com",
        icon: ArrowRight,
        external: true,
      }}
      secondaryCTA={{
        label: "See Pricing",
        href: "#pricing",
      }}
      showFounders
      founderTagline="Founder-led. Dedicated support."
    />
  );
}
