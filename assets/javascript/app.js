// question
// options
// answer
// user answers
$(document).ready(function() {

// Beginning of game: Introduction is shown and everything else is hidden

$('.triviaQuestions').hide(); 
$('.gameResults').hide(); 

// Questions, options and correct answer
var trivia = [
        {question: "Which of the following is not one of Jupiter's largest moons?",
        option1: "Callisto ",
        option2: "Io",
        option3: "Titan",
        option4: "Ganymede",
        answer: "Titan",
        image: "assets\images\Titan.jpg",
        userAnswer: ""},

        {question: "How far is the Earth from the sun?",
        option1: "50 million miles", 
        option2: "93 million miles", 
        option3: "100 million miles", 
        option4: "85 million miles",
        answer: "93 million miles",
        image: "assets\images\Earth_Sun_Distance.png",
        userAnswer: ""},

        {question: "Which of the following is the rocket that carried Neil Armstrong and Buzz Aldrin to the Moon during the Apollo 11 spaceflight?",
        option1: "Saturn IB", 
        option2: "Titan II", 
        option3: "Delta C", 
        option4: "Saturn V",
        answer: "Saturn V",
        image: "assets\images\SaturnV.jpg",
        userAnswer: ""},

        {question: "What type of star is the Sun?",
        option1: "Main Sequence", 
        option2: "Brown Dwarf", 
        option3: "Giant", 
        option4: "Hypergiant",
        answer: "Main Sequence",
        image: "assets\images\Sun.jpg",
        userAnswer: ""},

        {question: "Which planet is the flattest in the solar system?",
        option1: "Neptune", 
        option2: "Saturn", 
        option3: "Jupiter", 
        option4: "Mercury",
        answer: "Saturn",
        image: "assets\images\Saturn.jpg",
        userAnswer: ""}
    ];


var timer = {

    time: 20,

    resetTimer: function () {
        clearInterval(counter);
        timer.time = 20;
    },

    startTimer: function () {
        counter = setInterval(countDownTimer, 1000);
        console.log("test");
        console.log(timer.time);
    },

    timerCountDown: function () {
        timer.time--;

        console.log(timer.time);
    }

}

var p = 0;
var correctAnswers = 0; // Number of correct answers
var incorrectAnswers = 0; // Number of incorrect answers
var unansweredQuestions = 0; // Number of questions that have been unanswered
var rightMessage = "CORRECT!!!"; 
var wrongMessage = "INCORRECT!!!";

function countDownTimer () {
    $('#timeRemaining').text(timer.time);

    if (timer.time > 0) {
        timer.time--; 
    } else {
        console.log("unaswered") 
        unansweredQuestions++;
        loadQuestion(p++);
        $('.resultMessage').empty();
        timer.resetTimer();                       
    }
} 

 
$('#startBtn').on('click', function () { // Button to hide the introduction and make the first question and its corresponding options appear
    $('.triviaQuestions').show();
    $('.introduction').hide();
    loadQuestion(p = 0);
    clearInterval(countDownTimer);
    timer.startTimer();
});

function loadQuestion () {  // Function to load the question and its corresponding options
    $('#question').text(trivia[p].question); 
    $('#option1').text(trivia[p].option1);
    $('#option2').text(trivia[p].option2); 
    $('#option3').text(trivia[p].option3); 
    $('#option4').text(trivia[p].option4);
 }

 //Clicking on a choice button confirmation
    
// If userAnswer is correct, rightMessage shows up and image shows up and correctAnswers increases by
// If userAnswer is incorrect, wrongMessage shows up (what shows up?)
// If userAnswer is no answer, nothing happens and unansweredQuestions increases by one
// Always p++


$('.choice').on('click', function () {
    var userGuess = $(this).text();
    if (userGuess === trivia[p].answer) {
        $('.resultMessage').text(rightMessage);
        $('.resultImage').show(trivia[p].image);
        correctAnswers++;
    } else {
        $('.resultMessage').text(wrongMessage);
        incorrectAnswers++;
    }
    })  

$('#nextQuestion').on('click', function () {
    if (p <= 4){
        loadQuestion(p++);
    }
    else {
        $('.triviaQuestions').hide();
        $('.gameResults').show();
    }
    $('.resultMessage').empty();
    clearInterval(countDownTimer);
        timer.time = 20;
        console.log(p);
});

$("#restartBtn").on('click', function () { // Button to restart the game and  go back to the introduction page
    $('.gameResults').hide();
    $('.introduction').show();
    timer.resetTimer();
});

}) 