$( document ).ready(function() {
  
//create array of questions and their answers

var questions = [

  one = {
  what: "Who founded Rome?",
  answer: "Romulus",
  options: ["Remus","Caesar", "Hannibal", "Romulus"]

  },

  two = {
    what: "who was the first Roman Emperor?",
    answer: "Augustus",
    options: ["Romulus","Augustus", "Hadrian","Brutus"]

  },

  three = {
    what: "What year did Constantinople fall to the Ottomans?",
    answer: "1452",
    options: ["1452", "1204","1492","7"]
  }


]

var count = 0;
var correct = 0;//display results at end
var wrong = 0;

//function to display questions and answers with id for correct answer
function displayQuest(x){

  $("#qBox").empty();
  var $question = $(`<h3>${questions[x].what}</h3>`);
  $("#qBox").append($question);

  for (var i = 0; i < questions[x].options.length; i++){

    $option = $(`<button type="button" class="btn btn-primary">${questions[x].options[i]}</button>`);
    $("#qBox").append($option);
    
  }

}

$("#qBox").on("click", ".btn", function() {//determine if player clicked correct answer

console.log($(this).text());
if ($(this).text() == questions[count].answer){

  count++;
  correct++;
  displayQuest(count);

}else{
  count++;
  wrong++;
  displayQuest(count);
}

})


displayQuest(count);
});