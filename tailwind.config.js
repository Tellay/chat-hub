/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: 'var(--font-inter)',
        'open-sans': 'var(--font-open-sans)',
      },

      colors: {
        yellow: {
          200: '#FFB86C',
        },

        green: {
          400: '#50FA7B',
        },

        gray: {
          300: '#CBC9D5',
          400: '#BAB8C8',
          500: '#939298',
          600: '#78787D',
        },

        pink: {
          600: '#FF79C6',
        },

        red: {
          500: '#FF5555',
        },

        blue: {
          500: '#19152D',
          600: '#242037',
          700: '#242037',
          800: '#0E0927',
          900: '#0C0821',
        },
      },
    },
  },
  plugins: [],
}
