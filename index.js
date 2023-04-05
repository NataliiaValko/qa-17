// # Модуль 5. Заняття 9. Контекст виклику функції та this

// ## Example 1 - Майстерня коштовностей

// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
// розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
// кількістю з властивості stones.

// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     let result = 0;
//     for (const stone of this.stones) {
//       if (stone.name === stoneName) {
//         result = stone.price * stone.quantity;
//       }
//     }
//     return result;
//   },
// };

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600

// ## Example 2 - Телефонна книга

// Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return `_${Math.random().toString(36).substr(2, 9)}`;
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// phonebook.add({
//   name: "Mango",
//   email: "mango@mail.com",
//   list: "friends",
// });

// phonebook.add({
//   name: "Poly",
//   email: "poly@hotmail.com",
// });

// console.log(phonebook.contacts);
// ## Example 3 - Калькулятор

// Створіть об'єкт `calculator` з трьома методами:

// - read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// - add() - повертає суму збережених значень.
// - mult() - перемножує збережені значення та повертає результат.

// const calculator = {
//   read(a, b) {
//     this.prop1 = a;
//     this.prop2 = b;
//   },
//   add() {
//     return this.prop1 + this.prop2;
//   },
//   mult() {
//     return this.prop1 * this.prop2;
//   },
// };
// calculator.read(3, 6);
// console.log(calculator);
// console.log("calculator.add()", calculator.add());
// console.log("calculator.mult()", calculator.mult());

// Example 5 - Користувач
// Напиши клас User для створення об'єкта користувача з наступними властивостями:

// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем на яких спеціалізується блогер
// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який, повертає рядок: User ${пошта} is ${вік} years old and has ${кількість постів} posts.

// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

// clas/oly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts
// Example 6 - Сховище
// Напиши клас Storage який створює об'єкти для керування складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме його властивість items.

// Додай методи класу:

// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар і додає його до поточних.
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }
//   removeItem(item) {
//     if (!this.items.includes(item)) {
//       return;
//     }
//     const index = this.items.indexOf(item);
//     this.items.splice(index, 1);
//   }
// }
// const storage = new Storage(["apple", "lemon", "strawberry", "orange"]);

// const items = storage.getItems();
// console.table(items); // [ 'apple', 'lemon', 'strawberry', 'orange' ]

// storage.addItem("banana");
// console.table(storage.items); // [ 'apple', 'lemon', 'strawberry', 'orange', 'banana' ]

// storage.removeItem("lemon");
// console.table(storage.items); // [ 'apple', 'strawberry', 'orange', 'banana' ]
// Example 7 - User
// Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та email.

// class User {
//   #login;
//   #email;
//   constructor({ email, login }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }
// }
// const mango = new User({
//   login: "Mango",
//   email: "mango@dog.woof",
// });

// console.log(mango.login); // Mango
// mango.login = "Mangodoge";
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// console.log(poly.login); // Poly
// poly.login = "Polycutie";
// console.log(poly.login); // Polycutie
// Example 8 - Нотатки
// Напиши клас Notes який керує колекцією нотаток у властивості items. Замітка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

// class Notes {
//   static Priority = {
//     LOW: "low",
//     NORMAL: "normal",
//     HIGH: "high",
//   };
//   constructor(items) {
//     this.items = items;
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     let index = null;
//     this.items.forEach((note, i) => {
//       if (note.text === text) {
//         index = i;
//       }
//     });

//     if (index === null) {
//       console.log("Нотатка з таким текстом не існує");
//       return;
//     }
//     this.items.splice(index, 1);
//   }
//   updatePriority(text, newPriority) {
//     let index = null;
//     this.items.forEach((note, i) => {
//       if (note.text === text) {
//         index = i;
//       }
//     });
//     if (!index) {
//       console.log("Нотатка з таким текстом не існує");
//       return;
//     }

//     this.items[index].priority = newPriority;
//   }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({ text: "Моя перша замітка", priority: Notes.Priority.LOW });
// // console.log(myNotes.items);

// myNotes.addNote({
//   text: "Моя друга замітка",
//   priority: Notes.Priority.NORMAL,
// });
// // console.log(myNotes.items);

// myNotes.removeNote("Моя перша замітка");
// // console.log(myNotes.items);

// myNotes.updatePriority("Моя друга замітка", Notes.Priority.HIGH);
// console.log(myNotes.items);
