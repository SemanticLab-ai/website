import { Sparkles, Wand2, ImagePlus, Check } from "lucide-react";
import { SectionWrapper } from "~/components/shared/SectionWrapper";
import { SectionHeader } from "~/components/shared/SectionHeader";
import { GlassCard } from "~/components/shared/GlassCard";

const addons = [
  {
    icon: Wand2,
    name: "AI Product Descriptions",
    description:
      "Generate SEO-optimized, human-quality product descriptions using AI. Turns basic part data into compelling listings that convert.",
    features: [
      "SEO keyword optimization",
      "Auto compatibility info",
      "Multiple tone options",
      "Custom instructions per client",
    ],
    gradient: "from-lime to-teal",
  },
  {
    icon: ImagePlus,
    name: "AI Image Enhancement",
    description:
      "Professional background removal and image enhancement built for auto parts. Handles chrome, reflections, and complex shapes.",
    features: [
      "Instant background removal",
      "Parts-optimized AI model",
      "Custom background colors",
      "Full resolution PNG output",
    ],
    gradient: "from-teal to-cyan-400",
  },
];

export function SyncdAIAddons() {
  return (
    <SectionWrapper bg="dark-surface">
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-lime/5 rounded-full blur-3xl" />

      <SectionHeader
        badge="AI Add-ons"
        badgeIcon={Sparkles}
        title={
          <>
            Supercharge with{" "}
            <span className="gradient-text-lime">AI Power</span>
          </>
        }
        subtitle="Optional AI modules that transform your basic part data into high-converting product listings."
      />

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
        {addons.map((addon) => (
          <GlassCard key={addon.name} hover className="overflow-hidden">
            <div
              className={`h-1.5 bg-gradient-to-r ${addon.gradient}`}
            />
            <div className="p-8">
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${addon.gradient} flex items-center justify-center mb-6`}
              >
                <addon.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {addon.name}
              </h3>
              <p className="text-white/50 leading-relaxed mb-6">
                {addon.description}
              </p>

              <div className="space-y-3">
                {addon.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-lime/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-lime" />
                    </div>
                    <span className="text-sm text-white/70">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
