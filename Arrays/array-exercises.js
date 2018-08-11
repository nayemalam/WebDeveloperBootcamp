// 1.
var numbers = [22,67,33,96,88];

console.log(numbers[numbers.length]);

// Answer:
// numbers.length returns 5
// console.log() will return undefined

// 2.
var friends = [
              ["Harry", "Ron", "Hermione"],
              ["Malfoy", "Crabbe", "Goyle"],
              ["Mooney", "Wormtail", "Prongs"]];

console.log(friends[2][0]);

// Answer:
// array[][] is a nested array 
// follows a row-column convention, in this case, we look at row 2, and column 0 and that will return "Mooney"
