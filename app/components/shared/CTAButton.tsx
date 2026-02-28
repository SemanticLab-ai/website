import type { ReactNode } from "react";
import { Link } from "react-router";

interface CTAButtonProps {
  variant?: "primary" | "secondary";
  size?: "default" | "large";
  href: string;
  external?: boolean;
  children: ReactNode;
}

export function CTAButton({
  variant = "primary",
  size = "default",
  href,
  external = false,
  children,
}: CTAButtonProps) {
  const sizeClasses =
    size === "large" ? "h-16 px-10 text-lg" : "h-14 px-8 text-lg";

  const shadowClasses =
    variant === "primary"
      ? size === "large"
        ? "shadow-2xl shadow-lime/30"
        : "shadow-xl shadow-lime/20"
      : "";

  const variantClasses =
    variant === "primary"
      ? `bg-lime hover:bg-lime-dark text-dark-bg font-semibold ${shadowClasses} hover:scale-105`
      : "glass-card text-white hover:border-lime/30 hover:scale-105";

  const className = `inline-flex items-center justify-center gap-3 ${sizeClasses} rounded-full transition-all duration-300 group ${variantClasses}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
}
