import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
  step?: string;
  centered?: boolean;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  gradient,
  step,
  centered = false,
}: FeatureCardProps) {
  const hasGradient = !!gradient;

  return (
    <div
      className={`group relative glass-card rounded-2xl p-8 hover-lift ${centered ? "text-center" : ""} overflow-hidden`}
    >
      {/* Gradient hover overlay */}
      {hasGradient && (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />
      )}

      {/* Step number watermark */}
      {step && (
        <span className="text-6xl font-display font-bold text-lime/10 absolute top-4 right-6">
          {step}
        </span>
      )}

      {/* Icon */}
      {hasGradient ? (
        <div
          className={`relative ${centered ? "mx-auto" : ""} w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-7 h-7 text-white" />
        </div>
      ) : (
        <div
          className={`w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center mb-4 ${centered ? "mx-auto" : ""}`}
        >
          <Icon className="w-6 h-6 text-lime" />
        </div>
      )}

      <h3
        className={`${hasGradient ? "text-xl" : "text-lg"} font-bold text-white ${hasGradient ? "mb-3" : "mb-2"}`}
      >
        {title}
      </h3>
      <p className="text-white/50 leading-relaxed">{description}</p>

      {/* Corner gradient accent */}
      {hasGradient && (
        <div
          className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-[100px]`}
        />
      )}
    </div>
  );
}
