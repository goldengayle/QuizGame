var startButton = document.querySelector(".start-button");
var quizArea = document.querySelector(".quiz-area");
var question =document.createElement("h2");
var answerList = document.createElement("ul")
var answer1 = document.createElement("li");
var answer2 = document.createElement("li");
var answer3 = document.createElement("li");
var answer4 = document.createElement("li");
var answercount ;

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

/*function shuffle(questionBank) {
 for (i=questionBank.length -1; i >0; i--){
  var j = Math.floor(Math.random() * (i+1));
  [questionBank[i], questionBank[j]] = [questionBank[j], questionBank[i]];
  console.log(questionBank);
 }
 
}
shuffle(questionBank);
*/




    //need to add attributes wrong and right

   


    

    



//hooseQuestion();

function displayQuestion () {
    var thisQuestion = questionBank[Math.floor(Math.random()* questionBank.length)];
    var takeOut = questionBank.indexOf(thisQuestion);
    questionBank.splice(takeOut, 1);
    quizArea.appendChild(question);
    question.textContent = thisQuestion.question
    quizArea.appendChild(answerList);
    for (i=0; i< 4; i++){
        var thisAnswer = thisQuestion.answers[Math.floor(Math.random()* thisQuestion.answers.length)];
        if (thisAnswer === thisQuestion.rightAnswer){
            var answer = document.createElement("li");
            answer.textContent = thisAnswer;
            answerList.appendChild(answer).setAttribute("class","right");
           
        } else{
            var answer = document.createElement("li");
            answer.textContent = thisAnswer;
            answerList.appendChild(answer);
        }
        var takeout1 = thisQuestion.answers.indexOf(thisAnswer);
        thisQuestion.answers.splice(takeout1,1);}
    }
    displayQuestion();

    /* var theseAnswers = thisQuestion.answers[Math.floor(Math.random()*thisQuestion.answers.length)]
    var right = thisQuestion.answers.indexOf(thisQuestion.rightAnswer);
    thisQuestion.answers[right].setAttribute =("class", "right");
    question.textContent = thisQuestion.question
    answer1.textContent = thisQuestion.answers[0];
    answer2.textContent = thisQuestion.answers[1];
    answer3.textContent = thisQuestion.answers[2];
    answer4.textContent = thisQuestion.answers[3];
    for (i=0; i<thisQuestion.answers.length; i++){
    if (thisQuestion.answers[i] === thisQuestion.rightAnswer){
        thisQuestion.answers[i].setAttribute = "class", "right"
    } }
    quizArea.appendChild(question); 
    quizArea.appendChild(answerList);
    quizArea.appendChild(answer1);
    quizArea.appendChild(answer2);
    quizArea.appendChild(answer3);
    quizArea.appendChild(answer4);
   
}

displayQuestion();
console.log(questionBank);
questionBank.splice(0, 1);
console.log(questionBank.length);



function startGame() {
    startButton.remove();
    //isWin = false;
    timerCount = 10;
    startTimer();
    shuffle();

  }

  startButton.addEventListener("click", startGame);*/