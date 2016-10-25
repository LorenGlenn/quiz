var good = 0;
var bad = 0;
var random = 0;
var quizSection = ["good-luck", "bad-luck", "random"];
var answers = [good, bad, random];
var goodResult, badResult, randomResult;

var fortune = function()  {
  good = answers[0];
  bad = answers[1];
  random = answers[2];
  }

var calculate = function()  {
  if (good > bad && good > random){
    goodResult();
  }
  else if (bad > good && bad > random) {
    badResult();
  }
  else {
    randomResult();
  }
}


$(document).ready(function()  {
  $("form#future").submit(function(event) {
    event.preventDefault();
    for (index = 0; index < quizSection.length; index++) {
      $("input:checkbox[name=" + quizSection[index] + "]:checked").each(function() {
        answers[index] += 1;
      });
    };
    fortune();
    calculate();
    $(".result").show();
    $("#future").hide();
  });

  goodResult = function() {
    $("p#fortune").text("You are an average person");
  };
  badResult = function() {
    $("p#fortune").text("May the whiffed balls be with you.");
  };
  randomResult = function() {
    $("p#fortune").text("Isn't RL fun tho?");
  };
});
