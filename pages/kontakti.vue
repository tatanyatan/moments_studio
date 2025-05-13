<script>
export default {
  data() {
    return {
      faqData: [
        {
          question: 'Какой у вас график работы?',
          answer: 'Работаем ежедневно 10:00-19:00. Праздничный график и поздние визиты (до 21:00) – по предварительной договоренности.'
        },
        {
          question: 'Записываться на фотосессию нужно заранее?',
          answer: 'Запись на фотосессию на будние дни осуществляется не позднее чем за 2-3 дня до съёмки, на выходные – за 1-2 недели.'
        },
        {
          question: 'Какие способы оплаты вы принимаете?',
          answer: 'Мы принимаем оплату наличными, банковскими картами, а также выставляем счета для юридических лиц.'
        },
        {
          question: 'Сколько времени занимает обработка фотографий?',
          answer: 'Для большинства фотосессий — до 14 календарных дней. Для пакета "Premium" — до 21 календарных дней + около 5-7 рабочих дней на печать фотокниги.'
        }
      ]
    }
  }
}
</script>

<template>
  <div>
    <div class="container">
      <h2 class="zagolovok">Контакты студии</h2>
      <div class="split-block">
        <div class="split-block__left">
          <div class="vertical-center">
            <div class="contact-item">
              <span class="contact-title">Адрес студии:</span>
              <span class="contact-info">
                г. Санкт-Петербург, ул. Михайлова, 14 <br>
                (2 этаж, от лестницы дверь слева)
              </span>
            </div>

            <div class="contact-item">
              <span class="contact-title">Основной телефон студии:</span>
              <span class="contact-info">
                <a :href="'tel:+79081001000'">+7 (908) 100-10-00</a>
              </span>
            </div>

            <div class="contact-item">
              <span class="contact-title">Группа ВК:</span>
              <span class="contact-info">
                <a href="https://vk.com/moments_studio_spb" target="_blank">vk.com/moments_studio_spb</a>
              </span>
            </div>

            <div class="contact-item">
              <span class="contact-title">Telegram:</span>
              <span class="contact-info">
                <a href="https://t.me/Moments_studio_spb" target="_blank">https://t.me/Moments_studio_spb</a>
              </span>
            </div>
          </div>
        </div>
        <div class="split-block__right">
          <img src="/public/foto/carta.webp" alt="Карта">
        </div>
      </div>
    </div>

    <div class="container">
      <h2 class="zagolovok">FAQ (Часто задаваемые вопросы)</h2>
      <div class="faq-section">
        <div class="faq-item" v-for="(item, index) in faqData" :key="index">
          <div class="faq-question">{{ item.question }}</div>
          <div class="faq-answer">{{ item.answer }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Стили для заголовка */
.zagolovok {
  margin-top: 3rem;
  margin-bottom: 4rem;
  text-align: center;
}

.split-block {
  display: flex;
  align-items: center; /* Align items center для вертикального центрирования всего блока */
  width: 100%;
}

.split-block__left {
  width: 50%;
  padding-right: 20px;
  margin-left: 2rem;
}

.vertical-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.contact-item {
  margin-bottom: 1rem;
}

.contact-title {
  font-weight: bold;
  display: block;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

/* Стили для второй строки (информации) */
.contact-info {
  color: #E01A76; /* Малиновый цвет */
  display: block;
  font-size: 1.1rem;
}

.split-block__left a {
  color: blue;
  text-decoration: none;
}

.split-block__left a:hover {
  text-decoration: underline;
}

.split-block__right {
  width: 50%;
}

.split-block__right img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 5px;
}

.faq-item {
  margin-bottom: 20px;
}

.faq-question {
  background-color:#ED9810; /* Оранжевый цвет фона */
  color: white; /* Белый цвет текста */
  padding: 15px; /* Отступы внутри блока */
  border-radius: 5px; /* Закругление углов */
  font-weight: bold; /* Жирный шрифт */
  cursor: pointer; /* Курсор "рука" при наведении */
  font-size: 1.2rem;
}

.faq-answer {
  padding: 10px;
  margin-top: 5px;
  font-size: 1rem;
  line-height: 1.5;
}

/* === Адаптивные стили === */

/* Для маленьких телефонов (до 576px) */
@media (max-width: 576px) {
  .split-block {
    flex-direction: column; /* Элементы в столбик */
  }

  .split-block__left {
    width: 100%; /* Левая часть на всю ширину */
    padding-right: 0; /* Убираем отступ справа */
    margin-left: 0; /* Убираем отступ слева */
  }

  .split-block__right {
    width: 100%; /* Правая часть на всю ширину */
  }

  .split-block__right img {
    margin-top: 20px; /* Отступ сверху от карты */
  }

  .contact-item {
    text-align: center; /* Текст слева */
  }

  .contact-title {
    font-size: 1.1rem; /* Уменьшаем размер шрифта заголовка */
  }

  .contact-info {
    font-size: 1rem; /* Уменьшаем размер шрифта информации */
  }

  .container{
    width: 24rem;
  }
}


/* Для планшетов (от 768px до 1024px) - здесь можно настроить отображение, если нужно */
@media (min-width: 768px) and (max-width: 1024px) {
  .split-block__left {
    margin-left: 1rem;
  }

  .contact-item {
    text-align: center; /* Текст слева */
  }
}

/* Адаптивность для мобильных устройств */
@media (max-width: 768px) {
  .split-block {
    flex-direction: column;
  }

  .split-block__left,
  .split-block__right {
    width: 100%;
    padding: 0;
  }

  .split-block__left {
    margin-bottom: 20px;
  }

  .vertical-center {
    align-items: center;
  }
}
</style>