import { Upload, Wand2, Download, ArrowRight, Sparkles } from "lucide-react";

export function IEPipeline() {
  const steps = [
    {
      icon: Upload,
      title: "Upload",
      description: "Drag and drop your product photo or click to browse. Supports JPG, PNG, and WebP up to 10MB.",
      color: "vector-rose",
      gradient: "from-vector-rose to-pink-400",
    },
    {
      icon: Wand2,
      title: "AI Processes",
      description: "Our AI removes the background, auto-centers the product, and enhances quality — all in under 5 seconds.",
      color: "neural-teal",
      gradient: "from-neural-teal to-cyan-400",
    },
    {
      icon: Download,
      title: "Download",
      description: "Get your marketplace-ready image in PNG, JPG, or WebP. Choose dimensions and background color.",
      color: "signal-amber",
      gradient: "from-signal-amber to-yellow-400",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-pearl via-white to-pearl" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full border border-slate/10 shadow-lg mb-6">
            <Sparkles className="w-4 h-4 text-neural-teal" />
            <span className="text-sm font-semibold text-charcoal uppercase tracking-wider">How It Works</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-h1 font-bold text-charcoal leading-tight mb-6">
            Three Steps to{" "}
            <span className="gradient-text-teal italic">Perfect Photos</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="group bg-white rounded-3xl p-8 border border-slate/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className={`relative mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <div className="text-sm font-bold text-slate uppercase tracking-wider mb-2">
                  Step {i + 1}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{step.title}</h3>
                <p className="text-slate leading-relaxed">{step.description}</p>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-slate/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
