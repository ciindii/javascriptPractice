//example1
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
  return `This ${this.make} ${this.model} is ${years} years old`;
};

const car1 = new Car('Honda', 'Civic', 1993);
const car2 = new Car('Toyota', '4 Runner', 2018);

console.log(car1.summary());
console.log(car1.getTheAge());
console.log(car2.summary());
console.log(car2.getTheAge());

//example2

const Album = function (song, artist, year) {
  this.song = song;
  this.artist = artist;
  this.year = year;
};

Album.prototype.note = function () {
  return `${this.artist} sang ${this.song} in ${this.year}`;
};

const album1 = new Album('Mic Drop', 'BTS', 2017);
console.log(album1.note());

//INHERITENCE WITH prototypes
