import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// URL principale du site
const siteUrl =
  import.meta.env.PUBLIC_SITE_URL ||
  "https://lounis-khalfallah.fr/";

// Configuration Astro
export default defineConfig({
  site: siteUrl,

  base: "/",

  envPrefix: "PUBLIC_",

  vite: {
    plugins: [tailwindcss()],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },

  server: {
    port: 5200,
  },

  // Redirections des anciennes URLs
  redirects: {
    "/about": "/a-propos-de-moi",
    "/works": "/projets",
  },

  integrations: [
    mdx(),
    sitemap(),
  ],
});