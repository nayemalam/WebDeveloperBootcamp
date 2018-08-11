//CTRL or CMD + / to remove all comments

//1
// function isEven(num) {
//   if(num%2===0){
//     return true;
//   }else{
//     return false;
//   }
// }
// isEven(2); //true
// isEven(4); //true
// isEven(3); //false
// isEven(241); //false

// 2
// function factorial(num) {
//   var result = 1;
//   for(var i=1; i<=num; i++) {
//     result *= i;
//   }
//   return result;
// }
// factorial(5); //120
// factorial(2); //2
// factorial(10); //3628800
// factorial(0); //1

//3
function kebabToSnake(str) {
  //the '/-/g' is added bc it performs a global replacement: (https://www.w3schools.com/jsref/jsref_replace.asp)
  var output = str.replace(/-/g, '_'); //string.replace function returns a copy with the replaced data
  return output;
}
kebabToSnake("hello-world"); //"hello_world"
kebabToSnake("dogs-are-awesome") //"dogs_are_awesome"
kebabToSnake("blah"); //blah
