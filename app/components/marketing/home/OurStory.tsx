import { BookOpen } from "lucide-react";
import { SectionWrapper } from "~/components/shared/SectionWrapper";
import { SectionHeader } from "~/components/shared/SectionHeader";
import { GlassCard } from "~/components/shared/GlassCard";

export function OurStory() {
  return (
    <SectionWrapper bg="dark-bg">
      {/* Decorative glows */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-lime/5 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-teal/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-3xl mx-auto">
        <SectionHeader
          badge="Our Story"
          badgeIcon={BookOpen}
          centered={false}
        />

        {/* Narrative */}
        <div className="space-y-6">
          <p className="text-2xl md:text-3xl text-white font-display font-bold leading-relaxed tracking-tight">
            We spent years inside corporate systems, designing platforms, fixing friction, improving digital experiences for businesses that weren't ours.
          </p>

          <p className="text-lg text-white/50 leading-relaxed">
            We helped scale products. We solved complex UX problems. We built systems that worked.
            But something was missing.
          </p>

          <p className="text-lg text-white/50 leading-relaxed">
            As AI reshaped industries and e-commerce exploded, we saw more people wanting to build something of their own, products with purpose, platforms with independence, ideas that mattered.
          </p>

          <p className="text-lg text-white font-semibold leading-relaxed">
            We were on the same journey.
          </p>

          <GlassCard className="relative my-10 p-8">
            <div className="absolute -left-[2px] top-6 w-1 h-16 bg-gradient-to-b from-lime to-teal rounded-full" />
            <p className="text-3xl md:text-4xl font-display font-bold text-white leading-snug tracking-tight">
              So we built{" "}
              <span className="gradient-text-lime">SemanticLab.</span>
            </p>
          </GlassCard>

          <p className="text-lg text-white/50 leading-relaxed">
            Not as another agency.
            But as a focused, hands-on product studio, where strategy, design, and execution come together to help you ship something real.
          </p>

          {/* Founders attribution */}
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              {[
                "/images/founders/raihan-avatar.jpg",
                "/images/founders/naila-avatar.jpg",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Founder"
                  className="w-10 h-10 rounded-full border-2 border-dark-bg shadow-lg object-cover"
                />
              ))}
            </div>
            <p className="text-sm text-white/50">
              Built by <span className="font-semibold text-white">Raihan & Naila</span> in Melbourne.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
