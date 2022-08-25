//Variable declarations
var i = 0;
var correct = 10;
var penalty = 5;
var score = 0;
var penalty = 5;
var timerVal = 120;
var timer;
var highScoreCount = 0;
var startBtn = document.getElementById("start")
var time = document.getElementById("time");
var curQues = document.getElementById("title");
var question = document.getElementById("question");
var myList = document.getElementById("ansList");
var title = document.getElementById("title");

//Array containing questions with correct answer index
let quesNAns = [
    ["What data structure allows you to store multiple, same data type values?", 1],
    ["Which of these is a type of loop?", 1],
    ["How do you instantiate a variable in Javascript?", 4],
    ["How many bits in a byte?", 1],
    ["What does 1 < 1 evaluate to?", 2],
    ["What will happen in the following while() loop: \n while(true){ *expressions*}", 3],
    ["What will this expression evaluate to: \n !(8 > 7)", 2],
    ["What does API stand for?", 4],
    ["Which tag is used to change the page title at the top of your browser?", 3],
    ["What is a 'ul' in Javascript?", 1]
    ];

//Array with possible answers
let posAns = [
    ["Array", "String", "Integer", "Long"],
    ["For", "If", "Break", "Cobra"],
    ["Variable var = new Variable()", "var = [value]", "new var = [value]", "var name = [data]"],
    ["Eight", "Four", "Two", "One"],
    ["False", "True"],
    ["It will run one time and exit", "It will not run", "It will run forever", "None of these"],
    ["True", "False"],
    ["Arctic Penguin Inspector", "Arithmetic Progeny Injector", "Application Project Information", "Application Programming Interface"],
    ["<div>", "<section>", "<title>", "<header>"],
    ["Unordered List", "Unorganized List", "Unusable Link", "Upper Limit"]
];

//Function for setting up page after quiz start
function startQuiz() {
    startBtn.style = "display:none";
    timer();
    timer = setInterval(timer, 1000);
    clearList();
    question.style = "";
    quizRun();
}

//Function for looping through question and answer arrays
function quizRun() {

    if(i >= quesNAns.length)
    {
        endQuiz();
    }
    else
    {
        curQues.innerText = "Question " + (i + 1);
        question.innerHTML = quesNAns[i][0];

        for(var j = 0; j < posAns[i].length; j++)        
        {
            var ansItem = document.createElement("button");
            ansItem.textContent = posAns[i][j].toString();
            ansItem.id = "answer" + (j + 1);
            ansItem.className = "btn ansBtn";
            myList.appendChild(ansItem);
        }
    }
}

//Clears the unordered list for the next set of questions
function clearList() {
    while (myList.firstChild) {
        myList.removeChild(myList.firstChild);
    }
}

//Checks to see if the correct answer was chosen & either adds or subtracts points
function choiceCheck(id, correctAnswer){
    if(id.indexOf(correctAnswer) > -1){
        score += correct;
    }
    else{
        timerVal -= penalty;
    }
}

//Used to generate end of quiz page
function endQuiz(){
    clearInterval(timer);
    curQues.innerText = "Game Over!";
    question.innerHTML = "You scored " + score + " points! Enter your initials below!";
    var nameBox = document.createElement("input");
    nameBox.style = "margin:5px";
    nameBox.id = "nameBox";
    nameBox.className = "input initials";
    var listItem = document.createElement("button");
    listItem.textContent = "Submit"
    listItem.id = "subBtn";
    listItem.className = "btn subBtn";
    myList.appendChild(nameBox);
    myList.appendChild(listItem);
}

//Used to implement onscreen timer
function timer() {
    time.innerText = timerVal;
    timerVal--;
    if(timerVal == 0)
    {
        endQuiz();
    }
}

//***********Instantiate local storage for holding high score data
function saveScore(score, initials) {
    var hsEntry = [initials, score];
    localStorage.setItem("hsEntry" + highScoreCount, hsEntry);
    highScoreCount++;
}

//Generates high score page
function displayHighScores() {
    clearList();
    title.innerText = "High Scores";

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    for(var i = 0; i < values.length; i++)
    {
        var hsItem = document.createElement("p");
        hsItem.textContent = values[i];
        hsItem.id = "highScore" + i;
        hsItem.className = "label score";
        myList.appendChild(hsItem);
    }
}

//Eventlisteners
startBtn.addEventListener("click", function() { startQuiz() });
document.addEventListener("click", function(e){
    if(e.target.className == "btn ansBtn"){
        choiceCheck(e.target.id, quesNAns[i][1]);
        clearList();
        i++;
        quizRun();
     }
 });

 document.addEventListener("click", function(e){
    if(e.target.className == "btn subBtn"){
        saveScore(score, document.querySelector("#nameBox").value);
        displayHighScores();
     }
 });
