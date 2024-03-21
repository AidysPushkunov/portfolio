import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: ["var(--font-orbitron)"],
      secondary: ["var(--font-rajdhani)"],
      tertiary: ["var(--font-aldrich)"],
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
      },
      backgroundImage: {
        site: "url('/assets/site-bg.jpg')",
        about: "url('/assets/about.png')",
        services: "url('/assets/Binary code-amico.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
