/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        regular: ['Roboto', 'sans-serif'],
        section: ['Fira Code', 'monospace'],
        quote: ['Rubik Mono One', 'monospace'],
        display: ['New Amsterdam', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
