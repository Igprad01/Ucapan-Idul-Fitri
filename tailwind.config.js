/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'image' : "url('../assets/img/background.png')",
      },
      fontFamily: {
        'swash': ["swash"]
      }
    },
  },
  plugins: [],
}

