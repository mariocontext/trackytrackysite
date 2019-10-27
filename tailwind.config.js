const defaultTheme = require("tailwindcss/defaultTheme");

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
  plugins: [
    require("autoprefixer"),
    function({ addUtilities }) {
      const newUtilities = {
        ".sketchy-1": {
          borderBottomLeftRadius: "15px 255px",
          borderBottomRightRadius: "225px 15px",
          borderTopLeftRadius: "255px 15px",
          borderTopRightRadius: "15px 225px"
        }
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }
  ]
};
