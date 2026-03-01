import { Button } from "~/components/ui/button";
import { ArrowUpRight, Layers } from "lucide-react";

const timelineSteps = [
  "Idea",
  "Validate",
  "Design",
  "Build",
  "Launch",
  "Optimise",
];

export function ServicesHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-gradient-hero noise-overlay">
      {/* Decorative glows */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-lime/10 blob blob-animated blur-3xl" />
      <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-teal/8 blob blob-animated blur-3xl" style={{ animationDelay: "2s" }} />

      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-50" />

      {/* Watermark */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center overflow-hidden pointer-events-none">
        <span className="watermark-text whitespace-nowrap translate-y-[30%]">SERVICES</span>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/10 backdrop-blur rounded-full border border-lime/20 mb-8">
            <Layers className="w-4 h-4 text-lime" />
            <span className="text-sm font-semibold text-lime uppercase tracking-wider">Our Services</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Build It Right — From Idea to{" "}
            <span className="gradient-text-lime">Launched Product.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-12 max-w-2xl mx-auto">
            We partner with founders, creators, and growing teams to validate, design, build and ship AI-ready digital platforms — with clarity and care at every stage.
          </p>

          {/* Visual Timeline */}
          <div className="relative max-w-3xl mx-auto mb-14">
            <div className="flex items-center justify-between">
              {timelineSteps.map((step, i) => (
                <div key={step} className="relative flex flex-col items-center gap-3 flex-1">
                  {/* Connector line (not on the first item) */}
                  {i > 0 && (
                    <div className="absolute top-[11px] right-1/2 w-full h-px bg-gradient-to-r from-lime/20 to-lime/40" />
                  )}
                  {/* Dot */}
                  <div className="relative z-10 w-[22px] h-[22px] rounded-full border-2 border-lime/40 bg-dark-bg flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-lime" />
                  </div>
                  {/* Label */}
                  <span className="text-xs md:text-sm font-semibold text-white/60">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Button
            size="lg"
            className="h-16 px-10 text-lg rounded-full bg-lime hover:bg-lime-dark text-dark-bg font-semibold shadow-2xl shadow-lime/30 transition-all duration-300 hover:scale-105 group"
            asChild
          >
            <a href="mailto:hello@semanticlab.ai?subject=Service%20Consultation%20Request" className="flex items-center gap-3">
              Book Initial Consultation
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent" />
    </section>
  );
}
