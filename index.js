// ## Example 1 - Основи об'єктів

// Напиши скрипт, який для об'єкта user, послідовно:

// - додає поле 'mood' зі значенням 'happy'
// - замінює значення властивості 'hobby' на 'skydiving'
// - замінює значення властивості 'premium' на false
// - виводить вміст об'єкта `user` у форматі `ключ:значення` використовуючи
//   `Object.keys()` та `for...of`

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

// console.log("user:", user);

// ## Example 2 - метод Object.values()

// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
// підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно
// вийти 390. Якщо об'єкт `salaries` порожній, то результат має бути 0.

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// function getTotalSalary(object) {
//   let total = 0;

//   const values = Object.values(object);
//   for (const value of values) {
//     total += value;
//   }

//   return total;
// }

// console.log(getTotalSalary(salaries));

// ## Example 3 - Масив об'єктів

// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив
// об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість
// каміння з таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
//   { name: "emerald", price: 1300, quantity: 4 },
//   { name: "diamond", price: 2700, quantity: 3 },
//   { name: "sapphire", price: 900, quantity: 7 },
//   { name: "ruby", price: 800, quantity: 2 },
//   { name: "sapphire", price: 1400, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   let total = 0;
//   for (const { name, price, quantity } of stones) {
//     if (name === stoneName) {
//       total += price * quantity;
//     }
//   }
//   return total;
// }

// console.log(calcTotalPrice(stones, "sapphire"));

// ## Example 4 - Комплексні завдання

// Створи об'єкт calculator з трьома методами
//read(a, b) - приймає два аргумента та зберігає їх як властивості об'єкта
//sum() додає властивості об'єкта між собою і повертає результат
//mult() множить властивості об'єкта між собою і повертає результат
//
//
// const calculator = {
//   read(a, b) {
//     if (isNaN(a) || isNaN(b)) {
//       console.log("Введіть, бдуь ласка, числа");
//       return;
//     }
//     this.prop1 = Number(a);
//     this.prop2 = Number(b);
//   },
//   sum() {
//     if (!this.prop1 || !this.prop2) {
//       return console.log("У нас немає даних для обчислення");
//     }
//     const result = this.prop1 + this.prop2;
//     return result;
//   },
//   mult() {
//     if (!this.prop1 || !this.prop2) {
//       return console.log("У нас немає даних для обчислення");
//     }
//     const result = this.prop1 * this.prop2;
//     return result;
//   },
// };
// // console.log(Math.max(1, 2, "8"));

// console.log("calculator:", calculator);
// calculator.read(4, "aaa9");
// console.log("calculator.sum()", calculator.sum());
// console.log("calculator.mult()", calculator.mult());

// ## Example 5 - Комплексні завдання

// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт `account`
// в якому необхідно реалізувати методи для роботи з балансом та історією
// транзакцій.

//   Типів транзакцій всього два.
//   Можна покласти чи зняти гроші з рахунку.

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */
//1 variable
// const account = {
//   //   // Поточний баланс рахунку
//   balance: 0,

//   //   // Історія транзакцій
//   transactions: [
//     {
//       amount: 150,
//       type: "deposit",
//       id: 0.7557249053527564,
//     },
//     {
//       amount: 550,
//       type: "deposit",
//       id: 0.6208356631162801,
//     },
//     {
//       amount: 550,
//       type: "deposit",
//       id: 0.37370657930144136,
//     },
//     {
//       amount: 550,
//       type: "deposit",
//       id: 0.653129863770676,
//     },
//     {
//       amount: -400,
//       type: "withdraw",
//       id: 0.9443966193853066,
//     },
//     {
//       amount: -350,
//       type: "withdraw",
//       id: 0.09924677740566068,
//     },
//     {
//       amount: -710,
//       type: "withdraw",
//       id: 0.3191312221336464,
//     },
//   ],

//   //   /*
//   //    * Метод створює та повертає об'єкт транзакції.
//   //    * Приймає суму та тип транзакції.
//   //    */
//   createTransaction(amount, type) {
//     const id = Math.random();
//     const transaction = {
//       amount,
//       type,
//       id,
//     };
//     return transaction;
//   },

//   //   /*
//   //    * Метод, що відповідає за додавання суми до балансу.
//   //    * Приймає суму транзакції.
//   //    * Викликає createTransaction для створення об'єкта транзакції
//   //    * після чого додає його до історії транзакцій
//   //    */
//   deposit(amount) {
//     if (isNaN(amount)) {
//       console.log("Введіть, будь ласка, число");
//       return;
//     }

//     const normalizeAmount = Number(amount);
//     const type =
//       normalizeAmount > 0 ? Transaction.DEPOSIT : Transaction.WITHDRAW;

//     const transaction = this.createTransaction(normalizeAmount, type);
//     this.transactions.push(transaction);
//     this.balance += normalizeAmount;
//   },

//   //   /*
//   //    * Метод, що відповідає за зняття суми з балансу.
//   //    * Приймає суму транзакції.
//   //    * Викликає createTransaction для створення об'єкта транзакції
//   //    * після чого додає його до історії транзакцій.
//   //    *
//   //    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//   //    * про те, що зняття такої суми не можливе, недостатньо коштів.
//   //    */
//   withdraw(amount) {
//     if (isNaN(amount)) {
//       console.log("Введіть, будь ласка, число");
//       return;
//     }
//     const currentBalance = this.getBalance();

