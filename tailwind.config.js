/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      textColor: {
        mainDark: '#ffffff',
        main: '#000000',
      },
      backgroundColor: {
        mainDark: '#202124',
        main: '#ffffff',
      },
    },
  },
  plugins: [],
};
