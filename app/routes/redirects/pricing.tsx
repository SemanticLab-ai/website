import { redirect } from "react-router";
import type { Route } from "./+types/pricing";

export function loader({}: Route.LoaderArgs) {
  return redirect("/products/image-enhancer/pricing", 301);
}

export default function PricingRedirect() {
  return null;
}
