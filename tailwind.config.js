/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rancho: ['Rancho', 'cursive'], // Add Rancho font
        Raleway: ["Raleway", 'sans-serif'], // Add Rancho font
      },
      colors: {
        primary: "#331A15", // Add custom primary color
      },
    },
  },
  plugins: [],
};
