/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                txtFont: ["Poppins", "sans-serif"],
            },
            screens: {
                xsm: "380px",
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
