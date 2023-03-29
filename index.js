// Example 1 - Коллбек функції
// Напишіть наступні функції:

// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль
// function createProduct(obj, callback) {
//   const product = { ...obj, id: Date.now() };
//   callback(product);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   console.log(product.price * product.quantity);
// }
// createProduct({ name: "banana", price: 100, quantity: 15 }, logProduct);
// createProduct({ name: "banana", price: 100, quantity: 15 }, logTotalPrice);
// createProduct({ name: "cherry", price: 150, quantity: 2 }, logProduct);
// createProduct({ name: "cherry", price: 150, quantity: 2 }, logTotalPrice);

// Example 2 - Коллбек функції
// Додайте об'єкт account методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий та третій - коллбеки.

// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT ("Amount should not exceed {TRANSACTION_LIMIT} credits") або this.balance ("Amount can't exceed account balance of {this.balance} credits"), і onSuccess ("Account balance: {this.balance}") та зміну баланса в іншому випадку.

// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT ("Amount should not exceed {TRANSACTION_LIMIT} credits") або менше або дорівнює нулю ("Amount must be more than 0 credits"), і onSuccess ("Account balance: {this.balance}") та зміну баланса в іншому випадку.

// Рішення
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: "Jacob",
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`${amount} should not exceed ${TRANSACTION_LIMIT} credits`);
//       return;
//     }
//     if (amount > this.balance) {
//       onError(
//         `${amount} can't exceed account balance of ${this.balance} credits`
//       );
//       return;
//     }
//     this.balance -= amount;
//     onSuccess(`Account balance: ${this.balance}`);
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`${amount} should not exceed ${TRANSACTION_LIMIT} credits`);
//       return;
//     }
//     if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//       return;
//     }
//     this.balance += amount;
//     onSuccess(`Account balance: ${this.balance}`);
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ 🙂 Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
// Example 3 - Коллбек функції
//
// Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву. Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека.
// function each(array, callback) {
//   return array.map((element) => callback(element));
// }

// function double(element) {
//   return element * 2;
// }
// each([1, 2, 3, 4, 5, 6], double);
// console.log(
//   "each([1, 2, 3, 4, 5, 6], double);:",
//   each([1, 2, 3, 4, 5, 6], double)
// );

// Рішення
// function each(array, callback) {}

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );

// Example 4 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const createProduct = (partialProduct, callback) => {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// };

// const logProduct = (product) => {
//   console.log(product);
// };

// const logTotalPrice = (product) => {
//   console.log(product.price * product.quantity);
// };

// createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);
//
// Example 5 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: "Jacob",
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// const handleSuccess = (message) => {
//   console.log(`✅ Success! ${message}`);
// };
// const handleError = (message) => {
//   console.log(`❌ Error! ${message}`);
// };

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// Example 6 - Інлайн стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const each = (array, callback) => {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// };

// console.log(each([64, 49, 36, 25, 16], (value) => value * 2));
// console.log(each([64, 49, 36, 25, 16], (value) => value - 10));
// console.log(each([64, 49, 36, 25, 16], (value) => Math.sqrt(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value)));

const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// Example 7 - Метод map
// Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.

// const getModels = (cars) => cars.map(({ model }) => model);

// console.table(getModels(cars));
// Example 8 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map((element) => ({
//     ...element,
//     price: element.price - element.price * discount,
//   }));
// };

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));
// Example 9 - Метод filter
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра threshold.

// const filterByPrice = (cars, threshold) => {
//   return cars.filter((element) => element.price < threshold);
// };

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));
// Example 10 - Метод filter
// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.

// const getCarsWithDiscount = (cars) =>  cars.filter((element) => element.onSale);

// console.table(getCarsWithDiscount(cars));
// Example 11 - Метод filter
// Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається зі значенням параметра type.

// const getCarsWithType = (cars, type) => {
//   return cars.filter((element) => element.type === type);
// };

// console.table(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, "sedan"));
// Example 12 - Метод find
// const getCarByModel = (cars, model) => cars.find((el) => el.model === model);

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-9"));

// Example 13 - Метод reduce
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

// const getTotalAmount = (cars) =>
//   cars.reduce((acc, el) => (acc += el.amount), 0);

// console.log(getTotalAmount(cars));
// Example 14 - Ланцюжки методів
// Нехай функція getModelsOnSale повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі.

//1 var
// const getModelsOnSale = (cars) => {
//   return cars.filter((el) => el.onSale).map((el) => el.model);
// };

//2 var
// const getModelsOnSale = (cars) =>
//   cars.filter(({ onSale }) => onSale).map(({ model }) => model);

//3 var
// const getModelsOnSale = (cars) =>
//   cars.reduce((acc, el) => {
//     if (el.onSale) {
//       acc.push(el.model);
//     }
//     return acc;
//   }, []);
// console.table(getModelsOnSale(cars));
