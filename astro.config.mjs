// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      dedupe: ["react", "react-dom", "react-dom/server"],
    },
    build: {
      cssMinify: "lightningcss",
    },
  },

  integrations: [react()],
});
