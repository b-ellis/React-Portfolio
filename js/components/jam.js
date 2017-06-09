import React from 'react';

class Jam extends React.Component{
	render(){
		return(
			<div className='jam'>
				<h4>Jam-Loaction</h4>
				<img className='jam-image' src={require('../../images/jam-location-group.png')} />
				<div>
					<p>A Frontend project, to help locate concerts close to you by zipcode. This application uses the Google Maps API
					and the Jambase API</p>
					<a href='#'>Site</a>
					<a href='#'>Code</a>
					<ul>
						<li>HTML5 | </li>
						<li>CSS3 |{' '} </li>
						<li>Javascript</li>
					</ul>
				</div>
			</div>
		)
	}
}

module.exports = Jam;