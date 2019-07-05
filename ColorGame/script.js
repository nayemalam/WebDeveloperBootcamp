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

mainRGB.textContent = pickedColor;

// randomColor();
// console.log("randomColor: "+randomColor());
changeBoxColor();

hard.addEventListener("click", function() {
    hard.style.color = "white";
    hard.style.backgroundColor = "rgb(0, 140, 255)";
    easy.style.color = "black";
    easy.style.backgroundColor = "rgb(230, 230, 230)";
})

easy.addEventListener("click", function() {
    easy.style.color = "white";
    easy.style.backgroundColor = "rgb(0, 140, 255)"
    hard.style.color = "black";
    hard.style.backgroundColor = "rgb(230, 230, 230)";
})

reset.addEventListener("click", function() {
    
})

function changeBoxColor() {
    for(var i =0; i<items.length; i++) {
        
        console.log(colors[i]);
        // colors.push(randomColor());
        items[i].style.backgroundColor = colors[i];
        // console.log(colors[i]);
        items[i].addEventListener("click", function() {
            this.classList.add("hide");
            var clickedColor = this.style.backgroundColor;
            console.log(pickedColor);
            if(clickedColor === pickedColor) {
                message.textContent = "Correct!";
                changeAllBoxColors(pickedColor);
            }else {
                message.textContent = "Wrong!";
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




































// reset.addEventListener("click", function() {
//     // randomColor();
//     changeBoxColor();
//     jumbotron.style.cssText = "background-color: "+mainRGB.textContent+" !important";
//     message.textContent = '';
//     start.textContent = "NEW COLORS"
//     console.log("// "+mainRGB.textContent);
//     console.log("colors switched");
// });

// function changeBoxColor() {
//     for(var i=0; i < items.length; i++) {
//         randomColor();
//         // console.log(colors);
//         // console.log(colors[i]);
//         for(var j=0; j<colors.length; j++){
//             items[i].style.backgroundColor = colors[j];
//             // console.log(items[i].style.backgroundColor + " and " +colors[j]);
//             // decision(items[i],colors[j]);
//         }
//         // console.log(colors[i]);
//         items[i].classList.remove("hide");
//     }
// }

// // console.log(colors);
// function decision(item, choice) {
//     item.addEventListener("click", function() {
//         console.log("item: "+this.style.backgroundColor)
//         console.log("choice: "+choice);

//         this.classList.add("hide");
//         if(this.style.backgroundColor === choice) {
//             message.textContent = "Correct!";
//         } else {
//             message.textContent = "false";
//         }

//     })


// }

