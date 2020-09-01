var modal = document.getElementById("modal");

document.getElementById("createTodoBtn").addEventListener("click", function() {
    modal.style.display = "block";
});

document.addEventListener("click", function() {
    if(event.target == modal) {
        modal.style.display = "none";
    }
})

document.getElementById("closeCreateTodo").addEventListener("click", function() {
    modal.style.display = "none";
})