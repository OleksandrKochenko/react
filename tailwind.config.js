/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        inset:
          "inset 3px 3px 3px rgba(255, 255, 255, 0.213), inset -3px -3px 3px rgba(4, 59, 88, 0.532), 12px 12px 24px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
