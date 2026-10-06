import type { Route } from "./+types/work";
import { WorkIndex } from "~/components/marketing/work/WorkIndex";
import {
  founderExperienceGalleryEnabled,
  productGalleryEnabled,
  workHeroVideoEnabled,
} from "~/lib/deployment";

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

export function loader({ context }: Route.LoaderArgs) {
  return {
    heroVideo:
      workHeroVideoEnabled &&
      context.cloudflare.env.SL_DEPLOY_ENV === "preview" &&
      context.cloudflare.env.SL_FEATURE_WORK_HERO_VIDEO === "true",
    productGallery:
      productGalleryEnabled &&
      context.cloudflare.env.SL_DEPLOY_ENV === "preview" &&
      context.cloudflare.env.SL_FEATURE_WORK_PRODUCTS_GALLERY === "true",
    founderGallery:
      founderExperienceGalleryEnabled &&
      context.cloudflare.env.SL_DEPLOY_ENV === "preview" &&
      context.cloudflare.env.SL_FEATURE_FOUNDER_EXPERIENCE_GALLERY === "true",
  };
}

export default function Work({ loaderData }: Route.ComponentProps) {
  return (
    <WorkIndex
      heroVideo={loaderData.heroVideo}
      productGallery={loaderData.productGallery}
      founderGallery={loaderData.founderGallery}
    />
  );
}
