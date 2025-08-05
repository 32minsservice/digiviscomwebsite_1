/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightgray: '#d2ed8c',
      },
    },
  },
  extend: {
  fontFamily: {
    cabinet: ['"Cabinet Grotesk"'],},
    colors: {
        lightgray: '#d2ed8c',
      },
  },
}
