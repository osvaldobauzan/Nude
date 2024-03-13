
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
        Vanilla: ['NT Vanilla', "sans-serif"],
        DMSerif: ['DM Serif Display', "sans-serif"]
      },
      colors: {
        'green-bauzan': '#1F271B',
        'blue-bauzan': '#95B2B0',
        'rojito1': '#A44A3F',
        'rojito2': '#481620',
        'nude':'#FDF6E9',
        'nude2':'#AC9482'
      },
      fontSize: {
        '9xl': '10rem'
      }
    },
  },
  plugins: [],
}