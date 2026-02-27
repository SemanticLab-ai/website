import { Button } from "~/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router";

export function UmbrellaHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-gradient-rose noise-overlay">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-vector-rose/20 blob blob-animated blur-3xl" />
      <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-neural-teal/15 blob blob-animated blur-3xl" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-signal-amber/10 blob blur-3xl" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left: Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-vector-rose/20 shadow-lg mb-8">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-charcoal">Now Live: Image Enhancer + SmartApply</span>
              <ArrowRight className="w-4 h-4 text-vector-rose" />
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-display font-bold text-charcoal mb-8">
              <span className="block">AI Tools That</span>
              <span className="block mt-2">
                Work As Hard{" "}
                <span className="gradient-text-rose italic">As You Do</span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate leading-relaxed mb-10 max-w-xl">
              From product photos to tailored resumes —{" "}
              <span className="text-charcoal font-semibold">AI products built to save you hours, not add complexity</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-vector-rose to-vector-rose-dark hover:from-vector-rose-dark hover:to-vector-rose text-white shadow-xl shadow-vector-rose/30 transition-all duration-300 hover:scale-105 hover:shadow-vector-rose/50 group"
                asChild
              >
                <Link to="/app/image-enhancer" className="flex items-center gap-3">
                  Try Image Enhancer
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                size="lg"
                className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-smart-indigo to-smart-indigo-dark hover:from-smart-indigo-dark hover:to-smart-indigo text-white shadow-xl shadow-smart-indigo/30 transition-all duration-300 hover:scale-105 hover:shadow-smart-indigo/50 group"
                asChild
              >
                <a href="https://smart-apply.contact-e0b.workers.dev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  Try SmartApply
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                    className="w-10 h-10 rounded-full border-2 border-white shadow-lg object-cover"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm text-slate">
                  Built by <span className="font-semibold text-charcoal">Raihan & Naila</span> in Melbourne
                </p>
                <p className="text-xs text-slate/70">Founder-led. Bootstrapped. Independent.</p>
              </div>
            </div>
          </div>

          {/* Right: Before/After Mockup */}
          <div className="relative lg:pl-8">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate/10">
              {/* Browser Chrome */}
              <div className="bg-pearl/80 backdrop-blur px-4 py-3 flex items-center gap-3 border-b border-slate/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-vector-rose/60" />
                  <div className="w-3 h-3 rounded-full bg-signal-amber/60" />
                  <div className="w-3 h-3 rounded-full bg-neural-teal/60" />
                </div>
                <div className="flex-1 bg-white/80 px-4 py-1.5 rounded-lg text-xs text-slate font-mono">
                  app.semanticlab.ai/image-enhancer
                </div>
              </div>

              {/* Before/After Demo */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {/* Before */}
                  <div className="relative">
                    <div className="aspect-square rounded-xl overflow-hidden bg-slate/5">
                      <img
                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop"
                        alt="Before enhancement"
                        className="w-full h-full object-cover opacity-70 saturate-50"
                      />
                    </div>
                    <span className="absolute top-2 left-2 px-2 py-1 bg-charcoal/70 text-white text-xs font-semibold rounded-lg">
                      Before
                    </span>
                  </div>
                  {/* After */}
                  <div className="relative">
                    <div className="aspect-square rounded-xl overflow-hidden bg-white shadow-lg">
                      <img
                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop"
                        alt="After enhancement"
                        className="w-full h-full object-cover brightness-110 contrast-110 saturate-110"
                      />
                    </div>
                    <span className="absolute top-2 left-2 px-2 py-1 bg-neural-teal text-white text-xs font-semibold rounded-lg">
                      After
                    </span>
                  </div>
                </div>

                {/* Processing indicator */}
                <div className="mt-4 flex items-center gap-3 p-3 bg-pearl rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-neural-teal/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-neural-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-charcoal">Enhancement Complete</p>
                    <p className="text-xs text-slate">Background removed, centered, enhanced</p>
                  </div>
                  <span className="text-xs font-mono text-neural-teal font-bold">4.2s</span>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -top-4 -right-4 md:top-8 md:-right-8 bg-white rounded-2xl p-4 shadow-xl border border-slate/10 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-neural-teal/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-neural-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-charcoal">3 steps</p>
                  <p className="text-xs text-slate">fully automated</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 md:bottom-12 md:-left-8 bg-charcoal text-white rounded-2xl px-5 py-3 shadow-xl animate-float-delayed">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-neural-teal rounded-full animate-pulse" />
                <span className="text-sm font-medium">AI-Powered Enhancement</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pearl to-transparent" />
    </section>
  );
}
