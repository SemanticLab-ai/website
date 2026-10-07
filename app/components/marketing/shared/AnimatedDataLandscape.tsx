type AnimatedDataLandscapeProps = {
  alt: string;
  className: string;
};

const landscapeSrc = "/images/brand/semantic-data-landscape.png";

export function AnimatedDataLandscape({
  alt,
  className,
}: AnimatedDataLandscapeProps) {
  return (
    <div className={`data-landscape ${className}`.trim()}>
      <img
        className="data-landscape__layer data-landscape__layer--primary"
        src={landscapeSrc}
        alt={alt}
        width={1536}
        height={1024}
        fetchPriority="high"
        decoding="async"
      />
      <img
        className="data-landscape__layer data-landscape__layer--undertow"
        src={landscapeSrc}
        alt=""
        width={1536}
        height={1024}
        aria-hidden="true"
        decoding="async"
      />
    </div>
  );
}
