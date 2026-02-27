import { Button } from "~/components/ui/button";
import { ArrowRight, Upload, Wand2, Download, FileText, Target, FileCheck, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { colorMap, type BrandColor } from "~/lib/utils";

interface ProductShowcase {
  name: string;
  status: "live" | "beta";
  statusColor: string;
  color: BrandColor;
  tagline: string;
  steps: { icon: React.ElementType; title: string; description: string; color: BrandColor }[];
  ctaText: string;
  ctaHref: string;
  external?: boolean;
}

const showcases: ProductShowcase[] = [
  {
    name: "Image Enhancer",
    status: "live",
    statusColor: "emerald",
    color: "vector-rose",
    tagline: "Turn any product photo into a professional, marketplace-ready image in seconds.",
    steps: [
      { icon: Upload, title: "Upload", description: "Drop your product photo", color: "vector-rose" },
      { icon: Wand2, title: "Process", description: "AI enhances automatically", color: "neural-teal" },
      { icon: Download, title: "Download", description: "Get your perfect image", color: "signal-amber" },
    ],
    ctaText: "Start Enhancing Free",
    ctaHref: "/app/image-enhancer",
  },
  {
    name: "SmartApply",
    status: "beta",
    statusColor: "smart-indigo",
    color: "smart-indigo",
    tagline: "AI-powered resume tailoring that turns your experience into role-specific applications.",
    steps: [
      { icon: FileText, title: "Add Artifacts", description: "Upload your work samples", color: "smart-indigo" },
      { icon: Target, title: "Target Role", description: "Paste the job description", color: "neural-teal" },
      { icon: FileCheck, title: "Generate", description: "Get a tailored resume", color: "signal-amber" },
    ],
    ctaText: "Try the Beta",
    ctaHref: "https://smart-apply.contact-e0b.workers.dev/",
    external: true,
  },
];

export function FeaturedProduct() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-pearl via-white to-blush">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-vector-rose/10 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-smart-indigo/10 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full border border-vector-rose/20 shadow-lg mb-6">
              <Sparkles className="w-4 h-4 text-vector-rose" />
              <span className="text-sm font-semibold text-charcoal uppercase tracking-wider">Featured Products</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-h1 font-bold text-charcoal leading-tight mb-6">
              Built to Save You{" "}
              <span className="gradient-text italic">Hours, Not Add Complexity</span>
            </h2>

            <p className="text-lg md:text-xl text-slate max-w-2xl mx-auto">
              Each product is designed to do one thing exceptionally well. No bloat. No learning curve.
            </p>
          </div>

          {/* Dual Product Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {showcases.map((product) => (
              <div key={product.name} className="bg-white rounded-3xl p-8 border border-slate/10 shadow-xl">
                {/* Product Header */}
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-display font-bold text-charcoal">{product.name}</h3>
                  {product.status === "live" ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 rounded-full">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="text-xs font-semibold text-emerald-700">Live</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-smart-indigo/10 rounded-full">
                      <span className="w-2 h-2 bg-smart-indigo rounded-full animate-pulse" />
                      <span className="text-xs font-semibold text-smart-indigo">Beta</span>
                    </span>
                  )}
                </div>

                <p className="text-slate mb-8">{product.tagline}</p>

                {/* 3-Step Pipeline */}
                <div className="space-y-4 mb-8">
                  {product.steps.map((step, i) => (
                    <div key={step.title} className="flex items-center gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${colorMap[step.color].bg10} flex items-center justify-center`}>
                        <step.icon className={`w-6 h-6 ${colorMap[step.color].text}`} />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-slate uppercase tracking-wider">Step {i + 1}</div>
                        <p className="font-semibold text-charcoal">{step.title}</p>
                        <p className="text-sm text-slate">{step.description}</p>
                      </div>
                      {i < product.steps.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-slate/30 hidden sm:block" />
                      )}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  size="lg"
                  className={`w-full h-12 rounded-full text-white shadow-lg transition-all duration-300 hover:scale-105 group ${
                    product.color === "vector-rose"
                      ? "bg-gradient-to-r from-vector-rose to-vector-rose-dark shadow-vector-rose/30"
                      : "bg-gradient-to-r from-smart-indigo to-smart-indigo-dark shadow-smart-indigo/30"
                  }`}
                  asChild
                >
                  {product.external ? (
                    <a href={product.ctaHref} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      {product.ctaText}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <Link to={product.ctaHref} className="flex items-center justify-center gap-2">
                      {product.ctaText}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
