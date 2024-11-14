// index.js


let listElement = document.getElementById("todoListId");
let saveTodoBtnElement = document.getElementById("saveTodoBtn");


let todoCount = 0;
let allTodoList = getTodosFromLocalStorage();


function getTodosFromLocalStorage() {

    let getTodosFromLocal = localStorage.getItem("everyTodoList");

    return getTodosFromLocal ? JSON.parse(getTodosFromLocal) : [];
}


saveTodoBtnElement.onclick = function() {

    localStorage.setItem("everyTodoList", JSON.stringify(allTodoList));
    //console.log(storeTodoInLocal);
}



function createDisplayForTodo(toDo) {
    let list = document.createElement("li");

    list.classList.add("d-flex", "flex-row", "list-container");
    listElement.appendChild(list)

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = "checkboxId";
    list.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("d-flex", "flex-row","label-container");

    inputElement.setAttribute("for" , "checkboxId");

    labelContainer.textContent = toDo.todoUserInput;

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

    deleteIconContainer.appendChild(deleteIcon);



    list.appendChild(labelContainer);

    
   // allTodoList.push(toDo);

    
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

for (let toDo of allTodoList) {
    createDisplayForTodo(toDo);
}