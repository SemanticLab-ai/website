import { Search, MessageCircle, BarChart3, Zap, Palette, Lock, Layers } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Search,
      title: "Visual + Text Search",
      description: "Upload images or reference existing products. Mix visuals with natural language refinement.",
      color: "vector-rose",
      gradient: "from-vector-rose to-pink-400",
    },
    {
      icon: MessageCircle,
      title: "AI Refine",
      description: '"Make it longer," "in burgundy color" — text modifiers work naturally with your search.',
      color: "neural-teal",
      gradient: "from-neural-teal to-cyan-400",
    },
    {
      icon: BarChart3,
      title: "Merchant Analytics",
      description: "See which searches convert best. Track revenue directly attributed to visual search.",
      color: "signal-amber",
      gradient: "from-signal-amber to-yellow-400",
    },
    {
      icon: Zap,
      title: "<500ms Results",
      description: "Fast enough for impatient mobile shoppers. Instant gratification, every time.",
      color: "vector-rose",
      gradient: "from-vector-rose to-pink-400",
    },
    {
      icon: Palette,
      title: "Matches Your Theme",
      description: "Auto-detects your brand colors. Seamless integration that feels native to your store.",
      color: "neural-teal",
      gradient: "from-neural-teal to-cyan-400",
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Zero customer data stored. GDPR compliant. Security by design, not afterthought.",
      color: "signal-amber",
      gradient: "from-signal-amber to-yellow-400",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blush via-pearl to-white" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-vector-rose/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-neural-teal/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full border border-slate/10 shadow-lg mb-6">
            <Layers className="w-4 h-4 text-vector-rose" />
            <span className="text-sm font-semibold text-charcoal uppercase tracking-wider">Features</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-h1 font-bold text-charcoal leading-tight mb-6">
            Built for{" "}
            <span className="gradient-text-rose italic">Fashion</span>.
            <br />
            Built for{" "}
            <span className="gradient-text-teal italic">Shopify</span>.
          </h2>

          <p className="text-lg md:text-xl text-slate max-w-2xl mx-auto">
            Everything you need to help shoppers find exactly what they want — and actually buy it.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group relative bg-white rounded-3xl p-8 border border-slate/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-charcoal group-hover:to-slate transition-all">
                {feature.title}
              </h3>
              <p className="text-slate leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-[100px]`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate mb-4">
            Ready to see these features in action?
          </p>
          <a
            href="#product"
            className="inline-flex items-center gap-2 text-vector-rose font-semibold hover:text-vector-rose-dark transition-colors link-underline"
          >
            See the demo above
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
