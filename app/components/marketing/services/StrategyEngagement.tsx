import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Mail } from "lucide-react";

const stages = [
  "Exploring where to focus",
  "Testing a defined opportunity",
  "Ready to shape or build",
  "Evolving an existing product or system",
];

const horizons = [
  "Now to three months",
  "Three to six months",
  "Beyond six months",
  "Timing is still open",
];

function fieldValue(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

export function StrategyEngagement() {
  const [preparedEmail, setPreparedEmail] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = fieldValue(formData, "name");
    const organisation = fieldValue(formData, "organisation");
    const body = [
      "Strategy Engagement request",
      "",
      `Name: ${name}`,
      `Work email: ${fieldValue(formData, "email")}`,
      `Organisation: ${organisation}`,
      `Role: ${fieldValue(formData, "role") || "Not provided"}`,
      `Current stage: ${fieldValue(formData, "stage")}`,
      `Decision horizon: ${fieldValue(formData, "horizon")}`,
      "",
      "Opportunity or challenge:",
      fieldValue(formData, "opportunity"),
      "",
      "What would a useful outcome look like?",
      fieldValue(formData, "outcome"),
      "",
      "Additional context:",
      fieldValue(formData, "context") || "Not provided",
    ].join("\n");
    const subject = `Strategy Engagement request - ${organisation || name}`;
    const mailto = `mailto:hello@semanticlab.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setPreparedEmail(mailto);
    window.location.href = mailto;
  }

  return (
    <section id="strategy-engagement" className="strategy-engagement">
      <div className="semantic-shell strategy-engagement__layout">
        <div className="strategy-engagement__intro">
          <p className="semantic-kicker">Start with the right question</p>
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

          <p className="strategy-engagement__email">
            <span>Prefer to write directly?</span>
            <a href="mailto:hello@semanticlab.ai">
              <Mail aria-hidden="true" /> hello@semanticlab.ai
            </a>
          </p>
        </div>

        <form className="strategy-form" onSubmit={handleSubmit}>
          <div className="strategy-form__grid">
            <label>
              <span>Name</span>
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              <span>Work email</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              <span>Organisation</span>
              <input
                name="organisation"
                type="text"
                autoComplete="organization"
                required
              />
            </label>
            <label>
              <span>Your role <small>Optional</small></span>
              <input
                name="role"
                type="text"
                autoComplete="organization-title"
              />
            </label>
            <label>
              <span>Where are you now?</span>
              <select name="stage" defaultValue="" required>
                <option value="" disabled>
                  Select the closest fit
                </option>
                {stages.map((stage) => (
                  <option key={stage} value={stage}>
                    {stage}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Decision horizon</span>
              <select name="horizon" defaultValue="" required>
                <option value="" disabled>
                  Select a timeframe
                </option>
                {horizons.map((horizon) => (
                  <option key={horizon} value={horizon}>
                    {horizon}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label>
            <span>What opportunity or challenge should we understand?</span>
            <textarea name="opportunity" rows={5} required />
          </label>
          <label>
            <span>What would a useful outcome look like?</span>
            <textarea name="outcome" rows={4} required />
          </label>
          <label>
            <span>Anything else we should know? <small>Optional</small></span>
            <textarea name="context" rows={3} />
          </label>

          <div className="strategy-form__footer">
            <p>
              Preparing the request opens an email in your mail app. Nothing is
              sent until you choose send.
            </p>
            <button className="strategy-button" type="submit">
              Prepare my request
              <ArrowUpRight aria-hidden="true" />
            </button>
          </div>

          {preparedEmail ? (
            <p className="strategy-form__status" role="status">
              Your request is prepared. If your mail app did not open,{" "}
              <a href={preparedEmail}>open the email again</a>.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
