// index.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript file linked successfully!");
    alert("Hello from JavaScript!");
});

let listElement = document.getElementById("todoListId");


let todoCount = 0;
// let allTodoList = [];



function createDisplayForTodo(toDo) {
    
    let list = document.createElement("li");
    list.textContent = toDo.todoUserInput;
    listElement.appendChild(list)
}


/* function displayTodoList(allTodoList){

    //console.log(allTodoList);
    for(let toDo of allTodoList) {
        createDisplayForTodo(toDo)
    }
}  */

function createAndAppendTodo(userInput) {
    todoCount = todoCount + 1;

    let todoList = {
        "todoUserInput" : userInput,
        todoUniqueId : todoCount
    }

   // allTodoList.push(todoList);

    // console.log(allTodoList)
    
    createDisplayForTodo(todoList);
}


function createToDo() {

    let todoText = document.getElementById("textUserInput");


    let userInput = todoText.value ;

    if (userInput === "") {
        alert("Enter Text")
    }
    else {
        createAndAppendTodo(userInput);
    }

    todoText.value = '';
    
}