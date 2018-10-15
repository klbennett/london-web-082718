class Task {
  constructor (text, id, priority) {
    this.text = text
    this.id = id
    this.priority = priority
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

// new Task()

// const addListItem = text => {
//   const listItemEl = document.createElement('li')
//   listItemEl.id = `todo-item-${counter++}` // no longer needed

//   listItemEl.innerHTML = `
//     ${text}
//     <button id='delete-button'>X</button>
//   `

//   const buttonEl = listItemEl.querySelector('#delete-button')
//   buttonEl.addEventListener('click', event => {
//     listItemEl.remove()
//   })

//   listEl.appendChild(listItemEl)
// }