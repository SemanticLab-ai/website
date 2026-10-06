import { ArrowUpRight } from "lucide-react";
import type { ProductWorkEvidence } from "~/data/work";

type RecentProductShowcaseProps = {
  items: readonly ProductWorkEvidence[];
};

export function RecentProductShowcase({ items }: RecentProductShowcaseProps) {
  return (
    <div className="work-product-showcase" data-work-product-gallery="true">
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
