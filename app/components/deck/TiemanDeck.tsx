import Activity from "lucide-react/dist/esm/icons/activity";
import ArrowUp from "lucide-react/dist/esm/icons/arrow-up";
import ArrowUpRight from "lucide-react/dist/esm/icons/arrow-up-right";
import BadgeCheck from "lucide-react/dist/esm/icons/badge-check";
import Bot from "lucide-react/dist/esm/icons/bot";
import ClipboardCheck from "lucide-react/dist/esm/icons/clipboard-check";
import Cuboid from "lucide-react/dist/esm/icons/cuboid";
import Database from "lucide-react/dist/esm/icons/database";
import FileSearch from "lucide-react/dist/esm/icons/file-search";
import FileText from "lucide-react/dist/esm/icons/file-text";
import Layers3 from "lucide-react/dist/esm/icons/layers-3";
import LockKeyhole from "lucide-react/dist/esm/icons/lock-keyhole";
import MapPin from "lucide-react/dist/esm/icons/map-pin";
import PackageSearch from "lucide-react/dist/esm/icons/package-search";
import Sheet from "lucide-react/dist/esm/icons/sheet";
import ShieldCheck from "lucide-react/dist/esm/icons/shield-check";
import Users from "lucide-react/dist/esm/icons/users";
import {
  DeckPresentation,
  DeckSlideFrame,
  type DeckSlide,
} from "~/components/deck/DeckPresentation";

const TOTAL_SLIDES = 16;

const agendaItems = [
  "Tieman's vision",
  "Challenges",
  "The opportunity",
  "Why us?",
  "Next steps",
] as const;

const challengeActions = [
  { title: "Search", detail: "Find the right information" },
  { title: "Compare", detail: "See jobs, specs and decisions together" },
  { title: "Govern", detail: "Know what is approved and current" },
  { title: "Reuse", detail: "Carry knowledge into the next job" },
] as const;

const challengeImpacts = [
  "Manual interpretation",
  "Slow handovers",
  "Revision risk",
  "Duplicated work",
  "Avoidable delays",
] as const;

const visionObjectives = [
  { index: "01", title: "Increase throughput", detail: "Using existing resources" },
  { index: "02", title: "Find knowledge faster", detail: "Historical jobs · specs · decisions" },
  {
    index: "03",
    title: "Align every team",
    detail: "Sales · Engineering · Purchasing · Production",
  },
  { index: "04", title: "Reduce delivery risk", detail: "Specifications · long leads · revisions" },
  {
    index: "05",
    title: "Preserve + protect knowledge",
    detail: "Australian-hosted · governed · secure",
  },
] as const;

const visionOutcomes = [
  {
    id: "efficiency",
    index: "01",
    title: "Operational efficiency",
    points: [
      { title: "Increase throughput", detail: "Using existing resources" },
      { title: "Find knowledge faster", detail: "Historical jobs · specs · decisions" },
    ],
  },
  {
    id: "intelligence",
    index: "02",
    title: "Future intelligence",
    points: [
      { title: "Align every team", detail: "Sales · Engineering · Purchasing · Production" },
      { title: "Build what comes next", detail: "Assistants · agents · decision support" },
    ],
  },
  {
    id: "resilience",
    index: "03",
    title: "Risk & resilience",
    points: [
      { title: "Reduce delivery risk", detail: "Specifications · long leads · revisions" },
      { title: "Preserve + protect knowledge", detail: "Australian-hosted · governed · secure" },
    ],
  },
] as const;

const rippleStages = [
  { name: "Sales", detail: "Requirements" },
  { name: "Specification", detail: "Job definition" },
  { name: "Engineering", detail: "Design intent" },
  { name: "BOM", detail: "Parts + revision" },
  { name: "Purchasing", detail: "Supply decisions" },
  { name: "Planning", detail: "Build sequence" },
  { name: "Production", detail: "Execution" },
] as const;

