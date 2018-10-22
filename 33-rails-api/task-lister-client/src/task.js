class Task {
  constructor (taskData) {
    this.text = taskData.text
    this.id = taskData.id
    this.priority = taskData.priority
  }

  render () {
    const listItemEl = document.createElement('li')
    listItemEl.id = `todo-item-${this.id}`
    listItemEl.className = this.priority
    listItemEl.innerHTML = `
      ${this.text}
      <button id='delete-button'>X</button>
    `
    this.taskEl = listItemEl
    return listItemEl
  }

  remove () {
    this.taskEl.remove()
  }
}
