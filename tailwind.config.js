/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  // Set Inter as the default sans font
      },
      colors: {
        customBg: '#3B3B3B',
        textColor: '#B3B3B3',
        card: '#3B3B3B',
        workColor:'#121212'
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
      borderColor: ['hover'],
      borderRadius: ['hover'],
    },
  },
  plugins: [],
}