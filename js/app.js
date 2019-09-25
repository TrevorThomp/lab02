'use strict';

// var userName = prompt('Hi, What is your name?')
// alert('Hello, ' + userName + '! Please answer the following questions using yes or no.');

// var questionOne = prompt('Was I born January?');

// if(questionOne.toLowerCase() === 'yes') {
//     //console.log('You are correct!')
//     alert('You are correct!');
// } else if(questionOne.toLowerCase() === 'no') {
//     //console.log('Sorry that is incorrect..');
//     alert('Sorry that is incorrect');
// } 

// var questionTwo = prompt('Do I like cats more than dogs?');

// if(questionTwo.toLowerCase() === 'no') {
//     //console.log('You are correct!')
//     alert('You are correct!');
// } else if(questionTwo.toLowerCase() === 'yes') {
//     //console.log('Sorry that is incorrect..');
//     alert('Sorry that is incorrect');
// }

// var questionThree = prompt('Am I from California?');

// if(questionThree.toLowerCase() === 'no') {
//     //console.log('You are correct!')
//     alert('You are correct!');
// } else if(questionThree.toLowerCase() === 'yes') {
//     //console.log('Sorry that is incorrect..');
//     alert('Sorry that is incorrect');
// }

// var questionFour = prompt('Is my favorite sport rugby?');

// if(questionFour.toLowerCase() === 'yes') {
//     //console.log('You are correct!')
//     alert('You are correct!');
// } else if(questionFour.toLowerCase() === 'no') {
//    // console.log('Sorry that is incorrect..');
//    alert('Sorry that is incorrect');

// }

//  var questionFive = prompt('Do I have blue eyes?');
 
//  if(questionFour.toLowerCase() === 'yes') {
//     //console.log('You are correct!')
//     alert('You are correct!');
// } else if(questionFour.toLowerCase() === 'no') {
//     //console.log('Sorry that is incorrect..');
//     alert('Sorry that is incorrect');
// }


var correctNumber = 7;
var guessAttempts = 0;

do {
    var questionSix = prompt('Guess a number between 1 and 10');
    if(parseInt(questionSix) === correctNumber) {
        console.log('you are correct!');
        alert('You are correct!');
        guessAttempts = 4;
    } else if(parseInt(questionSix) > 7) {
        guessAttempts++;
        console.log('Too High' + guessAttempts);
    } else {
        guessAttempts++;
        console.log('Too Low' + guessAttempts);
    }
}while (guessAttempts < 4);


// if(questionSix === 7) {
//     console.log('you are correct!');
//     alert('You are correct!');
// } else if(questionSix >7) {
//     console.log('Too High');
// } else {
//     console.log('Too Low');
// }


// alert('Well done ' + userName + '! Thanks for visiting and taking my quiz!');