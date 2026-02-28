import { ArrowRight, FileText, Target, FileCheck, Sparkles } from "lucide-react";
import { SectionWrapper } from "~/components/shared/SectionWrapper";
import { SectionHeader } from "~/components/shared/SectionHeader";
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
    <SectionWrapper bg="dark-surface" id="how-it-works">
      {/* Decorative */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-teal/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="How It Works"
          badgeIcon={Sparkles}
          title={
            <>
              Three Steps to a{" "}
              <span className="gradient-text-lime">Perfect Resume</span>
            </>
          }
          subtitle="No more copy-pasting between documents. No more guessing what recruiters want. Just results."
        />

        {/* 3-Step Pipeline */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="group glass-card rounded-2xl p-8 hover-lift text-center">
                <div className={`mx-auto w-16 h-16 rounded-2xl ${colorMap[step.color].bg10} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className={`w-8 h-8 ${colorMap[step.color].text}`} />
                </div>
                <div className="text-sm font-bold text-white/40 uppercase tracking-wider mb-2">
                  Step {i + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/50">{step.description}</p>
              </div>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 translate-x-0 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-white/20" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
