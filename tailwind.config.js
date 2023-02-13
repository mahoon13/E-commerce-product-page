/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "josefin-sans": ["Josefin Sans"],
      },
      screens: {
        mobile: { min: "0px", max: "640px" },
      },
    },
  },
  plugins: [],
};
