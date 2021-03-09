const startButton = document.getElementById('start-Button');
const questionContainerElement = document.getElementById('question-container');



startButton.addEventListener('click', startGame)

function startGame(){
  //hides the start button and reveals the hiddent questions when start button is pressed...
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  getNextQuestion()
}

function getNextQuestion(){
  
}
