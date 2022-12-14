/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        furnitureYellow: '#FBEBB5',
        myGrey: '#9f9f9f'
      }
    },
  },
  plugins: [],
}
