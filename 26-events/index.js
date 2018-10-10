// input has a value
// button can be clicked

// how do we add a new comment
// when the button is clicked
// using the value of the input?

const inputEl = document.querySelector('#comment-input')
const buttonEl = document.querySelector('button')
const listEl = document.querySelector('#comments')

const addComment = comment => {
  const listItem = document.createElement('li')
  listItem.innerText = comment

  listEl.appendChild(listItem)
}

buttonEl.addEventListener('click', event => {
  const comment = inputEl.value
  if (comment.length <= 3) return

  addComment(comment)
  inputEl.value = ''
  inputEl.focus()
})

// Bubbling!
// Events bubble up, meaning elements
// nested inside another element
// will also trigger any events on their way up
// to test this, click on the first <li> item!
document.body.addEventListener('click', event => {
  console.log("I'm an event listener in <body>")
})

document.querySelector('ul').addEventListener('click', event => {
  console.log("I'm an event listener in <ul>")
})

document.querySelector('li').addEventListener('click', event => {
  console.log("I'm an event listener in <li>")
})
