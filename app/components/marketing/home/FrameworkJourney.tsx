import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import {
  Blocks,
  ChartNoAxesCombined,
  Compass,
  Eye,
  Pause,
  PenTool,
  Play,
  Rocket,
} from "lucide-react";

const steps = [
  {
    name: "Discover",
    description: "Understand the business, its market and the people it serves.",
    icon: Compass,
  },
  {
    name: "Envision",
    description: "Find where intelligence can create meaningful advantage.",
    icon: Eye,
  },
  {
    name: "Design",
    description: "Shape the product, experience and operating model.",
    icon: PenTool,
  },
  {
    name: "Engineer",
    description: "Build secure, scalable systems for real workflows.",
    icon: Blocks,
  },
  {
    name: "Launch",
    description: "Validate, deploy and enable the team around the change.",
    icon: Rocket,
  },
  {
    name: "Evolve",
    description: "Learn, optimise and compound the advantage over time.",
    icon: ChartNoAxesCombined,
  },
] as const;

type Point = { x: number; y: number };
type Geometry = { width: number; height: number; points: Point[] };
type Phase = "hold" | "travel";
type Route = { d: string; length: number };

const HOLD_MS = 1050;
const TRAVEL_MS = 760;
const END_HOLD_MS = 1600;

function routeBetween(start: Point, end: Point, width: number): Route {
  if (Math.abs(end.y - start.y) < 20) {
    return {
      d: `M ${start.x} ${start.y} L ${end.x} ${end.y}`,
      length: Math.hypot(end.x - start.x, end.y - start.y),
    };
  }

  const edge = start.x > width / 2 ? width - 4 : 4;
  return {
    d: `M ${start.x} ${start.y} L ${edge} ${start.y} L ${edge} ${end.y} L ${end.x} ${end.y}`,
    length: Math.abs(edge - start.x) + Math.abs(end.y - start.y) + Math.abs(end.x - edge),
  };
}

export function FrameworkJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const iconRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [geometry, setGeometry] = useState<Geometry | null>(null);
  const [stage, setStage] = useState(0);
  const [phase, setPhase] = useState<Phase>("hold");
  const [isPlaying, setIsPlaying] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const measure = () => {
      const listRect = list.getBoundingClientRect();
      const points = iconRefs.current.map((icon) => {
        if (!icon) return null;
        const rect = icon.getBoundingClientRect();
        return {
          x: rect.left - listRect.left + rect.width / 2,
          y: rect.top - listRect.top + rect.height / 2,
        };
      });

      if (points.length !== steps.length || points.some((point) => !point)) return;
      setGeometry({
        width: listRect.width,
        height: listRect.height,
        points: points as Point[],
      });
    };

    measure();
    const observer = "ResizeObserver" in window ? new ResizeObserver(measure) : null;
    observer?.observe(list);
    window.addEventListener("resize", measure);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (!("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(media.matches);
    updateMotion();
    media.addEventListener("change", updateMotion);
    return () => media.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    const updateVisibility = () => setIsPageVisible(!document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  const canPlay =
    isPlaying && isInView && isPageVisible && !hasFocus && !reducedMotion;

  useEffect(() => {
    if (!canPlay) return;
    const delay = phase === "travel" ? TRAVEL_MS : stage === steps.length - 1 ? END_HOLD_MS : HOLD_MS;
    const timer = window.setTimeout(() => {
      if (phase === "travel") {
        setStage(stage + 1);
        setPhase("hold");
      } else if (stage === steps.length - 1) {
        setStage(0);
      } else {
        setPhase("travel");
      }
    }, delay);
    return () => window.clearTimeout(timer);
  }, [canPlay, phase, stage]);

  function settleTravel() {
    if (phase !== "travel") return;
    setStage(Math.min(stage + 1, steps.length - 1));
    setPhase("hold");
  }

  function selectStep(index: number) {
    setStage(index);
    setPhase("hold");
    setIsPlaying(false);
  }

  const routes = geometry
    ? geometry.points.slice(0, -1).map((point, index) =>
        routeBetween(point, geometry.points[index + 1], geometry.width),
      )
    : [];
  const segmentIndex = phase === "travel" ? stage : stage > 0 ? stage - 1 : null;
  const segment = segmentIndex !== null ? routes[segmentIndex] : null;

  return (
    <section id="framework" className="framework-section" ref={sectionRef}>
      <div className="semantic-shell">
        <div className="semantic-section-heading">
          <div>
            <h2>From vision to advantage. A connected journey.</h2>
          </div>
          <p>
            One integrated process moves an opportunity from strategic intent
            to a working system and continuous learning.
          </p>
        </div>

        <div className="framework-journey">
          <div className="framework-journey__toolbar">
            <p>Select a step to explore the journey.</p>
            {!reducedMotion && (
              <button
                className="framework-journey__playback"
                type="button"
                aria-label={isPlaying ? "Pause journey motion" : "Play journey motion"}
                onClick={() => {
                  if (isPlaying) settleTravel();
                  setIsPlaying((playing) => !playing);
                }}
              >
                {isPlaying ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
                <span>{isPlaying ? "Pause motion" : "Play motion"}</span>
              </button>
            )}
          </div>

          <ol
            className="framework-steps"
            ref={listRef}
            onFocusCapture={() => {
              settleTravel();
              setHasFocus(true);
            }}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false);
            }}
          >
            {geometry && (
              <svg
                className="framework-steps__connector"
                viewBox={`0 0 ${geometry.width} ${geometry.height}`}
                preserveAspectRatio="none"
                aria-hidden="true"
                focusable="false"
              >
                {routes.map((route, index) => (
                  <path className="framework-steps__track" d={route.d} key={index} />
                ))}
                {segment && (
                  <path
                    key={`${segmentIndex}-${phase}`}
                    className={`framework-steps__signal${phase === "travel" ? " framework-steps__signal--travel" : ""}`}
                    d={segment.d}
                    style={{ "--segment-length": `${segment.length}px` } as CSSProperties}
                  />
                )}
              </svg>
            )}

            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = stage === index && phase === "hold";
              return (
                <li key={step.name} data-active={isActive}>
                  <button
                    className="framework-steps__button"
                    type="button"
                    aria-label={`${step.name}: ${step.description}`}
                    aria-pressed={isActive}
                    onClick={() => selectStep(index)}
                  >
                    <span
                      className="framework-steps__icon"
                      ref={(element) => { iconRefs.current[index] = element; }}
                    >
                      <Icon aria-hidden="true" strokeWidth={1.45} />
                      <span className="framework-steps__number">0{index + 1}</span>
                    </span>
                    <span className="framework-steps__name">{step.name}</span>
                    <span className="framework-steps__description">{step.description}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
