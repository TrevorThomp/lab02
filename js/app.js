'use strict';

var totalCorrect = 0; //global variable to track total correct answers
var userName = prompt('Hi, What is your name?');

function start() {
    welcome();
    yesNo();
    guessNumber();
    flagColors();
    endPrompt();
}

start();
//Username and welcome prompts
function welcome() {
    alert('Hello, ' + userName + '! Welcome to my site!');
    alert('Please answer the following questions using yes or no.');
}


//questions 1-5
function yesNo() {
    var question;
    var answers;
    var response;
    var answersAbb;

    var quiz = 
    [
    ['Was I born in January?', 'yes', 'y'],
    ['Do I like cat more than dogs?', 'no', 'n'],
    ['Am I from California?', 'no', 'n'],
    ['Is my favorite sport Rugby?', 'yes', 'y'],
    ['Do I have blue eyes', 'yes', 'y']
    ];

    for(var i = 0; i < quiz.length; i++) {
        question = quiz[i][0];
        answers = quiz[i][1];
        answersAbb = quiz[i][2];
        response = prompt(question);
    if(response.toLowerCase() === answers || response.toLowerCase() === answersAbb){
        alert('You are correct!');
        totalCorrect++;
    } else {
        alert('Sorry that is incorrect');
    }
    }
}


//question 6 with random number generator
function guessNumber() {
    var correctNumber = Math.floor(Math.random() * 10);
    var count = 0;
    var userGuess = false;

    while ( (!userGuess) && (count < 4) ) {
        
        var questionSix = prompt('Guess a number between 1 and 10');
        var tries;

        if(parseInt(questionSix, 10) === correctNumber) {
            alert('You are correct!');
            userGuess = true;
            totalCorrect++;
        } else if(parseInt(questionSix, 10) > correctNumber) {
            count++;
            alert('To high! Try again! ' + (4 - count) + ' attempts left');
        } else if(parseInt(questionSix, 10) < correctNumber) {
            count++;
            alert('To low! Try again! ' + (4 - count) + ' attempts left');
        } 
        if(count === 4) {
            alert('All out of tries. The correct number was ' + correctNumber + '.');
        } 
    }   
}



//question 7 with multiple possible answers
function flagColors() {
    var correctColors = ['red', 'green', 'blue', 'black', 'gold', 'white'];
    var countFlag = 0;


    while(countFlag < 6) {
        var questionSeven = prompt('Name a color on the South African flag');
        var userGuess2 = false;

        for(var a = 0; a < correctColors.length ; a++) {
            if(questionSeven.toLowerCase() === correctColors[a]) {
                userGuess2 = true;
            }  
        }
        if(userGuess2 === true) {
            alert('That is correct! The other possibilities were ' + correctColors.toLocaleString() + '.')
            countFlag = 6;
            totalCorrect++;
            break;
        } 
        if(userGuess2 === false) {
            countFlag++;
            alert('Sorry try again. ' + (6 - countFlag) + ' attempts left');
            
        }
        if(countFlag === 6) {
            alert('All out of tries. The answers were ' + correctColors.toLocaleString() + '.')
        }
        
    }
}


//ending statements
function endPrompt() {
    alert('Well done ' + userName + '! You got ' + totalCorrect + ' out of 7 correct');
    alert('Thanks for visiting and taking my quiz!');
}


