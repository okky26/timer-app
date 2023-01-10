/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      colors : {
        'primary-bg' : '#131313',
        'primary-color' : '#47E3FF',
        'primary-dg' : '#B80003',
        'primary-caution' : '#FFC700',
        'primary-dark-bg' : '#161E24',
        'disabled-start' : '#2D4031',
        'tertier' : '#FFC700'
      },
      boxShadow : {
        'primary' : '0 0 15px 1px rgba(66, 135, 245, .8)',
      },
      backgroundImage : {
        'primary-gr' : 'linear-gradient(0deg, rgba(10,178,208,1) 100%, rgba(71,227,255,1) 0%)',
        'primary-dg-gr' : 'linear-gradient(0deg, rgba(92,0,2,1) 0%, rgba(252,0,5,1) 100%)',
        'primary-play-gr' : 'linear-gradient(180deg, rgba(0,251,55,1) 0%, rgba(0,103,23,1) 100%)',
        'primary-modal' : 'linear-gradient(130.5deg, #FFFFFF 9.21%, #F7F7F7 23.21%, #D9D9D9 76.4%)'
      },
      fontFamily : {
        'Radio' : ['RADIOLAND', 'serif'],
        'Inter' : ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}