//     if (currentBalance + Number(amount) < 0) {
//       console.log("У вас недостатньо коштів на рахунку");
//       return;
//     }

//     const type = amount > 0 ? Transaction.DEPOSIT : Transaction.WITHDRAW;
//     const transaction = this.createTransaction(amount, type);
//     this.transactions.push(transaction);
//     this.balance += amount;
//   },

//   //   /*
//   //    * Метод повертає поточний баланс
//   //    */
//   getBalance() {
//     return this.balance;
//   },

//   //   /*
//   //    * Метод шукає та повертає об'єкт транзакції по id
//   //    */
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//   },

//   //   /*
//   //    * Метод повертає кількість коштів
//   //    * певного типу транзакції з усієї історії транзакцій
//   //    */
//   getTransactionTotal(type) {
//     let result = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         result += transaction.amount;
//       }
//     }
//     return result;
//   },
// };

// account.deposit(150);
// account.deposit(550);
// account.deposit(550);
// account.deposit(550);
// console.log(account.balance);
// account.withdraw(-400);
// account.withdraw(-350);
// account.withdraw(-710);
// console.log(account.balance);
// console.log(
//   'account.getTransactionTotal("deposit")',
//   account.getTransactionTotal("deposit")
// );
// console.log(
//   "account.getTransactionDetails(0.653129863770676)",
//   account.getTransactionDetails(0.653129863770676)
// );

//2 variable
// const account = {
//   //   // Поточний баланс рахунку
//   balance: 0,

//   //   // Історія транзакцій
//   transactions: [
//     {
//       amount: 150,
//       type: "deposit",
//       id: 0.7557249053527564,
//     },
//     {
//       amount: 550,
//       type: "deposit",
//       id: 0.6208356631162801,
//     },
//     {
//       amount: 550,
//       type: "deposit",
//       id: 0.37370657930144136,
//     },
//     {
//       amount: 550,
//       type: "deposit",
//       id: 0.653129863770676,
//     },
//     {
//       amount: -400,
//       type: "withdraw",
//       id: 0.9443966193853066,
//     },
//     {
//       amount: -350,
//       type: "withdraw",
//       id: 0.09924677740566068,
//     },
//     {
//       amount: -710,
//       type: "withdraw",
//       id: 0.3191312221336464,
//     },
//   ],

//   //   /*
//   //    * Метод створює та повертає об'єкт транзакції.
//   //    * Приймає суму та тип транзакції.
//   //    */
//   createTransaction(amount, type) {
//     const id = Math.random();
//     const transaction = {
//       amount,
//       type,
//       id,
//     };
//     return transaction;
//   },

//   //   /*
//   //    * Метод, що відповідає за додавання суми до балансу.
//   //    * Приймає суму транзакції.
//   //    * Викликає createTransaction для створення об'єкта транзакції
//   //    * після чого додає його до історії транзакцій
//   //    */
//   deposit(amount) {
//     if (isNaN(amount)) {
//       console.log("Введіть, будь ласка, число");
//       return;
//     }

//     const normalizeAmount = Number(amount);
//     const type = Transaction.DEPOSIT;

//     const transaction = this.createTransaction(normalizeAmount, type);
//     this.transactions.push(transaction);
//     this.balance += normalizeAmount;
//   },

//   //   /*
//   //    * Метод, що відповідає за зняття суми з балансу.
//   //    * Приймає суму транзакції.
//   //    * Викликає createTransaction для створення об'єкта транзакції
//   //    * після чого додає його до історії транзакцій.
//   //    *
//   //    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//   //    * про те, що зняття такої суми не можливе, недостатньо коштів.
//   //    */
//   withdraw(amount) {
//     if (isNaN(amount)) {
//       console.log("Введіть, будь ласка, число");
//       return;
//     }
//     const currentBalance = this.getBalance();

//     if (currentBalance < Number(amount)) {
//       console.log("У вас недостатньо коштів на рахунку");
//       return;
//     }

//     const type = Transaction.WITHDRAW;
//     const transaction = this.createTransaction(amount, type);
//     this.transactions.push(transaction);
//     this.balance -= amount;
//   },

//   //   /*
//   //    * Метод повертає поточний баланс
//   //    */
//   getBalance() {
//     return this.balance;
//   },

//   //   /*
//   //    * Метод шукає та повертає об'єкт транзакції по id
//   //    */
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//   },

//   //   /*
//   //    * Метод повертає кількість коштів
//   //    * певного типу транзакції з усієї історії транзакцій
//   //    */
//   getTransactionTotal(type) {
//     let result = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         result += transaction.amount;
//       }
//     }
//     return result;
//   },
// };

// account.deposit(150);
// account.deposit(550);
// // account.deposit(550);
// // account.deposit(550);
// console.log(account.balance);
// account.withdraw(400);
// // account.withdraw(350);
// // account.withdraw(710);
// console.log(account.balance);
// console.log(
//   'account.getTransactionTotal("deposit")',
//   account.getTransactionTotal("deposit")
// );
// console.log(
//   "account.getTransactionDetails(0.653129863770676)",
//   account.getTransactionDetails(0.653129863770676)
// );

const friends = {};
const parents = {};

const user = {
  name: "Mango",
  age: 25,
};
user[friends] = friends;
user[parents] = parents;

console.log(user);
