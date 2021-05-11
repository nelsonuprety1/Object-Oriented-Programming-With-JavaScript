'use strict';
// Getter and Setter
// Every object in javascript can have getter and setter properties
// We call these properties accessor properties
// Getters and Setters are function that get and set the value

const account = {
  owner: 'Nelson',
  movements: [200, 553, 838, 190],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 5000;
console.log(account.movements);
