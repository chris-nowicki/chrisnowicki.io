/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        screens: {
            sm: '430px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        extend: {
            colors: {
                bgDark: '#282a36',
                textDark: '#f8f8f2',
                purpleDark: '#bd93f9',
            },
        },
    },
    plugins: [],
}
