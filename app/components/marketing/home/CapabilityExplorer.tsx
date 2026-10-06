import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

const disciplines = [
  {
    index: "01",
    title: "Strategy",
    question: "What deserves to change?",
    summary: "Decide what is worth changing before deciding what to build.",
    items: [
      "Business and product vision",
      "Opportunity mapping",
      "AI strategy",
      "Roadmaps and success measures",
    ],
  },
  {
    index: "02",
    title: "Experience",
    question: "How will people use it?",
    summary: "Make complex technology feel clear, useful and human.",
    items: [
      "Research and service design",
      "Product experience",
      "Prototyping",
      "Design systems",
    ],
  },
  {
    index: "03",
    title: "Intelligence",
    question: "Where can AI help?",
    summary: "Put AI to work where it strengthens a real decision or workflow.",
    items: [
      "AI opportunity design",
      "Workflow automation",
      "Knowledge systems",
      "Responsible AI patterns",
    ],
  },
  {
    index: "04",
    title: "Engineering",
    question: "What makes it dependable?",
    summary: "Turn the strategy into systems that can operate and scale.",
    items: [
      "Cloud architecture",
      "AI integrations",
      "Product engineering",
      "Deployment and operations",
    ],
  },
] as const;

export function CapabilityExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = disciplines[activeIndex];

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (index + 1) % disciplines.length;
        break;
      case "ArrowLeft":
        nextIndex = (index - 1 + disciplines.length) % disciplines.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = disciplines.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <section className="capabilities-section" aria-labelledby="capabilities-title">
      <div className="semantic-shell">
        <div className="semantic-section-heading semantic-section-heading--wide">
          <div>
            <h2 id="capabilities-title">Strategy through to systems.</h2>
          </div>
          <p>
            Start with the question that feels familiar. Explore how each
            discipline connects to the decisions that follow.
          </p>
        </div>

        <div className="capability-explorer">
          <div
            className="capability-explorer__tabs"
            role="tablist"
            aria-label="Explore our connected disciplines"
          >
            {disciplines.map((discipline, index) => (
              <button
                key={discipline.title}
                id={`capability-tab-${index}`}
                className="capability-explorer__tab"
                type="button"
                role="tab"
                aria-controls="capability-panel"
                aria-selected={activeIndex === index}
                tabIndex={activeIndex === index ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                ref={(element) => { tabRefs.current[index] = element; }}
              >
                <span className="capability-explorer__tab-top">
                  <span>{discipline.index}</span>
                  <span className="capability-explorer__tab-signal" aria-hidden="true" />
                </span>
                <span className="capability-explorer__tab-title">{discipline.title}</span>
                <span className="capability-explorer__tab-question">{discipline.question}</span>
              </button>
            ))}
            <span
              className="capability-explorer__progress"
              aria-hidden="true"
              style={{ width: `${((activeIndex + 1) / disciplines.length) * 100}%` }}
            />
          </div>

          <div
            id="capability-panel"
            className="capability-explorer__panel"
            role="tabpanel"
            aria-labelledby={`capability-tab-${activeIndex}`}
            tabIndex={0}
          >
            <div className="capability-explorer__panel-inner" key={active.title}>
              <div className="capability-explorer__lead">
                <span className="capability-explorer__selected">
                  {active.index} / 04 <span aria-hidden="true">·</span> {active.title}
                </span>
                <h3>{active.question}</h3>
                <p>{active.summary}</p>
                <a className="strategy-button" href="/services#strategy-engagement">
                  Discuss your opportunity <ArrowUpRight aria-hidden="true" />
                </a>
              </div>

              <div className="capability-explorer__detail">
                <p className="capability-explorer__detail-label">What this can involve</p>
                <ol>
                  {active.items.map((item, index) => (
                    <li key={item}>
                      <span>0{index + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>

        <Link className="semantic-text-link semantic-text-link--dark" to="/services">
          Explore all services <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
