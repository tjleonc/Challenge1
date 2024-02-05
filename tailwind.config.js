/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {

      fontFamily:{
        "Inter" :["'Inter', sans-serif"]
      },
      colors:{

        "gray-dark-gray": "hsl(0, 0%, 12%)",
        "black-of-black": "hsl(0, 0%, 8%)",
        "green-lemon": "hsl(75, 94%, 57%)",
        "gray": "hsl(0, 0%, 20%)"

      }

    },
  },
  plugins: [],
}

