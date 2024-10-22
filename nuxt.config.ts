// nuxt.config.ts

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  // Cambia esto para generar solo estático
  ssr: false, // Usa esta línea para indicar que quieres una generación estática
  devtools: { enabled: true },
  css: ['@/assets/css/tailwind.css'],
  vite: {
    server: {
      hmr: false
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
