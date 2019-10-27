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
        },
        ".sketchy-2": {
          borderBottomLeftRadius: "185px 25px",
          borderBottomRightRadius: "20px 205px",
          borderTopLeftRadius: "125px 25px",
          borderTopRightRadius: "10px 205px"
        },
        ".sketchy-3": {
          borderBottomLeftRadius: "225px 15px",
          borderBottomRightRadius: "15px 225px",
          borderTopLeftRadius: "15px 225px",
          borderTopRightRadius: "1255px 15px"
        },
        ".sketchy-4": {
          borderBottomLeftRadius: "125px 115px",
          borderBottomRightRadius: "155px 25px",
          borderTopLeftRadius: "15px 225px",
          borderTopRightRadius: "25px 150px"
        },
        ".sketchy-5": {
          borderBottomLeftRadius: "20px 115px",
          borderBottomRightRadius: "15px 105px",
          borderTopLeftRadius: "250px 15px",
          borderTopRightRadius: "125px 85px"
        },
        ".sketchy-6": {
          borderBottomLeftRadius: "15px 205px",
          borderBottomRightRadius: "20px 15px",
          borderTopLeftRadius: "28px 125px",
          borderTopRightRadius: "100px 30px"
        }
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }
  ]
};
