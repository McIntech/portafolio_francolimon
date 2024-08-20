/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
        extend: {
          colors: {
            'mint-green': '#00E5BC',
            'teal': '#01989F',
            'sea-blue': '#01679C',
            'dark-blue': '#2A356D',
            'navy-blue': '#00284C',
          },
      plugins: [],
    }
  },
  plugins: [],
}