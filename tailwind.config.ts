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
        /* Continuous brand animation: the tile turns, the glyphs stay upright
           and breathe on a staggered loop. */
        "mark-spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "mark-rise": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.045)" },
        },
        "glyph-a": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-1.6px)" },
        },
        "glyph-u": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-1.6px)" },
        },
        "glyph-i": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-1.6px)" },
        },
        /* Continuous orbit used by the About mark plate. */
        "mark-drift": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotate(0deg)" },
          "50%": { transform: "translate3d(0, -10px, 0) rotate(4deg)" },
        },
      },
      animation: {
        "rise-in": "rise-in 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fade-in 0.9s ease both",
        "pulse-dot": "pulse-dot 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
        "arrow-nudge": "arrow-nudge 0.35s cubic-bezier(0.22,1,0.36,1)",
        "mark-spin": "mark-spin 14s linear infinite",
        "mark-rise": "mark-rise 3.6s cubic-bezier(0.4,0,0.6,1) infinite",
        "glyph-a": "glyph-a 3.6s cubic-bezier(0.4,0,0.6,1) infinite",
        "glyph-u": "glyph-u 3.6s cubic-bezier(0.4,0,0.6,1) infinite",
        "glyph-i": "glyph-i 3.6s cubic-bezier(0.4,0,0.6,1) infinite",
        "mark-drift": "mark-drift 7s cubic-bezier(0.45,0,0.55,1) infinite",
      },
    },
  },
};

export default config;
