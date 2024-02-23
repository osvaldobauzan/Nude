
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Ahganirya: ['Ahganirya', "sans-serif"],
        Vanilla: ['NT Vanilla', "sans-serif"]
      },
      fontSize: {
        '9xl': '10rem'
      }
    },
  },
  plugins: [],
}