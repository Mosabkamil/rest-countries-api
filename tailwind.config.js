/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html , ./part.html"],
  theme: {
    extend: {
      colors: {
        Dark_Blue: "hsl(209, 23%, 22%)", // Dark Mode Background
        Dark_Blue_Mode_text: "hsl(200, 15%, 8%)", // Light Mode Text
        Dark_Gray: "hsl(0, 0%, 52%)", // Light Mode Input
        Light_Gray: "hsl(0, 0%, 98%)", // Light Mode Background
        White: "hsl(0, 0%, 100%)", // Dark Mode Text & Light Mode Elements
      },
      fontFamily: {
        Nunito: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
