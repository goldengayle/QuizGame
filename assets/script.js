var startButton = document.querySelector(".start-button");
var quizArea = document.querySelector(".quiz-area");
var timeEl = document.querySelector(".timer")
var question =document.createElement("h2");
var timerInterval = "";
var secondsLeft = 20;
var highScores =document.querySelector(".highScores")
var count=0;
var questionsAnswered=0;
var questionAmount = 3;
/*var progress = document.querySelector(".progress")
var questionSuccess = document.createElement("h3");
questionSuccess.textContent("none");
progress.appendChild(questionSuccess);*/



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
var questionBank = [question1, question2, question3];


startButton.addEventListener("click", startGame);

function displayQuestion () {
    /*if(secondsLeft===0){
        endGame();
    }else{*/

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

    

    
  
     
     function answerRight(){
            //questionSuccess.innerHTML("Correct!") 
            count++;
            questionsAnswered++;
            console.log(count);
            resetQuestion();
            
        } 
    function answerWrong(){
           //questionSuccess.textContent("You got it wrong. You lost 4 seconds");
           questionsAnswered++;
            secondsLeft -=4;
            resetQuestion();

            
        
    }

    function resetQuestion(){
       /* if (questionBank.length ===0){
            endGame();
        }else{*/
        quizArea.innerHTML= "";
        displayQuestion();
    }  


function endGame(){
    quizArea.innerHTML="";
    var initials = prompt("enter your initials")
    var score = secondsLeft*100*count
    timeEl.innerHTML="";
    var yourScores = document.createElement("h3");
    yourScores.textContent = initials + " scored " + score + " points and got " + count +" questions right!";
    highScores.appendChild(yourScores);
    localStorage.setItem("initials", initials);
    localStorage.setItem("score", score);
    startButton.style.display = "block";
    
    
    clearTimeout(startTimer);  
}
    
   
   
    
        
    
   

   





function startTimer() {
    var timerInterval = setInterval(function (){
       secondsLeft--; 
       timeEl.textContent = secondsLeft +" seconds left";

       if (secondsLeft <= 0 || questionsAnswered===questionAmount) {
        quizArea.innerHTML="";
        endGame();
        clearInterval(timerInterval);
       timeEl.textContent="";
       
       }


       }, 1000);
    }

    

function startGame() {
    
    startButton.style.display ="none";
    if (questionBank.length !== questionAmount){
        questionBank=[];
        question1.answers =[];
        question2.answers=[];
        question3.answers=[];
        questionBank.push(question1, question2, question3);
        question1.answers.push("Proton", "Neutron", "Electron","Quark")
        question2.answers.push("different atomic numbers", "different numbers of neutrons","different numbers of protons","different numbers of electrons")
        question3.answers.push(5,8,9,13);
        secondsLeft=20;
        count=0;
        questionsAnswered=0;
         displayQuestion();
        startTimer();
    } else{
    displayQuestion();
    startTimer();
    } 
  }

  
  startButton.addEventListener("click", startGame)
  
  
  
