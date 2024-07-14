/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      colors: {
        'primary': "#red",
        'normal' : 'blue'
      },
      fontFamily: {
        'body': ['poppins', 'sans-serif'],
        'display': ['inter','sans-serif']

      }
    },
  },
  plugins: [],
}

