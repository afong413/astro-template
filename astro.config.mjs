// @ts-check
import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"
import vercel from "@astrojs/vercel"
import path from "path"

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  output: "server",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
})
