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
    },
    function({ addBase, config }) {
      addBase({
        h1: { fontSize: config("theme.fontSize.2xl") },
        h2: { fontSize: config("theme.fontSize.xl") },
        h3: { fontSize: config("theme.fontSize.lg") }
      });
    }
  ]
};
