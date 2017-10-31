import actions from '../actions/index';

const State = {}
const reducer = (state, action) => {
	state = state || State;

	switch(action.type){
		case actions.GET_PHOTO_SUCESS:
		const getPhotoState = Object.assign({}, state, {
			photos: action.photos
		});
		return getPhotoState;
	}
	return state;
}

module.exports = reducer;