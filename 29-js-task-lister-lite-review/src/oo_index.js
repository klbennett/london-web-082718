const formEl = document.querySelector('#create-task-form')
const taskInputEl = document.querySelector('#new-task-description')
const priorityEl = document.querySelector('#priority-selection')

formEl.addEventListener('submit', event => {
  event.preventDefault()
  const text = taskInputEl.value
  const priority = priorityEl.value
  TaskList.addTaskToList(text, priority)
  event.target.reset()
})
