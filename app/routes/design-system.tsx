import type { Route } from "./+types/design-system";
import { DesignSystemPage } from "~/components/design-system/DesignSystemPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Design System | SemanticLab" },
    {
      name: "description",
      content:
        "SemanticLab brand foundations, interface rules and coded design tokens.",
    },
    { name: "robots", content: "noindex, nofollow" },
  ];
}

export default function DesignSystem() {
  return <DesignSystemPage />;
}
