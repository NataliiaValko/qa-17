// a
// a[title="link"]
// .submenu
// #title
// .social-links a
// .social-links.link
// <h1 class="title accent"></h1>
{
  /* <h2 class="title"></h2> */
}
// .title.accent
// .title
// .title:hover

// const user = "Mango";

// let age = 5;
// age = 20;
// console.log("age:", age);

// const quantity = age;
// console.log("quantity:", quantity);

// age = 50;
// console.log("age:", age);
// console.log("quantity:", quantity);

// const valueB = "random string";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"
// isNaN(6);
// console.log("isNaN(6):", isNaN(undefined));

// 5 <= 2;
// console.log("5 === 2", 5 === 2);

// Example 1 - Математичні оператори
// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = "47";
// const grapes = 135;
// const total = Number(apples) + Number(grapes);
// console.log("total:", total);

// const diff = grapes - apples;
// console.log("diff:", diff);

//
// Example 2 - Комбіновані оператори
// Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// // students = students + 50;
// students += 50;
// console.log("students:", students);

//
//
// Example 3 - Пріоритет операторів
// Розбери пріоритет операторів в інструкції привласнення значення змінної result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);
//
//
// Example 4 - Клас Math
// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value. Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 27.4;

// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));

// Example 5 - Шаблонні рядки
// Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"
//
//
// Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = "88,3";
// let height = "1.75";

// const normalizeWeight = weight.replace(",", ".");
// const normalizeHeight = height.replace(",", ".");

// const bmi = (normalizeWeight / normalizeHeight ** 2).toFixed(1);
// console.log(bmi); // 28.8

//
// Example 7 - Оператори порівняння та приведення типів
// Яким буде результат виразів?

// console.log(5 > 4);

// console.log(10 >= "7");
//
// console.log("2" > "12");

// console.log("2" < "12");

// console.log("4" == 4);

// console.log("6" === 6);

// console.log("false" === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log("0" == false);

// console.log("0" === false);

// console.log("Papaya" < "papaya");

// console.log("Papaya" === "papaya");

// console.log(undefined == null);

// console.log(undefined === null);
//
//
// Example 8 - Логічні оператори
// Яким буде результат виразів?

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && "kiwi");

// console.log(true && 0 && "kiwi");

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);
//
//
// Example 9 - Значення за замовчуванням та оператор нульового злиття
// Отрефактори код так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне undefined або null. В іншому випадку має присвоюватися значення defaultValue. Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0, false. Використовуй оператор ?? (nullish coalescing operator).

// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// let value;

// if (incomingValue === undefined || incomingValue === null) {
//   value = defaultValue;
// } else {
//   value = incomingValue;
// }

// value =
//   incomingValue === undefined || incomingValue === null
//     ? defaultValue
//     : incomingValue;

// value = incomingValue ?? defaultValue;

// console.log(value);
//
//
// Example 10 - Оператор % та методи рядків
// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01
// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;

// const normalizeHours = String(hours).padStart(2, 0);
// const normalizeMinutes = String(minutes).padStart(2, 0);

// const message = normalizeHours + ":" + normalizeMinutes;
// const message = normalizeHours.concat(":").concat(normalizeMinutes);
// const message = `${normalizeHours}:${normalizeMinutes}`;

// console.log(message);
