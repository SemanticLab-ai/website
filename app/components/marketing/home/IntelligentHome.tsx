import {
  ArrowDownRight,
  ArrowUpRight,
  Blocks,
  ChartNoAxesCombined,
  Compass,
  Eye,
  PenTool,
  Rocket,
} from "lucide-react";
import { SolutionsSection } from "./SolutionsSection";
import { Link } from "react-router";
import { NetworkHeroMotion } from "~/components/marketing/shared/network-motion/NetworkHeroMotion";
import { FeaturedWorkAccordion } from "~/components/marketing/home/FeaturedWorkAccordion";
import { FoundersSpotlight } from "~/components/marketing/home/FoundersSpotlight";
import { CapabilityExplorer } from "~/components/marketing/home/CapabilityExplorer";
import { recentProductWork } from "~/data/work";

const strategyHref = "/services#strategy-engagement";

const framework = [
  {
    name: "Discover",
    description: "Understand the business, its market and the people it serves.",
    icon: Compass,
  },
  {
    name: "Envision",
    description: "Find where intelligence can create meaningful advantage.",
    icon: Eye,
  },
  {
    name: "Design",
    description: "Shape the product, experience and operating model.",
    icon: PenTool,
  },
  {
    name: "Engineer",
    description: "Build secure, scalable systems for real workflows.",
    icon: Blocks,
  },
  {
    name: "Launch",
    description: "Validate, deploy and enable the team around the change.",
    icon: Rocket,
  },
  {
    name: "Evolve",
    description: "Learn, optimise and compound the advantage over time.",
    icon: ChartNoAxesCombined,
  },
];

export function IntelligentHome({ networkMotion = false }: { networkMotion?: boolean }) {
  return (
    <div className="semantic-home">
      <section className={`semantic-hero${networkMotion ? " semantic-hero--network" : ""}`} aria-labelledby="hero-title">
        <div className="semantic-shell semantic-hero__inner">
          <div className="semantic-hero__copy">
            <h1 id="hero-title" className="semantic-hero__opportunity-title">
              <span>We find where</span>{" "}
              <span>AI can create an</span>{" "}
              <em>advantage</em> then build it.
            </h1>
            <p className="semantic-hero__intro">
              We connect strategy, product design and engineering to turn complex
              business problems into intelligent products, workflows and systems.
            </p>
            <div className="semantic-actions">
              <a className="strategy-button" href={strategyHref}>
                Find your AI opportunity
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="semantic-text-link" href="#work">
                See our work
                <ArrowDownRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        {networkMotion && <NetworkHeroMotion />}
      </section>

      <SolutionsSection />

      <section id="framework" className="framework-section">
        <div className="semantic-shell">
          <div className="semantic-section-heading">
            <div>
              <h2>From vision to advantage. A connected journey.</h2>
            </div>
            <p>
              One integrated process moves an opportunity from strategic intent
              to a working system and continuous learning.
            </p>
          </div>

          <ol className="framework-steps">
            {framework.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.name}>
                  <div className="framework-steps__icon">
                    <Icon aria-hidden="true" strokeWidth={1.45} />
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{step.name}</h3>
                  <p>{step.description}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <CapabilityExplorer />

      <FoundersSpotlight />

      <section id="work" className="work-section">
        <div className="semantic-shell">
          <div className="semantic-section-heading">
            <div>
              <h2>Built to work in the real world.</h2>
            </div>
            <p>
              Current products show how we connect strategy, experience,
              intelligence and engineering around real operational needs.
            </p>
          </div>

          <FeaturedWorkAccordion items={recentProductWork} />
          <Link className="semantic-text-link" to="/work">
            Explore selected work <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section id="strategy-engagement" className="engagement-section">
        <svg
          className="engagement-section__connectors"
          viewBox="0 0 760 450"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path className="engagement-section__connector-trunk" d="M-24 264 C82 264 118 238 230 238" />
          <g className="engagement-section__connector-branches">
            <path d="M230 238 C336 238 345 115 452 115 S630 115 784 115" />
            <path d="M230 238 C338 238 358 156 452 156 S630 156 784 156" />
            <path d="M230 238 C342 238 372 197 452 197 S630 197 784 197" />
            <path d="M230 238 C346 238 373 238 452 238 S630 238 784 238" />
            <path d="M230 238 C342 238 372 279 452 279 S630 279 784 279" />
            <path d="M230 238 C338 238 358 320 452 320 S630 320 784 320" />
          </g>
          <circle className="engagement-section__connector-hub" cx="230" cy="238" r="5" />
          <g className="engagement-section__connector-nodes">
            <circle cx="452" cy="115" r="2" />
            <circle cx="452" cy="156" r="2" />
            <circle cx="452" cy="197" r="2" />
            <circle cx="452" cy="238" r="2" />
            <circle cx="452" cy="279" r="2" />
            <circle cx="452" cy="320" r="2" />
          </g>
        </svg>
        <div className="semantic-shell engagement-section__inner">
          <div className="engagement-section__copy">
            <h2>Where could AI create value in your business?</h2>
            <p className="engagement-section__intro">
              Start with the right question.<br />
              Together, we’ll find a useful way forward.
            </p>
            <a className="strategy-button" href={strategyHref}>
              Find your AI opportunity
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <ul className="engagement-section__outcomes" aria-label="Opportunities to explore">
            <li>Grow revenue</li>
            <li>Reduce operational workload</li>
            <li>Improve customer experience</li>
            <li>Automate repetitive work</li>
            <li>Build a new product</li>
            <li>Understand your data</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
