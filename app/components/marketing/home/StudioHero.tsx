import { Button } from "~/components/ui/button";
import { ArrowDown, ArrowUpRight, Sparkles, Check, Wand2 } from "lucide-react";

export function StudioHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-gradient-hero noise-overlay">
      {/* Decorative glows */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-lime/10 blob blob-animated blur-3xl" />
      <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-teal/8 blob blob-animated blur-3xl" style={{ animationDelay: "2s" }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 dot-pattern opacity-50" />

      {/* Large watermark text */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center overflow-hidden pointer-events-none">
        <span className="watermark-text whitespace-nowrap translate-y-[30%]">SEMANTICLAB</span>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Left: Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/10 backdrop-blur-sm rounded-full border border-lime/20 mb-8">
              <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
              <span className="text-sm font-medium text-lime">Founder-Led Product Studio</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Turn Your Idea Into a{" "}
              <span className="gradient-text-lime">Shipped, AI-Native</span>{" "}
              Product.
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-xl">
              We're a founder-led product studio helping ambitious individuals and early-stage teams{" "}
              <span className="text-white font-medium">design, build, and launch meaningful digital platforms</span>{" "}
              in today's AI-driven world.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="h-14 px-8 text-lg rounded-full bg-lime hover:bg-lime-dark text-dark-bg font-semibold shadow-xl shadow-lime/20 transition-all duration-300 hover:scale-105 hover:shadow-lime/40 group"
                asChild
              >
                <a href="mailto:hello@semanticlab.ai?subject=I%20have%20an%20idea" className="flex items-center gap-3">
                  Start Your Idea
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg rounded-full border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
                asChild
              >
                <a href="#platforms" className="flex items-center gap-3">
                  See Our Work
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Founder intro */}
            <div className="flex items-center gap-4">
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
              <div>
                <p className="text-sm text-white/60">
                  Built by <span className="font-semibold text-white">Raihan & Naila</span> in Melbourne
                </p>
                <p className="text-xs text-white/40">Strategy. Design. Execution.</p>
              </div>
            </div>
          </div>

          {/* Right: App Preview — Image Enhancer mockup */}
          <div className="relative lg:pl-4 hidden lg:block">
            <div className="relative glass-card rounded-3xl overflow-hidden glow-lime">
              {/* Browser Chrome */}
              <div className="bg-dark-surface/80 backdrop-blur px-4 py-3 flex items-center gap-3 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-lime/40" />
                  <div className="w-3 h-3 rounded-full bg-teal/40" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                </div>
                <div className="flex-1 bg-white/5 px-4 py-1.5 rounded-lg text-xs text-white/40 font-mono">
                  app.semanticlab.ai/image-enhancer
                </div>
              </div>

              {/* App Content — Before/After */}
              <div className="p-6 bg-dark-bg/50">
                {/* Before/After Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Before */}
                  <div className="relative">
                    <div className="aspect-square rounded-xl overflow-hidden bg-white/5">
                      <img
                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop"
                        alt="Before enhancement"
                        className="w-full h-full object-cover opacity-60 saturate-50 brightness-75"
                      />
                    </div>
                    <span className="absolute top-2 left-2 px-2.5 py-1 bg-white/10 backdrop-blur text-white text-xs font-semibold rounded-lg border border-white/10">
                      Before
                    </span>
                  </div>
                  {/* After */}
                  <div className="relative">
                    <div className="aspect-square rounded-xl overflow-hidden bg-white/5 border border-lime/10">
                      <img
                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop"
                        alt="After enhancement"
                        className="w-full h-full object-cover brightness-110 contrast-110 saturate-110"
                      />
                    </div>
                    <span className="absolute top-2 left-2 px-2.5 py-1 bg-lime/20 backdrop-blur text-lime text-xs font-semibold rounded-lg border border-lime/20">
                      After
                    </span>
                  </div>
                </div>

                {/* Processing complete indicator */}
                <div className="mt-4 flex items-center gap-3 p-3.5 glass-card rounded-xl">
                  <div className="w-9 h-9 rounded-lg bg-lime/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-lime" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">Enhancement Complete</p>
                    <p className="text-xs text-white/40">Background removed &middot; Centered &middot; Enhanced</p>
                  </div>
                  <span className="text-xs font-mono text-lime font-bold">4.2s</span>
                </div>

                {/* Enhancement settings preview */}
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {[
                    { label: "BG Remove", active: true },
                    { label: "Auto-Center", active: true },
                    { label: "AI Enhance", active: true },
                  ].map((setting) => (
                    <div key={setting.label} className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg bg-lime/5 border border-lime/10">
                      <div className="w-3 h-3 rounded-sm bg-lime/20 flex items-center justify-center">
                        <Check className="w-2 h-2 text-lime" />
                      </div>
                      <span className="text-[11px] text-white/60 font-medium">{setting.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent" />
    </section>
  );
}
