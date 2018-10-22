const formEl = document.querySelector('#create-task-form')
const taskInputEl = document.querySelector('#new-task-description')
const priorityEl = document.querySelector('#priority-selection')

API.getUser(1)
  .then(user => user.tasks.forEach(task => TaskList.addTaskToList(task)))

formEl.addEventListener('submit', event => {
  event.preventDefault()
  const taskData = {
    text: taskInputEl.value,
    priority: priorityEl.value,
    user_id: 1
  }
  TaskList.createTask(taskData)
  event.target.reset()
})
