/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        'ligh': {},
        'dark': {
          '100': '#121212',
          '200': '#151515'
        },
      }
    },
  },
  plugins: [],
};
