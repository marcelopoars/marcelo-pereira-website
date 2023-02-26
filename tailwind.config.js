/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
    extend: {},
  },
  plugins: [],
};
