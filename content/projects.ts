import { Tags } from '@/types/types'
import { IProjectType } from '@/types/types'

export const featuredProject: IProjectType[] = [
  {
    name: 'Deals for Devs',
    description:
      'I developed the backend subscription features using resend for James Q Quick, and am now a maintainer for his repo for him helping to teach others how to contribute to open source.',
    gitHubUrl: 'https://github.com/Learn-Build-Teach/deals-for-devs',
    liveSiteUrl: 'https://www.dealsfordevs.com/',
    image: '/images/projects/dealsfordevs.png',
    tags: [Tags.NextJS, Tags.Xata, Tags.Clerk, Tags.Sentry, Tags.TailwindCSS],
  },
  {
    name: 'Markdown Editor',
    description:
      'Frontend Mentor Challenge to create an In-Browser Markdown Editor.  Focused on formatting MDX and auth0 Authentication for this project.',
    gitHubUrl: 'https://github.com/chris-nowicki/in-browser-markdown-editor',
    liveSiteUrl: 'https://markdown.chrisnowicki.io',
    image: '/images/projects/in-browser-markdown-app.webp',
    tags: [Tags.NextJS, Tags.TypeScript, Tags.MongoDB, Tags.auth0, Tags.Sass],
  },
  {
    name: 'Dev Job Board',
    description:
      'Frontend Mentor Challenge to create a simple job board for developers.  I focused on Nextjs 13 and SSR.',
    gitHubUrl: 'https://github.com/chris-nowicki/devjobs-web-app',
    liveSiteUrl: 'https://devjobs.chrisnowicki.io/',
    image: '/images/projects/devjobs.webp',
    tags: [Tags.NextJS, Tags.React, Tags.TailwindCSS],
  },
  {
    name: 'Pomodoro App',
    description:
      'Frontend Mentor Challenge to create a pomodoro app.  Focused on custom hooks, styling, and working with JS Time.',
    gitHubUrl: 'https://github.com/chris-nowicki/pomodoro-app',
    liveSiteUrl: 'https://pomodoro.chrisnowicki.io',
    image: '/images/projects/pomodoro.webp',
    tags: [Tags.Vite, Tags.React, Tags.TypeScript, Tags.Sass],
  },
]
