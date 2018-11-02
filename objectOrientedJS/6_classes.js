//ES6 CLASS

// class Book {}
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }

  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }

  //static meaning you dont have to instatiate
  static topBookStore() {
    return 'Barnes & Noble';
  }
}

//INSTATIATE Object
const book1 = new Book('Book One', 'John Doe', '2018');

console.log(book1);
book1.revise('2018');
console.log(book1);

//static
//book1.topBookStore(); will return 'not a function'
//you have to run that function on the actual class
console.log(Book.topBookStore());
