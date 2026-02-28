import {
  Search,
  Crosshair,
  Lightbulb,
  Palette,
  Cpu,
  Rocket,
} from "lucide-react";
import { SectionWrapper } from "~/components/shared/SectionWrapper";
import { SectionHeader } from "~/components/shared/SectionHeader";
import { FeatureCard } from "~/components/shared/FeatureCard";
import { GlassCard } from "~/components/shared/GlassCard";

const services = [
  {
    icon: Search,
    title: "Validate",
    description: "Kill assumptions early. We pressure-test your idea so you build what the market actually wants.",
  },
  {
    icon: Crosshair,
    title: "Define",
    description: "Find the friction that costs you users. We surface the real problem, not the obvious one.",
  },
  {
    icon: Lightbulb,
    title: "Strategise",
    description: "Ideas without structure die. We define the roadmap, positioning, and path to revenue.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Interfaces people trust on instinct. Clean, fast, built for how real users behave.",
  },
  {
    icon: Cpu,
    title: "Engineer",
    description: "AI baked into the architecture, not bolted on. Scalable systems that get smarter over time.",
  },
  {
    icon: Rocket,
    title: "Ship",
    description: "Live beats perfect. We launch fast, learn from real data, and iterate with precision.",
  },
];

export function WhatWeDo() {
  return (
    <SectionWrapper bg="dark-surface">
      {/* Decorative glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-lime/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-teal/5 rounded-full blur-3xl translate-x-1/2" />

      <SectionHeader
        badge="What We Do"
        badgeIcon={Cpu}
        title={
          <>
            Idea to Launch.{" "}
            <span className="gradient-text-lime">End to End.</span>
          </>
        }
        subtitle="You bring the vision. We bring the craft to ship it."
      />

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
        {services.map((service) => (
          <FeatureCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

      {/* Bottom statement */}
      <div className="text-center max-w-4xl mx-auto">
        <GlassCard className="px-8 py-6 whitespace-nowrap">
          <p className="text-lg text-white font-semibold">
            We don&apos;t just design screens, we build products that work in the <span className="text-lime">real world.</span>
          </p>
        </GlassCard>
      </div>
    </SectionWrapper>
  );
}
