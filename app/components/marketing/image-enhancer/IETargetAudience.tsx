import { Store, ShoppingBag, Camera, Building2, Users } from "lucide-react";
import { SectionWrapper } from "~/components/shared/SectionWrapper";
import { SectionHeader } from "~/components/shared/SectionHeader";

export function IETargetAudience() {
  const audiences = [
    {
      icon: Store,
      title: "Shopify Merchants",
      description: "Process your entire catalog to marketplace standards without hiring a photographer.",
    },
    {
      icon: ShoppingBag,
      title: "Dropshippers",
      description: "Turn supplier photos into professional product images that convert.",
    },
    {
      icon: Camera,
      title: "Product Photographers",
      description: "Speed up post-processing. Let AI handle backgrounds while you focus on shooting.",
    },
    {
      icon: Building2,
      title: "Agencies & Studios",
      description: "Process client images at scale with batch processing and API access.",
    },
  ];

  return (
    <SectionWrapper bg="dark-surface">
      <SectionHeader
        badge="Built For"
        badgeIcon={Users}
        title={
          <>
            Who Is This{" "}
            <span className="gradient-text-lime">For?</span>
          </>
        }
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {audiences.map((audience) => (
          <div key={audience.title} className="group glass-card rounded-2xl p-8 hover-lift text-center">
            <div className="mx-auto w-14 h-14 rounded-2xl bg-lime/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <audience.icon className="w-7 h-7 text-lime" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">{audience.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{audience.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
