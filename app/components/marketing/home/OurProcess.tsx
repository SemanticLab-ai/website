import { Search, PenTool, Hammer, Rocket } from "lucide-react";
import { SectionWrapper } from "~/components/shared/SectionWrapper";
import { SectionHeader } from "~/components/shared/SectionHeader";
import { FeatureCard } from "~/components/shared/FeatureCard";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description: "We understand your vision, market, and users.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Define",
    description: "We identify gaps, structure your product strategy, and remove friction.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Design & Build",
    description: "We craft intuitive experiences and develop scalable systems.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Iterate",
    description: "We ship. We test. We refine.",
  },
];

export function OurProcess() {
  return (
    <SectionWrapper bg="dark-surface">
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-lime/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal/5 rounded-full blur-3xl" />

      <SectionHeader
        badge="Our Process"
        badgeIcon={Hammer}
        title={
          <>
            Simple. Focused.{" "}
            <span className="gradient-text-lime">Effective.</span>
          </>
        }
      />

      {/* Process Steps */}
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <FeatureCard
              key={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
              step={step.number}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
