import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export function ServicesHero() {
  return (
    <section className="services-hero" aria-labelledby="services-hero-title">
      <img
        className="services-hero__visual"
        src="/images/brand/services-data-convergence.png"
        alt="Abstract data particles converging into an ordered intelligent system"
        width={1774}
        height={887}
        fetchPriority="high"
      />

      <div className="semantic-shell services-hero__inner">
        <div className="services-hero__copy">
          <p className="semantic-kicker">Services</p>
          <h1 id="services-hero-title">
            Transformation, not just <em>delivery.</em>
          </h1>
          <p>
            We help founders and business leaders turn a valuable opportunity
            into a useful, intelligent system. Strategy, experience,
            intelligence and engineering stay connected from the first
            question through launch and evolution.
          </p>

          <div className="semantic-actions">
            <a className="strategy-button" href="#capabilities">
              Explore our capabilities
              <ArrowDownRight aria-hidden="true" />
            </a>
            <a className="semantic-text-link" href="#strategy-engagement">
              Request a Strategy Engagement
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
