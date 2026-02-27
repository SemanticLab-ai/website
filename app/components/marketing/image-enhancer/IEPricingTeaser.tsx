import { Button } from "~/components/ui/button";
import { ArrowRight, DollarSign, Check, Sparkles } from "lucide-react";
import { Link } from "react-router";

export function IEPricingTeaser() {
  const highlights = [
    "3 free images — no sign-up",
    "Plans from $29/month",
    "Batch processing on Pro+",
    "API access included",
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blush via-white to-pearl" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full border border-slate/10 shadow-lg mb-6">
            <DollarSign className="w-4 h-4 text-signal-amber" />
            <span className="text-sm font-semibold text-charcoal uppercase tracking-wider">Pricing</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-h1 font-bold text-charcoal leading-tight mb-6">
            Simple,{" "}
            <span className="gradient-text italic">Transparent Pricing</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl shadow-charcoal/10 overflow-hidden border border-slate/10">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-vector-rose via-signal-amber to-neural-teal" />

            <div className="p-8 md:p-12">
              <div className="text-center mb-10">
                <p className="inline-flex items-center gap-2 text-charcoal font-bold text-lg">
                  <Sparkles className="w-5 h-5 text-signal-amber" />
                  Start free, scale as you grow
                </p>
              </div>

              <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 max-w-xl mx-auto mb-10">
                {highlights.map((feature) => (
                  <div key={feature} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neural-teal to-cyan-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-base font-medium text-charcoal">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="h-14 px-10 text-lg rounded-full bg-gradient-to-r from-charcoal to-slate hover:from-vector-rose hover:to-vector-rose-dark text-white shadow-xl transition-all duration-300 hover:scale-105 group"
                  asChild
                >
                  <Link to="/products/image-enhancer/pricing" className="flex items-center gap-3">
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
