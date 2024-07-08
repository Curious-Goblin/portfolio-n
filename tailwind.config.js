/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: '#3B3B3B',
        textColor: '#B3B3B3',
        card: '#3B3B3B'
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