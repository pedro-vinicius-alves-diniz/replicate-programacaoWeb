/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'neutral-1': '#212529',
        'yellow-primary': '#FFC107',
        'secondary': '#0D6EFD'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      dropShadow: {
        'logo': '0px 0px 5px deeppink'
      }
    },
  },
  plugins: [],
}

