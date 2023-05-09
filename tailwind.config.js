/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      gridTemplateRows: {
        layout: "140px 1fr auto",
      },
      backgroundImage: {
        "raining": "url('/image/giphy.gif')",
        "daylight": "url('/image/daylight.jpg')",
        "sunset": "url('/image/sunset.jpg')",
        "sunrise": "url('/image/sunrise.jpg')",
        "5pm": "url('/image/5pm.jpg')",
        "12am": "url('/image/12am.jpg')",
      },
    },
  },
  plugins: [],
};