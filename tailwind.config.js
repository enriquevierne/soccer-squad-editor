/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'soccer': 'url("./assets/field-soccer.jpg")',
        'soccer-rotate': 'url("./assets/field-rotate.png")',
    },
    },
  },
  plugins: [],
}