import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { AnimatedDataLandscape } from "~/components/marketing/shared/AnimatedDataLandscape";
import { RecentProductShowcase } from "~/components/marketing/work/RecentProductShowcase";
import { WorkHeroVideo } from "~/components/marketing/work/WorkHeroVideo";
import { WorkEvidenceList } from "~/components/marketing/work/WorkEvidenceList";
import { previousFounderWork, recentProductWork } from "~/data/work";

const strategyHref = "/services#strategy-engagement";

export function WorkIndex({ heroVideo = false }: { heroVideo?: boolean }) {
  return (
    <div className="semantic-work-page">
      <section className="work-hero" aria-labelledby="work-hero-title">
        {heroVideo ? (
          <WorkHeroVideo />
        ) : (
          <AnimatedDataLandscape className="work-hero__landscape" alt="" />
        )}
        <div className="work-hero__shade" />
        <div className="semantic-shell work-hero__inner">
          <div className="work-hero__copy">
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
              <h2 id="recent-work-title">Products built around real operations.</h2>
            </div>
            <p>
              Three current products spanning commerce operations, grassroots
              sport and agent infrastructure.
            </p>
          </div>

          <RecentProductShowcase items={recentProductWork} />
        </div>
      </section>

      <section
        className="work-evidence-section work-evidence-section--dark"
        aria-labelledby="founder-work-title"
      >
        <div className="semantic-shell">
          <div className="semantic-section-heading">
            <div>
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
