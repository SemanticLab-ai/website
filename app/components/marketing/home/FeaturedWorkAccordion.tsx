import { useState } from "react";
import { Link } from "react-router";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import type { ProductWorkEvidence } from "~/data/work";

type FeaturedWorkAccordionProps = {
  items: readonly ProductWorkEvidence[];
};

export function FeaturedWorkAccordion({ items }: FeaturedWorkAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(items.length ? 0 : null);

  return (
    <div className="featured-work">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `featured-work-trigger-${index}`;
        const panelId = `featured-work-panel-${index}`;

        return (
          <article className="featured-work__item" data-open={isOpen} key={item.name}>
            <div className="featured-work__copy">
              <h3 className="featured-work__heading">
                <button
                  id={triggerId}
                  className="featured-work__toggle"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="featured-work__index" aria-hidden="true">0{index + 1}</span>
                  <span className="featured-work__name">{item.name}</span>
                  <span className="featured-work__summary">{item.summary}</span>
                  <span className="featured-work__indicator" aria-hidden="true">
                    {isOpen ? <Minus strokeWidth={1.5} /> : <Plus strokeWidth={1.5} />}
                  </span>
                </button>
              </h3>
              {isOpen ? (
                <Link className="featured-work__link" to={item.href}>
                  View case study <ArrowUpRight aria-hidden="true" strokeWidth={1.5} />
                </Link>
              ) : null}
            </div>

            <div
              id={panelId}
              className="featured-work__diagram"
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
            >
              <svg className="featured-work__connections" viewBox="0 0 700 360" preserveAspectRatio="none" aria-hidden="true" focusable="false">
                <path d="M284 102 H348 V168 H452" />
                <path d="M190 131 V255 H275" />
                <path d="M446 260 H518 V218" />
                <circle cx="348" cy="168" r="3" />
                <circle cx="190" cy="255" r="3" />
                <circle cx="518" cy="218" r="3" />
              </svg>
              <ol className="featured-work__capabilities" aria-label={`${item.name} capabilities`}>
                {item.capabilities.map((capability, capabilityIndex) => (
                  <li className={`featured-work__capability featured-work__capability--${capabilityIndex + 1}`} key={capability}>
                    <span className="featured-work__capability-index" aria-hidden="true">0{capabilityIndex + 1}</span>
                    <span>{capability}</span>
                  </li>
                ))}
              </ol>
            </div>
          </article>
        );
      })}
    </div>
  );
}
