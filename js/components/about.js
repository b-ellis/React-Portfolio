import React from 'react';

class About extends React.Component{
	render(){
		return(
			<section className="about-me">
				<div className="about-me-container">
					<h1 className="info-me"> about me </h1>
				</div>
				<div className="my-info">
					<p>I'm Brad Ellis. I am a West Virginia University graduate with a B.A. in psychology, and I have been learning Fullstack web development through <a href='https://www.thinkful.com'>Thinkful</a>. I work with Javascript but am eager to learn new programming languages, in hopes that one day I will be working in machine learning.</p>
					<p className="fun"> Apart from that, I am trying to build up a workshop to build hand-crafted guitars. Also, I am always interested in jamming with other musicians. Feel free to contact me, my info is at the bottom of the page.</p>
				</div>
			</section>
		)
	}
}

module.exports = About;