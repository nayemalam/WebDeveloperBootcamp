var colors = ["red", "orange", "yellow", "green"];

// using a FOR loop
for(var i =0; i<colors.length; i++) {
  console.log(colors[i]);
}

// using a FOREACH loop
// FOREACH: much nicer, simpler, shorter, more common
// takes a function as an argument
// ex. array.forEach(someFunction)
// that function is called for every single element in the array

// 1st way
colors.forEach(function(element){
  console.log("Inside the foreach: "+element);
});

// 2nd way: customize
function printColor(color) {
  console.log("********");
  console.log(color);
  console.log("********");
}

colors.forEach(printColor); // prints all the elements in the "colors" array using the printColor function

// ***** as you can see, no need for index 'i'
