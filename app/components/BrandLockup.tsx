type BrandLockupProps = {
  className?: string;
  label?: string;
  variant?: "lockup" | "mark";
};

const logoSource = "/images/brand/semanticlab-logo-dark.png";

export function BrandLockup({
  className = "",
  label = "SemanticLab",
  variant = "lockup",
}: BrandLockupProps) {
  return (
    <span
      className={`brand-lockup brand-lockup--${variant} ${className}`.trim()}
      role="img"
      aria-label={label}
    >
      <span className="brand-lockup__crop brand-lockup__crop--mark" aria-hidden="true">
        <img src={logoSource} alt="" width={2172} height={724} decoding="async" />
      </span>
      {variant === "lockup" ? (
        <span
          className="brand-lockup__crop brand-lockup__crop--wordmark"
          aria-hidden="true"
        >
          <img src={logoSource} alt="" width={2172} height={724} decoding="async" />
        </span>
      ) : null}
    </span>
  );
}
