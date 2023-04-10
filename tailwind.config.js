/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'smooth-spin': 'smooth-spin 2s linear infinite',
      },
      keyframes: {
        'smooth-spin': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-700%)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}

