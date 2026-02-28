import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  hover?: boolean;
  className?: string;
}

export function GlassCard({
  children,
  hover = false,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`glass-card rounded-2xl ${hover ? "hover-lift" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
