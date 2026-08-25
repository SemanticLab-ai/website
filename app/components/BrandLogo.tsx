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
      <svg
        className="brand-logo__lockup"
        viewBox="0 0 1950 320"
        aria-hidden="true"
        focusable="false"
      >
        <svg x="0" y="0" width="500" height="320" viewBox="40 165 500 320">
          <image
            href="/images/brand/semanticlab-logo-dark.png"
            width="2172"
            height="724"
          />
        </svg>
        <svg
          x="560"
          y="50"
          width="1390"
          height="220"
          viewBox="600 165 1390 220"
        >
          <image
            href="/images/brand/semanticlab-logo-dark.png"
            width="2172"
            height="724"
          />
        </svg>
      </svg>
    </Link>
  );
}
