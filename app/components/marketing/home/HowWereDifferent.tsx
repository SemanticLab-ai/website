import { Target, Heart, Scale, Users, Sparkles } from "lucide-react";

const differentiators = [
  {
    icon: Target,
    title: "Outcomes, not deliverables",
    description: "We think in shipped products and real traction, not slide decks and handoffs.",
  },
  {
    icon: Heart,
    title: "Longevity, not just launch",
    description: "We care about what happens after day one. Products should grow, not just go live.",
  },
  {
    icon: Scale,
    title: "Vision meets feasibility",
    description: "We balance ambitious ideas with what's technically and financially realistic.",
  },
  {
    icon: Users,
    title: "Real users, not trends",
    description: "We design for the people who'll actually use your product, not for awards or aesthetics.",
  },
  {
    icon: Sparkles,
    title: "AI with intention",
    description: "We integrate AI thoughtfully, solving real problems, not as a marketing gimmick.",
  },
];

export function HowWereDifferent() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-bg" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Decorative glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-lime/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/10 backdrop-blur rounded-full border border-lime/20 mb-6">
              <Sparkles className="w-4 h-4 text-lime" />
              <span className="text-sm font-semibold text-lime uppercase tracking-wider">Why Us</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
              We're Founders,{" "}
              <span className="gradient-text-lime">Not Just Service Providers.</span>
            </h2>

            <p className="text-lg text-white/50 leading-relaxed mb-8">
              We stay close to the work. We stay close to you.
            </p>

            {/* Quote */}
            <div className="relative glass-card rounded-2xl p-8">
              <div className="absolute -left-[2px] top-8 w-1 h-16 bg-gradient-to-b from-lime to-teal rounded-full" />
              <p className="text-white font-display text-xl italic leading-relaxed mb-4">
                "We've been on the other side, building products for someone else's roadmap. Now we help founders build their own."
              </p>
              <p className="text-sm text-white/40 font-medium">
                — Raihan & Naila
              </p>
            </div>
          </div>

          {/* Right: Differentiators */}
          <div className="space-y-4">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 glass-card rounded-2xl p-5 hover-lift"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-lime/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-lime" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-white/50">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
