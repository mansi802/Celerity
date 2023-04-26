/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "20px",
      },
      center: true,
    },
    extend: {
      backgroundImage: {
        wave1: "url('./assets/icons/wave1.svg')",
        wave2: "url('./assets/icons/wave2.svg')",
      },
      boxShadow: {
        custom:
          "296px 536px 245px rgba(21, 31, 72, 0.01), 167px 302px 207px rgba(21, 31, 72, 0.05), 74px 134px 153px rgba(21, 31, 72, 0.09), 19px 34px 84px rgba(21, 31, 72, 0.1), 0px 0px 0px rgba(21, 31, 72, 0.1);",
        customServiceCard:
          "0px 146px 58px rgba(0, 0, 0, 0.01), 0px 82px 49px rgba(0, 0, 0, 0.05), 0px 36px 36px rgba(0, 0, 0, 0.09), 0px 9px 20px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);",
      },
    },
  },
  plugins: [],
};
