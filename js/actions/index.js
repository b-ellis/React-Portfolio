import fetch from 'isomorphic-fetch';

const GET_PHOTO_SUCESS = 'GET_PHOTO_SUCESS';
const getPhotoSucess = (photos) => {
	return {
		type: GET_PHOTO_SUCESS,
		photos: photos
	}
}

const GET_PHOTO_ERROR = 'GET_PHOTO_ERROR';
const getPhotoError = (error) => {
	return {
		type: GET_PHOTO_ERROR,
		error: error
	}
}

const getPhoto = () => {
	return (dispatch) => {
		const url = '/photos';
		return fetch(url).then((res) => {
			if(res.status < 200 || res.status >= 300){
				const error = new Error(res.statusText);
				error.response = res;
				throw error;
			}
			return res;
		})
		.then(res => res.json())
		.then((data) => {
			return dispatch(
				getPhotoSucess(data)
			)
		})
		.catch((error) => {
			return dispatch(
				getPhotoError(error)
			)
		});
	}
}

exports.GET_PHOTO_SUCESS = GET_PHOTO_SUCESS;
exports.getPhotoSucess = getPhotoSucess;

exports.GET_PHOTO_ERROR = GET_PHOTO_ERROR;
exports.getPhotoError = getPhotoError;

exports.getPhoto = getPhoto;