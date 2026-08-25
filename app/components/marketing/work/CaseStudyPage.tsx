import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import type { CaseStudy } from "~/data/case-studies";

const strategyHref = "/services#strategy-engagement";

type CaseStudyPageProps = {
  caseStudy: CaseStudy;
  nextCaseStudy: CaseStudy;
};

export function CaseStudyPage({
  caseStudy,
  nextCaseStudy,
}: CaseStudyPageProps) {
  return (
    <article className="semantic-case-study">
      <section className="case-study-hero" aria-labelledby="case-study-title">
        <div className="semantic-shell case-study-hero__inner">
          <Link className="case-study-back-link" to="/work">
            <ArrowLeft aria-hidden="true" />
            Selected work
          </Link>

          <div className="case-study-hero__copy">
            <p className="semantic-kicker">{caseStudy.category}</p>
            <h1 id="case-study-title">{caseStudy.name}</h1>
            <p className="case-study-hero__proposition">
              {caseStudy.proposition}
            </p>
            <p className="case-study-hero__summary">{caseStudy.summary}</p>
            <a
              className="case-study-live-link"
              href={caseStudy.liveHref}
              target="_blank"
              rel="noreferrer"
            >
              View live product <ArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <dl className="case-study-register">
            <div>
              <dt>Focus</dt>
              <dd>{caseStudy.focus}</dd>
            </div>
            <div>
              <dt>Surfaces</dt>
              <dd>{caseStudy.surfaces}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{caseStudy.status}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section
        className="case-study-opportunity"
        aria-labelledby="case-study-opportunity-title"
      >
        <div className="semantic-shell case-study-opportunity__inner">
          <figure className="case-study-product-frame">
            <div className="case-study-product-frame__viewport">
              <img
                src={caseStudy.image}
                alt={caseStudy.imageAlt}
                width={1280}
                height={720}
                style={{ objectPosition: caseStudy.imagePosition }}
                fetchPriority="high"
              />
            </div>
            <figcaption>Current product interface · {caseStudy.name}</figcaption>
          </figure>

          <div className="case-study-opportunity__copy">
            <p className="semantic-kicker">The opportunity</p>
            <h2 id="case-study-opportunity-title">
              {caseStudy.opportunityHeading}
            </h2>
            {caseStudy.opportunityBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section
        className="case-study-system"
        aria-labelledby="case-study-system-title"
      >
        <div className="semantic-shell">
          <p className="semantic-kicker">The system</p>
          <h2 id="case-study-system-title">{caseStudy.systemHeading}</h2>

          <ol className="case-study-workflow">
            {caseStudy.workflow.map((step, index) => (
              <li key={step.title}>
                <span>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="case-study-build"
        aria-labelledby="case-study-build-title"
      >
        <div className="semantic-shell">
          <p className="semantic-kicker">What was designed and built</p>
          <h2 id="case-study-build-title">{caseStudy.buildHeading}</h2>

          <dl className="case-study-disciplines">
            {caseStudy.disciplines.map((discipline) => (
              <div key={discipline.name}>
                <dt>{discipline.name}</dt>
                <dd>{discipline.description}</dd>
              </div>
            ))}
          </dl>

          <p className="case-study-scope">
            <strong>Scope represented:</strong>
            {caseStudy.scope.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </p>
        </div>
      </section>

      <section
        className="case-study-demonstrates"
        aria-labelledby="case-study-demonstrates-title"
      >
        <div className="semantic-shell case-study-demonstrates__inner">
          <p className="semantic-kicker">What this work demonstrates</p>
          <h2 id="case-study-demonstrates-title">
            {caseStudy.demonstratesHeading}
          </h2>
          <p>{caseStudy.demonstratesBody}</p>
          <p className="case-study-evidence-note">
            This page documents the product and work represented. Commercial
            claims, customer outcomes and performance metrics are intentionally
            excluded until verified.
          </p>
        </div>
      </section>

      <section className="case-study-next" aria-label="Continue exploring">
        <div className="semantic-shell case-study-next__inner">
          <div className="case-study-next__work">
            <p className="semantic-kicker">Next case study</p>
            <h2>{nextCaseStudy.name}</h2>
            <Link
              className="case-study-live-link"
              to={`/work/${nextCaseStudy.slug}`}
            >
              Explore the work <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="case-study-next__engagement">
            <p className="semantic-kicker">Have a real opportunity?</p>
            <h2>Where could intelligence create meaningful advantage?</h2>
            <p>
              Share the context. We’ll help frame the opportunity before
              proposing the work.
            </p>
            <a className="strategy-button" href={strategyHref}>
              Request a Strategy Engagement
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
