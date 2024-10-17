const questionDiv = document.querySelector("#question");
const answerDiv = document.querySelector("#answer");
const feedbackDiv = document.querySelector("#feedback");
let currentQuestion = null; //store the question that is returned from the Promise.

function getTriviaQuestion() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Code to fetch random trivia will go here
        const index = Math.floor(Math.random() * questions.length);
        const question = questions[index]; //use the random # as an index to get a random question from the array of questions.
        if (index > questions.length) { //handle potential errors
            reject('An error occurred while fetching the trivia question.');
          } else {
            resolve(question);
          }
      }, 1000); // Delay of 1s to simulate time to fetch a question
    });
  }

  function displayQuestion(triviaQuestion){
    questionDiv.textContent = triviaQuestion.question;
    answerDiv.value = ''; 
    feedbackDiv.textContent = '';
  }

  document.querySelector('#questionBtn').addEventListener('click', () => {
    getTriviaQuestion().then((question) => { //get a random question
        currentQuestion = question; //update the currentQuestion variable
        displayQuestion(question); //pass the question to the displayQuestion function
    })
  })

  document.querySelector("#answerBtn").addEventListener('click', () => {
    let feedbackMessage; //temporary variable to store a message
    const userAnswer = answerDiv.value.trim().toLowerCase(); 
    console.log(userAnswer, currentQuestion.answer); //print both answers to the log to help with debugging

    if(currentQuestion && userAnswer === currentQuestion.answer.toLowerCase()){
        feedbackDiv.computedStyleMap.color = 'green';
        feedbackMessage = 'Great job! Your answer is correct.'
    }else{
        feedbackDiv.computedStyleMap.color = 'red';
        feedbackMessage =`Sorry, that is incorrect. The correct answer is: "${currentQuestion.answer}". Try another question!`;
    }
    feedbackDiv.textContent = feedbackMessage;

  })