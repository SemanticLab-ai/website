import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import type { CaseStudy } from "~/data/case-studies";

export const sponsoredFeedsSeo = {
  title: "SponsoredFeeds: Sports Sponsorship Content Automation | SemanticLab",
  description:
    "How SponsoredFeeds turns grassroots match results into sponsor-branded posts, with approval, publishing and exposure reporting in one workflow.",
  headline:
    "SponsoredFeeds: from match results to sponsor-branded posts",
};

const workflow = [
  {
    number: "01",
    title: "Get the result",
    body: "Fixtures and scores can come from supported league platforms such as PlayHQ, Dribl, GameDay, SportsEngine and LeagueApps. Clubs can also enter a result manually. Either way, the score enters the content workflow once.",
  },
  {
    number: "02",
    title: "Build the sponsor tile",
    body: "SponsoredFeeds pairs the match update with a sponsor and fills a verified template with team names, scores, club colours, crests and approved logos. The graphic is rendered from those fields rather than remade for every game.",
  },
  {
    number: "03",
    title: "Approve or publish",
    body: "The club can review the finished post or use automated publishing to Facebook and Instagram. The approval path leaves a person in control when a match update needs a final check.",
  },
  {
    number: "04",
    title: "Record the appearance",
    body: "Each sponsor appearance is logged with its club, match, channel and time. Where the social platform provides data, reach and engagement can be added to the sponsor report.",
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
              SponsoredFeeds: <em>from match results to sponsor-branded posts.</em>
            </h1>
            <p className="sf-hero__intro">
              After the final whistle, someone still has to collect the score,
              update a graphic, add the right sponsor and publish it.
              SponsoredFeeds connects those steps and records each sponsor
              appearance as the content goes out.
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
              <dd>Scores, logos and social posts in separate places</dd>
            </div>
            <div>
              <dt>The product</dt>
              <dd>Sponsor-branded posts with an exposure record</dd>
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
              A full-time result tile on the SponsoredFeeds product site.
            </figcaption>
          </figure>
        </div>
      </section>

      <nav className="sf-contents" aria-label="In this article">
        <div className="semantic-shell sf-contents__inner">
          <span>In this story</span>
          <a href="#the-challenge">The problem</a>
          <a href="#how-it-works">The workflow</a>
          <a href="#product-decisions">Design choices</a>
          <a href="#sponsor-proof">Sponsor reporting</a>
        </div>
      </nav>

      <section className="sf-section sf-section--paper" id="the-challenge" aria-labelledby="sf-challenge-title">
        <div className="semantic-shell sf-editorial-grid">
          <div className="sf-section__label">The problem</div>
          <div className="sf-prose">
            <h2 id="sf-challenge-title">
              The match ends. The content work starts.
            </h2>
            <p className="sf-prose__lead">
              A full-time result should be an easy post. For a local club, it
              can mean checking the league score, finding the current sponsor
              logo, editing a template, publishing from a phone and remembering
              where the sponsor appeared.
            </p>
            <p>
              Those details sit across league platforms, design files and
              social accounts. The person running club communications may be a
              volunteer working after the game, but the post still needs the
              correct teams, score, crest and sponsor branding.
            </p>
            <p>
              SponsoredFeeds was built to carry the result through to a
              finished post. It also keeps an appearance record, so a club can
              show a sponsor where its brand was featured during the season.
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
                From final score to a logged sponsor post.
              </h2>
              <p className="sf-prose__lead">
                The score enters once. SponsoredFeeds uses it to make the
                graphic, move it through publishing and record the sponsor
                appearance.
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
          <div className="sf-section__label">Design choices</div>
          <div className="sf-prose">
            <h2 id="sf-decisions-title">
              A wrong score is not an acceptable shortcut.
            </h2>
            <p className="sf-prose__lead">
              AI helps decide which sponsor fits a match update. A verified
              template renders the actual graphic, with defined fields for
              team names, scores, club colours and sponsor assets.
            </p>
            <p>
              This matters when a result goes out under a club&apos;s name. The
              tile has to look like the club, read clearly on a phone and show
              the correct score and sponsor. Managed template setup makes the
              layout reusable; an approval step lets someone check it before
              publication.
            </p>
            <p>
              Clubs that are comfortable with the setup can use auto-posting.
              Clubs that want a final check can approve the same generated
              asset. Both paths keep the match data, graphic and sponsor
              appearance tied together.
            </p>
          </div>
        </div>
      </section>

      <section className="sf-section sf-section--sage" id="sponsor-proof" aria-labelledby="sf-shows-title">
        <div className="semantic-shell sf-editorial-grid">
          <div className="sf-section__label">Sponsor reporting</div>
          <div className="sf-prose">
            <h2 id="sf-shows-title">
              The post goes live. The sponsor appearance is logged.
            </h2>
            <p className="sf-prose__lead">
              Each record includes the match, club, channel and time. Clubs can
              build sponsor reports from that history and add reach or
              engagement where the social platform provides it.
            </p>
            <p>
              A club gets a result tile ready to share. A sponsor can see which
              posts carried its brand. SemanticLab designed and built the steps
              between those two outcomes: sports data ingestion, sponsor
              selection, template rendering, publishing and reporting.
              SponsoredFeeds is currently taking pilot clubs.
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
            <h2>Which manual job does your team repeat every week?</h2>
            <a className="strategy-button" href="/services#strategy-engagement">
              Request a Strategy Engagement <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </article>
  );
}
