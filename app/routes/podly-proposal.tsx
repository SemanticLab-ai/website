import { BrandLockup } from "~/components/BrandLockup";
import { clientPodlyProposalEnabled, isPreviewBuild } from "~/lib/deployment";
import type { Route } from "./+types/podly-proposal";
import "~/styles/podly-proposal.css";

const stages = [
  {
    number: "01",
    title: "Understand and prepare",
    price: "$1,650",
    details: [
      "A workshop with Luke to walk through the changed product and its key interactions",
      "Independent review of the working platform and its main journeys",
      "A test plan, realistic tasks, follow-up questions and a participant note sheet",
      "A practice session with Luke, followed by refinements to the guide",
      "Scheduling setup for the participant round",
    ],
  },
  {
    number: "02",
    title: "Test with users",
    price: "$200 per user",
    details: [
      "Coordinate a session with each user introduced by Luke",
      "Moderate one 40-minute, task-based session per participant",
      "Capture observations, questions and follow-up responses",
      "Include each participant's evidence in the cross-session findings",
    ],
  },
  {
    number: "03",
    title: "Turn findings into decisions",
    price: "$650",
    details: [
      "Compare observations across the participant sessions",
      "Identify recurring issues and prioritise recommendations",
      "Prepare a findings report and walk Luke through the results",
    ],
  },
] as const;

export function loader({ context, request }: Route.LoaderArgs) {
  if (
    !(isPreviewBuild || new URL(request.url).hostname === "podly.semanticlab.ai") ||
    !clientPodlyProposalEnabled ||
    context.cloudflare.env.SL_FEATURE_CLIENT_PODLY_PROPOSAL !== "true"
  ) {
    throw new Response("Not Found", { status: 404 });
  }
  return null;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Podly User Testing Proposal | SemanticLab" },
    { name: "description", content: "A private user testing proposal prepared for Podly by SemanticLab." },
    { name: "robots", content: "noindex, nofollow, noarchive" },
  ];
}

export default function PodlyProposal() {
  return (
    <div className="podly-proposal">
      <header className="podly-proposal__topbar">
        <BrandLockup />
        <span>Private proposal for Podly</span>
      </header>

      <div className="podly-proposal__body">
        <section className="podly-proposal__hero" aria-labelledby="podly-proposal-title">
          <div className="podly-proposal__hero-copy">
            <p className="podly-proposal__eyebrow">Research proposal · 26 October 2026</p>
            <h1 id="podly-proposal-title">Test the product <em>Podly is today.</em></h1>
            <p className="podly-proposal__intro">
              Podly has evolved since the final design handover. This round of research will
              establish how people use the working product now, where they hesitate, and
              what should be improved first.
            </p>
          </div>
          <div className="podly-proposal__hero-meta">
            <span>Prepared for</span>
            <strong>Luke Van der List<br />Podly</strong>
            <span>Prepared by</span>
            <strong>Naila Rahman<br />Partner, SemanticLab</strong>
          </div>
        </section>

        <section className="podly-proposal__approach" aria-labelledby="podly-approach-title">
          <div>
            <p className="podly-proposal__section-label">The approach</p>
            <h2 id="podly-approach-title">Learn the current experience. Then test the journeys that matter.</h2>
          </div>
          <p>
            We will agree the priority journeys in the workshop. The sessions will use
            realistic tasks in the working platform, with room to ask why a participant
            chose a path or expected something different. The pilot with Luke will help
            make sure the guide is clear and fits the session.
          </p>
        </section>

        <section className="podly-proposal__scope" aria-labelledby="podly-scope-title">
          <div className="podly-proposal__section-head">
            <p className="podly-proposal__section-label">Scope and investment</p>
            <h2 id="podly-scope-title">A clear base cost, with testing priced per user.</h2>
          </div>
          <div className="podly-proposal__stages">
            {stages.map((stage) => (
              <article className="podly-proposal__stage" key={stage.number}>
                <span className="podly-proposal__stage-number">{stage.number}</span>
                <div className="podly-proposal__stage-main">
                  <h3>{stage.title}</h3>
                  <ul>
                    {stage.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                </div>
                <strong className="podly-proposal__stage-price">{stage.price}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="podly-proposal__investment" aria-labelledby="podly-investment-title">
          <div className="podly-proposal__investment-intro">
            <p className="podly-proposal__section-label">Proposed round</p>
            <h2 id="podly-investment-title">Five participants.<br /><em>One actionable report.</em></h2>
            <p>Each additional user in the same round adds $200, including their session and findings in the report.</p>
          </div>
          <div className="podly-proposal__investment-table">
            <div><span>Product understanding and test preparation</span><strong>$1,650</strong></div>
            <div><span>Five user sessions at $200 each</span><strong>$1,000</strong></div>
            <div><span>Findings report and recommendations</span><strong>$650</strong></div>
            <div className="podly-proposal__total"><span>Total for five users</span><strong>$3,300 <small>AUD</small></strong></div>
          </div>
        </section>

        <section className="podly-proposal__next" aria-labelledby="podly-next-title">
          <div>
            <p className="podly-proposal__section-label">To get started</p>
            <h2 id="podly-next-title">Let's book the walkthrough.</h2>
            <p>
              Luke will provide access to the current platform and introduce five suitable
              participants. Once we have walked through the product together, I can
              finalise the key testing areas and session guide.
            </p>
          </div>
          <aside aria-label="Scope assumptions">
            <h3>Scope assumptions</h3>
            <p>Participant incentives and external recruitment costs are separate. Product redesign and a second testing round are outside this proposal.</p>
          </aside>
        </section>
      </div>
      <footer className="podly-proposal__footer">
        <BrandLockup />
        <span>Naila Rahman · Partner, SemanticLab</span>
        <span>Private proposal · Podly</span>
      </footer>
    </div>
  );
}
