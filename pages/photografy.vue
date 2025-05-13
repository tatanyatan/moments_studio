<script>
export default {
  data() {
    return {
      selectedPhotographerId: null,
      isModalVisible: false,
      photographersData: {
        sofia: {
          name: 'Огнева София',
          description: 'Уличный, студийный фотограф',
          portfolio: [
            '/foto/portfolio/bb1.webp',
            '/foto/portfolio/bb2.webp',
            '/foto/portfolio/bb3.webp',
            '/foto/portfolio/bb4.webp',
            '/foto/portfolio/bb5.webp',
            '/foto/portfolio/bb6.webp',
            '/foto/portfolio/bb7.webp',
            '/foto/portfolio/bb8.webp',
          ],
          telegramLink: 'https://t.me/telegram',
        },
        ilya: {
          name: 'Смирнов Илья',
          description: 'LoveStory, семейный фотограф',
          portfolio: [
            '/foto/portfolio/pp1.webp',
            '/foto/portfolio/pp2.webp',
            '/foto/portfolio/pp3.webp',
            '/foto/portfolio/pp4.webp',
            '/foto/portfolio/pp5.webp',
            '/foto/portfolio/pp6.webp',
            '/foto/portfolio/pp7.webp',
            '/foto/portfolio/pp8.webp',
          ],
          telegramLink: 'https://t.me/telegram',
        },
        ksenia: {
          name: 'Тушенцова Ксения',
          description: 'Свадебный, студийный фотограф',
          portfolio: [
            '/foto/portfolio/dd7.webp',
            '/foto/portfolio/dd2.webp',
            '/foto/portfolio/dd5.webp',
            '/foto/portfolio/dd4.webp',
            '/foto/portfolio/dd3.webp',
            '/foto/portfolio/dd6.webp',
            '/foto/portfolio/dd1.webp',
            '/foto/portfolio/dd8.webp',
          ],
          telegramLink: 'https://t.me/telegram',
        },
      },
      selectedPhoto: null,
      isImageModalVisible: false,
      isBookingModalVisible: false, // Добавляем свойство видимости модального окна записи
      phoneNumber: 'tel:+79991234567', // Замените на свой номер
      vkLink: 'https://vk.com', // Замените на ссылку на вашу группу VK
      telegramLink: 'https://t.me', // Замените на ссылку на ваш Telegram канал
    };
  },
  methods: {
    openModal(photographerId) {
      this.selectedPhotographerId = photographerId;
      this.isModalVisible = true;
      this.$nextTick(() => {
        const grid = document.querySelector('.portfolio-grid');
        if (grid) {
          grid.scrollLeft = 0; 
        }
      });
    },
    closeModal() {
      this.isModalVisible = false;
      this.selectedPhotographerId = null;
    },
    getPhotographerName() {
      return this.photographersData[this.selectedPhotographerId]?.name || '';
    },
    getPhotographerDescription() {
      return this.photographersData[this.selectedPhotographerId]?.description || '';
    },
    getPhotographerPortfolio() {
      const portfolio = this.photographersData[this.selectedPhotographerId]?.portfolio || [];
      return portfolio.map((photo, index) => ({ src: photo, index }));
    },
    getPhotographerTelegramLink() {
      return this.photographersData[this.selectedPhotographerId]?.telegramLink || '#';
    },
    openImageModal(photo) {
      this.selectedPhoto = photo;
      this.isImageModalVisible = true;
    },
    closeImageModal() {
      this.isImageModalVisible = false;
      this.selectedPhoto = null;
    },
    openBookingModal() {
      this.isBookingModalVisible = true;
    },
    closeBookingModal() {
      this.isBookingModalVisible = false;
    },
    callPhoneNumber() {
      window.location.href = this.phoneNumber;
    },
    openVk() {
      window.open(this.vkLink, '_blank');
    },
    openTelegram() {
      window.open(this.telegramLink, '_blank');
    },
  },
};
</script>




