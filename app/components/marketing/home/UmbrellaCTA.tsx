import { Button } from "~/components/ui/button";
import { ArrowRight, Mail, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "react-router";

export function UmbrellaCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background with mesh gradient */}
      <div className="absolute inset-0 mesh-gradient-dark" />
      <div className="absolute inset-0 noise-overlay opacity-50" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-lime/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal/8 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full border border-white/20 mb-8">
            <Sparkles className="w-4 h-4 text-lime" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">Get Started Today</span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-display-sm font-bold text-white leading-tight mb-8">
            Ready to Let AI{" "}
            <span className="block mt-2">
              <span className="gradient-text-lime">Do the Heavy Lifting?</span>
            </span>
          </h2>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="h-16 px-10 text-lg rounded-full bg-lime hover:bg-lime-dark text-dark-bg font-semibold shadow-2xl shadow-lime/30 transition-all duration-300 hover:scale-105 group"
              asChild
            >
              <Link to="/app/image-enhancer" className="flex items-center gap-3">
                Try Image Enhancer
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              size="lg"
              className="h-16 px-10 text-lg rounded-full glass-card text-white hover:border-lime/30 transition-all duration-300 hover:scale-105 group"
              asChild
            >
              <a href="https://smart-apply.contact-e0b.workers.dev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                Try SmartApply
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-white/80">
              <svg className="w-5 h-5 text-lime" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Free to start</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full" />
            <div className="flex items-center gap-2 text-white/80">
              <svg className="w-5 h-5 text-lime" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">No credit card required</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full" />
            <div className="flex items-center gap-2 text-white/80">
              <svg className="w-5 h-5 text-lime" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Built by founders</span>
            </div>
          </div>

          {/* Contact */}
          <div className="inline-flex flex-col items-center gap-4 p-6 bg-white/5 backdrop-blur rounded-2xl border border-white/10">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-lime" />
              <span className="text-white/80">Questions?</span>
            </div>
            <a
              href="mailto:hello@semanticlab.ai"
              className="flex items-center gap-2 text-lg font-semibold text-white hover:text-lime transition-colors group"
            >
              <Mail className="w-5 h-5" />
              hello@semanticlab.ai
            </a>
            <p className="text-sm text-white/50">
              We'll reply within 4 hours. (Really.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
