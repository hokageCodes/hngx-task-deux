/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./src/assets/poster.png')",
        mobileHero: "url('./src/assets/mobile-poster.png')",
      },
      fontFamily: {
        dmSans: "DM Sans",
      },
    },
  },
  plugins: [],
};
