import ArrowUpRight from "lucide-react/dist/esm/icons/arrow-up-right";
import Boxes from "lucide-react/dist/esm/icons/boxes";
import BrainCircuit from "lucide-react/dist/esm/icons/brain-circuit";
import Compass from "lucide-react/dist/esm/icons/compass";
import PanelsTopLeft from "lucide-react/dist/esm/icons/panels-top-left";
import { AnimatedDataLandscape } from "~/components/marketing/shared/AnimatedDataLandscape";
import {
  DeckPresentation,
  DeckSlideFrame as SlideFrame,
  type DeckSlide,
} from "~/components/deck/DeckPresentation";
import { caseStudies, type CaseStudy } from "~/data/case-studies";
import { previousFounderWork, recentProductWork } from "~/data/work";

type SlideTone = "dark" | "light";

const disciplines = [
  {
    index: "01",
    name: "Strategy",
    summary: "Start with the business decision, not a predetermined solution.",
    icon: Compass,
  },
  {
    index: "02",
    name: "Experience",
    summary: "Make complexity understandable to the people living with it.",
    icon: PanelsTopLeft,
  },
  {
    index: "03",
    name: "Intelligence",
    summary: "Apply AI where it improves a real decision or workflow.",
    icon: BrainCircuit,
  },
  {
    index: "04",
    name: "Engineering",
    summary: "Carry the idea into systems that can operate and evolve.",
    icon: Boxes,
  },
] as const;

const engagementStages = [
  {
    index: "01",
    label: "Understand",
    question: "Where is the meaningful opportunity?",
    detail: "Business context · Opportunity framing · Risks and assumptions",
  },
  {
    index: "02",
    label: "Shape",
    question: "What should the change become?",
    detail: "Product direction · Experience model · Delivery roadmap",
  },
  {
    index: "03",
    label: "Realise",
    question: "How will it work in the real world?",
    detail: "Design and engineering · Launch readiness · Learning and evolution",
  },
] as const;

function CoverSlide() {
  return (
    <SlideFrame
      index={1}
      descriptor="Product innovation that carries into operation."
      className="deck-cover"
    >
      <AnimatedDataLandscape className="deck-cover__landscape" alt="" />
      <div className="deck-cover__shade" aria-hidden="true" />
      <div className="deck-cover__copy">
        <p className="deck-kicker">SemanticLab</p>
        <h1 id="deck-slide-1-title">
          Strategy that <em>carries</em> into operation.
        </h1>
        <p>
          Product strategy, experience, intelligence and engineering—connected.
        </p>
      </div>
    </SlideFrame>
  );
}

function PartnerSlide() {
  return (
    <SlideFrame
      index={2}
      descriptor="A strategy-led, founder-led product innovation partner."
      tone="light"
      className="deck-partner"
    >
      <div className="deck-editorial-heading">
        <p className="deck-kicker">What we are</p>
        <h2 id="deck-slide-2-title">
          Valuable change needs more than <em>delivery.</em>
        </h2>
      </div>
      <div className="deck-partner__body">
        <p className="deck-lead">
          SemanticLab is a product innovation partner that helps business
          leaders identify valuable opportunities and carry them through
          strategy, experience design, engineering and launch.
        </p>
        <div className="deck-equation" aria-label="SemanticLab brand logic">
          <span>Data</span>
          <i>+</i>
          <span>Focus</span>
          <i>+</i>
          <span>Intelligence</span>
          <i>=</i>
          <strong>Impact</strong>
        </div>
      </div>
    </SlideFrame>
  );
}

function DisciplinesSlide() {
  return (
    <SlideFrame
      index={3}
      descriptor="Four disciplines stay connected from decision to operation."
      className="deck-disciplines"
    >
      <div className="deck-editorial-heading deck-editorial-heading--compact">
        <p className="deck-kicker">How the work stays connected</p>
        <h2 id="deck-slide-3-title">
          Four disciplines. <em>One line of intent.</em>
        </h2>
      </div>
      <ol className="deck-discipline-rail">
        {disciplines.map((discipline) => {
          const Icon = discipline.icon;

          return (
            <li key={discipline.name}>
              <div className="deck-discipline-rail__marker">
                <span>{discipline.index}</span>
                <Icon aria-hidden="true" strokeWidth={1.35} />
              </div>
              <h3>{discipline.name}</h3>
              <p>{discipline.summary}</p>
            </li>
          );
        })}
      </ol>
    </SlideFrame>
  );
}

