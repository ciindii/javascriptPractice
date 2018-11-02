//CONSTRUCTOR
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//getSummary
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

//CREATES MAGAZINE OBJECT
//this magazine will INHERIT the properties of the book

//MAGAZINE CONSTRUCTOR
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

//INHERIT prototype
Magazine.prototype = Object.create(Book.prototype);

//INSTATIATE MAGAZINE Object
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

//USE MAGAZINE CONSTRUCTOR
Magazine.prototype.constructor = Magazine;

console.log(mag1.getSummary());
