/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F1E8',
        blush: '#F8D7DA',
        'wine-red': '#8B2635',
        'soft-pink': '#F4C2C2',
      },
      fontFamily: {
        script: ['"Dancing Script"', 'cursive', 'serif'],
        serif: ['"Crimson Text"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
