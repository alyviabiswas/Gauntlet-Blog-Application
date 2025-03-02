/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'pink': '#FF007F', 
          'pink-dark': '#E60073',
          'black': '#000000',
          'gray-dark': '#1E1E1E',
        },
        fontFamily: {
          'sans': ['Poppins', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }