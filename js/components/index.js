import React from 'react';

import Header from './header';
import Nav from './nav';
import Intro from './intro';
import About from './about';
import Projects from './projects';

class App extends React.Component{
	render(){
		return(
			<div>
				<Header />
				<Intro />
				<About />
				<Projects />
			</div>
		)
	}
}

module.exports = App;