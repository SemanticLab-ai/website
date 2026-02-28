import { Eraser, Move, Sparkles, Layers, Code, Crown } from "lucide-react";
import { SectionWrapper } from "~/components/shared/SectionWrapper";
import { SectionHeader } from "~/components/shared/SectionHeader";
import { FeatureCard } from "~/components/shared/FeatureCard";

export function IEFeatures() {
  const features = [
    {
      icon: Eraser,
      title: "Background Removal",
      description: "AI-powered background removal that handles complex edges, hair, and transparent objects cleanly.",
      gradient: "from-vector-rose to-pink-400",
    },
    {
      icon: Move,
      title: "Auto-Centering",
      description: "Automatically centers and frames your product with consistent padding across all images.",
      gradient: "from-neural-teal to-cyan-400",
    },
    {
      icon: Sparkles,
      title: "Image Enhancement",
      description: "Improve lighting, contrast, and sharpness. Make every product look its best.",
      gradient: "from-signal-amber to-yellow-400",
    },
    {
      icon: Layers,
      title: "Batch Processing",
      description: "Process hundreds of images at once. Same settings, consistent results across your entire catalog.",
      gradient: "from-vector-rose to-pink-400",
    },
    {
      icon: Code,
      title: "API Access",
      description: "Integrate image processing into your workflow with our RESTful API. Pro plan and above.",
      gradient: "from-neural-teal to-cyan-400",
    },
    {
      icon: Crown,
      title: "Pinnacle Pipeline",
      description: "Our premium tier with human-in-the-loop QA for enterprise-grade perfection on every image.",
      gradient: "from-signal-amber to-yellow-400",
    },
  ];

  return (
    <SectionWrapper bg="dark-bg">
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-lime/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-teal/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <SectionHeader
        badge="Features"
        badgeIcon={Layers}
        title={
          <>
            Everything You Need for{" "}
            <span className="gradient-text-lime italic">Perfect Photos</span>
          </>
        }
      />

      <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            gradient={feature.gradient}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
