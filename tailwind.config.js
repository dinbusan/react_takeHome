/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        orange: "#F17623",
        hoverOrange: "#C65B1F",
        underlineOrange: "#E95E30",
      },
    },
  },
  plugins: [],
};
