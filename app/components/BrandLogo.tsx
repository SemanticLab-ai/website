import { Link } from "react-router";
import type { MouseEventHandler } from "react";
import { BrandLockup } from "~/components/BrandLockup";

type BrandLogoProps = {
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function BrandLogo({ className = "", onClick }: BrandLogoProps) {
  return (
    <Link
      to="/"
      className={`brand-logo ${className}`.trim()}
      aria-label="SemanticLab home"
      onClick={onClick}
    >
      <BrandLockup />
    </Link>
  );
}
