import {
  ArrowUpRight,
  Braces,
  CreditCard,
  Fingerprint,
  type LucideIcon,
} from "lucide-react";
import type { FounderWorkEvidence } from "~/data/work";

const motifIcons: Record<FounderWorkEvidence["motif"], LucideIcon> = {
  payments: CreditCard,
  api: Braces,
  identity: Fingerprint,
};

type FounderExperienceShowcaseProps = {
  items: readonly FounderWorkEvidence[];
};

export function FounderExperienceShowcase({ items }: FounderExperienceShowcaseProps) {
  return (
    <div className="founder-experience-showcase" data-founder-experience-gallery="true">
      {items.map((item, index) => {
        const Icon = motifIcons[item.motif];

        return (
          <a
            className="founder-experience"
            href={item.href}
            key={item.name}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read ${item.name} case study (opens in a new tab)`}
          >
            <div className="founder-experience__top">
              <span>0{index + 1}</span>
              <Icon aria-hidden="true" strokeWidth={1.25} />
            </div>
            <div className="founder-experience__story">
              <h3>{item.name}</h3>
              <p className="founder-experience__provenance">{item.provenance}</p>
              <p className="founder-experience__summary">{item.summary}</p>
            </div>
            <ul aria-label="Capabilities shown">
              {item.capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
            <span className="founder-experience__link">
              Read case study <ArrowUpRight aria-hidden="true" strokeWidth={1.5} />
            </span>
          </a>
        );
      })}
    </div>
  );
}
