import { useEffect } from "react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { Navigation } from "~/components/Navigation";
import { Footer } from "~/components/Footer";
import {
  analyticsEnabled,
  googleTagManagerId,
  indexingAllowed,
} from "~/lib/deployment";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function meta() {
  const tags = [
    { title: "SemanticLab - Designing Intelligent Businesses" },
    {
      name: "description",
      content:
        "SemanticLab is a product innovation partner helping businesses identify and build intelligent products, systems and experiences.",
    },
  ];

  if (!indexingAllowed) {
    tags.push({ name: "robots", content: "noindex, nofollow, noarchive" });
  }

  return tags;
}

export const links: Route.LinksFunction = () => [
  { rel: "icon", type: "image/png", sizes: "512x512", href: "/favicon.png" },
  { rel: "shortcut icon", href: "/favicon.ico" },
  { rel: "apple-touch-icon", href: "/favicon.png" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300..700;1,14..32,300..700&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  let isAppRoute = false;
  let usesOwnChrome = false;
  let pathname = "/";
  try {
    // useLocation may throw during SSR error boundaries when no router context exists
    const location = useLocation();
    pathname = location.pathname;
    isAppRoute = pathname.startsWith("/app");
    usesOwnChrome =
      isAppRoute || pathname === "/design-system" || pathname === "/deck";
  } catch {
    // Fallback: show marketing chrome (nav/footer) if location is unavailable
  }

  useEffect(() => {
    if (analyticsEnabled && typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "virtualPageview",
        pagePath: pathname,
        pageTitle: document.title,
      });
    }
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {analyticsEnabled && googleTagManagerId ? (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];`,
              }}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${googleTagManagerId}');`,
              }}
            />
          </>
        ) : null}
        <Meta />
        <Links />
      </head>
      <body suppressHydrationWarning>
        {analyticsEnabled && googleTagManagerId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {!usesOwnChrome && <Navigation />}
        <main id="main-content">{children}</main>
        {!usesOwnChrome && <Footer />}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
