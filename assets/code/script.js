var containerQuestionEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtonEl = document.getElementById("answer-buttons");
var submitScoreEl = document.getElementById("submit-score");
var highScoreContainerEl  = document.getElementById("high-score-container");
var highScoreListEl = document.getElementById("high-score-list");
var containerStartEl = document.getElementById("starting-container");
var containerEndEl = document.getElementById("end-container")
var containerScoreEl = document.getElementById("score-banner")
var formInitials = document.getElementById("initials-form")
var correctEl = document.getElementById("correct")
var wrongEl = document.getElementById("wrong");
var containerStartEl 

//buttons
var btnClearHighScoreEl = document.querySelector("#clear-high-scores");
var btnGoBackEl = document.querySelector("#go-back")
var viewHighScores = document.querySelector('#view-high-scores')
var startBtn = document.querySelector("#start-btn");

var timerEl = document.querySelector("#timer")
var score = 0;
var gameOver
var timer;
var timerCount;
timerEl.innerText = 0;

//High Score
var HighScores = [];

//question shuffle
var arrayShuffledQuestions
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
    { q: 'Who invented JavaScript?',
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

var setTime = function () {
    timeleft = 30;

var timercheck = setInterval(function() {
    timerEl.innerText = timeleft;
    timeleft--;

    if (gameOver) {
        clearInterval(timercheck)
    }
   
    if (timeleft < 0) {
        //showScore()
        timerEl.innerText = 0
        clearInterval(timercheck)
    }

    }, 1000)
}

var startGame = function() {
    containerStartEl.classList.add('hide');
    containerStartEl.classList.remove('show');
    containerQuestionEl.classList.remove('hide');
    containerQuestionEl.classList.add('show');
    arrayShuffledQuestions = questions.sort(() => Math.random() - 0.5)
    setTime()
    setQuestion()
  }

var setQuestion = function() {
    resetAnswers()
    displayQuestion(arrayShuffledQuestions[QuestionIndex])
}

var resetAnswers = function() {
    while (answerButtonEl.firstChild) {
        answerButtonEl.removeChild(answerButtonEl.firstChild)
    };
};

var displayQuestion = function(index) {
    questionEl.innerText = index.q
    for (var i = 0; i < index.choices.length; i++) {
        var answerbutton = document.createElement('button')
        answerbutton.innerText = index.choices[i].choice
        answerbutton.classList.add('btn')
        answerbutton.classList.add('answerbtn')
        answerbutton.addEventListener("click", answerCheck)
        answerButtonEl.appendChild(answerbutton)
        }
    };

    //display correct! on screen
    var answerCorrect = function() {
        if (correctEl.className = "hide") {
            correctEl.classList.remove("hide")
            correctEl.classList.add("banner")
            wrongEl.classList.remove("banner")
            wrongEl.classList.add("hide")
            }
        }  
    //display wrong! on screen
    var answerWrong = function() {
        if (wrongEl.className = "hide") {
            wrongEl.classList.remove("hide")
            wrongEl.classList.add("banner")
            correctEl.classList.remove("banner")
            correctEl.classList.add("hide")
        }
    }

    var answerCheck = function(event) {
        var selectedanswer = event.target
            if (arrayShuffledQuestions[QuestionIndex].a === selectedanswer.innerText){
                answerCorrect()
                score = score + 7
            }

            else {
              answerWrong()
              score = score - 1;
              timeleft = timeleft - 3;
          };
        //
        QuestionIndex++
        if  (arrayShuffledQuestions.length > QuestionIndex + 1) {
            setQuestion()
        }   
        else {
           gameover = "true";
           showScore();
            }
}

var showScore = function () {
    containerQuestionEl.classList.add("hide");
    containerEndEl.classList.remove("hide");
    containerEndEl.classList.add("show");

    var scoreDisplay = document.createElement("p");
    scoreDisplay.innerText = ("Your final score is " + score + "!");
    containerScoreEl.appendChild(scoreDisplay);
}       

startBtn.addEventListener("click", startGame);