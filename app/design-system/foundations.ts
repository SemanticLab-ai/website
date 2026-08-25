export const brandColours = [
  {
    name: "Signal Lime",
    token: "--sl-color-lime",
    hex: "#8BFF4D",
    role: "Intelligence, momentum and primary action",
  },
  {
    name: "Warm White",
    token: "--sl-color-white",
    hex: "#F6F6F4",
    role: "Primary text and light surfaces",
  },
  {
    name: "Intelligence Sage",
    token: "--sl-color-sage",
    hex: "#A8AF94",
    role: "Supporting text and quiet data",
  },
  {
    name: "Graphite",
    token: "--sl-color-graphite",
    hex: "#33363A",
    role: "Structure, dividers and elevated detail",
  },
  {
    name: "Obsidian",
    token: "--sl-color-black",
    hex: "#0B0B0D",
    role: "Primary canvas and text on light surfaces",
  },
] as const;

export const brandMeaning = [
  {
    index: "01",
    name: "Data",
    description: "Raw potential and insight",
  },
  {
    index: "02",
    name: "Focus",
    description: "Clarity, strategy and direction",
  },
  {
    index: "03",
    name: "Intelligence",
    description: "Turning strategy into advantage",
  },
  {
    index: "04",
    name: "Impact",
    description: "Intelligent businesses that lead and scale",
  },
] as const;

export const brandValues = [
  {
    name: "Strategic",
    description: "Purpose-led thinking",
  },
  {
    name: "Human-centred",
    description: "Designed for people, driven by empathy",
  },
  {
    name: "Intelligent",
    description: "AI-powered, insight-driven",
  },
  {
    name: "Scalable",
    description: "Built to evolve and create value",
  },
  {
    name: "Trusted",
    description: "Security, ethics and reliability",
  },
] as const;

export const typeScale = [
  {
    name: "Display XL",
    token: "--sl-type-display-xl",
    sample: "Intelligent businesses.",
  },
  {
    name: "Display LG",
    token: "--sl-type-display-lg",
    sample: "From idea to impact.",
  },
  {
    name: "Display MD",
    token: "--sl-type-display-md",
    sample: "Strategy into operation.",
  },
  {
    name: "Title LG",
    token: "--sl-type-title-lg",
    sample: "Designed around the opportunity.",
  },
  {
    name: "Body LG",
    token: "--sl-type-body-lg",
    sample: "Clear enough to understand. Strong enough to scale.",
  },
] as const;

export const spacingScale = [
  { name: "1", token: "--sl-space-1", pixels: 4 },
  { name: "2", token: "--sl-space-2", pixels: 8 },
  { name: "3", token: "--sl-space-3", pixels: 12 },
  { name: "4", token: "--sl-space-4", pixels: 16 },
  { name: "5", token: "--sl-space-5", pixels: 24 },
  { name: "6", token: "--sl-space-6", pixels: 32 },
  { name: "7", token: "--sl-space-7", pixels: 48 },
  { name: "8", token: "--sl-space-8", pixels: 64 },
  { name: "9", token: "--sl-space-9", pixels: 96 },
  { name: "10", token: "--sl-space-10", pixels: 128 },
] as const;

export const motionTokens = [
  {
    name: "Fast",
    token: "--sl-duration-fast",
    value: "160ms",
    use: "Hover, focus and small state changes",
  },
  {
    name: "Base",
    token: "--sl-duration-base",
    value: "320ms",
    use: "Panels, reveals and connected transitions",
  },
  {
    name: "Slow",
    token: "--sl-duration-slow",
    value: "900ms",
    use: "Hero entrances and meaningful scene changes",
  },
  {
    name: "Ambient",
    token: "12–15s",
    value: "continuous",
    use: "Data landscapes only; always respect reduced motion",
  },
] as const;
