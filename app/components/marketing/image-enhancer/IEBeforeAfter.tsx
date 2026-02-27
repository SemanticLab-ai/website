import { Sparkles } from "lucide-react";
import { BeforeAfterSlider } from "~/components/shared/BeforeAfterSlider";

export function IEBeforeAfter() {
  const demos = [
    {
      before: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
      after: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
      label: "Sneakers",
    },
    {
      before: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
      after: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
      label: "Watch",
    },
    {
      before: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
      after: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
      label: "Headphones",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-pearl via-white to-blush">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-vector-rose/10 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-neural-teal/10 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full border border-slate/10 shadow-lg mb-6">
            <Sparkles className="w-4 h-4 text-vector-rose" />
            <span className="text-sm font-semibold text-charcoal uppercase tracking-wider">See the Difference</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-h1 font-bold text-charcoal leading-tight mb-6">
            Before &{" "}
            <span className="gradient-text-rose italic">After</span>
          </h2>

          <p className="text-lg text-slate">
            Drag the slider to see the transformation. These are real product photos processed by our AI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {demos.map((demo) => (
            <div key={demo.label} className="space-y-4">
              <BeforeAfterSlider
                beforeSrc={demo.before}
                afterSrc={demo.after}
                className="aspect-square"
              />
              <p className="text-center text-sm font-semibold text-charcoal">{demo.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
