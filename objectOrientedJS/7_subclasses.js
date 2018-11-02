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
}

//will have everything getSummary have including month
//no need to .prototype
//MAGAZINE SUBCLASS
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

//INSTATIATE MAGAZINE
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

console.log(mag1);
console.log(mag1.getSummary());
