let toDos = [];
let completed = []

// 1. ADDING TO-DOS
let formEl = document.getElementById("to-do-form")
formEl.addEventListener("submit", addToList)

function addToList(e) {
    e.preventDefault()
    // grab the input value
    let inputEl = document.getElementById("to-do-input")
    toDos.push(inputEl.value) // eg., "Mow lawn"
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
}

function markComplete(evt) {
    console.log(evt.target) // evt.target is the DOM el being clicked
    let clickedEl = evt.target
    let todo = clickedEl.innerHTML
    completed.push(todo)
    console.log(completed)
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
