/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'grass-pattern': "url('assets/img/Grass_Type.png')",
      }
    },
  },
  plugins: [],
 }