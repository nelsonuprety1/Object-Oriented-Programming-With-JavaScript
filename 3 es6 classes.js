'use strict';
// ES6 class

// ** Class expression
// Classes are just a special type of functions
// const PersonCL = class {};

// ** Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // **Instance methods
  //  ** Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // static method
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

const zoro = new PersonCl('Zoro Roronoa', 1999);
console.log(zoro);
zoro.calcAge();
console.log(zoro.age);

console.log(zoro.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

zoro.greet();

PersonCl.hey();
// ** IMPORTANT
// 1) Classes are not hoisted(using them before they are declared)
// 2) Classes are also first-class citizens. It means we can pass them into functions and return them from functions
// 3) The body of the classes are always executed in strict mode
