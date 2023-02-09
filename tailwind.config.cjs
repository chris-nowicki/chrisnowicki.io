/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        screens: {
            sm: '375px',
            md: '846px',
            lg: '976px',
            xl: '2000px',
        },
        extend: {
            colors: {
                bgDark: '#282a36',
                textDark: '#f8f8f2',
                purpleDark: '#bd93f9',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
