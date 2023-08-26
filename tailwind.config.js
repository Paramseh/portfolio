/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBG: "rgb(22, 22, 22)",
        primaryText: "rgb(145, 145, 145)",
        secondaryText: "rgb(207, 196, 181)",
        lightWhiteText: "rgb(247, 247, 247)",
        headingColor: "rgb(226, 226, 226)",
        copyrightText: "rgb(169, 169, 169)",
        placeholderText: "rgb(171, 171, 171)",
        buttonHover: "#E7E1D9",
        iconColor: "rgb(64, 64, 64)",
        borderColor: "rgba(76, 76, 76, 0.5)",
        labelColor: "rgb(191, 191, 191)",
      },
      fontSize: {
        logoText2xl: "21px",
        logoTextLg: "19px",
      },
    },
  },
  plugins: [],
};
