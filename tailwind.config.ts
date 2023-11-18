import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { min: "320px", max: "479px" },
        "sm-only": { min: "480px", max: "680px" },
        "md-lg": { min: "768px", max: "999px" },
      },
    },
  },
  plugins: [],
};
export default config;
