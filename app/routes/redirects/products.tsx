import { redirect } from "react-router";
import type { Route } from "./+types/products";

export function loader({ request }: Route.LoaderArgs) {
  const { pathname } = new URL(request.url);
  const destination = pathname.endsWith("/pricing")
    ? "/services#strategy-engagement"
    : "/work";

  return redirect(destination, 301);
}

export default function ProductsRedirect() {
  return null;
}
