<script>
export default {
  data() {
    return {
      selectedHallId: null, //  ID выбранного зала
      isModalVisible: false, // Флаг видимости модального окна
      hallsData: [
        {
          id: 'orangerea',
          name: 'ЗАЛ №1 - Оранжерея',
          image: '/foto/zaly_foto/zal1.webp',
          description: 'Просторный зал с множеством растений и уютным гамаком. \n Идеально подходит для фотосессий в стиле бохо.',
          images: [
            '/foto/zaly_foto/zal1.01.webp',
            '/foto/zaly_foto/zal1.02.webp',
            '/foto/zaly_foto/zal1.03.webp',
            '/foto/zaly_foto/zal1.04.webp',
          ],
        },
        {
          id: 'detskaya',
          name: 'ЗАЛ №2 - Детская комната',
          image: '/foto/zaly_foto/zal2.webp',
          description: 'Светлая и уютная детская комната с игрушками и мебелью. \nОтлично подходит для детских и семейных фотосессий.',
          images: [
            '/foto/zaly_foto/zal2.02.webp',
            '/foto/zaly_foto/zal2.01.webp',
            '/foto/zaly_foto/zal2.03.webp',
            '/foto/zaly_foto/zal2.04.webp',
          ],
        },
        {
          id: 'cvetochniy',
          name: 'ЗАЛ №3 - Цветочный сад',
          image: '/foto/zaly_foto/zal3.webp',
          description: 'Волшебный зал, утопающий в цветах. \nСоздает романтическую атмосферу для свадебных и love story фотосессий.',
           images: [
            '/foto/zaly_foto/zal3.01.webp',
            '/foto/zaly_foto/zal3.02.webp',
            '/foto/zaly_foto/zal3.03.webp',
            '/foto/zaly_foto/zal3.04.webp',
          ],
        },
        {
          id: 'svetliy',
          name: 'ЗАЛ №4 - Светлый зал',
          image: '/foto/zaly_foto/zal4.webp',
          description: 'Минималистичный зал с белыми стенами и естественным светом.\n Подходит для портретных и fashion фотосессий.',
           images: [
            '/foto/zaly_foto/zal4.01.webp',
            '/foto/zaly_foto/zal4.03.webp',
            '/foto/zaly_foto/zal4.02.webp',
            '/foto/zaly_foto/zal4.04.webp',
          ],
        },
        {
          id: 'polevoy',
          name: 'ЗАЛ №5 - Полевой сон',
          image: '/foto/zaly_foto/zal5.webp',
          description: 'Уютный зал с разнообразием полевых цветов.\n Создает атмосферу летнего тепла и романтики.',
           images: [
            '/foto/zaly_foto/zal5.01.webp',
            '/foto/zaly_foto/zal5.02.webp',
            '/foto/zaly_foto/zal5.03.webp',
            '/foto/zaly_foto/zal5.04.webp',
          ],
        },
        {
          id: 'provans',
          name: 'ЗАЛ №6 - Красота Прованса',
          image: '/foto/zaly_foto/zal6.webp',
          description: 'Очаровательный зал в стиле прованс с нежной цветовой гаммой и изящной мебелью. \nИдеален для романтических фотосессий.',
           images: [
            '/foto/zaly_foto/zal6.04.webp',
            '/foto/zaly_foto/zal6.03.webp',
            '/foto/zaly_foto/zal6.02.webp',
            '/foto/zaly_foto/zal6.01.webp',
          ],
        },
      ],
      selectedImage: null, // Для отслеживания выбранного изображения в модальном окне
      isImageModalVisible: false, // Для отображения модального окна с полноразмерным изображением
    };
  },
  methods: {
    openModal(hallId) {
      this.selectedHallId = hallId;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.selectedHallId = null;
    },
    getHallName() {
      const hall = this.hallsData.find(hall => hall.id === this.selectedHallId);
      return hall ? hall.name : '';
    },
    getHallDescription() {
      const hall = this.hallsData.find(hall => hall.id === this.selectedHallId);
      return hall ? hall.description : '';
    },
    getHallImages() {
      const hall = this.hallsData.find(hall => hall.id === this.selectedHallId);
      return hall ? hall.images : [];
    },
    openImageModal(image) {
      this.selectedImage = image;
      this.isImageModalVisible = true;
    },
    closeImageModal() {
      this.isImageModalVisible = false;
      this.selectedImage = null;
    },
  },
};
</script>

