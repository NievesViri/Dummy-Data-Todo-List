let myList = document.getElementById("todo-list")       // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = []
 
const arrayOfTodo = [
    {
            "userId": 14,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 20,
            "id": 2,
            "title": "delectus aut autem",
            "completed": false
        },
]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
.then((response) => {
    
    return response.json()
})
.then((json) => {
    arrayOfTodos = json
    console.log('arrayOfTodos',arrayOfTodos)
});
}
   
const logTodos = () => {
    
    console.log('logTodos:',logTodos)
}

const populateTodos = () => {
console.log("arrayOfTodos IN POPULATE:", arrayOfTodos)
// get parent element
let parentElement = document.getElementById('todo-list')
for (let i = 0; i < arrayOfTodos.length; i++) {
 const todo =   arrayOfTodos[i];
console.log('todo:',todo)
// create a list item
let listItem = document.createElement('LI')
// create a textnode to list item
let text = document.createTextNode(todo.title)
// append list item to parent element
listItem.appendChild(text)

parentElement.appendChild(listItem)
}
}


const filterTODOS = () => {
    // clear elements on page
    removeTodos()
    
    let ParentElement = document.getElementById('todo-list')
// get input element by id

// get input value
let inputValue = document.querySelector('input').value;
console.log('inputValue',inputValue)
// filter through array of todos to find userId === input.value
const filterArrayOfTodos = arrayOfTodos.filter(todo => todo.userId == inputValue)

for (let i = 0; i < filterArrayOfTodos.length; i++) {
    const todo = filterArrayOfTodos[i];
    let listItem = document.createElement('LI')
    let text = document.createTextNode(todo.title)
    listItem.appendChild(text)
    ParentElement.appendChild(listItem)
}
}

const removeTodos = () => {
const allListElements = document.querySelectorAll('LI')
for (let i = 0; i < allListElements.length; i++) {
    const element = allListElements[i]
    element.remove()
}
}

const completedTodos = () => {
    removeTodos()
    let parentElement = document.getElementById('todo-list')
    let inputValue = document.querySelector('input').value;
    const filterArrayOfTodos = arrayOfTodos.filter(todo => todo.userId == inputValue)
    // filter through array of filtered todos to find todo.completed == true
    const truefilterArrayOfTodos = filterArrayOfTodos.filter(todo => todo.completed == true)
    for (let i = 0; i < truefilterArrayOfTodos.length; i++) {
        const todo = truefilterArrayOfTodos[i];
       let listItem = document.createElement('LI')
        let text = document.createTextNode(todo.title)
        listItem.appendChild(text)
       parentElement.appendChild(listItem)
  }
}

const incompleteTodos = () => {
    removeTodos()
    let parentElement = document.getElementById('todo-list')
    let inputValue = document.querySelector('input').value;
    const filterArrayOfTodos = arrayOfTodos.filter(todo => todo.userId == inputValue)
    // filter through array of filetered todos to find todo.completed == false
    const falsefilterArrayOfTodos = filterArrayOfTodos.filter(todo => todo.completed == false)
    for (let i = 0; i < falsefilterArrayOfTodos.length; i++) {
        const todo = falsefilterArrayOfTodos[i];
        let listItem = document.createElement('LI')
        let text = document.createTextNode(todo.title)
        listItem.appendChild(text)
        parentElement.appendChild(listItem)

    }
}




console.log(arrayOfTodos[0].userId)
console.log(arrayOfTodos[1].userId)