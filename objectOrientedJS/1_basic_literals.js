const s1 = 'Hello';
console.log(typeof s1);

const s2 = new String('Hello');
console.log(typeof s2);

console.log(window);
window.alert(1);

console.log(navigator.appVersion);

const book1 = {
  title: 'Book One',
  author: 'John Doe',
  year: '2013',
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book1.title);
console.log(book1.getSummary());

//check values or keys
console.log(Object.values(book2));
console.log(Object.keys(book2));

//creating more than one book
//you can create:

//const book1 = {
//  title: '',
//  getSummary: ''
//};

//const book2 = {
//  title: '',
//  getSummary: ''
//};

//but that would be DTM, so creating //'CONSTRUCTORS' would be easier
