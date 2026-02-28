import { Sparkles } from "lucide-react";
import { BeforeAfterSlider } from "~/components/shared/BeforeAfterSlider";
import { SectionWrapper } from "~/components/shared/SectionWrapper";
import { SectionHeader } from "~/components/shared/SectionHeader";

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
    <SectionWrapper bg="dark-surface">
      {/* Decorative glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-lime/5 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-teal/5 rounded-full blur-3xl -translate-x-1/2" />

      <SectionHeader
        badge="See the Difference"
        badgeIcon={Sparkles}
        title={
          <>
            Before &{" "}
            <span className="gradient-text-lime">After</span>
          </>
        }
        subtitle="Drag the slider to see the transformation. These are real product photos processed by our AI."
      />

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {demos.map((demo) => (
          <div key={demo.label} className="space-y-4">
            <BeforeAfterSlider
              beforeSrc={demo.before}
              afterSrc={demo.after}
              className="aspect-square"
            />
            <p className="text-center text-sm font-semibold text-white">{demo.label}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
