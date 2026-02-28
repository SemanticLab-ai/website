import { BookOpen } from "lucide-react";

export function OurStory() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-bg" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Decorative glows */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-lime/5 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-teal/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/10 backdrop-blur rounded-full border border-lime/20 mb-8">
            <BookOpen className="w-4 h-4 text-lime" />
            <span className="text-sm font-semibold text-lime uppercase tracking-wider">Our Story</span>
          </div>

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

            <div className="relative my-10 glass-card rounded-2xl p-8">
              <div className="absolute -left-[2px] top-6 w-1 h-16 bg-gradient-to-b from-lime to-teal rounded-full" />
              <p className="text-3xl md:text-4xl font-display font-bold text-white leading-snug tracking-tight">
                So we built{" "}
                <span className="gradient-text-lime">SemanticLab.</span>
              </p>
            </div>

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
      </div>
    </section>
  );
}
