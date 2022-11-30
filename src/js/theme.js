// icons
const sun = document.getElementById('sun').classList
const moon = document.getElementById('moon').classList

// check theme on page load
if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
    moon.add('hidden')
} else {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
    sun.add('hidden')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

//  Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')
