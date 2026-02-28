import { Button } from "~/components/ui/button";
import { Check, Star } from "lucide-react";
import { Link } from "react-router";
import type { PricingTier } from "~/lib/pricing";

export function PricingCard({ tier }: { tier: PricingTier }) {
  const isExternal = tier.ctaHref.startsWith("mailto:");

  return (
    <div
      className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
        tier.popular
          ? "border-2 border-lime shadow-lg shadow-lime/10 scale-105 bg-dark-card"
          : "glass-card"
      }`}
    >
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-2 bg-lime text-dark-bg text-sm font-semibold rounded-full flex items-center gap-2 shadow-lg">
            <Star className="w-4 h-4 fill-dark-bg" />
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-display font-bold text-white mb-2">
          {tier.name}
        </h3>
        <p className="text-white/40 text-sm">{tier.description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          {typeof tier.price === "number" ? (
            <>
              <span className="text-5xl font-display font-bold text-white">
                ${tier.price}
              </span>
              {tier.period && <span className="text-white/40">{tier.period}</span>}
            </>
          ) : (
            <span className="text-3xl font-display font-bold text-white">{tier.price}</span>
          )}
        </div>
        <p className="text-sm text-white/30 mt-2">{tier.specs}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center ${
                tier.popular ? "bg-lime/10" : "bg-teal/10"
              }`}
            >
              <Check className={`w-3 h-3 ${tier.popular ? "text-lime" : "text-teal"}`} />
            </div>
            <span className="text-white/50">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        size="lg"
        className={`w-full h-12 rounded-full font-semibold ${
          tier.popular
            ? "bg-lime hover:bg-lime-dark text-dark-bg shadow-lg shadow-lime/20"
            : "bg-white/10 hover:bg-white/15 text-white border border-white/10"
        }`}
        asChild
      >
        {isExternal ? (
          <a href={tier.ctaHref}>{tier.cta}</a>
        ) : (
          <Link to={tier.ctaHref}>{tier.cta}</Link>
        )}
      </Button>
    </div>
  );
}
