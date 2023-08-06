const questions = [
    {
        question: "Which of the following is a programming language used for creating web pages and web applications?",
        answers: [
            {text: "Java", correct: false},
            {text: "Python", correct: false},
            {text: "HTML", correct: true},
            {text: "C++", correct: false},
        ]
    },

    {
        question: "What does the acronym CSS stand for in web development? ",
        answers: [
            {text: "Cascading Style Sheets", correct: true},
            {text: "Common Style Sheets", correct: false},
            {text: "Creative Style Syntax", correct: false},
            {text: "Computer Server Script", correct: false},
        ]
    },

    {
        question: "Which programming language is known for its simplicity and readability, often used as a beginner-friendly language?",
        answers: [
            {text: "C", correct: false},
            {text: "Java", correct: false},
            {text: "JavaScript", correct: false},
            {text: "Python", correct: true},
        ]
    },

    {
        question: "What does the acronym IDE stand for in the context of software development?",
        answers: [
            {text: "Integrated Development Environment", correct: true},
            {text: "Interactive Design Element", correct: false},
            {text: "Interface Design Engine", correct: false},
            {text: "Integrated Design Execution", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })

}


function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct == "true"){
           button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();
