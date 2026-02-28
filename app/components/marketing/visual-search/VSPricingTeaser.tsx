import { Button } from "~/components/ui/button";
import { ArrowRight, DollarSign, Check, Sparkles } from "lucide-react";
import { Link } from "react-router";

export function VSPricingTeaser() {
  const features = [
    "Visual + text search",
    "Real-time analytics",
    "Theme matching",
    "Direct founder support",
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dark-bg" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/10 backdrop-blur rounded-full border border-lime/20 mb-6">
            <DollarSign className="w-4 h-4 text-lime" />
            <span className="text-sm font-semibold text-lime uppercase tracking-wider">Pricing</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-h1 font-bold text-white leading-tight mb-6">
            Pricing That{" "}
            <span className="gradient-text-lime italic">Scales With You</span>
          </h2>

          <p className="text-lg text-white/50">
            From <span className="text-white font-semibold">$99/mo</span> for growing stores to custom enterprise plans.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative glass-card rounded-2xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-neural-teal via-signal-amber to-vector-rose" />

            <div className="p-8 md:p-12">
              <div className="text-center mb-10">
                <p className="inline-flex items-center gap-2 text-white font-bold text-lg">
                  <Sparkles className="w-5 h-5 text-lime" />
                  All plans include
                </p>
              </div>

              <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 max-w-xl mx-auto mb-10">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neural-teal to-cyan-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-base font-medium text-white">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="h-14 px-10 text-lg rounded-full bg-lime hover:bg-lime-dark text-dark-bg font-semibold shadow-xl shadow-lime/20 transition-all duration-300 hover:scale-105 group"
                  asChild
                >
                  <Link to="/products/visual-search/pricing" className="flex items-center gap-3">
                    See Full Pricing
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
