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
        "weather-bg": "url('/image/weather-bg.jpg')",
      },
    },
  },
  plugins: [],
};