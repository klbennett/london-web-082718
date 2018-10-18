const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
<<<<<<< HEAD
let addToy = false

// YOUR CODE HERE
=======
const toyCollection = document.querySelector('#toy-collection')
const form = document.querySelector('form')
form.addEventListener('submit', (e) => submitToy(e))
let addToy = false

// Render all toys
fetch('http://localhost:3000/toys')
.then(resp => resp.json())
.then(toys => toys.forEach(toy => createToy(toy)))

const createToy = (toy) => {
  const toyEl = `<div id=${toy.id} class="card">
    <h2>${toy.name}</h2>
    <img src=${toy.image} class="toy-avatar">
    <p id="like-${toy.id}">${toy.likes} Likes <p>
    <button class="like-btn">Like <3</button>
  </div>`

  toyCollection.innerHTML += toyEl
}

//Submit a new toy
const submitToy = (e) => {
  console.log("submitToy is run")
  e.preventDefault()
  const newToy = {'likes': 0}
  const toyInputs = document.getElementsByClassName('input-text')

  for (input of toyInputs) {
    newToy[input.name] = input.value
  }

  fetch('http://localhost:3000/toys', {
    'method': 'POST',
    'headers': {'Content-Type' : 'application/json'},
    'body' : JSON.stringify(newToy)
  })
  .then(resp => resp.json())
  .then(toy => createToy(toy))
}

//Likes
document.addEventListener('click', (e) => {
  if (e.target.className == 'like-btn') {
    const id = e.target.parentNode.parentNode.id
    const currentLikes = document.querySelector(`#like-${id}`).innerText
    like(id, parseInt(currentLikes) + 1)
  }
})

const like = (id, newLike) => {
  fetch(`http://localhost:3000/toys/${id}`, {
    'method':'PATCH',
    'headers': {'Content-Type': 'application/json'},
    'body':JSON.stringify({'likes': newLike})
  })
  .then(resp => resp.json())
  .then(updatedToy => {
    document.getElementById(`${updatedToy.id}`).remove()
    createToy(updatedToy)
  })
}

>>>>>>> 86ef6d8677d50812b652c6417a109d0968db6a83

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
<<<<<<< HEAD
    // submit listener here
=======
>>>>>>> 86ef6d8677d50812b652c6417a109d0968db6a83
  } else {
    toyForm.style.display = 'none'
  }
})
<<<<<<< HEAD


// OR HERE!
=======
>>>>>>> 86ef6d8677d50812b652c6417a109d0968db6a83
