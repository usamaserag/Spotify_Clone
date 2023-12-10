/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        spotifyColor: "#1DB954",
        text_black: "#1d232a"
      },
    },
  },
  plugins: [require("daisyui")],
};
