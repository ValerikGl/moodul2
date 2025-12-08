module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,ts}",
    "./pages/**/*.{njk,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};

