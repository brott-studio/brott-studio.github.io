import { defineConfig } from 'astro/config';

// Root-level org Pages site: https://brott-studio.github.io
// No base path required.
export default defineConfig({
  site: 'https://brott-studio.github.io',
  trailingSlash: 'ignore',
});
