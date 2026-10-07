import { useEffect, useRef } from "react";
import { Form, useActionData, useNavigation } from "react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { isPreviewBuild, turnstileSiteKey } from "~/lib/deployment";
import { horizons, stages, type StrategyActionData } from "~/lib/strategy-engagement";

type TurnstileClient = {
  render: (element: HTMLElement, options: { sitekey: string; action: string; theme: "light"; size: "flexible" | "compact" }) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileClient;
  }
}

export function StrategyEngagement() {
  const actionData = useActionData() as StrategyActionData | undefined;
  const navigation = useNavigation();
  const confirmationRef = useRef<HTMLDivElement>(null);
  const turnstileContainer = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const fieldErrors = actionData?.status === "error" ? actionData.fieldErrors ?? {} : {};
  const submitting = navigation.state === "submitting";
  const sent = actionData?.status === "sent";

  useEffect(() => {
    if (!turnstileSiteKey || sent) return;

    let cancelled = false;
    const render = () => {
      if (cancelled || !window.turnstile || !turnstileContainer.current || widgetId.current) return;
      widgetId.current = window.turnstile.render(turnstileContainer.current, {
        sitekey: turnstileSiteKey,
        action: "strategy_engagement",
        theme: "light",
        size: window.matchMedia("(max-width: 380px)").matches ? "compact" : "flexible",
      });
    };

    let script = document.querySelector<HTMLScriptElement>("script[data-sl-turnstile]");
    if (!script) {
      script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.dataset.slTurnstile = "";
      document.head.appendChild(script);
    }
    script.addEventListener("load", render);
    render();

    return () => {
      cancelled = true;
      script?.removeEventListener("load", render);
      if (widgetId.current && window.turnstile) window.turnstile.remove(widgetId.current);
      widgetId.current = null;
    };
  }, [sent]);

  useEffect(() => {
    if (!actionData || sent) return;
    if (widgetId.current && window.turnstile) window.turnstile.reset(widgetId.current);
  }, [actionData, sent]);

  useEffect(() => {
    if (!sent) return;
    confirmationRef.current?.focus({ preventScroll: true });
    confirmationRef.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "center",
    });
  }, [sent]);

  const errorFor = (field: string) => fieldErrors[field]
    ? <small className="strategy-form__error">{fieldErrors[field]}</small>
    : null;

  return (
    <section id="strategy-engagement" className="strategy-engagement">
      <div className="semantic-shell strategy-engagement__layout">
        <div className="strategy-engagement__intro">
          <h2>Where could intelligence create meaningful advantage?</h2>
          <p>
            Share enough context for us to understand the opportunity, its
            importance and where things stand today. This is not a product trial
            or an instant sales call.
          </p>

          <div className="strategy-engagement__principles">
            <div>
              <Check aria-hidden="true" />
              <span>Focused on a real business opportunity</span>
            </div>
            <div>
              <Check aria-hidden="true" />
              <span>Context before conversation</span>
            </div>
            <div>
              <Check aria-hidden="true" />
              <span>No fixed package assumed</span>
            </div>
          </div>

        </div>

        {sent ? (
          <div ref={confirmationRef} className="strategy-form strategy-form--confirmation" role="status" aria-live="polite" tabIndex={-1}>
            <div className="strategy-form__confirmation-top">
              <span>Strategy Engagement / Request received</span>
              <span className="strategy-form__confirmation-icon" aria-hidden="true"><Check /></span>
            </div>
            <div className="strategy-form__confirmation-message">
              <h3>Thank you. We’ll take it from here.</h3>
              <p>{actionData.message}</p>
            </div>
            <div className="strategy-form__confirmation-next">
              <span>What happens next</span>
              <p>We’ll review what you shared and reply to the work email you provided.</p>
            </div>
            <a className="semantic-text-link strategy-form__confirmation-link" href="/work">
              Explore selected work <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        ) : (
        <Form
          className="strategy-form"
          method="post"
        >
          <div className="strategy-form__grid">
            <label>
              <span>Name</span>
              <input name="name" type="text" autoComplete="name" required maxLength={100} aria-invalid={Boolean(fieldErrors.name)} />
              {errorFor("name")}
            </label>
            <label>
              <span>Work email</span>
              <input name="email" type="email" autoComplete="email" required maxLength={254} aria-invalid={Boolean(fieldErrors.email)} />
              {errorFor("email")}
            </label>
            <label>
              <span>Organisation</span>
              <input
                name="organisation"
                type="text"
                autoComplete="organization"
                required
                maxLength={120}
                aria-invalid={Boolean(fieldErrors.organisation)}
              />
              {errorFor("organisation")}
            </label>
            <label>
              <span>Your role <small>Optional</small></span>
              <input
                name="role"
                type="text"
                autoComplete="organization-title"
                maxLength={100}
                aria-invalid={Boolean(fieldErrors.role)}
              />
              {errorFor("role")}
            </label>
            <label>
              <span>Where are you now?</span>
              <select name="stage" defaultValue="" required aria-invalid={Boolean(fieldErrors.stage)}>
                <option value="" disabled>
                  Select the closest fit
                </option>
                {stages.map((stage) => (
                  <option key={stage} value={stage}>
                    {stage}
                  </option>
                ))}
              </select>
              {errorFor("stage")}
            </label>
            <label>
              <span>Decision horizon</span>
              <select name="horizon" defaultValue="" required aria-invalid={Boolean(fieldErrors.horizon)}>
                <option value="" disabled>
                  Select a timeframe
                </option>
                {horizons.map((horizon) => (
                  <option key={horizon} value={horizon}>
                    {horizon}
                  </option>
                ))}
              </select>
              {errorFor("horizon")}
            </label>
          </div>

          <label>
            <span>What opportunity or challenge should we understand?</span>
            <textarea name="opportunity" rows={5} required minLength={10} maxLength={3000} aria-invalid={Boolean(fieldErrors.opportunity)} />
            {errorFor("opportunity")}
          </label>
          <label>
            <span>What would a useful outcome look like?</span>
            <textarea name="outcome" rows={4} required minLength={10} maxLength={3000} aria-invalid={Boolean(fieldErrors.outcome)} />
            {errorFor("outcome")}
          </label>
          <label>
            <span>Anything else we should know? <small>Optional</small></span>
            <textarea name="context" rows={3} maxLength={2000} aria-invalid={Boolean(fieldErrors.context)} />
            {errorFor("context")}
          </label>

          <div className="strategy-form__honeypot" aria-hidden="true">
            <label>Company website <input name="company_website" tabIndex={-1} autoComplete="off" /></label>
          </div>
          {turnstileSiteKey ? (
            <div className="strategy-form__verification">
              <div className="strategy-form__verification-copy">
                <span>Final check</span>
                <p>Verify your request before it goes directly to SemanticLab.</p>
              </div>
              <div ref={turnstileContainer} className="strategy-form__turnstile" />
            </div>
          ) : null}

          <div className="strategy-form__footer">
            <div className="strategy-form__footer-copy">
              <span>Ready to send</span>
              <p>{isPreviewBuild
                ? "Preview mode: your details are checked but no email is sent."
                : "Your request goes directly to SemanticLab. We’ll reply to your work email."}</p>
            </div>
            <button className="strategy-button" type="submit" disabled={submitting}>
              {submitting ? "Sending..." : isPreviewBuild ? "Check my request" : "Send my request"}
              <ArrowUpRight aria-hidden="true" />
            </button>
          </div>

          {actionData ? (
            <p className="strategy-form__status" role={actionData.status === "error" ? "alert" : "status"}>
              {actionData.message}
            </p>
          ) : null}
        </Form>
        )}
      </div>
    </section>
  );
}
