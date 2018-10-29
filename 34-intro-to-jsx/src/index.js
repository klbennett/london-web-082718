// Intro to JSX

const PageTitle = (props) => React.createElement('h1', null, props.title)

// const Article = React.createElement('div', null, [
//   React.createElement('h1', null, 'Title'),
//   React.createElement('p', null, 'Body')
// ])

const Article = (props) => React.createElement('div', null, [
  React.createElement('h2', {key: 1}, props.title),
  React.createElement('p', {key: 2}, props.body)
])

const Newspaper = React.createElement('div', {className: 'newspaper-class-thingy', id: 'my-id'}, [
  PageTitle({title: 'Cool paper, yo!'}),
  Article({title: 'Cool article 1', body: 'Cool body 1'}),
  Article({title: 'Cool article 2', body: 'Cool body 2'}),
  Article({title: 'Cool article 3', body: 'Cool body 3'})
])

// <div class="ui inverted orange menu">
//     <a class='item'>
//       <h2 class="ui header">
//         <i class="paw icon"></i>
//         <div class="content">
//           ZooKeepr
//         </div>
//         <div class="sub header">
//           Keep track of your animals
//         </div>
//       </h2>
//     </a>
//   </div>

const Navbar = props =>
  React.createElement('div', {className: `ui inverted ${props.color} menu`},
    React.createElement('a', {className: 'item'},
      React.createElement('h2', {className: "ui header"}, [
        React.createElement('i', {className: `${props.icon} icon`}),
        React.createElement('div', {className: "content"}, props.title),
        React.createElement('div', {className: "sub header"}, props.description)
      ])
    )
  )


ReactDOM.render([
    Navbar({
      title: 'ZooKeepr',
      icon: 'paw',
      color: 'green',
      description: 'keep track of your animals'
    }),
    Navbar({
      title: 'Le Zoo',
      icon: 'wheelchair',
      color: 'blue',
      description: `Welcome to Cam's Zoo!`
    }),
    Navbar({
      title: 'Cool papr! 😎',
      icon: 'birthday cake',
      color: 'pink',
      description: 'Cool stuff bro!'
    })
  ],
  document.getElementById('root')
)
