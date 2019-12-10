// These two are essentially the same

function Person (name) {
  this.name = name;
}
Person.prototype.logName = function () {
  console.log(this.name);
};

const tim = new Person('tim');
tim.logName();


class AnotherPerson {
  constructor(name) {
    this.name = name;
  }

  logName() {
    console.log(this.name);
  }
}

const john = new AnotherPerson('john');
john.logName();