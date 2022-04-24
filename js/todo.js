const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("textarea");

let todos = [];

//change string to array
function initTodo() {
  todos = JSON.parse(savedToDos);
  for (i = 0; i < todos.length; i++) {
    paintToDo(todos[i]);
  }
}

//when list button click
//get parentNode from button and delete
function deleteTodo(event) {
  const li = event.target.parentElement;
  console.dir(li.firstChild.innerText);
  deleteToDos(li.firstChild.innerText);
  li.remove();
}

//save todo to local storage
function saveToDos(newTodo) {
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

//delete to do from local storage
function deleteToDos(todo) {
  console.log(todos);
  const idx = todos.indexOf(todo);
  if (idx > -1) {
    todos.splice(idx, 1);
  }
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadToDOs() {}

//paint to do list
function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.appendChild(span);
  button.innerText = "X";
  button.style = "margin-left: 5px";
  button.addEventListener("click", deleteTodo);
  li.appendChild(button);
  todoList.appendChild(li);
  span.innerText = newTodo;
}

function handleTodoSubmit(event) {
  const newTodo = todoInput.value;
  todoInput.value = "";
  if (newTodo != "" && newTodo != "\n") {
    paintToDo(newTodo);
    saveToDos(newTodo);
    event.preventDefault();
  }
}

const savedToDos = localStorage.getItem("todos");

if (savedToDos !== null) {
  initTodo();
}

todoForm.querySelector("input").addEventListener("click", handleTodoSubmit);
