const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/layouts/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xsm: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
      },
    },
    colors: {
      white: "rgb(var(--mo-white) / <alpha-value>)",
      black: "rgb(var(--mo-black) / <alpha-value>)",
      dark: {
        100: "rgb(var(--mo-dark-100) / <alpha-value>)",
        200: "rgb(var(--mo-dark-200) / <alpha-value>)",
      },
      red: {
        DEFAULT: "rgb(var(--mo-red-normal) / <alpha-value>)",
        dark: "rgb(var(--mo-red-dark) / <alpha-value>)",
        "dark-hover": "rgb(var(--mo-red-dark-hover) / <alpha-value>)",
      },
      blue: {
        DEFAULT: "rgb(var(--mo-blue-light) / <alpha-value>)",
        "dark-100": "rgb(var(--mo-blue-dark-100) / <alpha-value>)",
        "dark-200": "rgb(var(--mo-blue-dark-200) / <alpha-value>)",
      },
      cream: {
        DEFAULT: "rgb(var(--mo-cream-light) / <alpha-value>)",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
