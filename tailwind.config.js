const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
    },
    borderRadius: {
     'lg': '1.625rem',
    },
    borderWidth: {
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    fontWeight: {
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 1000,
    },
    borderRadius: {
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
     '4xl': '3.5rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#1A1A1A',
      ccaBlue: '#5e7591',
      ccaLightBlue: '#77a4b2',
      white: colors.white,
      gray: '#e8e9ea',
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      purple: "#51256E",
      lightpurple: "#7C5498",
      linepurple: "#8966A3",
      pink: "#DE1A60",
      lightpink:"#FCECF3",
      pinkextralight: "#FDFAFC",
      lightgray: "#FCFAFB",
      extralightgray: '#686868',
      bggray: '#F4F4F6',
      lightpurple: "#8966A3",
      mediumblue: "#005488",
      green: "#00FFB3",
      mutedGreen: '#00D696',
      gold: '#c6b697',
    },
    extend: {
      screens: {
        small: "415px",
        medium: "560px",
        large: "960px",
        xlarge: "1500px",
      }
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus'],
      borderColor: ['hover', 'active'],
      borderWidth: ['hover', 'focus'],
      animation: ['hover', 'focus'],
      animation: ['motion-safe'],
      backdropBlur: ['hover', 'focus'],
    },
  },
  plugins: [],
}
}