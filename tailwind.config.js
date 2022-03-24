module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
