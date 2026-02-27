import { ArrowRight, FileText, Target, FileCheck, Sparkles } from "lucide-react";
import { colorMap, type BrandColor } from "~/lib/utils";

export function SAHowItWorks() {
  const steps: { icon: React.ElementType; title: string; description: string; color: BrandColor }[] = [
    {
      icon: FileText,
      title: "Add Artifacts",
      description: "Upload your past work — resumes, portfolios, project summaries, performance reviews. The more context, the better.",
      color: "smart-indigo",
    },
    {
      icon: Target,
      title: "Target Role",
      description: "Paste the job description you're applying for. SmartApply analyzes the requirements, keywords, and expectations.",
      color: "neural-teal",
    },
    {
      icon: FileCheck,
      title: "Generate",
      description: "Get a tailored resume that highlights the right experience, uses the right language, and matches the role.",
      color: "signal-amber",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-pearl via-white to-pearl">
      {/* Decorative */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-smart-indigo/10 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-neural-teal/10 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full border border-smart-indigo/20 shadow-lg mb-6">
              <Sparkles className="w-4 h-4 text-smart-indigo" />
              <span className="text-sm font-semibold text-charcoal uppercase tracking-wider">How It Works</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-h1 font-bold text-charcoal leading-tight mb-6">
              Three Steps to a{" "}
              <span className="gradient-text-indigo italic">Perfect Resume</span>
            </h2>

            <p className="text-lg md:text-xl text-slate max-w-2xl mx-auto">
              No more copy-pasting between documents. No more guessing what recruiters want. Just results.
            </p>
          </div>

          {/* 3-Step Pipeline */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="group bg-white rounded-3xl p-8 border border-slate/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center">
                  <div className={`mx-auto w-16 h-16 rounded-2xl ${colorMap[step.color].bg10} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`w-8 h-8 ${colorMap[step.color].text}`} />
                  </div>
                  <div className="text-sm font-bold text-slate uppercase tracking-wider mb-2">
                    Step {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">{step.title}</h3>
                  <p className="text-slate">{step.description}</p>
                </div>

                {/* Arrow between steps */}
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 translate-x-0 -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-slate/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