const rippleEffects = [
  {
    index: "01",
    title: "Clarification loops",
    detail: "Missing context sends questions back upstream.",
    handoff: "Sales → Specification",
  },
  {
    index: "02",
    title: "Engineering rework",
    detail: "Assumptions surface after design work begins.",
    handoff: "Specification → BOM",
  },
  {
    index: "03",
    title: "Long-lead surprises",
    detail: "Critical items are identified later than they should be.",
    handoff: "BOM → Planning",
  },
  {
    index: "04",
    title: "Revision risk",
    detail: "Production can act on information that is no longer current.",
    handoff: "Planning → Production",
  },
] as const;

const opportunityFlow = [
  "Connect data",
  "Establish context",
  "Govern access",
  "Build intelligence",
  "Power apps & agents",
] as const;

const tiemanSystems = [
  { id: "epicor", name: "Epicor", role: "ERP & operations", icon: Database },
  { id: "solidworks", name: "SolidWorks", role: "Engineering design", icon: Cuboid },
  { id: "pdm", name: "PDM", role: "Product data", icon: Layers3 },
  { id: "documents", name: "Word + PDF", role: "Specifications", icon: FileText },
  { id: "excel", name: "Excel", role: "Working data", icon: Sheet },
  { id: "people", name: "People", role: "Decisions & history", icon: Users },
] as const;

const solutionApplications = [
  { name: "Specification assistant", role: "Find gaps before handoff", icon: FileSearch },
  { name: "Engineering readiness", role: "Bring the right context forward", icon: ClipboardCheck },
  { name: "Long-lead agent", role: "Surface likely purchasing risk", icon: PackageSearch },
  { name: "Future apps + agents", role: "Build against the same foundation", icon: Bot },
] as const;

const contextCapabilities = [
  "Job context",
  "BOM + parts",
  "Revisions",
  "Evidence",
  "Permissions",
  "Ownership",
] as const;

const assurancePrinciples = [
  { name: "Security", detail: "Permissions + audit", icon: LockKeyhole },
  { name: "Governance", detail: "Rules + ownership", icon: BadgeCheck },
  { name: "Australian data hosting", detail: "Local data residency", icon: MapPin },
] as const;

const proofPoints = [
  {
    index: "01",
    name: "GameDay",
    provenance: "Raihan · previous role",
    headline: "$250M+",
    measure: "annual payment volume supported",
    detail: "Large-scale operational data, payment orchestration and platform modernisation with 95%+ Stripe adoption.",
  },
  {
    index: "02",
    name: "PartsHQ",
    provenance: "SemanticLab product",
    headline: "100K+",
    measure: "parts across a distributed platform",
    detail: "Disconnected catalogue, supplier and commerce systems shaped into reliable workflow automation for six active clients.",
  },
  {
    index: "03",
    name: "Podly",
    provenance: "Naila · previous role",
    headline: "Evidence",
    measure: "made usable inside the workflow",
    detail: "Product workflows that connect requirements, evidence, ownership and decision clarity.",
  },
] as const;

const approachStages = [
  {
    index: "01",
    title: "Understand",
    summary: "Frame the business problem, workflow and decision before selecting technology.",
  },
  {
    index: "02",
    title: "Shape",
    summary: "Validate the data, architecture, governance and narrowest valuable use case.",
  },
  {
    index: "03",
    title: "Prove",
    summary: "Run one controlled pilot with human approvals and measurable outcomes.",
  },
  {
    index: "04",
    title: "Expand",
    summary: "Reuse the foundation across workflows only after value and trust are established.",
  },
] as const;

const operatingLayers = [
  { index: "05", title: "Applications & agents", detail: "Useful tools inside real work" },
  { index: "04", title: "Business meaning", detail: "Ontology, relationships and rules" },
  { index: "03", title: "Semantic layer", detail: "Shared context around each job" },
  { index: "02", title: "Connected data layer", detail: "Reliable movement and usable structure" },
  { index: "01", title: "Source systems", detail: "Epicor · SolidWorks · PDM · documents" },
] as const;

const securityControls = [
  { index: "01", title: "Governance", detail: "Clear ownership and rules for how operational data is used." },
  { index: "02", title: "Access control", detail: "People and agents see only the information their role permits." },
  { index: "03", title: "Australian hosting", detail: "Supported where required; the final pattern is confirmed in discovery." },
  { index: "04", title: "Audit trail", detail: "Sources, actions and decisions remain traceable." },
  { index: "05", title: "Human approval", detail: "People approve decisions before operational records change." },
  { index: "06", title: "Revision control", detail: "Answers identify the current source and revision behind them." },
] as const;

