// # Модуль 9. Заняття 8.

//ЗАДАЧА 1
// Перероби функцію на проміс таким чином, щоб проміс повертав значення
// через 2 секунди після виклику функції

// function greet() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("hello world");
//     }, 2000);
//   });
//   //
// }

// / greet().then((text) => console.log(`My message for you ${text}`));
// greet().then(console.log);
//
// ЗАДАЧА 2
// Використовуй prompt і повертай результат його виклику.
// Створи функцію checkValue(value), в середині якої буде проміс.
// Якщо значення не є числом, відклоняй проміс і логуй "error".
// Якщо значення парне, обробляй проміс і повертай рядок "even" через 1 секунду.
// Якщо значення не парне, обробляй проміс і повертай рядок "odd" через 2 секунди.
//

// function checkValue(value) {
//   return new Promise((res, rej) => {
//     if (isNaN(value)) {
//       rej("error");
//       return;
//     }
//     if (value % 2) {
//       setTimeout(() => {
//         res("odd");
//       }, 2000);
//       return;
//     }

//     if (!(value % 2)) {
//       setTimeout(() => {
//         res("even");
//       }, 1000);
//       return;
//     }
//   });
// }

// const value = prompt("Input your value please");
// checkValue(value).then(console.log).catch(console.log);
//
// ЗАДАЧА 3
// Кнопка increment має кожну секунду збільшувати значення на 1
// Кнопка decrement має кожну секунду зменшувати значення на 1.
//Враховуй, що на кнопки можна натиснути нескінченну кількість разів. Зроби так, щоб доки збільшувати/зменшувати запущено, то відповідна кнопка була неактивною (disabled).
//
// const incrementButtonRef = document.querySelector('[data-action="increment"]');
// const decrementButtonRef = document.querySelector('[data-action="decrement"]');
// const valueRef = document.querySelector(".counter-value");

// incrementButtonRef.addEventListener("click", onIncrementButtonClick);
// decrementButtonRef.addEventListener("click", onDecrementButtonClick);

// let intervalId = null;

// function onIncrementButtonClick(event) {
//   event.target.disabled = true;
//   decrementButtonRef.disabled = false;
//   clearInterval(intervalId);
//   intervalId = setInterval(() => {
//     let currentValue = Number(valueRef.textContent);
//     currentValue += 1;
//     valueRef.textContent = currentValue;
//   }, 1000);
// }

// function onDecrementButtonClick(event) {
//   event.target.disabled = true;
//   incrementButtonRef.disabled = false;
//   clearInterval(intervalId);
//   intervalId = setInterval(() => {
//     let currentValue = valueRef.textContent;
//     currentValue -= 1;
//     valueRef.textContent = currentValue;
//   }, 1000);
// }

//
// ЗАДАЧА 4
// Функція startTimer(array) має виводити в консоль кожен елемент масиву 1 раз в секунду.
// Коли черга дійде до останнього елмента масиву, продовжувати виводити логи, але в зворотньому напрямку
// до тих пір поки не дійде до першого елемента, потім зупинити процес.
// const array = [1, 2, 3, 4, 5];

//

// function startTimer(array) {
//   let index = -1;
//   let isReverse = false;
//   let intervalId = null;

//   intervalId = setInterval(() => {
//     if (index === array.length - 1) {
//       isReverse = true;
//     }
//     index = isReverse ? index - 1 : index + 1;
//     if (!index && isReverse) {
//       clearInterval(intervalId);
//     }

//     console.log(array[index]);
//   }, 1000);
// }

// startTimer(array);

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
