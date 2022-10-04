const container = document.querySelector('.container');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoButton = document.querySelector('#todo-button');
const message = document.querySelector('#message');
const todoUL = document.querySelector('#todoUL');

//ShowMessage
const todoCreateAlert = (text, status) => {
    message.textContent = text;
    message.classList.add(`bgg-${status}`);
    setTimeout(() => {
        message.textContent = '';
        message.classList.remove(`bgg-${status}`)
    }, 1000);
}

//Create TODO
const createTodoElement = (id, value) =>{
    const list = document.createElement('li');
    list.id = id;
    list.classList.add('listStyle');
    list.innerHTML = `
    <span class='textvalue'>${value}</span>
    <span><button type='btn' class='btn btn-dark' id='deleteButton'><i class='fa fa-trash text-danger'></i></button></span>
    `;
    todoUL.appendChild(list);
    const deleteButton = list.querySelector('#deleteButton');
    deleteButton.addEventListener('click', deleteParent)
};

//Delete ToDo
const deleteParent = (event) => {
    const parent1 = event.target.parentElement.parentElement.parentElement;
    todoUL.removeChild(parent1);
    todoCreateAlert('Todo Element Deleted', 'danger');
    let todos = getTodosFromLocalStorage();
    todos = todos.filter(todo => todo.listRandomID != parent1.id);
    localStorage.setItem('mytodos', JSON.stringify(todos));
}

//Storing LocalStorage
const getTodosFromLocalStorage = () => {
    return localStorage.getItem('mytodos') ? JSON.parse(localStorage.getItem('mytodos')) : [];
}


const mainTodo = (e) =>{
    e.preventDefault();
    const todoValue = todoInput.value;

    const listRandomID = Date.now().toString();
    createTodoElement(listRandomID, todoValue)
    todoCreateAlert('Todo Element Added', 'success')
    const todos = getTodosFromLocalStorage();
    todos.push({listRandomID, todoValue});
    localStorage.setItem('mytodos', JSON.stringify(todos))
    todoInput.value = ''
};

//Load ToDo
const loadTodos = () => {
    let todos = getTodosFromLocalStorage();
    todos = todos.map(todo => createTodoElement(todo.listRandomID, todo.todoValue))
}


todoForm.addEventListener('submit', mainTodo);
window.addEventListener('DOMContentLoaded', loadTodos)