var response = prompt("Are we there yet?");

while(response !== "yes" && response !== "yeah" && response.indexOf("yes") === -1){
  response = prompt("Are we there yet?");
}

  alert("Yay, we finally made it!");
