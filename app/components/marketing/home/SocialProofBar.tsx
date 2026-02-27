import { Users, Layers, Zap, MapPin } from "lucide-react";

export function SocialProofBar() {
  const indicators = [
    {
      icon: Users,
      label: "Founder-Led",
      detail: "Built by Raihan & Naila",
      gradient: "from-vector-rose to-vector-rose-dark",
    },
    {
      icon: Layers,
      label: "2 Products Live",
      detail: "Image Enhancer + SmartApply",
      gradient: "from-smart-indigo to-smart-indigo-dark",
    },
    {
      icon: Zap,
      label: "AI-Powered",
      detail: "Built on cutting-edge AI models",
      gradient: "from-neural-teal to-neural-teal-dark",
    },
    {
      icon: MapPin,
      label: "Melbourne, AU",
      detail: "Bootstrapped. Independent.",
      gradient: "from-signal-amber to-signal-amber-dark",
    },
  ];

  return (
    <section className="relative py-12 md:py-16 bg-white border-y border-slate/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-vector-rose/5 via-transparent to-smart-indigo/5" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {indicators.map((item, i) => (
            <div key={item.label} className="contents">
              <div className="flex items-center gap-4 group">
                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-1">{item.detail}</p>
                  <p className="text-lg font-bold text-charcoal">{item.label}</p>
                </div>
              </div>

              {i < indicators.length - 1 && (
                <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-slate/20 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
