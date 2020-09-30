// questions from https://codepen.io/boopalan002/pen/yKZVGa

const questions = [{
    question: "1. How do you write 'Hello World' in an alert box?",
    choices: ["msg('Hello World')", "msgBox('Hello World');", "alertBox('Hello World');", "alert('Hello World');"],
    correctAnswer: 3
}, {
    question: "2. How to empty an array in JavaScript?",
    choices: ["arrayList[]", "arrayList(0)", "arrayList.length=0", "arrayList.len(0)"],
    correctAnswer: 2
}, {
    question: "3. What function to add an element at the begining of an array and one at the end?",
    choices: ["push,unshift", "unshift,push", "first,push", "unshift,last"],
    correctAnswer: 1
}, {
    question: "4. What will this output? var a = [1, 2, 3]; console.log(a[6]);",
    choices: ["undefined", "0", "prints nothing", "Syntax error"],
    correctAnswer: 0
}, {
    question: "5. What would following code return? console.log(typeof typeof 1);",
    choices: ["string", "number", "Syntax error", "undefined"],
    correctAnswer: 0
},{
	question: "6. Which software company developed JavaScript?",
    choices: ["Mozilla", "Netscape", "Sun Microsystems", "Oracle"],
    correctAnswer: 1
},{
	question: "7. What would be the result of 3+2+'7'?",
    choices: ["327", "12", "14", "57"],
    correctAnswer: 3
},{
	question: "8. Look at the following selector: $('div'). What does it select?",
    choices: ["The first div element", "The last div element", "All div elements", "Current div element"],
    correctAnswer: 2
},{
	question: "9. How can a value be appended to an array?",
    choices: ["arr(length).value;", "arr[arr.length]=value;", "arr[]=add(value);", "None of these"],
    correctAnswer: 1
},{
	question: "10. What will the code below output to the console? console.log(1 +  +'2' + '2');",
    choices: ["'32'", "'122'", "'13'", "'14'"],
    correctAnswer: 0
}];

var timer= 75;
var score = 0;
var totalScore = 0;
var isWrong = false;
var gameOver = false;

// current index of myQuestions
var i = 0;

// buttons
var startBtn = document.getElementById('startButton');
var submitButton = document.getElementById('submit');
var countdownEl = document.getElementById('timer');




startBtn.addEventListener('click', buildQuiz)

function buildQuiz(){
    console.log('startBtn:', startBtn)
    updateTimer();
}


// timer section


// set interval of timer by 1 second
function updateTimer () {
    countdownEl.classList.remove('hide');
    var timerCountdown = setInterval(function(){
    console.log('timerCountdown:', timerCountdown)
        if(isWrong){
            timer = timer - 10
            isWrong = false;
        }
    timer--;
    countdownEl.textContent = timer;
        if (timer === 0) {
            gameOver = True;
            clearInterval(timerCountdown)
        }
    },1000);
  
}