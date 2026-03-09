import { ArrowRight, DollarSign, Check, Star } from "lucide-react";
import { SectionWrapper } from "~/components/shared/SectionWrapper";
import { SectionHeader } from "~/components/shared/SectionHeader";
import { CTAButton } from "~/components/shared/CTAButton";

const plans = [
  {
    name: "Lite",
    price: 100,
    skuLimit: "10,000 SKUs",
    syncInterval: "4-hour sync",
    features: [
      "Smart field mapping",
      "Template-based descriptions",
      "Basic image sync",
      "SEO optimization templates",
      "Tiered markup pricing",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: 200,
    skuLimit: "50,000 SKUs",
    syncInterval: "Hourly sync",
    features: [
      "Everything in Lite, plus:",
      "Advanced image sync",
      "Priority email support",
      "Sync analytics dashboard",
      "Faster sync frequency",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: 500,
    skuLimit: "100,000 SKUs",
    syncInterval: "10-minute sync",
    features: [
      "Everything in Pro, plus:",
      "Dedicated support channel",
      "Priority sync queue",
      "Custom webhook notifications",
      "Near real-time updates",
    ],
    popular: false,
  },
];

export function SyncdPricing() {
  return (
    <SectionWrapper bg="dark-bg" id="pricing">
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-lime/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal/5 rounded-full blur-3xl" />

      <SectionHeader
        badge="Pricing"
        badgeIcon={DollarSign}
        title={
          <>
            Simple,{" "}
            <span className="gradient-text-lime">Transparent Pricing</span>
          </>
        }
        subtitle="All plans include smart field mapping, SEO templates, and tiered markup pricing. No hidden fees."
      />

      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto mb-16">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative glass-card rounded-2xl overflow-hidden hover-lift ${
              plan.popular ? "border-lime/30 ring-1 ring-lime/20" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-lime to-teal text-center py-2">
                <span className="text-xs font-bold uppercase tracking-wider text-dark-bg flex items-center justify-center gap-1">
                  <Star className="w-3 h-3" fill="currentColor" />
                  Most Popular
                </span>
              </div>
            )}

            <div className={`p-8 ${plan.popular ? "pt-14" : ""}`}>
              <h3 className="text-lg font-bold text-white mb-1">
                {plan.name}
              </h3>
              <p className="text-sm text-white/40 mb-6">
                {plan.skuLimit} &middot; {plan.syncInterval}
              </p>

              <div className="mb-8">
                <span className="text-5xl font-bold text-white">
                  ${plan.price}
                </span>
                <span className="text-white/40 ml-1">/mo</span>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-lime/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-lime" />
                    </div>
                    <span className="text-sm text-white/70">{feature}</span>
                  </div>
                ))}
              </div>

              <CTAButton
                variant={plan.popular ? "primary" : "secondary"}
                href="https://apps.shopify.com"
                external
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </CTAButton>
            </div>
          </div>
        ))}
      </div>

      {/* Enterprise callout */}
      <div className="max-w-3xl mx-auto">
        <div className="relative glass-card rounded-2xl p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
          <div className="relative text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Need a custom solution?
            </h3>
            <p className="text-white/50 mb-6 max-w-lg mx-auto">
              For businesses with 100,000+ SKUs, custom integrations, or
              multi-store setups — let&apos;s talk.
            </p>
            <CTAButton
              variant="secondary"
              href="mailto:hello@semanticlab.ai"
              external
            >
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </CTAButton>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
