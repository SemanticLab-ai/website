import type { ReactNode } from "react";

interface SectionWrapperProps {
  bg?: "dark-bg" | "dark-surface" | "mesh-hero";
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({
  bg = "dark-bg",
  children,
  className = "",
  id,
}: SectionWrapperProps) {
  const bgClasses: Record<string, string> = {
    "dark-bg": "bg-dark-bg",
    "dark-surface": "bg-dark-surface",
    "mesh-hero": "mesh-gradient-dark",
  };

  const hasMesh = bg === "mesh-hero";

  return (
    <section
      id={id}
      className={`relative py-24 md:py-32 overflow-hidden ${className}`}
    >
      {/* Background */}
      <div className={`absolute inset-0 ${bgClasses[bg]}`} />
      {hasMesh && <div className="absolute inset-0 noise-overlay opacity-50" />}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Container */}
      <div className="container mx-auto px-6 lg:px-8 relative">
        {children}
      </div>
    </section>
  );
}
