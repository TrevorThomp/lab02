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
var q6Attempts = 0;
var count = 0;

while (q6Attempts < 4) {
    var questionSix = prompt('Guess a number between 1 and 10');
    var tries;
    if(parseInt(questionSix) === correctNumber) {
        alert('You are correct!');
        q6Attempts = 4;
    } else if(parseInt(questionSix) > 7) {
        count++;
        q6Attempts++;
        tries = alert('To high! Try again! ' + (4 - count) + ' attempts left');
    } else {
        count++;
        q6Attempts++;
        tries = alert('To low! Try again! ' + (4 - count) + ' attempts left');
    }
}

// do {
//     var questionSix = prompt('Guess a number between 1 and 10');
//     var tries;
//     if(parseInt(questionSix) === correctNumber) {
//         alert('You are correct!');
//         q6Attempts = 4;
//     } else if(parseInt(questionSix) > 7) {
//         count++;
//         q6Attempts++;
//         tries = alert('To high! Try again! ' + (4 - count) + ' attempts left');
//     } else {
//         count++;
//         q6Attempts++;
//         tries = alert('To low! Try again! ' + (4 - count) + ' attempts left');
//     }
// }while(q6Attempts < 4);

// var correctColor = [Red, Green, Blue, Black, Gold, White];
// var q7Attempts = 0;
// do {
// var questionSeven = prompt('Name a color on the South African flag');

// }while();


// if(questionSix === 7) {
//     console.log('you are correct!');
//     alert('You are correct!');
// } else if(questionSix >7) {
//     console.log('Too High');
// } else {
//     console.log('Too Low');
// }


// alert('Well done ' + userName + '! Thanks for visiting and taking my quiz!');