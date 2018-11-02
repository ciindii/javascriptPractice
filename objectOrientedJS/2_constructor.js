//es5

//CONSTRUCTOR
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.summary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

//INSTATIATE AN OOBJECT
//(when you instatiate an object from the constructor it will run whatever is in the CONSTRUCTOR)

const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Joe', '2016');

//get title of book1
console.log(book1.title);
console.log(book1);
console.log(book1.getSummary());