const pilotCapabilities = [
  {
    index: "01",
    title: "Historical job context",
    detail: "Find relevant previous work and show why it is useful.",
  },
  {
    index: "02",
    title: "Specification readiness",
    detail: "Surface missing, inconsistent or unresolved inputs earlier.",
  },
  {
    index: "03",
    title: "Long-lead visibility",
    detail: "Flag candidate purchasing risks for Engineering review.",
  },
] as const;

function TiemanPartnerLockup() {
  return (
    <div className="tieman-partner-lockup" aria-label="SemanticLab and Tieman Tankers">
      <span>SemanticLab</span>
      <i>×</i>
      <img src="/images/deck/tieman/logo.png" alt="Tieman Tankers" width={426} height={78} />
    </div>
  );
}

function TiemanCoverSlide() {
  return (
    <DeckSlideFrame
      index={1}
      total={TOTAL_SLIDES}
      descriptor="Connected Data & AI Transformation Brief."
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
        <TiemanPartnerLockup />
        <h1 id="deck-slide-1-title">
          Connected data &amp; AI for Tieman&apos;s <em>next chapter.</em>
        </h1>
        <p>Tieman Tankers · Connected Data &amp; AI Transformation Brief</p>
      </div>
    </DeckSlideFrame>
  );
}

function TiemanAgendaSlide() {
  return (
    <DeckSlideFrame
      index={2}
      total={TOTAL_SLIDES}
      descriptor="From Tieman's vision to a practical next step."
      className="tieman-agenda"
    >
      <div className="tieman-agenda__heading">
        <p className="deck-kicker">Today&apos;s conversation</p>
        <h2 id="deck-slide-2-title">Agenda<em>.</em></h2>
        <p>From Tieman&apos;s vision to a practical next step.</p>
      </div>

      <ol className="tieman-agenda__list" aria-label="Presentation agenda">
        {agendaItems.map((item, index) => (
          <li key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item}</strong>
          </li>
        ))}
      </ol>
    </DeckSlideFrame>
  );
}

function TiemanVisionSlide() {
  return (
    <DeckSlideFrame
      index={3}
      total={TOTAL_SLIDES}
      descriptor="Five objectives for a connected Tieman operation."
      className="tieman-vision"
    >
      <div className="tieman-vision__heading">
        <p className="deck-kicker">Strategic vision</p>
        <h2 id="deck-slide-3-title">
          More production capacity. <em>Not more overhead.</em>
        </h2>
      </div>

      <ol className="tieman-vision__objectives" aria-label="Tieman strategic objectives">
        {visionObjectives.map((objective, index) => (
          <li key={objective.index} className={index === 0 ? "is-active" : ""}>
            <span>{objective.index}</span>
            <strong>{objective.title}</strong>
            <small>{objective.detail}</small>
          </li>
        ))}
      </ol>

      <div className="tieman-vision__foundation">
        <span>Built on trusted context</span>
        <strong>Connected · current · governed · Australian-hosted</strong>
      </div>
    </DeckSlideFrame>
  );
}

