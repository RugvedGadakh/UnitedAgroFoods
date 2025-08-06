/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      dropShadow: {
        green: '0 4px 6px rgba(28, 69, 50, 0.6)', // #1C4532 with 60% opacity
        black: '0 4px 6px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}
