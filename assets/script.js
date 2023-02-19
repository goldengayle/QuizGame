var startButton = document.querySelector(".start-button");
var quizArea = document.querySelector(".quiz-area");
var timeEl = document.querySelector(".timer")
var question =document.createElement("h2");
var secondsLeft = 20;

var question1 = {
    question: "These are found in the nucleus and have a positive charge",
    answers: ["Proton", "Neutron", "Electron","Quark"],
    rightAnswer: "Proton"
}

var question2 = {
    question:"Isotopes are atoms of the same element with:",
    answers: ["different atomic numbers", "different numbers of neutrons","different numbers of protons","different numbers of electrons"],
    rightAnswer: "different numbers of neutrons"
}

var question3 =  {
    question: "A beryllium atom has 4 protons, 5 neutrons, and 4 electrons. What is the mass number of this atom?",
    answers: [5,8,9,13],
    rightAnswer: 9
}
var questionBank = [question1, question2, question3]

startButton.addEventListener("click", startGame);

function displayQuestion () {
    if (questionBank.length===0){
        endGame();

    }else{


    var thisQuestion = questionBank[Math.floor(Math.random()* questionBank.length)];
    var takeOut = questionBank.indexOf(thisQuestion);
    questionBank.splice(takeOut, 1);
    quizArea.appendChild(question);
    question.textContent = thisQuestion.question
    var answerList = document.createElement("ul")
    quizArea.appendChild(answerList);
    for (i=0; i< 4; i++){
        var thisAnswer = thisQuestion.answers[Math.floor(Math.random()* thisQuestion.answers.length)];
        if (thisAnswer === thisQuestion.rightAnswer){
            var answer = document.createElement("li");
            answer.textContent = thisAnswer;
            answerList.appendChild(answer).setAttribute("class","right answer");
           
        } else{
            var answer = document.createElement("li");
            answer.textContent = thisAnswer;
            answerList.appendChild(answer).setAttribute("class","wrong answer");
        }
        var takeout1 = thisQuestion.answers.indexOf(thisAnswer);
        thisQuestion.answers.splice(takeout1,1);}

        var rightEl = document.querySelector(".right")
        var wrongEl = document.querySelectorAll(".wrong")
        rightEl.addEventListener('click',answerRight);
        for (i=0 ; i < wrongEl.length; i++) {
            wrongEl[i].addEventListener('click', answerWrong)}
    }

}
    

    
  
     
     function answerRight(){
            var goodJob = document.createElement("h1")
            goodJob.textContent = "Good Job";
            quizArea.appendChild(goodJob);
            resetQuestion();
            
        } 
    function answerWrong(){
            var badJob = document.createElement("h1")
            badJob.textContent = "Bad Job";
            quizArea.appendChild(badJob);
            secondsLeft -=4;
            resetQuestion();

            
        
    }

    function resetQuestion(){
        if (secondsLeft===0){
            endGame();
        } else {
        quizArea.innerHTML= "";
        displayQuestion();
    }   
}

function endGame(){
    alert("Game Over");
    var initials = prompt("enter your initials")
    var highscores = document.createElement("h3");
    highscores.textContent = initials + secondsLeft*100;
    quizArea.appendChild(highscores);
}
    
        
   
    
        
    
   

   





function startTimer() {
    var timerInterval = setInterval(function (){
       secondsLeft--; 
       timeEl.textContent = secondsLeft +" seconds left";

       if (secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
       }


       }, 1000);
    }

    

function sendMessage() {
    timeEl.textContent ="";
    var gameMessage = document.createElement("h1");
    gameMessage.textContent = "Game Over";
    quizArea.appendChild(gameMessage);

}


function startGame() {
    startButton.remove();
    //isWin = false;
    displayQuestion();
    startTimer();
    
  }

  startButton.addEventListener("click", startGame);
