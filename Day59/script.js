/** 1. একটি Person class তৈরি করো
properties: name, age
method: introduce() → "Hi, I'm X and I'm Y years old" */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
  }
}
let person1 = new Person("Ahmad", 25);
person1.introduce();

/** 2. Car class তৈরি করো
constructor: brand, price
method: getDetails() */
class Car {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }
  getDetails() {
    return `Brand: ${this.brand}, Price: ${this.price}`;
  }
}

let car1 = new Car("BMW", 6500000);
console.log(car1.getDetails());

/** 3. Student class

properties: name, marks (array)
method: getAverage() */
class Student {
  constructor(name, marks = []) {
    this.name = name;
    this.marks = marks;
  }
  getAverage() {
    let sum = 0;
    for (let i = 0; i < this.marks.length; i++) {
      sum += this.marks[i];
    }
    let avg = sum / this.marks.length;
    return `My name is ${this.name} and I have got ${avg} in average`;
  }
}
let st1 = new Student("Muhammad", [80, 90, 100]);
console.log(st1.getAverage());

/** 4. BankAccount class
balance initialize হবে 0
method: deposit(amount), withdraw(amount)*/

class BankAccount {
  constructor() {
    this.balance = 0;
  }
  deposit(amount) {
    if (amount <= 0) {
      console.log("insufficient fund");
      return;
    }
    this.balance += amount;
    console.log(`Deposited: ${amount}`);
  }
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient balance");
    } else {
      this.balance -= amount;
      console.log(`Withdrawed: ${amount}`);
    }
  }
}
let depositor1 = new BankAccount();
depositor1.deposit(500);
depositor1.withdraw(304);
console.log(depositor1);

/** 5. Rectangle class

method: area(), perimeter() */
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.height * this.width;
  }
  perimeter() {
    return 2 * (this.height + this.width);
  }
}
let rect1 = new Rectangle(12, 20);
console.log(rect1.area());
console.log(rect1.perimeter());

/** 6. Employee class

salary property
method: getAnnualSalary()*/
// class Employee {
//   constructor(name, salary) {
//     this.name = name;
//     this.salary = salary;
//   }
//   getAnnualSalary() {
//     return `${this.name} gets ${this.salary * 12} in year`;
//   }
// }
// let employee1 = new Employee("Faiyaz", 85000);
// console.log(employee1.getAnnualSalary());

/** 7. Book class
constructor: title, author
method: getSummary() */

// class Book {
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//   }
//   getSummary() {
//     return `${this.title} -> ${this.author}`;
//   }
// }
// let b1 = new Book("Faiyaz", "Hunna Libasullakum");
// console.log(b1.getSummary());

/** 8. Counter class
method: increment(), decrement(), reset()*/
// class Counter {
//   constructor(count = 0) {
//     this.count = count;
//   }
//   increment() {
//     return ++this.count;
//   }
//   decrement() {
//     return --this.count;
//   }
//   reset() {
//     return (this.count = 0);
//   }
// }

// let c1 = new Counter(43);
// console.log(c1.increment());
// console.log(c1.decrement());
// console.log(c1.reset());

/** 9. User class
property: isLoggedIn
method: login(), logout()*/

// class User {
//   constructor(isLoggedIn = false) {
//     this.isLoggedIn = isLoggedIn;
//   }
//   login() {
//     this.isLoggedIn = true;
//     console.log("Logged in");
//   }
//   logout() {
//     this.isLoggedIn = false;
//     console.log("Logged out");
//   }
// }
// let user1 = new User();

// user1.login();
// console.log(user1.isLoggedIn);

// user1.logout();
// console.log(user1.isLoggedIn);

/** 10. Product class
price + discount
method: getFinalPrice()*/
// class Product {
//   constructor(price, discount) {
//     this.price = price;
//     this.discount = discount;
//   }
//   getFinalPrice() {
//     return this.price - (this.price * this.discount) / 100;
//   }
// }
// let p1 = new Product(500, 20);
// console.log(p1.getFinalPrice());

/** 11. একটি function লেখো যা 2 second পরে "Hello World" print করবে (setTimeout use করে)*/
// function print() {
//   setTimeout(() => {
//     console.log("Hello World");
//   }, 2000);
// }
// print();

/** 12. Promise তৈরি করো
resolve after 1 second → "Success"*/

// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Succcess");
//   }, 1000);
// });
// myPromise.then((res) => console.log(res));

/** 13. একটি Promise reject করো
error message: "Something went wrong"*/
// let myPromise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Something went wrong");
//   }, 1000);
// });
// myPromise2.catch((rej) => console.log(rej));

/** 14. fetchData() function বানাও
Promise return করবে (fake data)*/
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let data = {
//         name: "Faiyaz",
//         age: 22,
//       };
//       resolve(data);
//     }, 3000);
//   });
// }
// fetchData().then((res) => console.log(res));

/** 15. .then() দিয়ে data handle করো*/
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let data = {
//         name: "Faiyaz",
//         age: 22,
//       };
//       resolve(data);
//     }, 3000);
//   });
// }
// fetchData().then((res) => {
//   console.log(`My name is ${res.name} and I'm ${res.age} years old`);
// });

/** 16. async function getData()
await দিয়ে Promise handle করো*/
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("success & sucessfully handled");
//     }, 1000);
//   });
// }

// async function getData() {
//   let promise = await fetchData();
//   console.log(promise);
// }
// getData();

/** 17. try-catch use করে error handle করো*/
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let sucess = false;
//       if (sucess) {
//         resolve("Data fetched successfully");
//       } else {
//         reject("Error fetching data");
//       }
//     }, 2000);
//   });
// }

// async function getData() {
//   try {
//     let res = await fetchData();
//     console.log(res);
//   } catch (err) {
//     console.log("Caught Error:", err);
//   }
// }
// getData();

/** 18. 2টা async function call করে result combine করো*/
// async function userData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ name: "Faiyaz" });
//     }, 1000);
//   });
// }
// async function userPost() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         "Man's age lives in his body.",
//         "Woman's age reflects on her body.",
//         "If I say I'm young then I am young.",
//       ]);
//     }, 1000);
//   });
// }

// async function getCombineData() {
//   let user = await userData();
//   let posts = await userPost();
//   let result;
// }

/** 19. delay function বানাও
await delay(2000)*/

// function delay(ms) {
//   return new Promise((resolve)=>setTimeout(resolve,ms));
// }

// async function test() {
//   console.log('start');
//   await delay(2000);
//   console.log('After 2 seconds')
// }
// test()

/** 20. API simulate করো
async function → user data return করবে
print: name, email*/

async function getData2() {
  try {
    let response = await fetch("https://randomuser.me/api/");
    if (!response.ok) throw new Error("Something went wrong");
    let data = await response.json();
    console.log(data.results[0].name.first, data.results[0].email);
  } catch (error) {
    console.log("Error:", error);
  }
}
getData2();

/** 21. Class + Async combine করো
👉 UserService class

method: getUsers() (Promise return করবে)
async/await দিয়ে call করো*/

class UserService {
  async getUsers() {
    try {
      let response = await fetch("https://randomuser.me/api/");
      if (!response.ok) throw new Error("Something went wrong");
      let data = await response.json();
      return data;
    } catch (error) {
      console.log("Error:", error);
    }
  }
}

async function main() {
  let userService = new UserService();
  try {
    let user = await userService.getUsers();
    console.log(user.results[0].login.password);
  } catch (error) {
    console.log("Error:", error);
  }
}
main();
