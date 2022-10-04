//TO-DO APP START

let inputTask = document.getElementById('inputTask');
let addBtn = document.getElementById('addBtn')
let incomplete = document.getElementById('ul-incomplete-list')
let completed = document.getElementById('ul-completed-list')

addBtn.addEventListener('click', function(e){
    e.preventDefault()
    let value = inputTask.value;
    createCheckWithLi(value)
    inputTask.value = ''
})
inputTask.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        let value = inputTask.value;
        createCheckWithLi(value)
        inputTask.value = ''    
    }
})



function createCheckWithLi(value){
    let li = document.createElement('li');
    li.className = 'list-group-item'
    
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox'
    checkbox.classList.add('checkbox1', 'form-check-input')

    let label = document.createElement('label')
    label.innerText = value
    li.appendChild(checkbox)
    li.appendChild(label)
    incomplete.appendChild(li)
    ideaforDelete(li)
    
}


function ideaforDelete(li){
    let listitem = li;
    let check = listitem.querySelector('input[type="checkbox"]');
    check.addEventListener('change', completeTask)
}


function completeTask(){
    let listitem = this.parentNode;
    let deletebtn = document.createElement('button')
    deletebtn.type = 'button'
    deletebtn.style.marginLeft = '30px'
    deletebtn.classList.add('btn','btn-danger')
    deletebtn.innerText = 'Delete'
    listitem.appendChild(deletebtn)

    let checkbox = listitem.querySelector('input[type="checkbox"]')
    checkbox.remove()
    completed.appendChild(listitem)
    completeRemove(listitem)
}

function completeRemove(li){
    let completed2 = li;
    let btn = completed2.querySelector('button')
    btn.addEventListener('click', parentLiDelete)
}

function parentLiDelete(){
    let listitem = this.parentNode
    let ul = listitem.parentNode
    ul.removeChild(listitem)
}
//TO-DO APP END


