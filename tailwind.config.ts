import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F5F5",
        primary: "#4AC3B7",
        secondary: "#FF6B6B",
        textPrimary: "#333333",
        textSecondary: "#A2A2A2",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};

export default config;