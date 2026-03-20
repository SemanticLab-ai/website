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
            Over a decade of building platforms at scale — payment systems, sports tech, SaaS products — taught us what works and what doesn't in product development.
          </p>

          <p className="text-lg text-white/50 leading-relaxed">
            As AI reshaped every industry, we kept seeing the same gap: <span className="text-white font-semibold">powerful technology trapped inside impressive demos that fell apart in real workflows.</span>
          </p>

          <p className="text-lg text-white/50 leading-relaxed">
            We saw founders with great ideas struggling to build products that actually worked — and enterprise AI tools that were too generic to solve specific problems well.
          </p>

          <GlassCard className="relative my-10 p-8">
            <div className="absolute -left-[2px] top-6 w-1 h-16 bg-gradient-to-b from-lime to-teal rounded-full" />
            <p className="text-3xl md:text-4xl font-display font-bold text-white leading-snug tracking-tight">
              So we built{" "}
              <span className="gradient-text-lime">SemanticLab.</span>
            </p>
          </GlassCard>

          <p className="text-lg text-white/50 leading-relaxed">
            A focused, hands-on product studio where deep engineering experience meets research-driven design — helping ideas become products people actually reach for every day.
          </p>

          {/* Founders attribution */}
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              {[
                { src: "/images/founders/raihan-avatar.jpg", alt: "Raihan Razi" },
                { src: "/images/founders/naila-avatar.jpg", alt: "Naila Rahman" },
              ].map((founder) => (
                <img
                  key={founder.alt}
                  src={founder.src}
                  alt={founder.alt}
                  width={40}
                  height={40}
                  loading="lazy"
                  decoding="async"
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
