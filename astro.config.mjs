import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
import image from '@astrojs/image';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://chrisnowicki.io',
  integrations: [tailwind(), image(), sitemap(), react()],
  output: 'server',
  adapter: vercel()
});