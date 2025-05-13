  <script setup>
  import { ref } from 'vue';
  
  const isMenuOpen = ref(false);
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  </script>
  
  <template>
    <div class="container">
      <div class="shapka">
        <div class="logo">
          <a href="/">
            <img src="/public/foto/baza/logo1.webp" alt="Логотип сайта" />
          </a>
        </div>
  
        <nav class="menu" :class="{ active: isMenuOpen }">
          <ul>
            <li><NuxtLink to="/">Главная</NuxtLink></li>
            <li><NuxtLink to="/photografy">Фотографы</NuxtLink></li>
            <li><NuxtLink to="/nashizaly">Залы</NuxtLink></li>
            <li><NuxtLink to="/tarify">Тарифы</NuxtLink></li>
            <li><NuxtLink to="/kontakti">Контакты</NuxtLink></li>
          </ul> 
        </nav>
  
        <div class="buttons">
          <a href="https://vk.com" target="_blank">
            <img src="/public/foto/baza/vk.webp" alt="Кнопка ВК" />
          </a>
          <a href="https://t.me/telegram" target="_blank">
            <img src="/public/foto/baza/tg.webp" alt="Кнопка ТГ" />
          </a>
        </div>
  
        <!-- Гамбургер-меню (скрыто на больших экранах) -->
        <div class="hamburger-menu" @click="toggleMenu">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </template>
  

  
<style scoped>
.shapka {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;
  align-items: center;
}

.logo img {
  max-height: 40px;
  width: auto;
}

.menu {
  margin-right: 6rem;
}

.menu ul {
  list-style: none;
  display: flex;
}

.menu li {
  margin: 0;
}

.menu a {
  margin-right: 2rem;
  text-decoration: none;
  color: #333;
  transition: color 0.3s ease;
}

.menu a:hover {
  color: #ED9810;
}

.buttons img {
  max-width: 30px;
  margin-left: 1rem;
}

/* Стили для гамбургер-меню */
.hamburger-menu {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
}

.hamburger-menu div {
  width: 100%;
  height: 3px;
  background-color: #333;
}

/* Медиа-запросы */

/* Для маленьких телефонов (до 576px) */
@media (max-width: 576px) {
    .shapka {
      position: relative;
      width: 23rem;
    }

    .menu {
      display: none;
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      background-color: #fff;
      padding: 1rem;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      z-index: 10;
    }

    .menu ul {
      flex-direction: column;
    }

    .menu li {
      margin-bottom: 1rem;
    }

    .hamburger-menu {
      display: flex;
      margin-left: auto; /* Прижимаем к правой стороне */
    }

    .buttons {
      display: none; /* Скрываем кнопки ВК/ТГ в шапке */
    }

    .menu a {
      margin-right: 0; /* Убираем отступ у ссылок в меню */
    }
  }

  /* Для телефонов (от 576px до 768px) */
  @media (min-width: 425px) and (max-width: 768px) {
    .shapka {
      position: relative;
      width: 30rem;
    }

    .menu {
      display: none;
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      background-color: #fff;
      padding: 1rem;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      z-index: 10;
    }

    .menu ul {
      flex-direction: column;
    }

    .menu li {
      margin-bottom: 1rem;
    }

    .hamburger-menu {
      display: flex;
      margin-left: auto; /* Прижимаем к правой стороне */
    }

    .buttons {
      display: none; /* Скрываем кнопки ВК/ТГ в шапке */
    }

    .menu a {
      margin-right: 0; /* Убираем отступ у ссылок в меню */
    }
  }

/* Для планшетов (от 768px до 1024px) */
  @media (min-width: 768px) and (max-width: 1024px) {
    .shapka {
      position: relative;
      width: auto;
    }

    .menu {
      display: none;
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      background-color: #fff;
      padding: 1rem;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      z-index: 10;
    }

    .menu ul {
      flex-direction: column;
    }

    .menu li {
      margin-bottom: 1rem;
    }

    .hamburger-menu {
      display: flex;
      margin-left: auto; /* Прижимаем к правой стороне */
    }

    .buttons {
      display: none; /* Скрываем кнопки ВК/ТГ в шапке */
    }

    .menu a {
      margin-right: 0; /* Убираем отступ у ссылок в меню */
    }
  }

/* Для экранов больше 1024px (desktop) */
@media (min-width: 1024px) {
  .menu {
    display: flex; /* Возвращаем обычное меню */
    position: static; /* Убираем абсолютное позиционирование */
    width: auto; /* Убираем ограничение по ширине */
    background-color: transparent; /* Убираем фон */
    box-shadow: none; /* Убираем тень */
    padding: 0; /* Убираем отступы */
  }

  .menu ul {
    flex-direction: row; /* Возвращаем горизонтальное расположение */
  }

  .menu li {
    margin-right: 1rem; /* Возвращаем отступ между элементами меню */
  }

  .buttons {
    display: flex; /* Возвращаем кнопки ВК/ТГ */
  }

  .hamburger-menu {
    display: none; /* Скрываем гамбургер-меню */
  }
}
/* Стиль для активного меню */
.menu.active {
  display: block;
}
</style>