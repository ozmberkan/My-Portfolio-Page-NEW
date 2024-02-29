/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgColor': '#1E1E1E',
        'textColor': '#F0F0F0',
        'borderColor' : '#505052',
      },
      fontFamily: {
        'noto': ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}