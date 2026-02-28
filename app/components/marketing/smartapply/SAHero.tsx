import { Button } from "~/components/ui/button";
import { ArrowRight, Briefcase } from "lucide-react";

export function SAHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden noise-overlay">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient-hero" />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-lime/5 blob blob-animated blur-3xl" />
      <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-teal/5 blob blob-animated blur-3xl" style={{ animationDelay: "2s" }} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-50" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/10 backdrop-blur rounded-full border border-lime/20 mb-8">
            <Briefcase className="w-4 h-4 text-lime" />
            <span className="text-sm font-medium text-lime">AI Resume Tailoring</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-lime/10 rounded-full">
              <span className="w-1.5 h-1.5 bg-lime rounded-full animate-pulse" />
              <span className="text-[10px] font-semibold text-lime">Beta</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-display font-bold text-white mb-8">
            Tailored Resumes.{" "}
            <span className="gradient-text-lime italic">In Minutes, Not Hours.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/50 leading-relaxed mb-10 max-w-2xl mx-auto">
            Upload your work artifacts, paste a job description, and let AI generate a resume that's{" "}
            <span className="text-white font-semibold">tailored for the role</span> — not a generic template.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="h-14 px-8 text-lg rounded-full bg-lime hover:bg-lime-dark text-dark-bg font-semibold shadow-xl shadow-lime/20 transition-all duration-300 hover:scale-105 group"
              asChild
            >
              <a href="https://smart-apply.contact-e0b.workers.dev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                Try SmartApply Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 px-8 text-lg rounded-full border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              asChild
            >
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent" />
    </section>
  );
}
