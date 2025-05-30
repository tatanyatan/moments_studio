<template>
  <div>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

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