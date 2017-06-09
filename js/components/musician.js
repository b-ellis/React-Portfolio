import React from 'react';

class Musician extends React.Component{
	render(){
		return(
			<div className='musician'>
				<h4>Musician</h4>
				<div className='images'>
					<img className='musician-group' src={require('../../images/musician-group.png')} />
				</div>
				<div>
					<p>A Fullstack project, to help discover related artists from your favorite artist and help buy their music and
					merchandise directly from the artist.</p>
					<a href='#'>Site</a>
					<a href='#'>Code</a>
					<ul>
						<li>React/Redux | </li>
						<li>Express | </li>
						<li>MongoDB</li>
					</ul>
				</div>
			</div>
		)
	}
}

module.exports = Musician;