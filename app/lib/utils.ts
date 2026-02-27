import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Lookup map for dynamic color classes.
 * Tailwind scans for complete class names at build time — template literals
 * like `bg-${color}` are never matched. Use this map instead.
 */
export const colorMap = {
  "vector-rose": {
    bg: "bg-vector-rose",
    bg5: "bg-vector-rose/5",
    bg10: "bg-vector-rose/10",
    bg20: "bg-vector-rose/20",
    text: "text-vector-rose",
    border20: "border-vector-rose/20",
    from: "from-vector-rose",
  },
  "neural-teal": {
    bg: "bg-neural-teal",
    bg5: "bg-neural-teal/5",
    bg10: "bg-neural-teal/10",
    bg20: "bg-neural-teal/20",
    text: "text-neural-teal",
    border20: "border-neural-teal/20",
    from: "from-neural-teal",
  },
  "signal-amber": {
    bg: "bg-signal-amber",
    bg5: "bg-signal-amber/5",
    bg10: "bg-signal-amber/10",
    bg20: "bg-signal-amber/20",
    text: "text-signal-amber",
    border20: "border-signal-amber/20",
    from: "from-signal-amber",
  },
  "smart-indigo": {
    bg: "bg-smart-indigo",
    bg5: "bg-smart-indigo/5",
    bg10: "bg-smart-indigo/10",
    bg20: "bg-smart-indigo/20",
    text: "text-smart-indigo",
    border20: "border-smart-indigo/20",
    from: "from-smart-indigo",
  },
} as const;

export type BrandColor = keyof typeof colorMap;
