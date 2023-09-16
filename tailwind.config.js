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
      width: {
        1190: "1190px",
      },
      backgroundImage: theme => ({
        'ad-image': "url('/src/images/ad.png')",
       })
    },
    colors: {
      white: "#FFFFFF", // Your existing primary color
      black: "#000000",
      sand: {
        200: "#F4EFEB",
      },
      red: {
        500: "#DD1E22",
      },
    },
  },
  plugins: [],
};
