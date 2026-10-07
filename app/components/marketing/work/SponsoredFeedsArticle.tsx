import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import type { CaseStudy } from "~/data/case-studies";

export const sponsoredFeedsSeo = {
  title: "SponsoredFeeds: Grassroots Sponsorship Automation | SemanticLab",
  description:
    "See how SemanticLab connected match data, sponsor-branded content, publishing and exposure reporting in SponsoredFeeds, a product for grassroots sport.",
  headline:
    "SponsoredFeeds: from match results to sponsor-ready stories",
};

const workflow = [
  {
    number: "01",
    title: "Bring the match into the system",
    body: "Fixtures and results can arrive from supported league platforms such as PlayHQ, Dribl, GameDay, SportsEngine and LeagueApps, or a club can enter a score manually. The result becomes structured information instead of another message someone has to copy into a design tool.",
  },
  {
    number: "02",
    title: "Match the moment to a sponsor",
    body: "The content workflow selects the relevant sponsor treatment and applies club colours, crests and approved assets to a verified template. Scores and names remain data fields, so the final tile follows a consistent layout.",
  },
  {
    number: "03",
    title: "Give the club control of publishing",
    body: "A finished asset can move to an approval step or an automated publishing path for Facebook and Instagram. Clubs can choose the level of review that fits their communications process.",
  },
  {
    number: "04",
    title: "Keep the evidence",
    body: "The sponsor appearance is logged with its club, match, channel and time. Where channel data is available, reach and engagement can be brought into a report that helps the club show what was delivered.",
  },
] as const;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: sponsoredFeedsSeo.headline,
  description: sponsoredFeedsSeo.description,
  image: "https://semanticlab.ai/images/work/sponsoredfeeds/product-hero.jpg",
  mainEntityOfPage: "https://semanticlab.ai/work/sponsoredfeeds",
  author: { "@type": "Organization", name: "SemanticLab" },
  publisher: {
    "@type": "Organization",
    name: "SemanticLab",
    url: "https://semanticlab.ai/",
  },
  about: [
    "Grassroots sports sponsorship",
    "Sports content automation",
    "Sponsor reporting",
  ],
};

type SponsoredFeedsArticleProps = {
  nextCaseStudy: CaseStudy;
};

