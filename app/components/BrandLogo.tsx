import { Link } from "react-router";
import { BrandLockup } from "~/components/BrandLockup";

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
      <BrandLockup />
    </Link>
  );
}
