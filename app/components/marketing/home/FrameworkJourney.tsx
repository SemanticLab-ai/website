import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";

type Step = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export function FrameworkJourney({ steps }: { steps: readonly Step[] }) {
  const listRef = useRef<HTMLOListElement>(null);
  const [reachedStep, setReachedStep] = useState(-1);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReachedStep(steps.length - 1);
      return;
    }

    if (window.matchMedia("(max-width: 759px)").matches) {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const index = Number((entry.target as HTMLElement).dataset.stepIndex);
            setReachedStep((previous) => Math.max(previous, index));
          }
        },
        { threshold: 0.35, rootMargin: "0px 0px -12% 0px" },
      );
      list.querySelectorAll("li").forEach((item) => observer.observe(item));
      return () => observer.disconnect();
    }

    let interval: ReturnType<typeof setInterval> | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        setReachedStep(0);
        interval = setInterval(() => {
          setReachedStep((previous) => {
            if (previous >= steps.length - 1) {
              if (interval) clearInterval(interval);
              return previous;
            }
            return previous + 1;
          });
        }, 230);
      },
      { threshold: 0.28 },
    );
    observer.observe(list);
    return () => {
      observer.disconnect();
      if (interval) clearInterval(interval);
    };
  }, [steps.length]);

  const progress = reachedStep < 0 ? 0 : reachedStep / (steps.length - 1);

  return (
    <ol
      ref={listRef}
      className="framework-steps framework-steps--interactive"
      data-home-framework="progressive"
      style={{ "--journey-progress": progress } as CSSProperties}
    >
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <li key={step.name} data-step-index={index} data-reached={index <= reachedStep ? "true" : undefined} data-connected={index < reachedStep ? "true" : undefined}>
            <div className="framework-steps__icon">
              <Icon aria-hidden="true" strokeWidth={1.45} />
              <span>0{index + 1}</span>
            </div>
            <h3>{step.name}</h3>
            <p>{step.description}</p>
          </li>
        );
      })}
    </ol>
  );
}
