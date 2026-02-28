import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router";

interface CTAConfig {
  label: string;
  href: string;
  icon?: LucideIcon;
  external?: boolean;
}

interface HeroSectionProps {
  badgeIcon?: LucideIcon;
  badgeText?: string;
  badge?: ReactNode;
  title: ReactNode;
  subtitle: ReactNode;
  primaryCTA?: CTAConfig;
  secondaryCTA?: CTAConfig;
  showFounders?: boolean;
  founderTagline?: string;
  children?: ReactNode;
}

function HeroCTALink({
  cta,
  className,
  children,
}: {
  cta: CTAConfig;
  className: string;
  children: ReactNode;
}) {
  if (cta.external) {
    return (
      <a
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={cta.href} className={className}>
      {children}
    </Link>
  );
}

export function HeroSection({
  badgeIcon: BadgeIcon,
  badgeText,
  badge,
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  showFounders = false,
  founderTagline,
  children,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-gradient-hero noise-overlay">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-lime/5 blob blob-animated blur-3xl" />
      <div
        className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-teal/5 blob blob-animated blur-3xl"
        style={{ animationDelay: "2s" }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-50" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {badge ??
            (BadgeIcon && badgeText && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/10 backdrop-blur rounded-full border border-lime/20 mb-8">
                <BadgeIcon className="w-4 h-4 text-lime" />
                <span className="text-sm font-medium text-lime">
                  {badgeText}
                </span>
              </div>
            ))}

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-display font-bold text-white mb-8">
            {title}
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/50 leading-relaxed mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              {primaryCTA && (
                <HeroCTALink
                  cta={primaryCTA}
                  className="inline-flex items-center justify-center gap-3 h-14 px-8 text-lg rounded-full bg-lime hover:bg-lime-dark text-dark-bg font-semibold shadow-xl shadow-lime/20 transition-all duration-300 hover:scale-105 group"
                >
                  {primaryCTA.label}
                  {primaryCTA.icon && (
                    <primaryCTA.icon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  )}
                </HeroCTALink>
              )}
              {secondaryCTA && (
                <HeroCTALink
                  cta={secondaryCTA}
                  className="inline-flex items-center justify-center gap-3 h-14 px-8 text-lg rounded-full border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                >
                  {secondaryCTA.label}
                </HeroCTALink>
              )}
            </div>
          )}

          {/* Custom children (for additional content like CTAs rendered inline) */}
          {children}

          {/* Founder badge */}
          {showFounders && (
            <div className="flex items-center justify-center gap-4">
              <div className="flex -space-x-3">
                {[
                  { src: "/images/founders/raihan-avatar.jpg", alt: "Raihan" },
                  { src: "/images/founders/naila-avatar.jpg", alt: "Naila" },
                ].map((founder) => (
                  <img
                    key={founder.alt}
                    src={founder.src}
                    alt={founder.alt}
                    className="w-10 h-10 rounded-full border-2 border-dark-bg object-cover"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm text-white/50">
                  Built by{" "}
                  <span className="font-semibold text-white">
                    Raihan & Naila
                  </span>
                </p>
                {founderTagline && (
                  <p className="text-xs text-white/40">{founderTagline}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent" />
    </section>
  );
}
