import React from 'react';

class Intro extends React.Component{
	render(){
		return(
			<section className="introduction">
				<div className="container">
					<div className="who-container">
						<h1>i am</h1>
					</div>
				</div>
				<div>
					<div className="description-container">
						<h1 className="description">  a web developer, mountaineer, musician, luthier, &amp; beer drinker  </h1>
					</div>
				</div>
			</section>
		)
	}
}

module.exports = Intro;