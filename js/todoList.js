// Getting Elements
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.getElementById("todo-input");

const toDoList = document.getElementById("todo-list");

// Variables
const toDos = [];

// *************************************************************
// Functions
function createToDo(newToDo) {
  // Create Elements
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  // Give id to li element
  //   console.log(newToDo);

  // Add innerTexts
  span.innerText = newToDo;
  button.innerText = "❌";

  // Append Elements
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);

  button.addEventListener("click", (event) => {
    const li = event.target.parentElement;
    li.remove();
    console.dir(li);
  });
}

// *************************************************************
// EventListener
toDoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newToDo = toDoInput.value;
  toDoInput.value = "";

  const newToDoObject = {
    id: Number(new Date()),
    todo: newToDo,
  };

  console.log(newToDoObject);

  // Save toDos(Array) variable / Save Localstorage
  toDos.push(newToDoObject);
  localStorage.setItem("todos", JSON.stringify(toDos));

  createToDo(newToDoObject);
});

// *************************************************************
// Print toDos, Get todos from Localstorage
/*
    1. Check whether Localstorage is empty or not
    2. If empty : Pass
    3. If not :  
        - Save todos from Localstorage to toDos Array variable
        - Get toDos from Array variable and Print ...
*/

if (localStorage.getItem("todos")) {
  //   console.log(localStorage.getItem("todos"));

  // Save
  const parsedTodos = JSON.parse(localStorage.getItem("todos"));
  parsedTodos.forEach((todo) => {
    toDos.push(todo);
  });

  toDos.forEach((todo) => {
    createToDo(todo.todo);
  });
}
