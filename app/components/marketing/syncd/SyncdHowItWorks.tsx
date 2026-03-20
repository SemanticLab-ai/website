import { Plug, Settings, Zap, Workflow } from "lucide-react";
import { SectionWrapper } from "~/components/shared/SectionWrapper";
import { SectionHeader } from "~/components/shared/SectionHeader";
import { FeatureCard } from "~/components/shared/FeatureCard";

export function SyncdHowItWorks() {
  const steps = [
    {
      icon: Plug,
      title: "Connect Your API",
      description:
        "Enter your Pinnacle API credentials and test the connection. One-click validation confirms everything works.",
      step: "01",
      gradient: "from-lime to-teal",
    },
    {
      icon: Settings,
      title: "Configure Mappings",
      description:
        "Map Pinnacle fields to Shopify - titles, descriptions, pricing, images. Smart Defaults get you started in seconds.",
      step: "02",
      gradient: "from-teal to-cyan-400",
    },
    {
      icon: Zap,
      title: "Activate & Sync",
      description:
        "Review your settings and go live. Products sync automatically on your schedule - from every 10 minutes to every 4 hours.",
      step: "03",
      gradient: "from-lime to-emerald-400",
    },
  ];

  return (
    <SectionWrapper bg="dark-surface">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-lime/5 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-teal/5 rounded-full blur-3xl -translate-x-1/2" />

      <SectionHeader
        badge="How It Works"
        badgeIcon={Workflow}
        title={
          <>
            Live in{" "}
            <span className="gradient-text-lime">3 Simple Steps</span>
          </>
        }
        subtitle="From API credentials to synced products in minutes - not days."
      />

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
        {steps.map((s) => (
          <FeatureCard
            key={s.title}
            icon={s.icon}
            title={s.title}
            description={s.description}
            step={s.step}
            gradient={s.gradient}
            centered
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
