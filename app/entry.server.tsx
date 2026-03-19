import type { AppLoadContext, EntryContext } from "react-router";
import { ServerRouter } from "react-router";
import { isbot } from "isbot";
import { renderToReadableStream } from "react-dom/server";

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext,
  _loadContext: AppLoadContext
) {
  const userAgent = request.headers.get("user-agent");
  const body = await renderToReadableStream(
    <ServerRouter context={routerContext} url={request.url} />,
    {
      signal: request.signal,
      onError(error: unknown) {
        console.error(error);
        responseStatusCode = 500;
      },
    }
  );

  if (isbot(userAgent ?? "")) {
    await body.allReady;
  }

  responseHeaders.set("Content-Type", "text/html");

  // Security headers
  responseHeaders.set("X-Content-Type-Options", "nosniff");
  responseHeaders.set("X-Frame-Options", "DENY");
  responseHeaders.set(
    "Referrer-Policy",
    "strict-origin-when-cross-origin"
  );
  responseHeaders.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );
  responseHeaders.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains"
  );
  responseHeaders.set("X-XSS-Protection", "1; mode=block");

  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}
