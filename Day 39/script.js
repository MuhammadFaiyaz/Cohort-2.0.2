// # 🟢 Level 1 – Basic Function, Array & Object Code Tasks (Easy)

// 1. Write a function `sayHello()` that prints `"Hello JavaScript"`.
function sayHello() {
  console.log("Hello JavaScript");
}
sayHello();

// 2. Create a function `add(a, b)` that returns their sum and log the result.
let sum = 0;
function add(a, b) {
  sum = a + b;
  return sum;
}
console.log(add(5, 7));

// 3. Write a function with a default parameter `name = "Guest"` that prints `"Hi <name>"`.
function name(name = "Guest") {
  console.log("Hi", name);
}
name("Faiyaz");
name();

// 4. Use rest parameters to make a function that adds unlimited numbers.
function unlimitedNumbers(a, b, c, ...params) {
  console.log(a, b, c, params);
}
unlimitedNumbers(
  12,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  46,
  13,
  43,
  6,
  5,
  34,
  2,
  43,
  5,
  5466,
);

// 5. Create an IIFE that prints `"I run instantly!"`.
(function () {
  console.log("I run instantly!");
})();

// 6. Make a nested function where the inner one prints a variable from the outer one.
function outer() {
  let school = "Sheryians Coding School";
  function inner() {
    console.log(school);
  }
  inner();
}
outer();

// 7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.
let arr = ["apple", "mango", "guava", "plum", "date"];
arr.push("jackfruit");
console.log(arr);
arr.shift();
console.log(arr);

// 8. Use a `for` loop to print all elements of an array.
for (const key in arr) {
  console.log(arr[key]);
}

// 9. Create an object `person` with keys `name`, `age`, and `city`, and print each key’s value.
const person = {
  name: "Ahmad",
  age: 28,
  city: "Madinah",
};

for (const key in person) {
  console.log(person[key]);
}

// 10. Use `setTimeout()` to log `"Time’s up!"` after 2 seconds.
setTimeout(() => {
  console.log("Time’s up!");
}, 2000);

// ---

// # 🟡 Level 2 – Functional Thinking & Logic Tasks (Intermediate)

// 1. Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.
function runTwice(fn) {
  fn();
  fn();
}
runTwice(function name() {
  console.log("Hi there.");
});

// 2. Create one pure function that always returns the same output for a given input, and one impure function using a global variable.
function pureFunc(a, b) {
  let sum = a + b;
  return sum;
}
console.log(pureFunc(5, 10));

let total = 0;
function impureFunc(val) {
  total += val;
  return total;
}
console.log(impureFunc(10));
console.log(impureFunc(10));
console.log(impureFunc(10));

// 3. Write a function that uses object destructuring inside parameters to extract and print `name` and `age`.
function individual({ name, age }) {
  console.log(name, age);
}
individual({ name: "Sahl", age: 35 });
individual({ name: "Raihan", age: 15 });
individual({ name: "Rimon", age: 23 });
individual({ name: "Mishkat", age: 24 });

// 4. Demonstrate the difference between normal function and arrow function when used as object methods (the `this` issue).
// normal function has it's own this but arrow function borrow this form its parent (lexical scope).

// 5. Given an array of numbers, use `map()` to create a new array where each number is squared.
const numbers = [1, 2, 3, 4, 5];
let squareNum = numbers.map((val) => {
  return val * val;
});
console.log(squareNum);

// 6. Use `filter()` to get only even numbers from an array.
const serialNumsFromTwenty = [
  20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
];
const evenSerial = serialNumsFromTwenty.filter((val) => {
  if (val % 2 === 0) {
    return val;
  }
});
console.log(evenSerial);

// 7. Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`.
let salary = [1000, 2000, 3000];
let summation = salary.reduce((acc, val) => {
  return acc + val;
}, 0);
console.log(summation);

// 8. Create an array of names and use `some()` and `every()` to test a condition (e.g., all names longer than 3 chars).
const names = [
  "Ahmed",
  "Fatima",
  "Hassan",
  "Ayesha",
  "Omar",
  "Zainab",
  "Khalid",
  "Samira",
  "Ibrahim",
  "Saeed",
];
const hasLongName = names.some((val) => val.length > 3);
console.log(hasLongName);

const allLongName = names.every((val) => val.length > 3);
console.log(allLongName);

// 9. Create an object `user` and test the behavior of `Object.freeze()` and `Object.seal()` by adding/changing keys.
const user = {
  name: "Faiyaz",
  age: 25,
  email: "faiyaz@example.com",
  isActive: true,
  hobbies: ["coding", "reading", "gaming"],
};
Object.freeze(user);
user.name = "Muhammad";
user.marriedStatus = "unmarried";
console.log(user);

const user2 = {
  name: "Faiyaz",
  age: 25,
  email: "faiyaz@example.com",
  isActive: true,
  hobbies: ["coding", "reading", "gaming"],
};
Object.seal(user2);
user2.name = "Muhammad";
user2.marriedStatus = "unmarried";
console.log(user2);

// 10. Create a nested object (`user → address → city`) and access the city name inside it.
const user3 = {
  name: "Faiyaz",
  age: 25,
  email: "faiyaz@example.com",
  address: {
    street: "123 Main St",
    city: "Dhaka",
    country: "Bangladesh",
  },
};
const { city } = user3.address;
console.log(city);
