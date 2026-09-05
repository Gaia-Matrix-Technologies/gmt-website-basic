// @ts-check
import { defineConfig } from 'astro/config';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from './src/data/languages.mjs';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: DEFAULT_LANGUAGE,
    locales: SUPPORTED_LANGUAGES,
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
