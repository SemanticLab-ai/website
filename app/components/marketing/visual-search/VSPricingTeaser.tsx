import { ArrowRight, DollarSign, Check, Sparkles } from "lucide-react";

import { SectionWrapper } from "~/components/shared/SectionWrapper";
import { SectionHeader } from "~/components/shared/SectionHeader";
import { GlassCard } from "~/components/shared/GlassCard";
import { CTAButton } from "~/components/shared/CTAButton";

export function VSPricingTeaser() {
  const features = [
    "Visual + text search",
    "Real-time analytics",
    "Theme matching",
    "Direct founder support",
  ];

  return (
    <SectionWrapper bg="dark-bg">
      <SectionHeader
        badge="Pricing"
        badgeIcon={DollarSign}
        title={
          <>
            Pricing That{" "}
            <span className="gradient-text-lime">Scales With You</span>
          </>
        }
        subtitle={
          <>
            From <span className="text-white font-semibold">$99/mo</span> for growing stores to custom enterprise plans.
          </>
        }
      />

      <div className="max-w-3xl mx-auto">
        <GlassCard className="relative overflow-hidden">
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
              <CTAButton href="/products/visual-search/pricing">
                See Full Pricing
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </CTAButton>
            </div>
          </div>
        </GlassCard>
      </div>
    </SectionWrapper>
  );
}
