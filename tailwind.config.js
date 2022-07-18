const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontWeight: {
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: {
        light: '#77A4B2',
        dark: '#5E7591',
      },
      gold: {
        DEFAULT: '#C6B697',
      },
      gray: {
        DEFAULT: '#E8E9EA',
      },
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui',],
      extend: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}