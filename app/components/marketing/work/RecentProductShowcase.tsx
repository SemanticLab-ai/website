import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import type { ProductWorkEvidence } from "~/data/work";

type RecentProductShowcaseProps = {
  items: readonly ProductWorkEvidence[];
};

export function RecentProductShowcase({ items }: RecentProductShowcaseProps) {
  const showcaseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const showcase = showcaseRef.current;
    if (
      !showcase ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    showcase.classList.add("work-product-showcase--will-reveal");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        showcase.classList.add("work-product-showcase--in-view");
        observer.disconnect();
      },
      { threshold: 0.12 },
    );

    observer.observe(showcase);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="work-product-showcase"
      data-work-product-gallery="true"
      ref={showcaseRef}
    >
      {items.map((item, index) => (
        <a
          className="work-product"
          href={item.href}
          key={item.name}
          aria-label={`View ${item.name} project`}
        >
          <div className="work-product__image">
            <img src={item.image} alt="" loading="lazy" />
          </div>
          <div className="work-product__content">
            <div className="work-product__meta">
              <span>0{index + 1}</span>
              <span>{item.category}</span>
            </div>
            <h3>{item.name}</h3>
            <p>{item.summary}</p>
            <ul aria-label="Capabilities shown">
              {item.capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
            <span className="work-product__link">
              View project <ArrowUpRight aria-hidden="true" strokeWidth={1.5} />
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
