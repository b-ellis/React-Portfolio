import React from 'react';

class Nav extends React.Component{
	render(){
		return(
			<nav className="navbar" role='navigation'>
		  		<a href='#'>
		  			About
		  		</a>
		  		<span> | </span>
		  		<a href='#'>
		  			Projects
		  		</a>
		  		<span> | </span>
		  		<a href='#'>
		  			Contact
		  		</a>
			</nav>
		)
	}
}

module.exports = Nav;