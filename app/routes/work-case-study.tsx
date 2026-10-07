import { useLoaderData } from "react-router";
import type { Route } from "./+types/work-case-study";
import { CaseStudyPage } from "~/components/marketing/work/CaseStudyPage";
import { getCaseStudy, getNextCaseStudy } from "~/data/case-studies";

export function loader({ params }: Route.LoaderArgs) {
  const caseStudy = getCaseStudy(params.slug);

  if (!caseStudy) {
    throw new Response("Case study not found", { status: 404 });
  }

  return {
    caseStudy,
    nextCaseStudy: getNextCaseStudy(caseStudy.slug),
  };
}

export function meta({ data }: Route.MetaArgs) {
  if (!data) {
    return [{ title: "Case Study Not Found | SemanticLab" }];
  }

  const { caseStudy } = data;
  const title = `${caseStudy.name} Case Study | SemanticLab`;
  const description = caseStudy.summary;
  const image = `https://semanticlab.ai${caseStudy.image}`;
  const url = `https://semanticlab.ai/work/${caseStudy.slug}`;

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:url", content: url },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { tagName: "link", rel: "canonical", href: url },
  ];
}

export default function WorkCaseStudyRoute() {
  const { caseStudy, nextCaseStudy } = useLoaderData<typeof loader>();

  return (
    <CaseStudyPage
      caseStudy={caseStudy}
      nextCaseStudy={nextCaseStudy}
    />
  );
}
