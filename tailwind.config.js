/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        whitewash: '#f9f7f1',
        terracotta: '#e2725b',
        azuresea: '#3baee7',
        sand: '#a2b5e7',
        oliveleaf: '#a3b18a',
        terra: '#d88259',
        sea: '#5db2d4',
      },
    },
  },
  plugins: [],
};