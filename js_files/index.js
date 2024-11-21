// index.js


import {getTodosFromLocalStorage , saveToLocalStorage } from './todoStorage.js';

import {createDisplayForTodo} from './todoUI.js';

import {createToDo} from './todoActions.js';

let listElement = document.getElementById("todoListId");
let saveTodoBtnElement = document.getElementById("saveTodoBtn");
let addTodoBtnElement = document.getElementById("addTodoBtn");



let todoList = getTodosFromLocalStorage();
let todoCount = todoList.length;



saveTodoBtnElement.onclick = function() {
    saveToLocalStorage(todoList);
}


addTodoBtnElement.onclick = function () {

    createToDo(todoList, todoCount, listElement);
}


for (let toDo of todoList){
    createDisplayForTodo(toDo, listElement);
}