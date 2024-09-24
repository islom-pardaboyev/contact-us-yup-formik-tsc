/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E0F2E7",
          grey_500: "hsl(187, 24%, 22%)",
          grey_900: "hsl(186, 15%, 59%)",
          red: "hsl(0, 66%, 54%)",
          green_600: "hsl(169, 82%, 27%)",
          green_200: "hsl(148, 38%, 91%)",
        },
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
