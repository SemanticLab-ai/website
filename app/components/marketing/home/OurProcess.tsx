import { Search, PenTool, Hammer, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description: "We understand your vision, market, and users.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Define",
    description: "We identify gaps, structure your product strategy, and remove friction.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Design & Build",
    description: "We craft intuitive experiences and develop scalable systems.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Iterate",
    description: "We ship. We test. We refine.",
  },
];

export function OurProcess() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-surface" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-lime/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/10 backdrop-blur rounded-full border border-lime/20 mb-6">
            <Hammer className="w-4 h-4 text-lime" />
            <span className="text-sm font-semibold text-lime uppercase tracking-wider">Our Process</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            Simple. Focused.{" "}
            <span className="gradient-text-lime">Effective.</span>
          </h2>
        </div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative glass-card rounded-2xl p-8 hover-lift"
              >
                {/* Step number — large faded */}
                <span className="text-6xl font-display font-bold text-lime/10 absolute top-4 right-6">
                  {step.number}
                </span>

                <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center mb-5">
                  <step.icon className="w-6 h-6 text-lime" />
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/50 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
