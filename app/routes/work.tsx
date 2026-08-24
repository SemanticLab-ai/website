import type { Route } from "./+types/work";
import { WorkIndex } from "~/components/marketing/work/WorkIndex";

export function meta({}: Route.MetaArgs) {
  const title = "Selected Work | SemanticLab";
  const description =
    "Recent products and selected founder experience showing how SemanticLab carries strategy into intelligent products, systems and operations.";
  const ogImage = "/images/og-default.jpg";
  const url = "https://semanticlab.ai/work";

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

export default function Work() {
  return <WorkIndex />;
}
