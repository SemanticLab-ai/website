import { Link } from "react-router";

type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <Link
      to="/"
      className={`brand-logo ${className}`.trim()}
      aria-label="SemanticLab home"
    >
      <img
        src="/images/brand/semanticlab-logo-dark.png"
        alt="SemanticLab - Designing intelligent businesses"
        width={2172}
        height={724}
        decoding="async"
      />
    </Link>
  );
}