function TiemanVisionVennSlide() {
  return (
    <DeckSlideFrame
      index={3}
      total={TOTAL_SLIDES}
      descriptor="Three outcomes converge in one intelligent operating platform."
      className="tieman-vision-venn"
    >
      <div className="tieman-vision-venn__heading">
        <p className="deck-kicker">Strategic vision</p>
        <h2 id="deck-slide-3-title">
          Three outcomes. <em>One intelligent operating system.</em>
        </h2>
      </div>

      <div className="tieman-vision-venn__diagram" aria-label="Tieman strategic vision outcomes">
        {visionOutcomes.map((outcome) => (
          <section
            key={outcome.id}
            className={`tieman-vision-venn__outcome tieman-vision-venn__outcome--${outcome.id}`}
            aria-label={outcome.title}
          >
            <img
              src="/images/deck/tieman/vision-venn-circle.png"
              alt=""
              width={1254}
              height={1254}
              aria-hidden="true"
            />
            <div className="tieman-vision-venn__outcome-copy">
              <span>{outcome.index}</span>
              <h3>{outcome.title}</h3>
              <ul>
                {outcome.points.map((point) => (
                  <li key={point.title}>
                    <strong>{point.title}</strong>
                    <small>{point.detail}</small>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <picture className="tieman-vision-venn__intersection" aria-hidden="true">
          <source
            media="(max-width: 760px), (orientation: portrait)"
            srcSet="/images/deck/tieman/vision-venn-intersection-mobile.png"
          />
          <img
            src="/images/deck/tieman/vision-venn-intersection-desktop.png"
            alt=""
            width={2560}
            height={2080}
          />
        </picture>

        <div className="tieman-vision-venn__core">
          <strong>
            <span>Tieman&apos;s</span>
            <span>intelligent platform</span>
          </strong>
        </div>
      </div>
    </DeckSlideFrame>
  );
}

function ChallengesSlide() {
  return (
    <DeckSlideFrame
      index={4}
      total={TOTAL_SLIDES}
      descriptor="Fragmentation turns every handover into interpretation."
      className="tieman-challenges"
    >
      <div className="tieman-challenges__heading">
        <p className="deck-kicker">The challenges</p>
        <h2 id="deck-slide-4-title">
          Critical information exists. But it is <em>fragmented.</em>
        </h2>
        <p>
          The information Tieman needs is already present across the business. The challenge is making it usable consistently as work moves between teams.
        </p>
      </div>

      <section className="tieman-challenges__friction" aria-labelledby="tieman-challenges-friction-title">
        <p id="tieman-challenges-friction-title">Critical information is difficult to</p>
        <ol>
          {challengeActions.map((action, index) => (
            <li key={action.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{action.title}</strong>
              <small>{action.detail}</small>
            </li>
          ))}
        </ol>
      </section>

      <section className="tieman-challenges__impact" aria-labelledby="tieman-challenges-impact-title">
        <header>
          <span>The ripple effect</span>
          <strong id="tieman-challenges-impact-title">
            Fragmentation compounds as work moves downstream.
          </strong>
          <small>Sales · Engineering · Purchasing · Planning · Production</small>
        </header>
        <ul>
          {challengeImpacts.map((impact, index) => (
            <li key={impact}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{impact}</strong>
            </li>
          ))}
        </ul>
      </section>
    </DeckSlideFrame>
  );
}

function FragmentedEstateSlide() {
  return (
    <DeckSlideFrame
      index={6}
      total={TOTAL_SLIDES}
      descriptor="The systems are useful. The context between them is fragmented."
      className="tieman-fragmentation"
    >
      <img
        className="tieman-fragmentation__backdrop"
        src="/images/deck/tieman/fragmented-topology.png"
        alt=""
        width={1672}
        height={941}
      />
      <div className="tieman-fragmentation__shade" aria-hidden="true" />

      <div className="tieman-fragmentation__heading">
        <p className="deck-kicker">Where the context lives</p>
        <h2 id="deck-slide-6-title">
          The knowledge exists. It lives in <em>different places.</em>
        </h2>
        <p>
          Each system solves a real need. The friction appears when one job has to move across all of them.
        </p>
      </div>

      <div className="tieman-fragmentation__map" aria-label="Tieman systems and knowledge sources">
        {tiemanSystems.map((system) => {
          const SystemIcon = system.icon;

          return (
            <article
              key={system.id}
              className={`tieman-fragmentation__node is-${system.id}`}
            >
              <SystemIcon aria-hidden="true" />
              <strong>{system.name}</strong>
              <span>{system.role}</span>
            </article>
          );
        })}
      </div>

      <p className="tieman-fragmentation__consequence">
        <span>One job</span>
        <strong>The work crosses every source. Its context does not travel with it.</strong>
      </p>
    </DeckSlideFrame>
  );
}

function FoundationOpportunitySlide() {
  return (
    <DeckSlideFrame
      index={7}
      total={TOTAL_SLIDES}
      descriptor="One trusted foundation for data, intelligence and action."
      className="tieman-foundation"
    >
      <div className="tieman-foundation__heading">
        <p className="deck-kicker">What Tieman is trying to achieve</p>
        <h2 id="deck-slide-7-title">
          Create one trusted foundation for Tieman&apos;s <em>data and AI.</em>
        </h2>
        <p>
          Tieman has the data, systems and decades of knowledge. The opportunity is to connect and govern them so the business can use them with confidence.
        </p>
      </div>

      <ol className="tieman-foundation__flow" aria-label="Connected data and AI foundation">
        {opportunityFlow.map((step, index) => (
          <li key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </li>
        ))}
      </ol>

      <p className="tieman-foundation__result">
        Once that foundation exists, applications and agents can operate on information that is connected, contextualised and governed.
      </p>
    </DeckSlideFrame>
  );
}

function SolutionStackSlide() {
  return (
    <DeckSlideFrame
      index={8}
      total={TOTAL_SLIDES}
      descriptor="Connect what exists. Establish trusted context. Build what comes next."
      className="tieman-solution-stack"
    >
      <div className="tieman-solution-stack__heading">
        <p className="deck-kicker">The solution</p>
        <h2 id="deck-slide-8-title">
          Connect what Tieman already has. Build <em>whatever comes next.</em>
        </h2>
        <p>
          One governed context layer gives every application and agent the same trusted understanding of the job.
        </p>
      </div>

      <div className="tieman-solution-stack__architecture">
        <section className="tieman-solution-stack__diagram" aria-label="Tieman unified context architecture">
          <div className="tieman-solution-stack__applications">
            <span className="tieman-solution-stack__layer-label">Apps + AI agents</span>
            <div className="tieman-solution-stack__application-grid">
              {solutionApplications.map((application) => {
                const ApplicationIcon = application.icon;

                return (
                  <article key={application.name}>
                    <ApplicationIcon aria-hidden="true" />
                    <strong>{application.name}</strong>
                    <small>{application.role}</small>
                    <span className="tieman-solution-stack__signal" aria-hidden="true">
                      <ArrowUp />
                    </span>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="tieman-solution-stack__context">
            <div className="tieman-solution-stack__context-title">
              <ShieldCheck aria-hidden="true" />
              <div>
                <span>Unified context layer</span>
                <strong>A governed, shared understanding of every job.</strong>
                <small className="tieman-solution-stack__live">
                  <Activity aria-hidden="true" />
                  Context live
                </small>
              </div>
            </div>
            <ul aria-label="Context available to applications and agents">
              {contextCapabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
          </div>

          <div className="tieman-solution-stack__sources">
            <span className="tieman-solution-stack__layer-label">Tieman data + knowledge</span>
            <div className="tieman-solution-stack__source-grid">
              {tiemanSystems.map((system) => {
                const SystemIcon = system.icon;

                return (
                  <article key={system.id}>
                    <SystemIcon aria-hidden="true" />
                    <strong>{system.name}</strong>
                    <small>{system.role}</small>
                    <span className="tieman-solution-stack__signal" aria-hidden="true">
                      <ArrowUp />
                    </span>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <aside className="tieman-solution-stack__assurance" aria-label="Architecture assurance principles">
          <span className="tieman-solution-stack__assurance-label">Secure by design</span>
          <ul>
            {assurancePrinciples.map((principle) => {
              const PrincipleIcon = principle.icon;

              return (
                <li key={principle.name}>
                  <PrincipleIcon aria-hidden="true" />
                  <span>
                    <strong>{principle.name}</strong>
                    <small>{principle.detail}</small>
                  </span>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </DeckSlideFrame>
  );
}

function RippleSlide() {
  return (
    <DeckSlideFrame
      index={5}
      total={TOTAL_SLIDES}
      descriptor="One fragmented handover multiplies across the entire job."
      className="tieman-ripple"
    >
      <div className="tieman-ripple__heading">
        <p className="deck-kicker">The operational impact</p>
        <h2 id="deck-slide-5-title">
          A gap upstream becomes a <em>delay downstream.</em>
        </h2>
        <p>
          When critical context is fragmented, every handover asks the next team to search, interpret and confirm it again.
        </p>
      </div>

      <section className="tieman-ripple__journey" aria-labelledby="tieman-ripple-journey-title">
        <header>
          <span id="tieman-ripple-journey-title">One tanker job</span>
          <strong>Context must travel with the work.</strong>
          <small>Every handover inherits what came before</small>
        </header>

        <ol className="tieman-ripple__pipeline" aria-label="Tieman operating flow">
        {rippleStages.map((stage, index) => (
          <li key={stage.name}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{stage.name}</strong>
            <small>{stage.detail}</small>
          </li>
        ))}
        </ol>
      </section>

      <ol className="tieman-ripple__effects" aria-label="Operational effects of fragmented information">
        {rippleEffects.map((effect) => (
          <li key={effect.index}>
            <span>{effect.index}</span>
            <small>{effect.handoff}</small>
            <strong>{effect.title}</strong>
            <p>{effect.detail}</p>
          </li>
        ))}
      </ol>

      <div className="tieman-ripple__result">
        <span>The cumulative cost</span>
        <strong>More coordination. More waiting. Less throughput.</strong>
        <small>Fragmentation compounds as the job moves downstream.</small>
      </div>
    </DeckSlideFrame>
  );
}

function WhyUsSlide() {
  return (
    <DeckSlideFrame
      index={9}
      total={TOTAL_SLIDES}
      descriptor="Product thinking, experience and engineering stay connected."
      className="tieman-why-us"
    >
      <div className="tieman-why-us__heading">
        <p className="deck-kicker">Why SemanticLab</p>
        <h2 id="deck-slide-9-title">
          The people framing the problem stay close to the <em>build.</em>
        </h2>
      </div>

      <div className="tieman-why-us__profiles">
        <article>
          <img src="/images/founders/raihan-portrait-v4.png" alt="Raihan Razi" width={898} height={1122} />
          <div>
            <span>Engineering &amp; AI delivery</span>
            <h3>Raihan Razi</h3>
            <p>15 years across product, software delivery and technology strategy, including GameDay-scale platforms and PartsHQ.</p>
          </div>
        </article>
        <article>
          <img src="/images/founders/naila.jpg" alt="Naila Rahman" width={1413} height={1853} />
          <div>
            <span>Product strategy &amp; experience</span>
            <h3>Naila Rahman</h3>
            <p>Research-led product and workflow design across Podly and GameDay, connecting evidence, requirements and user decisions.</p>
          </div>
        </article>
      </div>

      <div className="tieman-why-us__studio">
        <span>SemanticLab</span>
        <strong>AI + cloud + operational workflow design in one founder-led partnership.</strong>
      </div>
    </DeckSlideFrame>
  );
}

function ProofSlide() {
  return (
    <DeckSlideFrame
      index={10}
      total={TOTAL_SLIDES}
      descriptor="Relevant proof across data, platforms and workflow design."
      tone="light"
      className="tieman-proof"
    >
      <div className="tieman-proof__heading">
        <p className="deck-kicker">Proof of relevant work</p>
        <h2 id="deck-slide-10-title">
          Experience that maps to the <em>operating problem.</em>
        </h2>
      </div>

      <ol className="tieman-proof__rail">
        {proofPoints.map((proof) => (
          <li key={proof.name}>
            <span>{proof.index}</span>
            <div className="tieman-proof__identity">
              <small>{proof.provenance}</small>
              <h3>{proof.name}</h3>
            </div>
            <div className="tieman-proof__measure">
              <strong>{proof.headline}</strong>
              <small>{proof.measure}</small>
            </div>
            <p>{proof.detail}</p>
          </li>
        ))}
      </ol>

      <p className="tieman-proof__note">
        Previous-role work is explicitly attributed and is not represented as a SemanticLab client engagement.
      </p>
    </DeckSlideFrame>
  );
}

function ApproachSlide() {
  return (
    <DeckSlideFrame
      index={11}
      total={TOTAL_SLIDES}
      descriptor="Start small. Prove value. Expand safely."
      className="tieman-approach"
    >
      <div className="tieman-approach__heading">
        <p className="deck-kicker">How we work</p>
        <h2 id="deck-slide-11-title">
          Start small. Prove value. <em>Expand safely.</em>
        </h2>
      </div>

      <ol className="tieman-approach__stages">
        {approachStages.map((stage) => (
          <li key={stage.index}>
            <span>{stage.index}</span>
            <h3>{stage.title}</h3>
            <p>{stage.summary}</p>
          </li>
        ))}
      </ol>

      <p className="tieman-approach__principle">
        Every stage produces a decision—not a technology commitment.
      </p>
    </DeckSlideFrame>
  );
}

function OperatingLayerSlide() {
  return (
    <DeckSlideFrame
      index={12}
      total={TOTAL_SLIDES}
      descriptor="Business meaning sits between source systems and applications."
      className="tieman-operating-layer"
    >
      <div className="tieman-operating-layer__heading">
        <p className="deck-kicker">A modern AI operating layer</p>
        <h2 id="deck-slide-12-title">
          Intelligence becomes useful when it understands the <em>business.</em>
        </h2>
      </div>

      <ol className="tieman-operating-layer__stack">
        {operatingLayers.map((layer, index) => (
          <li key={layer.index} className={index === 0 ? "is-active" : ""}>
            <span>{layer.index}</span>
            <strong>{layer.title}</strong>
            <small>{layer.detail}</small>
          </li>
        ))}
      </ol>

      <div className="tieman-operating-layer__governance">
        <span>Governed throughout</span>
        <strong>Access · evidence · approvals · audit</strong>
      </div>
    </DeckSlideFrame>
  );
}

function TiemanFlowSlide() {
  return (
    <DeckSlideFrame
      index={13}
      total={TOTAL_SLIDES}
      descriptor="One upstream flow can improve decisions across the job."
      tone="light"
      className="tieman-flow"
    >
      <div className="tieman-flow__heading">
        <p className="deck-kicker">How it works for Tieman</p>
        <h2 id="deck-slide-13-title">
          Move an accepted request into Engineering with <em>trusted context.</em>
        </h2>
      </div>

      <ol className="tieman-flow__steps">
        <li>
          <span>01</span>
          <small>Specification</small>
          <h3>Capture the complete customer request.</h3>
          <p>Connect requirements to the current source and revision.</p>
        </li>
        <li>
          <span>02</span>
          <small>Engineering readiness</small>
          <h3>Resolve gaps before the handoff.</h3>
          <p>Show missing information, comparable jobs and open decisions.</p>
        </li>
        <li>
          <span>03</span>
          <small>Long-lead purchasing</small>
          <h3>Bring likely risk forward.</h3>
          <p>Flag candidate items for human review while there is time to act.</p>
        </li>
      </ol>

      <div className="tieman-flow__outcome">
        <span>Outcome</span>
        <strong>One controlled, evidence-backed job package.</strong>
      </div>
    </DeckSlideFrame>
  );
}

function SecuritySlide() {
  return (
    <DeckSlideFrame
      index={14}
      total={TOTAL_SLIDES}
      descriptor="Secure, governed and accountable by design."
      className="tieman-security"
    >
      <div className="tieman-security__heading">
        <p className="deck-kicker">Secure by design</p>
        <h2 id="deck-slide-14-title">
          Trust is part of the architecture—not a <em>later control.</em>
        </h2>
      </div>

      <ol className="tieman-security__controls">
        {securityControls.map((control) => (
          <li key={control.index}>
            <span>{control.index}</span>
            <h3>{control.title}</h3>
            <p>{control.detail}</p>
          </li>
        ))}
      </ol>
    </DeckSlideFrame>
  );
}

function PilotSlide() {
  return (
    <DeckSlideFrame
      index={15}
      total={TOTAL_SLIDES}
      descriptor="Start upstream because every downstream team inherits the handoff."
      tone="light"
      className="tieman-pilot"
    >
      <div className="tieman-pilot__heading">
        <p className="deck-kicker">Pilot recommendation</p>
        <h2 id="deck-slide-15-title">
          Start with the Sales-to-Engineering <em>handoff.</em>
        </h2>
        <p>
          It is upstream, frequent enough to learn from and creates context that every later phase can reuse.
        </p>
      </div>

      <ol className="tieman-pilot__capabilities">
        {pilotCapabilities.map((capability) => (
          <li key={capability.index}>
            <span>{capability.index}</span>
            <h3>{capability.title}</h3>
            <p>{capability.detail}</p>
          </li>
        ))}
      </ol>

      <div className="tieman-pilot__promise">
        <span>Phase 1 promise</span>
        <strong>Prepare the next job, catch missing information and identify likely long-lead risk earlier.</strong>
      </div>
    </DeckSlideFrame>
  );
}

function NextStepSlide() {
  return (
    <DeckSlideFrame
      index={16}
      total={TOTAL_SLIDES}
      descriptor="Discovery replaces assumptions with a clear pilot decision."
      className="tieman-next-step"
    >
      <img
        className="tieman-next-step__image"
        src="/images/deck/tieman/chemical.jpg"
        alt=""
        width={1024}
        height={683}
      />
      <div className="tieman-next-step__shade" aria-hidden="true" />
      <div className="tieman-next-step__copy">
        <p className="deck-kicker">The next step</p>
        <h2 id="deck-slide-16-title">
          Define the first proof—before committing to <em>implementation.</em>
        </h2>
        <p>
          A focused Solution Discovery validates the opportunity, data, architecture, governance and pilot definition.
        </p>
        <a href="mailto:hello@semanticlab.ai">
          Start the discovery <ArrowUpRight aria-hidden="true" />
        </a>
      </div>

      <ol className="tieman-next-step__outputs" aria-label="Discovery outputs">
        <li>Workflow + system map</li>
        <li>Reference architecture</li>
        <li>Pilot scope + cost view</li>
      </ol>
    </DeckSlideFrame>
  );
}

const slides: readonly DeckSlide[] = [
  { id: "tieman-cover", label: "Transformation brief", content: <TiemanCoverSlide /> },
  { id: "tieman-agenda", label: "Agenda", content: <TiemanAgendaSlide /> },
  { id: "tieman-vision", label: "Tieman's vision", content: <TiemanVisionSlide /> },
  { id: "tieman-challenges", label: "Challenges", content: <ChallengesSlide /> },
  { id: "tieman-ripple", label: "Operational impact", content: <RippleSlide /> },
  { id: "tieman-fragmentation", label: "Where context lives", content: <FragmentedEstateSlide /> },
  { id: "tieman-foundation", label: "The opportunity", content: <FoundationOpportunitySlide /> },
  {
    id: "tieman-solution-stack",
    label: "The solution",
    fragmentCount: 4,
    content: <SolutionStackSlide />,
  },
  { id: "tieman-why-us", label: "Why SemanticLab", content: <WhyUsSlide /> },
  { id: "tieman-proof", label: "Relevant proof", content: <ProofSlide /> },
  { id: "tieman-approach", label: "How we work", content: <ApproachSlide /> },
  { id: "tieman-operating-layer", label: "AI operating layer", content: <OperatingLayerSlide /> },
  { id: "tieman-flow", label: "How it works", content: <TiemanFlowSlide /> },
  { id: "tieman-security", label: "Secure by design", content: <SecuritySlide /> },
  { id: "tieman-pilot", label: "Pilot recommendation", content: <PilotSlide /> },
  { id: "tieman-next-step", label: "The next step", content: <NextStepSlide /> },
];

const vennSlides: readonly DeckSlide[] = slides.map((slide) =>
  slide.id === "tieman-vision"
    ? {
        id: "tieman-vision-venn",
        label: "Tieman's vision · Venn",
        fragmentCount: 4,
        content: <TiemanVisionVennSlide />,
      }
    : slide,
);

type TiemanDeckProps = {
  visionVariant?: "objectives" | "venn";
};

export function TiemanDeck({ visionVariant = "objectives" }: TiemanDeckProps) {
  return (
    <DeckPresentation
      className="sales-deck--tieman"
      slides={visionVariant === "venn" ? vennSlides : slides}
      testId="tieman-sales-deck"
    />
  );
}
