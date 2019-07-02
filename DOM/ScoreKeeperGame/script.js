// initial personal attempt
// grab all DOMs
var playerOneScore = document.querySelector(".playerOneScore");
var playerTwoScore = document.querySelector(".playerTwoScore");
var reset = document.querySelector(".reset");
var scoreKeep = document.querySelector(".scoreKeep");
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");

btn1.addEventListener("click", function() {
    var i =0;
    i++;
    playerOneScore.value = i;
})
