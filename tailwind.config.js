/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: '#1D2B53',
        secondary: '#7E2553',
        accent: '#FF004D',
        neutral: '#FAEF5D',
      },
    },
  },
  plugins: [],
};
