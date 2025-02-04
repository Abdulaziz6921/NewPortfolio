/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mono: ['"Courier New"', "Courier", "monospace"],
    },
    extend: {
      colors: {
        primary: "#1a3048",
        secondary: "#FFA200",
        dark_like: "#192E77",
        gray_like: "#2A2931",
      },

      animation: {
        wiggle: "wiggle 0.8s ease-in-out 4.5s infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-15deg)" },
          "50%": { transform: "rotate(20deg)" },
        },
      },
    },
  },
  plugins: [],
};
