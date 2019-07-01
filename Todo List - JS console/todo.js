// Chrome browser behaves a little strangely when using alert, prompt, or confirm functions.
// It doesn't display the HTML on the page until after the popup has been closed.
// This is problematic since our HTML contains instructions for the user to be able to use the app we're building.
//
// You can avoid this by wrapping your JS code in the following setTimeout function:
// window.setTimeout(function() {
//   // put all of your JS code from the lecture here
// }, 500);

var todos = [];


window.setTimeout(function() {

  var input = prompt("What would you like to do?");

  while (input !== "quit") {
    if (input === "list") {
      listTodos();
    } else if(input === "new") {
      newTodo();
    } else if(input === "remove") {
      removeTodo();
    } else if(input === "view") {
      viewTodo();
    }
    input = prompt("What would you like to do?");
    if(input === null) {
      return;
    }
  }
  console.log("OK. YOU QUIT THE APP");
  
  // Functions
  function listTodos() {
    console.log("**********");
      for(var i =0; i<todos.length; i++) {
        var filtered = todos.filter(function(e) {
          return e != null;
        });
        console.log(i+": " +filtered[i]);
      }
    console.log("**********");
  } 

  function newTodo() {
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log(newTodo + " added to the list")
  }

  function removeTodo() {
    var listSize = todos.length-1;
    var index = prompt("Which index would you like to remove? \nYou can select from: 0 - " +listSize);
      if(index<todos.length) {
        // which element to delete and how many
        var selected = todos.splice(index, 1);
        console.log("Item " + selected + " has been removed.");
      } 
      else {
        alert("The index must be between: 0 - " + listSize);
      }
  }

  function viewTodo() {
    var listSize = todos.length-1;
    var index = prompt("Which index would you like to view? \nYou can select from: 0 - " +listSize);
    if(index<todos.length) {
      alert("The todo for index " +index+ " is: " +todos[index]);
    } else {
      alert("The index must be between: 0 - " + listSize);
    }
  }


}, 500);
