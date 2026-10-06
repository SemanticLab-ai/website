import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { ProductWorkEvidence } from "~/data/work";

export function HomeWorkShowcase({ items }: { items: readonly ProductWorkEvidence[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

  return (
    <div className="home-work-showcase" data-home-work-showcase="true">
      <div className="home-work-showcase__choices" role="tablist" aria-label="Selected products">
        {items.map((item, index) => (
          <button
            key={item.name}
            id={`home-work-tab-${index}`}
            className="home-work-showcase__choice"
            type="button"
            role="tab"
            aria-controls="home-work-panel"
            aria-selected={index === activeIndex}
            tabIndex={index === activeIndex ? 0 : -1}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) => {
              if (event.key !== "ArrowDown" && event.key !== "ArrowUp" && event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
              event.preventDefault();
              const direction = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
              const next = (index + direction + items.length) % items.length;
              setActiveIndex(next);
              document.getElementById(`home-work-tab-${next}`)?.focus();
            }}
          >
            <span className="home-work-showcase__number">0{index + 1}</span>
            <span className="home-work-showcase__choice-copy">
              <strong>{item.name}</strong>
              <small>{item.category}</small>
            </span>
            <ArrowUpRight aria-hidden="true" strokeWidth={1.4} />
          </button>
        ))}
      </div>

      <div
        id="home-work-panel"
        className="home-work-showcase__panel"
        role="tabpanel"
        aria-labelledby={`home-work-tab-${activeIndex}`}
        tabIndex={0}
      >
        <div className="home-work-showcase__image" key={active.image}>
          <img src={active.image} alt={`${active.name} product screen`} loading="lazy" width={1265} height={712} />
        </div>
        <div className="home-work-showcase__detail">
          <div>
            <span className="home-work-showcase__eyebrow">BUILT PRODUCT · {active.category}</span>
            <h3>{active.name}</h3>
            <p>{active.summary}</p>
          </div>
          <a href={active.href} className="home-work-showcase__link">
            View project <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
