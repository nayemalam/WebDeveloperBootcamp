var response = prompt("Are we there yet?");

while(response !== "yes" && response !== "yeah"){
  response = prompt("Are we there yet?");
}
  if(response === "yes" || response === "yeah" ){
  alert("Yay, we finally made it!");
}
