const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    fontFamily: {
      display: ['"Neucha"', "sans-serif"],
      body: ['"Neucha"', "sans-serif"]
    },
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
