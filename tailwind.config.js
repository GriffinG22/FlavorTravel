/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        sand: "#fffdf9",
        pink: "#F72B87",
        lpink: "#FE58A8",
        blue: "#28AEE0",
        dblue: "#0675A7",
      },
    },
  },
  plugins: [],
};
