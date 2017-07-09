import React from 'react';

import Nav from './nav';

class Header extends React.Component{
	constructor(){
		super();
		this.state = {
			name: 'initals'
		}
		this.changeInitals = this.changeInitals.bind(this);
		this.changeName = this.changeName.bind(this);
		this.scrollToTop = this.scrollToTop.bind(this);
	}
	changeInitals(){
		this.setState({
			name: 'name'
		})
	}
	changeName(){
		this.setState({
			name: 'initals'
		})
	}
	scrollToTop(){
		window.scrollTo(0, 0)
	}
	render(){
		if(this.state.name === 'initals'){
			return(
				<nav className="header">
			  		<div className="header-container">
						<div className="col-md-2" onMouseEnter={this.changeInitals} onMouseLeave={this.changeName} style={{"cursor": "pointer"}}>
							<h1 className="initals">B <span className="e">E</span></h1>
							<h1 className="name" style={{display:'none'}}>brad <span className="lname">ellis</span></h1>
						</div>
			  		</div>
				</nav>
			)
		} else {
			return(
				<nav className="header">
			  		<div className="header-container">
						<div className="col-md-2" onClick={this.scrollToTop} onMouseEnter={this.changeInitals} onMouseLeave={this.changeName} style={{"cursor": "pointer"}}>
							<h1 className="initals" style={{display:'none'}}>B <span className="e">E</span></h1>
							<h1 className="name">brad <span className="lname">ellis</span></h1>
						</div>
			  		</div>
				</nav>
			)
		}
	}
}

module.exports = Header;