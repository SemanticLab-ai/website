import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { useCurrentFrame } from "remotion";
import { DURATION, edges, HEIGHT, nodes, type Node, WIDTH } from "./network";

type Point = { x: number; y: number };
type Drag = Point & { id: number; grabX: number; grabY: number };
type Release = Point & { id: number; frame: number };
type Props = { reducedMotion?: boolean };

const TAU = Math.PI * 2;
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

export const NetworkComposition = ({ reducedMotion = false }: Props) => {
  const frame = useCurrentFrame();
  const [pointer, setPointer] = useState<Point | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [drag, setDrag] = useState<Drag | null>(null);
  const [release, setRelease] = useState<Release | null>(null);
  const releaseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const active = drag?.id ?? hovered ?? selected;

  useEffect(() => () => {
    if (releaseTimer.current) clearTimeout(releaseTimer.current);
  }, []);

  const points = nodes.map((node, id) => {
    const base = position(node, id, frame, reducedMotion);
    if (drag?.id === id) return { x: drag.x, y: drag.y };

    let x = base.x;
    let y = base.y;
    if (release?.id === id && !reducedMotion) {
      const elapsed = (frame - release.frame + DURATION) % DURATION;
      const spring = Math.exp(-elapsed / 7) * Math.cos(elapsed * 0.39);
      x += release.x * spring;
      y += release.y * spring;
    }
    if (pointer && !reducedMotion) {
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
    if (drag) {
      setDrag({ ...drag, x: point.x + drag.grabX, y: point.y + drag.grabY });
    } else {
      setPointer(point);
    }
  };

  const onCanvasDown = (event: PointerEvent<SVGSVGElement>) => {
    if (event.pointerType !== "touch" || event.target !== event.currentTarget) return;
    const point = svgPoint(event);
    if (!point) return;
    const nearest = points.reduce(
      (result, node, id) => {
        const distance = Math.hypot(node.x - point.x, node.y - point.y);
        return distance < result.distance ? { id, distance } : result;
      },
      { id: -1, distance: 58 },
    );
    if (nearest.id >= 0) setSelected(nearest.id);
  };

  const onDown = (event: PointerEvent<SVGCircleElement>, id: number) => {
    setSelected(id);
    if (event.pointerType === "touch" || reducedMotion) return;
    const point = svgPoint(event);
    if (!point) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    setPointer(null);
    setRelease(null);
    if (releaseTimer.current) clearTimeout(releaseTimer.current);
    setDrag({
      id, x: points[id].x, y: points[id].y,
      grabX: points[id].x - point.x, grabY: points[id].y - point.y,
    });
  };

  const onUp = (event: PointerEvent<SVGCircleElement>) => {
    if (!drag) return;
    const base = position(nodes[drag.id], drag.id, frame, reducedMotion);
    setRelease({ id: drag.id, x: drag.x - base.x, y: drag.y - base.y, frame });
    setDrag(null);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    releaseTimer.current = setTimeout(() => setRelease(null), 900);
  };

  const onKey = (event: KeyboardEvent<SVGCircleElement>, id: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setSelected(id);
    } else if (event.key === "Escape") {
      setSelected(null);
      setHovered(null);
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
      onPointerLeave={() => { setPointer(null); setHovered(null); }}
      onClick={(event) => { if (event.target === event.currentTarget) setSelected(null); }}
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
          return <g key={id}>
            {(isActive || (node.tone === "lime" && active === null)) && <circle
              cx={point.x} cy={point.y}
              r={isActive ? node.radius + 13 : node.radius + 7}
              fill={colors.lime} opacity={isActive ? 0.1 : 0.035}
              pointerEvents="none"
            />}
            <circle
              cx={point.x} cy={point.y} r={node.radius + 12}
              fill="transparent"
              tabIndex={node.label ? 0 : undefined}
              role={node.label ? "button" : undefined}
              aria-label={node.label ? `Explore ${node.label} connections` : undefined}
              aria-hidden={node.label ? undefined : true}
              onPointerEnter={() => setHovered(id)}
              onPointerLeave={() => setHovered(null)}
              onPointerDown={(event) => onDown(event, id)}
              onPointerUp={onUp} onPointerCancel={onUp}
              onFocus={() => setHovered(id)} onBlur={() => setHovered(null)}
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
              cx={point.x} cy={point.y} r={node.radius + 9}
              fill="none" stroke={colors.lime} strokeWidth={1.2}
              opacity={0.75} pointerEvents="none"
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
