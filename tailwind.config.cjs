/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*/**.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage : {
        'cyber-linear' : 'linear-gradient(144deg, rgba(0,8,62,1) 0%, rgba(0,80,88,1) 50%, rgba(79,17,55,1) 100%)'
      },
      fontFamily : {
        'Radio' : ['RADIOLAND', 'serif']
      }
    },
  },
  plugins: [],
}
