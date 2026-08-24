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
import { Link } from "react-router";

const strategyHref =
  "mailto:hello@semanticlab.ai?subject=Strategy%20Engagement%20Request";

const disciplines = ["Strategy", "Experience", "Intelligence", "Engineering"];

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

const capabilities = [
  {
    index: "01",
    title: "Strategy",
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
    summary: "Turn the strategy into systems that can operate and scale.",
    items: [
      "Cloud architecture",
      "AI integrations",
      "Product engineering",
      "Deployment and operations",
    ],
  },
];

const builtProducts = [
  {
    name: "Syncd",
    type: "Connected commerce intelligence",
    href: "/products/syncd",
  },
  {
    name: "Image Enhancer",
    type: "AI-assisted product imagery",
    href: "/products/image-enhancer",
  },
  {
    name: "SmartApply",
    type: "A focused career workflow",
    href: "/products/smartapply",
  },
];

export function IntelligentHome() {
  return (
    <div className="semantic-home">
      <section className="semantic-hero" aria-labelledby="hero-title">
        <img
          className="semantic-hero__landscape"
          src="/images/brand/semantic-data-landscape.png"
          alt="Abstract field of connected data points forming an intelligent landscape"
          width={1536}
          height={1024}
          fetchPriority="high"
        />
        <div className="semantic-hero__shade" />
        <div className="semantic-shell semantic-hero__inner">
          <div className="semantic-hero__copy">
            <p className="semantic-kicker">Product innovation partner</p>
            <h1 id="hero-title">
              We design <em>intelligent</em> businesses.
            </h1>
            <p className="semantic-hero__intro">
              We help founders and business leaders discover where intelligence
              creates real advantage, then carry that opportunity through
              strategy, experience, engineering and launch.
            </p>
            <div className="semantic-actions">
              <a className="strategy-button" href={strategyHref}>
                Request a Strategy Engagement
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="semantic-text-link" href="#framework">
                Explore our approach
                <ArrowDownRight aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="semantic-hero__disciplines" aria-label="Our disciplines">
            {disciplines.map((discipline, index) => (
              <div key={discipline}>
                <span>0{index + 1}</span>
                <p>{discipline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vision" className="vision-section">
        <div className="semantic-shell vision-section__inner">
          <div>
            <p className="semantic-kicker">The shift happening now</p>
            <h2>
              AI is changing every industry. The winners won’t just use it.
              They’ll be <em>designed around it.</em>
            </h2>
          </div>
          <div className="vision-section__copy">
            <p>
              Most transformation efforts do not stall because of technology.
              They stall when teams automate the wrong things or build without
              a clear model of value.
            </p>
            <p>
              We help identify what matters, what to build, and how to make the
              change useful in the real world.
            </p>
          </div>
        </div>
      </section>

      <section id="framework" className="framework-section">
        <div className="semantic-shell">
          <div className="semantic-section-heading">
            <div>
              <p className="semantic-kicker">How transformation happens</p>
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

      <section className="capabilities-section" aria-labelledby="capabilities-title">
        <div className="semantic-shell">
          <div className="semantic-section-heading semantic-section-heading--wide">
            <div>
              <p className="semantic-kicker">One connected capability</p>
              <h2 id="capabilities-title">Strategy through to systems.</h2>
            </div>
            <p>
              The disciplines stay connected so decisions made early survive
              contact with design, delivery and the realities of operation.
            </p>
          </div>

          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article key={capability.title}>
                <span className="capability-grid__index">{capability.index}</span>
                <h3>{capability.title}</h3>
                <p>{capability.summary}</p>
                <ul>
                  {capability.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <Link className="semantic-text-link semantic-text-link--dark" to="/services">
            Explore our services <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section id="about" className="founders-section">
        <div className="semantic-shell">
          <div className="semantic-section-heading">
            <div>
              <p className="semantic-kicker">Two disciplines. One mission.</p>
              <h2>We bridge the gap most partners can’t.</h2>
            </div>
            <p>
              One perspective shapes how people experience complexity. The
              other shapes how technology can carry it. Together, we turn
              intent into something a business can use.
            </p>
          </div>

          <div className="founder-grid">
            <article>
              <img
                src="/images/founders/naila.jpg"
                alt="Naila Rahman"
                width={800}
                height={1000}
                decoding="async"
              />
              <div>
                <p>Product strategy &amp; experience design</p>
                <h3>Naila Rahman</h3>
                <span>
                  Research-led product thinking, service design and experiences
                  that make complex systems clear.
                </span>
              </div>
            </article>
            <article>
              <img
                src="/images/founders/raihan.jpg"
                alt="Raihan Razi"
                width={800}
                height={1000}
                decoding="async"
              />
              <div>
                <p>Engineering &amp; intelligence delivery</p>
                <h3>Raihan Razi</h3>
                <span>
                  Product engineering, cloud systems and AI delivery designed
                  for dependable real-world use.
                </span>
              </div>
            </article>
          </div>

          <p className="founders-section__statement">
            We don’t just design. We don’t just develop. <em>We design
            intelligent businesses.</em>
          </p>
        </div>
      </section>

      <section id="work" className="work-section">
        <div className="semantic-shell">
          <div className="semantic-section-heading">
            <div>
              <p className="semantic-kicker">Built products</p>
              <h2>Capability made tangible.</h2>
            </div>
            <p>
              Selected products are shown as evidence of how we think and
              build, not as the primary path through the studio.
            </p>
          </div>

          <div className="work-list">
            {builtProducts.map((product, index) => (
              <Link key={product.name} to={product.href}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.type}</p>
                </div>
                <ArrowUpRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="strategy-engagement" className="engagement-section">
        <div className="semantic-shell engagement-section__inner">
          <p className="semantic-kicker">Start with the right question</p>
          <h2>Where could intelligence create meaningful advantage in your business?</h2>
          <p>
            A Strategy Engagement begins with the business, the opportunity and
            the people it needs to serve, not a predetermined technology or
            product package.
          </p>
          <a className="strategy-button" href={strategyHref}>
            Request a Strategy Engagement
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}
