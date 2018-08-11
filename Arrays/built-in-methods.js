//Array Built-in Methods

// 1. push/pop
// 2. shift/unshift
// 3. indexOf
// 4. slice

// 1.
var colors = ["red", "orange", "yellow"];
colors.push("green"); //adds this to the very end of the array
colors.push("blue");

colors.pop(); //removes the last element of the Array
colors.pop();

// 2.
//-- same thing as PUSH (unshift) and POP (shift) but from the left side
var nums = [34,54,22];
nums.unshift("HELLO"); //adds this to the beginning of the Array
nums.unshift(19);

nums.shift(); //removes the first element of the Array
nums.shift();

// 3.
var friends = ["Charlie", "Liz", "David", "Mattias", "Liz"];

friends.indexOf("David"); //returns the first index at which a given element can be found
friends.indexOf("Liz"); //will return the first instance of where it is bc there are two Liz's

friends.indexOf("Hagrid"); //returns -1 because it isn't in the array

// 4.
// - copies different portions of an array (takes two arguments, starting and ending index)
// - the original array is not altered

var nums = [1,2,3,"a","b", 445, 34];
var letters = nums.slice(3,5); //returns a, b while nums is unchanged
