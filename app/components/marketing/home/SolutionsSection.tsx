import { Bot, ChartNoAxesCombined, Database, Workflow } from "lucide-react";
import "./solutions-section.css";

const services = [
  {
    icon: Bot,
    title: "AI Agents",
    copy: "Autonomous agents that qualify leads, answer customers and handle ops tasks around the clock.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    copy: "We map your manual processes and rebuild them as reliable, AI-powered pipelines.",
  },
  {
    icon: Database,
    title: "Knowledge Systems",
    copy: "Turn scattered docs, CRMs and inboxes into a single source of truth your team can query.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "AI Strategy",
    copy: "A focused audit that pinpoints where AI will move the needle and where it will not.",
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="solutions-section" aria-labelledby="solutions-title">
      <div className="semantic-shell">
        <div className="solutions-heading">
          <p className="solutions-eyebrow">What we build</p>
          <h2 id="solutions-title">
            Practical AI, engineered
            <br className="solutions-desktop" /> around your business.
          </h2>
          <p className="solutions-intro">
            No slide decks, no science projects. We ship production systems your
            team uses on day one.
          </p>
        </div>
        <div className="solutions-grid">
          {services.map(({ icon: Icon, title, copy }, index) => (
            <article className="solution-card" key={title}>
              <div className="solution-card__topline">
                <span className="solution-card__icon">
                  <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <span className="solution-card__number">0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
