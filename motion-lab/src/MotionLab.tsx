import { useEffect, useRef, useState } from "react";
import { Player, type PlayerRef } from "@remotion/player";
import { NetworkComposition } from "./NetworkComposition";
import { DURATION, FPS, HEIGHT, WIDTH } from "./network";

type Mode = "network" | "hero";

export const MotionLab = () => {
  const [mode, setMode] = useState<Mode>("network");
  const [manualPause, setManualPause] = useState(false);
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const player = useRef<PlayerRef>(null);
  const stage = useRef<HTMLDivElement>(null);

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
        An interactive network for the SemanticLab hero. Move your pointer through
        the field, drag a node, or select one of the named points to trace its links.
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
          inputProps={{ reducedMotion }}
          autoPlay={!reducedMotion}
          initiallyMuted
          loop
          clickToPlay={false}
          controls={false}
          style={{ width: "100%", aspectRatio: `${WIDTH} / ${HEIGHT}` }}
        />
      </div>
      {mode === "network" && <p className="stage-hint">Hover to trace · Drag to reshape · Tap a node to focus</p>}
    </div>

    <footer className="lab-footer">
      <span>14 second seamless loop</span>
      <span>24 nodes / 50 links</span>
      <span>Remotion composition + live interaction</span>
    </footer>
  </main>;
};
