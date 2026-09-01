import ArrowUpRight from "lucide-react/dist/esm/icons/arrow-up-right";
import {
  DeckPresentation,
  DeckSlideFrame,
  type DeckSlide,
} from "~/components/deck/DeckPresentation";

const TOTAL_SLIDES = 5;

const sourceSystems = ["Epicor", "SolidWorks", "PDM", "Word + PDF", "Excel", "People"];

const opportunityMoves = [
  {
    index: "01",
    title: "Find the right precedent",
    detail: "Surface relevant historical jobs and show why each one matches.",
  },
  {
    index: "02",
    title: "Check job readiness",
    detail: "Expose missing, inconsistent or unresolved specification inputs earlier.",
  },
  {
    index: "03",
    title: "See risk sooner",
    detail: "Flag candidate long-lead items for Engineering review before they become urgent.",
  },
] as const;

function TiemanCoverSlide() {
  return (
    <DeckSlideFrame
      index={1}
      total={TOTAL_SLIDES}
      descriptor="Tieman Job Intelligence opportunity."
      className="tieman-cover"
    >
      <img
        className="tieman-cover__image"
        src="/images/deck/tieman/food-grade.jpg"
        alt=""
        width={1024}
        height={576}
        fetchPriority="high"
      />
      <div className="tieman-cover__shade" aria-hidden="true" />
      <div className="tieman-cover__copy">
        <div className="tieman-partner-lockup" aria-label="SemanticLab and Tieman Tankers">
          <span>SemanticLab</span>
          <i>×</i>
          <img src="/images/deck/tieman/logo.png" alt="Tieman Tankers" width={426} height={78} />
        </div>
        <h1 id="deck-slide-1-title">
          One job. Complete context. <em>Confident decisions.</em>
        </h1>
        <p>
          A focused opportunity to improve the Sales-to-Engineering handoff without replacing the systems Tieman already trusts.
        </p>
      </div>
    </DeckSlideFrame>
  );
}

function TiemanProblemSlide() {
  return (
    <DeckSlideFrame
      index={2}
      total={TOTAL_SLIDES}
      descriptor="The information exists. The job context must be reconstructed."
      tone="light"
      className="tieman-problem"
    >
      <div className="tieman-problem__copy">
        <p className="deck-kicker">The problem</p>
        <h2 id="deck-slide-2-title">
          The systems hold the information. <em>People join the dots.</em>
        </h2>
        <p>
          Job knowledge is distributed across operational systems, documents and experienced employees.
        </p>
      </div>

      <div className="tieman-problem__map" aria-label="Fragmented job information">
        <ul className="tieman-system-rail">
          {sourceSystems.map((system) => (
            <li key={system}>{system}</li>
          ))}
        </ul>
        <div className="tieman-context-gap">
          <span>One accepted job</span>
          <strong>Context reconstructed by hand</strong>
        </div>
        <ol className="tieman-friction-rail">
          <li>Search</li>
          <li>Cross-check</li>
          <li>Re-enter</li>
          <li>Clarify</li>
        </ol>
      </div>

      <p className="tieman-problem__consequence">
        An upstream information gap can become engineering rework, late purchasing or a production delay.
      </p>
    </DeckSlideFrame>
  );
}

function TiemanSolutionSlide() {
  return (
    <DeckSlideFrame
      index={3}
      total={TOTAL_SLIDES}
      descriptor="Connect the context without replacing the source systems."
      className="tieman-solution"
    >
      <div className="tieman-solution__heading">
        <p className="deck-kicker">The solution</p>
        <h2 id="deck-slide-3-title">
          Give every accepted job a <em>trusted context layer.</em>
        </h2>
        <p>
          Existing systems remain the source of truth. A job intelligence layer connects what matters, shows the evidence and guides the handoff.
        </p>
      </div>

      <ol className="tieman-layer-stack">
        <li>
          <span>03</span>
          <div>
            <small>People decide</small>
            <strong>Sales resolves · Engineering approves</strong>
          </div>
        </li>
        <li className="tieman-layer-stack__active">
          <span>02</span>
          <div>
            <small>Job intelligence</small>
            <strong>Requirements · history · readiness · evidence</strong>
          </div>
        </li>
        <li>
          <span>01</span>
          <div>
            <small>Trusted sources</small>
            <strong>Epicor · SolidWorks · PDM · documents</strong>
          </div>
        </li>
      </ol>
    </DeckSlideFrame>
  );
}

function TiemanOpportunitySlide() {
  return (
    <DeckSlideFrame
      index={4}
      total={TOTAL_SLIDES}
      descriptor="A narrow first opportunity with value across the job."
      tone="light"
      className="tieman-opportunity"
    >
      <div className="tieman-opportunity__heading">
        <p className="deck-kicker">The opportunity</p>
        <h2 id="deck-slide-4-title">
          Start where context <em>breaks first.</em>
        </h2>
        <p>Sales → Engineering</p>
      </div>

      <ol className="tieman-opportunity__moves">
        {opportunityMoves.map((move) => (
          <li key={move.index}>
            <span>{move.index}</span>
            <h3>{move.title}</h3>
            <p>{move.detail}</p>
          </li>
        ))}
      </ol>

      <div className="tieman-opportunity__outcome">
        <span>Phase 1 outcome</span>
        <strong>Engineering receives a controlled, evidence-backed job package.</strong>
      </div>
    </DeckSlideFrame>
  );
}

function TiemanClosingSlide() {
  return (
    <DeckSlideFrame
      index={5}
      total={TOTAL_SLIDES}
      descriptor="Validate the opportunity before committing to implementation."
      className="tieman-close"
    >
      <img
        className="tieman-close__image"
        src="/images/deck/tieman/chemical.jpg"
        alt=""
        width={1024}
        height={683}
      />
      <div className="tieman-close__shade" aria-hidden="true" />
      <div className="tieman-close__copy">
        <p className="deck-kicker">The next decision</p>
        <h2 id="deck-slide-5-title">
          Prove the opportunity before committing to a <em>build.</em>
        </h2>
        <p>
          A focused Discovery and Architecture phase validates the value, data, workflow and right first pilot.
        </p>
        <a href="mailto:hello@semanticlab.ai">
          Define the first proof <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <ol className="tieman-close__outputs" aria-label="Discovery outputs">
        <li>Problem and workflow map</li>
        <li>Prioritised pilot</li>
        <li>Architecture and cost view</li>
      </ol>
    </DeckSlideFrame>
  );
}

const slides: readonly DeckSlide[] = [
  { id: "tieman-cover", label: "Tieman opportunity", content: <TiemanCoverSlide /> },
  { id: "tieman-problem", label: "The problem", content: <TiemanProblemSlide /> },
  { id: "tieman-solution", label: "The solution", content: <TiemanSolutionSlide /> },
  { id: "tieman-opportunity", label: "The opportunity", content: <TiemanOpportunitySlide /> },
  { id: "tieman-next-step", label: "The next decision", content: <TiemanClosingSlide /> },
];

export function TiemanDeck() {
  return (
    <DeckPresentation
      className="sales-deck--tieman"
      slides={slides}
      testId="tieman-sales-deck"
    />
  );
}
