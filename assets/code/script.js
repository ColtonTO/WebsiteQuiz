var containerQuestionEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtonEl = document.getElementById("answer-buttons");
var submitScoreEl = document.getElementById("submit-score");
var highScoreContainerEl  = document.getElementById("high-score-container");
var highScoreListEl = document.getElementById("high-score-list");
var viewHighScoresEl = document.getElementById("view-high-scores")
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
// renders when hitting back button
var renderStartPage = function () {
    highScoreContainerEl.classList.add("hide")
    highScoreContainerEl.classList.remove("show")
    containerStartEl.classList.remove("hide")
    containerStartEl.classList.add("show")
    containerScoreEl.removeChild(containerScoreEl.lastChild)
    QuestionIndex = 0
    gameOver = ""
    timerEl.textContent = 0 
    score = 0

    if (correctEl.className = "show") {
        correctEl.classList.remove("show");
        correctEl.classList.add("hide")
    }
    if (wrongEl.className = "show") {
        wrongEl.classList.remove("show");
        wrongEl.classList.add("hide");
    }
}


var setTime = function () {
    timeleft = 30;

var timercheck = setInterval(function() {
    timerEl.innerText = timeleft;
    timeleft--;

    if (gameOver) {
        clearInterval(timercheck)
    }
   
    if (timeleft < 0) {
        showScore()
        timerEl.innerText = 0
        clearInterval(timercheck)
    }

    }, 1000)
}
// function that starts the game after startbtn is pressed
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
// displays the questtions and answers
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
           gameOver = "true";
           showScore();
            }
}
// shows the score I think.. hopefully
var showScore = function () {
    containerQuestionEl.classList.add("hide");
    containerEndEl.classList.remove("hide");
    containerEndEl.classList.add("show");

    var scoreDisplay = document.createElement("p");
    scoreDisplay.innerText = ("Your final score is " + score + "!");
    containerScoreEl.appendChild(scoreDisplay);
}       

//create high score values
 var createHighScore = function(event) { 
    event.preventDefault() 
    var initials = document.querySelector("#initials").value;
    if (!initials) {
        alert("Enter your intials!");
        return;
    }

    formInitials.reset();
    // my brain is hurting.... AHHHH
    var HighScore = {
    initials: initials,
    score: score
    } 
    //pushes and sorts scores
    HighScores.push(HighScore);
    HighScores.sort((a, b) => {return b.score-a.score});

    //clear list
    while (highScoreListEl.firstChild) {
        highScoreListEl.removeChild(highScoreListEl.firstChild)
    }

    //create elements in order of high scores
    for (var i = 0; i < HighScores.length; i++) {
        var highscoreEl = document.createElement("li");
        highscoreEl.ClassName = "high-score";
        highscoreEl.innerHTML = HighScores[i].initials + " - " + HighScores[i].score;
        highScoreListEl.appendChild(highscoreEl);
      }

    saveHighScore();
    displayHighScores();

  }
  //save high score
  var saveHighScore = function () {
      localStorage.setItem("HighScores", JSON.stringify(HighScores))
          
  }

  //load values when page loads
  var loadHighScore = function () {
      var LoadedHighScores = localStorage.getItem("HighScores")
          if (!LoadedHighScores) {
          return false;
      }

      LoadedHighScores = JSON.parse(LoadedHighScores);
      LoadedHighScores.sort((a, b) => {return b.score-a.score})


      for (var i = 0; i < LoadedHighScores.length; i++) {
          var highscoreEl = document.createElement("li");
          highscoreEl.ClassName = "high-score";
          highscoreEl.innerText = LoadedHighScores[i].initials + " - " + LoadedHighScores[i].score;
          highScoreListEl.appendChild(highscoreEl);

          HighScores.push(LoadedHighScores[i]);
          
      }
  }  
//display high score screen from link or when intiials entered
var displayHighScores = function() {

    highScoreContainerEl.classList.remove("hide");
    highScoreContainerEl.classList.add("show");
    gameOver = "true"

    if (containerEndEl.className = "show") {
        containerEndEl.classList.remove("show");
        containerEndEl.classList.add("hide");
        }
    if (containerStartEl.className = "show") {
        containerStartEl.classList.remove("show");
        containerStartEl.classList.add("hide");
        }
        
    if (containerQuestionEl.className = "show") {
        containerQuestionEl.classList.remove("show");
        containerQuestionEl.classList.add("hide");
        }

    if (correctEl.className = "show") {
        correctEl.classList.remove("show");
        correctEl.classList.add("hide");
    }

    if (wrongEl.className = "show") {
        wrongEl.classList.remove("show");
        wrongEl.classList.add("hide");
        }
    
}
//clears high scores
var clearScores = function () {
    HighScores = [];

    while (highScoreListEl.firstChild) {
        highScoreListEl.removeChild(highScoreListEl.firstChild);
    }

    localStorage.clear(HighScores);

} 

loadHighScore()

// start button starts the game
startBtn.addEventListener("click", startGame);
//submit button
formInitials.addEventListener("submit", createHighScore)
//when view high-scores is clicked
viewHighScoresEl.addEventListener("click", displayHighScores)
//Go back button
btnGoBackEl.addEventListener("click", renderStartPage)
//clear scores button
btnClearHighScoreEl.addEventListener("click", clearScores)