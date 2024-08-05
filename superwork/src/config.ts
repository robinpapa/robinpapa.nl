// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "superwork | business technology";
export const SITE_DESCRIPTION = "Superwork implementeert bedrijfstechnologie, volledig afgestemd op jouw bedrijfsproces."
export const MY_NAME = "Robin Papa";

// ConvertKit
export const CK_API = "ja0AtOnlZSf-Fq3pijnpJYZrKrMaLfepvVmTIAVenwU";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
