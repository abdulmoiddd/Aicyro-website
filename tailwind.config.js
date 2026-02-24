/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // This is a close approximation of the background color in the image
        "custom-dark-purple": "#1a0f3d",
      },
      fontFamily: {
        // Now you can use 'font-poppins' in your components
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
