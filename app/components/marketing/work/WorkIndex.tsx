import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { WorkEvidenceList } from "~/components/marketing/work/WorkEvidenceList";
import { previousFounderWork, recentProductWork } from "~/data/work";

const strategyHref = "/services#strategy-engagement";

export function WorkIndex() {
  return (
    <div className="semantic-work-page">
      <section className="work-hero" aria-labelledby="work-hero-title">
        <img
          className="work-hero__landscape"
          src="/images/brand/semantic-data-landscape.png"
          alt=""
          width={1536}
          height={1024}
          fetchPriority="high"
        />
        <div className="work-hero__shade" />
        <div className="semantic-shell work-hero__inner">
          <div className="work-hero__copy">
            <p className="semantic-kicker">Selected work</p>
            <h1 id="work-hero-title">
              Work that <em>carries strategy</em> into operation.
            </h1>
            <p>
              Recent products and selected engagements show how we turn complex
              opportunities into useful, intelligent systems.
            </p>
            <a className="semantic-text-link" href="#recent-work">
              Explore the work <ArrowDownRight aria-hidden="true" />
            </a>
          </div>

          <div className="work-hero__register" aria-label="Work represented on this page">
            <div>
              <span>01</span>
              <p>Recent products</p>
            </div>
            <div>
              <span>02</span>
              <p>Previous engagements</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="recent-work"
        className="work-evidence-section work-evidence-section--paper"
        aria-labelledby="recent-work-title"
      >
        <div className="semantic-shell">
          <div className="semantic-section-heading">
            <div>
              <p className="semantic-kicker">Recent product work</p>
              <h2 id="recent-work-title">Products built around real operations.</h2>
            </div>
            <p>
              Three current products spanning commerce operations, grassroots
              sport and agent infrastructure.
            </p>
          </div>

          <WorkEvidenceList items={recentProductWork} tone="light" />
        </div>
      </section>

      <section
        className="work-evidence-section work-evidence-section--dark"
        aria-labelledby="founder-work-title"
      >
        <div className="semantic-shell">
          <div className="semantic-section-heading">
            <div>
              <p className="semantic-kicker">Selected founder experience</p>
              <h2 id="founder-work-title">Experience behind the studio.</h2>
            </div>
            <p>
              Selected systems and platforms led through previous roles, shown
              as evidence of the experience brought into SemanticLab.
            </p>
          </div>

          <WorkEvidenceList items={previousFounderWork} tone="dark" />
        </div>
      </section>

      <section className="engagement-section work-page-engagement">
        <div className="semantic-shell engagement-section__inner">
          <p className="semantic-kicker">Start with the right question</p>
          <h2>Where could intelligence create meaningful advantage in your business?</h2>
          <p>
            A Strategy Engagement begins with the business, the opportunity and
            the people it needs to serve.
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
