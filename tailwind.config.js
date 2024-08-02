/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        sansa:['DM sans','sans-serif']
      },
      colors: {
        customBg: '#3B3B3B',
        textColor: '#B3B3B3',
        card: '#3B3B3B',
        workColor:'#121212',
        bgColor:'#0A0A0A',
        gradColor:'#B0B6BF'
      },
      fontSize: {
        '7.5xl': '5.25rem',
      },
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