
import {todoStatusChange} from './todoActions.js';

export function createDisplayForTodo(toDo, listElement) {
    console.log(toDo);

    let todoId = "todo" + toDo.todoUniqueId;
    let checkboxId = "checkbox" + toDo.todoUniqueId; 


    let isChecked = false;

    let list = document.createElement("li");

    list.classList.add("d-flex", "flex-row", "list-container");
    listElement.appendChild(list);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    list.appendChild(inputElement);

    inputElement.onclick = function () {
        console.log("before");
        todoStatusChange(todoId, checkboxId);
    }

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("d-flex", "flex-row","label-container");

    // labelContainer.setAttribute("for" , checkboxId);

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
