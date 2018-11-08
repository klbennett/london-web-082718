import piggy from '../porco.png'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
				<div>
					<Link to="/" >Home </Link>
					<Link to="/hogs">Hogs </Link>
					<Link to="/hogs/hidden-hogs">Hidden Hogs </Link>
				</div>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
		</div>
	)
}

export default Nav
