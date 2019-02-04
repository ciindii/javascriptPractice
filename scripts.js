
//creates an array and console.log i
function buildFunctions (){
  var arr = [];
  for(var i = 0; i < 3; i++){
    arr.push(
      function () {
        console.log(i);
      }
    );
  } return arr;
}

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();

//creates an array and console.log i with let
function buildFunctions2 () {
  let arr = [];
  for (var i = 0; i < 3; i++) {
            let j = i;
    arr.push(
      function() {
        console.log(j);
      }
    );
  } return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();



// const triviaDiv = document.querySelector('.trivia');
// const scoreDiv = document.querySelector('.score');
// const submitButton = document.querySelector('#submit');
//
// const questions = [
//   {
//     question: 'Who is the 4th Raikage',
//     answers: {
//       a: 'Unruly A',
//       b: 'Killer B',
//       c: 'Dauri',
//     },
//     correctAnswer: 'a',
//   },
//   {
//     question: 'What does Kakashi\'s name mean?',
//     answers: {
//       a: 'Scarecrow',
//       b: 'Faceless',
//       c: 'White Fang',
//     },
//     correctAnswer: 'a',
//   },
//   {
//     question: 'How many Gates is Rock Lee able to open?',
//     answers: {
//       a: 'All 8 Gates',
//       b: '7 Gates',
//       c: '5 Gates',
//     },
//     correctAnswer: 'b',
//   },
//   {
//     question: 'Who is the one tail Jinuriki?',
//     answers: {
//       a: 'Kushina',
//       b: 'Ren',
//       c: 'Gaara',
//     },
//     correctAnswer: 'c',
//   },
//   {
//     question: 'Who is the Sensei of team 7?',
//     answers: {
//       a: 'Asuma Sarutobi',
//       b: 'Might Guy',
//       c: 'Kakashi Hatake',
//     },
//     correctAnswer: 'c',
//   },
// ];
//
// function buildQuiz() {
//   const outPutQuestions = [];
//   questions.forEach(
//     (currentQuestion, questionNumber) => {
//     const answers = [];
//     for (letter in currentQuestion.answers) {
//       answers.push(
//       `<label>
//       <input type="radio" name="question${questionNumber}" value= "${letter}">
//       ${letter} :
//       ${currentQuestion.answers[letter]}
//       </label>`
//       );
//     }
//
//     outPutQuestions.push(
//     `<div class= "question"> ${currentQuestion.question} </div>
//     <div class="answers"> ${answers.join('')} </div>`
//     );
//   });
//
//   triviaDiv.innerHTML = outPutQuestions.join('');
// }
//
// function displayScores() {
//   const answerDiv = triviaDiv.querySelectorAll('.answers');
//   let nuCorrect = 0;
//   questions.forEach( (currentQuestion, questionNumber) => {
//     const answerDiv = answerDiv[questionNumber];
//     const selector = 'input[name=question '+questionNumber+']:checked';
//     const userAnswer = (answerContainer.querySelector(selector) || {}).value;
//
//     if(userAnswer === currentQuestion) {
//       numCorrect++;
//       answerDiv[questionNumber].style.color = 'lightgreen'
//     } else {
//       answerDiv[questionNumber].style.color = 'red';
//     }
//
//   });
//
//
//
// buildQuiz();
// sumbmitButton.addEventListener('click', displayScores);

const s1 = 'Hello';
console.log(typeof s1);
const s2 = new String('Hello');
console.log(typeof s2);

console.log(navigator.appVersion);

//object literal
//JS objects are containers for named values called properties
//or methods
//name:value pairs in JS are called PROPERTIES
book1 = {
  title: 'book 1',
  author: 'John Doe',
  year: '2013',

  //you can even put a function as a property
  getSummary: function () {
    // `` templete literal
    return `${this.title} was written by ${this.author} published ${this.year}`;
  },
};
console.log(Object.values(book1));
console.log(Object.keys(book1));
console.log(book1);
console.log(book1.author);
console.log(book1.getSummary());

// CONSTRUCTORS

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function () {
    return `${this.title} was written by ${this.author} publiished ${this.year}`;
  };
}

//Instatiate an Object
const book2 = new Book('book two', 'JJ', 1993);
const book3 = new Book('book three', 'JD', 1994);

console.log(book2);
console.log(book2.getSummary());

//////////////////
//PROTOTYPES

// CONSTRUCTORS

function Books(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//prototype getSummary
//getSummary is now stored in the proto instead of the object
Books.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} publiished ${this.year}`;
};

//getAge of the book
Books.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old}`;
};

//revise / change year
Books.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

//Instatiate an Object
const book6 = new Book('book six', 'JJ', 1993);
const book5 = new Book('book five', 'JD', 1994);

console.log(book6);
console.log(book6.getSummary());

// book6.revise('2018');
console.log(book6);

//INHERITENCE WITH prototypes
// CONSTRUCTORS

// CONSTRUCTORS

function Food(cal, fat, protien) {
  this.cal = cal;
  this.fat = fat;
  this.protien = protien;
}

//prototype getSummary
//getSummary is now stored in the proto instead of the object
Food.prototype.getNutrition = function () {
  return `${this.cal}, ${this.fat}, and ${this.protien}`;
};

//magazine CONSTRUCTORS
function Magazine(cal, fat, protien, month) {
  Food.call(this, cal, protien, fat);
  this.month = month;
}

//INHERIT PROTOTYPE
Magazine.prototype = Object.create(Food.prototype);

//instantitate magazine object
const mag1 = new Magazine('cal', 'protien', 'fat');
console.log(mag1);

//use magazine CONSTRUCTORS
Magazine.prototype.constructor = Magazine;
console.log(mag1);

//OBJECT of prototypes
const bookProtos = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} publiished ${this.year}`;
  },

  getAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old}`;
  },
};

//create objects
// const book10 = Object.create(bookProtos);
// book10.title = 'book Ten';
// book10.author = 'Jane Doe';
// book10.year = '2016';

const book10 = Object.create(bookProtos, {
  title: { value: 'Book Ten' },
  author: { value: 'Jane Doe' },
  year: { value: '2016' },
});

console.log(book10);

//ES6 class

//scope chain what is the value of myVar?
function b() {
  console.log(myVar);
}

function a() {
  var myVar = 2;
  b();
}

//the value that is sitting on the global level
//was called
var myVar = 1;

a();

//changed b2(); outter reference

function a2() {
  function b2() {
    console.log(myVar2);
  }

  myVar2 = 2;
  b2();
}

myVar2 = 1;
a2();


//asynchonous  examplegit
//long running function
function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms) {
    console.log('finished function');
  }
}

function clickHandler() {
  console.log('click event!');
}

//listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');

//toggle navigation

$('#toggle').click(function () {
  (this).toggleClass('on');
  ('#resize').toggleClass('active');
});
