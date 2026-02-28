import { Button } from "~/components/ui/button";
import { ArrowUpRight, Mail, MessageCircle, Sparkles, Calendar } from "lucide-react";

export function StudioCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient-dark" />
      <div className="absolute inset-0 noise-overlay opacity-50" />

      {/* Decorative glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-lime/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal/8 rounded-full blur-3xl" />

      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <span className="watermark-text whitespace-nowrap opacity-50">BUILD</span>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/10 backdrop-blur rounded-full border border-lime/20 mb-8">
            <Sparkles className="w-4 h-4 text-lime" />
            <span className="text-sm font-semibold text-lime uppercase tracking-wider">Let's Build</span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            Ready to Build Something{" "}
            <span className="gradient-text-lime">Meaningful?</span>
          </h2>

          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10">
            Let's turn your idea into a product that works, and lasts.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="h-16 px-10 text-lg rounded-full bg-lime hover:bg-lime-dark text-dark-bg font-semibold shadow-2xl shadow-lime/30 transition-all duration-300 hover:scale-105 group"
              asChild
            >
              <a href="mailto:hello@semanticlab.ai?subject=I%20have%20an%20idea" className="flex items-center gap-3">
                Start Your Idea
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Button>

            <Button
              size="lg"
              className="h-16 px-10 text-lg rounded-full glass-card text-white hover:border-lime/30 transition-all duration-300 hover:scale-105 group"
              asChild
            >
              <a href="mailto:hello@semanticlab.ai?subject=Discovery%20Call%20Request" className="flex items-center gap-3">
                <Calendar className="w-5 h-5" />
                Book a Discovery Call
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            {["No upfront commitment", "Founder-to-founder conversations", "Melbourne, Australia"].map((text, i) => (
              <div key={text} className="flex items-center gap-2">
                {i > 0 && <div className="hidden sm:block w-1 h-1 bg-white/20 rounded-full -ml-3 mr-1" />}
                <svg className="w-5 h-5 text-lime" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-white/70">{text}</span>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="inline-flex flex-col items-center gap-4 p-6 glass-card rounded-2xl">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-teal" />
              <span className="text-white/60">Questions?</span>
            </div>
            <a
              href="mailto:hello@semanticlab.ai"
              className="flex items-center gap-2 text-lg font-semibold text-white hover:text-lime transition-colors group"
            >
              <Mail className="w-5 h-5" />
              hello@semanticlab.ai
            </a>
            <p className="text-sm text-white/40">
              We'll reply within 4 hours. (Really.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
