
 import {createDisplayForTodo} from './todoUI.js';

//import { createDisplayForTodo } from "./todoUI";

export function createToDo(todoList, todoCount, listElement) {

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
            
        createDisplayForTodo(newTodo, listElement);
        }

    todoText.value = '';

    return todoCount
    
}


