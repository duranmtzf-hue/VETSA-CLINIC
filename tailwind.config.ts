import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        accent: "#D4AF37",
        secondary: "#25D366",
        background: "#F8FAFC",
        gold: "#D4AF37",
        "gold-dark": "#B8941E",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        'gold': '0 10px 40px rgba(212, 175, 55, 0.2)',
        'gold-lg': '0 20px 60px rgba(212, 175, 55, 0.3)',
        'gold-xl': '0 25px 80px rgba(212, 175, 55, 0.4)',
        'inner-gold': 'inset 0 2px 4px rgba(212, 175, 55, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient-shift 3s ease infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
export default config;

