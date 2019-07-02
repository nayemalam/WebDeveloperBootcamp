// EXAMPLE 1
var button = document.querySelector("button");
button.addEventListener("click", function() {
    console.log("First button has been clicked.");
    alert("You clicked the button!");
});

// EXAMPLE 2
// can use eventListener and incorporate external functions inside (instead of creating one explicitly)
var btn2 = document.querySelector(".btn2");
var p = document.querySelector("p");
btn2.addEventListener("click", changeText);

function changeText() {
    console.log("Second button has been clicked.");
    p.textContent = "You clicked the button!";
}

var h1 = document.querySelector("h1");
h1.addEventListener("click", function() {
    h1.classList.add("to-head");
    console.log("h1 clicked");
})

// EXAMPLE 3
// using THIS keyword again
var lis = document.querySelectorAll("li");
for(var i=0; i<lis.length; i++){
    lis[i].addEventListener("click", function() {
        console.log("clicked a list item.");
        this.style.color = "pink";
    })
}

// EXAMPLE 4 : TOGGLING
var toggler = document.querySelector(".toggler");
var isPink = false;
toggler.addEventListener("click", function() {
    if(isPink) {
        this.style.background = "white";
        // isPink = false;
        console.log("changed to white");
    } else {
        this.style.background = "pink";
        // isPink = true;
        console.log("changed to pink")
    }
    // if isPink -> changed to white
    // else --> changed to pink
    isPink = !isPink;
})

// to easily toggle: just use the .classList.toggle("className")
var bToggler = document.querySelector(".b-toggler");
bToggler.addEventListener("click", function() {
    document.body.classList.toggle("b-togglerBackground");
})