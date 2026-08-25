import { redirect } from "react-router";
import type { Route } from "./+types/pricing";

export function loader({}: Route.LoaderArgs) {
  return redirect("/services#strategy-engagement", 301);
}

export default function PricingRedirect() {
  return null;
}
