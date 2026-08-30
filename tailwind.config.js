/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#111111',
        'secondary-bg': '#181818',
        'primary-text': '#F5F3EE',
        'secondary-text': '#A6A39D',
        'coral-orange': '#FF6B4A',
        'warm-cream': '#E8DCC8',
        'electric-lime': '#C7F36B',
        obsidian: {
          950: '#111111',
          900: '#181818',
          800: '#181818',
          700: '#222222',
          600: '#2A2A2A',
        },
        violet: {
          500: '#C7F36B',
          600: '#C7F36B',
          700: '#A3D936',
        },
        rose: {
          500: '#FF6B4A',
          600: '#E85536',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Space Grotesk', 'Outfit', 'sans-serif'],
        heading: ['Outfit', 'Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
