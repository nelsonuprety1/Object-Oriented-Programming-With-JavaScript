'use strict';
// **Encapsulation :
//  Means to keep some properties and
// methods private inside the class so that they are not accessible from outside
//  the class

/*
* Encapsulation: Private Class Fields and Methods
8 different kinds of fields and methods
But 4 is taught in this course
1) Public Fields
2) Private Fields
3) Public Methods
4) Private Methods
(there is also static version. Static public field : only available on class)
*/
class Account {
  // ** 1) Defining public fields (instances)
  //  These public fields here are gonna be present on all the instances that we are creating through the class
  //   So they are not on the prototype
  locale = navigator.language;

  //   ** 2) Defining private fields
  // with private fields we are making sure that properties are not accessible from the outside
  //  this # symbol is the syntax that makes a field private in this new class proposal
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // protected property
    // using the underscore _ convention
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${this.owner}`);
  }

  //   ** 3) Public Methods
  //   Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  //   static version
  // This static methods will not be available on all the instances, but only on the class itself
  static helper(val) {
    console.log(`Helper`);
  }

  //   ** 2) Defining Private Methods
  //   right now no brower support this method using #
  //   #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Nelson', 'NRS', 9988);
console.log(acc1);

acc1.deposit(250);
acc1.withdraw(100);
acc1.requestLoan(1000);
acc1._approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
Account.helper();
/*
*This will throw this error:
Uncaught SyntaxError: Private field '#movements' must be declared in an enclosing class

*/
// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(1000);)

// Chaining
acc1.deposit(300).deposit(500).withdraw(100).requestLoan(5000).withdraw(3000);
console.log(acc1.getMovements());
