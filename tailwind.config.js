/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D4AF37", // Metallic Gold
          dark: "#A68A48",
          light: "#E5C76B"
        },
        secondary: {
          DEFAULT: "#FDFBF7", // Ivory/Cream
          dark: "#111111", // Deep Charcoal
        }
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Montserrat'", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
