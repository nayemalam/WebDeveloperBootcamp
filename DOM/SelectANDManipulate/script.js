// manipulate h1
var h1 = document.querySelector("h1");
h1.style.color = "#ff69b4";

// manipulate body
var body = document.querySelector("body");
var isBlue = false;
// setInterval takes a function and a parameter for the amount of time in ms, so 1000ms = 1s
setInterval(function() {
    if(isBlue) {
        body.style.background = "white";
    } else {
        body.style.background = "#3498db";
    }
    // converting isBlue from false to true
    isBlue != isBlue;
}, 1000);