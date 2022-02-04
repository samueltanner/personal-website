const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    "high-green": "#169647",
    "uplinq-grey": "#232323",
  },
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // colors: colors,
    extend: {
      animation: {
        "fade-in-out-static": "fade-in-out-static 5s ease-in-out",
      },
      keyframes: {
        "fade-in-out-static": {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
