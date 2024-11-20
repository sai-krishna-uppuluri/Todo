// index.js


let listElement = document.getElementById("todoListId");
let saveTodoBtnElement = document.getElementById("saveTodoBtn");







let todoList = getTodosFromLocalStorage();
let todoCount = todoList.length;

function getTodosFromLocalStorage() {

    let getTodosFromLocal = localStorage.getItem("todoList");

    return getTodosFromLocal ? JSON.parse(getTodosFromLocal) : [];

    /* if (getTodosFromLocal === null) {
        return []
    }
    else {
        let parsedItemsFromLocal = JSON.parse(getTodosFromLocal);

        return parsedItemsFromLocal; 
    } */

    
}


saveTodoBtnElement.onclick = function() {

    localStorage.setItem("todoList", JSON.stringify(todoList));
    
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

   /* let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

     let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

    deleteIconContainer.appendChild(deleteIcon); */



    list.appendChild(labelContainer);

    
   // allTodoList.push(toDo);

    
}




/* function displayTodoList(allTodoList){

    //console.log(allTodoList);
    for(let toDo of allTodoList) {
        createDisplayForTodo(toDo)
    }
}  */

function createAppendNewTodo(newTodo) {
    
    
    return createDisplayForTodo(newTodo);
    
}  


function createToDo() {

    let todoText = document.getElementById("textUserInput");


    let userInput = todoText.value ;

    if (userInput === "") {
        alert("Enter Text")
    }
    else {

        todoCount = todoCount + 1;

        let newTodo = {
            todoUserInput : userInput,
            todoUniqueId : todoCount
        };

       
        


        todoList.push(newTodo);
            
        createAppendNewTodo(newTodo);
        }

    todoText.value = '';
    
}



for (let toDo of todoList){
    createDisplayForTodo(toDo);
}