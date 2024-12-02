
 import {createDisplayForTodo} from './todoUI.js';

//import { createDisplayForTodo } from "./todoUI";

export function createToDo(todoList, todoCount, listElement) {

    let todoText = document.getElementById("textUserInput");


    let userInput = todoText.value ;

    if (userInput === "") {
        alert("Enter Text")
    }
    else {

        todoCount += 1;

        let newTodo = {
            todoUserInput : userInput,
            todoUniqueId : todoCount
        };

        console.log(newTodo);

        todoList.push(newTodo);
        
        // console.log(todoList);
        createDisplayForTodo(newTodo, listElement);
        }

    todoText.value = '';

    return todoCount
    
}

export function todoStatusChange(todoId, checkboxId) {
    
    console.log("after" + todoId + checkboxId);

}


