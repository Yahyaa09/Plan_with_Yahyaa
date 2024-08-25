/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'rgb(1, 17, 160)',
      },
      boxShadow: {
        'custom1': '0px 3px 8px rgba(0, 0, 0, 0.24)',
        'custom2': '0px 3px 16px rgba(0, 0, 0, 0.34)',
      },
      fontFamily: {
        'new-amsterdam': ['"New Amsterdam"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

