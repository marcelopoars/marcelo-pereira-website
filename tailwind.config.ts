import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          900: "#312e81",
          500: "#6366f1",
          200: "#c7d2fe",
          50: "#eef2ff",
        },
        zinc: {
          900: "#18181b",
        },
      },
    },
  },
  plugins: [],
};
export default config;
