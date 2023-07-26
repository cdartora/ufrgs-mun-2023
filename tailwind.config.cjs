/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "1080px",
      },
      colors: {
        darkGreen: "#1E2F23",
        lightGreen: "#868E77",
        lightTone: "#D3D6C6",
        darkTone: "#3D3D3D",
        almostWhite: "#F8F9FA",
        darkGray: "#6B7983",
        lightGray: "#87959F",
        textDark: "#304032",
        darkBorders: "#1E2F23",
        brand: {
          dark: "#1e2f23",
          white: "#D9D9D9",
          grey: "#3D3D3D",
          darker: "#1B291F",
          lightGreen: "#868E77",
        },
        calendar: {
          grey: "#87959F",
          text: "#3d3d3d",
        },
        green: {
          text: "#2C3C2F",
        },
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
