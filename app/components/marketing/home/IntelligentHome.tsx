import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SolutionsSection } from "./SolutionsSection";
import { Link } from "react-router";
import { NetworkHeroMotion } from "~/components/marketing/shared/network-motion/NetworkHeroMotion";
import { EngagementSection } from "./EngagementSection";
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
              <span>AI systems that do</span>{" "}
              <em>the actual work.</em>
            </h1>
            <p className="semantic-hero__intro">
              SemanticLab is a founder-led AI studio. We design, build and deploy
              custom AI systems that remove busywork, unlock revenue and compound
              every month they run.
            </p>
            <div className="semantic-actions">
              <a className="strategy-button" href={strategyHref}>
                Find your AI opportunity
                <ArrowRight aria-hidden="true" />
              </a>
              <a className="semantic-text-link" href="#work">
                See our work
                <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        {networkMotion && <NetworkHeroMotion />}
      </section>

      <SolutionsSection />

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

          <WorkEvidenceList items={recentProductWork} tone="dark" featured />
          <Link className="semantic-text-link" to="/work">
            Explore selected work <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <EngagementSection networkMotion={networkMotion} />
    </div>
  );
}