function EvidenceOverviewSlide() {
  return (
    <SlideFrame
      index={4}
      descriptor="Recent products built around real operations."
      tone="light"
      className="deck-evidence"
    >
      <div className="deck-editorial-heading deck-editorial-heading--evidence">
        <p className="deck-kicker">Recent product work</p>
        <h2 id="deck-slide-4-title">
          Three products. Three <em>operating problems</em> made tangible.
        </h2>
      </div>
      <ol className="deck-evidence-rail">
        {recentProductWork.map((item, itemIndex) => (
          <li key={item.name}>
            <span>{String(itemIndex + 1).padStart(2, "0")}</span>
            <div>
              <h3>{item.name}</h3>
              <p>{item.summary}</p>
            </div>
            <ul aria-label={`${item.name} capabilities`}>
              {item.capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </SlideFrame>
  );
}

type ProductSlideProps = {
  caseStudy: CaseStudy;
  index: number;
  tone: SlideTone;
  reverse?: boolean;
};

function ProductSlide({ caseStudy, index, reverse = false, tone }: ProductSlideProps) {
  return (
    <SlideFrame
      index={index}
      descriptor={`${caseStudy.name} · ${caseStudy.focus}`}
      tone={tone}
      className={`deck-product ${reverse ? "deck-product--reverse" : ""}`}
    >
      <div className="deck-product__copy">
        <p className="deck-kicker">Built product · {caseStudy.category.split(" · ")[1]}</p>
        <h2 id={`deck-slide-${index}-title`}>{caseStudy.proposition}</h2>
        <p>{caseStudy.summary}</p>
        <dl className="deck-product__facts">
          <div>
            <dt>Focus</dt>
            <dd>{caseStudy.focus}</dd>
          </div>
          <div>
            <dt>Surfaces</dt>
            <dd>{caseStudy.surfaces}</dd>
          </div>
        </dl>
      </div>
      <figure className="deck-product__visual">
        <img
          src={caseStudy.image}
          alt={caseStudy.imageAlt}
          style={{ objectPosition: caseStudy.imagePosition }}
          width={1600}
          height={900}
        />
      </figure>
      <ol className="deck-product__workflow" aria-label={`${caseStudy.name} operating workflow`}>
        {caseStudy.workflow.map((step, stepIndex) => (
          <li key={step.title}>
            <span>{String(stepIndex + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </SlideFrame>
  );
}

function FounderExperienceSlide() {
  return (
    <SlideFrame
      index={8}
      descriptor="Selected previous-role systems, explicitly attributed."
      className="deck-founder-evidence"
    >
      <div className="deck-editorial-heading deck-editorial-heading--evidence">
        <p className="deck-kicker">Experience behind the studio</p>
        <h2 id="deck-slide-8-title">
          Complex systems shaped the experience <em>behind</em> the work.
        </h2>
      </div>
      <ol className="deck-founder-evidence__rail">
        {previousFounderWork.map((item, itemIndex) => (
          <li key={item.name}>
            <span>{String(itemIndex + 1).padStart(2, "0")}</span>
            <div>
              <h3>{item.name}</h3>
              <p>{item.summary}</p>
              <small>{item.provenance}</small>
            </div>
            <ul>
              {item.capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <p className="deck-attribution-note">
        Previous-role examples demonstrate founder experience and are not represented as
        SemanticLab client engagements.
      </p>
    </SlideFrame>
  );
}

function FoundersSlide() {
  return (
    <SlideFrame
      index={9}
      descriptor="A founder-led partnership from Melbourne, Australia."
      tone="light"
      className="deck-founders"
    >
      <div className="deck-founders__copy">
        <p className="deck-kicker">The partnership</p>
        <h2 id="deck-slide-9-title">
          One designs for <em>people.</em> One engineers for <em>scale.</em>
        </h2>
        <p>
          The people shaping the opportunity stay close to the design and
          engineering decisions that make it real.
        </p>
      </div>
      <div className="deck-founders__profiles">
        <figure>
          <img
            src="/images/founders/naila.jpg"
            alt="Naila Rahman"
            width={1413}
            height={1853}
          />
          <figcaption>
            <strong>Naila Rahman</strong>
            <span>Product strategy &amp; experience design</span>
          </figcaption>
        </figure>
        <figure>
          <img
            src="/images/founders/raihan-portrait-v4.png"
            alt="Raihan Razi"
            width={898}
            height={1122}
          />
          <figcaption>
            <strong>Raihan Razi</strong>
            <span>Engineering &amp; AI delivery</span>
          </figcaption>
        </figure>
      </div>
    </SlideFrame>
  );
}

function EngagementPathSlide() {
  return (
    <SlideFrame
      index={10}
      descriptor="One connected engagement, shaped around the opportunity."
      className="deck-engagement"
    >
      <div className="deck-editorial-heading deck-editorial-heading--compact">
        <p className="deck-kicker">How we engage</p>
        <h2 id="deck-slide-10-title">
          Understand. Shape. <em>Realise.</em>
        </h2>
      </div>
      <ol className="deck-engagement__stages">
        {engagementStages.map((stage) => (
          <li key={stage.label}>
            <span>{stage.index}</span>
            <p>{stage.label}</p>
            <h3>{stage.question}</h3>
            <small>{stage.detail}</small>
          </li>
        ))}
      </ol>
    </SlideFrame>
  );
}

function StrategyEngagementSlide() {
  return (
    <SlideFrame
      index={11}
      descriptor="The Strategy Engagement is the commercial starting point."
      tone="light"
      className="deck-strategy"
    >
      <div className="deck-strategy__claim">
        <p className="deck-kicker">The starting point</p>
        <h2 id="deck-slide-11-title">
          The next valuable move should be <em>clear.</em>
        </h2>
      </div>
      <div className="deck-strategy__outcomes">
        <p>
          A Strategy Engagement establishes whether a valuable opportunity exists
          and what the most useful next move should be.
        </p>
        <ol>
          <li>
            <span>01</span>
            <strong>Opportunity framing</strong>
          </li>
          <li>
            <span>02</span>
            <strong>Product direction</strong>
          </li>
          <li>
            <span>03</span>
            <strong>Delivery roadmap</strong>
          </li>
        </ol>
      </div>
    </SlideFrame>
  );
}

function ClosingSlide() {
  return (
    <SlideFrame
      index={12}
      descriptor="Start with the right question."
      className="deck-closing"
    >
      <AnimatedDataLandscape className="deck-closing__landscape" alt="" />
      <div className="deck-closing__shade" aria-hidden="true" />
      <div className="deck-closing__copy">
        <p className="deck-kicker">Start with the right question</p>
        <h2 id="deck-slide-12-title">
          Where could intelligence create <em>meaningful advantage</em> in your business?
        </h2>
        <a href="mailto:hello@semanticlab.ai">
          hello@semanticlab.ai <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </SlideFrame>
  );
}

const slides: readonly DeckSlide[] = [
  { id: "cover", label: "Cover", content: <CoverSlide /> },
  { id: "partner", label: "Product innovation partner", content: <PartnerSlide /> },
  { id: "disciplines", label: "Connected disciplines", content: <DisciplinesSlide /> },
  { id: "products", label: "Recent product work", content: <EvidenceOverviewSlide /> },
  {
    id: "partshq",
    label: "PartsHQ",
    content: <ProductSlide caseStudy={caseStudies[0]} index={5} tone="dark" />,
  },
  {
    id: "sponsoredfeeds",
    label: "SponsoredFeeds",
    content: (
      <ProductSlide caseStudy={caseStudies[1]} index={6} reverse tone="light" />
    ),
  },
  {
    id: "instadash",
    label: "Instadash",
    content: <ProductSlide caseStudy={caseStudies[2]} index={7} tone="dark" />,
  },
  {
    id: "founder-experience",
    label: "Founder experience",
    content: <FounderExperienceSlide />,
  },
  { id: "founders", label: "The founders", content: <FoundersSlide /> },
  { id: "engagement", label: "Engagement path", content: <EngagementPathSlide /> },
  {
    id: "strategy-engagement",
    label: "Strategy Engagement",
    content: <StrategyEngagementSlide />,
  },
  { id: "closing", label: "Start a conversation", content: <ClosingSlide /> },
];

export function SalesDeck() {
  return <DeckPresentation slides={slides} />;
}
