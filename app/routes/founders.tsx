import { ArrowUpRight, Linkedin } from "lucide-react";
import { Link } from "react-router";
import { previousFounderWork, recentProductWork } from "~/data/work";

const strategyHref = "/services#strategy-engagement";

const disciplines = [
  {
    index: "01",
    name: "Strategy",
    summary: "Start with the business decision, not a predetermined solution.",
  },
  {
    index: "02",
    name: "Experience",
    summary: "Make complexity understandable to the people living with it.",
  },
  {
    index: "03",
    name: "Intelligence",
    summary: "Apply AI where it improves a real decision or workflow.",
  },
  {
    index: "04",
    name: "Engineering",
    summary: "Carry the idea into systems that can operate and evolve.",
  },
] as const;

export function meta() {
  const title = "Founders | SemanticLab";
  const description =
    "Meet Naila Rahman and Raihan Razi, the founder-led partnership connecting product strategy, experience design, intelligence and engineering at SemanticLab.";
  const ogImage = "/images/og-default.jpg";
  const url = "https://semanticlab.ai/founders";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImage },
    { property: "og:url", content: url },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
    { tagName: "link", rel: "canonical", href: url },
  ];
}

export default function Founders() {
  return (
    <div className="semantic-founders">
      <section className="founders-hero" aria-labelledby="founders-hero-title">
        <div className="semantic-shell founders-hero__inner">
          <div className="founders-hero__copy">
            <p className="semantic-kicker">Two disciplines. One mission.</p>
            <h1 id="founders-hero-title">
              One designs for <em>people.</em> One engineers for <em>scale.</em>
            </h1>
            <p>
              SemanticLab brings product strategy, experience design,
              intelligence and engineering into one founder-led partnership.
            </p>
            <Link className="semantic-text-link" to="/work">
              See how we work <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>

          <figure className="founders-hero__portrait">
            <span aria-hidden="true" className="founders-hero__marker founders-hero__marker--top" />
            <img
              src="/images/founders/founders.jpg"
              alt="SemanticLab founders Raihan Razi and Naila Rahman"
              width={1200}
              height={900}
              fetchPriority="high"
            />
            <figcaption>Founder-led from Melbourne, Australia</figcaption>
            <span aria-hidden="true" className="founders-hero__marker founders-hero__marker--bottom" />
          </figure>
        </div>
      </section>

      <section className="founders-story" aria-labelledby="founders-story-title">
        <div className="semantic-shell founders-story__inner">
          <div className="founders-story__heading">
            <p className="semantic-kicker">Our story</p>
            <h2 id="founders-story-title">
              Where curiosity becomes <em>products.</em>
            </h2>
          </div>

          <div className="founders-story__body">
            <p className="founders-story__lead">
              SemanticLab started with a simple belief: technology should make
              life easier.
            </p>
            <p>
              Long before there was a company, there were countless late nights
              building ideas, testing products, and solving problems simply
              because we couldn’t ignore them. Every experiment taught us
              something. Some failed, some succeeded, but all of them reinforced
              one thing.
            </p>
            <p className="founders-story__belief">
              We love building things that genuinely help people.
            </p>
            <p className="founders-story__closing">
              Eventually, we realised we were already doing this professionally
              every day. So we combined our experience in design, engineering,
              cloud and AI to create SemanticLab, a place where curiosity becomes
              products, and good ideas become real solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="founders-profiles" aria-labelledby="founders-profiles-title">
        <div className="semantic-shell">
          <p className="semantic-kicker">The partnership</p>
          <h2 id="founders-profiles-title">
            One perspective shapes how people <em>experience</em> complexity.
            The other shapes how technology can <em>carry it.</em>
          </h2>

          <div className="founders-profiles__grid">
            <article className="founder-profile">
              <img
                src="/images/founders/naila.jpg"
                alt="Naila Rahman"
                width={1413}
                height={1853}
                loading="lazy"
                decoding="async"
              />
              <div className="founder-profile__copy">
                <p className="founder-profile__role">
                  Product strategy &amp; experience design
                </p>
                <h3>Naila Rahman</h3>
                <p>
                  Architecture-trained and research-led, Naila shapes products
                  and services around how people understand, decide and act.
                </p>
                <p>
                  Her work connects discovery, product strategy, service design
                  and interface decisions into a coherent experience.
                </p>
                <a
                  className="founder-profile__link"
                  href="https://www.linkedin.com/in/nailarahmanrazi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin aria-hidden="true" /> LinkedIn
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </article>

            <article className="founder-profile">
              <img
                src="/images/founders/raihan-portrait-v4.png"
                alt="Raihan Razi"
                width={898}
                height={1122}
                loading="lazy"
                decoding="async"
              />
              <div className="founder-profile__copy">
                <p className="founder-profile__role">Engineering &amp; AI delivery</p>
                <h3>Raihan Razi</h3>
                <p>
                  Raihan connects product thinking with cloud, platform and AI
                  delivery so complex systems remain useful in the real world.
                </p>
                <p>
                  His previous roles span product management, platform
                  leadership and enterprise system delivery. Selected systems
                  are attributed below.
                </p>
                <a
                  className="founder-profile__link"
                  href="https://linkedin.com/in/raihanrazi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin aria-hidden="true" /> LinkedIn
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="founders-connection" aria-labelledby="founders-connection-title">
        <div className="semantic-shell">
          <div className="founders-connection__heading">
            <div>
              <p className="semantic-kicker">Where the disciplines meet</p>
              <h2 id="founders-connection-title">
                The thinking stays connected all the way through.
              </h2>
            </div>
            <p>
              Founder-led means the people shaping the opportunity remain close
              to the design and engineering decisions that make it real.
            </p>
          </div>

          <ol className="founders-disciplines">
            {disciplines.map((discipline) => (
              <li key={discipline.name}>
                <span>{discipline.index}</span>
                <h3>{discipline.name}</h3>
                <p>{discipline.summary}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="founders-evidence" aria-labelledby="founders-evidence-title">
        <div className="semantic-shell">
          <div className="founders-evidence__heading">
            <h2 id="founders-evidence-title">
              Experience that <em>carries</em> into the work.
            </h2>
            <p>
              Current product work sits beside selected systems led in previous
              roles. The attribution stays explicit.
            </p>
          </div>

          <div className="founders-evidence__rails">
            <div>
              <p className="founders-evidence__label">Current product work</p>
              <ul>
                {recentProductWork.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href}>
                      <span>{item.name}</span>
                      <ArrowUpRight aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="founders-evidence__label">
                Selected previous-role work · Raihan Razi
              </p>
              <ul>
                {previousFounderWork.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} target="_blank" rel="noreferrer">
                      <span>{item.name}</span>
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="founders-evidence__note">
            Previous-role examples are provided for founder experience and are
            not represented as SemanticLab client engagements.
          </p>
        </div>
      </section>

      <section className="founders-life" aria-labelledby="founders-life-title">
        <div className="semantic-shell founders-life__inner">
          <div className="founders-life__heading">
            <p className="semantic-kicker">Life beyond the laptop</p>
            <h2 id="founders-life-title">
              We’re partners in business <em>and in life.</em>
            </h2>
          </div>

          <figure className="founders-life__portrait">
            <img
              src="/images/founders/founders-life.jpg"
              alt="Naila Rahman and Raihan Razi together while travelling"
              width={1200}
              height={1600}
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="founders-life__body">
            <p>
              When we’re not designing products, you’ll usually find us
              travelling, discovering great food, chasing our curious little
              wonder around, or talking about ideas that somehow turn into our
              next project.
            </p>
            <p>
              The best inspiration rarely comes from sitting behind a desk. It
              comes from new places, new people, and new experiences.
            </p>
            <p className="founders-life__closing">
              That’s why we build technology that feels a little more human.
            </p>
          </div>
        </div>
      </section>

      <section className="founders-cta" aria-labelledby="founders-cta-title">
        <div className="semantic-shell founders-cta__inner">
          <h2 id="founders-cta-title">
            Where could this combination create meaningful advantage?
          </h2>
          <a className="strategy-button" href={strategyHref}>
            Request a Strategy Engagement
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}
