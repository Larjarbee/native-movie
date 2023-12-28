/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        PrimaryMain: '#1F1D36',
        LightPrimary: '#872341',
        Red: '#BE3144',
        LightRed: '#F05941',
      },
    },
  },
  plugins: [],
};
