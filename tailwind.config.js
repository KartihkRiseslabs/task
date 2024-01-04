/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'left':'#79a2d8',
      'right':'#9071bf'
    },
    extend: {},
  },
  plugins: [],
}