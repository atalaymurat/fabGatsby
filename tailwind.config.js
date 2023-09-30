const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
    },
    screens: {
      xs: "474px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {
      grayscale: ["hover", "focus"],
    },
  },
  plugins: [],
}
