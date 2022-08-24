//Steps for javascript code

//Variable declarations
var timerVal = 120;
var startBtn = document.getElementById("start")
var time = document.getElementById("time");
var curQues = document.getElementById("title");
var question = document.getElementById("question");
var myList = document.getElementById("ansList");

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
    ["What does <ul> represent?", 1]
    ];
    //Array with Possible answers
let posAns = [
    ["Array", "String", "Integer", "Long"],
    ["For", "If", "Break", "Cobra"],
    ["Variable var = new Variable()", "var = [value]", "new var = [value]", "var name = [data]"],
    ["8", "4", "2", "1"],
    ["False", "True"],
    ["It will run one time and exit", "It will not run", "It will run forever", "None of these"],
    ["True", "False"],
    ["Arctic Penguin Inspector", "Arithmetic Progeny Injector", "Application Project Information", "Application Programming Interface"],
    ["<div>", "<section>", "<title>", "<p>"],
    ["Unordered List", "Unorganized List", "Unusable Link", "Upper Limit"]
];

//Function for reading DOM elements
function startQuiz() {
    startBtn.style = "display:none";
    timer();
    setInterval(timer, 1000);
    myList.innerHTML = '';
    question.style = "";
    quizRun();
}

function quizRun() {
    for(var i = 0; i < quesNAns.length; i++)
    {
        alert("hi");
        curQues.innerText = "Question " + (i + 1);
        question.innerHTML = quesNAns[i][0];

        for(var j = 0; j < posAns[i][j].length; j++)
        {
            var ansItem = document.createElement("button");
            ansItem.textContent = posAns[i][j].toString();
            ansItem.className = "btn";
            myList.appendChild(ansItem);
        }
    }
}

function endQuiz(){

}

function timer() {
    time.innerText = timerVal;
    timerVal--;
    if(timerVal == 0)
    {
        endQuiz();
    }
}
    //Will randomly choose a question from the array to display

//Instantiate local storage for holding high score data

//Eventlisteners
startBtn.addEventListener("click", function() { startQuiz() });
