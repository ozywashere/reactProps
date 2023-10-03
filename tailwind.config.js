/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            display: ['Public Sans', 'system-ui', 'sans-serif'],
            inter: ['Inter', 'system-ui', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
}