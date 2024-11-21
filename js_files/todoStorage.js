


export function getTodosFromLocalStorage() {

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

export function saveToLocalStorage(todoList) {
    localStorage.setItem("todoList", JSON.stringify(todoList));
}

