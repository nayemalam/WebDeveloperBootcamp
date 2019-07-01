// adding a function within an object
var obj = {
    name: "Chuck",
    age: 21,
    isCool: false,
    friends: ["bob", "tina"],
    // make a function
    add: function(x,y) {
        return x+y;
    }
};

// Namespace Collision: 
// two different actions with the same name (polymorphism type)
function speak() {
    return "WOOF!";
}

function speak() {
    return "MEOUW!";
}

// if we call speak() --> returns MEOUW (why? bc Namespace Collision)
/* 
So if we instead added htese funcitons as methods to an objects,
we can have two different things named speak(), by putting them in different namespaces
Can do like so:*/

var dogSpace = {};
var catSpace = {};

dogSpace.speak = function() {
    return "WOOF!";
}

catSpace.speak = function() {
    return "MEOUW!";
}
 
// so adding a method in an object removes the namespace collision issue

// The Keyword "this"
var comments = {};
comments.data = ["Good Job!", "Bye...", "Lame"];

// OLD WAY
// function print(arr) {
//     arr.forEach(function(el) {
//         console.log(el);
//     });
// }

// NEW WAY
function print(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}

/* we can use 'this' instead:
'this' refers to the object that the method is defined in, so the object is
comments, and 'this' refers to comments, so:
this.data is the same thing as comments.data: */
comments.print = function printUsingthis() {
    this.data.forEach(element => {
        console.log(element);
    })
}