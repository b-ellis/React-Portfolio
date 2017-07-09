import React from 'react';

class Tabs extends React.Component{
	render(){
		return(
			<div className='tabs'>
				<h4>Tabs</h4>
				<img className='tabs-image' src={require('../../images/Tabs-group.png')} />
				<div>
					<p>A personal database to save and find my favorite guitar tabs. A project demostrating my work in node.js</p>
					<a target='_blank' href='https://salty-hollows-61107.herokuapp.com/'>Site</a>
					<a target='_blank' href='https://github.com/b-ellis/node-capstone'>Code</a>
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