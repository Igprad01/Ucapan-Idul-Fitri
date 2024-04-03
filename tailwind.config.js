/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'image' : "url('/public/assets/img/background.png')",
      },
      fontFamily: {
        'RTL-Romman': ['']
      }
    },
  },
  plugins: [],
}

