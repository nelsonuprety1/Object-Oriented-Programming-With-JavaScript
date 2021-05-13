'use strict';
// Object.create
// We can use object.create to essentially manually set the prototype
// of an object, to any other object that we want.
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const eminelson = Object.create(PersonProto);
console.log(eminelson);
eminelson.name = 'Eminelson';
eminelson.birthYear = 2002;
eminelson.calcAge();

console.log(eminelson.__proto__ === PersonProto);

const sara = Object.create(PersonProto);
sara.init('Sarah', 1979);
sara.calcAge();
