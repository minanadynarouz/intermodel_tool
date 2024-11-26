/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '400px',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      borderWidth: {
        '5': '5px',
      },
      padding: {
        '30': '30px',
      },
      colors: {
        'custom-blue': '#1e3a8a',
        'custom-red': "#e20101",
        'custom-red-hover': '#b20101',
      },
    },
  },
  plugins: [],
}
