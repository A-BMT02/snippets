/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      bg: "var(--bg)",
      dark: "var(--dark)",
      opink: "var(--opink)",
      owhite: "var(--owhite)",
      dblue: "var(--dblue)",
    },
    extend: {
      fontFamily: {
        a: ["'Alex Brush'", "cursive"],
      },
    },
  },
  plugins: [],
};
