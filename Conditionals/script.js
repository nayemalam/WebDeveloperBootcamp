var age = Number(prompt("How old are you?"));
//if age is neg
if(age<0){
  console.log("ERROR!")
}
//if age = 21
if(age===21){
  console.log("Happy 21st bday!!");
}
//if age is odd
if(age%2!==0){
  console.log("Your age is odd!!");
}
//if age is a perfect square
if(age % (Math.sqrt(age)) === 0){
  console.log("Perfect square!");
}
