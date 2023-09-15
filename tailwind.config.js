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
    extend: {},
    colors: {
      white: "#FFFFFF", // Your existing primary color
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
