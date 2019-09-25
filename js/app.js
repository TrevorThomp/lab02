'use strict';
var totalCorrect = 0;

var userName = prompt('Hi, What is your name?')
alert('Hello, ' + userName + '! Please answer the following questions using yes or no.');

var questionOne = prompt('Was I born January?');

if(questionOne.toLowerCase() === 'yes') {
    //console.log('You are correct!')
    alert('You are correct!');
    totalCorrect++;
} else if(questionOne.toLowerCase() === 'no') {
    //console.log('Sorry that is incorrect..');
    alert('Sorry that is incorrect');
} 

var questionTwo = prompt('Do I like cats more than dogs?');

if(questionTwo.toLowerCase() === 'no') {
    //console.log('You are correct!')
    alert('You are correct!');
    totalCorrect++;
} else if(questionTwo.toLowerCase() === 'yes') {
    //console.log('Sorry that is incorrect..');
    alert('Sorry that is incorrect');
}

var questionThree = prompt('Am I from California?');

if(questionThree.toLowerCase() === 'no') {
    //console.log('You are correct!')
    alert('You are correct!');
    totalCorrect++;
} else if(questionThree.toLowerCase() === 'yes') {
    //console.log('Sorry that is incorrect..');
    alert('Sorry that is incorrect');
}

var questionFour = prompt('Is my favorite sport rugby?');

if(questionFour.toLowerCase() === 'yes') {
    //console.log('You are correct!')
    alert('You are correct!');
    totalCorrect++;
} else if(questionFour.toLowerCase() === 'no') {
   // console.log('Sorry that is incorrect..');
   alert('Sorry that is incorrect');

}

 var questionFive = prompt('Do I have blue eyes?');
 
 if(questionFour.toLowerCase() === 'yes') {
    //console.log('You are correct!')
    alert('You are correct!');
    totalCorrect++;
} else if(questionFour.toLowerCase() === 'no') {
    //console.log('Sorry that is incorrect..');
    alert('Sorry that is incorrect');
}


var correctNumber = 7;
var count = 0;
var userGuess = false;

while ( (!userGuess) && (count < 4) ) {
    
    var questionSix = prompt('Guess a number between 1 and 10');
    var tries;

    if(parseInt(questionSix) === correctNumber) {
        alert('You are correct!');
        userGuess = true;
        totalCorrect++;
    } else if(parseInt(questionSix) > 7) {
        count++;
        alert('To high! Try again! ' + (4 - count) + ' attempts left');
    } else if(parseInt(questionSix) < 7) {
        count++;
        alert('To low! Try again! ' + (4 - count) + ' attempts left');
    } 
    if(count === 4) {
        alert('All out of tries. The correct number was 7.');
    } 
}



var correctColors = ['red', 'green', 'blue', 'black', 'gold', 'white'];
var countFlag = 0;


while(countFlag < 6) {
    var questionSeven = prompt('Name a color on the South African flag');
    var userGuess2 = false;
    
    for(var a = 0; a < 6; a++) {
        if(questionSeven.toLowerCase() === correctColors[a]) {
            var userGuess2 = true;
            console.log(userGuess2);
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


alert('Well done ' + userName + '! Thanks for visiting and taking my quiz! You got ' + totalCorrect + ' out of 7 correct');