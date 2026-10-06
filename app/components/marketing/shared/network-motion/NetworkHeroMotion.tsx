import { lazy, Suspense, useCallback, useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { edges, HEIGHT, nodes, WIDTH } from "./network";
import "./network-hero-motion.css";

const NetworkPlayer = lazy(() => import("./NetworkPlayer"));
const namedNodes = nodes.filter((node) => node.label);

function NetworkFallback() {
  return <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} aria-hidden="true">
    <g fill="none" stroke="#A8AF94" strokeWidth="0.7" opacity="0.22">
      {edges.map(([from, to]) => <line
        key={`${from}-${to}`}
        x1={nodes[from].x} y1={nodes[from].y}
        x2={nodes[to].x} y2={nodes[to].y}
      />)}
    </g>
    {nodes.map((node, id) => <circle
      key={id} cx={node.x} cy={node.y} r={node.radius}
      fill={node.tone === "lime" ? "#8BFF4D" : node.tone === "sage" ? "#A8AF94" : "#F6F6F4"}
    />)}
  </svg>;
}

export function NetworkHeroMotion() {
  const [focusedId, setFocusedId] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [visible, setVisible] = useState(true);
  const [documentVisible, setDocumentVisible] = useState(true);
  const stage = useRef<HTMLDivElement>(null);
  const onNodeFocus = useCallback((id: number | null) => setFocusedId(id), []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const element = stage.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const update = () => setDocumentVisible(!document.hidden);
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  const focusedNode = focusedId === null ? null : nodes[focusedId];
  const focusedIndex = namedNodes.findIndex((node) => node === focusedNode);
  const playing = !paused && !reducedMotion && visible && documentVisible;

  return <>
    <div className="semantic-network" data-network-motion="true" ref={stage}>
      <Suspense fallback={<NetworkFallback />}>
        <NetworkPlayer playing={playing} reducedMotion={reducedMotion} onNodeFocus={onNodeFocus} />
      </Suspense>
    </div>
    <aside className="semantic-network-detail" aria-live="polite" aria-atomic="true">
      <span className="semantic-network-detail__index">
        {focusedIndex < 0 ? "Explore the network" : `${String(focusedIndex + 1).padStart(2, "0")} / ${String(namedNodes.length).padStart(2, "0")}`}
      </span>
      <h2>{focusedNode?.label ?? "Follow a connection"}</h2>
      <p>{focusedNode?.description ?? "Move near a ringed dot, tap one, or use Tab to explore the key stages."}</p>
    </aside>
    {!reducedMotion && <button
      className="semantic-network-toggle" type="button"
      onClick={() => setPaused((value) => !value)}
      aria-label={paused ? "Play network motion" : "Pause network motion"}
      aria-pressed={paused}
    >
      {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
      <span>{paused ? "Play motion" : "Pause motion"}</span>
    </button>}
  </>;
}
