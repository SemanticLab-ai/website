import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { createGalaxyRenderer, type GalaxyFrame } from "./galaxy-renderer";
import "./galaxy-motion.css";

export function GalaxyMotion() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);
  const [available, setAvailable] = useState(false);
  const [reduced, setReduced] = useState(false);
  const pausedRef = useRef(false);
  useEffect(() => { pausedRef.current = paused; }, [paused]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const root = canvas.closest(".semantic-home")!;
    const hero = root.querySelector(".semantic-hero");
    let renderer: ReturnType<typeof createGalaxyRenderer> = null;
    let raf = 0, previous = performance.now(), targetScroll = 0, velocity = 0;
    let pointerX = 0, pointerY = 0, pointerStrength = 0;
    const frame: GalaxyFrame = { time: 0, scroll: 0, pointerX: 0, pointerY: 0, pointerStrength: 0, motion: true };
    function draw(now: number) {
      raf = 0;
      if (!renderer || document.hidden) return;
      const dt = Math.min((now-previous)/1000,.064); previous = now;
      frame.motion = !preference.matches && !pausedRef.current;
      if (frame.motion) {
        frame.time += dt;
        // Critically damped spring: smooth wheel input without oscillating.
        const error = frame.scroll-targetScroll, j = velocity+8.5*error, decay = Math.exp(-8.5*dt);
        frame.scroll = Math.max(0,targetScroll+(error+j*dt)*decay);
        velocity = (velocity-8.5*j*dt)*decay;
        const follow = 1-Math.exp(-dt/.12);
        frame.pointerX += (pointerX-frame.pointerX)*follow;
        frame.pointerY += (pointerY-frame.pointerY)*follow;
        frame.pointerStrength += (pointerStrength-frame.pointerStrength)*(1-Math.exp(-dt/.18));
      } else {
        frame.scroll = targetScroll; velocity = 0; frame.pointerStrength = 0;
      }
      renderer.draw(frame);
      const phase = frame.scroll < .12 ? "galaxy" : frame.scroll < .76 ? "transition" : "margins";
      const motion = frame.motion ? "running" : "paused";
      if (canvas!.dataset.phase !== phase) canvas!.dataset.phase = phase;
      if (canvas!.dataset.motion !== motion) canvas!.dataset.motion = motion;
      if (frame.motion) raf = requestAnimationFrame(draw);
    }
    function wake() { if (!raf && !document.hidden && renderer) { previous = performance.now(); raf = requestAnimationFrame(draw); } }
    function scroll() { targetScroll = Math.max(0,-root.getBoundingClientRect().top/innerHeight); wake(); }
    function resize() { renderer?.resize(innerWidth,innerHeight,hero?.getBoundingClientRect().height || innerHeight); scroll(); }
    function pointer(event: PointerEvent) {
      if (preference.matches || event.pointerType === "touch" || pausedRef.current) return;
      if (!(event.target instanceof Element) || !root.contains(event.target) || event.target.closest('a, button, input, select, textarea, [role="button"]')) { pointerStrength=0; return; }
      if (!pointerStrength) { frame.pointerX=event.clientX; frame.pointerY=event.clientY; }
      pointerX=event.clientX; pointerY=event.clientY; pointerStrength=1; wake();
    }
    function leave() { pointerStrength=0; }
    function visibility() { cancelAnimationFrame(raf); raf=0; leave(); wake(); }
    function reducedMotion() { setReduced(preference.matches); velocity=0; wake(); }
    function initialize() {
      try { renderer=createGalaxyRenderer(canvas!); } catch (error) { console.warn("Galaxy motion unavailable:", error); renderer=null; }
      setAvailable(Boolean(renderer)); resize();
    }
    function lost(event: Event) { event.preventDefault(); cancelAnimationFrame(raf); raf=0; renderer=null; setAvailable(false); }
    function resume() { wake(); }
    initialize(); reducedMotion();
    window.addEventListener("scroll",scroll,{passive:true});
    window.addEventListener("resize",resize);
    window.addEventListener("pointermove",pointer,{passive:true});
    window.addEventListener("blur",leave);
    document.addEventListener("pointerleave",leave);
    document.addEventListener("visibilitychange",visibility);
    preference.addEventListener("change",reducedMotion);
    canvas.addEventListener("webglcontextlost",lost);
    canvas.addEventListener("webglcontextrestored",initialize);
    canvas.addEventListener("galaxy-resume",resume);
    return () => {
      cancelAnimationFrame(raf); renderer?.dispose();
      window.removeEventListener("scroll",scroll); window.removeEventListener("resize",resize);
      window.removeEventListener("pointermove",pointer); window.removeEventListener("blur",leave);
      document.removeEventListener("pointerleave",leave); document.removeEventListener("visibilitychange",visibility);
      preference.removeEventListener("change",reducedMotion);
      canvas.removeEventListener("webglcontextlost",lost); canvas.removeEventListener("webglcontextrestored",initialize);
      canvas.removeEventListener("galaxy-resume",resume);
    };
  }, []);
  function toggle() {
    pausedRef.current = !pausedRef.current;
    setPaused(pausedRef.current);
    canvasRef.current?.dispatchEvent(new Event("galaxy-resume"));
  }
  return <>
    <div className="galaxy-motion-fallback" aria-hidden="true" hidden={available} />
    <canvas ref={canvasRef} className="galaxy-motion" aria-hidden="true" data-galaxy-motion="true" />
    {available && !reduced && <button className="galaxy-motion-toggle" type="button" onClick={toggle} aria-label={paused ? "Play galaxy animation" : "Pause galaxy animation"} aria-pressed={paused}>
      {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
      <span>{paused ? "Play motion" : "Pause motion"}</span>
    </button>}
  </>;
}
