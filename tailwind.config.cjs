/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      "w-370": "270px",
      "w-440": "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      color_black: "#000",
      color_white: "#fff",
      color_white_transparent: "#e1e2e6",
      color_green: "#01d28a",
      color_dark_blue: "#0e1630",
      color_blue_transparent: "#171f38",
      color_gray: "#979ea6",

      light: {
        background: "#fff",
        text_color: "#000",
      },
      dark: {
        background: "#0e1630",
        transparent: "#171f38",
        text_color: "#fff",
      },
    },

    extend: {},
  },
  plugins: [],
};
