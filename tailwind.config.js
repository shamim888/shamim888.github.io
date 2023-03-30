/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        lato: ['Lato', 'sans-serif']
      },

      colors: {
        'black-1': '#1f242d',
        'black-2': '#323946',
        main: '#0ef'
      }
    },
  },
  plugins: [],
}
