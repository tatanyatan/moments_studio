<script>
export default {
  data() {
    return {
      tariffsData: [
        {
          title: 'Стандарт',
          features: [
            '• Аренда любого зала студии на 1 час',
            '• Использование гримерной за 1 час и во время съемки',
            '• Доступ ко всему оборудованию и реквизиту студии (уточнить список)',
            '* Возможность продления аренды: +1000 руб./час.'
          ],
          price: '2100 руб.',
          priceColor: 'tariff-price--pink' // Добавляем класс для малинового цвета
        },
        {
          title: 'Фотосессия Light',
          features: [
            '• Аренда любого зала студии на 1 час.',
            '• Профессиональный фотограф',
            '• 110 исходных фотографий + 10 фотографий в профессиональной ретуши + Базовая обработка всех фотографий',
            '• Использование гримерной за 1 час и во время съемки',
            '* Возможность продления аренды (Зал + Фотограф): +1800 руб./час.'
          ],
          price: '4000 руб.',
          priceColor: 'tariff-price--green' // Добавляем класс для зеленого цвета
        },
        {
          title: 'Прогулка в городе',
          features: [
            '• Профессиональный Фотограф',
            '• 120 исходных фотографий + 10 фотографий в профессиональной ретуши + Базовая обработка всех фотографий',
            '• Фотосъемка в течение 1.5 часов в выбранном вами месте в городе.',
            '• Консультация по выбору локации и стилю.',
            '*Возможность продления прогулки отсутствует'
          ],
          price: '5000 руб.',
          priceColor: 'tariff-price--blue' // Добавляем класс для синего цвета
        },
        {
          title: 'Premium пакет',
          features: [
            '• Аренда любого зала студии на 2 часа.',
            '• Профессиональный Фотограф',
            '• 180 исходных фотографий + 20 фотографий в профессиональной ретуши + Базовая обработка всех фотографий',
            '• Использование гримерной за 1 час и во время съемки',
            '• Работа стилиста по подбору 3-х образов.',
            '• Создание мини-фотокниги из 10 лучших фотографий.'
          ],
          price: '12 600 руб.',
          priceColor: 'tariff-price--red' // Добавляем класс для красного цвета
        },
        {
          title: 'Свадебный тариф №1',
          features: [
            '• Аренда любого зала студии на 2 часа.',
            '• Профессиональный Фотограф',
            '• 120 исходных фотографий + 30 фотографий в профессиональной ретуши + Базовая обработка всех фотографий',
            '• Использование гримерной за 1.5 часа и во время съемки',
            '• Создание мини-фотокниги из 15 лучших фотографий.'
          ],
          price: '11 000 руб.',
          priceColor: 'tariff-price--orange' // Добавляем класс для оранжевого цвета

        },
        {
          title: 'Свадебный тариф №2',
          features: [
            '• Фотосъемка свадебного дня (до 8 часов).',
            '• Профессиональный Фотограф',
            '• Гарантированное количество исходных фотографий - не менее 110 + Базовая обработка всех фотографий',
            '• Пакет профессиональной ретуши - от 20 фотографий. Количество фотографий может увеличиться, в зависимости от количества часов съемки.',
            '• Предсвадебная консультация',
            '* Необходимо обеспечить фотографу питание во время мероприятия и оплатить дорогу до места съемки и обратно.'
          ],
          price: 'от 16 000 руб.',
          priceColor: 'tariff-price--purple' // Добавляем класс для фиолетового цвета
        }
      ],
      isBookingModalVisible: false,
      phoneNumber: 'tel:+79991234567', // Замените на свой номер телефона
      vkLink: 'https://vk.com', // Замените на ссылку на вашу группу VK
      telegramLink: 'https://t.me', // Замените на ссылку на ваш Telegram канал
    };
  },
  methods: {
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
      <div class="tariffs-section">
        <h2 class="zagolovok">Тарифы</h2>
        <div class="tariffs-grid">
          <div v-for="(tariff, index) in tariffsData" :key="index" class="tariff-card">
            <div class="tariff-header">
              {{ tariff.title }}
            </div>
            <ul class="tariff-features">
              <li v-for="(feature, i) in tariff.features" :key="i">{{ feature }}</li>
            </ul>
            <div class="tariff-footer">
              <div class="tariff-price" :class="tariff.priceColor">
                {{ tariff.price }}
              </div>
              <button class="tariff-button" @click="openBookingModal">Записаться на съемку</button>
            </div>
          </div>
        </div>
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
  </div>
</template>



<style scoped>
/* Стили для заголовка */
.zagolovok {
  margin-top: 3rem;
  margin-bottom: 4rem;
  text-align: center;
}

.tariffs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.tariff-card {
  border: 1px solid #000000;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex; /* Делаем карточку flex-контейнером */
  flex-direction: column; /* Элементы располагаются вертикально */
}

.tariff-header {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.tariff-features {
  list-style: none;
  padding: 0;
  margin-bottom: auto; /* Занимает все доступное пространство, отодвигая tariff-footer вниз */
}

.tariff-features li {
  margin-bottom: 15px;
  text-align: left;
}

.tariff-footer {
  display: flex; /*  Делаем footer flex-контейнером */
  flex-direction: column; /*  Размещаем цену и кнопку в колонку */
  align-items: center; /*  Выравниваем элементы по центру горизонтально */
  margin-top: 20px; /*  Добавляем отступ сверху */
}

.tariff-price {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px; /* Уменьшаем отступ от цены */
  color: #E01A76;
}

.tariff-button {
  background-color: #ED9810;
  color: #000;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1.1rem;
  border: 2px solid #000;
  font-weight: bold;
}

.tariff-button:hover {
  background-color: #ffd153; /* Белый фон при наведении */
}

/* цвета в карточках */

.tariff-price--pink {
  color: #E01A76; /* Малиновый цвет */
}

.tariff-price--green {
  color: #28a745; /* Зеленый цвет */
}

.tariff-price--blue {
  color: #007bff; /* Синий цвет */
}

.tariff-price--red {
  color: #dc3545; /* Красный цвет */
}

.tariff-price--purple {
  color: #6f42c1; /* Фиолетовый цвет */
}

.tariff-price--orange {
  color: #fd7e14; /* Оранжевый цвет */
}

/* Модальное окно */

.modal {
  font-family: 'Geologica', sans-serif;
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
  max-width: 600px;
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

.modal-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 40px;
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
}

.modal-button:hover {
  background-color: #ffd153;
}

/* === Адаптивные стили === */

/* Для маленьких телефонов (до 576px) */
@media (max-width: 576px) {
  .tariffs-grid {
    grid-template-columns: 1fr; /* Одна колонка */
  }

  .tariff-card {
    padding: 15px; /* Уменьшаем отступы */
  }

  .tariff-header {
    font-size: 1.3rem; /* Уменьшаем размер заголовка */
  }

  .tariff-features li {
    font-size: 0.9rem; /* Уменьшаем размер шрифта в списке */
  }

  .tariff-price {
    font-size: 1.5rem; /* Уменьшаем размер цены */
  }

  .tariff-button {
    font-size: 1rem; /* Уменьшаем размер кнопки */
  }

  /* Возвращаем стили для модального окна */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: none;
    width: 80%;
    max-width: 600px;
    position: relative;
    text-align: center;
    border: 1rem solid #ED9810;
  }

  .container{
    width: 23rem;
  }
}

/* Для телефонов (от 576px до 768px) */
@media (min-width: 576px) and (max-width: 768px) {
  .tariffs-grid {
    grid-template-columns: 1fr; /* Одна колонка */
  }

  .tariff-card {
    padding: 15px; /* Уменьшаем отступы */
  }

  .tariff-header {
    font-size: 1.4rem; /* Уменьшаем размер заголовка */
  }

  .tariff-features li {
    font-size: 1rem; /* Уменьшаем размер шрифта в списке */
  }

  .tariff-price {
    font-size: 1.6rem; /* Уменьшаем размер цены */
  }

  .tariff-button {
    font-size: 1rem; /* Уменьшаем размер кнопки */
  }

  /* Возвращаем стили для модального окна */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: none;
    width: 80%;
    max-width: 600px;
    position: relative;
    text-align: center;
    border: 1rem solid #ED9810;
  }
}

/* Для планшетов (от 768px до 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  .tariffs-grid {
    grid-template-columns: repeat(2, 1fr); /* Две колонки */
  }
}
</style>