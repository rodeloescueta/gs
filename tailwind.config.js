module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000" },
        gray: {
          200: "#e7e7e7",
          800: "#414141",
          900: "#111111",
          "900_01": "#191919",
          "900_03": "#011829",
          "200_01": "#eeeeee",
          "700_01": "#595f69",
          "900_02": "#212529",
          "900_3f": "#0118293f",
        },
        blue: { 50: "#eaf7ff", 400: "#4ca3ff", "100_7f": "#c0e6ff7f", "400_01": "#3898ec" },
        white: { A700: "#ffffff" },
        blue_gray: {
          100: "#d3dadf",
          300: "#91a3b1",
          400: "#748999",
          800: "#344654",
          900: "#333333",
          "100_01": "#cedae7",
        },
        indigo: { 300: "#878bd4" },
      },
      boxShadow: { xs: "0px 2px 10px 0px #0000003f" },
      fontFamily: { inter: "Inter", roboto: "Roboto", opensans: "Open Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
