/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      dark: "#1D2127",
      opink: "#F999CB",
      owhite: "#FFFFFF",
      dblue: "#323843",
    },
    extend: {
      fontFamily: {
        a: ["'Alex Brush'", "cursive"],
      },
    },
  },
  plugins: [],
};
