/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        108: "30rem",
        116: "40rem",
        124: "50rem",
      },
      width: {
        108: "30rem",
        116: "40rem",
        124: "50rem",
      },
    },
  },
  plugins: [],
};
