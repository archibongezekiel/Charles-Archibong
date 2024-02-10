/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        borderColor: "rgb(87, 134, 232)",
      },
      width: {
        dropMenuWidth: "90px",
      },
    },
  },
  plugins: [],
};
