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

  function goTime() {
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
      clearInterval(timer); //stop anyrunning timers
      $("#clock").empty();


    } else if (count < questions.length) {


      var $question = $(`<h3>${questions[x].what}</h3>`);
      $("#qBox").append($question);

      for (var i = 0; i < questions[x].options.length; i++) {

        $option = $(`<button type="button" class="btn btn-primary">${questions[x].options[i]}</button>`);
        $("#qBox").append($option);

        //when a question is created set a timer when it goes off auto skip the question

      }
      clock = 10; //reset clock
      goTime();
    }

  }

  function timerFunc() {

    //count as wrong answer if not answered on time
    if (count >= questions.length) {
      return
    }
    clock--;

    //update clock element
    $("#clock").empty();
    $("#clock").append(`<h4>${clock}</h4>`)

    if (clock <= 0) {
      incorrect()
    }
    console.log("timerFunc");
  }

  $("#qBox").on("click", ".btn", function () { //determine if player clicked correct answer

    console.log($(this).text());
    if ($(this).text() == questions[count].answer) {
      $("#qBox").empty();

      $("#qBox").append(`<h2>Correct</h2>`);
      count++;
      correct++;
      setTimeout(moveAlong, 3000);
      clearInterval(timer);

    } else {
      incorrect();

    }

  })

  function incorrect() {
    console.log("incorrect");

    //display result and tell answer
    $("#qBox").empty();

    $("#qBox").append(`<h2>Incorrect</h2>`);
    $("#qBox").append(`<h2>The answer was: ${questions[count].answer}</h2>`);
    count++;
    wrong++;

    setTimeout(moveAlong, 3000);

    clearInterval(timer);

  }


  function moveAlong() {
    displayQuest(count);
  }


  displayQuest(count);
});