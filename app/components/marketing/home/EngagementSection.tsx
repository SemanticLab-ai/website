import { ArrowUpRight } from "lucide-react";
import { EngagementNetworkBackdrop } from "./EngagementNetworkBackdrop";

const strategyHref = "/services#strategy-engagement";

export function EngagementSection({ networkMotion }: { networkMotion: boolean }) {
  return (
    <section id="strategy-engagement" className="engagement-section">
      {networkMotion && <EngagementNetworkBackdrop />}
      <div className="semantic-shell engagement-section__inner">
        <div className="engagement-section__copy">
          <h2>Where could AI create value in your business?</h2>
          <p className="engagement-section__intro">
            Start with the right question.<br />
            Together, we’ll find a useful way forward.
          </p>
          <a className="strategy-button" href={strategyHref}>
            Find your AI opportunity
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <ul className="engagement-section__outcomes" aria-label="Opportunities to explore">
          <li>Grow revenue</li>
          <li>Reduce operational workload</li>
          <li>Improve customer experience</li>
          <li>Automate repetitive work</li>
          <li>Build a new product</li>
          <li>Understand your data</li>
        </ul>
      </div>
    </section>
  );
}
