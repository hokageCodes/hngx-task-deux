/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/poster.png')",
        mobileHero: "url('/assets/mobile-poster.png')",
      },
      fontFamily: {
        dmSans: ["DM Sans"],
      },
      colors: {
        movieRed: "#BE123C",
        favorite: "#F3F4F6",
      },
    },
  },
  plugins: [],
};
