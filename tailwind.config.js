/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: { 
          "Cormorant-Garamond": ['Cormorant Garamond', 'serif'] 
      },
      colors: {
        'cream':'#f7f3ed',
      } 
  }, 
  },
  plugins: [],
}