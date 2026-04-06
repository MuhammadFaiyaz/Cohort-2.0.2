/**একটি Person class তৈরি করো
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

/**Car class তৈরি করো
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

/**Student class

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

/** BankAccount class
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

/**Rectangle class

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
let rect1 = new Rectangle(12, 20)
console.log(rect1.area())
console.log(rect1.perimeter())
/** */
/** */
/** */
/** */
/** */
/** */
/** */
