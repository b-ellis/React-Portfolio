import React from 'react';

import Musician from './musician';
import Jam from './jam';
import Tabs from './tabs';

class Projects extends React.Component{
	render(){
		return(
			<div>
				<div className='projects-title'>
					<h1>Projects</h1>
				</div>
				<Musician />
				<Tabs />
				<Jam />
			</div>
		)
	}
}

module.exports = Projects;