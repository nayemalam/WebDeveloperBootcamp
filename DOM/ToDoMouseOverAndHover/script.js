lis = document.querySelectorAll("li");

// iterate through all the lis
for(var i = 0; i<lis.length; i++){
    // change color of selected li
    lis[i].addEventListener("click", function() {
        console.log("done");
        this.classList.toggle("done");
    })

    // if hovered over, change color
    lis[i].addEventListener("mouseover", function() {
        this.classList.add("selected");
    })

    // if none-hovered, change back to default
    lis[i].addEventListener("mouseout", function() {
        this.classList.remove("selected");
    })

}

