/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'green': '#00e676',
        'green-dark': '#00c853',
        'dark': '#0a0a0a',
        'dark-card': '#1a1a1a',
        'dark-lighter': '#2a2a2a',
      },
    },
  },
  plugins: [],
};
