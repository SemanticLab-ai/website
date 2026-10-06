import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { useCurrentFrame } from "remotion";
import { DURATION, edges, HEIGHT, nodes, type Node, WIDTH } from "./network";

type Point = { x: number; y: number };
type Drag = Point & { id: number; pointerId: number; grabX: number; grabY: number };
type Release = Point & { id: number; frame: number };
type Props = { reducedMotion?: boolean; onNodeFocus?: (id: number | null) => void };

const TAU = Math.PI * 2;
const MAX_RELEASE_OFFSET = 65;
const colors = { white: "#F6F6F4", sage: "#A8AF94", lime: "#8BFF4D" };

function position(node: Node, id: number, frame: number, reduced: boolean): Point {
  if (reduced) return { x: node.x, y: node.y };
  const cycle = (frame / DURATION) * TAU;
  return {
    x: node.x + Math.sin(cycle + node.phase) * (9 + (id % 4) * 2.1)
      + Math.sin(cycle * 2 + node.phase * 0.7) * 2.5,
    y: node.y + Math.cos(cycle + node.phase * 0.83) * (7 + (id % 3) * 2.4)
      + Math.sin(cycle * 2 + node.phase) * 2,
  };
}

function svgPoint(event: PointerEvent<SVGSVGElement | SVGCircleElement>): Point | null {
  const svg = event.currentTarget instanceof SVGSVGElement
    ? event.currentTarget : event.currentTarget.ownerSVGElement;
  const matrix = svg?.getScreenCTM();
  if (!matrix) return null;
  const point = new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse());
  return { x: point.x, y: point.y };
}

