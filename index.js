const data = [
    {
      id: 1,
      question: "Which of these fish is actually a fish?",
      answers: [
        { answer: "swordfish", isCorrect: true },
        { answer: "jellyfish", isCorrect: false },
        { answer: "starfish", isCorrect: false },
        { answer: "crayfish", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "A flutter is a group of:",
      answers: [
        { answer: "bees", isCorrect: false },
        { answer: "penguins", isCorrect: false },
        { answer: "butterflies", isCorrect: true },
        { answer: "camels", isCorrect: false },
      ],
    },
    {
      id: 1,
      question: "A group of which animals is referred to as a wake?",
      answers: [
        { answer: "bats", isCorrect: false },
        { answer: "vultures", isCorrect: true },
        { answer: "ants", isCorrect: false },
      ],
    },
  ];


  const gameScreen = document.querySelector(".game")
  const resultScreen = document.querySelector(".result")
  const question = document.querySelector(".question")
  const answerContainer = document.querySelector(".answer")
  const submit = document.querySelector(".submit")
  const play = document.querySelector(".play")

  let qIndex = 0;
  let correctCount =0;
  let wrongCount =0;
  let total =0;
  let selectedAnswer;

  const showQuestion = (qIndex) => {
    selectedAnswer = null;
    if(qIndex === data.length){return showResult();}
    question.textContent = data[qIndex].question
    answerContainer.innerHTML = data[qIndex].answers.map((item, index) => `
    <div class="answer">
      <input type="radio" id="${index}" name = "answer"  value="${item.isCorrect}"/>
      <label for="answer" > ${item.answer}</label>
    </div>
    `).join("") ;
    selectAnswer();

  }

  
const selectAnswer= () =>{
    answerContainer.querySelectorAll("input").forEach((el)=>{
      el.addEventListener("click", (e)=>{
        selectedAnswer = e.target.value;
      })
    })
}

const submitAnswer = () => {
  submit.addEventListener("click", ()=>{
    if(selectedAnswer != null){
      selectedAnswer === "true"?correctCount++:wrongCount++
      qIndex++;
      showQuestion(qIndex)
    }
    else{
      alert("Please Select an Answer ")
    }
  })
}

const showResult = () =>{
  resultScreen.style.display ="block"
  gameScreen.style.display ="none"
  resultScreen.querySelector(".correct").textContent = `Correct Answer : ${correctCount} `
  resultScreen.querySelector(".incorrect").textContent = `Incorrect Answer : ${wrongCount} `
  resultScreen.querySelector(".score").textContent = `Total Score : ${correctCount - wrongCount * 10 } `
}

play.addEventListener("click", () =>{
  resultScreen.style.display ="none"
  gameScreen.style.display ="block"
  playAgain()
}
)
const playAgain = () =>{
  correctCount =0;
  wrongCount =0;
  total =0;
  qIndex = 0;
  showQuestion(qIndex)
  
}
showQuestion(qIndex)
submitAnswer();