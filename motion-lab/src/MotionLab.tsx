import { useCallback, useEffect, useRef, useState } from "react";
import { Player, type PlayerRef } from "@remotion/player";
import { NetworkComposition } from "../../app/components/marketing/shared/network-motion/NetworkComposition";
import { DURATION, FPS, HEIGHT, nodes, WIDTH } from "../../app/components/marketing/shared/network-motion/network";

type Mode = "network" | "hero";

export const MotionLab = () => {
  const [mode, setMode] = useState<Mode>("network");
  const [manualPause, setManualPause] = useState(false);
  const [visible, setVisible] = useState(true);
  const [focusedNodeId, setFocusedNodeId] = useState<number | null>(null);
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const player = useRef<PlayerRef>(null);
  const stage = useRef<HTMLDivElement>(null);
  const onNodeFocus = useCallback((id: number | null) => setFocusedNodeId(id), []);
  const namedNodes = nodes.filter((node) => node.label);
  const focusedNode = focusedNodeId === null ? null : nodes[focusedNodeId];
  const focusedIndex = focusedNodeId === null ? -1 : namedNodes.findIndex((node) => node === focusedNode);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
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
    const sync = () => {
      if (manualPause || reducedMotion || !visible || document.hidden) {
        player.current?.pause();
      } else {
        player.current?.play();
      }
    };
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, [manualPause, reducedMotion, visible]);

  return <main className="lab">
    <header className="lab-header">
      <span className="lab-brand">SemanticLab</span>
      <span className="lab-index">Motion study / 01</span>
    </header>

    <section className="intro" aria-labelledby="study-title">
      <div>
        <p className="eyebrow">A connected intelligence</p>
        <h1 id="study-title">Connections<br /><em>in motion.</em></h1>
      </div>
      <p className="intro-copy">
        An interactive network for the SemanticLab hero. Move near a ringed dot
        to catch it, then read how it connects to our work.
      </p>
    </section>

    <div className="toolbar" aria-label="Motion preview controls">
      <div className="segmented" role="group" aria-label="Preview layout">
        <button type="button" aria-pressed={mode === "network"} onClick={() => setMode("network")}>Network study</button>
        <button type="button" aria-pressed={mode === "hero"} onClick={() => setMode("hero")}>Hero context</button>
      </div>
      <button
        type="button" className="pause-button"
        onClick={() => setManualPause((value) => !value)}
        disabled={reducedMotion}
        aria-pressed={manualPause || reducedMotion}
      >
        <span aria-hidden="true">{manualPause || reducedMotion ? "▶" : "Ⅱ"}</span>
        {reducedMotion ? "Motion reduced" : manualPause ? "Play motion" : "Pause motion"}
      </button>
    </div>

    <div ref={stage} className={`stage stage--${mode}`}>
      {mode === "hero" && <div className="hero-copy">
        <p className="eyebrow">Product innovation partner</p>
        <h2><span>We find where</span><span>AI can create an</span><em>advantage</em> then build it.</h2>
        <p>We connect strategy, product design and engineering to turn complex business problems into intelligent products, workflows and systems.</p>
        <div className="mock-actions"><span>Find your AI opportunity ↗</span><span>See our work ↘</span></div>
      </div>}
      <div className="network-panel">
        <Player
          ref={player}
          component={NetworkComposition}
          compositionWidth={WIDTH}
          compositionHeight={HEIGHT}
          durationInFrames={DURATION}
          fps={FPS}
          inputProps={{ reducedMotion, onNodeFocus }}
          autoPlay={!reducedMotion}
          initiallyMuted
          loop
          clickToPlay={false}
          controls={false}
          style={{ width: "100%", aspectRatio: `${WIDTH} / ${HEIGHT}` }}
        />
      </div>
      <aside className="node-detail" aria-live="polite" aria-atomic="true">
        <span className="node-detail__index">
          {focusedIndex < 0 ? "Explore the network" : `${String(focusedIndex + 1).padStart(2, "0")} / ${String(namedNodes.length).padStart(2, "0")}`}
        </span>
        <h3>{focusedNode?.label ?? "Follow a connection"}</h3>
        <p>{focusedNode?.description ?? "Move near a ringed dot, tap one, or use Tab to explore the five key stages."}</p>
      </aside>
      {mode === "network" && <p className="stage-hint">Move near a ringed dot · Drag to reshape · Tap to focus</p>}
    </div>

    <footer className="lab-footer">
      <span>14 second seamless loop</span>
      <span>24 nodes / 50 links</span>
      <span>Remotion composition + live interaction</span>
    </footer>
  </main>;
};
