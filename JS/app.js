'use strict'; // use strict mode to prevent doing mistakes 

// welcoming user 
var userName = prompt('Hi, What is Your name?');
alert('Hello and Welcome ' + userName);


var user = prompt('How are you feeling today? (good/bad)');

if (user.toLowerCase() === 'good') {
  alert(' We are glad you are feeling good');
} else {
  alert('Never mind Im sure you will be ok');
}
var first = confirm('We will play guessing me game with a random general Questions ..are you excited?'); // only takes boolean values (true/ false)
if (first == true) {
  alert('Great Lets start :)');
} else {
  alert('oh no :( Im sure you will have fun so come on!');
}
function aboutMeQ() {
  var userScore = 0;
  var QArray = ['Am I a Female? (yes/no)',
    'Yellow is my favorite color? (yes/no)',
    'Am I 24 Years Old ? (yes/no)',
    'Do I think before I act ? (yes/no)',
    'Do I like horror movies? ? (yes/no)'
  ];
  var questionAnswers = ['yes', 'no', 'yes', 'yes', 'yes'];
  // loob the question and the answers
  for (let i = 0; i < QArray.length; i++) {
    var userAnswer = prompt(QArray[i]).toLowerCase();
    if (userAnswer === questionAnswers[i]) {
      alert('Correct');
      userScore += 1;
    } else {
      alert('No, you are not Correct.');
    }
  }
  return userScore;
}

function sixthquestion() {
  var correctAnswer = 1996;
  var userScore = 0;
  for (let i = 0; i < 4; i++) {
    var userGuess = parseInt(prompt('You know my age now so try guess the year I was born in (just use your brain;)) : you have 4 attempts'));
    if (userGuess !== correctAnswer) {
      alert('wrong');
    } else if (userGuess === correctAnswer) {
      alert('That\'s Correct');
      userScore += 1;
      break;
    }
  }
  alert('The correct answer is: ' + correctAnswer);
  return userScore;
}
function seventhquestion() {
  var userScore = 0;
  var correctAnswer = ['prison break', 'game of thrones', 'how to get away with murder', 'elite', 'la mante', 'the inimate', 'dexter'];
  for (let i = 0; i < 6; i++) {
    var userGuess = prompt('Try to guess one of my favorite TV shows : you have 6 attempt');
    // loob through the array to check the answer
    for (let j = 0; j < correctAnswer.length; j++) {
      if (userGuess.toLowerCase() === correctAnswer[j]) {
        alert('That is Correct');
        userScore += 1;
        break;
      }
    }
    if (userScore >= 1) {
      break;
    }
  }

  alert(' You will see all my Fav TV Shows in my page here ');
  return userScore;
}
alert('your final score is: ' + (aboutMeQ() + sixthquestion() + seventhquestion()) + ' out of 7');
var theLastQ = prompt('So Did You enjoy ? Yes/No'); // to know if the user satisfied or not
switch (theLastQ) {
  case 'yes':
    alert('That is great ' + userName + ' have fun in my webpage');
    break;
  case 'no':
    alert('sorry for bothering you ' + userName + ' Hope you enjoy my webpage');
    break;

}
