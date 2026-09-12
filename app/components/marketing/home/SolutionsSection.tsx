import { ArrowRight, Scan, Orbit, Workflow, Shapes, Box } from "lucide-react";
import { Link } from "react-router";
import "./solutions-section.css";

const services = [
  {
    icon: Scan,
    title: "AI & business transformation",
    copy: "Find the opportunities where intelligence can make a meaningful difference.",
  },
  {
    icon: Orbit,
    title: "New digital products",
    copy: "Turn ideas and emerging opportunities into useful, scalable products.",
  },
  {
    icon: Workflow,
    title: "Intelligent workflows",
    copy: "Connect the moving parts. Create simpler, smarter ways of working.",
  },
  {
    icon: Shapes,
    title: "Product & experience design",
    copy: "Design experiences that people understand, trust and want to use.",
  },
  {
    icon: Box,
    title: "Data & intelligent systems",
    copy: "Bring your data together and turn it into decisions you can act on.",
  },
];

export function SolutionsSection() {
  return (
      <section id="solutions" className="solutions-section" aria-labelledby="solutions-title">
        <div className="semantic-shell">
        <div className="solutions-heading">
          <div>
            <p className="solutions-kicker">What we solve</p>
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
          {services.map(({ icon: Icon, title, copy }) => (
            <Link className="solution-card" to="/services" key={title}>
              <Icon size={38} strokeWidth={1.1} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{copy}</p>
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
