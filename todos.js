var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem('listOfTodos')) || [];

function loadTodos(){
  listElement.innerHTML = '';

  todos.forEach(todo => {
    var todoElement = document.createElement("li");
    var removeTodoElement = document.createElement("a");
    var todoText = document.createTextNode(todo);
    var removeTodoText = document.createTextNode('Excluir');

    removeTodoElement.appendChild(removeTodoText);
    removeTodoElement.setAttribute("href","#");

    var pos = todos.indexOf(todo);
    removeTodoElement.setAttribute("onclick","removeTodo("+pos+")")
    
    todoElement.appendChild(todoText);
    todoElement.appendChild(removeTodoElement);

    listElement.appendChild(todoElement);
    
  });
}

loadTodos();

function addTodo(){
  var newTodo = inputElement.value;
  
  inputElement.value = '';
  todos.push(newTodo);

  loadTodos();
  loadTodosStorage();
}

buttonElement.onclick = addTodo;

function removeTodo(pos){
  todos.splice(pos,1);
  loadTodos();
  loadTodosStorage();
}

function loadTodosStorage(){
  localStorage.setItem("listOfTodos", JSON.stringify(todos));
}