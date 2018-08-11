var todos = ["Buy new Turtle"];

var input = prompt("What would you like to do?");

window.setTimeout(function() {

  while(input!=="quit") {

    if(input==="list"){
      todos.forEach(function(todo) {
        console.log(todo);
      });
    } else if(input==="new") {
      var newTodo = prompt("Enter your new todo");
      todos.forEach(function(todo){
        todos.push(todo);
      });
    } else if(input==="delete"){
      var deleteItem = prompt("Enter index of todo to delete");
      todos.pop();
      console.log("Todo Removed")
    }
  }
  console.log("OK. You quit the app.")

}, 500);
