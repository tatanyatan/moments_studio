<!-- JS -->

<script>
export default {
  data() {
    return {
      images: [
        "foto/carysel/tug1.webp",
        "foto/carysel/tug2.webp",
        "foto/carysel/tug3.webp",
        "foto/carysel/tug4.webp",
        "foto/carysel/tug5.webp",
        "foto/carysel/tug6.webp",
        "foto/carysel/tug7.webp",
        "foto/carysel/tug8.webp",
        "foto/carysel/tug9.webp",
      ],
      groupedImages: [],
      currentIndex: 0,
    };
  },
  mounted() {
    this.groupImages();
  },
  methods: {
    groupImages() {
      const groups = [];
      for (let i = 0; i < this.images.length; i += 3) {
        groups.push(this.images.slice(i, i + 3));
      }
      this.groupedImages = groups;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.groupedImages.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.groupedImages.length) % this.groupedImages.length;
    },
  },
};
</script>


<!-- HTML -->

<template>
    <div>
      <div class="container">
        <div class="container_1">
            <div class="left-side">
                <h1>Moment's</h1>
                <h1 class="studio-yellow">Studio</h1>
                <p>В нашей фотостудии вы можете заказать профессиональную фотосъемку для любого события, будь то семейный портрет или свадебное торжество.<br><br>
                    Мы создадим идеальные фотографии в нашей уютной студии, благодаря опыту наших фотографов.</p>
            </div>

            <div class="right-side">
                <img class="main-image" src="/public/foto/first/f3.webp" alt="Фотография студии">
            </div>
        </div>
    </div>

        <div class="container">
            <div class="container_2">
            <h2 class="zagolovok">Ваша уникальная история в каждом кадре</h2>

            <div class="carousel-wrapper">
              <div class="carousel">
                  <div
                      class="carousel-container"
                      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
                  >
                      <div
                        v-for="(group, groupIndex) in groupedImages"
                        :key="groupIndex"
                        class="carousel-item"
                      >
                          <div class="image-group">
                              <img
                                  v-for="(image, imageIndex) in group"
                                  :key="imageIndex"
                                  :src="image"
                                  :alt="
                                      'Image ' +
                                      (imageIndex + 1) +
                                      ' in group ' +
                                      (groupIndex + 1)
                                  "
                                  class="carousel-image"
                              >
                          </div>
                      </div>
                  </div>
              </div>
              <div class="carousel-controls">
                <button aria-label="Previous Slide" @click="prevSlide">&lt;</button>
                <button aria-label="Next Slide" @click="nextSlide">&gt;</button>
              </div>
          </div>

            <p class="text">
                "Мы вдохновляемся вашим стилем и помогаем создать"<br>
                фотографии, отражающие внутреннюю красоту и <br> индивидуальность.
            </p>


            </div>
        </div>

        <div class="container">
          <div class="reasons">
            <h2 class="reasons__title">Почему именно мы?</h2>
            <div class="reasons__container">
              <div class="reasons__item">
                <img src="public/foto/first/i1.webp" alt="Сервис" class="reasons__image">
                <h3 class="reasons__item-title">Сервис</h3>
                <p class="reasons__text">Мы обеспечиваем внимательное отношение к каждому клиенту, готовы идти навстречу и помогать в реализации проектов.</p>
              </div>

              <div class="reasons__item">
                <img src="public/foto/first/i3.webp" alt="Расположение" class="reasons__image">
                <h3 class="reasons__item-title">Расположение</h3>
                <p class="reasons__text">Удобное расположение в центре города Санкт-Петербург! Фотостудия находится всего в нескольких минутах от станции пл.Ленина</p>
              </div>

              <div class="reasons__item">
                <img src="public/foto/first/i2.webp" alt="Многообразие залов" class="reasons__image">
                <h3 class="reasons__item-title">Многообразие залов</h3>
                <p class="reasons__text"> Снимайте на циклораме в Светлом зале или выбирайте тематические интерьеры:<br> Оранжерею с живой зеленью, атмосферу детства в <br> Детской комнате, или яркие краски “Красоты Прованса”!</p>
              </div>

              <div class="reasons__item">
                <img src="public/foto/first/i4.webp" alt="Доступные цены" class="reasons__image">
                <h3 class="reasons__item-title">Доступные цены</h3>
                <p class="reasons__text">Вы можете выбрать любой подходящий для вас тариф аренды, также у нас имеются акции.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="reviews">
            <h2 class="reviews__title">Отзывы наших клиентов</h2>
            <div class="reviews__container">
              
              <div class="reviews__item">
                <h3 class="reviews__item-author">Олеся Иванова</h3>
                <p class="reviews__item-text">"Moment's Studio - уютная и красивая студия! Отличные локации и профессиональный фотограф, остались очень довольны съемкой с детьми, вернемся еще!"</p>
              </div>

              <div class="reviews__item">
                <h3 class="reviews__item-author">Геннадий Саввин</h3>
                <p class="reviews__item-text">"Студия просторная и светлая, есть все необходимое для качественной съемки. Персонал внимательный, помогли с выбором локаций. Результатом очень доволен!"</p>
              </div>

              <div class="reviews__item">
                <h3 class="reviews__item-author">Наталья Васильева</h3>
                <p class="reviews__item-text">"Прекрасная студия для семейной фотосессии! Уютная обстановка, фотограф умеет работать с детьми, фотографии получились очень душевными."</p>
              </div>

              <div class="reviews__item">
                <h3 class="reviews__item-author">Светлана Смирнова</h3>
                <p class="reviews__item-text">"Снимали лавстори и в восторге! Прекрасный интерьер, опытный фотограф помог воплотить все задуманное, фотографии получились волшебными, спасибо!"</p>
              </div>
            </div>
            <a href="https://yandex.ru/maps/org/chromastudio/89840981471/reviews" class="reviews__button"  target="_blank">Оставить отзыв на Яндекс Картах</a>
          </div>
                    
        </div>

    </div>

