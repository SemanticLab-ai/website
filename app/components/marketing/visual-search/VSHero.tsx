import { Bell } from "lucide-react";
import { ComingSoonBadge } from "~/components/shared/ComingSoonBadge";
import { HeroSection } from "~/components/shared/HeroSection";

export function VSHero() {
  return (
    <HeroSection
      badge={<ComingSoonBadge className="product-hero__coming-soon mb-8" />}
      title={
        <>
          <span className="block">The Visual Search</span>
          {" "}
          <span className="block mt-2">
            Your Shoppers{" "}
            <span className="gradient-text-lime">Deserve</span>
          </span>
        </>
      }
      subtitle={
        <>
          Fashion-specific AI that understands{" "}
          <span className="text-white font-semibold">"like this but longer sleeves"</span>
          {" "}and turns browsing into buying.
        </>
      }
    >
      <div className="product-hero__notify-container mb-12">
        <a
          href="mailto:hello@semanticlab.ai?subject=Visual Search - Get Notified"
          className="product-hero__action product-hero__notify inline-flex items-center justify-center gap-3 h-14 px-8 text-lg rounded-full bg-lime hover:bg-lime-dark text-dark-bg font-semibold shadow-xl shadow-lime/20 transition-all duration-300 hover:scale-105 group"
        >
          <Bell className="w-5 h-5" aria-hidden="true" />
          Get Notified When We Launch
        </a>
      </div>
    </HeroSection>
  );
}
