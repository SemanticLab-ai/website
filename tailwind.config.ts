import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.client.{js,jsx,ts,tsx}",
    "./app/**/*.server.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1A1A1A",
        pearl: "#FAFAFA",
        slate: "#4A4A4A",
        "vector-rose": "#C75B7A",
        "vector-rose-dark": "#A84A65",
        "neural-teal": "#2A7C7D",
        "neural-teal-dark": "#1F5E5F",
        "signal-amber": "#F0A750",
        "signal-amber-dark": "#D8923F",
        cream: "#FDF8F4",
        blush: "#FDF2F4",
        background: "#FAFAFA",
        foreground: "#1A1A1A",
        card: "#FFFFFF",
        "card-foreground": "#1A1A1A",
        primary: "#C75B7A",
        "primary-foreground": "#FFFFFF",
        secondary: "#2A7C7D",
        "secondary-foreground": "#FFFFFF",
        muted: "#F5F5F5",
        "muted-foreground": "#4A4A4A",
        border: "#E5E5E5",
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        display: ["72px", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-sm": ["56px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h1: ["48px", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        h2: ["40px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h3: ["32px", { lineHeight: "1.3" }],
        h4: ["24px", { lineHeight: "1.4" }],
      },
      spacing: {
        "4xs": "2px",
        "3xs": "4px",
        "2xs": "8px",
        xs: "12px",
        sm: "16px",
        md: "24px",
        lg: "32px",
        xl: "48px",
        "2xl": "64px",
        "3xl": "96px",
        "4xl": "128px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-down": "fadeInDown 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "spin-slow": "spin 20s linear infinite",
        "bounce-soft": "bounceSoft 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-gradient": "linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 50%, var(--tw-gradient-to) 100%)",
      },
      boxShadow: {
        "glow-rose": "0 0 60px -15px rgba(199, 91, 122, 0.4)",
        "glow-teal": "0 0 60px -15px rgba(42, 124, 125, 0.4)",
        "glow-amber": "0 0 60px -15px rgba(240, 167, 80, 0.4)",
        "editorial": "0 25px 80px -20px rgba(0, 0, 0, 0.15)",
        "card-hover": "0 30px 60px -15px rgba(0, 0, 0, 0.2)",
      },
      transitionDuration: {
        "400": "400ms",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
} satisfies Config;
