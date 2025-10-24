/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softpink: '#F8D7DD', // light pink (adjust if needed)
      },
    },
  },
  plugins: [],
}
