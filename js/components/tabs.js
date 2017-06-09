import React from 'react';

class Tabs extends React.Component{
	render(){
		return(
			<div className='tabs'>
				<h4>Tabs</h4>
				<img className='tabs-image' src={require('../../images/Tabs-group.png')} />
				<div>
					<p></p>
					<a href='#'>Site</a>
					<a href='#'>Code</a>
					<ul>
						<li>Express | </li>
						<li>MongoDB | </li>
						<li>JavaScript | </li>
						<li>HTML5 | </li>
						<li>CSS3</li>
					</ul>
				</div>
			</div>
		)
	}
}

module.exports = Tabs;