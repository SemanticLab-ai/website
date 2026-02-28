import { Button } from "~/components/ui/button";
import { Bell } from "lucide-react";
import { ComingSoonBadge } from "~/components/shared/ComingSoonBadge";

export function VSHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-gradient-hero noise-overlay">
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-teal/5 blob blob-animated blur-3xl" />
      <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-lime/5 blob blob-animated blur-3xl" style={{ animationDelay: "2s" }} />
      <div className="absolute inset-0 dot-pattern opacity-50" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <ComingSoonBadge className="mb-8" />

          <h1 className="font-display text-5xl md:text-6xl lg:text-display font-bold text-white mb-8">
            <span className="block">The Visual Search</span>
            <span className="block mt-2">
              Your Shoppers{" "}
              <span className="gradient-text-lime italic">Deserve</span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/50 leading-relaxed mb-10 max-w-2xl mx-auto">
            Fashion-specific AI that understands{" "}
            <span className="text-white font-semibold">"like this but longer sleeves"</span>
            {" "}and turns browsing into buying.
          </p>

          <Button
            size="lg"
            className="h-14 px-8 text-lg rounded-full bg-lime hover:bg-lime-dark text-dark-bg font-semibold shadow-xl shadow-lime/20 transition-all duration-300 hover:scale-105 group"
          >
            <Bell className="w-5 h-5 mr-2" />
            Get Notified When We Launch
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent" />
    </section>
  );
}
