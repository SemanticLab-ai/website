import {
  ArrowUpRight,
  Braces,
  CreditCard,
  Database,
  Fingerprint,
  RadioTower,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { WorkEvidence } from "~/data/work";

const motifIcons: Record<WorkEvidence["motif"], LucideIcon> = {
  commerce: Workflow,
  broadcast: RadioTower,
  data: Database,
  payments: CreditCard,
  api: Braces,
  identity: Fingerprint,
};

type WorkEvidenceListProps = {
  items: readonly WorkEvidence[];
  tone: "light" | "dark";
};

export function WorkEvidenceList({ items, tone }: WorkEvidenceListProps) {
  return (
    <div className={`work-evidence-list work-evidence-list--${tone}`}>
      {items.map((item, index) => {
        const Icon = motifIcons[item.motif];
        const isExternal = item.href.startsWith("http");

        return (
          <a
            key={item.name}
            className="work-evidence-row"
            href={item.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            aria-label={`View ${item.name}`}
          >
            <span className="work-evidence-row__index">0{index + 1}</span>
            <div className="work-evidence-row__title">
              <h3>{item.name}</h3>
              {item.provenance ? <p>{item.provenance}</p> : null}
            </div>
            <p className="work-evidence-row__summary">{item.summary}</p>
            <ul className="work-evidence-row__capabilities" aria-label="Capabilities shown">
              {item.capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
            <span className="work-evidence-row__signal" aria-hidden="true">
              <Icon strokeWidth={1.35} />
              <ArrowUpRight strokeWidth={1.35} />
            </span>
          </a>
        );
      })}
    </div>
  );
}
