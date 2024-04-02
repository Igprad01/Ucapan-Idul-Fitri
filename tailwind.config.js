/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'image' : "url('/public/assets/background.png')",
      }
    },
  },
  plugins: [],
}

