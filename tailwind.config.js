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
      },
      animation: {
        'slide-in': 'slideIn 0.8s ease-in-out'
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translatey(-150px)', opacity: 0 },
          '100%': { transform: 'translatey(0)', opacity: 1 },
        }
      }
  }, 
  },
  plugins: [],
}