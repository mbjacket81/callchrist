import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://callchrist.com',
  trailingSlash: 'never',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
