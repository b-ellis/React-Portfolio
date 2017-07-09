import React from 'react';

import Header from './header';
import Nav from './nav';
import Intro from './intro';
import About from './about';
import Projects from './projects';
import Contact from './contact';

class App extends React.Component{
	render(){
		return(
			<div>
				<Header />
				<Intro />
				<About />
				<Projects />
				<Contact />
			</div>
		)
	}
}

module.exports = App;