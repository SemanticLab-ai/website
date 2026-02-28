import { Button } from "~/components/ui/button";
import { ArrowUpRight, ImagePlus, FileText, Layers } from "lucide-react";
import { Link } from "react-router";

const platforms = [
  {
    name: "Image Enhancer",
    icon: ImagePlus,
    status: "Live",
    tagline: "AI-powered image optimisation built for e-commerce sellers and creators.",
    story: "We saw how low-quality visuals limit conversions, so we built a platform that enhances clarity, lighting, and presentation in seconds.",
    href: "/products/image-enhancer",
    external: false,
  },
  {
    name: "SmartApply",
    icon: FileText,
    status: "Beta",
    tagline: "AI-powered resume tailoring built for today's competitive job market.",
    story: "We experienced the friction of applying endlessly without traction, so we created a tool that intelligently adapts resumes to increase interview potential.",
    href: "https://smart-apply.contact-e0b.workers.dev/",
    external: true,
  },
];

export function PlatformsBuilt() {
  return (
    <section id="platforms" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-surface" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Decorative glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-lime/5 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-teal/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/10 backdrop-blur rounded-full border border-lime/20 mb-6">
            <Layers className="w-4 h-4 text-lime" />
            <span className="text-sm font-semibold text-lime uppercase tracking-wider">Our Work</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            Platforms{" "}
            <span className="gradient-text-lime">We've Built</span>
          </h2>

          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
            These are products we designed and developed end-to-end, identifying the problem, defining the solution, and bringing them to market.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="glass-card rounded-3xl p-8 md:p-10 hover-lift group"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center">
                  <platform.icon className="w-6 h-6 text-lime" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">{platform.name}</h3>
                <span className="ml-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime/10">
                  <span className="w-2 h-2 rounded-full animate-pulse bg-lime" />
                  <span className="text-xs font-semibold text-lime">{platform.status}</span>
                </span>
              </div>

              {/* Tagline */}
              <p className="text-lg text-white/80 font-medium mb-3">{platform.tagline}</p>

              {/* Story */}
              <p className="text-white/50 leading-relaxed mb-8">{platform.story}</p>

              {/* CTA */}
              <Button
                size="lg"
                className="w-full h-12 rounded-full bg-lime hover:bg-lime-dark text-dark-bg font-semibold shadow-lg shadow-lime/20 transition-all duration-300 hover:scale-105 group/btn"
                asChild
              >
                {platform.external ? (
                  <a href={platform.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    View Platform
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <Link to={platform.href} className="flex items-center justify-center gap-2">
                    View Platform
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                )}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
