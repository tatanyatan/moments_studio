// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/test-utils'],
  app: {
    head: {
      meta: [
        { key: 'og:title', property: 'og:title', content: "Moment's studio" }, // Использовать key вместо hid
        { key: 'og:type', property: 'og:type', content: 'website' }, // Использовать key вместо hid
        { key: 'og:url', property: 'og:url', content: 'https://moments-studio.vercel.app/' }, // Замените на ваш URL, использовать key вместо hid
        { key: 'og:image', property: 'og:image', content: 'foto/baza/opengr.webp' }, // Относительный путь, использовать key вместо hid
        { key: 'og:description', property: 'og:description', content: 'Фотостудия в самом сердце Санкт-Петербурга' }, // Использовать key вместо hid
      ],
    },
  },
})