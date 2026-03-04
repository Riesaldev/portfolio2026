// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: "https://mariabegueri.com",
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@/hero": path.resolve(__dirname, "./src/components/hero"),
        "@/sections": path.resolve(__dirname, "./src/components/sections"),
        "@/ui": path.resolve(__dirname, "./src/components/ui"),
        "@/layouts": path.resolve(__dirname, "./src/layouts"),
        "@/physics": path.resolve(__dirname, "./src/components/physics"),
        "@/components": path.resolve(__dirname, "./src/components"),
        "@/data": path.resolve(__dirname, "./src/data"),
        "@": path.resolve(__dirname, "./src"),
      },
      dedupe: ["react", "react-dom", "react-dom/server"],
    },
    build: {
      cssMinify: "lightningcss",
    },
  },
  integrations: [react()],
});
