import { ArrowRight, Briefcase } from "lucide-react";
import { HeroSection } from "~/components/shared/HeroSection";

export function SAHero() {
  return (
    <HeroSection
      badge={
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/10 backdrop-blur rounded-full border border-lime/20 mb-8">
          <Briefcase className="w-4 h-4 text-lime" />
          <span className="text-sm font-medium text-lime">AI Resume Tailoring</span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-lime/10 rounded-full">
            <span className="w-1.5 h-1.5 bg-lime rounded-full animate-pulse" />
            <span className="text-[10px] font-semibold text-lime">Beta</span>
          </span>
        </div>
      }
      title={
        <>
          Tailored Resumes.{" "}
          <span className="gradient-text-lime">In Minutes, Not Hours.</span>
        </>
      }
      subtitle={
        <>
          Upload your work artifacts, paste a job description, and let AI generate a resume that's{" "}
          <span className="text-white font-semibold">tailored for the role</span> — not a generic template.
        </>
      }
      primaryCTA={{
        label: "Try SmartApply Free",
        href: "https://smart-apply.contact-e0b.workers.dev/",
        icon: ArrowRight,
        external: true,
      }}
      secondaryCTA={{
        label: "See How It Works",
        href: "#how-it-works",
      }}
    />
  );
}
