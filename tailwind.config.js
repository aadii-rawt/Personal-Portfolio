/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : '#14131A',
        secondry : '#1C1B23'
      },
      backgroundImage : {
        'banner' : "url('./src/assets/banner.png')"
      }
    },
  },
  plugins: [],
}