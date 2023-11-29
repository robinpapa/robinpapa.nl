// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Robin Papa | Process Engineer";
export const SITE_DESCRIPTION = "Robin develops applications for every business process."
export const TWITTER_HANDLE = "";
export const MY_NAME = "Robin Papa";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
