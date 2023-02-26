/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './content/**/*.mdx',
    ],
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
                'background-dark': '#111827',
                'background-light': '#282a36',
                foreground: '#f8f8f2',
                'purple-light': '#9333ea',
                'purple-dark': '#bd93f9',
            },
        },
    },
    plugins: [],
}
