'use strict';
// ** Constructor function
// **Important: Function Constructors are not really feature of JavaScript
// ** they are simply a pattern that has been developed by other developers
// We can use constructor function to build an object using a function
// a constructor function is a completely normal function
// the difference between constructor function and regular function is that
// we call a constructor function with the new operator

// An arrow function will not work as a function constructor because
// it doesn't have the this keyword and we need that keyword.
// below is the constructor function (blueprint as learnt in the lecture)
const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   adding methods
  //  never do this : you should never create methods inside of a constructor function
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

// Nelson , eminem and luffy are the instance of Person
const nelson = new Person('Nelson', 1999);
console.log(nelson);
// Behind the scenes there have been 4 steps
// all of this happens because we are calling the function with the new operator here.
//  1. New {} object is created
// 2. function is called, and the this keyword is the newly created object. this = {}
// 3. {} linked (__proto__ property) to prototype
// 4. function automatically returns that empty object from the beginning {}. But
// actually at this point the object no longer needs to be empty. And this is actually  the
// trick to make the constructor function work

const eminem = new Person('Eminem', 1972);
const luffy = new Person('Luffy', 2000);
console.log(eminem, luffy);

const s = 'S';

console.log(nelson instanceof Person);
console.log(s instanceof Person);

// static method
Person.hey = function () {
  console.log(`Hey there 😎😎`);
};

Person.hey();
