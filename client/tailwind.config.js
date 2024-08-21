/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
                'custom-heavy': '0 4px 8px rgba(0, 0, 0, 0.3)',
            },
            screens: {
                'xs': '200px',
            },
        },

    },
    plugins: [],
}