/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                regular: ['Roboto', 'sans-serif'],
                display: ['Bebas Neue', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