<template>
  <div>
    <div class="container">
      <h2 class="zagolovok">Наши залы</h2>
      <div class="halls-page">
        <div class="halls-grid">
         <div v-for="(hall, index) in hallsData" :key="index" class="hall-card">
            <div class="hall-image">
              <img :src="hall.image" :alt="hall.name" @click="openModal(hall.id)">
            </div>
            <div class="hall-name">
              {{ hall.name }}
            </div>
            <button class="hall-button" @click="openModal(hall.id)">Подробнее</button>
          </div>
        </div>

        <!-- Модальное окно с информацией о зале -->
        <div v-if="isModalVisible" class="modal-overlay" @click.self="closeModal">
          <div class="modal">
            <div class="modal-header">
              <h2 class="zagolovok">{{ getHallName() }}</h2>
              <button class="close-button" @click="closeModal">X</button>
            </div>
            <div class="modal-content">
              <div class="modal-text">  <!-- Оборачиваем текст в div -->
                <p class="modal-description">{{ getHallDescription() }}</p>
              </div>

              <div class="modal-gallery"> <!--  Добавляем div для галереи  -->
                <div class="portfolio-grid">
                  <img
                    v-for="(image, index) in getHallImages()"
                    :key="index"
                    :src="image"
                    :alt="`Image ${index}`"
                    @click="openImageModal(image)"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Модальное окно для просмотра изображений -->
       <div v-if="isImageModalVisible" class="image-modal-overlay" @click.self="closeImageModal">
          <div class="image-modal">
            <img :src="selectedImage" :alt="`Image`">
            <button class="close-button" @click="closeImageModal">X</button>
          </div>
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

.halls-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Создаем 3 колонки */
  gap: 20px;
}

.hall-card {
  border: 2px solid #000; /* Толстая черная рамка */
  border-radius: 10px;
  padding: 10px; /* Уменьшаем padding */
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Более выраженная тень */
  background-color: #fff;
  position: relative; /* Для позиционирования псевдоэлемента */
}

.hall-image {
  margin-bottom: 10px;
  overflow: hidden; /* Обрезаем изображение по размеру контейнера */
  border: 2px solid #000; /* Толстая черная рамка */
  border-radius: 7px;
}

.hall-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 5px;
  transition: transform 0.3s ease; /* Плавное увеличение при наведении */
}

.hall-card:hover .hall-image img {
  transform: scale(1.1); /* Увеличиваем изображение при наведении */
}

.hall-name {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.hall-button {
  background-color: #ED9810;
  color: #000;
  border: 2px solid #000; /* Черная рамка */
  border-radius: 10px; /* Закругленные углы */
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold; /* Жирный шрифт */
  transition: background-color 0.3s ease; /* Плавное изменение фона при наведении */
}

.hall-button:hover {
  background-color: #ffd153; /* Белый фон при наведении */
}

/* Адаптивность для мобильных устройств */
@media (max-width: 768px) {
  .halls-grid {
    grid-template-columns: 1fr; /* Одна колонка на мобильных */
  }
}

/* Модальное окно */

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

.modal-header h2 { /* Применяем к самому заголовку внутри .modal-header */
  flex-grow: 1; /* Занимает доступное пространство между кнопками */
  margin: 0; /* Убираем лишние отступы */
  text-align: center;
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
  text-align: left; /* Изменяем выравнивание текста на левое */
  margin-bottom: 20px;
  white-space: pre-line; /* Добавляем это свойство */
  line-height: 1.8;
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
  justify-content: center;
}

.portfolio-grid img {
  width: calc(100% / 6); /* Каждое фото занимает 1/6 доступного пространства */
  height: auto;
  margin-bottom: 1rem;
  border-radius: 5px;
  cursor: pointer;
  flex-shrink: 0; /* Чтобы не сжимались при переполнении */
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
  position: relative;
}

.image-modal img {
  max-width: 100%;
  max-height: 80vh; /* Ограничение по высоте */
  display: block;
  margin: 0 auto; /* Центрирование изображения */
}

.image-modal .close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  z-index: 2001; /* Выше изображения */
}

/* Стили для размещения фото под текстом */
.modal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-description {
  text-align: center; /* Выравниваем текст по центру */
}

.portfolio-grid {
  justify-content: center;
}

/* === Адаптивные стили === */

/* Для маленьких телефонов (до 576px) */
@media (max-width: 576px) {

  .container{
    width: 23rem;
  }

  .halls-grid {
    grid-template-columns: 1fr; /* Одна колонка на мобильных */
  }

  .portfolio-grid img {
    width: 23%;
  }
}

/* Для телефонов (от 576px до 768px) */
@media (min-width: 576px) and (max-width: 768px) {
  .halls-grid {
    grid-template-columns: 1fr; /* Одна колонка на мобильных */
  }

  .portfolio-grid img {
    width: calc(100% / 4); /* 4 фото в ряд */
  }
}

/* Для планшетов (от 768px до 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  .halls-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 колонки на планшетах */
  }

  .portfolio-grid img {
    width: calc(100% / 5); /* 5 фото в ряд */
  }
}
</style>