/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      vsm: "410px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Exo\\ 2", "sans-serif"],
      },
      colors: {
        darkBlueBackground: "#170550",
        purpleBlueBackground: "#31065A",
        brightOrange: "#F86F03",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
