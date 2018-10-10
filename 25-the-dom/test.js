/*
Quick example of how we could create
a whole application using just JS.

This is how React does it under the hood!
*/

// We want our page to look like:
// <div class='article'>
//  <img class='article-image' src='some image url here' />
//  <h1 class='article-title'>My title!</h1>
//  <p class='article-content'>My content!</p>
// </div>

// We create all the elements we'll need
const divEl = document.createElement('div')
const imgEl = document.createElement('img')
const h1El = document.createElement('h1')
const pEl = document.createElement('p')

// We add their respective classes
divEl.className = 'article'
imgEl.className = 'article-image'
h1El.className = 'article-title'
pEl.className = 'article-content'

// We point the *src* attribute to the image we want to display
imgEl.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'

// We add some text to the h1 and p tags
h1El.innerText = "Gotta catch'em all!"
pEl.innerText = 'Pika pi, pika pika, chuuu!'

// We append all the children of divEl into it
divEl.appendChild(imgEl)
divEl.appendChild(h1El)
divEl.appendChild(pEl)

// We append that div tag with all its children into the body of the page
document.body.appendChild(divEl)
