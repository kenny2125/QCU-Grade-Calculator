/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E8FCD9',
        text: '#000000',
      },
      fontSize: {
        'title': '96px',
        'body': '18px',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}