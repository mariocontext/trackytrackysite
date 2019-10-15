module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#ff0000",
        secondary: "#CCCCCC"
      }
    }
  },
  variants: {
    opacity: ["responsive", "hover"]
  },
  plugins: [require("autoprefixer")]
};