<template>
  <div>
    <div class="container">
      <h2 class="zagolovok">Наши фотографы</h2>
      <div class="photographers">
        <div class="photographer-card">
          <img src="/foto/portfolio/ftg1.webp" alt="Огнева София">
          <div class="photographer-info">
            <h3>Огнева София</h3>
            <p>Уличный, студийный <br> фотограф</p>
            <a href="#" class="portfolio-button" @click="openModal('sofia');">Портфолио Софии</a>
          </div>
        </div>
        <div class="photographer-card">
          <img src="/foto/portfolio/ftg2.webp" alt="Смирнов Илья">
          <div class="photographer-info">
            <h3>Смирнов Илья</h3>
            <p>LoveStory, семейный <br> фотограф</p>
            <a href="#" class="portfolio-button" @click="openModal('ilya'); ">Портфолио Ильи</a>
          </div>
        </div>
        <div class="photographer-card">
          <img src="/foto/portfolio/ftg3.webp" alt="Тушенцова Ксения">
          <div class="photographer-info">
            <h3>Тушенцова Ксения</h3>
            <p>Свадебный, студийный <br> фотограф</p>
            <a href="#" class="portfolio-button" @click="openModal('ksenia');">Портфолио Ксении</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Модальное окно -->
    <div v-if="isModalVisible" class="modal-overlay" @click.self="closeModal">
      <div class="modal">
        <div class="modal-header">
          <h2 class="zagolovokk">{{ getPhotographerName() }}</h2>
          <button class="close-button" @click="closeModal">X</button>
        </div>
        <p class="modal-description">{{ getPhotographerDescription() }}</p>
        <div class="modal-portfolio">
          <div class="portfolio-grid">
            <img
              v-for="photo in getPhotographerPortfolio()"
              :key="photo.index"
              :src="photo.src"
              :alt="`Portfolio Image ${photo.index}`"
              @click="openImageModal(photo)"
            >
          </div>
        </div>
        <button class="modal-button" @click="openBookingModal">Записаться на съемку</button>
      </div>
    </div>

    <!-- Модальное окно для записи -->
    <div v-if="isBookingModalVisible" class="modal-overlay" @click.self="closeBookingModal">
      <div class="modal">
        <div class="modal-header">
          <h2 class="zagolovokk">Запись на съемку</h2>
          <button class="close-button" @click="closeBookingModal">X</button>
        </div>
        <div class="modal-body">
          <button class="modal-button" @click="callPhoneNumber">Записаться через телефон</button>
          <button class="modal-button" @click="openVk">Записаться через VK</button>
          <button class="modal-button" @click="openTelegram">Записаться через Telegram</button>
        </div>
      </div>
    </div>

    <!-- Модальное окно с увеличенным изображением -->
    <div v-if="isImageModalVisible" class="image-modal-overlay" @click.self="closeImageModal">
      <div class="image-modal">
        <img :src="selectedPhoto ? selectedPhoto.src : ''" :alt="selectedPhoto ? `Portfolio Image ${selectedPhoto.index}` : ''">
        <button class="close-button" @click="closeImageModal">X</button>
      </div>
    </div>



    <div class="container">
      <div class="director-card">
        <img src="/foto/portfolio/director.webp" alt="Фото директора">
        <div class="director-text">
          <h3>“В нашей фотостудии работают не просто фотографы, а настоящие мастера своего дела, с которыми нас связывает многолетнее плодотворное сотрудничество.</h3>
          <h3>Уже более 7 лет мы вместе создаем для наших клиентов незабываемые моменты, наполненные красотой и искренними эмоциями.</h3>
          <h3>Доверьте нам свои самые важные моменты, и мы гарантируем, что они будут сохранены с любовью и профессионализмом.”</h3>
          <p class="director-name">*Директор студии “Moment’s studio” - Евгений Кожевников</p>
        </div>
      </div>
    </div>

  </div>

</template>



<style scoped>
/* СТИЛИ СТРАНИЦЫ */

.modal {
  font-family: 'Geologica', sans-serif;
}

.zagolovok {
  margin-top: 3rem;
  margin-bottom: 2rem;
  text-align: center;
}

.photographers {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: #ED9810;
  border-radius: 10px;
  flex-wrap: nowrap;
  overflow-x: auto;
}


.photographer-card {
  width: 300px;
  border-radius: 10px;
}

.photographer-card img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 1rem;
}

.photographer-info {
  text-align: center;
  color: #333;
}

.photographer-info h3 {
  margin-bottom: 10px;
  font-size: 1.5em;
}

.photographer-info p {
  font-size: 1em;
}

.portfolio-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #222;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}

.portfolio-button:hover {
  background-color: #333;
}


/* Модальное окно */

.modal-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 40px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Затемнение фона */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Чтобы модальное окно было поверх всего */
}

.modal {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: none;
  width: 80%;
  max-width: 800px;
  position: relative;
  text-align: center;
  border: 1rem solid #ED9810;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.zagolovokk{
  flex-grow: 1; /* Занимает доступное пространство между кнопками */
  margin: 0; /* Убираем лишние отступы */
  text-align: center;
  margin-left: 2.5rem;
}

.close-button {
  background-color: rgba(0, 0, 0, 0.5); /* Затемненный фон */
  color: #fff;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;

}

.modal-description {
  margin-bottom: 20px;
}

.modal-portfolio {
  margin-bottom: 20px;
}

/* Убираем grid, добавляем flex */
.portfolio-grid {
  display: flex;
  overflow-x: auto; /* Горизонтальная прокрутка, если не помещаются */
  gap: 10px;
  margin-top: 20px; /* Add margin between text and images */

}

.portfolio-grid img {
  width: calc(100% / 5); /* Каждое фото занимает 1/5 доступного пространства */
  height:  auto;
  margin-bottom: 1rem;
  border-radius: 5px;
  cursor: pointer;
  flex-shrink: 0; /* Чтобы не сжимались при переполнении */
}

.portfolio-modal-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #222;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.portfolio-modal-button:hover {
    background-color: #333;
}

