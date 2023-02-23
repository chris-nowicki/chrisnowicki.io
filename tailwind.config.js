/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './content/**/*.mdx',
    ],
    darkMode: 'class',
    theme: {
        screens: {
            sm: '375px',
            md: '846px',
            lg: '976px',
            xl: '2000px',
        },
        extend: {
            fontFamily: {
                serif: ['var(--font-roboto)'],
            },
            colors: {
                bgDark: '#282a36',
                textDark: '#f8f8f2',
                purpleDark: '#bd93f9',
            },
        },
    },
    plugins: [],
}
