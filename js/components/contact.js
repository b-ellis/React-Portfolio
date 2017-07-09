import React from 'react';
import FontAwesome from 'react-fontawesome';

class Contact extends React.Component{
	render(){
		return(
			<footer>
				<div>
					<h4>Contact</h4>
						<ul>
							<li><a target='_blank' href='https://www.linkedin.com/in/bradley-ellis-33a961113/'><FontAwesome name='linkedin' /></a></li>
							<li><a target='_blank' href='https://github.com/b-ellis'><FontAwesome name='github' /></a></li>
							<li><a href='mailto:bradjellis18@gmail.com'><FontAwesome name='envelope' /></a></li>
						</ul>
				</div>
			</footer>
		)
	}
}

export default Contact;