const inputTitle = document.querySelector('.task-title-input')
const inputText = document.querySelector('.task-text-input')
const inputPageNumber = document.querySelector('.task-input')
const toDoListContainer = document.querySelector('.to-do-list')
const addTaskBtn = document.querySelector('.add-task-btn')
const getTasksBtn = document.querySelector('.get-tasks-btn')
const body = document.querySelector('body')

document.addEventListener('DOMContentLoaded', () => getTasks().then(showTasks))

body.addEventListener('click', (event) => {
    if (event.target.className == 'delete-task-btn') {
        deleteTask(event.target.parentElement.dataset.id).then(() => getTasks().then(showTasks))
    }
    else if (event.target.className == 'update-task-btn') {
        const updateInput = prompt('Update task: ')
        updateTask(event.target.parentElement.dataset.id, updateInput, 'updated').then(() => getTasks().then(showTasks))
    }
})

addTaskBtn.addEventListener('click', () => {
    createTask(inputTitle.value, inputText.value).then(() => getTasks().then(showTasks))
})

getTasksBtn.addEventListener('click', () => {
    const promise = getTasks()
    promise.then(showTasks) 
})

function showTasks(tasks) {
    toDoListContainer.innerHTML = ''
    tasks.forEach(task => {
        const li = document.createElement('li')
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'delete task'
        deleteBtn.className = 'delete-task-btn'

        const updateBtn = document.createElement('button')
        updateBtn.textContent = 'update task'
        updateBtn.className = 'update-task-btn'

        li.innerHTML = task.title

        li.append(deleteBtn)
        li.append(updateBtn)

        li.dataset.id = task.id
        toDoListContainer.append(li)
    }) 
}
