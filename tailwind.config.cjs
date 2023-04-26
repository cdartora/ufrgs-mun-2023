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
        darkGray: "#6B7983",
        lightGray: "#87959F",
        textDark: "#304032",
        darkBorders: "#1E2F23",
        brand: {
          dark: "#1e2f23",
        },
      },
    },
  },
  plugins: [],
};
