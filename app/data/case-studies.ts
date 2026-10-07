export type CaseStudyStep = {
  title: string;
  description: string;
};

export type CaseStudyDiscipline = {
  name: "Strategy" | "Experience" | "Intelligence" | "Engineering";
  description: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  category: string;
  proposition: string;
  summary: string;
  focus: string;
  surfaces: string;
  status: string;
  liveHref: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  opportunityHeading: string;
  opportunityBody: readonly string[];
  systemHeading: string;
  workflow: readonly CaseStudyStep[];
  buildHeading: string;
  disciplines: readonly CaseStudyDiscipline[];
  scope: readonly string[];
  demonstratesHeading: string;
  demonstratesBody: string;
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "partshq",
    name: "PartsHQ",
    category: "Current product · Commerce operations",
    proposition:
      "Making complex catalog operations manageable across Shopify and WooCommerce.",
    summary:
      "A product system for turning structured parts data into store-ready catalogues through guided configuration, platform-specific workflows and observable sync operations.",
    focus: "Commerce operations",
    surfaces: "Shopify + WooCommerce",
    status: "Current product",
    liveHref: "https://partshq.io/",
    image: "/images/work/partshq/product-hero.jpg",
    imageAlt:
      "PartsHQ product page showing its catalogue-to-commerce workflow across Shopify and WooCommerce.",
    imagePosition: "center 42%",
    opportunityHeading: "A catalog is not just a file transfer.",
    opportunityBody: [
      "Parts data has to be interpreted, mapped, enriched and monitored as it moves into commerce. The product therefore had to bring configuration and operations into one coherent system—not simply move records from A to B.",
      "PartsHQ combines a shared configuration core with different operating surfaces for Shopify and WooCommerce, keeping the workflow appropriate to each platform.",
    ],
    systemHeading: "One product. Four connected operational moves.",
    workflow: [
      {
        title: "Connect source",
        description: "Establish the catalogue and store connections.",
      },
      {
        title: "Shape output",
        description: "Configure mapping, pricing, copy and SEO behaviour.",
      },
      {
        title: "Activate workflow",
        description: "Review the platform-specific setup before sync.",
      },
      {
        title: "Observe operations",
        description: "See sync runs, errors and operational state.",
      },
    ],
    buildHeading: "The value sits between the surfaces.",
    disciplines: [
      {
        name: "Strategy",
        description: "Frame the operational problem and product direction.",
      },
      {
        name: "Experience",
        description:
          "Design platform-specific onboarding and control surfaces.",
      },
      {
        name: "Intelligence",
        description:
          "Use AI to establish a strong starting configuration while preserving operator control.",
      },
      {
        name: "Engineering",
        description:
          "Connect commerce surfaces to reliable workflow orchestration and observability.",
      },
    ],
    scope: [
      "Product strategy",
      "Experience design",
      "AI workflow design",
      "Product engineering",
      "Cloud delivery",
    ],
    demonstratesHeading:
      "Designing the operational layer, not just the storefront.",
    demonstratesBody:
      "PartsHQ represents the kind of work SemanticLab is built for: aligning product direction, human workflows, intelligent assistance and cloud engineering around one real operating problem.",
  },
  {
    slug: "sponsoredfeeds",
    name: "SponsoredFeeds",
    category: "Current product · Sports content operations",
    proposition:
      "Turning fragmented match data into repeatable sponsored content operations.",
    summary:
      "A product system connecting sports data, template-based content generation, publishing workflows and sponsor reporting.",
    focus: "Content operations",
    surfaces: "Web + mobile + MCP",
    status: "Current product",
    liveHref: "https://www.sponsoredfeeds.com/",
    image: "/images/work/sponsoredfeeds/product-hero.jpg",
    imageAlt:
      "SponsoredFeeds product page showing a generated match-result content tile.",
    imagePosition: "center 45%",
    opportunityHeading: "The hard part is the operating chain.",
    opportunityBody: [
      "Grassroots clubs work across fragmented match data, sponsor commitments, design files and publishing channels. The product had to connect those pieces into one repeatable operating flow.",
      "SponsoredFeeds treats the final graphic as one surface of a broader system spanning data ingestion, content orchestration, approval, publishing and reporting.",
    ],
    systemHeading: "One match event. Four connected operational moves.",
    workflow: [
      {
        title: "Ingest match data",
        description: "Bring fixtures, results and event context into one flow.",
      },
      {
        title: "Apply content logic",
        description:
          "Select the content moment, sponsor treatment and verified template.",
      },
      {
        title: "Publish or approve",
        description:
          "Move generated assets through an automated or reviewed release path.",
      },
      {
        title: "Record exposure",
        description:
          "Keep the appearance and channel context available for reporting.",
      },
    ],
    buildHeading: "The product connects data, content and evidence.",
    disciplines: [
      {
        name: "Strategy",
        description:
          "Frame the product around club communications and sponsor operations.",
      },
      {
        name: "Experience",
        description:
          "Design onboarding, content approval, template and reporting surfaces.",
      },
      {
        name: "Intelligence",
        description:
          "Use orchestration logic to guide content and sponsor moments while deterministic templates render the asset.",
      },
      {
        name: "Engineering",
        description:
          "Connect sports data, media generation, publishing and reporting workflows.",
      },
    ],
    scope: [
      "Product strategy",
      "Experience design",
      "Content orchestration",
      "Product engineering",
      "Platform delivery",
    ],
    demonstratesHeading:
      "Designing the activation system, not just the graphic.",
    demonstratesBody:
      "SponsoredFeeds shows how a visible content output can be supported by a deeper operating system that coordinates data, decisions, publishing and evidence.",
  },
  {
    slug: "instadash",
    name: "Instadash",
    category: "Current product · Agent infrastructure",
    proposition:
      "Giving AI agents a persistent data surface people can inspect and reuse.",
    summary:
      "A hosted surface that lets agents publish structured output into persistent, queryable grids for human review and later agent use.",
    focus: "Agent data workflows",
    surfaces: "MCP + CLI + Web",
    status: "Current product",
    liveHref: "https://instadash.io/",
    image: "/images/work/instadash/product-hero.jpg",
    imageAlt:
      "Instadash product page showing an agent publishing data into a live grid.",
    imagePosition: "center 42%",
    opportunityHeading: "A chat window is not a data surface.",
    opportunityBody: [
      "Agents produce structured research, logs and scraped output, but large tables are fragile inside conversation context. People still need a stable place to inspect, filter and share that data.",
      "Instadash creates one persistent surface that can be written by agents, reviewed by people and queried again through web, API or MCP workflows.",
    ],
    systemHeading: "One endpoint. Four connected moves.",
    workflow: [
      {
        title: "Publish output",
        description: "Send structured agent output through MCP, CLI or API.",
      },
      {
        title: "Infer structure",
        description: "Turn incoming data into typed, queryable grid columns.",
      },
      {
        title: "Review the grid",
        description: "Let people inspect, search and filter the persistent result.",
      },
      {
        title: "Reuse the data",
        description: "Query the same surface through API, embeds or agent tools.",
      },
    ],
    buildHeading: "One data surface. Two audiences.",
    disciplines: [
      {
        name: "Strategy",
        description:
          "Frame the product around the hand-off between agent output and human review.",
      },
      {
        name: "Experience",
        description:
          "Design a clear grid, workspace and integration journey for technical users.",
      },
      {
        name: "Intelligence",
        description:
          "Infer usable structure while keeping the resulting data inspectable and editable.",
      },
      {
        name: "Engineering",
        description:
          "Join hosted MCP, ingestion, versioning, query and embed surfaces into one system.",
      },
    ],
    scope: [
      "Product strategy",
      "Developer experience",
      "AI workflow design",
      "Product engineering",
      "Cloud delivery",
    ],
    demonstratesHeading:
      "Designing the hand-off between agents and people.",
    demonstratesBody:
      "Instadash shows how infrastructure can become a product experience: one operating surface that makes agent output persistent, reviewable and reusable.",
  },
];

export function getCaseStudy(slug: string | undefined) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getNextCaseStudy(slug: string) {
  const currentIndex = caseStudies.findIndex(
    (caseStudy) => caseStudy.slug === slug,
  );
  const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % caseStudies.length;
  return caseStudies[nextIndex];
}
