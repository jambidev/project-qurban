/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#b8860b',
          dark: '#8b6914',
          light: '#d4af37',
        },
        secondary: {
          DEFAULT: '#1e5631',
          dark: '#0f3a1d',
          light: '#2e7d32',
        },
        accent: '#f9b234',
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};