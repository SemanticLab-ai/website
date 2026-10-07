import type { Route } from "./+types/services";
import { data } from "react-router";
import {
  createStrategyEmail,
  formString,
  strategyEngagementSchema,
  type StrategyActionData,
} from "~/lib/strategy-engagement";
import { ServicesHero } from "~/components/marketing/services/ServicesHero";
import { ServicesCapabilities } from "~/components/marketing/services/ServicesCapabilities";
import { EngagementPath } from "~/components/marketing/services/EngagementPath";
import { StrategyEngagement } from "~/components/marketing/services/StrategyEngagement";

const noStore = { "Cache-Control": "no-store" };

function actionResult(result: StrategyActionData, status = 200) {
  return data(result, { status, headers: noStore });
}

export async function action({ request, context }: Route.ActionArgs) {
  const env = context.cloudflare.env;
  if (env.SL_FEATURE_DIRECT_FORM !== "true") {
    return actionResult({ status: "error", message: "This form is not available." }, 404);
  }

  if (request.headers.get("Origin") !== new URL(request.url).origin) {
    return actionResult({ status: "error", message: "Please submit the form from this page." }, 403);
  }

  if (!request.headers.get("Content-Type")?.startsWith("application/x-www-form-urlencoded") ||
      Number(request.headers.get("Content-Length") || 0) > 16_384) {
    return actionResult({ status: "error", message: "The request could not be processed." }, 413);
  }

  const body = await request.text();
  if (body.length > 16_384) {
    return actionResult({ status: "error", message: "The request is too large." }, 413);
  }
  const formData = new URLSearchParams(body);
  if (formString(formData, "company_website")) {
    return actionResult({ status: "error", message: "The request could not be processed." }, 400);
  }

  const parsed = strategyEngagementSchema.safeParse({
    name: formString(formData, "name"),
    email: formString(formData, "email"),
    organisation: formString(formData, "organisation"),
    role: formString(formData, "role"),
    stage: formString(formData, "stage"),
    horizon: formString(formData, "horizon"),
    opportunity: formString(formData, "opportunity"),
    outcome: formString(formData, "outcome"),
    context: formString(formData, "context"),
  });
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const field = String(issue.path[0] || "");
      if (field && !fieldErrors[field]) fieldErrors[field] = issue.message;
    }
    return actionResult({
      status: "error",
      message: "Please check the highlighted fields and try again.",
      fieldErrors,
    }, 400);
  }

  // A preview version of this shared Worker must never send a live lead.
  if (env.SL_DEPLOY_ENV !== "production" || env.SL_LEAD_EMAIL_ENABLED !== "true") {
    return actionResult({
      status: "preview",
      message: "Preview request validated. No email was sent.",
    });
  }

  const clientIP = request.headers.get("CF-Connecting-IP") || "unknown";
  const limit = await env.LEAD_RATE_LIMIT.limit({ key: clientIP });
  if (!limit.success) {
    return actionResult({
      status: "error",
      message: "Too many requests. Please try again in a minute.",
    }, 429);
  }

  const token = formString(formData, "cf-turnstile-response");
  const secret = await env.TURNSTILE_SECRET.get().catch(() => null);
  if (!secret) {
    console.error("Strategy form Turnstile secret is missing");
    return actionResult({ status: "error", message: "We could not send your request. Please email us directly." }, 503);
  }

  const challenge = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token, remoteip: clientIP }),
  }).then((response) => response.json() as Promise<{
    success: boolean;
    hostname?: string;
    action?: string;
  }>).catch(() => null);
  if (!challenge?.success ||
      challenge.action !== "strategy_engagement" ||
      !["semanticlab.ai", "www.semanticlab.ai"].includes(challenge.hostname || "")) {
    return actionResult({
      status: "error",
      message: "Verification expired or failed. Please try again.",
    }, 400);
  }

  const reference = crypto.randomUUID();
  try {
    const message = createStrategyEmail(parsed.data, reference);
    const result = await env.LEAD_EMAIL.send({
      to: "hello@semanticlab.ai",
      from: { email: "forms@semanticlab.ai", name: "SemanticLab website" },
      replyTo: parsed.data.email,
      ...message,
    });
    console.log("Strategy request accepted", { reference, messageId: result.messageId });
    return actionResult({
      status: "sent",
      message: "Your Strategy Engagement request has been sent. We'll reply by email.",
    });
  } catch (error) {
    console.error("Strategy email send failed", {
      reference,
      code: error && typeof error === "object" && "code" in error ? error.code : "unknown",
    });
    return actionResult({
      status: "error",
      message: "We could not send your request. Please email us directly.",
    }, 503);
  }
}

export function meta({}: Route.MetaArgs) {
  const title = "Services | SemanticLab Product Innovation Partner";
  const description =
    "Strategy, experience, intelligence and engineering connected around the business opportunity, from first question through launch and evolution.";
  const ogImage = "/images/og-default.jpg";
  const url = "https://semanticlab.ai/services";

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

export default function Services() {
  return (
    <div className="semantic-services">
      <ServicesHero />
      <ServicesCapabilities />
      <EngagementPath />
      <StrategyEngagement />
    </div>
  );
}