export const NetworkComposition = ({ reducedMotion = false, onNodeFocus }: Props) => {
  const frame = useCurrentFrame();
  const [pointer, setPointer] = useState<Point | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [magnetId, setMagnetId] = useState<number | null>(null);
  const [pulseFrame, setPulseFrame] = useState<number | null>(null);
  const [drag, setDrag] = useState<Drag | null>(null);
  const [release, setRelease] = useState<Release | null>(null);
  const dragRef = useRef<Drag | null>(null);
  const releaseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pulseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const magnetRadius = useRef(55);
  const active = drag?.id ?? selected;

  const triggerPulse = () => {
    setPulseFrame(frame);
    if (pulseTimer.current) clearTimeout(pulseTimer.current);
    pulseTimer.current = setTimeout(() => setPulseFrame(null), 900);
  };

  const focusNode = (id: number | null) => {
    if (id !== selected && id !== null && !reducedMotion) triggerPulse();
    setSelected(id);
    onNodeFocus?.(id);
  };

  useEffect(() => () => {
    if (releaseTimer.current) clearTimeout(releaseTimer.current);
    if (pulseTimer.current) clearTimeout(pulseTimer.current);
  }, []);

  useEffect(() => {
    const cancelDrag = () => {
      dragRef.current = null;
      setDrag(null);
      setRelease(null);
      setPointer(null);
      setMagnetId(null);
    };
    const cancelPointerDrag = (event: globalThis.PointerEvent) => {
      if (dragRef.current?.pointerId === event.pointerId) cancelDrag();
    };
    window.addEventListener("pointerup", cancelPointerDrag);
    window.addEventListener("pointercancel", cancelPointerDrag);
    window.addEventListener("blur", cancelDrag);
    document.addEventListener("visibilitychange", cancelDrag);
    return () => {
      window.removeEventListener("pointerup", cancelPointerDrag);
      window.removeEventListener("pointercancel", cancelPointerDrag);
      window.removeEventListener("blur", cancelDrag);
      document.removeEventListener("visibilitychange", cancelDrag);
    };
  }, []);

  const basePoints = nodes.map((node, id) => position(node, id, frame, reducedMotion));
  const pulseAge = pulseFrame === null ? 1000 : (frame - pulseFrame + DURATION) % DURATION;
  const buzz = reducedMotion ? 0 : Math.exp(-pulseAge / 7) * Math.abs(Math.sin(pulseAge * 1.6));

  const points = nodes.map((node, id) => {
    const base = basePoints[id];
    if (drag?.id === id) return { x: drag.x, y: drag.y };

    let x = base.x;
    let y = base.y;
    if (release?.id === id && !reducedMotion) {
      const elapsed = (frame - release.frame + DURATION) % DURATION;
      const spring = Math.exp(-elapsed / 7) * Math.cos(elapsed * 0.39);
      x += release.x * spring;
      y += release.y * spring;
    }
    if (pointer && magnetId === id && node.label && !reducedMotion) {
      const dx = pointer.x - x;
      const dy = pointer.y - y;
      const distance = Math.hypot(dx, dy);
      if (distance > 0 && distance < magnetRadius.current * 1.25) {
        const settle = 1 - Math.exp(-pulseAge / 2.8);
        const shift = Math.min(distance * 0.82 * settle, 42);
        x += (dx / distance) * shift + Math.sin(pulseAge * 2.2) * buzz * 2;
        y += (dy / distance) * shift + Math.cos(pulseAge * 2.4) * buzz * 2;
      }
    }
    // Other nodes retain the original pointer displacement.
    if (pointer && !reducedMotion && !node.label) {
      const dx = x - pointer.x;
      const dy = y - pointer.y;
      const distance = Math.hypot(dx, dy);
      if (distance > 0 && distance < 145) {
        const influence = (1 - distance / 145) ** 2 * 16;
        x += (dx / distance) * influence;
        y += (dy / distance) * influence;
      }
    }
    return { x, y };
  });

  const onMove = (event: PointerEvent<SVGSVGElement>) => {
    if (event.pointerType === "touch") return;
    const point = svgPoint(event);
    if (!point) return;
    const currentDrag = dragRef.current;
    if (currentDrag?.pointerId === event.pointerId) {
      if (event.buttons === 0) {
        finishDrag(event.pointerId);
        return;
      }
      const nextDrag = { ...currentDrag, x: point.x + currentDrag.grabX, y: point.y + currentDrag.grabY };
      dragRef.current = nextDrag;
      setDrag(nextDrag);
    } else if (!currentDrag) {
      setPointer(point);
      const scaleMatrix = event.currentTarget.getScreenCTM();
      const scale = scaleMatrix ? Math.hypot(scaleMatrix.a, scaleMatrix.b) : 1;
      const captureRadius = 42 / scale;
      magnetRadius.current = captureRadius;
      const nearest = nodes.reduce(
        (result, node, id) => {
          if (!node.label) return result;
          const distance = Math.hypot(basePoints[id].x - point.x, basePoints[id].y - point.y);
          return distance < result.distance ? { id, distance } : result;
        },
        { id: -1, distance: captureRadius },
      );
      if (nearest.id >= 0 && magnetId !== nearest.id && nearest.id === selected && !reducedMotion) triggerPulse();
      setMagnetId(nearest.id >= 0 ? nearest.id : null);
      if (nearest.id >= 0 && nearest.id !== selected) focusNode(nearest.id);
    }
  };

  const onCanvasDown = (event: PointerEvent<SVGSVGElement>) => {
    if (event.pointerType !== "touch" || event.target !== event.currentTarget) return;
    const point = svgPoint(event);
    if (!point) return;
    const nearest = points.reduce(
      (result, node, id) => {
        if (!nodes[id].label) return result;
        const distance = Math.hypot(node.x - point.x, node.y - point.y);
        return distance < result.distance ? { id, distance } : result;
      },
      { id: -1, distance: 90 },
    );
    if (nearest.id >= 0) focusNode(nearest.id);
  };

  const onDown = (event: PointerEvent<SVGCircleElement>, id: number) => {
    if (nodes[id].label) focusNode(id);
    if (event.pointerType === "touch" || event.button !== 0 || reducedMotion || dragRef.current) return;
    const point = svgPoint(event);
    if (!point) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    setPointer(null);
    setMagnetId(null);
    setRelease(null);
    if (releaseTimer.current) clearTimeout(releaseTimer.current);
    const nextDrag = {
      id, pointerId: event.pointerId, x: points[id].x, y: points[id].y,
      grabX: points[id].x - point.x, grabY: points[id].y - point.y,
    };
    dragRef.current = nextDrag;
    setDrag(nextDrag);
  };

  const finishDrag = (pointerId: number) => {
    const currentDrag = dragRef.current;
    if (!currentDrag || currentDrag.pointerId !== pointerId) return;
    dragRef.current = null;
    setDrag(null);
    const base = position(nodes[currentDrag.id], currentDrag.id, frame, reducedMotion);
    const dx = currentDrag.x - base.x;
    const dy = currentDrag.y - base.y;
    const distance = Math.hypot(dx, dy);
    const scale = distance > MAX_RELEASE_OFFSET ? MAX_RELEASE_OFFSET / distance : 1;
    setRelease({ id: currentDrag.id, x: dx * scale, y: dy * scale, frame });
    if (releaseTimer.current) clearTimeout(releaseTimer.current);
    releaseTimer.current = setTimeout(() => setRelease(null), 500);
  };

  const onUp = (event: PointerEvent<SVGSVGElement | SVGCircleElement>) => {
    finishDrag(event.pointerId);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const onKey = (event: KeyboardEvent<SVGCircleElement>, id: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      focusNode(id);
    } else if (event.key === "Escape") {
      focusNode(null);
    }
  };

  const activeNode = active === null ? null : nodes[active];
  const activePoint = active === null ? null : points[active];

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      width="100%" height="100%"
      onPointerMove={onMove}
      onPointerDown={onCanvasDown}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      onPointerLeave={() => { setPointer(null); setMagnetId(null); }}
      onClick={(event) => { if (event.target === event.currentTarget) focusNode(null); }}
      style={{ display: "block", overflow: "visible", touchAction: "pan-y" }}
      aria-label="Interactive SemanticLab network. Hover or select a node to trace its connections."
    >
      <g fill="none" strokeLinecap="round">
        {edges.map(([from, to, weight]) => {
          const connected = active !== null && (from === active || to === active);
          const quiet = active !== null && !connected;
          return <line
            key={`${from}-${to}`}
            x1={points[from].x} y1={points[from].y}
            x2={points[to].x} y2={points[to].y}
            stroke={connected ? colors.lime : colors.sage}
            strokeWidth={connected ? 1.15 : weight === "primary" ? 0.8 : 0.55}
            opacity={connected ? 0.65 : quiet ? 0.1 : weight === "primary" ? 0.24 : 0.11}
          />;
        })}
      </g>
      <g>
        {nodes.map((node, id) => {
          const isActive = active === id;
          const connected = active !== null && edges.some(([from, to]) =>
            (from === active && to === id) || (to === active && from === id));
          const quiet = active !== null && !isActive && !connected;
          const point = points[id];
          const hitPoint = node.label ? basePoints[id] : point;
          return <g key={id}>
            {node.label && !isActive && <circle
              cx={point.x} cy={point.y} r={node.radius + 10}
              fill="none" stroke={colors.sage} strokeWidth={1.1}
              opacity={0.72} pointerEvents="none"
            />}
            {(isActive || (node.tone === "lime" && active === null)) && <circle
              cx={point.x} cy={point.y}
              r={isActive ? node.radius + 13 : node.radius + 7}
              fill={colors.lime} opacity={isActive ? 0.1 : 0.035}
              pointerEvents="none"
            />}
            <circle
              cx={hitPoint.x} cy={hitPoint.y} r={node.label ? 42 : node.radius + 12}
              fill="transparent"
              tabIndex={node.label ? 0 : undefined}
              role={node.label ? "button" : undefined}
              aria-label={node.label ? `Explore ${node.label} connections` : undefined}
              aria-hidden={node.label ? undefined : true}
              onPointerDown={(event) => onDown(event, id)}
              onPointerUp={onUp} onPointerCancel={onUp}
              onLostPointerCapture={onUp}
              onFocus={() => focusNode(id)}
              onKeyDown={(event) => onKey(event, id)}
              style={{ cursor: drag?.id === id ? "grabbing" : "grab", touchAction: "pan-y", outline: "none" }}
            />
            <circle
              cx={point.x} cy={point.y}
              r={node.radius + (isActive ? 1.4 : 0)}
              fill={colors[node.tone]}
              opacity={quiet ? 0.42 : node.tone === "sage" ? 0.75 : 1}
              pointerEvents="none"
            />
            {isActive && <circle
              cx={point.x} cy={point.y} r={node.radius + 9 + buzz * 5}
              fill="none" stroke={colors.lime} strokeWidth={1.2}
              opacity={0.6 + buzz * 0.35} pointerEvents="none"
            />}
            {isActive && node.label && pulseAge < 22 && <circle
              cx={point.x} cy={point.y} r={node.radius + 13 + pulseAge * 0.7}
              fill="none" stroke={colors.lime} strokeWidth={0.9}
              opacity={0.34 * (1 - pulseAge / 22)} pointerEvents="none"
            />}
          </g>;
        })}
      </g>
      {activeNode?.label && activePoint && <g
        transform={`translate(${Math.min(activePoint.x + 19, 836)} ${Math.max(activePoint.y - 23, 40)})`}
        pointerEvents="none"
      >
        <rect x="0" y="-22" width={Math.max(95, activeNode.label.length * 11 + 26)} height="35" rx="4" fill="#18191C" stroke="#33363A" />
        <text x="13" y="0" fill={colors.white} fontFamily="Inter, Arial, sans-serif" fontSize="15" fontWeight="500">
          {activeNode.label}
        </text>
      </g>}
    </svg>
  );
};
