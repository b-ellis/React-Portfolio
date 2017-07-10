import React from 'react';

import Musician from './musician';
import Jam from './jam';
import Tabs from './tabs';

class Projects extends React.Component{
	render(){
		return(
			<section className='projects'>
				<div className='projects-title'>
					<h1>Projects</h1>
				</div>
				<Musician />
				<Tabs />
				<Jam />
			</section>
		)
	}
}

module.exports = Projects;