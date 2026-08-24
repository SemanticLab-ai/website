import { Blocks, Compass, Waypoints } from "lucide-react";

const stages = [
  {
    index: "01",
    label: "Understand",
    icon: Compass,
    question: "Where is the meaningful opportunity?",
    description:
      "We build a shared view of the business, the people it serves, the constraints and the change worth pursuing.",
    items: ["Business context", "Opportunity framing", "Risks and assumptions"],
  },
  {
    index: "02",
    label: "Shape",
    icon: Waypoints,
    question: "What should the change become?",
    description:
      "We connect product strategy, experience and intelligence into a direction the team can evaluate and act on.",
    items: ["Product direction", "Experience model", "Delivery roadmap"],
  },
  {
    index: "03",
    label: "Realise",
    icon: Blocks,
    question: "How will it work in the real world?",
    description:
      "We carry the intent through engineering, launch and learning so the system remains useful beyond release day.",
    items: ["Design and engineering", "Launch readiness", "Learning and evolution"],
  },
];

export function EngagementPath() {
  return (
    <section id="engagement-path" className="engagement-path">
      <div className="semantic-shell">
        <div className="services-heading">
          <div>
            <p className="semantic-kicker">One connected engagement</p>
            <h2>Shaped around the opportunity, not a preset package.</h2>
          </div>
          <p>
            The emphasis changes with the business and the maturity of the
            opportunity. The disciplines stay connected, and the sequence stays
            accountable to the outcome.
          </p>
        </div>

        <ol className="engagement-path__stages">
          {stages.map((stage) => {
            const Icon = stage.icon;

            return (
              <li key={stage.label}>
                <div className="engagement-path__marker">
                  <Icon aria-hidden="true" strokeWidth={1.35} />
                  <span>{stage.index}</span>
                </div>
                <p className="engagement-path__label">{stage.label}</p>
                <h3>{stage.question}</h3>
                <p className="engagement-path__description">
                  {stage.description}
                </p>
                <ul>
                  {stage.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>

        <p className="engagement-path__note">
          The Strategy Engagement is the entry point: a focused way to establish
          whether a valuable opportunity exists and what the most useful next
          move should be.
        </p>
      </div>
    </section>
  );
}
