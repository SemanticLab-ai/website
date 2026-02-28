import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  badge: string;
  badgeIcon: LucideIcon;
  title?: ReactNode;
  subtitle?: ReactNode;
  centered?: boolean;
}

export function SectionHeader({
  badge,
  badgeIcon: Icon,
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-16`}
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/10 backdrop-blur rounded-full border border-lime/20 mb-6">
        <Icon className="w-4 h-4 text-lime" />
        <span className="text-sm font-semibold text-lime uppercase tracking-wider">
          {badge}
        </span>
      </div>

      {title && (
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={`text-lg md:text-xl text-white/50 ${centered ? "max-w-2xl mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
