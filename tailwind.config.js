/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      display: ["Libre Baskerville", "serif"],
    },
    extend: {
      colors: {
        primary: "#fbc02d",
        secondary: "#00bfa5",
        tertiary: "#ff5722",
        ["tertiary-light"]: "#ffa588",
        highlight: "#03A9F4",
        ["body-tone"]: "#545454",
        link: "#2196F3",
      },
      animation: {
        "slide-up": "1.5s ease-in-out 0.5s slide-up both",
        "slide-down": "slide-up 2s ease",
        "fade-in": "fade-in 1s ease",
      },
    },
  },
};
