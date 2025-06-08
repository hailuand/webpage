import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Light mode gradients
        "light-primary": "#3B82F6", // Blue
        "light-secondary": "#06B6D4", // Cyan
        "light-accent": "#8B5CF6", // Purple
        "light-highlight": "#F59E0B", // Amber
        // Dark mode gradients
        "dark-primary": "#8B5CF6", // Purple
        "dark-secondary": "#EC4899", // Pink
        "dark-accent": "#F97316", // Orange
        "dark-highlight": "#EAB308", // Yellow
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        // Light mode gradients
        "gradient-light-primary": "linear-gradient(135deg, #3B82F6, #06B6D4)",
        "gradient-light-secondary": "linear-gradient(135deg, #06B6D4, #8B5CF6)",
        "gradient-light-accent": "linear-gradient(135deg, #8B5CF6, #F59E0B)",
        "gradient-light-hero": "linear-gradient(135deg, #3B82F6, #06B6D4, #8B5CF6)",
        "gradient-light-progress": "linear-gradient(90deg, #3B82F6, #06B6D4, #8B5CF6)",
        // Dark mode gradients
        "gradient-dark-primary": "linear-gradient(135deg, #8B5CF6, #EC4899)",
        "gradient-dark-secondary": "linear-gradient(135deg, #EC4899, #F97316)",
        "gradient-dark-accent": "linear-gradient(135deg, #F97316, #EAB308)",
        "gradient-dark-hero": "linear-gradient(135deg, #8B5CF6, #EC4899, #F97316)",
        "gradient-dark-progress": "linear-gradient(90deg, #8B5CF6, #EC4899, #F97316)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
