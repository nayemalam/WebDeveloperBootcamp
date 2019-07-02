// get element by ID
var tag = document.getElementById("highlight");
tag.style.color = "red";

// get elements by class name
var tags = document.getElementsByClassName("bolded");
console.log("Length of tags: " +tags.length +"\nThe first tag: " +tags[0]);

// get elements by tag name (returns a list by tag name - li or ul)
var tagNames = document.getElementsByTagName("li");
console.log(tagNames);

// querySelector (newer method that does both getClass and getID!!) --> CSS Style
// all querySelector ones give you --> OBJECTS
var myQuery = document.querySelector("#highlight");
myQuery.style.color = "pink";

// querySelectorAll (takes CSS selector and returns all matching elements)
var myQuerywithH1 = document.querySelectorAll("h1");
console.log(myQuerywithH1);