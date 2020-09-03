var modal = document.getElementById("modal");
var todoListDiv = document.getElementById("todoList");
var title = "";
var description = "";
var author = "";

var todoList = [];
var completedTodoList = [];

document.getElementById("createTodoBtn").addEventListener("click", function() {
    modal.style.display = "block";
});

document.addEventListener("click", function() {
    if(event.target == modal) {
        modal.style.display = "none";
    }
});

document.getElementById("closeCreateTodo").addEventListener("click", function() {
    modal.style.display = "none";
});

function getTodoInputData() {
    title = document.getElementById("todoTitle").value;
    description = document.getElementById("todoDescription").value;
    author = document.getElementById("todoAuthor").value;
}

document.getElementById("createTodoConfirmBtn").addEventListener("click", function() {
    getTodoInputData();

    todoList.push ({
        "title": title,
        "description": description,
        "author": author
    });

    printDataTodos();

    modal.style.display = "none";
});

function printDataTodos() {
    var iteration = 3
    todoListDiv.innerHTML = "";
    
    for(var i = todoList.length - 1; i >= 0; i--){
        var output = "<div class='todoElement' value='" + i + "'>" + "<h1>" + todoList[i].title + "</h1>" + "<p>" + todoList[i].description + "</p>"
        + "<div class='todoElementBtns'><button onclick='removeElement(this)' class='removeTodoBtn'>Delete</button><button onclick='completeElement(this)' class='completeTodoBtn'>Complete</button></div>"
        + "</div>";

        todoListDiv.innerHTML += output;
        
        iteration--;
        if(iteration === 0) {
            break;
        }
    }
}

function removeElement(element) {
    var currentElement =  element.parentNode.parentNode;
   
    for(var i = 0; i < todoList.length; i++) {
        if(parseInt(currentElement.getAttribute("value")) === i) {
            todoList.splice(i, 1);
        }
    }
    currentElement.remove();
    printDataTodos();
}

function printDataCompletedTodos() {
    var completedTodoListDiv = document.getElementById("listElements");
    completedTodoListDiv.innerHTML = "";

    for(var i = 0; i < completedTodoList.length; i++){
        var output = "<div class='listRow listElement'>" + "<p>" + completedTodoList[i].title + "</p>" + "<p>" + completedTodoList[i].description + "</p>"
        + "<p>" + completedTodoList[i].author + "</p>" + "<p> Not yet</p>"
        
        completedTodoListDiv.innerHTML += output;
    }
}

function completeElement(element) {
    var currentElement = element.parentNode.parentNode;
    var currentElementValue = currentElement.getAttribute("value");
    
    for(var i = 0; i < todoList.length; i++) {
        if(parseInt(currentElementValue) === i) {
            completedTodoList.push ({
                "title": todoList[i].title,
                "description": todoList[i].description,
                "author": todoList[i].author
            });

            todoList.splice(i, 1);
            printDataTodos();
            printDataCompletedTodos();
            currentElement.remove();
        }
    }
}