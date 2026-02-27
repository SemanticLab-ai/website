import { Button } from "~/components/ui/button";
import { ArrowRight, ImagePlus } from "lucide-react";
import { Link } from "react-router";

export function IEHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-gradient-rose noise-overlay">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-vector-rose/20 blob blob-animated blur-3xl" />
      <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-neural-teal/15 blob blob-animated blur-3xl" style={{ animationDelay: "2s" }} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-vector-rose/20 shadow-lg mb-8">
            <ImagePlus className="w-4 h-4 text-vector-rose" />
            <span className="text-sm font-medium text-charcoal">AI Image Enhancement</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-display font-bold text-charcoal mb-8">
            Turn Ugly Product Photos Into{" "}
            <span className="gradient-text-rose italic">Professional Images</span>{" "}
            in Seconds
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate leading-relaxed mb-10 max-w-2xl mx-auto">
            AI-powered background removal, auto-centering, and image enhancement.
            No Photoshop. No design skills. Just <span className="text-charcoal font-semibold">better product photos</span>.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-vector-rose to-vector-rose-dark hover:from-vector-rose-dark hover:to-vector-rose text-white shadow-xl shadow-vector-rose/30 transition-all duration-300 hover:scale-105 group"
              asChild
            >
              <Link to="/app/image-enhancer" className="flex items-center gap-3">
                Start Enhancing Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 px-8 text-lg rounded-full bg-white/80 backdrop-blur-sm border-2 border-charcoal/10 text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300"
              asChild
            >
              <Link to="/products/image-enhancer/pricing">See Pricing</Link>
            </Button>
          </div>

          {/* Founder badge */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex -space-x-3">
              {[
                "/images/founders/raihan-avatar.jpg",
                "/images/founders/naila-avatar.jpg",
              ].map((src, i) => (
                <img key={i} src={src} alt="Founder" className="w-10 h-10 rounded-full border-2 border-white shadow-lg object-cover" />
              ))}
            </div>
            <div>
              <p className="text-sm text-slate">
                Built by <span className="font-semibold text-charcoal">Raihan & Naila</span>
              </p>
              <p className="text-xs text-slate/70">Founder-led. No sign-up for first 3 images.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pearl to-transparent" />
    </section>
  );
}
