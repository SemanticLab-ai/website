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
      <div className="absolute inset-0 bg-dark-surface" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/10 backdrop-blur rounded-full border border-lime/20 mb-6">
            <Users className="w-4 h-4 text-lime" />
            <span className="text-sm font-semibold text-lime uppercase tracking-wider">Built For</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-h1 font-bold text-white leading-tight mb-6">
            Who Is This{" "}
            <span className="gradient-text-lime italic">For?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {audiences.map((audience) => {
            const colors = colorMap[audience.color];
            return (
              <div key={audience.title} className="group glass-card rounded-2xl p-8 hover-lift text-center">
                <div className={`mx-auto w-14 h-14 rounded-2xl bg-lime/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <audience.icon className={`w-7 h-7 text-lime`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{audience.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{audience.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
