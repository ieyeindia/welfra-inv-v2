/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-base": "#64748b",
        "gray-dark": "#334155",
        "gray-darker": "#1e293b",
        "blue-primary": "#0050cf",
        "blue-secondary": "#40cbf1",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
