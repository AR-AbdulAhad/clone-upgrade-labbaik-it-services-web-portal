/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "orange-color": "var(--orange-color)",
        "dark-color": "var(--dark-color)"
      },
    },
  },
  plugins: [],
};