// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { resolve } from "path";

// https://astro.build/config
export default defineConfig({
  site: 'https://mateocastanodev.github.io',
  base: '/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": resolve("./src"),
      },
    },
  },
});
