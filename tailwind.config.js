module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#ff0000",
        secondary: "#333333",
        tertiary: "#212121"
      }
    }
  },
  variants: {
    opacity: ["responsive", "hover"]
  },
  plugins: [require("autoprefixer")]
};
