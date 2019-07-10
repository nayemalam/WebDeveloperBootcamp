console.log("GAME CHEAT: console can provide the answer... <-- debugging purposes ofcourse")
reset = document.querySelector(".reset");
message = document.querySelector(".message");
easy = document.querySelector(".easy");
hard = document.querySelector(".hard");
mainRGB = document.querySelector(".mainRGB");
jumbotron = document.querySelector(".jumbotron");
items = document.querySelectorAll(".grid-item");
item = document.querySelector(".grid-item");
start = document.querySelector(".start");
var colors = generateRandomColors(6);
var pickedColor = selectedColor();

// use replace to just change the first three letters for better representation
mainRGB.textContent = pickedColor.replace("rgb", "RGB");

// randomColor();
// console.log("randomColor: "+randomColor());
changeBoxColor();

hard.addEventListener("click", selectHard);
easy.addEventListener("click", selectEasy);

function selectHard(event) {
    hard.style.color = "white";
    hard.style.backgroundColor = "rgb(0, 140, 255)"; //blue
    easy.style.color = "black";
    easy.style.backgroundColor = "rgb(230, 230, 230)"; //grey
    console.log(event.target);
    colors = generateRandomColors(6);
    for(var i=0; i<colors.length; i++) {
        items[i].style.display = "block";
    }
}

function selectEasy(event) {
    start.textContent = "NEW COLORS";
    easy.style.color = "white";
    easy.style.backgroundColor = "rgb(0, 140, 255)"
    hard.style.color = "black";
    hard.style.backgroundColor = "rgb(230, 230, 230)";
    console.log(event.target);
    colors = generateRandomColors(3);
    pickedColor = selectedColor();
    mainRGB.textContent = pickedColor.replace("rgb", "RGB");
    for(var i=0; i<items.length; i++) {
        // if there is a next color
        if(colors[i]) {
            items[i].style.backgroundColor = pickedColor;
        } else {
            items[i].style.display = "none";
        }
    }
    reset.addEventListener("click", function() {
        start.textContent = "NEW COLORS";
        // generate all new random colors
        colors = generateRandomColors(3);
        // pick a new random color from array
        pickedColor = selectedColor();
        // change color display to match pickedColor
        mainRGB.textContent = pickedColor.replace("rgb", "RGB");
        // change color of squares
        changeBoxColor();
    })
}

reset.addEventListener("click", function() {
    jumbotron.style.backgroundColor = "rgb(0, 140, 255)";
    start.textContent = "NEW COLORS";
    message.textContent = "";
    // generate all new random colors
    colors = generateRandomColors(6);
    // pick a new random color from array
    pickedColor = selectedColor();
    // change color display to match pickedColor
    mainRGB.textContent = pickedColor.replace("rgb", "RGB");
    // change color of squares
    changeBoxColor();
})

function changeBoxColor() {
    for(var i =0; i<items.length; i++) {
        console.log(colors[i]);
        // colors.push(randomColor());
        items[i].style.backgroundColor = colors[i];
        items[i].addEventListener("click", function() {
            this.classList.add("hide");
            var clickedColor = this.style.backgroundColor;
            console.log(pickedColor);
            if(clickedColor === pickedColor) {
                message.textContent = "Correct!";
                changeAllBoxColors(pickedColor);
                start.textContent = "Play Again?";
            } else {
                message.textContent = "Try Again";
            }
        })
        items[i].classList.remove("hide");
    }
}

function changeAllBoxColors(color) {
    // when correct
    for(var i =0; i<items.length; i++) {
        items[i].style.backgroundColor = color;
        jumbotron.style.cssText = "background-color: "+color+" !important;";
        items[i].classList.remove("hide");
    }
}

function generateRandomColors(numberOfTimes) {
    var arr = [];
    for(var i=0; i < numberOfTimes;i++) {
        arr.push(randomColor());
    }
    return arr; 
}

function randomColor() {
    var x = Math.floor(Math.random() *256);
    var y = Math.floor(Math.random() *256);
    var z = Math.floor(Math.random() *256);
    // mainRGB.textContent = "RGB("+x+", "+y+", "+z+")";
    // arr.push("rgb("+x+", "+y+", "+z+")");
    return "rgb("+x+", "+y+", "+z+")";
}

function selectedColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}