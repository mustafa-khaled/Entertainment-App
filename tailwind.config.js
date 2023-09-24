/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorRed: "var(--color-red)",
        colorDarkBlue: "var(--color-dark-blue)",
        colorGreyishBlue: "var(--color-greyish-blue)",
        colorSemiDarkBlue: "var(--color-semi-dark-blue)",
        colorWhite: "var( --color-white)",
      },
    },
  },
  plugins: [],
};
