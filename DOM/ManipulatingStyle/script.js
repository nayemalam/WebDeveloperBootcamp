var h1 = document.querySelector("h1");
h1.style.color = "blue";
h1.style.border = "5px solid pink";
h1.style.fontSize = "10px";
h1.style.background = "yellow";

// instead of doing all that above, what we should do is: define a class in CSS
var tag = document.querySelector("p");
// add a class to selected element
tag.classList.add("some-class");

// remove a class from selected element
tag.classList.remove("some-class");

// toggle another class to selected element
tag.classList.toggle("another-class");
// this minimizes all lines of code to just two --> we can even do one without deifning a variable