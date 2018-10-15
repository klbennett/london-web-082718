class TaskList {
  static addTaskToList (text, priority) {
    const task = new Task(text, this.id++, priority)
    const taskEl = task.render()
    this.tasks.push(task)
    const buttonEl = taskEl.querySelector('#delete-button')
    buttonEl.addEventListener('click', event => {
      this.removeTaskFromList(task.id)
    })
    this.listEl.appendChild(taskEl)
  }

  static removeTaskFromList (id) {
    const task = this.tasks.find(task => task.id === id)
    this.tasks = this.tasks.filter(task => task.id !== id)
    task.remove()
  }
}

TaskList.tasks = []
TaskList.listEl = document.querySelector('#tasks')
TaskList.id = 0
