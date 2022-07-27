//Questions and answers

var questions = ['What does HTML stand for?', 'What does CSS stand for?', 'Which of used to link a js file', 'Which opensource site offers helpful accessories for javascript?'];
var firstanswers = ['Hyper Mega Language', 'Centered Simple Styles', '<Script>', 'HTML'];
var secondanswers = ['Hypertext Markup Language', 'Creative Style Sheets', '<Head>', 'javaQuery'];
var thirdanswers = ['Holy Moly Language', 'Cascading Super Sheets', '<meta>', 'Youtube'];
var fourthanswers = ['Hyper Mechanics Language', 'Cascading Style Sheets', '<button>', 'jQuery'];
var correctAnswers = ['.answer2', '.answer4', '.answer1', '.answer4'];
var questionNumber = 0;

//Queries to HTML buttons

var one = document.querySelector('.answer1');
var two = document.querySelector('.answer2');
var three = document.querySelector('.answer3');
var four = document.querySelector('.answer4');
var quiz = document.querySelector('.container');
var question = document.querySelector('.question');
var congrats = document.querySelector('.congrats');
var result = document.querySelector('.result');
var answers = document.querySelector('.answers');
var finished = document.querySelector('.finished');
var highScore = document.querySelector('#highscore');
var userName = document.querySelector('#userName');
question.textContent = questions[questionNumber];
one.textContent = firstanswers[questionNumber];
two.textContent = secondanswers[questionNumber];
three.textContent = thirdanswers[questionNumber];
four.textContent = fourthanswers[questionNumber];
finished.removeChild(highScore);

//Timer

var secondsLeft;
var timeEl = document.querySelector("#ticker");

function setTime() {
  secondsLeft = 60;
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
   
    if(secondsLeft <= 10) {
        timeEl.setAttribute("style", "color:red;");
    }
    
    if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        secondsLeft = 0;
        timeEl.textContent = secondsLeft;
        console.log(secondsLeft);
    }
    if(questionNumber === 5) {
        clearInterval(timerInterval);
    }
  
  }, 1000);
} 


setTime();
//Prompting different questions

function navigate(next) {
    questionNumber = questionNumber + next;
    question.textContent = questions[questionNumber];
    one.textContent = firstanswers[questionNumber];
    two.textContent = secondanswers[questionNumber];
    three.textContent = thirdanswers[questionNumber];
    four.textContent = fourthanswers[questionNumber];
};

//Clicking and selecting answers

answers.addEventListener('click', function(event) {
    var element = event.target;

    if (element.matches('button') ) {
        
        if(secondsLeft === 0) {
            result.classList.remove('show');
            void result.offsetWidth;
            result.classList.add('show'); 
            result.textContent = 'TIMES UP!';
        }
       
        else if (element.matches(correctAnswers[questionNumber])) {
     
       result.classList.remove('show');
       void result.offsetWidth;
       result.classList.add('show');
       result.textContent = 'Correct!';
       event.stopPropagation();
       navigate(1);
       
       if (questionNumber === 5) {
        global.removeChild(quiz);
        finished.appendChild(highScore);
        congrats.textContent = 'YOU ARE WINNER';

    };
        } else {
            result.classList.remove('show');
            void result.offsetWidth;
            result.classList.add('show'); 
            result.textContent = 'That answer is incorrect!';
            secondsLeft = secondsLeft - 10;
        };
       
    };
});


