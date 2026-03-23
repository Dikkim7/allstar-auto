/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // 🔥 THIS IS THE FIX
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};