import { Target, Heart, Scale, Users, Sparkles } from "lucide-react";
import { SectionWrapper } from "~/components/shared/SectionWrapper";
import { SectionHeader } from "~/components/shared/SectionHeader";
import { GlassCard } from "~/components/shared/GlassCard";

const differentiators = [
  {
    icon: Target,
    title: "Outcomes, not deliverables",
    description: "We think in shipped products and real traction, not slide decks and handoffs.",
  },
  {
    icon: Heart,
    title: "Longevity, not just launch",
    description: "We care about what happens after day one. Products should grow, not just go live.",
  },
  {
    icon: Scale,
    title: "Vision meets feasibility",
    description: "We balance ambitious ideas with what's technically and financially realistic.",
  },
  {
    icon: Users,
    title: "Real users, not trends",
    description: "We design for the people who'll actually use your product, not for awards or aesthetics.",
  },
  {
    icon: Sparkles,
    title: "AI with intention",
    description: "We integrate AI thoughtfully, solving real problems, not as a marketing gimmick.",
  },
];

export function HowWereDifferent() {
  return (
    <SectionWrapper bg="dark-bg">
      {/* Decorative glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-lime/5 rounded-full blur-3xl" />

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left: Content */}
        <div>
          <SectionHeader
            badge="Why Us"
            badgeIcon={Sparkles}
            title={
              <>
                We're Founders,{" "}
                <span className="gradient-text-lime">Not Just Service Providers.</span>
              </>
            }
            subtitle="We stay close to the work. We stay close to you."
            centered={false}
          />

          {/* Quote */}
          <GlassCard className="relative p-8">
            <div className="absolute -left-[2px] top-8 w-1 h-16 bg-gradient-to-b from-lime to-teal rounded-full" />
            <p className="text-white font-display text-xl italic leading-relaxed mb-4">
              "We've been on the other side, building products for someone else's roadmap. Now we help founders build their own."
            </p>
            <p className="text-sm text-white/40 font-medium">
              — Raihan & Naila
            </p>
          </GlassCard>
        </div>

        {/* Right: Differentiators */}
        <div className="space-y-4">
          {differentiators.map((item) => (
            <GlassCard key={item.title} hover className="flex items-start gap-4 p-5">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-lime/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-lime" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                <p className="text-white/50">{item.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
