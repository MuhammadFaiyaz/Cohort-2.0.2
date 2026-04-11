/**SECTION 1: OOPS Thinking with Objects
	1.	Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.
    2.	Add one more method to the same object that increases the price by 10 percent. 
    3.	Now imagine you need 10 laptops with same structure but different data.
Write down (in words or code) what problems you will face if you keep using plain objects. */

let laptop = {
  brand: "Dell",
  price: 17500,
  start: function () {
    console.log("Laptop started");
  },
  increasePrice: function () {
    return `${(this.price * 10) / 100}+${this.price}`;
  },
}; // if I keep creating plain objects for each laptop, I have to write the same code repeatedly and it will be not an optimal approach as well as make the whole code messy and as well as difficult to manage or update any value their's property.

/*
⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻

SECTION 2: Classes and Objects (Reinforcement)
	4.	Create a class named Employee that stores:
name
salary

Add a method showDetails that prints name and salary.
	5.	Create three employee objects from the same class and verify that modifying one employee does not affect the others.
	6.	Explain in your own words:
Why is class considered a better option than writing similar objects again and again? */

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  showDetails() {
    console.log(this.name + " -> " + this.salary);
  }
}
let em1 = new Employee("Jabir", 23000);
let em2 = new Employee("Fahad", 33000);
let em3 = new Employee("Nayeem", 45000);
em2.name = "Faiyaz";
em1.showDetails();
em2.showDetails();
em3.showDetails(); // If I write the same code repeatedly without using classes, it will be too much difficult for me as developer to maintain the code. THere will be a high chance of making errors as I have to modify them manually. But using class, I get the power of reusable structure, scalability, Clarity and maintainability. Besides using prototype we can use shared memory, without duplicating any property in each object.

/*
⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻

SECTION 3: Constructor and Initialization
	7.	Create a class named BankAccount.
Its constructor should accept accountHolderName and balance.
	8.	Inside the constructor, store both values using this.
	9.	Add a method deposit(amount) that increases the balance.
	10.	Create two bank accounts and deposit money into only one.
Observe and explain why the second account is not affected. */

