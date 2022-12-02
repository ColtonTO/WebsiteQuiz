var timerElement = document.querySelector(".timer-count");
var startBtn = document.querySelector(".start-btn");
var containerQuestionEl = document.getElementById(".question-container");
var outerContainerEl  = document.getElementById(".outer-container");
var questionEl = document.getElementById(".question");
var answerButtonEl = document.getElementById(".answer-buttons");
var submitScoreEl = document.getElementById(".submit-score");
var highScoreContainerEl  = document.getElementById(".high-score-container");
var highScoreListEl = document.getElementById(".high-score-list");
var correctEl = document.getElementById(".correct")
var wrongEl = document.getElementById(".wrong");

//buttons
var btnClearHighScoreEl = document.querySelector("#clear-high-scores");
var btnGoBackEl = document.querySelector("#go-back")
var viewHighScores = document.querySelector('#view-high-scores')

var score = 0;
var gameOver
var timer;
var timerCount = 25;

//High Score
var HighScores = [];

//question shuffle
var ArrayShuffledQuestions
var QuestionIndex = 0

//quiz questions
var questions = [
    { q: 'Arrays in Javascript can be used to store __________.', 
      a: '4. all of the above', 
      choices: [{choice: '1. numbers'}, {choice: '2. booleans'}, {choice: '3. strings'}, {choice: '4. all of the above'}]
    },
    { q: 'What does JSON stand for?',
      a: '3. JavaScript Object Notation',
      choices: [{choice: '1. JavaSqure Object Notation'}, {choice: '2. JavaSequence Object Notation'}, {choice: '3. JavaScript Object Notation'}, {choice: '4. JavaScript Objective Notation'}]
    },
    { q: 'What does DOM stand for?',
      a: '1. Document Object Model',
      choices: [{choice: '1. Document Object Model'}, {choice: '2. Document Obstruction Module'}, {choice: '3. Do Objection Map'}, {choice: '4. Document Occupation Management'}]
    },
    { q: 'Who invented JavaScript',
      a: '2. Brendan Eich',
      choices: [{choice: '1. Steve Jobs'}, {choice: '2. Brendan Eich'}, {choice: '3. Bill Gates'}, {choice: '4. James Gosling'}]
    },
    { q: 'What year was JavaScript made in?',
      a: '3. 1995',
      choices: [{choice: '1. 1998'}, {choice: '2. 2000'}, {choice: '3. 1995'}, {choice: '4. None of the Above'}]
    },
    { q: 'What does getElementByID do?',
      a: '4. Returns an element with specified ID value',
      choices: [{choice: '1. Returns element called "ElementByID"'}, {choice: '2. Nothing except being dramatic'}, {choice: '3. Returns every element ID'}, {choice: '4. Returns an element with specified ID value'}]
    },
    { q: 'What does API stand for?',
      a: '1. Application programming interface',
      choices: [{choice: '1. Application programming interface'}, {choice: '2. Application professinal introduction'}, {choice: '3. Apprentice programmer individual'}, {choice: '4. Ambitious pedestrian ideology'}]
    },
];
function startGame() {
    startBtn.disabled = true;
    startTimer()
}

function startTimer() {
    timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount === 0) {
        clearInterval(timer);
        return alert("Sorry! You lost!")
    }
}, 1000);
}

startBtn.addEventListener("click", startGame);