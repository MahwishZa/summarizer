/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        worksans: ['"Work Sans"', 'sans-serif'],
      },
      colors: {
        'accent': '#FFDD81'
      },
      keyframes: {
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-left': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'slide-right': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'slide-down': 'slide-down 0.5s ease-in-out forwards',
        'slide-up': 'slide-up 0.5s ease-in-out forwards',
        'slide-left': 'slide-left 0.5s ease-in-out forwards',
        'slide-right': 'slide-right 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}