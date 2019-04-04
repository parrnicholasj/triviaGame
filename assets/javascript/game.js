$(document).ready(function () {

  //create array of questions and their answers

  var questions = [

    one = {
      what: "Who founded Rome?",
      answer: "Romulus",
      options: ["Remus", "Caesar", "Hannibal", "Romulus"]

    },

    two = {
      what: "who was the first Roman Emperor?",
      answer: "Augustus",
      options: ["Romulus", "Augustus", "Hadrian", "Brutus"]

    },

    three = {
      what: "What year did Constantinople fall to the Ottomans?",
      answer: "1452",
      options: ["1452", "1204", "1492", "7"]
    }


  ]

  var count = 0;
  var correct = 0; //display results at end
  var wrong = 0;
  var clock = 10;

//use set interval to countdown from 10

  var timer;

  function goTime(){
    timer = setInterval(timerFunc, 1000);
  }

  //function to display questions and answers with id for correct answer
  function displayQuest(x) {

    $("#qBox").empty();

    //check when all questions have been answered
    if (count >= questions.length) {

      //display results
      $("#qBox").append(`<h2>Quiz Finished</h2>`);
      $("#qBox").append(`<h3>Correct Answers: ${correct}</h3>`);
      $("#qBox").append(`<h3>Wrong Answers: ${wrong}</h3>`);


    } else if (count < questions.length) {


      var $question = $(`<h3>${questions[x].what}</h3>`);
      $("#qBox").append($question);

      for (var i = 0; i < questions[x].options.length; i++) {

        $option = $(`<button type="button" class="btn btn-primary">${questions[x].options[i]}</button>`);
        $("#qBox").append($option);

        //when a question is created set a timer when it goes off auto skip the question
        
      }
      clock = 10;//reset clock
      goTime();
    }

  }

  function timerFunc(){

    //count as wrong answer if not answered on time
    
    clock--;

    //update clock element

    if (clock <= 0 ){incorrect()}

  }

  $("#qBox").on("click", ".btn", function () { //determine if player clicked correct answer

    console.log($(this).text());
    if ($(this).text() == questions[count].answer) {

      count++;
      correct++;
      displayQuest(count);
      //clearTimeout(timer);

    } else {
      incorrect();
      //clearTimeout(timer);
    }

  })

  function incorrect() {

    count++;
    wrong++;
    displayQuest(count);

  }


  displayQuest(count);
});