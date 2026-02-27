import { redirect } from "react-router";
import type { Route } from "./+types/how-it-works";

export function loader({}: Route.LoaderArgs) {
  return redirect("/products/visual-search", 301);
}

export default function HowItWorksRedirect() {
  return null;
}
