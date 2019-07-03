// initial personal attempts (not watching the solution)
// grab all DOMs
var playerOneScore = document.querySelector(".playerOneScore");
var playerTwoScore = document.querySelector(".playerTwoScore");
var reset = document.querySelector(".reset");
var scoreKeep = document.querySelector(".scoreKeep");
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");

// increment player numbers using the buttons
btn1.addEventListener("click", function() {
    var value = parseInt(playerOneScore.value);
    if(value < scoreKeep.value) {
        value++;
        playerOneScore.value = value;
        if(playerOneScore.value == scoreKeep.value) {
            playerOneScore.style.color = "#27C96D";
            btn1.disabled = true;
            btn2.disabled = true;
            console.log("Player 1 wins!");
        } 
    }
})

btn2.addEventListener("click", function() {
    var value = parseInt(playerTwoScore.value);
    if(value < scoreKeep.value) {
        value++;
        playerTwoScore.value = value;
        if(playerTwoScore.value === scoreKeep.value) {
            playerTwoScore.style.color = "#27C96D";
            btn1.disabled = true;
            btn2.disabled = true;
            console.log("Player 2 wins!");
        }
    }
})

// reset everything (bootstrap kinda way)
reset.addEventListener("click", resetAll);

function resetAll() {
    btn1.disabled = false;
    btn2.disabled = false; 
    playerOneScore.value = 0;
    playerOneScore.style.color = "#000000";
    playerTwoScore.value = 0;
    playerTwoScore.style.color = "#000000";
}

// reset the stats if someone changes winning score in the middle of the game
scoreKeep.addEventListener("click", resetAll);