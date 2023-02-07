/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      indigo: {
        900: "#312e81",
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