/* Стили для модального окна с увеличенным изображением */
.image-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9); /* Более темный фон */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000; /* Выше, чем основное модальное окно */
}

.image-modal {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  position: relative; /* Для кнопки закрытия */
}

.image-modal img {
  max-width: 100%;
  max-height: 80vh; /* Ограничение по высоте */
  display: block;
  margin: 0 auto; /* Центрирование изображения */
}

.image-modal .close-button { /* Кнопка закрытия в верхнем правом углу */
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.5); /* Затемненный фон */
  color: #fff;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  z-index: 2001; /* Выше изображения */
}




/* ДИРЕКТОР */

.director-card {
  display: flex;
  background-color: #ED9810;
  border-radius: 10px;
  padding: 20px;
  margin-top: 3rem; /* Отступ от предыдущего блока */
  border-bottom: 1rem solid #000; /* Добавляем черную линию снизу */
}

.director-card img {
  width: 15rem; /* Ширина изображения */
  height: auto;
  border-radius: 10px;
  margin-right: 2rem; /* Отступ от текста */
}

.director-text {
  font-size: 1em;
  line-height: 1.5;
  color: #333;
}

.director-name {
  font-style: italic;
  text-align: right; /* Выравнивание имени директора по правому краю */
  margin-top: 2rem;
  font-weight: bold; /* Добавляем жирный шрифт */
  color: #000;
}
.modal-button {
  background-color: #ED9810;
  color: #000;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1.1rem;
  border: 2px solid #000;
  font-weight: bold;
  transition: background-color 0.3s ease;
  display: inline-block;
  text-decoration: none;
}

/* === Адаптивные стили === */

/* Для маленьких телефонов (до 576px) */
@media (max-width: 576px) {
  .photographers {
    flex-wrap: wrap; /* Перенос карточек на новую строку */
    justify-content: center; /* Выравнивание по центру */
    width: 21rem;
  }

  .zagolovok {
    width: 24rem; 
  }

  .photographer-card {
    width: 100%; /* Карточка занимает всю ширину */
    margin-bottom: 20px; /* Отступ снизу */
  }

  .portfolio-grid img {
    width: calc(100% / 3); /* 3 фото в ряд */
  }

  .director-card {
    flex-direction: column; /* Элементы в столбик */
    align-items: center; /* Выравнивание по центру */
    text-align: center; /* Текст по центру */
    width: 21rem;
  }

  .director-card img {
    margin-right: 0; /* Убираем отступ справа */
    margin-bottom: 1rem; /* Отступ снизу */
    width: 100%; /* Ширина на всю ширину */
    max-width: 20rem; /* Максимальная ширина */
  }

  .director-text {
    text-align:center; /* Возвращаем выравнивание текста слева */
  }

  .director-name {
    text-align: center; /* Имя директора по центру */
  }
}

/* Для телефонов (от 576px до 768px) */
@media (min-width: 576px) and (max-width: 768px) {
  .photographers {
    flex-wrap: wrap; /* Перенос карточек на новую строку */
    justify-content: center; /* Выравнивание по центру */
  }

  .photographer-card {
    width: calc(50% - 10px); /* 2 карточки в ряд */
    margin-bottom: 20px; /* Отступ снизу */
  }

  .portfolio-grid img {
    width: calc(100% / 4); /* 4 фото в ряд */
  }

  .director-card {
    flex-direction: column; /* Элементы в столбик */
    align-items: center; /* Выравнивание по центру */
    text-align: center; /* Текст по центру */
  }

  .director-card img {
    margin-right: 0; /* Убираем отступ справа */
    margin-bottom: 1rem; /* Отступ снизу */
    width: 100%; /* Ширина на всю ширину */
    max-width: 25rem; /* Максимальная ширина */
  }

  .director-text {
    text-align: left; /* Возвращаем выравнивание текста слева */
  }

  .director-name {
    text-align: center; /* Имя директора по центру */
  }
}

/* Для планшетов (от 768px до 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  .photographers {
    flex-wrap: wrap; /* Перенос карточек на новую строку */
    justify-content: space-around; /* Равномерное распределение */
  }

  .photographer-card {
    width: calc(33.33% - 10px); /* 3 карточки в ряд */
    margin-bottom: 20px; /* Отступ снизу */
  }

  .portfolio-grid img {
    width: calc(100% / 5); /* 5 фото в ряд */
  }

  .director-card {
    flex-direction: row; /* Элементы в строку */
    align-items: center; /* Выравнивание по центру */
    text-align: left; /* Текст слева */
  }

  .director-card img {
    margin-right: 2rem; /* Возвращаем отступ справа */
    margin-bottom: 0; /* Убираем отступ снизу */
    width: 15rem; /* Ширина как на десктопе */
  }

  .director-text {
    text-align: left; /* Возвращаем выравнивание текста слева */
  }

  .director-name {
    text-align: right; /* Возвращаем имя директора справа */
  }
}
</style>