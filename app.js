const startButton = document.getElementById('start-Button');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('questions');
const answerButtonsElement = document.getElementById('answer-buttons');
const userScore = document.getElementById('score');
let randomQuestion;
let currentQuestion;
let score = 0;
startButton.addEventListener('click', startQuiz)

function startQuiz(){
  //hides the start button and reveals the hiddent questions when start button is pressed...
  startButton.classList.add('hide')
  userScore.innerText = score
  questionContainerElement.classList.remove('hide')
  randomQuestion = questions.sort(() => Math.random() - .5)
  currentQuestion = 0
  getNextQuestion()
}

function getNextQuestion(){
  resetState()
  showQuestion(randomQuestion[currentQuestion])
}

function showQuestion(question){
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button  = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    button.classList.remove('correct')
    button.classList.remove('incorrect')
    if (answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState(){
  while(answerButtonsElement.firstChild){
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }
}

function selectAnswer(e){
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  if (correct){
    selectedButton.classList.add('correct')
    score ++
    userScore.innerText = score
    console.log(score)

  }else{
    selectedButton.classList.add('incorrect')

  }
  if(randomQuestion.length > currentQuestion + 1){
    setTimeout(next, 500)
  }else{
    startButton.innerText = 'restart'
    startButton.classList.remove('hide')
    questionContainerElement.classList.add('hide')
  }

}


function next(){
  currentQuestion++
  getNextQuestion()
}


const questions = [
  { question:  'What is the HTML tag under which one can write the JavaScript code?',
    answers: [
      {text: '<javascript>', correct : false},
      {text: '<scripted>', correct : false},
      {text: '<script>', correct : true},
      {text: '<js>', correct : false}
    ]
  },
  { question:  'Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?',
    answers: [
      {text: 'alertbox(“GeeksforGeeks”);', correct : false},
      {text: 'msg(“GeeksforGeeks”);', correct : false},
      {text: 'msgbox(“GeeksforGeeks”);', correct : false},
      {text: 'alert(“GeeksforGeeks”);', correct : true}
    ]
  },
  { question:  'What is the correct syntax for referring to an external script called “geek.js”?',
    answers: [
      {text: '<script src=”geek.js”>', correct : true},
      {text: '<script href=”geek.js”>', correct : false},
      {text: '<script ref=”geek.js”>', correct : false},
      {text: '<script name=”geek.js”>', correct : false}
    ]
  },
  { question:  ' Which of the following is not a reserved word in JavaScript?',
    answers: [
      {text: 'interface', correct : false},
      {text: 'throws', correct : false},
      {text: 'program', correct : true},
      {text: ' short', correct : false}
    ]
  }

]
