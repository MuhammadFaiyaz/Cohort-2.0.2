/* SECTION 1: Objects and OOPS Thinking (Foundation)
	1.	Create a user object that stores name and email and has a login method which prints “User logged in”.
	2.	Imagine you now have 5 users.
First, think how you would manage them without using a class.
Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.
	3.	Create a product object that stores name and price and has a method which returns the final price after discount.

The goal of this section is to understand why keeping data and behavior together makes code easier to manage.
*/
let user = {
  name: "Muhammad Faiyaz",
  email: "faiyaz@example.com",
  login: function () {
    console.log("User logged in");
  },
};
let user2 = {
  name: "Ali Khan",
  email: "ali@example.com",
  login: function () {
    console.log("User logged in");
  },
};
let user3 = {
  name: "Hasan",
  email: "hasan@example.com",
  login: function () {
    console.log("User logged in");
  },
};
let user4 = {
  name: "Zainab",
  email: "zainab@example.com",
  login: function () {
    console.log("User logged in");
  },
};
let user5 = {
  name: "Ayesha",
  email: "ayesha@example.com",
  login: function () {
    console.log("User logged in");
  },
};

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   login() {
//     console.log("User logged in");
//   }
// }

// let user01 = new User("Muhammad Faiyaz", "faiyaz@example.com");
// let user02 = new User("Ali Khan", "ali@example.com");
// let user03 = new User("Hasan", "hasan@example.com");
// let user04 = new User("Zainab", "zainab@example.com");
// let user05 = new User("Ayesha", "ayesha@example.com");

let product = {
  name: "Chocolate",
  price: 100,
  discount: 20,
  finalPrice: function () {
    return this.price - this.discount;
  },
};
console.log(product.finalPrice());
/*
⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻

SECTION 2: Classes and Objects
	4.	Create a Car class with the following:
brand
speed
a drive method that prints the car brand and speed
	5.	Create two different car objects from the same class and verify that their data is different.
	6.	Answer this in your own words:
If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?
*/
class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  drive() {
    return `The ${this.brand} is driving at ${this.speed} km/h`;
  }
}

let car1 = new Car("Toyota", 120);
let car2 = new Car("Honda", 150);
console.log(car1.drive());
console.log(car2.drive());

// If classes did not exist, then it will be difficult to manage the code as we will have to create separate objects for each car and write the same logic for each object. This will lead to code duplication and make it harder to maintain and update the code in the future. With classes, we can create a blueprint for the car and easily create multiple car objects with different data without having to rewrite the logic.

/*
⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻

SECTION 3: Constructor and this keyword
	7.	Create a Student class whose constructor accepts name and roll number.
Add a method introduce that prints both values.
	8.	Inside the constructor, set values using this.
Then try removing this and notice what error occurs and why.
*/

class Student {
  constructor(name, roll) {
    name = name;
    roll = roll;
  }
  introduce() {
    console.log("Name:", this.name, "| Roll:", this.roll);
  }
}
let stud1 = new Student("faiyaz", 1);
stud1.introduce();

//  it is totally logical error because when we remove this keyword from the construcor we get undefined.  Because as a result wwe are not assigning new value to hte obj properties rather we are just creating new local variables inside the constructor.

/**9.	Create an object with two methods:
One method using a normal function & One method using an arrow function. Inside both, print this and observe the difference.

The goal is to clearly understand how this works and when it changes. */

let abcd = {
  a: function () {
    console.log(this);
  },
  b: () => {
    console.log(this);
  },
};
abcd.a();
abcd.b();

/*
⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻

SECTION 4: Constructor Functions and Prototypes
	10.	Create a User constructor function (do not use class syntax).
	11.	Add a login method in two ways:
First, inside the constructor
Then, move the method to the prototype
*/

function User(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
  // this.login = function () {
  //   console.log("User logged in");
  // }
}
User.prototype.login = function () {
  return `${this.name} is ${this.age} and his Email is ${this.email}`;
};
let user1 = new User("Faiyaz", 28, "faiyaz@example.com");
console.log(user1.login());

/**12.	Create two User objects and compare their login methods using equality.
Explain why the result is true or false.

The purpose here is to understand how prototypes help share behavior efficiently. */

let user101 = {
  name: "Ayan",
  email: "a@a.a",
  login: function () {
    return "user logged in";
  },
};
let user102 = {
  name: "rayan",
  email: "b@a.a",
  login: function () {
    return "user logged in";
  },
};
console.log(user101.login === user102.login); // the explaination of me is the answer will be  false. Because though these two are looking same function, but they are different porperties of different function objects.

/*
⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻

SECTION 5: call, apply, bind
	13.	Create a function that prints this.name. */
function name() {
  console.log(this.name); // output is undefined.
}
name();

/*
	14.	Create an object that contains a name property. Use call to run the function using the object.
Use apply to run the function using the object. Use bind to create a new function and then call it */

let learner = {
  name: "Rafi",
  age: 22,
};

function introduce(language, hobby) {
  console.log(
    `${this.name} is learning ${language} in the age of ${this.age}. He also enjoy ${hobby}. `,
  );
}
// introduce.call(learner, 'Bangla');

// introduce.apply(learner, ["Bangla", "reading"])

let bindFunction = introduce.bind(learner);
bindFunction("Bangla", "reading");

/*
	15.	Borrow a method from one object and run it for another object using call.
The goal is to understand how this can be manually controlled. */
let userA = {
  name: "Ayan",
  email: "a@a.a",
  login: function () {
    console.log(`${this.name} logged in`);
  },
};

let userB = {
  name: "Rayan",
  email: "b@a.a",
};

userA.login.call(userB);  // this technique is super handy when you want ot reuse one method of other objects without repeating it.
