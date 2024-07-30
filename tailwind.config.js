/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      'min-1320': {min: '1320px'},
      'min-1200': {min: '1200px'},
      'min-992': {min: '992px'},
      'min-576': {min: '576px'},
    },
    extend: {
      fontFamily: {
        'open-sans': "'Open Sans', sans-serif"
      },
    },
  },
  plugins: [],
}

