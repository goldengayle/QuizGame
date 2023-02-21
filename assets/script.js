//Set variables
var startButton = document.querySelector(".start-button");
var quizArea = document.querySelector(".quiz-area");
var timeEl = document.querySelector(".timer")
var form =document.querySelector("form")
var question =document.createElement("h2");
var timerInterval = "";
var secondsLeft = 60;
var highScores =document.querySelector(".highScores")
var count=0;
var questionsAnswered=0;
var questionAmount = 8;
var progress = document.querySelector(".progress")
var questionSuccess = document.createElement("h3");
var gameProgress = document.createElement("h3");
gameProgress.textContent="";
questionSuccess.textContent="";
progress.appendChild(questionSuccess);
progress.appendChild(gameProgress);
var score ; 
var initials="";
var faveE="";
var submitButton= document.querySelector(".submitButton")



//Set Questions
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

var question4 = {
    question: "The atomic number",
    answers: ["Tells you what can and cannot move in an atom","Orbits the center proton", "States how many quarks are in the nucleus", "Is the same as the amount of protons"],
    rightAnswer: "Is the same as the amount of protons"

}

var question5 ={
    question:"What is the charge on an atom with 10 protons and 8 electrons?",
    answers:["+2", "-1", "+10", "Neutral"],
    rightAnswer:"+2"
}

var question6 ={
    question: "If the atomic number of an element is 6 and its mass number is 13, how many protons are contained in the nucleus?",
    answers:[6, 7, 8, 13],
    rightAnswer:6
    
}

var question7 ={
    question:"A hydrogen atom is made up of one proton and one electron. The proton and electron stay near each other because",
    answers: ["Positive and negative charges repel", "Positive and positive charges repel", "Positive and negative charges attract", "Two negatives make a positive"],
    rightAnswer: "Positive and negative charges attract"
}

var question8 ={
    question:"The atomic number of a certain element is 19, and its atomic weight is 39. An atom of the element contains _____ protons, _____ neutrons, and the chemical symbol for the element is _____.",
    answers:["19, 19, F", "19, 20, F", "19, 20, K","20, 19, K"],
    rightAnswer: "19, 20, K"
}

var questionBank = [question1, question2, question3, question4, question5, question6, question7, question8];



//Displays questions randomly with random answers. Sets evenet listeners to right and wrong answers
function displayQuestion () {
    if(questionBank.length===0){
        return;
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

    
  
// If right, adds to count (correct answers) and the total questions answered.    
function answerRight(){
            
            count++;
            questionsAnswered++;
            questionSuccess.textContent="Correct! Great job!"; 
            gameProgress.textContent="You've answered " + count + " out of " + questionsAnswered + " correct!";
            resetQuestion();
            
        } 
// If wrong, adds to total questions answered and subtracts 5 seconds from the clock
function answerWrong(){
          
           questionsAnswered++;
            secondsLeft -=5;
            questionSuccess.textContent="Incorrect. Please study this concept. You lost 5 seconds";
            gameProgress.textContent="You've answered " + count + " out of " + questionsAnswered + " correct!";
            resetQuestion();

            
        
    }

    // clears out previous question and displays a new question
    function resetQuestion(){
        quizArea.innerHTML= "";
        displayQuestion();
    }

//clearsquiz area and displays form.
function endGame(){
    quizArea.innerHTML="";
    form.style.display="block";
    timeEl.innerHTML="";
    gameProgress.textContent="";
    questionSuccess.textContent="";
    
   
}

var scoreList = JSON.parse(localStorage.getItem("roundStats")) || [];

//Stores data from form into local storage. The favorite element stored variable may be used for something in the future. 
function storeInfo(){
    
    var initials = document.querySelector("#initials").value;
    var score = secondsLeft*100*count
    var faveE =document.querySelector("#faveE").value;

    if (initials === ""){
        initials ="Future Chemist";
    }
    if(faveE ===""){
        faveE="Vibranium";
    }
   
    
    scoreList.push({initials:initials, score:score, faveE:faveE});
    localStorage.setItem("roundStats", JSON.stringify(scoreList));

    clearTimeout(startTimer); 
    if (count === 1){
    alert("Congratulations, "+ initials + " you answered " + count +" question correctly. You scored " + score +" points.") 
    } else {
        alert("Congratulations, "+ initials + " you answered " + count +" questions correctly. You scored " + score +" points.") 
    }
    startButton.style.display = "block";  
}
    
   
submitButton.addEventListener("click", storeInfo)  
//getHighScores.addEventListener("click", getHighScores)

//localStorage.setItem("initials", initials);
    //localStorage.setItem("score", score);
    
   
    
    
    
   // var yourScores = document.createElement("h3");
   // yourScores.textContent = initials + " scored " + score + " points and got " + count +" questions right!";
   // highScores.appendChild(yourScores);


function getHighScores () {
    var Scores = localStorage.getItem("max(highscores)")
    console.log(highestScore)
    var lastScores = JSON.parse(localStorage.getItem("roundStats"));
    console.log(lastScores)
}
    
        
    
   

   




//Starts timer at beginning of the game. Ends timer when all questions have been answered or time is 0.
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

    
// Starts timer and beginning conditions if on replay.
function startGame() {
    
    startButton.style.display ="none";
    if (questionBank.length !== questionAmount){
        questionBank=[];
        question1.answers =[];
        question2.answers=[];
        question3.answers=[];
        question4.answers=[];
        question5.answers=[];
        question6.answers=[];
        question7.answers=[];
        question8.answers =[];
        questionBank.push(question1, question2, question3, question4, question5, question6, question7, question8);
        question1.answers.push("Proton", "Neutron", "Electron","Quark")
        question2.answers.push("different atomic numbers", "different numbers of neutrons","different numbers of protons","different numbers of electrons")
        question3.answers.push(5,8,9,13);
        question4.answers.push("Tells you what can and cannot move in an atom","Orbits the center proton", "States how many quarks are in the nucleus", "Is the same as the amount of protons");
        question5.answers.push(+2, -1, +10, "Neutral");
        question6.answers.push(6, 7, 8, 13);
        question7.answers.push("Positive and negative charges repel", "Positive and positive charges repel", "Positive and negative charges attract", "Two negatives make a positive");
        question8.answers.push("19, 19, F", "19, 20, F", "19, 20, K","20, 19, K");
        secondsLeft=60;
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