// # Модуль 7. Заняття 6.

// ## Example 1 - Чек з магазину

// Є готова розмітка товарного чеку з магазину. Виведи в консоль рядок такого формату "Дякуємо, за місяць ви купили {typesQuantity} типів продуктів. Продукт {productName} ви купували {quantity} разів на загальну вартість {price} кредитів."
// const commentRef = document.querySelector("#comment");
// // console.log("commentRef:", commentRef);
// const receiptListRef = document.querySelector("#receipt");
// // console.log("receiptListRef:", receiptListRef);

// const allProductsRef = receiptListRef.querySelectorAll("h3");
// // console.log("allProductsRef:", allProductsRef);
// const typesQuantity = allProductsRef.length;
// console.log(`Дякуємо, за місяць ви купили ${typesQuantity} типів продуктів`);

// const productItemsRef = receiptListRef.querySelectorAll(".product");
// productItemsRef.forEach((item) => {
//   const productName = item.querySelector("h3").textContent;
//   const quantity = item.querySelectorAll("div p");
//   const price = [...quantity].reduce((acc, item) => {
//     return (acc += Number(item.textContent));
//   }, 0);
//   console.log(
//     `Продукт ${productName} ви купували ${quantity.length} разів на загальну вартість ${price} кредитів.`
//   );
// });

// ## Example 2 - Галерея

// Створи галерею зображень з масиву об'єктів, додай її в список gallery. Стилізуй.
// const galleryItems = [
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
//     description: "Container Haulage Freight",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
//     description: "Aerial Beach View",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
//     description: "Flower Blooms",
//   },
// ];

// const galleryRef = document.querySelector(".gallery");

// const imagesElements = galleryItems.map(({ preview, description }) => {
//   const element = document.createElement("img");
//   element.classList.add("image");
//   element.src = preview;
//   element.width = "160";
//   element.height = "120";

//   element.alt = description;
//   return element;
// });

// galleryRef.append(...imagesElements);
// galleryRef.style.display = "flex";
// galleryRef.style.gap = "20px";
// galleryRef.style.flexDirection = "column";

// const markup = galleryItems
//   .map(
//     ({ preview, description }) =>
//       `<img class="image" src="${preview}" width="160" height="120" alt="${description}">`
//   )
//   .join("");
// // console.log("markup:", markup);
// galleryRef.insertAdjacentHTML("beforeend", markup);

// ## Example 3 - Вивід значення з інпута в alert

//При натисканні на кнопку "Показати" має виводитися значення з інпута в alert. (дивитись в html)

// const alertButtonRef = document.querySelector("#alertButton");
// const alertInputRef = document.querySelector(".alertInput");
// alertButtonRef.addEventListener("click", onAlertButtonClick);

// function onAlertButtonClick(event) {
//   const message = alertInputRef.value;
//   alert(message);
// }
// ## Example 4 - Обмін значеннями

//При натисканні на кнопку "Поміняти" має мінятися значення між інпутами

// const swapButtonRef = document.querySelector(".swapButton");
// const leftSwapInputRef = document.querySelector(".leftSwapInput");
// const rightSwapInputRef = document.querySelector(".rightSwapInput");
// swapButtonRef.addEventListener("click", onSwapButtonClick);
// function onSwapButtonClick(event) {
//   const acc = leftSwapInputRef.value;
//   leftSwapInputRef.value = rightSwapInputRef.value;
//   rightSwapInputRef.value = acc;
// }
// ## Example 5 - Скрити пароль

//При натисканні на кнопку "Скрити" значення в інпуті має ховатися під крапками/зірками, а текстовий вміст кнопки мінятися на "Показати". При повторному натисканні текст має бути знову доступним для читання і текст на кнопці прийняти початкове "Скрити".

// const passwordInputRef = document.querySelector(".passwordInput");
// const passwordButtonRef = document.querySelector(".passwordButton");

// passwordButtonRef.addEventListener("click", onPasswordButtonClick);

// function onPasswordButtonClick(event) {
//   if (passwordInputRef.type === "text") {
//     passwordInputRef.type = "password";
//     event.target.textContent = "Показати";
//     return;
//   }

//   passwordInputRef.type = "text";
//   event.target.textContent = "Скрити";
// }

// ## Example 6 - Random text color
// При клікі на кнопку "Сгенерувати" має створитись рандомна кількість параграфів рандомних кольорів з порядковим номером у його текстовому вмісті. При натисканні на кнопку "Видалити" усі параграфи мають зникати.
// const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;
// const getRandomHexColor = () => {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// };

// const generateBtn = document.querySelector(".generateButton");
// const clearBtn = document.querySelector(".clearButton");
// const paragrafsRef = document.querySelector(".paragrafs");

// generateBtn.addEventListener("click", onGenerateBtnClick);
// clearBtn.addEventListener("click", onClearBtnClick);

// function onGenerateBtnClick(event) {
//   const quantity = getRandomNumber();
//   //   console.log("quantity:", quantity);
//   let markup = "";
//   for (let index = 1; index <= quantity; index++) {
//     markup = markup.concat(
//       `<p style="color:${getRandomHexColor()}; font-size: 24px; font-weight: 700;">${index}</p>`
//     );
//   }
//   console.log(markup);
//   //   paragrafsRef.insertAdjacentHTML("beforeend", markup);
//   paragrafsRef.innerHTML = markup;
// }

// function onClearBtnClick(event) {
//   paragrafsRef.innerHTML = "";
// }
