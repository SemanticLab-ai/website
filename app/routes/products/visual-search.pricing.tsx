import { Button } from "~/components/ui/button";
import { Check, Sparkles, Mail, Building, HelpCircle, Bell, DollarSign } from "lucide-react";
import { visualSearchPricing } from "~/lib/pricing";
import { PricingCard } from "~/components/shared/PricingCard";
import { FAQAccordion } from "~/components/shared/FAQAccordion";
import { ComingSoonBadge } from "~/components/shared/ComingSoonBadge";

export function meta() {
  return [
    { title: "Pricing — Visual Search | SemanticLab" },
    {
      name: "description",
      content: "Visual Search pricing. Plans from $99/month for growing Shopify stores. Coming soon.",
    },
  ];
}

const faqs = [
  {
    question: "What if I only have 200 products?",
    answer: "Our Starter plan is designed for growing catalogs. You'll still see conversion lift even with a smaller inventory.",
  },
  {
    question: "Do you store customer data?",
    answer: "No. We never see or store shopper PII. We only index your product catalog (which is already public on your store).",
  },
  {
    question: "What if it doesn't work for my brand?",
    answer: "14-day free trial, no credit card required. If you're not seeing results, we'll help optimize or you can cancel anytime.",
  },
  {
    question: "Can I customize the widget's look?",
    answer: "Yes! It auto-detects your theme colors, but you can fully customize placement, colors, button text, and more.",
  },
  {
    question: "What happens if you shut down?",
    answer: "We're profitable from day one and building for the long term. Your store never depends on us for checkout or core functionality.",
  },
];

export default function VisualSearchPricing() {
  return (
    <div className="relative overflow-hidden">
      {/* Coming Soon Banner */}
      <div className="bg-neural-teal/10 border-b border-neural-teal/20">
        <div className="container mx-auto px-6 py-3 flex items-center justify-center gap-3">
          <ComingSoonBadge />
          <span className="text-sm text-charcoal">Visual Search is in development. Get notified when we launch.</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pearl via-white to-blush" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-neural-teal/15 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full border border-signal-amber/20 shadow-lg mb-8">
              <DollarSign className="w-4 h-4 text-signal-amber" />
              <span className="text-sm font-semibold text-charcoal">Visual Search Pricing</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-display font-bold text-charcoal leading-tight mb-6">
              Pricing That{" "}
              <span className="gradient-text-teal italic">Grows With You</span>
            </h1>

            <p className="text-xl text-slate max-w-2xl mx-auto">
              Simple, transparent pricing. No hidden fees. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {visualSearchPricing.map((tier) => (
              <PricingCard key={tier.name} tier={tier} />
            ))}
          </div>

          <div className="flex items-center justify-center gap-6 mt-12 text-sm text-slate">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-neural-teal" />
              14-day free trial
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-signal-amber" />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-vector-rose" />
              Cancel anytime
            </span>
          </div>
        </div>
      </section>

      {/* All Plans Include */}
      <section className="relative py-16 bg-gradient-to-b from-pearl to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neural-teal to-neural-teal-dark flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-display font-bold text-charcoal">All Plans Include</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Unlimited product indexing",
                  "Real-time analytics dashboard",
                  "Mobile & desktop optimized",
                  "Free updates & new features",
                  "Direct founder support",
                  "Automatic catalog sync",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-neural-teal flex-shrink-0" />
                    <span className="text-slate">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section className="relative py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-charcoal to-slate rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 grid-pattern" />
              </div>
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full mb-6">
                  <Building className="w-4 h-4 text-signal-amber" />
                  <span className="text-sm font-semibold text-white">Enterprise</span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                  Need a Custom Solution?
                </h2>
                <p className="text-white/70 mb-8 max-w-xl mx-auto">
                  For stores with 10k+ SKUs or custom integration requirements, we offer tailored enterprise plans.
                </p>
                <Button
                  size="lg"
                  className="h-12 px-8 rounded-full bg-white text-charcoal hover:bg-white/90 font-semibold"
                  asChild
                >
                  <a href="mailto:hello@semanticlab.ai?subject=Visual Search Enterprise" className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    Contact Sales
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 bg-gradient-to-b from-white to-pearl">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full border border-slate/10 shadow-lg mb-6">
                <HelpCircle className="w-4 h-4 text-vector-rose" />
                <span className="text-sm font-semibold text-charcoal">FAQ</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal">
                Frequently Asked <span className="gradient-text-rose italic">Questions</span>
              </h2>
            </div>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-gradient-to-br from-neural-teal/10 via-white to-vector-rose/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate/10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Be the First to <span className="gradient-text-teal italic">Know</span>
              </h2>
              <p className="text-lg text-slate mb-8">
                Visual Search is coming soon. Get notified when we launch.
              </p>
              <Button
                size="lg"
                className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-neural-teal to-neural-teal-dark text-white shadow-xl"
              >
                <Bell className="w-5 h-5 mr-2" />
                Get Notified
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
