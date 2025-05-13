<template>
  <div>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: "Moment's studio", // Можно добавить title, если его нет в компонентах страниц.
  meta: [
    { hid: 'description', name: 'description', content: 'Фотостудия в самом сердце Санкт-Петербурга' },

    { hid: 'og:title', property: 'og:title', content: "Moment's studio" },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:url', property: 'og:url', content: 'https://user22.teststand.ru' },
    { hid: 'og:image', property: 'og:image', content: './public/foto/baza/opengr.webp' },
    { hid: 'og:description', property: 'og:description', content: 'Фотостудия в самом сердце Санкт-Петербурга' },
  ],
  script: [
    {
      hid: 'ld-json',
      type: 'application/ld+json',
      json: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Moment's studio",
        "description": "Фотостудия в самом сердце Санкт-Петербурга",
        "url": "https://moments-studio.vercel.app",
        "image": "./public/foto/baza/opengr.webp",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Адрес студии",
          "addressLocality": "Санкт-Петербург",
          "addressCountry": "RU"
        },
        "telephone": "+7 (XXX) XXX-XX-XX",
        "sameAs": [
          "https://vk.com/moments_studio",
          "https://t.me/moments_studio"
        ]
      }
    }
  ]
})
</script>

<style>
/* Глобальные стили */
@font-face {
  font-family: 'Geologica';
  src: url('assets/fonts/geologica/Geologica.ttf') format('truetype');
  font-weight: 100 900;
  font-display: swap;
}

.container {
  width: 100%;
  max-width: 1100px; /* Непосредственное значение */
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;  /* Непосредственное значение */
  padding-right: 1rem;
  font-family: 'Geologica', sans-serif;
}

html,
body {
  height: 100%;
  /* Обязательно для html и body */
  margin: 0;
}

body {
  background-image: url('public/foto/baza/fon.webp');
  background-size: cover;
}
</style>