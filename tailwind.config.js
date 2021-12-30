module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
