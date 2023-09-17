/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        condensed: ["Roboto Condensed", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      width: {
        1190: "1190px",
      },
      backgroundImage: {
        "ad-image": "url('/ad2.png')",
      },
      colors: {
        sand: {
          200: "#F4EFEB",
        },
        red: {
          500: "#DD1E22",
        },
      },
    },
  },
  plugins: [],
};