export function SponsoredFeedsArticle({
  nextCaseStudy,
}: SponsoredFeedsArticleProps) {
  return (
    <article className="sf-article" aria-labelledby="sf-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />

      <header className="sf-hero">
        <div className="semantic-shell sf-hero__inner">
          <Link className="sf-back" to="/work">
            <ArrowLeft aria-hidden="true" /> Selected work
          </Link>
          <div className="sf-hero__main">
            <p className="sf-kicker">Built product / Grassroots sport</p>
            <h1 id="sf-title">
              SponsoredFeeds: <em>from match results to sponsor-ready stories.</em>
            </h1>
            <p className="sf-hero__intro">
              A local match creates a moment worth sharing. SponsoredFeeds turns
              that moment into club-branded content, gives sponsors a place in
              the story, and records the exposure behind every appearance.
            </p>
            <div className="sf-hero__actions">
              <a
                className="sf-link sf-link--bright"
                href="https://www.sponsoredfeeds.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore SponsoredFeeds <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="sf-link sf-link--quiet" href="#the-challenge">
                Read the story <ArrowDown aria-hidden="true" />
              </a>
            </div>
          </div>
          <dl className="sf-hero__facts">
            <div>
              <dt>The challenge</dt>
              <dd>Manual content and scattered sponsor obligations</dd>
            </div>
            <div>
              <dt>The product</dt>
              <dd>Match data to branded media and reporting</dd>
            </div>
            <div>
              <dt>Current stage</dt>
              <dd>Pilot rollout</dd>
            </div>
          </dl>
        </div>
      </header>

      <section className="sf-image-section" aria-label="SponsoredFeeds product preview">
        <div className="semantic-shell">
          <figure className="sf-product-figure">
            <div className="sf-product-figure__image">
              <img
                src="/images/work/sponsoredfeeds/product-hero.jpg"
                alt="SponsoredFeeds website showing a sponsor-branded full-time match result tile alongside its product introduction"
                width={1280}
                height={720}
                fetchPriority="high"
              />
            </div>
            <figcaption>
              The SponsoredFeeds product site, with a match result tile as the
              visible output of the workflow.
            </figcaption>
          </figure>
        </div>
      </section>

      <nav className="sf-contents" aria-label="In this article">
        <div className="semantic-shell sf-contents__inner">
          <span>In this story</span>
          <a href="#the-challenge">The challenge</a>
          <a href="#how-it-works">How it works</a>
          <a href="#product-decisions">Product decisions</a>
          <a href="#what-it-shows">What it shows</a>
        </div>
      </nav>

      <section className="sf-section sf-section--paper" id="the-challenge" aria-labelledby="sf-challenge-title">
        <div className="semantic-shell sf-editorial-grid">
          <div className="sf-section__label">The challenge</div>
          <div className="sf-prose">
            <h2 id="sf-challenge-title">
              Grassroots sponsorship has a follow-through problem.
            </h2>
            <p className="sf-prose__lead">
              The final whistle is only the beginning of a club&apos;s content
              job. Someone still has to find the score, choose the right
              sponsor, make a graphic, publish it, and remember what the sponsor
              received.
            </p>
            <p>
              In grassroots sport, those steps often live in different places:
              a league platform for fixtures, a folder for logos, a design
              template on someone&apos;s laptop, and a social account managed by a
              volunteer or small team. The work is repetitive, but every post
              still needs the right teams, score, branding and sponsor.
            </p>
            <p>
              SponsoredFeeds was shaped around that whole chain. The aim is to
              make a match result useful beyond the scoreboard: as a timely
              club update, a consistent sponsor appearance and a record that
              can support a later sponsorship conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="sf-section sf-section--dark" id="how-it-works" aria-labelledby="sf-workflow-title">
        <div className="semantic-shell">
          <div className="sf-editorial-grid sf-editorial-grid--heading">
            <div className="sf-section__label">The workflow</div>
            <div className="sf-prose">
              <h2 id="sf-workflow-title">
                How a match becomes a sponsor moment.
              </h2>
              <p className="sf-prose__lead">
                SponsoredFeeds connects sports data, content generation,
                publishing and exposure records in one repeatable flow.
              </p>
            </div>
          </div>
          <ol className="sf-flow">
            {workflow.map((step) => (
              <li key={step.number}>
                <span className="sf-flow__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sf-section sf-section--paper" id="product-decisions" aria-labelledby="sf-decisions-title">
        <div className="semantic-shell sf-editorial-grid">
          <div className="sf-section__label">Product decisions</div>
          <div className="sf-prose">
            <h2 id="sf-decisions-title">
              Automation works when the club can trust the output.
            </h2>
            <p className="sf-prose__lead">
              The product separates decisions about what to create from the
              rendering of the final asset. Intelligent orchestration can
              guide the content moment; verified templates keep the score,
              names, logos and layout in defined places.
            </p>
            <p>
              That distinction matters in a live sports setting. A result tile
              needs to be recognisably the club&apos;s, clear at social-media
              size, and accurate enough to publish without rebuilding it by
              hand. Managed template setup gives clubs a practical starting
              point, while an approval path leaves room for human judgement.
            </p>
            <p>
              The same thinking extends to sponsors. A logo on a graphic is
              one appearance; a logged appearance with match and channel
              context is something a club can report on. SponsoredFeeds brings
              those two sides of sponsorship activation into the same product.
            </p>
          </div>
        </div>
      </section>

      <section className="sf-section sf-section--sage" id="what-it-shows" aria-labelledby="sf-shows-title">
        <div className="semantic-shell sf-editorial-grid">
          <div className="sf-section__label">What it shows</div>
          <div className="sf-prose">
            <h2 id="sf-shows-title">
              A useful product connects the work behind the post.
            </h2>
            <p className="sf-prose__lead">
              SponsoredFeeds is a pilot-stage product built around a specific
              operational need in grassroots sport. Its value is in the
              connection between match data, club communications, sponsor
              commitments and the evidence of delivery.
            </p>
            <p>
              For SemanticLab, the work illustrates a product approach that
              starts with the real workflow, designs for the people doing it,
              and carries the idea through to the systems that make it run.
              The public product site shows the current offer and pilot
              availability.
            </p>
            <a
              className="sf-link sf-link--dark"
              href="https://www.sponsoredfeeds.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the live product <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <footer className="sf-outro">
        <div className="semantic-shell sf-outro__inner">
          <div>
            <p className="sf-kicker">Next in selected work</p>
            <h2>{nextCaseStudy.name}</h2>
            <Link className="sf-link sf-link--bright" to={`/work/${nextCaseStudy.slug}`}>
              Explore the work <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div>
            <p className="sf-kicker">Work with SemanticLab</p>
            <h2>What could a connected product make possible for your business?</h2>
            <a className="strategy-button" href="/services#strategy-engagement">
              Request a Strategy Engagement <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </article>
  );
}
