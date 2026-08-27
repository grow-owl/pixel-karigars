/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pearl: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
        },
        indigo: {
          950: '#0B0F19',
          900: '#0F172A',
          800: '#1E1B4B',
          700: '#312E81',
        },
        coral: {
          500: '#F43F5E',
          600: '#E11D48',
          700: '#BE123C',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
