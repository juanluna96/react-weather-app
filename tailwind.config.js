// tailwind.config.js
const colors = require("tailwindcss/colors");
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s linear',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      fontFamily: {
        'raleway': 'Raleway'
      },
      colors: {
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        gray: colors.gray,
        yellow: colors.yellow,
        trueGray: colors.trueGray,
        "blue": {
          "50": "#11711510b",
          "100": "#f5f5fa",
          "200": "#b2b5d7",
          "300": "#6e75b4",
          "400": "#40467c",
          "500": "#1e2039",
          "600": "#1a1d32",
          "700": "#181b2f",
          "800": "#151728",
          "900": "#111322"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}