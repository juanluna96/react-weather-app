// tailwind.config.js
const colors = require("tailwindcss/colors");
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'raleway': 'Raleway'
      },
      colors: {
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        gray: colors.gray,
        yellow: colors.yellow,
        trueGray: colors.trueGray
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}