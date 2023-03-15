// ## Example 1 - Базові операції з масивом

// 1. Створіть масив `genres` з елементами "Jazz" та "Blues".
// 2. Додайте "Rock-n-Roll" до кінця.
// 3. Виведіть у консоль перший елемент масиву.
// 4. Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву   довільної довжини.
// 5. Видаліть перший елемент та виведіть його в консоль.
// 6. Вставте "Country" та "Reggae" на початок масиву.

// const genres = ["Jazz", "Blues"];
// genres.push("Rock-n-Roll");

// console.log("first element:", genres[0]);
// const lastIndex = genres.length - 1;
// console.log("last element:", genres[lastIndex]);
// console.log("removed first element:", genres.shift());
// console.log("added first element:", genres.unshift("Country", "Reggae"));

// console.log("genres:", genres);

// ## Example 2 - Масиви та рядки

// Напиши функцію getRectArea(values) для обчислення площі прямокутника зі сторонами, значення
// яких зберігаються у змінній `values` у вигляді рядка. Значення гарантовано
// розділені пробілом.

// const values = "11 11";

// function getRectArea(values) {
//   const array = values.split(" ");
//   const area = array[0] * array[1];
//   return area;
// }

// console.log(getRectArea(values));
// ## Example 3 - Перебір масиву

// Напиши функцію logItems(items) для перебору масиву `fruits` циклом `for`. Для кожного елемента
// масиву виведи в консоль рядок у форматі `номер_елемента: значення_елемента`.
// Нумерація елементів повинна починатися з `1`.

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];
// const friends = ["Mango", "Poly", "Ajax"];

// function logItems(items) {
//   for (let index = 1; index <= items.length; index += 1) {
//     console.log(`${index}: ${items[index - 1]}`);
//   }
// }

// logItems(fruits);
// logItems(friends);
//варіант з ускладненням
//
// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];
// const friends = ["Mango", "Poly", "Ajax"];

// function logItems(items) {
//   let result = "";

//   for (let index = 1; index <= items.length; index += 1) {
//     result = result.concat(`${index}: ${items[index - 1]} \n`);
//   }

//   return result;
// }

// console.log(logItems(fruits));
// logItems(friends);

// ## Example 4 - Масиви та цикли

// Напиши функцію printContactsInfo(names, phones), яка виводить у консоль ім'я та телефонний номер користувача ( "name: <name>; phone: <phone>").
//У змінних `names` та `phones` зберігаються рядки імен та телефонних номерів,
// розділені комами. Порядковий номер імен та телефонів у рядках вказують на
// відповідність. Кількість імен та телефонів гарантовано однакова.

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "89001234567,89001112233,890055566377,890055566300";

// function printContactsInfo(names, phones) {
//   const arrayNames = names.split(",");
//   const arrayPhones = phones.split(",");

//   for (let index = 0; index < arrayPhones.length; index += 1) {
//     console.log(`name: ${arrayNames[index]}; phone: ${arrayPhones[index]}`);
//   }
// }

// printContactsInfo(names, phones);

// ## Example 5 - Масиви та рядки

// Напиши функцію transformArray(string), яка виводить у консоль усі слова рядка крім першого і
// останнього. Результуючий рядок не повинен починатися або закінчуватися
// символ пробілу. Скрипт повинен працювати для будь-якого рядка.

// const string = "Welcome to a beautiful and happy future";

// function transformArray(string) {
//   const array = string.split(" ");

//   array.shift();
//   array.pop();

//   const newString = array.join(" ");

//   console.log(newString);
// }

// transformArray(string);

// ## Example 6 - Масиви та рядки

// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить
// його в консоль.

// const string = "Welcome to the future";

// function reverseString(string) {
//   const array = string.split("");
//   const reversedArray = array.reverse();
//   const newString = reversedArray.join("");

//   console.log(newString);
// }

// reverseString(string);

/// Example 7 - Колекція курсів (includes, indexOf, push і т. д.)
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// ## Example 8 - Пошук елемента

// Напиши фунцію findSmallerNumber(numbers), яка  шукає найменше число у масиві. Код повинен працювати для
// будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min;
// console.log(min); // 1
