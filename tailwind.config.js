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
        secondry : '#1C1B23',
        grayText : 'rgba(182, 180, 189, 0.2)',
      },
      fontFamily  : {
        poppins : ["Gabarito", 'serif'],
        liter : ["Liter", 'serif']
      },
      backgroundImage: {
        'banner' : "url('banner.png')"
      }
    },
  },
  plugins: [],
}