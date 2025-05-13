<template>
    <div class="footer">
        <div class="container">
            <div class="footer__logo">
                <img src="/public/foto/baza/logo3.webp" alt="Moment's studio" class="footer__logo-image">
                <p class="footer__copyright">*Студия моментов</p>
                <p class="footer__copyright">©2025 Moments.Studio</p>
            </div>
        
            <nav class="footer__nav">
              <ul class="footer__nav-list">
                <li class="footer__nav-item">
                  <NuxtLink to="/" class="footer__nav-link footer__nav-link--highlighted">Главная</NuxtLink>
                </li>
                <li class="footer__nav-item">
                  <NuxtLink to="/photografy" class="footer__nav-link">Фотографы</NuxtLink>
                </li>
                <li class="footer__nav-item">
                  <NuxtLink to="/nashizaly" class="footer__nav-link">Залы</NuxtLink>
                </li>
                <li class="footer__nav-item">
                  <NuxtLink to="/tarify" class="footer__nav-link">Тарифы</NuxtLink>
                </li>
              </ul>
            </nav>
        
            <div class="footer__contacts">
                <h4 class="footer__contacts-title"><NuxtLink to="/kontakti" class="footer__nav-link footer__nav-link--highlighted">Контакты</NuxtLink></h4>
                <ul class="footer__contacts-list">
                <li class="footer__contacts-item"><a href="https://vk.com" class="footer__contacts-link"  target="_blank">Группа ВК</a></li>
                <li class="footer__contacts-item"><a href="https://t.me/telegram" class="footer__contacts-link"  target="_blank">Telegram</a></li>
                </ul>
            </div>
        </div>
    </div>    
</template>


<style scoped>
.footer {
  background-color: #222;
  color: #fff;
  padding: 20px;
  margin-top: 4rem;
  width: 100%;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

/* Логотип */
.footer__logo {
  text-align: center;
}

.footer__logo-image {
  width: 200px;
  vertical-align: middle;
  margin-right: 10px;
}

.footer__copyright {
  font-size: 0.8em;
  color: #aaa;
  display: block;
}

/* Навигация */
.footer__nav {
  text-align: center;
}

.footer__nav-list {
  list-style: none;
  padding: 0;

  display: flex;
  justify-content: center;
}

.footer__nav-item {
  margin-right: 2rem;
}

.footer__nav-link {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer__nav-link:hover {
  color: #ED9810; /* Подсветка обычных ссылок оранжевым */
  cursor: pointer;
}

.footer__nav-link--highlighted {
  color: #ED9810;
}

.footer__nav-link--highlighted:hover {
    color: #fff; /* Подсветка оранжевых ссылок белым */
}

/* Контакты */
.footer__contacts {
  text-align: right;
}

.footer__contacts-title {
  margin-bottom: 10px;
}

.footer__contacts-list {
  list-style: none;
}

.footer__contacts-item {
  margin-bottom: 5px;
}

.footer__contacts-link {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
  display: block; /* Чтобы margin-bottom работал правильно */
  margin-bottom: 10px; /* Добавляем отступы между ссылками */
}

.footer__contacts-link:hover {
  color: #ED9810; /* Подсветка соцсетей оранжевым */
  cursor: pointer;
}

.footer__contacts-title a {
  color: #ED9810; /* Оранжевый цвет для заголовка "Контакты" */
  text-decoration: none;
}

.footer__contacts-title a:hover {
    color: #fff;  /* Подсветка заголовка "Контакты" белым */
}

/* === Адаптивные стили === */

/* Для маленьких телефонов (до 576px) */
@media (max-width: 576px) {

  .footer{
    width: 23rem;
  }

  .container {
    flex-direction: column; /* Элементы в столбик */
    align-items: center; /* Выравнивание по центру */
    padding: 0;
  }

  .footer__logo {
    text-align: center; /* Логотип по центру */
  }

  .footer__nav {
    text-align: center; /* Навигация по центру */
  }

  .footer__nav-list {
    flex-direction: column; /* Ссылки в столбик */
    align-items: center; /* Выравнивание ссылок */
  }

  .footer__nav-item {
    margin-right: 0; /* Убираем отступ справа */
    margin-bottom: 10px; /* Отступ снизу */
  }

  .footer__contacts {
    text-align: center; /* Контакты по центру */

  }

  .footer__contacts-list {
      padding: 0;
    }
}


@media (min-width: 375px) and (max-width: 425px) {
  .footer{
  width: 22rem;
  }
}

@media (min-width: 425px) and (max-width: 520px) {
  .footer{
  width: 28rem;
  }
}

/* Для телефонов (от 576px до 768px) */
@media (min-width: 576px) and (max-width: 1024px) {

  .container{
    padding: 0;
  }
}
</style>