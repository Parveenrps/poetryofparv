/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'primary' : 'var(--primary)',
      'secondary' : 'var(--secondary)',
      'accent' : 'var(--accent)',
      'white' : 'var(--white)',
      'black' : 'var(--black)',
    },
    fontFamily: {
      'sans' : ['Montserrat'],
      'display' : ['Oleo Script Swash Caps'],
    },
    extend: {},
  },
  plugins: [],
}

