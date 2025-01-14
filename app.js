const questions  = [
    {
        question:"  Which is  largest animal in the world?",
        answers:[
    {text:"Shark", correct:"false"},
    {text:"cat", correct:"false"},
    {text:"Giraffe", correct:"false"},
    {text:"Blue Whale", correct:"true"},
]
    },
    {
        question:"  Which is  largest animal in the world?",
        answers:[
    {text:"Shark", correct:"false"},
    {text:"cat", correct:"false"},
    {text:"Giraffe", correct:"false"},
    {text:"Blue Whale", correct:"true"},
]
    },
    {
        question:"  Which is  largest continent  in the world?",
        answers:[
            {text:"Asia", correct:"trus"},
            {text:"Australia", correct:"false"},
            {text:"Arctic", correct:"false"},
            {text:"Africa", correct:"true"},
]
    },
    {
        question:"  Which is  the smallest continent  in the world?",
        answers:[
    {text:"Asia", correct:"false"},
    {text:"Australia", correct:"true"},
    {text:"Arctic", correct:"false"},
    {text:"Africa", correct:"false"},
]
    }
];
const  questionElement =  document.getElementById("question")
const  answerbuttons =  document.getElementById("answer-buttons");
const  nextbutton =  document.getElementById("next-btn");

let currentquestionindex = 0 
let score = 0;
function startQuiz(){
    currentquestionindex =0
    let score = 0;
    nextbutton.innerHTML="Next"
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentquestionindex]
    let questionNo = currentquestionindex + 1
    questionElement.innerHTML = questionNo + ". " +currentQuestion.question;
    

} 
