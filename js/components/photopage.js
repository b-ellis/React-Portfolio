import React from 'react';
import { connect } from 'react-redux';

import actions from '../actions/index';

class PhotoPage extends React.Component{
	constructor(){
		super();
	}
	componentWillMount(){
		this.props.dispatch(actions.getPhoto());
	}
	render(){
		let photos = [];
		const photoArray = this.props.state.photos;
		if(this.props.state.photos != undefined){
			for(let i = 0; i < photoArray.length; i++){
				const img = <li key={i} className='photos'><img className='photo-image' src={photoArray[i]}/></li>;
				photos.push(img);
			}
		}
		return(
			<div className='photo-page'>
				<h1 className='photo-title'>photos</h1>
				<ul className='photo-list'>
					{photos}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	return{
		state
	}
} 

const Container = connect(mapStateToProps)(PhotoPage)

module.exports = Container;