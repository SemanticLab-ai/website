import { edges, HEIGHT, nodes, WIDTH } from "~/components/marketing/shared/network-motion/network";
import "./engagement-network-backdrop.css";

const pulsePath = [3, 5, 8, 12, 16, 17, 19];

export function EngagementNetworkBackdrop() {
  return (
    <svg
      className="engagement-network-backdrop"
      data-cta-network="true"
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none">
        {edges.map(([from, to, weight]) => (
          <line
            key={`${from}-${to}`}
            className={`engagement-network-backdrop__edge engagement-network-backdrop__edge--${weight}`}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
          />
        ))}
      </g>
      {nodes.map((node, id) => (
        <g key={id}>
          {node.label && (
            <circle
              className="engagement-network-backdrop__ring"
              cx={node.x}
              cy={node.y}
              r={node.radius * 3.1}
            />
          )}
          <circle
            className={`engagement-network-backdrop__node engagement-network-backdrop__node--${node.tone}`}
            cx={node.x}
            cy={node.y}
            r={node.radius}
          />
        </g>
      ))}
      {pulsePath.map((id, index) => (
        <circle
          key={id}
          className="engagement-network-backdrop__pulse"
          cx={nodes[id].x}
          cy={nodes[id].y}
          r={nodes[id].radius * 2.4}
          style={{ animationDelay: `${index * 1.75}s` }}
        />
      ))}
    </svg>
  );
}
