const questions = [
  {
    question: "  Which is  largest animal in the world?",
    answers: [
      { text: "Shark", correct: "false" },
      { text: "cat", correct: "false" },
      { text: "Giraffe", correct: "false" },
      { text: "Blue Whale", correct: "true" },
    ],
  },
 
  {
    question: "  Which is  largest continent  in the world?",
    answers: [
      { text: "Asia", correct: "true" },
      { text: "Australia", correct: "false" },
      { text: "Arctic", correct: "false" },
      { text: "Africa", correct: "false" },
    ],
  },
  {
    question: "  Which is  the smallest continent  in the world?",
    answers: [
      { text: "Asia", correct: "false" },
      { text: "Australia", correct: "true" },
      { text: "Arctic", correct: "false" },
      { text: "Africa", correct: "false" },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerbuttons = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");

let currentquestionindex = 0;
let score = 0;

function startQuiz() {
  currentquestionindex = 0;
   score = 0;
  nextbutton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentquestionindex];
  let questionNo = currentquestionindex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerbuttons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswere);
  });
}
resetState = () => {
  nextbutton.style.display = "none";
  while (answerbuttons.firstChild) {
    answerbuttons.removeChild(answerbuttons.firstChild);
  }
};

selectAnswere = (e) => {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerbuttons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextbutton.style.display = "block";
};

showScore =()=>{
  resetState()
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextbutton.innerHTML= "Play Again"
  nextbutton.style.display = "block";
}

handlenextbutton=()=>{
  currentquestionindex++
  if(currentquestionindex< questions.length){
    showQuestion()
  }
  else{
    showScore()
  }
}

nextbutton.addEventListener("click",()=>{
  if(currentquestionindex < questions.length){
    handlenextbutton()
  }
  else{
    startQuiz()
  }
})
startQuiz();
