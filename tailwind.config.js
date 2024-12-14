/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#FF6B00',
        'secondary-black': '#1A1A1A',
        'accent-white': '#F4F4F4',
      },
      fontFamily: {
        'custom': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-orange': 'linear-gradient(135deg, #FF6B00 0%, #FF8E53 100%)',
      },
      boxShadow: {
        'neon-orange': '0 0 15px rgba(255, 107, 0, 0.5)',
      },
    },
  },
  plugins: [],
}