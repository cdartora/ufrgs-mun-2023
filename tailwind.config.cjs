/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGreen: "#1E2F23",
        lightGreen: "#868E77",
        lightTone: "#D3D6C6",
        darkGray: "#6B7983",
        lightGray: "#87959F",
      },
    },
  },
  plugins: [],
};
