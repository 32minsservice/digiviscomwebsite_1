/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightgray: '#d2ed8c',
        primary: '#169397',
      },
    },
  },
  extend: {
  fontFamily: {
    cabinet: ['"Cabinet Grotesk"'],}
  },
}
