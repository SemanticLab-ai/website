import {
  Search,
  Crosshair,
  Lightbulb,
  Palette,
  Cpu,
  Rocket,
} from "lucide-react";

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
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-surface" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Decorative glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-lime/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-teal/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/10 backdrop-blur rounded-full border border-lime/20 mb-6">
            <Cpu className="w-4 h-4 text-lime" />
            <span className="text-sm font-semibold text-lime uppercase tracking-wider">What We Do</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            Idea to Launch.{" "}
            <span className="gradient-text-lime">End to End.</span>
          </h2>

          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
            You bring the vision. We bring the craft to ship it.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass-card rounded-2xl p-6 hover-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-lime" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-white/50 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="text-center max-w-4xl mx-auto glass-card rounded-2xl px-8 py-6 whitespace-nowrap">
          <p className="text-lg text-white font-semibold">
            We don&apos;t just design screens, we build products that work in the <span className="text-lime">real world.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
