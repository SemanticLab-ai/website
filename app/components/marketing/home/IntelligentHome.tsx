import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { SolutionsSection } from "./SolutionsSection";
import { ServicesCapabilities } from "~/components/marketing/services/ServicesCapabilities";
import { Link } from "react-router";
import { NetworkHeroMotion } from "~/components/marketing/shared/network-motion/NetworkHeroMotion";
import { EngagementNetworkBackdrop } from "./EngagementNetworkBackdrop";
import { WorkEvidenceList } from "~/components/marketing/work/WorkEvidenceList";
import { recentProductWork } from "~/data/work";

const strategyHref = "/services#strategy-engagement";

export function IntelligentHome({ networkMotion = false }: { networkMotion?: boolean }) {
  return (
    <div className="semantic-home">
      <section className={`semantic-hero${networkMotion ? " semantic-hero--network" : ""}`} aria-labelledby="hero-title">
        <div className="semantic-shell semantic-hero__inner">
          <div className="semantic-hero__copy">
            <h1 id="hero-title" className="semantic-hero__opportunity-title">
              <span>We find where</span>{" "}
              <span>AI can create an</span>{" "}
              <em>advantage</em> then build it.
            </h1>
            <p className="semantic-hero__intro">
              We connect strategy, product design and engineering to turn complex
              business problems into intelligent products, workflows and systems.
            </p>
            <div className="semantic-actions">
              <a className="strategy-button" href={strategyHref}>
                Find your AI opportunity
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="semantic-text-link" href="#work">
                See our work
                <ArrowDownRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        {networkMotion && <NetworkHeroMotion />}
      </section>

      <SolutionsSection />

      <ServicesCapabilities engagementHref="/services#engagement-path" splitHeading />

      <section id="about" className="founders-section">
        <div className="semantic-shell">
          <div className="semantic-section-heading">
            <div>
              <h2>
                We bridge the gap <br />most partners can’t.
              </h2>
            </div>
            <p>
              One perspective shapes how people experience complexity. The
              other shapes how technology can carry it. Together, we turn
              intent into something a business can use.
            </p>
          </div>

          <div className="founder-grid">
            <article>
              <img
                src="/images/founders/naila.jpg"
                alt="Naila Rahman"
                width={800}
                height={1000}
                decoding="async"
              />
              <div>
                <p>Product strategy &amp; experience design</p>
                <h3>Naila Rahman</h3>
                <span>
                  Architecture-trained and research-led, she makes complex
                  systems clear. She connects strategy and design to how people
                  understand and act.
                </span>
              </div>
            </article>
            <article>
              <img
                src="/images/founders/raihan-portrait-v4.png"
                alt="Raihan Razi"
                width={800}
                height={1000}
                decoding="async"
              />
              <div>
                <p>Engineering &amp; AI delivery</p>
                <h3>Raihan Razi</h3>
                <span>
                  He connects product thinking with cloud, platform and AI
                  delivery for real-world use. His work turns engineering
                  decisions into dependable systems.
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="work" className="work-section">
        <div className="semantic-shell">
          <div className="semantic-section-heading">
            <div>
              <h2>Built to work in the real world.</h2>
            </div>
            <p>
              Current products show how we connect strategy, experience,
              intelligence and engineering around real operational needs.
            </p>
          </div>

          <WorkEvidenceList items={recentProductWork} tone="dark" />
          <Link className="semantic-text-link" to="/work">
            Explore selected work <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>

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
    </div>
  );
}
