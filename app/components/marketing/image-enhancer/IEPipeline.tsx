import { Upload, Wand2, Download, ArrowRight, Sparkles } from "lucide-react";
import { SectionWrapper } from "~/components/shared/SectionWrapper";
import { SectionHeader } from "~/components/shared/SectionHeader";


export function IEPipeline() {
  const steps = [
    {
      icon: Upload,
      title: "Upload",
      description: "Drag and drop your product photo or click to browse. Supports JPG, PNG, and WebP up to 10MB.",
      gradient: "from-vector-rose to-pink-400",
    },
    {
      icon: Wand2,
      title: "AI Processes",
      description: "Our AI removes the background, auto-centers the product, and enhances quality — all in under 5 seconds.",
      gradient: "from-neural-teal to-cyan-400",
    },
    {
      icon: Download,
      title: "Download",
      description: "Get your marketplace-ready image in PNG, JPG, or WebP. Choose dimensions and background color.",
      gradient: "from-signal-amber to-yellow-400",
    },
  ];

  return (
    <SectionWrapper bg="dark-surface">
      <SectionHeader
        badge="How It Works"
        badgeIcon={Sparkles}
        title={
          <>
            Three Steps to{" "}
            <span className="gradient-text-lime">Perfect Photos</span>
          </>
        }
      />

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <div key={step.title} className="relative">
            <div className="group glass-card rounded-2xl p-8 hover-lift text-center overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              <div className={`relative mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="w-8 h-8 text-white" />
              </div>

              <div className="text-sm font-bold text-white/50 uppercase tracking-wider mb-2">
                Step {i + 1}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white/50 leading-relaxed">{step.description}</p>
            </div>

            {i < steps.length - 1 && (
              <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                <ArrowRight className="w-6 h-6 text-white/20" />
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
