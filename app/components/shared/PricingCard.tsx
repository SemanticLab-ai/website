import { Button } from "~/components/ui/button";
import { Check, Star } from "lucide-react";
import { Link } from "react-router";
import type { PricingTier } from "~/lib/pricing";

export function PricingCard({ tier }: { tier: PricingTier }) {
  const isExternal = tier.ctaHref.startsWith("mailto:");

  return (
    <div
      className={`relative rounded-3xl p-8 border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
        tier.popular
          ? "border-vector-rose shadow-lg scale-105 bg-gradient-to-br from-vector-rose/5 to-neural-teal/5"
          : "border-slate/10 bg-white"
      }`}
    >
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-2 bg-gradient-to-r from-vector-rose to-vector-rose-dark text-white text-sm font-semibold rounded-full flex items-center gap-2 shadow-lg">
            <Star className="w-4 h-4 fill-white" />
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-display font-bold text-charcoal mb-2">
          {tier.name}
        </h3>
        <p className="text-slate text-sm">{tier.description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          {typeof tier.price === "number" ? (
            <>
              <span className="text-5xl font-display font-bold text-charcoal">
                ${tier.price}
              </span>
              {tier.period && <span className="text-slate">{tier.period}</span>}
            </>
          ) : (
            <span className="text-3xl font-display font-bold text-charcoal">{tier.price}</span>
          )}
        </div>
        <p className="text-sm text-slate/70 mt-2">{tier.specs}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center ${
                tier.popular ? "bg-vector-rose/10" : "bg-neural-teal/10"
              }`}
            >
              <Check className={`w-3 h-3 ${tier.popular ? "text-vector-rose" : "text-neural-teal"}`} />
            </div>
            <span className="text-slate">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        size="lg"
        className={`w-full h-12 rounded-full font-semibold ${
          tier.popular
            ? "bg-gradient-to-r from-vector-rose to-vector-rose-dark hover:from-vector-rose-dark hover:to-vector-rose text-white shadow-lg"
            : "bg-charcoal hover:bg-charcoal/90 text-white"
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
