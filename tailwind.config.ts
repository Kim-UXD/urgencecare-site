import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette rouge recalée sur le rouge exact du logo UrgenceCare
        primary: {
          50:  "#FDF2F2",
          100: "#FAE1E0",
          200: "#F4C3C2",
          300: "#E79493",
          400: "#E75855",
          500: "#E23936",
          600: "#D9221F", // anchor: rouge exact du logo
          700: "#AC1B19",
          800: "#841513",
          900: "#610F0E",
        },
        trust: {
          50:  "#EFF6FF",
          100: "#DBEAFE",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        gray: {
          50:  "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      fontFamily: {
        heading: ["var(--font-jakarta)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        body:    ["var(--font-inter)",   "Inter",              "system-ui", "sans-serif"],
      },
      borderRadius: {
        hero: "32px",
      },
      boxShadow: {
        soft: "0 4px 14px rgba(15, 23, 42, 0.06)",
        cta:  "0 10px 24px rgba(217, 34, 31, 0.28)",
        "cta-hover": "0 14px 30px rgba(217, 34, 31, 0.36)",
      },
      maxWidth: {
        container: "1240px",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)"    },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
