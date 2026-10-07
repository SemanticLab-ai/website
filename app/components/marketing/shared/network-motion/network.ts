export const WIDTH = 1000;
export const HEIGHT = 620;
export const FPS = 30;
export const DURATION = 420;

export type Node = {
  x: number; y: number; radius: number; phase: number;
  tone: "white" | "sage" | "lime"; label?: string; description?: string;
};

// Hand placed for a loose, asymmetric topology like the supplied reference.
export const nodes: Node[] = [
  { x: 104, y: 430, radius: 4.3, phase: 0.2, tone: "lime" },
  { x: 163, y: 400, radius: 3.8, phase: 1.4, tone: "white" },
  { x: 126, y: 347, radius: 3.1, phase: 2.2, tone: "sage" },
  { x: 222, y: 330, radius: 5.5, phase: 0.7, tone: "white", label: "Discover", description: "Understand the business, its market and the people it serves." },
  { x: 239, y: 426, radius: 3.1, phase: 3.5, tone: "sage" },
  { x: 290, y: 278, radius: 3.4, phase: 4.1, tone: "white" },
  { x: 332, y: 205, radius: 3.8, phase: 2.7, tone: "sage" },
  { x: 362, y: 126, radius: 4.3, phase: 5.2, tone: "lime" },
  { x: 407, y: 206, radius: 5.1, phase: 1.8, tone: "white", label: "Envision", description: "Find where intelligence can create meaningful advantage." },
  { x: 410, y: 282, radius: 3.3, phase: 3.9, tone: "sage" },
  { x: 461, y: 125, radius: 3.1, phase: 0.9, tone: "white" },
  { x: 488, y: 220, radius: 3.4, phase: 5.7, tone: "sage" },
  { x: 512, y: 309, radius: 5.5, phase: 2.5, tone: "lime", label: "Design", description: "Shape the product, experience and operating model." },
  { x: 553, y: 376, radius: 3.5, phase: 4.7, tone: "white" },
  { x: 592, y: 276, radius: 4.3, phase: 1.2, tone: "white" },
  { x: 641, y: 185, radius: 3.0, phase: 3.2, tone: "lime" },
  { x: 684, y: 361, radius: 5.3, phase: 5.4, tone: "white", label: "Engineer", description: "Build secure, scalable systems for real workflows." },
  { x: 748, y: 329, radius: 4.4, phase: 2.0, tone: "lime" },
  { x: 804, y: 263, radius: 3.4, phase: 4.5, tone: "sage" },
  { x: 852, y: 335, radius: 4.3, phase: 0.4, tone: "white", label: "Launch", description: "Validate, deploy and enable the team around the change." },
  { x: 819, y: 455, radius: 2.9, phase: 1.6, tone: "sage" },
  { x: 706, y: 468, radius: 3.2, phase: 3.7, tone: "white" },
  { x: 588, y: 452, radius: 2.8, phase: 5.9, tone: "sage" },
  { x: 460, y: 429, radius: 3.0, phase: 2.9, tone: "white" },
];

export type Edge = readonly [number, number, "primary" | "secondary"];
export const edges: Edge[] = [
  [0, 1, "primary"], [0, 2, "secondary"], [1, 2, "primary"], [1, 3, "primary"],
  [1, 4, "secondary"], [2, 3, "secondary"], [3, 4, "primary"], [3, 5, "primary"],
  [3, 9, "secondary"], [5, 6, "primary"], [5, 8, "secondary"], [5, 9, "primary"],
  [6, 7, "primary"], [6, 8, "primary"], [6, 9, "secondary"], [7, 8, "primary"],
  [7, 10, "secondary"], [8, 9, "primary"], [8, 10, "secondary"], [8, 11, "primary"],
  [8, 12, "secondary"], [9, 11, "secondary"], [9, 12, "primary"], [9, 23, "secondary"],
  [10, 11, "primary"], [10, 15, "secondary"], [11, 12, "primary"], [11, 14, "secondary"],
  [12, 13, "primary"], [12, 14, "primary"], [12, 16, "secondary"], [12, 23, "secondary"],
  [13, 14, "secondary"], [13, 16, "primary"], [13, 22, "secondary"], [14, 15, "primary"],
  [14, 16, "primary"], [14, 17, "secondary"], [15, 18, "secondary"], [16, 17, "primary"],
  [16, 21, "secondary"], [16, 22, "primary"], [17, 18, "primary"], [17, 19, "primary"],
  [17, 21, "secondary"], [18, 19, "primary"], [19, 20, "primary"], [20, 21, "secondary"],
  [21, 22, "secondary"], [22, 23, "secondary"],
];
