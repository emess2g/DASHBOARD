/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      fontFamily: {
        'opensans': ['open-sans', 'sans-serif'],
      }
    },
    extend: {},
  },
  plugins: [],
}
