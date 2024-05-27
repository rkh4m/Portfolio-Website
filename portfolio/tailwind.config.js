module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include the paths to your components or pages 
    "./index.html", // Include your main HTML file if needed
  ],
  theme: {
    fontFamily: {
      'title': ['garamond-pro-regular', 'serif'],
      'body': ['agmena-pro', 'sans-serif'],
    },
    extend: {}, 
  },
  plugins: [], // Add any Tailwind CSS plugins here
};