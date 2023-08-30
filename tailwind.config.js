/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '350px',
      md: '846px',
      lg: '976px',
      xl: '2000px',
    },
    extend: {
      colors: {
        'background-dark': '#111827',
        'background-light': '#282a36',
        'borderColor-light': '#e5e5e5',
        'borderColor-dark': '#171717',
        'activeColor-light': '#f5f5f5',
        'activeColor-dark': '#171717',
        foreground: '#f8f8f2',
        'purple-light': '#9333ea',
        'purple-dark': '#bd93f9',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
}
