<template>
  <div>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script setup>
useHead({
  title: 'Moments Studio',
  meta: [
    {
      name: 'description',
      content: 'Фотостудия в самом сердце Санкт-Петербурга. Профессиональная фотосъемка в Moments Studio.  Семейные фотосессии, свадебная фотосъемка, аренда залов.',
    },
    {
      property: 'og:title',
      content: 'Moments Studio',
    },
    {
      property: 'og:description',
      content: 'Фотостудия в самом сердце Санкт-Петербурга. Профессиональная фотосъемка в Moments Studio. Семейные фотосессии, свадебная фотосъемка, аренда залов.',
    },
    {
      property: 'og:image',
      content: 'https://moments-studio.vercel.app/foto/baza/opengr.webp', // Ссылка на изображение, которое будет отображаться при шаринге
    },
    {
      property: 'og:url',
      content: 'https://moments-studio.vercel.app/', // URL главной страницы
    },
    {
      property: 'og:type',
      content: 'website', // Тип контента (website, article, и т.д.)
    },
  ],
});
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