import { ArrowRight, Scan, Orbit, Workflow, Shapes, Box } from "lucide-react";
import { Link } from "react-router";
import "./solutions-section.css";

const services = [
  {
    icon: Scan,
    title: "AI & business transformation",
    challenge: "When the opportunity is unclear",
    copy: "Find the opportunities where intelligence can make a meaningful difference.",
  },
  {
    icon: Orbit,
    title: "New digital products",
    challenge: "When an idea needs product direction",
    copy: "Turn ideas and emerging opportunities into useful, scalable products.",
  },
  {
    icon: Workflow,
    title: "Intelligent workflows",
    challenge: "When work crosses too many disconnected steps",
    copy: "Connect the moving parts. Create simpler, smarter ways of working.",
  },
  {
    icon: Shapes,
    title: "Product & experience design",
    challenge: "When complexity gets in the user's way",
    copy: "Design experiences that people understand, trust and want to use.",
  },
  {
    icon: Box,
    title: "Data & intelligent systems",
    challenge: "When useful information is hard to act on",
    copy: "Bring your data together and turn it into decisions you can act on.",
  },
];

export function SolutionsSection({ enhanced = false }: { enhanced?: boolean }) {
  return (
      <section id="solutions" className={`solutions-section${enhanced ? " solutions-section--enhanced" : ""}`} aria-labelledby="solutions-title" data-home-solutions={enhanced ? "enhanced" : undefined}>
        <div className="semantic-shell">
        <div className="solutions-heading">
          <div>
            <h2 id="solutions-title">
              Different challenges.
              <br />A clear path forward.
            </h2>
            <p>
              We help you identify, design and build intelligent
              <br className="solutions-desktop" /> solutions where they create real
              value.
            </p>
          </div>
          <Link to="/services" className="solutions-link">
            Explore all solutions <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="solutions-grid">
          {services.map(({ icon: Icon, title, challenge, copy }, index) => (
            <Link className="solution-card" to="/services" key={title}>
              {enhanced && <span className="solution-card__index">0{index + 1}</span>}
              <Icon className="solution-card__icon" size={38} strokeWidth={1.1} aria-hidden="true" />
              <h3>{title}</h3>
              {enhanced ? (
                <div className="solution-card__story">
                  <p className="solution-card__challenge"><span>CHALLENGE</span>{challenge}</p>
                  <p className="solution-card__response"><span>RESPONSE</span>{copy}</p>
                </div>
              ) : <p>{copy}</p>}
              <span>
                Learn more <ArrowRight size={17} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
        </div>
      </section>
  );
}
