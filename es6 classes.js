'use strict';
// ES6 class

// ** Class expression
// Classes are just a special type of functions
// const PersonCL = class {};

// ** Class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //  ** Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const zoro = new PersonCl('Zoro', 1999);
console.log(zoro);
zoro.calcAge();

console.log(zoro.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

zoro.greet();

// ** IMPORTANT
// 1) Classes are not hoisted(using them before they are declared)
// 2) Classes are also first-class citizens. It means we can pass them into functions and return them from functions
// 3) The body of the classes are always executed in strict mode
