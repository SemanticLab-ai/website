import { Car, Wrench, Store, Globe, Check } from "lucide-react";
import { SectionWrapper } from "~/components/shared/SectionWrapper";
import { SectionHeader } from "~/components/shared/SectionHeader";

const audiences = [
  {
    icon: Car,
    title: "Auto Parts Retailers",
    description:
      "Sell auto parts online through Shopify while managing inventory in Pinnacle. Keep your catalog in sync without manual data entry.",
  },
  {
    icon: Wrench,
    title: "Wreckers & Dismantlers",
    description:
      "List recycled and reconditioned parts online automatically as they're cataloged in Pinnacle. Move inventory faster.",
  },
  {
    icon: Store,
    title: "Multi-Location Businesses",
    description:
      "Manage parts across multiple locations in Pinnacle and present a unified catalog on your Shopify storefront.",
  },
  {
    icon: Globe,
    title: "Wholesale to Retail",
    description:
      "Transition from wholesale-only to direct-to-consumer e-commerce with automated product listing and markup pricing.",
  },
];

export function SyncdTargetAudience() {
  return (
    <SectionWrapper bg="dark-bg">
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-teal/5 rounded-full blur-3xl" />

      <SectionHeader
        badge="Built For"
        badgeIcon={Car}
        title={
          <>
            Purpose-Built for{" "}
            <span className="gradient-text-lime">Auto Parts</span>
          </>
        }
        subtitle="We understand the auto parts industry. Syncd is designed around how Pinnacle businesses actually work."
      />

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto mb-16">
        {audiences.map((item) => (
          <div
            key={item.title}
            className="glass-card rounded-2xl p-8 hover-lift group"
          >
            <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center mb-5 group-hover:bg-lime/20 transition-colors">
              <item.icon className="w-6 h-6 text-lime" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-white/50 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Stats row */}
      <div className="max-w-4xl mx-auto">
        <div className="glass-card rounded-2xl p-8 md:p-12">
          <div className="grid gap-8 grid-cols-2 md:grid-cols-4 text-center">
            {[
              { value: "100K+", label: "SKUs supported" },
              { value: "10min", label: "Fastest sync" },
              { value: "8", label: "Field mappings" },
              { value: "99.9%", label: "Uptime SLA" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-lime mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
