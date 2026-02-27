import { Eraser, Move, Sparkles, Layers, Code, Crown } from "lucide-react";

export function IEFeatures() {
  const features = [
    {
      icon: Eraser,
      title: "Background Removal",
      description: "AI-powered background removal that handles complex edges, hair, and transparent objects cleanly.",
      gradient: "from-vector-rose to-pink-400",
    },
    {
      icon: Move,
      title: "Auto-Centering",
      description: "Automatically centers and frames your product with consistent padding across all images.",
      gradient: "from-neural-teal to-cyan-400",
    },
    {
      icon: Sparkles,
      title: "Image Enhancement",
      description: "Improve lighting, contrast, and sharpness. Make every product look its best.",
      gradient: "from-signal-amber to-yellow-400",
    },
    {
      icon: Layers,
      title: "Batch Processing",
      description: "Process hundreds of images at once. Same settings, consistent results across your entire catalog.",
      gradient: "from-vector-rose to-pink-400",
    },
    {
      icon: Code,
      title: "API Access",
      description: "Integrate image processing into your workflow with our RESTful API. Pro plan and above.",
      gradient: "from-neural-teal to-cyan-400",
    },
    {
      icon: Crown,
      title: "Pinnacle Pipeline",
      description: "Our premium tier with human-in-the-loop QA for enterprise-grade perfection on every image.",
      gradient: "from-signal-amber to-yellow-400",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blush via-pearl to-white" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-vector-rose/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-neural-teal/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full border border-slate/10 shadow-lg mb-6">
            <Layers className="w-4 h-4 text-vector-rose" />
            <span className="text-sm font-semibold text-charcoal uppercase tracking-wider">Features</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-h1 font-bold text-charcoal leading-tight mb-6">
            Everything You Need for{" "}
            <span className="gradient-text-rose italic">Perfect Photos</span>
          </h2>
        </div>

        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white rounded-3xl p-8 border border-slate/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-charcoal mb-3">{feature.title}</h3>
              <p className="text-slate leading-relaxed">{feature.description}</p>

              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-[100px]`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
