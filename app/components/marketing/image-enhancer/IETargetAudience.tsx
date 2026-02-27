import { Store, ShoppingBag, Camera, Building2, Users } from "lucide-react";
import { colorMap, type BrandColor } from "~/lib/utils";

export function IETargetAudience() {
  const audiences: { icon: React.ElementType; title: string; description: string; color: BrandColor }[] = [
    {
      icon: Store,
      title: "Shopify Merchants",
      description: "Process your entire catalog to marketplace standards without hiring a photographer.",
      color: "vector-rose",
    },
    {
      icon: ShoppingBag,
      title: "Dropshippers",
      description: "Turn supplier photos into professional product images that convert.",
      color: "neural-teal",
    },
    {
      icon: Camera,
      title: "Product Photographers",
      description: "Speed up post-processing. Let AI handle backgrounds while you focus on shooting.",
      color: "signal-amber",
    },
    {
      icon: Building2,
      title: "Agencies & Studios",
      description: "Process client images at scale with batch processing and API access.",
      color: "vector-rose",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-pearl via-white to-pearl" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full border border-slate/10 shadow-lg mb-6">
            <Users className="w-4 h-4 text-neural-teal" />
            <span className="text-sm font-semibold text-charcoal uppercase tracking-wider">Built For</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-h1 font-bold text-charcoal leading-tight mb-6">
            Who Is This{" "}
            <span className="gradient-text-teal italic">For?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {audiences.map((audience) => {
            const colors = colorMap[audience.color];
            return (
              <div key={audience.title} className="group bg-white rounded-3xl p-8 border border-slate/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center">
                <div className={`mx-auto w-14 h-14 rounded-2xl ${colors.bg10} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <audience.icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-3">{audience.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{audience.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