class BankAccount {
  constructor(accountHolderName, balance = 0) {
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
}
let ba1 = new BankAccount("Faiyaz", 55000);
let ba2 = new BankAccount("Usman", 40000);
ba1.deposit(1700);
console.log(ba1, ba2);

// There are two instances or separate obj created from same class. The second account is not affected because we only modified the first one only.

/*
⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻

SECTION 4: Understanding this (Very Important)
	11.	Create an object named profile with a property username and a method printName that logs this.username.
	12.	Call the method normally and observe the output.
	13.	Store the method in a separate variable and call it.
Observe what happens to this and explain why.
	14.	Modify the code so that this works correctly again. */

let profile = {
  username: "Fahim",
  printName: function () {
    console.log(this.username);
  },
};
profile.printName();

let fn = profile.printName;
fn();

// if we called fn() without an obj, it will give undefined as in strict mode it refers to undefined. But in the non strict mode this defaults window obj in global and empty on=bj in node.js. Since the global obj does not contain any username, it is giving us undefined.

/*
⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻

SECTION 5: Constructor Function and Prototype
	15.	Create a constructor function called Vehicle that accepts type and wheels.
	16.	Add a method describe inside the constructor and observe memory behavior when multiple objects are created.
	17.	Move the same method to Vehicle.prototype and repeat the test.
	18.	Explain why the prototype approach is preferred.*/

function Vehicle(type, wheels) {
  this.type = type;
  this.wheels = wheels;
  //   this.describe = function () {
  //     console.log(this.type + " has " + this.wheels + " wheels.");
  //   };
}
Vehicle.prototype.describe = function () {
  console.log(this.type + " has " + this.wheels + " wheels.");
};

let car = new Vehicle("Car", 4);
let bike = new Vehicle("Bike", 2);
car.describe();
bike.describe();

//  The prototype is the preffered approach since it aloos to use shared memory for the method, where as in the first approach, each object will have its own copy of the method, which is not memory efficient. By using prototype, we can ensure that all instances of Vehicle share the same describe method, which saves memory and allows for easier maintenance. If we need to update the describe method, we can do it in one place (the prototype) rather than updating it for each instance.

/*
⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻

SECTION 6: call Method Practice
	19.	Create a function showBrand that prints this.brand.
	20.	Create two different objects with brand values.
	21.	Use call to execute showBrand for both objects.
	22.	Explain what problem call is solving here. */

function showBrand() {
  console.log(this.brand);
}
let b1 = {
  brand: "Toyota",
};
let b2 = {
  brand: "Maruti",
};
showBrand.call(b1);
showBrand.call(b2);

// Here showBrand is a regular function, by dafault this will be undefined in strict mode or global if the funciton is called. Using call method we are explicitly set this to the desired obj we want. as a result one function is working for multiple objs without duplication. This demonstrates how functions can be reused across different objects by controlling the value of this.

/*
⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻

SECTION 7: apply Method Practice
	23.	Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name.
	24.	Create an object with a name property.
	25.	Use apply to call introduce using the object and an array of arguments.
	26.	Explain in simple words how apply differs from call. */

function introduce(city, role) {
  console.log(this.name, city, role);
}

let obj = {
  name: "Chandpur",
};
introduce.apply(obj, [true, "City of Hilsha"]);
// call and apply both allows to run a function without a specific value of this keyword. In call we passed the arguments one by one, whereas in apply we passed the arguments as an array. Its the key difference between call and apply.

/*
⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻

SECTION 8: bind Method Practice
	27.	Create a function greet that prints “Hello” followed by this.name.
	28.	Bind this function to an object and store the returned function in a variable.
	29.	Call the bound function later and observe the output.
	30.	Explain why bind is useful when functions are executed later or inside callbacks. */

function greet() {
  console.log("Hello, " + this.name);
}

let myName = {
  name: "Faiyaz",
};
let bindGreet = greet.bind(myName);
bindGreet();

/** ⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻
 * Exercise 1 — Very Easy
Task: Make a function called afterDelay.

⏱️ It should take two things:
👉 A time in milliseconds
👉 A callback function

🕒 After the given time passes, run the callback.
💬 Inside the callback, print "Callback executed".
 */

function afterDelay(ms, cb) {
  setTimeout(() => {
    cb();
  }, ms);
}
afterDelay(2000, function () {
  console.log("Callback executed");
});

/* ⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻
Exercise 2 — Intermediate
Task: Make a function called getUser.

👤 getUser takes a username.
🕒 After 1 second, it gives a callback an object with:
👉 id  
👉 username

➡️ Inside that callback, call another function getUserPosts.

📄 getUserPosts should:
👉 Take a userId  
🕒 After 1 second, give a callback an array of posts

✅ Final output:
👤 Print the user’s username  
📄 Then print their posts

Goal: Practice how one async result flows into the next async function (callback chaining).*/
function getUser(username, cb) {
  console.log("...laoding username");
  setTimeout(() => {
    cb({ id: 101, username: username });
  }, 1000);
}
function getUserPosts(userId, cb) {
  console.log("...loading userId");
  setTimeout(() => {
    cb([
      "Post 1: Learning callbacks",
      "Post 2: Practicing JavaScript",
      "Post 3: Async flow is tricky!",
    ]);
  }, 1000);
}

getUser("Muhammad Faiyaz ", function (user) {
  console.log("Username:", user.username);
  getUserPosts(user.id, function (posts) {
    console.log("Posts:", posts);
  });
});
/* ⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻
Exercise 3 — Intermediate
Task: Make three functions:

1️⃣ loginUser  
🕒 After 1 second, give a callback a user object

2️⃣ fetchPermissions  
👉 Takes a userId  
🕒 After 1 second, give a callback a permissions array

3️⃣ loadDashboard  
👉 Takes permissions  
🕒 After 1 second, give a callback "Dashboard loaded"

➡️ Flow:
🔑 First call loginUser  
🔑 Inside it, call fetchPermissions  
🔑 Inside that, call loadDashboard  
✅ Finally, print the result in the console

Goal: Feel how nested callbacks work — this is what later becomes “callback hell.” */
function loginUser(cb) {
  setTimeout(() => {
    cb({ id: 101, username: "Faiyaz" });
  }, 1000);
}
function fetchPermissions(userId, cb) {
  setTimeout(() => {
    cb(["read", "write", "delete"]);
  }, 1000);
}
function loadDashboard(permissions, cb) {
  setTimeout(() => {
    cb("Dashboard loaded");
  }, 1000);
}

loginUser(function (user) {
  console.log("User logged in:", user.username);
  fetchPermissions(user.id, function (permissions) {
    console.log("Permissions:", permissions);
    loadDashboard(permissions, function (msg) {
      console.log(msg);
    });
  });
});
