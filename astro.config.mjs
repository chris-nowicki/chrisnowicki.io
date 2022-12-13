import { defineConfig } from 'astro/config'

// https://astro.build/config
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
import image from '@astrojs/image'

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), image()],
    output: 'server',
    adapter: vercel(),
})
