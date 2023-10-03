const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: 'jit',
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
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
  plugins: [],
}
