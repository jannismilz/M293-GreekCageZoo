/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                beige: {
                    50: "#FCFAF7",
                    100: "#FBF7F4",
                    200: "#F6EDE5",
                    300: "#F2E5D9",
                    400: "#EEDDCE",
                    500: "#E9D3C0",
                    600: "#D3A882",
                    700: "#BD7B42",
                    800: "#7D512C",
                    900: "#402A16",
                },
            },
        },
    },
    plugins: [],
};
