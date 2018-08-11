// the Number constructor converts string -> int
var number = Number(prompt("Guess a number!"));
if(number>7){
  alert("Too high. Try again.");
}
else if(number<7){
  alert("Too low. Try again.");
}
else {
  alert("You guessed it!");
}
