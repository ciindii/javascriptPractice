const Car = function (make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
};

Car.prototype.summary = function () {
  return `${this.year} ${this.make} ${this.model}`;
};

Car.prototype.getTheAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.make} ${this.model} is ${years} years old`;
};

const car1 = new Car('Honda', 'Civic', 1993);

console.log(car1.summary());
console.log(car1.getTheAge());
