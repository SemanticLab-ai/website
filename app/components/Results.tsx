import { TrendingUp, Zap, Store, Quote, BarChart } from "lucide-react";

export function Results() {
  const metrics = [
    {
      value: "18%",
      label: "Conversion Lift",
      description: "Average increase vs text search",
      icon: TrendingUp,
      gradient: "from-vector-rose to-pink-400",
    },
    {
      value: "<500ms",
      label: "Search Latency",
      description: "Faster than typing",
      icon: Zap,
      gradient: "from-neural-teal to-cyan-400",
    },
    {
      value: "250+",
      label: "Fashion Stores",
      description: "Trust us daily",
      icon: Store,
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

        {/* Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-charcoal to-slate rounded-3xl p-10 md:p-14 shadow-2xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            {/* Decorative quote icon */}
            <div className="absolute top-6 right-6 md:top-10 md:right-10 opacity-10">
              <Quote className="w-20 h-20 text-white" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face"
                    alt="Sarah Chen"
                    className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white/20 shadow-2xl object-cover"
                  />
                  {/* Status indicator */}
                  <div className="absolute bottom-1 right-1 w-6 h-6 bg-neural-teal rounded-full border-2 border-charcoal flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="flex-1 text-center md:text-left">
                <p className="font-display text-xl md:text-2xl text-white italic leading-relaxed mb-6">
                  "We saw a <span className="text-signal-amber font-bold not-italic">22% increase</span> in search-to-purchase conversion
                  within the first month. It felt like magic watching customers find exactly what they wanted."
                </p>
                <div>
                  <p className="font-bold text-white text-lg">Sarah Chen</p>
                  <p className="text-white/60">Founder, Urban Chic Boutique</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating accent */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-xl border border-slate/10 flex items-center gap-3">
            <div className="flex -space-x-2">
              {[
                "/images/founders/raihan-avatar.jpg",
                "/images/founders/naila-avatar.jpg",
              ].map((src, i) => (
                <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
              ))}
            </div>
            <p className="text-sm font-medium text-charcoal">Join 250+ happy merchants</p>
          </div>
        </div>
      </div>
    </section>
  );
}
