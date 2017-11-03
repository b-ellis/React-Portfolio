import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import Nav from './nav';

class Header extends React.Component{
	constructor(){
		super();
		this.state = {
			name: 'initals',
			menu: 'closed',
		}
		this.changeInitals = this.changeInitals.bind(this);
		this.changeName = this.changeName.bind(this);
		this.scrollToTop = this.scrollToTop.bind(this);
		this.openMenu = this.openMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
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
	openMenu(){
		this.setState({
			menu: 'opened'
		});
	}
	closeMenu(){
		this.setState({
			menu: 'closed'
		});
	}
	render(){
		return(
			<nav className='header'>
				<div className="header-container">
					<div className='name-div'>
						{(() => {
							switch(this.state.name){
								case 'initals':
								return(
									<div className='wrapper' onMouseEnter={this.changeInitals} onMouseLeave={this.changeName} style={{"cursor": "pointer"}}>
										<h1 className="initals">B <span className="e">E</span></h1>
										<h1 className="name" style={{display:'none'}}>brad <span className="lname">ellis</span></h1>
									</div>
								);

								case 'name':
								return(
									<div className='wrapper' onClick={this.scrollToTop} onMouseEnter={this.changeInitals} onMouseLeave={this.changeName} style={{"cursor": "pointer"}}>
										<Link style={{textDecoration: 'none'}} to={'/'}>
											<h1 className="initals" style={{display:'none'}}>B <span className="e">E</span></h1>
											<h1 className="name">brad <span className="lname">ellis</span></h1>
										</Link>
									</div>	
								);
							}
						})()}
					</div>
					{(() => {
						switch(this.state.menu){
							case 'closed':
							return(
								<div className='col-md-10 menu-div'>
									<FontAwesome onClick={this.openMenu} className='menu' name='bars' />
								</div>
							);

							case 'opened':
							return(
								<div className='col-md-10 menu-div'>
									<FontAwesome onClick={this.closeMenu} className='menu' name='bars' />
									<ul>
										<li>
											<Link onClick={this.closeMenu} to={'/'}>Home</Link>
										</li>
										<li>
											<Link onClick={this.closeMenu} to={'/photos'}>Photos</Link>
										</li>
									</ul>
								</div>
							);
						}
					})()}
		  		</div>
			</nav>
		)
	}
}

module.exports = Header;