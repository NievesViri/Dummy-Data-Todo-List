 let myList = document.getElementById("todo-list")       // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
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
];

const fetchTodos = () => {

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    // console.log("response:", response)
    .then( (json) => arrayOfTodos = json)
//    console.log("json:", json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
    console.log('arrayOfTodos:',arrayOfTodos)
};

const populateTodos = () => {
console.log("arrayOfTodos IN POPULATE:", arrayOfTodos)
for (let i = 0; i < arrayOfTodos.length; i++) {
 const todo =   arrayOfTodos[i];
console.log('todo:',todo)
console.log('todo["title"]:',todo['title'])
let userTitle = document.createElement("LI")
userTitle.innerHTML = todo.title
myList.appendChild(userTitle)
let Text = document.createElement("TO")
let userIdInsert = document.createTextNode(todo.userId)
let IDInsert = document.createTextNode(todo.id)
let completed = document.createTextNode(todo.completed)
myList.append("User ID: ", userIdInsert, Text, "ID: ", IDInsert, Text, "completed?", completed) 
}
// arrayOfTodos.forEach(element => {

// });
};

console.log(arrayOfTodos[0].userId)
console.log(arrayOfTodos[1].userId)