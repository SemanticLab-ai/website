import { Monitor, Crown, Check } from "lucide-react";
import { colorMap, type BrandColor } from "~/lib/utils";

export function IEIntegrations() {
  const modes: { icon: React.ElementType; title: string; description: string; color: BrandColor; features: string[] }[] = [
    {
      icon: Monitor,
      title: "Self-Serve",
      description: "Upload images through our web app and get instant results. Perfect for small to medium catalogs.",
      color: "neural-teal",
      features: [
        "Drag-and-drop upload",
        "Instant processing (<5s)",
        "Batch processing (Pro+)",
        "API access (Pro+)",
        "Download in multiple formats",
      ],
    },
    {
      icon: Crown,
      title: "Pinnacle",
      description: "Our premium pipeline with human QA. Every image is reviewed before delivery. For brands that demand perfection.",
      color: "signal-amber",
      features: [
        "Dedicated image specialist",
        "Human quality assurance",
        "Custom brand guidelines",
        "Priority turnaround",
        "White-glove onboarding",
      ],
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-dark-surface">
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-h1 font-bold text-white leading-tight mb-6">
            Two Ways to{" "}
            <span className="gradient-text-lime italic">Enhance</span>
          </h2>
          <p className="text-lg text-white/50">
            Choose the workflow that fits your needs. Start self-serve, upgrade to Pinnacle when you're ready.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {modes.map((mode) => {
            const colors = colorMap[mode.color];
            return (
              <div key={mode.title} className={`glass-card rounded-2xl p-8 md:p-10 border-2 ${colors.border20} hover-lift`}>
                <div className={`w-14 h-14 rounded-2xl bg-lime/10 flex items-center justify-center mb-6`}>
                  <mode.icon className={`w-7 h-7 text-lime`} />
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-3">{mode.title}</h3>
                <p className="text-white/50 mb-6">{mode.description}</p>

                <ul className="space-y-3">
                  {mode.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full bg-lime/10 flex items-center justify-center`}>
                        <Check className={`w-3 h-3 text-lime`} />
                      </div>
                      <span className="text-white/50">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
