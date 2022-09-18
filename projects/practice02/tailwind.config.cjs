/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        Yellow: {
          100: '#f1e9c9',
          500: '#dbac2c',
          800: '#c47f17',
        },
        Purple: {
          100: '#ebe5f9',
          200: '#e6def8',
          500: '#8047f8',
          800: '#4b2995',
        },
        Gray: {
          100: '#fafafa',
          200: '#f3f2f2',
          300: '#ededed',
          500: '#e6e5e5',
          800: '#d7d7d5',
        },
        Black: {
          100: '#8d8686',
          300: '#574f4d',
          500: '#403937',
          800: '#272221',
        },
      },
    },
  },
  plugins: [],
}
