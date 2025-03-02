/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(215, 88, 154)',
        secondary: 'rgb(110, 44, 78)',
        darkprimary: 'rgb(136, 52, 96)',
        lightprimary: 'rgb(212, 149, 182)',
      },
      fontFamily: {
        'josefin': ['Josefin Sans', 'sans-serif'],
        'comfortaa': ['Comfortaa', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'rotate 0.56s infinite linear',
        'slideIn': 'fadeIn 0.5s ease-in-out forwards',
        'slideOut': 'fadeOut 0.5s ease-in-out forwards',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}