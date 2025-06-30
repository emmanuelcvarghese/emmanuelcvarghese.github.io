// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://emmanuelcvarghese.github.io',
  base: '/',
  output: 'static',
  compressHTML: true,
  build: {
    assets: 'assets'
  }
});
