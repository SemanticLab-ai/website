import { MessageCircle, TrendingDown, XCircle, ArrowRight } from "lucide-react";
import { colorMap, type BrandColor } from "~/lib/utils";

export function Problem() {
  const painPoints: { icon: React.ElementType; quote: string; color: BrandColor }[] = [
    {
      icon: MessageCircle,
      quote: '"Do you have this in blue?"',
      color: "vector-rose",
    },
    {
      icon: MessageCircle,
      quote: '"I saw something like this on Instagram..."',
      color: "neural-teal",
    },
    {
      icon: MessageCircle,
      quote: '"Like this dress but more casual?"',
      color: "signal-amber",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background with grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-pearl to-white" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-vector-rose/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neural-teal/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Pain Points */}
          <div className="space-y-10">
            {/* Section Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-vector-rose/10 rounded-full mb-6">
                <XCircle className="w-4 h-4 text-vector-rose" />
                <span className="text-sm font-semibold text-vector-rose uppercase tracking-wider">The Problem</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-h1 font-bold text-charcoal leading-tight mb-6">
                Your customers speak in{" "}
                <span className="gradient-text-rose italic">images</span>,
                <br />
                not keywords.
              </h2>
              <p className="text-lg text-slate max-w-xl">
                Every day, shoppers try to describe what they want. Your search bar just doesn't understand.
              </p>
            </div>

            {/* Quote Cards */}
            <div className="space-y-4">
              {painPoints.map((point, i) => (
                <div
                  key={i}
                  className={`group relative bg-white rounded-2xl p-6 border border-slate/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-2 cursor-default`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${colorMap[point.color].bg10} flex items-center justify-center flex-shrink-0`}>
                      <point.icon className={`w-6 h-6 ${colorMap[point.color].text}`} />
                    </div>
                    <div>
                      <p className="text-xl md:text-2xl font-display font-semibold text-charcoal italic leading-snug">
                        {point.quote}
                      </p>
                      <p className="text-sm text-slate mt-2">
                        — Actual customer query
                      </p>
                    </div>
                  </div>
                  {/* Decorative line */}
                  <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-1/2 bg-gradient-to-b ${colorMap[point.color].from} to-transparent transition-all duration-300 rounded-full`} />
                </div>
              ))}
            </div>

            {/* Arrow indicator */}
            <div className="flex items-center gap-3 text-slate">
              <ArrowRight className="w-5 h-5" />
              <span className="text-sm font-medium">Your text search returns: "No results found"</span>
            </div>
          </div>

          {/* Right: Cost Visualization */}
          <div className="relative">
            {/* Main Stats Card */}
            <div className="relative bg-gradient-to-br from-charcoal to-slate rounded-3xl p-10 md:p-12 shadow-2xl overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
              </div>

              <div className="relative z-10 text-center">
                <p className="text-white/60 font-semibold uppercase tracking-[0.3em] text-sm mb-6">
                  The Cost of Confusion
                </p>

                <div className="mb-8">
                  <span className="font-display text-8xl md:text-[120px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-vector-rose via-signal-amber to-vector-rose animate-gradient-shift leading-none">
                    $127
                  </span>
                </div>

                <p className="text-2xl md:text-3xl font-medium text-white mb-2">
                  in lost sales
                </p>
                <p className="text-white/50">
                  Per failed search. Per day. Per store.
                </p>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 bg-white rounded-2xl p-5 shadow-xl border border-slate/10 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-charcoal">68%</p>
                  <p className="text-sm text-slate">bounce rate</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white rounded-2xl p-5 shadow-xl border border-slate/10 animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-charcoal">~2%</p>
                  <p className="text-sm text-slate">text search CVR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
