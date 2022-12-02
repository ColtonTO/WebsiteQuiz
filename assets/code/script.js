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

var btnClearHighScoreEl = document.querySelector("#clear-high-scores");
var btnGoBackEl = document.querySelector("#go-back")


var score = 0;
var gameOver
var timer;
var timerCount = 25;

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