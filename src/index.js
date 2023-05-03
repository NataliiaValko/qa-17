// # Модуль 10. Заняття 9

//ЗАДАЧА 1
// Напиши фронтенд частину застосунку для пошуку товарів по слову в назві, описі тощо. Використовуй АРІ
// https://dummyjson.com/
// Взаємодію з бекендом опиши у файлі apiDummyJSON.js
// Зроби фільтрацію параметрів у запиті, тебе цікавлять наступні поля: title, price, description, brand, images, rating.
// Значення для пошуку отримай з форми після натискання на кнопку "Search".
// Якщо у відповідь від бекенда прийшло більше 4х продуктів, то додай у інтерфейс розмітку списку, яка буде складатись із зображення і назви продукта. Якщо 2 і менше, то список карток з детальною інформацією по кожному товару.
// Не забудь обробити можливі помилки 😉
//(Product matching these criteria was not found, please try changing your search)

import { Notify } from 'notiflix';
import { fetchProductsByQuery } from './js/apiDummyJSON';
import { createMarkupBigCard, createMarkupLittleCard } from './js/markup';

const searchFormRef = document.querySelector('#searchForm');
const productsListRef = document.querySelector('.productsList');
const searchFormInputRef = document.querySelector('.searchForm-input');
const searchFormButtonRef = document.querySelector('.searchForm-button');

searchFormInputRef.addEventListener('input', onSearchFormInput);
searchFormRef.addEventListener('submit', onSearchFormSubmit);

searchFormButtonRef.disabled = true;

async function onSearchFormSubmit(event) {
  event.preventDefault();
  const query = event.target.elements.searchValue.value.toLowerCase().trim();
  if (!query) {
    return;
  }

  try {
    const { products } = await fetchProductsByQuery(query);
    event.target.reset();
    if (!products.length) {
      Notify.failure(
        'Product matching these criteria was not found, please try changing your search'
      );
      productsListRef.innerHTML = '';
      return;
    }

    if (products.length > 2) {
      Notify.success(`We found ${products.length} products`);
      productsListRef.innerHTML = createMarkupLittleCard(products);
      return;
    }

    Notify.success(`We found ${products.length} products`);
    productsListRef.innerHTML = createMarkupBigCard(products);
  } catch (error) {
    console.log(error.message);
  }
}

function onSearchFormInput(event) {
  const value = event.target.value.trim();
  searchFormButtonRef.disabled = !value;
}
