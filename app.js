var readLineSync = require("readline-sync");

var score = 0;

var questions = [{
        question: "How old am i?",
        answer: "21"
    },
    {
        question: "Where do i live?",
        answer: "Bokaro"
    },
    {
        question: "what is my hobby?",
        answer: "Playing and watching football"
    },
    {
        question: "What is the name of my college",
        answer: "BIT Mesra"
    }
]

function welcome() {

    var userName = readLineSync.question("What's your name?");
    console.log("Welcome" + " " + userName);
    console.log("Let's see how much do you know about Ayush");
}

function play(question, answer) {

    var userAnswer = readLineSync.question(question);
    if (userAnswer.toUpperCase() == answer.toUpperCase()) {
        console.log("Correct...");
        score++;
    } else {
        console.log("Wrong...");
    }

    console.log("current score:" + score);
    console.log(".........");
}

function game() {
    for (var i = 0; i < questions.length; i++) {
        var currentQuestion = questions[i];
        play(currentQuestion.question, currentQuestion.answer)
    }
}

function showScore() {
    console.log("You scored" + " " + score);
    console.log("Thank you for taking the quiz");
}

welcome();
game();
showScore();