import {
  Rocket,
  Store,
  Briefcase,
  Code,
  Lightbulb,
  Cpu,
  Users,
} from "lucide-react";

const audiences = [
  { icon: Rocket, title: "Early-stage founders" },
  { icon: Code, title: "Creators building SaaS products" },
  { icon: Store, title: "E-commerce entrepreneurs" },
  { icon: Lightbulb, title: "Individuals with validated ideas" },
  { icon: Cpu, title: "Businesses ready to integrate AI" },
  { icon: Briefcase, title: "Teams needing product strategy" },
];

function MarqueeRow() {
  const items = [...audiences, ...audiences];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex gap-4 w-max animate-marquee">
        {items.map((audience, i) => (
          <div
            key={`${audience.title}-${i}`}
            className="flex items-center gap-4 glass-card rounded-2xl p-5 min-w-[280px] flex-shrink-0"
          >
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-lime/10 flex items-center justify-center">
              <audience.icon className="w-5 h-5 text-lime" />
            </div>
            <p className="font-semibold text-white">{audience.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WhoWeWorkWith() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-bg" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Decorative glows */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-lime/5 rounded-full blur-3xl" />

      <div className="relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/10 backdrop-blur rounded-full border border-lime/20 mb-6">
              <Users className="w-4 h-4 text-lime" />
              <span className="text-sm font-semibold text-lime uppercase tracking-wider">Who We Work With</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
              Got a Vision?{" "}
              <span className="gradient-text-lime">Let's Build It.</span>
            </h2>
          </div>
        </div>

        {/* Carousel — single row */}
        <div className="mb-12">
          <MarqueeRow />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Bottom callout */}
          <div className="text-center">
            <div className="inline-block glass-card rounded-2xl px-8 py-6">
              <p className="text-lg text-white/60 leading-relaxed">
                If you have an idea but feel overwhelmed by where to start,{" "}
                <span className="text-lime font-semibold">that's where we come in.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
