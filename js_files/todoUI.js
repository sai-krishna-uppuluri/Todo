


export function createDisplayForTodo(toDo, listElement) {
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
