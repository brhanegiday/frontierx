module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // sm: "1rem",
      },
      colors: {
        "star-dust": {
          50: "#fafafa",
          100: "#f6f6f6",
          200: "#e8e8e8",
          300: "#dadada",
          400: "#bebebe",
          500: "#A2A2A2",
          600: "#929292",
          700: "#7a7a7a",
          800: "#616161",
          900: "#4f4f4f",
        },
        "red-ribbon": {
          50: "#fff5f6",
          100: "#ffebed",
          200: "#fecdd2",
          300: "#feafb7",
          400: "#fd7282",
          500: "#FC364C",
          600: "#e33144",
          700: "#bd2939",
          800: "#97202e",
          900: "#7b1a25",
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%": { backgroundColor: "#181919" },
          "50%": { backgroundColor: "#2e233e" },
          "100%": { backgroundColor: "#181919" },
        },
      },
    },
  },
  plugins: [],
};
