'use strict';
// ** Prototypes

const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Nelson , eminem and luffy are the instance of Person
const nelson = new Person('Nelson', 1999);
console.log(nelson);

const eminem = new Person('Eminem', 1972);
const luffy = new Person('Luffy', 2000);
console.log(eminem, luffy);

console.log(nelson instanceof Person);

// ** Prototypes
// All the objects are created through the constructor function (Person) will inherit,
// so they will get access to all the methods and properties that are defined on this prototype property
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
// the this keyword is set to the object thats calling this method and here thats nelson

nelson.calcAge();

console.log(nelson.__proto__);
console.log(nelson.__proto__ === Person.prototype);
//  ** Person.prototype here is actually not the prototype of person
// ** But instead, it is what's gonna be used as the prototype of all the objects that are created
// ** with the person  constructor function

// True
console.log(Person.prototype.isPrototypeOf(nelson));
// false
console.log(Person.prototype.isPrototypeOf(Person));

// We can also set properties on the prototype
Person.prototype.species = 'Homo Sapiens';
console.log(nelson.species, eminem.species);

// true
console.log(nelson.hasOwnProperty('firstName'));
// false because this species property is not inside nelson object. It simply has access to it because of its prototype
console.log(nelson.hasOwnProperty('species'));

console.log(nelson.__proto__);
// Object.prototype (top of the prototype chain)
console.log(nelson.__proto__.__proto__);
console.log(nelson.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

// Prototype of array
const arr = [3, 5, 6, 7, 8, 9, 6, 9, 5]; // new Array =[]
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
