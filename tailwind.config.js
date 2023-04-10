/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#FAA419',
        primaryBlack: '#131A22',
        secondaryColor: '##FEBD69',
        secondaryBlack: '#232F3F',
        secondaryGray: '#37475A',
        secondaryDark: '#131A22',
      },
      fontFamily: {
        FontNormal: ['"HirukoPro-Regular"', 'sans-serif'],
        FontBold: ['"HirukoPro-Bold"', 'sans-serif'],
        FontLight: ['"HirukoPro-Light"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
