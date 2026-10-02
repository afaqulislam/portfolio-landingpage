import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "hsl(var(--paper) / <alpha-value>)",
          raised: "hsl(var(--paper-raised) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "hsl(var(--ink) / <alpha-value>)",
          muted: "hsl(var(--ink-muted) / <alpha-value>)",
          faint: "hsl(var(--ink-faint) / <alpha-value>)",
        },
        rule: {
          DEFAULT: "hsl(var(--rule) / <alpha-value>)",
          strong: "hsl(var(--rule-strong) / <alpha-value>)",
        },
        brand: {
          DEFAULT: "hsl(var(--brand) / <alpha-value>)",
          deep: "hsl(var(--brand-deep) / <alpha-value>)",
          wash: "hsl(var(--brand-wash) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem" }],
      },
      letterSpacing: {
        micro: "0.16em",
        wide2: "0.22em",
      },
      maxWidth: {
        prose: "68ch",
        measure: "52ch",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "ticker-scroll": {
          from: { transform: "translate3d(0,0,0)" },
          to: { transform: "translate3d(-50%,0,0)" },
        },
        "rise-in": {
          from: { opacity: "0", transform: "translate3d(0, 14px, 0)" },
          to: { opacity: "1", transform: "translate3d(0,0,0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.8)" },
        },
        "arrow-nudge": {
          from: { transform: "translate3d(0,0,0)" },
          to: { transform: "translate3d(4px,-4px,0)" },
        },
      },
      animation: {
        ticker: "ticker-scroll var(--ticker-duration, 48s) linear infinite",
        "rise-in": "rise-in 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fade-in 0.9s ease both",
        "pulse-dot": "pulse-dot 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
        "arrow-nudge": "arrow-nudge 0.35s cubic-bezier(0.22,1,0.36,1)",
      },
    },
  },
};

export default config;
