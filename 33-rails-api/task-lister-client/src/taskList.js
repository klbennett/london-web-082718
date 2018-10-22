class TaskList {

  static addTaskToList (taskData) {
    const task = new Task(taskData)
    const taskEl = task.render()
    this.tasks.push(task)
    const buttonEl = taskEl.querySelector('#delete-button')
    buttonEl.addEventListener('click', event => {
      this.removeTaskFromList(task.id)
    })
    this.listEl.appendChild(taskEl)
  }

  static createTask (taskData) {
    return API.createTask(taskData)
      .then(task => this.addTaskToList(task))
  }

  static removeTaskFromList (id) {
    const task = this.tasks.find(task => task.id === id)
    this.tasks = this.tasks.filter(task => task.id !== id)
    task.remove()
  }
}

TaskList.tasks = []
TaskList.listEl = document.querySelector('#tasks')
