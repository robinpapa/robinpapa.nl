// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "robin papa | business technology";
export const SITE_DESCRIPTION = "Robin implementeert bedrijfstechnologie, volledig afgestemd op jouw bedrijfsproces."
export const MY_NAME = "Robin Papa";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
