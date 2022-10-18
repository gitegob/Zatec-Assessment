/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jost", "Poppins", ...defaultTheme.fontFamily.sans],
      },
      transitionProperty: {
        height: "height",
      },
      colors: {
        "light-gray": "#868686",
        "dark-gray": "#212121",
        gold: "#A25C0A",
      },
    },
  },
  plugins: [],
};
