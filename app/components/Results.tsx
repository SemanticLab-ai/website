import { Zap, Shield, Palette, BarChart } from "lucide-react";

export function Results() {
  const metrics = [
    {
      value: "<500ms",
      label: "Search Speed",
      description: "Real-time visual matching",
      icon: Zap,
      gradient: "from-neural-teal to-cyan-400",
    },
    {
      value: "Zero",
      label: "Customer Data Stored",
      description: "Privacy-first architecture",
      icon: Shield,
      gradient: "from-vector-rose to-pink-400",
    },
    {
      value: "Native",
      label: "Theme Integration",
      description: "Matches your store's look",
      icon: Palette,
      gradient: "from-signal-amber to-yellow-400",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-pearl to-blush" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-vector-rose/10 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-neural-teal/10 rounded-full blur-3xl translate-x-1/2" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full border border-slate/10 shadow-lg mb-6">
            <BarChart className="w-4 h-4 text-neural-teal" />
            <span className="text-sm font-semibold text-charcoal uppercase tracking-wider">Results</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-h1 font-bold text-charcoal leading-tight mb-6">
            The Numbers That{" "}
            <span className="gradient-text-teal italic">Matter</span>
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-20 max-w-5xl mx-auto">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className="group relative bg-white rounded-3xl p-8 border border-slate/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center overflow-hidden"
            >
              {/* Gradient accent on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`relative mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className="w-8 h-8 text-white" />
              </div>

              {/* Value */}
              <p className={`font-display text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent`}>
                {metric.value}
              </p>

              {/* Label */}
              <p className="text-lg font-bold text-charcoal mb-2">
                {metric.label}
              </p>

              {/* Description */}
              <p className="text-slate text-sm">
                {metric.description}
              </p>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-[100px]`} />
            </div>
          ))}
        </div>

        {/* Early Access CTA */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-charcoal to-slate rounded-3xl p-10 md:p-14 shadow-2xl overflow-hidden text-center">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative z-10">
              <p className="font-display text-xl md:text-2xl text-white leading-relaxed mb-6">
                Be among the first stores to offer visual search.
                <br />
                <span className="text-signal-amber font-bold">Join the early access list.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