</template>



<!-- CSS -->


<style scoped>
/* === Ваш оригинальный CSS код (не меняем) === */

.container_1 {
    display: flex;
    height: 32rem;
}

.left-side {
    width: 50%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
}

.studio-yellow {
    color: #ED9810;
    padding-left: 9rem;
    margin-top: 1rem;
    margin-bottom: 4rem;
}

.left-side h1{
    font-size: 5rem;
    font-weight: bold;
    line-height: 1px;
}

.right-side {
    padding-top: 2.2rem;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.main-image {
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin: 0 auto;
}

/* Второй блок */

.container_2 {
  display: flex;
  flex-direction: column;
  height: 35rem;
  background-color: #ED9810;
  border-radius: 2rem;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
}

/* Стили для обертки карусели */
.carousel-wrapper {
  width: 100%;
  max-width: 50rem;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  position: relative;
}

.carousel {
  width: 100%;
  overflow: hidden;
}

.carousel-container {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
}

.carousel-item {
  width: 100%;
  flex-shrink: 0;
  flex-grow: 0;
}

.image-group {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.carousel-image {
  width: calc(100% / 3 - 10px);
  display: block;
}

/* Стили для кнопок управления каруселью */
.carousel-controls button {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  position: absolute;
}

.carousel-controls button:first-child {
  left: -4rem;
  top: 50%;
  transform: translateY(-50%);
}

.carousel-controls button:last-child {
  right: -4rem;
  top: 50%;
  transform: translateY(-50%);
}

/* Стили для кнопки при наведении на нее курсора */
.carousel-controls button:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

/* Стили для неактивной (выключенной) кнопки */
.carousel-controls button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Стили для текста под каруселью */
.text {
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1.5rem;
}

/* 3 БЛОК*/

.reasons {
  padding: 20px;
}

.reasons__title {
  text-align: left;
  margin-bottom: 1em;
  margin-top: 1.5em;
  padding-left: 0.5rem;
}

.reasons__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.reasons__item {
  width: calc(50% - 10px);
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
  box-sizing: border-box;
  padding: 1rem;
}


.reasons__image {
  width: 3.2em;
  height: 3.2em;

}

.reasons__item-title {
  margin-top: 0.7rem;
  margin-bottom: 5px;
}

.reasons__text {
  margin-top: 0;
}

 /* 4 БЛОК */

.reviews {
  text-align: center;
}

.reviews__title {
  text-align: center;
  margin-bottom: 50px;
}

.reviews__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.reviews__item {
  width: calc(50% - 10px);
  background-color: #ED9810;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
  text-align: center;
}

.reviews__item-author {
  margin-top: 0;
  margin-bottom: 10px;
  position: relative;
  padding-bottom: 10px;
}

.reviews__item-author::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 15em;
  height: 1px;
  background-color: #333;
  transform: translateX(-50%);
}

.reviews__item-text {
  margin-top: 0;
}

.reviews__button {
  display: inline-block;
  background-color: #3e3f3f;
  color: white;
  padding: 12px 23px;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 15px;
}

.reviews__button:hover {
  background-color: #333;
}


/* === Адаптивные стили === */

/* Для маленьких телефонов (до 576px) */
@media (max-width: 576px) {
    .container_1 {
        flex-direction: column;
        height: auto;
    }

    .left-side {
        width: 100%;
        padding: 1.5rem;
        text-align: center;
    }

    .studio-yellow {
        color: #ED9810;
        padding-left: 7rem;
        margin-top: 1rem;
        margin-bottom: 4rem;
    }

    .left-side h1{
        font-size: 4rem;
        font-weight: bold;
    }

    .right-side {
        width: 110%;
        padding-top: 0rem;
    }

    .container_2 {
        height: auto;
        width: 23rem;
    }

    .carousel-wrapper {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .carousel-controls {
        position: static;
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .carousel-controls button {
        position: static;
        margin: 0 0.5rem;
    }

    .carousel-image {
        width: 50%;
        margin-bottom: 1rem;
    }

    .reasons__container {
        flex-direction: column;
    }

    .reasons__item {
        width: 21rem;
    }

    .reviews__title{
      margin-left: 4rem;
    }

    .reviews__container {
        flex-direction: column;
    }

    .reviews__item {
        width: 23rem;
        padding: 1rem;
    }

    .reviews__item-author::after {
        width: 10rem;
    }

    .reviews__button {
        padding: 10px 20px;
        width: 20.5rem;
    }
}

/* Для телефонов (от 576px до 768px) */
@media (min-width: 576px) and (max-width: 768px) {
    .left-side h1 {
        font-size: 3rem;
    }

    .main-image {
        max-height: 22rem;
    }

    .carousel-image {
        width: 85%;
    }
}

/* Для планшетов (от 768px до 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
    .container_1 {
        height: auto;
        flex-direction: row;
    }

    .left-side {
        width: 50%;
        padding: 1.5rem;
        text-align: left;
    }

    .studio-yellow {
        padding-left: 4rem;
        margin-bottom: 2rem;
    }

    .left-side h1 {
        font-size: 3.5rem;
    }

    .right-side {
        width: 60%;
        padding-top: 0;
    }

    .main-image {
        max-height: 28rem;
    }


    .container_2 {
        height: auto;
    }

    .carousel-wrapper {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .carousel-controls {
        position: static;
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .carousel-controls button {
        position: static;
        margin: 0 0.5rem;
    }

    .carousel-image {
        width: 50%;
        margin-bottom: 1rem;
    }


    .reasons__item {
        width: calc(50% - 20px);
    }

    .reviews__item {
        width: calc(50% - 20px);
    }
}

/* Для больших планшетов и небольших экранов (от 1024px до 1200px) */
@media (min-width: 1024px) and (max-width: 1200px) {
    .left-side h1 {
        font-size: 4rem;
    }

    .main-image {
        max-height: 29rem;
    }
}
</style>