import './style.css'

const addInput = document.getElementById("todo-input")
const todoForm = document.getElementById("todo-form")
const todoList = document.getElementById("todo-list")



const todos = ["Wake up", "Eat food"]
const renderTodos = () => {
  // Todo :  take each todos and add it to the list one by one
  todoList.innerHTML = ""
  for (const todo of todos){
    const li = document.createElement("li")
    li.innerHTML= todo
    todoList.appendChild(li)
  }
}

const appendTodo = () => {
  // Get input and add in todos
  todos.push(addInput.value)
  console.log(todos)
}

const addTodo = (event) => {
  event.preventDefault();
  console.log(addInput.value)

  appendTodo()
  renderTodos()
}

todoForm.addEventListener("submit", addTodo)

renderTodos()
// const buttonIncrement = document.getElementById('increment')
// const buttonDecrement = document.getElementById('decrement')
// const counterDisplay = document.getElementById('display')

// let count = 1
// counterDisplay.innerHTML = count

// const increase = () => {
//   count ++;
//   counterDisplay.innerHTML = count
//   console.log("inc 1")
// } ;

// const decrease = () => {
//   count --;
//   counterDisplay.innerHTML = count
//   console.log("dec 1")
// } ;

// buttonIncrement.addEventListener("click", increase)
// buttonDecrement.addEventListener("click", decrease)