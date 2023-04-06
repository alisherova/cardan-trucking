/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                blue: {
                    550: '#ffd856'
                } ,
                zinc: {
                    950: '#1A1D2D'
                },
                violet: {
                    250: 'rgba(37, 42, 65, 1)'
                },
                indigo:{
                    550: '#1E2235'
                },
                gray:{
                    250:'#01191fdd'
                }

            },
            width:{
                53: '53.5%'
            }
        },
    },
    plugins: [],
}
