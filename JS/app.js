'use strict'; // use strict mode to prevent doing mistakes 

var userInput = prompt('What is your name?'); //to entract with the user
alert('Hello '+userInput);
//console.log (userInput);



 var user = prompt('How are you feeling today? (good/bad)');
 //console.log(user);
 console.log(user.toLowerCase());

 if (user.toLowerCase() === 'good') {
     alert (' We are glad you are feeling good');
  } else {
    alert ('Never mind Im sure you will be ok');
  }

  var first = confirm ('We will play guessing me game with a random general Questions ..are you excited?' ); // only takes boolean values (true/ false)
 //console.log(first);
 if(first == true){
     alert('Great Lets start :)');
 } else {
     alert('oh no :( Im sure you will have fun so come on!');
 }

 var usergame = prompt('Is my Favorite color Yellow ? choose  (Yes/No)'); //start with the first question
 
  //console.log(usergame);
 console.log(usergame.toLowerCase());
 if (usergame == 'no'){
alert (' Right black is my favorite :D lets go to the next Question ');
 } else {
     alert ('No you are wrong black is my favorite :( lets go to the next Question ');
 }
 
 var usergame1 = prompt('am I 24 Years Old ? choose  (Yes/No)');
  //console.log(usergame1);
 console.log(usergame1.toLowerCase());
 if (usergame1 === 'yes'){
alert (' Right Im 24 yers old :D lets go to the next Question ');
 } else {
     alert ('No you are wrong Im 24 years old :( lets go to the next Question ');
 }

  
 var usergame2 = prompt('Do I think before I act ? choose one (Yes/No)');
  //console.log(usergame2);
 console.log(usergame2.toLowerCase());
 if (usergame2 === 'yes'){
alert (' Yes right :D lets go to the next Question ');
 } else {
     alert ('No you are wrong I think before I act most of the time  :( lets go to the next Question ');
 }

 var usergame3 = prompt('Do I like horror movies? ? choose one (Yes / No)'); // last question
  //console.log(usergame3);
 console.log(usergame3.toLowerCase());
 if (usergame3 === 'yes'){
alert (' Yes right :D ');
 } else {
     alert ('No you are wrong I Like horror movies they are my favorite ');
 }

 
function questionSix(){
    var correctAns = 5;
    var userScore = 0;
    for(let i = 0; i < 4; i++){
      var userGuess = parseInt(prompt('Try to guess a number from 1 to 15: you have 4 attempts '));
      if (userGuess > correctAns){
        // console.log('Too High');
        alert('Too High');
      }else if (userGuess < correctAns){
        // console.log('Too Low');
        alert('Too low');
      }else if ( userGuess === correctAns){
        // console.log('That\'s Correct');
        alert('That\'s Correct');
        userScore += 1;
      }
    }
    // console.log(correctAns);
    alert('The correct answer is: ' + correctAns);
    return userScore;
  }
  //alert(questionNumSix());
  // console.log(questionNumSix());
  
  function questionSeven(){
    var userScore = 0;
    var correctAns = [10, 25, 5, 30, 9, 11, 45, 12, 27, 49];
    for (let i = 0; i < 6; i++){
      var userGuess = parseInt(prompt('Try to guess a number from 0 to 50: you have 6 attempt'));
      // loob through the array to check the answer
      for (let j = 0; j < correctAns.length; j++){
        if (userGuess === correctAns[j]){
          // console.log('That is Correct');
          alert('That is Correct');
          userScore += 1;
        }
      }
    }
    // console.log(correctAns);
    alert('The correct answers are: ' + correctAns);
    return userScore;
  }
  // console.log(questionNumSix() + questionNumSeven());
  alert('your final score is: ' + (questionSix() + questionSeven()));
  
 
 var theLastQ = prompt('So Did You enjoy ? Yes/No'); // to know if the user satisfied or not

 switch (theLastQ) {

 case 'yes':
 alert ('That is great ' +userInput + ' have fun in my webpage');
 break;
 case 'no':
 alert ('sorry for bothering you '+ userInput + ' Hope you enjoy my webpage' );
 break;
 

}