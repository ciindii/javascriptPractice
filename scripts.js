const triviaDiv = document.querySelector('.trivia');
const scoreDiv = document.querySelector('.score');
const submitButton = document.querySelector('#submit');

const questions = [
  {
    question: 'Who is the 4th Raikage',
    answers: {
      a: 'Unruly A',
      b: 'Killer B',
      c: 'Dauri',
    },
    correctAnswer: 'a',
  },
  {
    question: 'What does Kakashi\'s name mean?',
    answers: {
      a: 'Scarecrow',
      b: 'Faceless',
      c: 'White Fang',
    },
    correctAnswer: 'a',
  },
  {
    question: 'How many Gates is Rock Lee able to open?',
    answers: {
      a: 'All 8 Gates',
      b: '7 Gates',
      c: '5 Gates',
    },
    correctAnswer: 'b',
  },
  {
    question: 'Who is the one tail Jinuriki?',
    answers: {
      a: 'Kushina',
      b: 'Ren',
      c: 'Gaara',
    },
    correctAnswer: 'c',
  },
  {
    question: 'Who is the Sensei of team 7?',
    answers: {
      a: 'Asuma Sarutobi',
      b: 'Might Guy',
      c: 'Kakashi Hatake',
    },
    correctAnswer: 'c',
  },
];

function buildQuiz() {
  const outPutQuestions = [];
  questions.forEach(
    (currentQuestion, questionNumber) => {
    const answers = [];
    for (letter in currentQuestion.answers) {
      answers.push(
      `<label>
      <input type="radio" name="question${questionNumber}" value= "${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
      </label>`
      );
    }

    outPutQuestions.push(
    `<div class= "question"> ${currentQuestion.question} </div>
    <div class="answers"> ${answers.join('')} </div>`
    );
  });

  triviaDiv.innerHTML = outPutQuestions.join('');
}

function displayScores() {}

buildQuiz();
sumbmitButton.addEventListener('click', displayScores);
