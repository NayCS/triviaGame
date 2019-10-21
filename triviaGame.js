//select all elements 
const start = document.getElementById("start")
const quiz = document.getElementById("quiz")
const question = document.getElementById("question")
const qImg = document.getElementById("qImg")
const choices = document.getElementById("choices")
const choiceA = document.getElementById("A")
const choiceB = document.getElementById("B")
const choiceC = document.getElementById("C")
const timer = document.getElementById("timer")
const counter = document.getElementById("counter")
const btimeGauge = document.getElementById("btimeGauge")
const timeGauge = document.getElementById("timeGauge")
const progress = document.getElementById("progress")
const scoreDiv = document.getElementById("scoreContainer")

let question = [
    {
        question: "Name of Spanish artist famous for co-founding the Cubist Movement",
        /*
        Here add following options:
        Ans: Pablo Picasso
        Other:
            Salvador Dali
            Antonio Gaudi
        */
        imgSrc: "../Assets/images/cubismo.jpg",
        choiceA: "Pablo Picasso",
        choiceB: "Salvador Dali",
        choiceC: "Antonio Gaudi",
        correct: "A"
    }, {
        question: "Name of primary colors",
        /*
        Here add following options:
        Ans: Red, Yellow, Blue
        Other:
            Green, Yellow, Brown
            Blue, Red, Green
        */
        imgSrc: "../Assets/images/colors.png",
        choiceA: "Green, Yellow, Brown",
        choiceB: "Red, Yellow, Blue",
        choiceC: "Blue, Red, Green",
        correct: B
    }, {
        question: "What is the meaning of the word 'Adagio'",
        /*
        Here add following options:
        Ans: Music term that means 'In slow tempo'
        Other:
            Name of city in the Tuscany region of Italy
            Popular type of shoes worn by French Monarchy in the 16th century
        */
        imgSrc: "../Assets/images/meaningOfWord.jpg",
        choiceA: "Name of city in the Tuscany region of Italy",
        choiceB: "Popular type of shoes worn by French Monarchy in the 16th century",
        choiceC: "Music term that means 'In slow tempo",
        correct: C
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0
const questionTime = 10; // 10s
const guagueWidth = 150 //150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

//render a question 

function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

//start quiz
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

//render progress
function renderProgress() {
    for (let qIndex = 0); qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML
    }
}

//counter render 

function renderCounter() {
    if (count < questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    } else {
        count = 0;
        //Change progress color to red
        answerIsWrong();
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            //end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

//checkAnswer
function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        //answer is correct
        score++;
        //change progress color to green
        answerIsCorrect();
    } else {
        //answer is wrong
        //change progress to red
        answerIsWrong();
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion;
    } else {
        //end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

//answer is correct
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";

    function answerIsWrong() {
        document.getElementById(runningQuestion).style.backgroundColor = "#f00";
    }
    //score render 
    function scoreRender() {
        scoreDiv.style.display = "block";

        //calculate the amount of question percet answered by the user 
        const scorePerCent = Math.round(100 * score / questions.lenght);

        //choose the image based on the scorePerCent
        let img = (scorePerCent >= 80) ? "Assets/images/5.png" :
            (scorePerCent >= 60) ? "Assets/images/4.png" :
                (scorePerCent >= 40) ? "Assets/images/3.png" :
                    (scorePerCent >= 20) ? "Assets/images/2.png" :
                        "Assets/images/1.png";

        scoreDiv.innerHTML = "img src" + img + ">";
        scoreDiv.innerHTML = "<p>" + scorePerCent + "%</p>";

    }