let toDos = [];
let completed = []
toDos = localStorage.getItem("todos").split()
completed = localStorage.getItem("completed").split()
displayTodos()
displayCompletedTodos()

// 1. ADDING TO-DOS
let formEl = document.getElementById("to-do-form")
formEl.addEventListener("submit", addToList)

function addToList(e) {
    e.preventDefault()
    // grab the input value
    let inputEl = document.getElementById("to-do-input")
    toDos.push(inputEl.value) // eg., "Mow lawn"
    inputEl.value = ""
    console.log(toDos) // log ["Mow lawn", "do dishes"]

    displayTodos()
}

function displayTodos() {
    // get reference to <ul>
    let todoListEl = document.getElementById("to-do-list")
    todoListEl.innerHTML = ""
    // create a <li> for each "Mow lawn", "do dishes", etc
    for (let i = 0; i < toDos.length; i = i + 1) {
        let todoItemEl = document.createElement("li")
        todoItemEl.addEventListener("click", markComplete)
        todoItemEl.innerHTML = toDos[i]
        todoListEl.appendChild(todoItemEl)
    }
    let countEl = document.getElementById("to-do-count")
    countEl.innerHTML = toDos.length
    localStorage.setItem("todos", toDos)
    localStorage.setItem("completed", completed)

}

function markComplete(evt) {
    console.log(evt.target) // evt.target is the DOM el being clicked
    let clickedEl = evt.target
    let todo = clickedEl.innerHTML
    // 1. add to completed array
    completed.push(todo)
    console.log("completed array", completed)
    // 1. remove things from the todos[]
    toDos = toDos.filter(t => t !== todo); // <-- "filter" function
    console.log("todos", toDos)

    displayTodos() // re-render
    displayCompletedTodos()
    localStorage.setItem("todos", toDos)
    localStorage.setItem("completed", completed)

}

function displayCompletedTodos() {
    // get reference to <ul>
    let todoListEl = document.getElementById("completed-list")
    todoListEl.innerHTML = ""
    // create a <li> for each "Mow lawn", "do dishes", etc
    for (let i = 0; i < completed.length; i = i + 1) {
        let todoItemEl = document.createElement("li")
        //todoItemEl.addEventListener("click", markComplete)
        todoItemEl.innerHTML = completed[i]
        todoListEl.appendChild(todoItemEl)
    }
    let countEl = document.getElementById("completed-to-do-count")
    countEl.innerHTML = completed.length
}

// When the user submits the #to-do-form form:
// - Check if the user has typed something in the input
//   - If yes, add the input value to the to-dos array above
//   - Render the new to-do in the #to-do-list ul
//     - Check the HTML for example to-do list item (commented out)
//   - Update the to-do count next to "My To-Dos" whenever a to-do is added

// 2. COMPLETE TO-DOS

// When the user clicks a to-do list item
// - Remove that to-do from the to-do array and list
// - Add that to-do to a completed to-dos array and render that completed list 
//     - Check the HTML for example completed to-do list item (commented out)
// - Update the to-do count and completed to-do count in the headings

// When should we attach the event listener for clicking a to-do list item?
