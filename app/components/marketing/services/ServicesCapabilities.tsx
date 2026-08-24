import {
  Boxes,
  BrainCircuit,
  ChartNoAxesCombined,
  Compass,
  PanelsTopLeft,
  Rocket,
} from "lucide-react";

const capabilities = [
  {
    name: "Strategy",
    icon: Compass,
    summary: "Decide what is worth changing before deciding what to build.",
    items: [
      "Business and product vision",
      "Opportunity mapping",
      "Product strategy",
      "Roadmaps and success measures",
    ],
  },
  {
    name: "Experience",
    icon: PanelsTopLeft,
    summary: "Make complex technology clear, useful and human.",
    items: [
      "Research and service design",
      "Journeys and workflows",
      "Product experience",
      "Prototyping and testing",
    ],
  },
  {
    name: "Intelligence",
    icon: BrainCircuit,
    summary: "Put AI to work where it strengthens a real decision or workflow.",
    items: [
      "AI opportunity design",
      "Workflow automation",
      "Knowledge systems",
      "Responsible AI patterns",
    ],
  },
  {
    name: "Engineering",
    icon: Boxes,
    summary: "Turn the strategy into dependable systems built for real use.",
    items: [
      "Cloud architecture",
      "Product engineering",
      "Integrations and data",
      "Deployment and operations",
    ],
  },
  {
    name: "Launch",
    icon: Rocket,
    summary: "Bring the product into the business with the team around it.",
    items: [
      "Validation planning",
      "Quality and readiness",
      "Team enablement",
      "Product launch",
    ],
  },
  {
    name: "Growth",
    icon: ChartNoAxesCombined,
    summary: "Learn from real use and direct the next valuable change.",
    items: [
      "Analytics and learning",
      "Product optimisation",
      "Experiment design",
      "Scaling roadmap",
    ],
  },
];

export function ServicesCapabilities() {
  return (
    <section id="capabilities" className="services-capabilities">
      <div className="semantic-shell">
        <div className="services-heading services-heading--dark">
          <div>
            <p className="semantic-kicker">How transformation happens</p>
            <h2>End to end. Integrated. Built around value.</h2>
          </div>
          <p>
            Each capability connects to the next. Strategic decisions carry
            through the experience, the system and the way it operates after
            launch.
          </p>
        </div>

        <div className="services-capability-grid">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <article key={capability.name}>
                <div className="services-capability-grid__topline">
                  <Icon aria-hidden="true" strokeWidth={1.35} />
                  <span>0{index + 1}</span>
                </div>
                <h3>{capability.name}</h3>
                <p>{capability.summary}</p>
                <ul>
                  {capability.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href="#engagement-path">See how it connects</a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
